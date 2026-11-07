(() => {
    'use strict';

    const projectUrl = 'https://hileygwqwkubltzdpvys.supabase.co';
    const publishableKey = 'sb_publishable_TVWX6K3FCW0oOL-ix9eoRg_bmsLV9jz';
    const sessionKey = 'lernraum9.supabase.session';

    function getAccessToken() {
        let session;
        try {
            session = JSON.parse(window.localStorage.getItem(sessionKey) || 'null');
        } catch (error) {
            throw new Error('Die gespeicherte Anmeldung ist beschädigt. Bitte melde dich erneut über das Dashboard an.');
        }
        if (!session?.access_token || !session?.user?.id) {
            throw new Error('Bitte melde dich über „Lernkonto“ in der Navigation oder auf dem Dashboard an.');
        }
        return { token: session.access_token, userId: session.user.id };
    }

    async function request(path, { method = 'GET', body, prefer } = {}) {
        const { token } = getAccessToken();
        const response = await fetch(`${projectUrl}/rest/v1/${path}`, {
            method,
            headers: {
                apikey: publishableKey,
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                ...(prefer ? { Prefer: prefer } : {})
            },
            ...(body === undefined ? {} : { body: JSON.stringify(body) })
        });
        const text = await response.text();
        let result = null;
        if (text) {
            try {
                result = JSON.parse(text);
            } catch (error) {
                throw new Error('Supabase hat eine ungültige Antwort gesendet.');
            }
        }
        if (!response.ok) {
            if (result?.code === 'PGRST205' || /schema cache|does not exist/i.test(result?.message || '')) {
                throw new Error('Die Vokabeltabellen fehlen noch. Bitte die SQL-Migration aus supabase/migrations ausführen.');
            }
            throw new Error(result?.message || result?.msg || result?.error_description || `Supabase-Fehler (${response.status}).`);
        }
        return result;
    }

    async function requestAll(path) {
        const rows = [];
        const pageSize = 1000;
        for (let offset = 0; ; offset += pageSize) {
            const page = await request(`${path}&limit=${pageSize}&offset=${offset}`);
            if (!Array.isArray(page)) throw new Error('Supabase hat eine ungültige Datenliste gesendet.');
            rows.push(...page);
            if (page.length < pageSize) return rows;
        }
    }

    async function load({ syncCore = true } = {}) {
        if (syncCore && window.LernraumCloud) await window.LernraumCloud.syncNow();
        const { userId } = getAccessToken();
        const [progress, settings, activity, quiz] = await Promise.all([
            requestAll(`vocabulary_progress?select=*&user_id=eq.${encodeURIComponent(userId)}`),
            request(`vocabulary_settings?select=daily_goal&user_id=eq.${encodeURIComponent(userId)}`),
            requestAll(`vocabulary_daily_activity?select=activity_date,reviewed_count&user_id=eq.${encodeURIComponent(userId)}&order=activity_date.asc`),
            requestAll(`vocabulary_quiz_results?select=id,word_id,mode,is_correct,created_at&user_id=eq.${encodeURIComponent(userId)}&order=created_at.asc`)
        ]);
        if (!Array.isArray(settings)) throw new Error('Supabase hat beschädigte Einstellungen gesendet.');
        const dailyGoal = settings.length ? Number(settings[0].daily_goal) : 10;
        if (![5, 10, 15, 20].includes(dailyGoal)) throw new Error('Das gespeicherte tägliche Lernziel ist ungültig.');
        return {
            progress,
            dailyGoal,
            activity,
            quiz
        };
    }

    async function saveProgress(wordId, progress) {
        const { userId } = getAccessToken();
        await request('vocabulary_progress?on_conflict=user_id%2Cword_id', {
            method: 'POST',
            prefer: 'resolution=merge-duplicates,return=minimal',
            body: {
                user_id: userId,
                word_id: wordId,
                repetitions: progress.repetitions,
                interval_days: progress.intervalDays,
                ease_factor: progress.easeFactor,
                due_at: progress.dueAt,
                lapses: progress.lapses,
                correct_count: progress.correctCount,
                seen_count: progress.seenCount,
                last_reviewed: progress.lastReviewed,
                last_rating: progress.lastRating,
                difficult: progress.difficult
            }
        });
    }

    async function saveQuizResult(wordId, mode, isCorrect) {
        const { userId } = getAccessToken();
        await request('vocabulary_quiz_results', {
            method: 'POST',
            prefer: 'return=minimal',
            body: { user_id: userId, word_id: wordId, mode, is_correct: isCorrect }
        });
    }

    async function recordActivity() {
        await request('rpc/record_vocabulary_activity', { method: 'POST', body: {} });
    }

    async function saveDailyGoal(goal) {
        const { userId } = getAccessToken();
        await request('vocabulary_settings?on_conflict=user_id', {
            method: 'POST',
            prefer: 'resolution=merge-duplicates,return=minimal',
            body: { user_id: userId, daily_goal: goal }
        });
    }

    window.VocabularySupabase = Object.freeze({
        load, saveProgress, saveQuizResult, recordActivity, saveDailyGoal
    });
})();
