(() => {
    'use strict';

    function makeQuestion(words, progress, direction = 'en-de', random = Math.random) {
        if (words.length < 2) return null;
        const word = words[Math.floor(random() * words.length)];
        const isEnglishToGerman = direction === 'en-de';
        const correct = isEnglishToGerman ? word.german : word.english;
        const others = words
            .filter(candidate => candidate.id !== word.id)
            .sort((left, right) => Number(Boolean(progress[right.id]?.difficult)) - Number(Boolean(progress[left.id]?.difficult)));
        const distinctAnswers = [...new Set(others
            .map(candidate => isEnglishToGerman ? candidate.german : candidate.english)
            .filter(answer => answer !== correct))].slice(0, 3);
        const choices = [correct, ...distinctAnswers];
        for (let index = choices.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(random() * (index + 1));
            [choices[index], choices[swapIndex]] = [choices[swapIndex], choices[index]];
        }

        return {
            word,
            prompt: isEnglishToGerman ? word.english : word.german,
            correct,
            choices,
            direction
        };
    }

    window.VocabularyQuiz = Object.freeze({ makeQuestion });
})();
