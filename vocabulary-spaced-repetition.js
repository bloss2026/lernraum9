(() => {
    'use strict';

    const initialProgress = () => ({
        repetitions: 0,
        intervalDays: 0,
        easeFactor: 2.5,
        dueAt: null,
        lapses: 0,
        correctCount: 0,
        seenCount: 0,
        lastReviewed: null,
        lastRating: null,
        difficult: false
    });

    function schedule(progress, rating, now = new Date()) {
        const next = { ...initialProgress(), ...progress };
        const reviewedAt = now.toISOString();
        next.seenCount += 1;
        next.lastReviewed = reviewedAt;
        next.lastRating = rating;

        if (rating === 'again') {
            next.repetitions = 0;
            next.intervalDays = 0;
            next.easeFactor = Math.max(1.3, next.easeFactor - 0.2);
            next.lapses += 1;
            next.difficult = true;
            next.dueAt = new Date(now.getTime() + 10 * 60 * 1000).toISOString();
        } else {
            next.correctCount += 1;
            if (rating === 'hard') {
                next.intervalDays = Math.max(1, Math.round((next.intervalDays || 1) * 1.2));
                next.easeFactor = Math.max(1.3, next.easeFactor - 0.15);
                next.difficult = true;
            } else if (rating === 'good') {
                next.intervalDays = next.repetitions === 0
                    ? 1
                    : next.repetitions === 1
                        ? 3
                        : Math.max(1, Math.round(next.intervalDays * next.easeFactor));
                next.difficult = false;
            } else if (rating === 'easy') {
                next.easeFactor = Math.min(3.2, next.easeFactor + 0.15);
                next.intervalDays = next.repetitions === 0
                    ? 3
                    : Math.max(2, Math.round((next.intervalDays || 1) * next.easeFactor * 1.3));
                next.difficult = false;
            } else {
                throw new Error('Unbekannte Bewertung.');
            }
            next.repetitions += 1;
            next.dueAt = new Date(now.getTime() + next.intervalDays * 86400000).toISOString();
        }

        return next;
    }

    function isDue(progress, now = new Date()) {
        return Boolean(progress?.seenCount > 0 && progress.dueAt && Date.parse(progress.dueAt) <= now.getTime());
    }

    window.VocabularySpacedRepetition = Object.freeze({ initialProgress, schedule, isDue });
})();
