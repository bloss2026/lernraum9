(() => {
    'use strict';

    function makeQuestion(words, progress, direction = 'en-de', random = Math.random) {
        if (words.length < 2) return null;
        const questionDirection = direction === 'mixed'
            ? (random() < 0.5 ? 'en-de' : 'de-en')
            : direction;
        const word = words[Math.floor(random() * words.length)];
        const isEnglishToGerman = questionDirection === 'en-de';
        const correct = isEnglishToGerman
            ? (word.studyGerman || word.german)
            : (word.studyEnglish || word.english);
        const others = words
            .filter(candidate => candidate.id !== word.id)
            .sort((left, right) => Number(Boolean(progress[right.id]?.difficult)) - Number(Boolean(progress[left.id]?.difficult)));
        const distinctAnswers = [...new Set(others
            .map(candidate => isEnglishToGerman
                ? (candidate.studyGerman || candidate.german)
                : (candidate.studyEnglish || candidate.english))
            .filter(answer => answer !== correct))].slice(0, 3);
        const choices = [correct, ...distinctAnswers];
        for (let index = choices.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(random() * (index + 1));
            [choices[index], choices[swapIndex]] = [choices[swapIndex], choices[index]];
        }

        return {
            word,
            prompt: isEnglishToGerman
                ? (word.studyEnglish || word.english)
                : (word.studyGerman || word.german),
            correct,
            choices,
            direction: questionDirection
        };
    }

    window.VocabularyQuiz = Object.freeze({ makeQuestion });
})();
