(() => {
    'use strict';

    const projectUrl = 'https://hileygwqwkubltzdpvys.supabase.co';
    const publishableKey = 'sb_publishable_TVWX6K3FCW0oOL-ix9eoRg_bmsLV9jz';
    const sessionKey = 'lernraum9.supabase.session';
    const activeUserKey = 'lernraum9.supabase.active-user';
    const syncedKeys = ['chemieLernState', 'mathematikLearningState', 'lernraumFachFortschritte'];
    const localChangePrefix = 'lernraum9.supabase.changed.';
    const accountCachePrefix = 'lernraum9.supabase.account.';
    let session = null;
    let syncPromise = null;
    let syncAgain = false;
    let syncTimer = null;
    let state = { status: 'guest', email: '', message: '' };

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
        if (/email not confirmed/i.test(message)) return 'Bitte bestätige zuerst deine E-Mail-Adresse.';
        if (/user already registered/i.test(message)) return 'Für diese E-Mail-Adresse gibt es bereits ein Konto. Melde dich bitte an.';
        if (/password should be at least/i.test(message)) return 'Das Passwort ist zu kurz. Verwende mindestens 6 Zeichen.';
        if (/rate limit/i.test(message)) return 'Zu viele Versuche. Bitte warte kurz und versuche es erneut.';
        if (/learning_progress|schema cache/i.test(message)) return 'Die Lernstands-Datenbank ist noch nicht eingerichtet. Bitte zuerst die Supabase-Migration ausführen.';
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
        if (!session?.refresh_token) return null;
        const result = await request('/auth/v1/token?grant_type=refresh_token', {
            method: 'POST',
            body: JSON.stringify({ refresh_token: session.refresh_token })
        });
        saveSession({
            ...result,
            expires_at: Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600)
        });
        return session;
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

    async function upsertProgress(userId, key, value) {
        await request('/rest/v1/learning_progress?on_conflict=user_id%2Cstorage_key', {
            method: 'POST',
            headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
            body: JSON.stringify({
                user_id: userId,
                storage_key: key,
                value,
                updated_at: new Date().toISOString()
            })
        }, session.access_token);
    }

    async function performSync() {
        if (session?.user?.id) await prepareAccount(session.user.id);
        if (!navigator.onLine) {
            publishState({ status: 'offline', email: session?.user?.email || '', message: 'Offline. Änderungen bleiben auf diesem Gerät gespeichert.' });
            return;
        }

        const activeSession = await currentSession();
        if (!activeSession?.access_token || !activeSession.user?.id) {
            publishState({ status: 'guest', email: '', message: 'Melde dich an, um deinen Lernstand auf mehreren Geräten zu synchronisieren.' });
            return;
        }

        publishState({ status: 'syncing', email: activeSession.user.email || '', message: 'Lernstand wird synchronisiert …' });
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
        }

        publishState({ status: 'synced', email: activeSession.user.email || '', message: 'Lernstand ist synchronisiert.' });
    }

    function syncNow() {
        if (syncPromise) {
            syncAgain = true;
            return syncPromise;
        }
        syncPromise = performSync().catch(error => {
            publishState({
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
        window.clearTimeout(syncTimer);
        syncTimer = window.setTimeout(() => {
            syncNow().catch(error => console.error(`Der Lernstand "${key}" konnte nicht synchronisiert werden:`, error));
        }, 900);
    }

    async function signUp(email, password) {
        const redirectUrl = new URL('./', window.location.href).href;
        const result = await request(`/auth/v1/signup?redirect_to=${encodeURIComponent(redirectUrl)}`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        if (!result?.access_token) {
            publishState({
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
        signIn,
        signOut,
        syncNow,
        queueWrite
    };
    window.LernraumDB.setCloudReady(initialize());

    window.addEventListener('online', () => {
        if (session) syncNow().catch(error => console.error('Der Lernstand konnte nach der Verbindung nicht synchronisiert werden:', error));
    });
})();
