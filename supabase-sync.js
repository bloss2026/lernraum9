(() => {
    'use strict';

    const projectUrl = 'https://hileygwqwkubltzdpvys.supabase.co';
    const publishableKey = 'sb_publishable_TVWX6K3FCW0oOL-ix9eoRg_bmsLV9jz';
    const appUrl = 'https://bloss2026.github.io/lernraum9/';
    const sessionKey = 'lernraum9.supabase.session';
    const activeUserKey = 'lernraum9.supabase.active-user';
    const syncedKeys = ['chemieLernState', 'mathematikLearningState', 'lernraumFachFortschritte', 'lernraumUebungen'];
    const localChangePrefix = 'lernraum9.supabase.changed.';
    const accountCachePrefix = 'lernraum9.supabase.account.';
    const lastSyncedPrefix = 'lernraum9.supabase.last-synced.';
    const pendingKeysPrefix = 'lernraum9.supabase.pending.';
    const backupFormat = 'lernraum9-learning-backup';
    let session = null;
    let syncPromise = null;
    let syncAgain = false;
    let syncTimer = null;
    let state = { status: 'guest', email: '', message: '', lastSyncedAt: null, pendingChanges: 0 };

    function publishState(nextState) {
        state = { ...state, ...nextState };
        window.dispatchEvent(new CustomEvent('lernraum:cloud-state', { detail: { ...state } }));
    }

    function readStoredSession() {
        try {
            return JSON.parse(window.localStorage.getItem(sessionKey) || 'null');
        } catch (error) {
            console.warn('Die gespeicherte Anmeldung ist ungültig und wurde entfernt:', error);
            window.localStorage.removeItem(sessionKey);
            return null;
        }
    }

    function saveSession(nextSession) {
        session = nextSession;
        if (session) {
            window.localStorage.setItem(sessionKey, JSON.stringify(session));
        } else {
            window.localStorage.removeItem(sessionKey);
        }
    }

    function getErrorMessage(error) {
        const message = error && typeof error.message === 'string' ? error.message : '';
        if (/invalid login credentials/i.test(message)) return 'E-Mail-Adresse oder Passwort ist nicht richtig.';
        if (/invalid refresh token|refresh token not found|refresh_token_not_found/i.test(message)) return 'Deine Anmeldung ist abgelaufen. Bitte melde dich erneut an. Deine lokalen Lernstände bleiben erhalten.';
        if (/email not confirmed/i.test(message)) return 'Bitte bestätige zuerst deine E-Mail-Adresse.';
        if (/user already registered/i.test(message)) return 'Für diese E-Mail-Adresse gibt es bereits ein Konto. Melde dich bitte an.';
        if (/password should be at least/i.test(message)) return 'Das Passwort ist zu kurz. Verwende mindestens 6 Zeichen.';
        if (/rate limit/i.test(message)) return 'Zu viele Versuche. Bitte warte kurz und versuche es erneut.';
        if (/learning_progress_storage_key_check|check constraint.*storage_key|storage_key.*check constraint/i.test(message)) return 'Die Supabase-Datenbank benötigt noch die Migration 20261109161500_learning_progress_exercises.sql. Bitte führe sie im Supabase-Projekt aus.';
        if (/PGRST205|schema cache|relation .*learning_progress.*does not exist/i.test(message)) return 'Die Lernstands-Tabelle fehlt in Supabase. Bitte führe zuerst die Lernstands-Migrationen aus.';
        return message || 'Die Verbindung zum Lernkonto ist fehlgeschlagen.';
    }

    async function request(path, options = {}, accessToken = '') {
        const response = await fetch(`${projectUrl}${path}`, {
            ...options,
            headers: {
                apikey: publishableKey,
                'Content-Type': 'application/json',
                ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
                ...(options.headers || {})
            }
        });
        const body = await response.text();
        let result = null;
        if (body) {
            try {
                result = JSON.parse(body);
            } catch (error) {
                throw new Error('Der Lernserver hat eine ungültige Antwort gesendet.');
            }
        }
        if (!response.ok) {
            throw new Error(result?.msg || result?.message || result?.error_description || result?.error || `HTTP ${response.status}`);
        }
        return result;
    }

    async function refreshSession() {
        if (!session?.refresh_token) {
            saveSession(null);
            publishState({
                status: 'guest',
                email: '',
                message: 'Deine Anmeldung ist abgelaufen. Bitte melde dich erneut an. Deine lokalen Lernstände bleiben erhalten.'
            });
            return null;
        }
        try {
            const result = await request('/auth/v1/token?grant_type=refresh_token', {
                method: 'POST',
                body: JSON.stringify({ refresh_token: session.refresh_token })
            });
            saveSession({
                ...result,
                expires_at: Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600)
            });
            return session;
        } catch (error) {
            if (!/invalid refresh token|refresh token not found|refresh_token_not_found/i.test(error.message || '')) {
                throw error;
            }
            saveSession(null);
            publishState({
                status: 'guest',
                email: '',
                message: getErrorMessage(error)
            });
            return null;
        }
    }

    async function currentSession() {
        if (!session) return null;
        const expiresAt = Number(session.expires_at || 0);
        if (expiresAt && expiresAt < Math.floor(Date.now() / 1000) + 60) {
            return refreshSession();
        }
        return session;
    }

    function isPlainObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    function mergeValues(remoteValue, localValue) {
        if (Array.isArray(remoteValue) && Array.isArray(localValue)) {
            const values = new Map();
            [...remoteValue, ...localValue].forEach(value => values.set(JSON.stringify(value), value));
            return [...values.values()];
        }
        if (isPlainObject(remoteValue) && isPlainObject(localValue)) {
            const merged = { ...remoteValue };
            Object.keys(localValue).forEach(key => {
                merged[key] = key in remoteValue
                    ? mergeValues(remoteValue[key], localValue[key])
                    : localValue[key];
            });
            return merged;
        }
        if (typeof remoteValue === 'number' && typeof localValue === 'number') {
            return Math.max(remoteValue, localValue);
        }
        return localValue;
    }

    function localChangedAt(key) {
        if (!session?.user?.id) return 0;
        return Number(window.localStorage.getItem(`${localChangePrefix}${session.user.id}.${key}`) || 0);
    }

    function setLocalChangedAt(key, timestamp) {
        if (!session?.user?.id) return;
        window.localStorage.setItem(`${localChangePrefix}${session.user.id}.${key}`, String(timestamp));
    }

    function pendingKeys(userId = session?.user?.id) {
        if (!userId) return [];
        try {
            const keys = JSON.parse(window.localStorage.getItem(`${pendingKeysPrefix}${userId}`) || '[]');
            return Array.isArray(keys) ? keys.filter(key => syncedKeys.includes(key)) : [];
        } catch (error) {
            console.warn('Die Liste ausstehender Lernstandsänderungen ist ungültig:', error);
            return [];
        }
    }

    function setPending(key, isPending) {
        if (!session?.user?.id) return;
        const keys = new Set(pendingKeys());
        if (isPending) keys.add(key);
        else keys.delete(key);
        window.localStorage.setItem(`${pendingKeysPrefix}${session.user.id}`, JSON.stringify([...keys]));
    }

    function syncMetadata(userId = session?.user?.id) {
        if (!userId) return { lastSyncedAt: null, pendingChanges: 0 };
        const lastSyncedAt = window.localStorage.getItem(`${lastSyncedPrefix}${userId}`);
        return { lastSyncedAt, pendingChanges: pendingKeys(userId).length };
    }

    function publishSyncState(nextState) {
        publishState({ ...syncMetadata(), ...nextState });
    }

    function accountCacheKey(userId, key) {
        return `${accountCachePrefix}${userId}.${key}`;
    }

    async function saveAccountLocalCopy(userId) {
        for (const key of syncedKeys) {
            const value = await window.LernraumDB.getLocal(key);
            if (value !== null) {
                await window.LernraumDB.setLocal(accountCacheKey(userId, key), value);
            }
        }
    }

    async function prepareAccount(userId) {
        const previousUserId = window.localStorage.getItem(activeUserKey);
        if (previousUserId === userId) return;

        if (previousUserId) await saveAccountLocalCopy(previousUserId);

        let hasSavedAccountCopy = false;
        for (const key of syncedKeys) {
            if (await window.LernraumDB.getLocal(accountCacheKey(userId, key)) !== null) {
                hasSavedAccountCopy = true;
                break;
            }
        }

        if (previousUserId || hasSavedAccountCopy) {
            for (const key of syncedKeys) {
                const savedValue = await window.LernraumDB.getLocal(accountCacheKey(userId, key));
                await window.LernraumDB.setLocal(key, savedValue);
            }
        }

        window.localStorage.setItem(activeUserKey, userId);
    }

    async function deactivateAccount(userId) {
        if (!userId) return;
        await saveAccountLocalCopy(userId);
        for (const key of syncedKeys) {
            await window.LernraumDB.setLocal(key, null);
            window.localStorage.removeItem(`${localChangePrefix}${userId}.${key}`);
        }
        window.localStorage.removeItem(activeUserKey);
    }

    async function upsertProgress(userId, key, value, accessToken = session.access_token) {
        await request('/rest/v1/learning_progress?on_conflict=user_id%2Cstorage_key', {
            method: 'POST',
            headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
            body: JSON.stringify({
                user_id: userId,
                storage_key: key,
                value,
                updated_at: new Date().toISOString()
            })
        }, accessToken);
    }

    async function performSync() {
        if (session?.user?.id) await prepareAccount(session.user.id);
        if (!navigator.onLine) {
            publishSyncState({ status: 'offline', email: session?.user?.email || '', message: 'Offline. Änderungen bleiben auf diesem Gerät gespeichert.' });
            return;
        }

        const activeSession = await currentSession();
        if (!activeSession?.access_token || !activeSession.user?.id) {
            const message = state.status === 'guest' && /anmeldung ist abgelaufen/i.test(state.message)
                ? state.message
                : 'Melde dich an, um deinen Lernstand auf mehreren Geräten zu synchronisieren.';
            publishState({ status: 'guest', email: '', message });
            return;
        }

        publishSyncState({ status: 'syncing', email: activeSession.user.email || '', message: 'Lernstand wird synchronisiert …' });
        const rows = await request('/rest/v1/learning_progress?select=storage_key,value,updated_at', {
            method: 'GET'
        }, activeSession.access_token);
        const remoteByKey = new Map((Array.isArray(rows) ? rows : []).map(row => [row.storage_key, row]));
        const keys = new Set([...syncedKeys, ...remoteByKey.keys()]);

        for (const key of keys) {
            const localValue = await window.LernraumDB.getLocal(key);
            const remoteRow = remoteByKey.get(key);
            if (localValue === null && !remoteRow) continue;

            let value = localValue;
            if (remoteRow && localValue === null) {
                value = remoteRow.value;
            } else if (remoteRow && localValue !== null) {
                const localTimestamp = localChangedAt(key);
                const remoteTimestamp = Date.parse(remoteRow.updated_at) || 0;
                if (localTimestamp && localTimestamp > remoteTimestamp) {
                    value = localValue;
                } else if (localTimestamp && remoteTimestamp > localTimestamp) {
                    value = remoteRow.value;
                } else {
                    value = mergeValues(remoteRow.value, localValue);
                }
            }

            await window.LernraumDB.setLocal(key, value);
            await upsertProgress(activeSession.user.id, key, value);
            setLocalChangedAt(key, Date.now());
            setPending(key, false);
        }

        const lastSyncedAt = new Date().toISOString();
        window.localStorage.setItem(`${lastSyncedPrefix}${activeSession.user.id}`, lastSyncedAt);
        publishSyncState({ status: 'synced', email: activeSession.user.email || '', message: 'Lernstand ist synchronisiert.', lastSyncedAt });
    }

    function syncNow() {
        if (syncPromise) {
            syncAgain = true;
            return syncPromise;
        }
        syncPromise = performSync().catch(error => {
            publishSyncState({
                status: 'error',
                email: session?.user?.email || '',
                message: `Synchronisierung fehlgeschlagen: ${getErrorMessage(error)}`
            });
            throw error;
        }).finally(() => {
            syncPromise = null;
            if (syncAgain) {
                syncAgain = false;
                syncNow().catch(error => console.error('Der erneute Lernstand-Abgleich ist fehlgeschlagen:', error));
            }
        });
        return syncPromise;
    }

    function queueWrite(key) {
        if (!session || !syncedKeys.includes(key)) return;
        setLocalChangedAt(key, Date.now());
        setPending(key, true);
        if (state.status !== 'syncing') {
            publishSyncState({
                status: 'syncing',
                email: session.user?.email || '',
                message: 'Änderungen werden synchronisiert …'
            });
        }
        window.clearTimeout(syncTimer);
        syncTimer = window.setTimeout(() => {
            syncNow().catch(error => console.error(`Der Lernstand "${key}" konnte nicht synchronisiert werden:`, error));
        }, 900);
    }

    async function authenticatedOnlineSession() {
        if (!navigator.onLine) throw new Error('Für eine vollständige Sicherung oder Wiederherstellung ist eine Internetverbindung erforderlich.');
        const activeSession = await currentSession();
        if (!activeSession?.access_token || !activeSession.user?.id) {
            throw new Error('Bitte melde dich zuerst über „Mein Lernkonto“ an.');
        }
        return activeSession;
    }

    async function requestAllRows(path, accessToken) {
        const rows = [];
        const pageSize = 1000;
        for (let offset = 0; ; offset += pageSize) {
            const page = await request(`${path}&limit=${pageSize}&offset=${offset}`, {}, accessToken);
            if (!Array.isArray(page)) throw new Error('Supabase hat eine ungültige Sicherungsdatenliste gesendet.');
            rows.push(...page);
            if (page.length < pageSize) return rows;
        }
    }

    async function exportBackup() {
        await authenticatedOnlineSession();
        await syncNow();
        const activeSession = await authenticatedOnlineSession();
        const userId = activeSession.user.id;
        const core = {};
        for (const key of syncedKeys) {
            const value = await window.LernraumDB.getLocal(key);
            if (value !== null) core[key] = value;
        }
        const userFilter = `user_id=eq.${encodeURIComponent(userId)}`;
        const [progress, settings, activity, quiz] = await Promise.all([
            requestAllRows(`/rest/v1/vocabulary_progress?select=*&${userFilter}`, activeSession.access_token),
            request(`/rest/v1/vocabulary_settings?select=*&${userFilter}`, {}, activeSession.access_token),
            requestAllRows(`/rest/v1/vocabulary_daily_activity?select=*&${userFilter}&order=activity_date.asc`, activeSession.access_token),
            requestAllRows(`/rest/v1/vocabulary_quiz_results?select=*&${userFilter}&order=created_at.asc`, activeSession.access_token)
        ]);
        if (!Array.isArray(settings)) throw new Error('Supabase hat ungültige Vokabeleinstellungen gesendet.');
        return JSON.stringify({
            format: backupFormat,
            version: 1,
            exportedAt: new Date().toISOString(),
            core,
            vocabulary: { progress, settings, activity, quiz }
        }, null, 2);
    }

    function validateBackup(backup) {
        if (!isPlainObject(backup) || backup.format !== backupFormat || backup.version !== 1
            || !isPlainObject(backup.core) || !isPlainObject(backup.vocabulary)) {
            throw new Error('Die Datei ist keine gültige Lernraum-9-Sicherung oder hat ein nicht unterstütztes Format.');
        }
        if (Object.keys(backup.core).some(key => !syncedKeys.includes(key))) {
            throw new Error('Die Sicherung enthält einen unbekannten Lernstandsbereich.');
        }
        const { progress, settings, activity, quiz } = backup.vocabulary;
        if (!Array.isArray(progress) || !Array.isArray(settings) || settings.length > 1
            || !Array.isArray(activity) || !Array.isArray(quiz)
            || [...progress, ...settings, ...activity, ...quiz].some(row => !isPlainObject(row))) {
            throw new Error('Die Sicherungsdatei enthält ungültige Vokabeldaten.');
        }
    }

    async function upsertRows(table, rows, conflict, accessToken, prefer = 'resolution=merge-duplicates,return=minimal') {
        const batchSize = 100;
        for (let offset = 0; offset < rows.length; offset += batchSize) {
            await request(`/rest/v1/${table}?on_conflict=${encodeURIComponent(conflict)}`, {
                method: 'POST',
                headers: { Prefer: prefer },
                body: JSON.stringify(rows.slice(offset, offset + batchSize))
            }, accessToken);
        }
    }

    async function restoreBackup(backup) {
        validateBackup(backup);
        const activeSession = await authenticatedOnlineSession();
        const userId = activeSession.user.id;
        const remoteRows = await request('/rest/v1/learning_progress?select=storage_key,value,updated_at', {
            method: 'GET'
        }, activeSession.access_token);
        if (!Array.isArray(remoteRows)) throw new Error('Supabase hat ungültige Lernstandsdaten gesendet.');
        const remoteByKey = new Map(remoteRows.map(row => [row.storage_key, row]));

        for (const [key, importedValue] of Object.entries(backup.core)) {
            const remoteRow = remoteByKey.get(key);
            const value = remoteRow ? mergeValues(remoteRow.value, importedValue) : importedValue;
            await upsertProgress(userId, key, value, activeSession.access_token);
            await window.LernraumDB.setLocal(key, value);
            setLocalChangedAt(key, Date.now());
            setPending(key, false);
        }

        const vocabulary = backup.vocabulary;
        const progress = vocabulary.progress.map(row => ({ ...row, user_id: userId }));
        const settings = vocabulary.settings.map(row => ({ ...row, user_id: userId }));
        const activity = vocabulary.activity.map(row => ({ ...row, user_id: userId }));
        const quiz = vocabulary.quiz
            .filter(row => typeof row.id === 'string' && row.id)
            .map(row => ({ ...row, user_id: userId }));
        await upsertRows('vocabulary_progress', progress, 'user_id,word_id', activeSession.access_token);
        await upsertRows('vocabulary_settings', settings, 'user_id', activeSession.access_token);
        await upsertRows('vocabulary_daily_activity', activity, 'user_id,activity_date', activeSession.access_token);
        await upsertRows(
            'vocabulary_quiz_results',
            quiz,
            'id',
            activeSession.access_token,
            'resolution=ignore-duplicates,return=minimal'
        );

        const lastSyncedAt = new Date().toISOString();
        window.localStorage.setItem(`${lastSyncedPrefix}${userId}`, lastSyncedAt);
        publishSyncState({
            status: 'synced',
            email: activeSession.user.email || '',
            message: 'Sicherung wiederhergestellt und synchronisiert.',
            lastSyncedAt
        });
    }

    async function signUp(email, password) {
        const result = await request(`/auth/v1/signup?redirect_to=${encodeURIComponent(appUrl)}`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        if (!result?.access_token) {
            publishSyncState({
                status: 'confirmation',
                email,
                message: 'Bitte bestätige deine E-Mail-Adresse. Danach kannst du dich hier anmelden.'
            });
            return { confirmationRequired: true };
        }
        saveSession({
            ...result,
            expires_at: Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600)
        });
        await syncNow();
        return { confirmationRequired: false };
    }

    async function resendConfirmation(email) {
        await request(`/auth/v1/resend?redirect_to=${encodeURIComponent(appUrl)}`, {
            method: 'POST',
            body: JSON.stringify({ type: 'signup', email })
        });
        publishState({
            status: 'confirmation',
            email,
            message: 'Eine neue Bestätigungs-E-Mail wurde angefordert. Bitte verwende den neuesten Link.'
        });
    }

    async function signIn(email, password) {
        const result = await request('/auth/v1/token?grant_type=password', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        saveSession({
            ...result,
            expires_at: Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600)
        });
        await syncNow();
    }

    async function restoreSessionFromUrl() {
        const hash = new URLSearchParams(window.location.hash.slice(1));
        const accessToken = hash.get('access_token');
        const refreshToken = hash.get('refresh_token');
        if (!accessToken || !refreshToken) return null;

        const user = await request('/auth/v1/user', { method: 'GET' }, accessToken);
        const expiresIn = Number(hash.get('expires_in') || 3600);
        const restoredSession = {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_at: Math.floor(Date.now() / 1000) + expiresIn,
            user
        };
        saveSession(restoredSession);
        window.history.replaceState(null, document.title, `${window.location.pathname}${window.location.search}`);
        return restoredSession;
    }

    async function signOut() {
        const userId = session?.user?.id;
        try {
            const activeSession = await currentSession();
            if (activeSession?.access_token) {
                await request('/auth/v1/logout', { method: 'POST' }, activeSession.access_token);
            }
        } finally {
            try {
                await deactivateAccount(userId);
            } finally {
                saveSession(null);
                publishState({ status: 'guest', email: '', message: 'Abgemeldet. Der Lernstand bleibt auf diesem Gerät für dieses Konto gespeichert.' });
            }
        }
    }

    async function initialize() {
        session = await restoreSessionFromUrl() || readStoredSession();
        if (!session) {
            publishState({ status: 'guest', message: 'Melde dich an, um deinen Lernstand auf mehreren Geräten zu synchronisieren.' });
            return;
        }
        publishSyncState({});
        try {
            await syncNow();
        } catch (error) {
            console.warn('Der Lernstand konnte beim Start nicht synchronisiert werden:', error);
        }
    }

    window.LernraumCloud = {
        getState() {
            return { ...state };
        },
        getErrorMessage,
        signUp,
        resendConfirmation,
        signIn,
        signOut,
        syncNow,
        queueWrite,
        exportBackup,
        restoreBackup
    };
    window.LernraumDB.setCloudReady(initialize());

    window.addEventListener('online', () => {
        if (session) syncNow().catch(error => console.error('Der Lernstand konnte nach der Verbindung nicht synchronisiert werden:', error));
    });
})();
