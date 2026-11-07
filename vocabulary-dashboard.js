(() => {
    'use strict';

    function summarize(words, progress, activity, now = new Date()) {
        const entries = words.map(word => progress[word.id]).filter(Boolean);
        const mastered = entries.filter(entry => entry.repetitions >= 3 && entry.intervalDays >= 7 && !entry.difficult).length;
        const difficult = entries.filter(entry => entry.difficult).length;
        const due = entries.filter(entry => window.VocabularySpacedRepetition.isDue(entry, now)).length;
        const recentDays = Array.from({ length: 7 }, (_, index) => {
            const date = new Date(now);
            date.setDate(now.getDate() - (6 - index));
            const key = date.toISOString().slice(0, 10);
            return { date: key, count: Number(activity[key]?.reviewedCount || 0) };
        });
        const activeDates = new Set(Object.keys(activity).filter(date => Number(activity[date]?.reviewedCount || 0) > 0));
        let streak = 0;
        const today = now.toISOString().slice(0, 10);
        const yesterdayDate = new Date(now);
        yesterdayDate.setDate(now.getDate() - 1);
        let cursor = activeDates.has(today) ? today : yesterdayDate.toISOString().slice(0, 10);
        while (activeDates.has(cursor)) {
            streak += 1;
            const previous = new Date(`${cursor}T00:00:00`);
            previous.setDate(previous.getDate() - 1);
            cursor = previous.toISOString().slice(0, 10);
        }

        return {
            total: words.length,
            studied: entries.filter(entry => entry.seenCount > 0).length,
            mastered,
            due,
            difficult,
            percent: words.length ? Math.round((mastered / words.length) * 100) : 0,
            streak,
            recentDays
        };
    }

    window.VocabularyDashboard = Object.freeze({ summarize });
})();
