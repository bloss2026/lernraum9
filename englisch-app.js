(() => {
    'use strict';

    const categories = window.EnglishExercises || [];
    const root = document.getElementById('englishApp');
    if (!root) return;

    const STORAGE_KEY = 'lernraum9.englisch.progress';
    const exercises = categories.flatMap(category => category.exercises.map(exercise => ({
        ...exercise,
        categoryId: category.id,
        categoryTitle: category.title
    })));
    const exerciseIds = new Set(exercises.map(exercise => exercise.id));

    let progress = {
        completed: [],
        attempted: [],
        studiedTopics: [],
        answerHistory: {}
    };
    let activeCategory = null;
    let round = null;
    let index = 0;
    let roundCorrect = new Set();
    let selectedChoice = '';
    let answerText = '';
    let feedback = null;
    let hintVisible = false;

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    function normalize(value) {
        return String(value || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('en');
    }

    function answerIsCorrect(exercise, value) {
        if (exercise.type === 'choice') return value === exercise.answer;
        if (exercise.type === 'fill') return exercise.strictCase
            ? String(value).trim() === exercise.answer
            : normalize(value) === normalize(exercise.answer);
        return exercise.validAnswers.some(answer => normalize(answer) === normalize(value));
    }

    function loadProgress() {
        try {
            const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null');
            if (!saved || typeof saved !== 'object') return;
            progress.completed = Array.isArray(saved.completed) ? saved.completed.filter(id => exerciseIds.has(id)) : [];
            progress.attempted = Array.isArray(saved.attempted) ? saved.attempted.filter(id => exerciseIds.has(id)) : [];
            progress.studiedTopics = Array.isArray(saved.studiedTopics) ? saved.studiedTopics.filter(id => categories.some(category => category.id === id)) : [];
            progress.answerHistory = saved.answerHistory && typeof saved.answerHistory === 'object' ? saved.answerHistory : {};
        } catch (error) {
            console.error('Der Englisch-Lernstand konnte nicht geladen werden:', error);
        }
    }

    function persistProgress() {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            console.error('Der Englisch-Lernstand konnte nicht gespeichert werden:', error);
        }

        if (!window.LernraumDB || typeof window.LernraumDB.update !== 'function') return;
        window.LernraumDB.update('lernraumUebungen', state => {
            const subjects = state && typeof state === 'object' && state.subjects ? state.subjects : {};
            const current = subjects.englisch && typeof subjects.englisch === 'object' ? subjects.englisch : {};
            const available = new Set(Array.isArray(current.available) ? current.available : []);
            const completed = new Set(Array.isArray(current.completed) ? current.completed : []);
            const attempted = new Set(Array.isArray(current.attempted) ? current.attempted : []);
            const studiedTopics = new Set(Array.isArray(current.studiedTopics) ? current.studiedTopics : []);
            exerciseIds.forEach(id => available.add(id));
            progress.completed.forEach(id => completed.add(id));
            progress.attempted.forEach(id => attempted.add(id));
            progress.studiedTopics.forEach(id => studiedTopics.add(id));
            return {
                ...state,
                subjects: {
                    ...subjects,
                    englisch: {
                        ...current,
                        available: [...available],
                        completed: [...completed],
                        attempted: [...attempted],
                        studiedTopics: [...studiedTopics],
                        answerHistory: progress.answerHistory
                    }
                }
            };
        }).catch(error => console.error('Der Englisch-Fortschritt konnte nicht synchronisiert werden:', error));
    }

    function openTopic(category) {
        activeCategory = category;
        if (!progress.studiedTopics.includes(category.id)) {
            progress.studiedTopics.push(category.id);
            persistProgress();
        }
        renderTopic();
    }

    function renderTopic() {
        const category = activeCategory;
        const attempted = category.exercises.filter(exercise => progress.attempted.includes(exercise.id)).length;
        const completed = category.exercises.filter(exercise => progress.completed.includes(exercise.id)).length;
        root.innerHTML = `
            <section class="english-learn">
                <div class="english-session-top">
                    <button type="button" class="english-text-button" data-action="home">← Themenübersicht</button>
                    <span>${completed}/${category.exercises.length} Aufgaben richtig gelöst</span>
                </div>
                <article class="english-topic-card">
                    <span class="english-eyebrow">${category.icon} ${category.title}</span>
                    <h1>${category.title}</h1>
                    <p class="english-description">${category.description}</p>
                    <div class="english-learning-path" aria-label="Lernpfad">
                        <span class="is-active"><strong>1</strong>Einführung lesen</span>
                        <span><strong>2</strong>Merksätze merken</span>
                        <span><strong>3</strong>In Übungen anwenden</span>
                    </div>
                    <div class="english-topic-grid">
                        <section>
                            <h2>Einführung</h2>
                            <p>${category.lesson.overview}</p>
                        </section>
                        <section>
                            <h2>Merksätze</h2>
                            <ul>${category.lesson.points.map(point => `<li>${escapeHTML(point)}</li>`).join('')}</ul>
                        </section>
                    </div>
                    <div class="english-example-grid">
                        ${category.lesson.examples.map(([text, label]) => `<article><strong>${escapeHTML(label)}</strong><p>${escapeHTML(text)}</p></article>`).join('')}
                    </div>
                    <p class="english-progress-note">${attempted}/${category.exercises.length} Aufgaben bearbeitet. Dein Fortschritt wird auf diesem Gerät und mit dem Lernkonto gespeichert.</p>
                    <button type="button" class="english-button english-button-primary" data-action="start">Mit den Übungen beginnen</button>
                </article>
            </section>
        `;
    }

    function startRound() {
        round = [...activeCategory.exercises].sort(() => Math.random() - 0.5);
        index = 0;
        roundCorrect = new Set();
        selectedChoice = '';
        answerText = '';
        feedback = null;
        hintVisible = false;
        renderExercise();
    }

    function renderExercise() {
        if (!round || index >= round.length) {
            renderSummary();
            return;
        }
        const exercise = round[index];
        const percent = Math.round(index / round.length * 100);
        const input = exercise.type === 'choice'
            ? `<div class="english-choice-grid">${exercise.options.map(option => `<button type="button" class="english-choice ${selectedChoice === option ? 'is-selected' : ''}" data-choice="${escapeHTML(option)}">${escapeHTML(option)}</button>`).join('')}</div>`
            : `<label class="english-answer-label">${exercise.type === 'rewrite' ? 'Deine Formulierung' : 'Deine Antwort'}<textarea class="english-textarea" data-answer rows="3">${escapeHTML(answerText)}</textarea></label>`;
        root.innerHTML = `
            <section class="english-learn english-session">
                <div class="english-session-top">
                    <button type="button" class="english-text-button" data-action="topic">← Thema</button>
                    <span>${activeCategory.title}</span>
                </div>
                <div class="english-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div>
                <div class="english-count">Aufgabe ${index + 1} von ${round.length}</div>
                <article class="english-question-card">
                    <span class="english-eyebrow">${exercise.categoryTitle}</span>
                    <h2>${escapeHTML(exercise.prompt)}</h2>
                    ${exercise.sentence ? `<p class="english-sentence">${escapeHTML(exercise.sentence)}</p>` : ''}
                    ${input}
                    <div class="english-actions">
                        <button type="button" class="english-button english-button-light" data-action="hint">${hintVisible ? 'Tipp ausblenden' : 'Tipp anzeigen'}</button>
                        ${feedback ? '' : '<button type="button" class="english-button english-button-primary" data-action="check">Antwort prüfen</button>'}
                    </div>
                    ${hintVisible ? `<p class="english-hint"><strong>Tipp:</strong> ${escapeHTML(exercise.tip)}</p>` : ''}
                    ${feedback ? `
                        <div class="english-feedback ${feedback.correct ? 'is-correct' : 'is-incorrect'}" role="status">
                            <strong>${feedback.correct ? 'Richtig!' : 'Noch nicht ganz.'}</strong>
                            <p>${escapeHTML(feedback.explanation)}</p>
                        </div>
                        <div class="english-actions">
                            ${!feedback.correct ? '<button type="button" class="english-button english-button-light" data-action="retry">Noch einmal versuchen</button>' : ''}
                            ${feedback.correct ? `<button type="button" class="english-button english-button-primary" data-action="next">${index === round.length - 1 ? 'Lernrunde beenden' : 'Nächste Aufgabe'} →</button>` : ''}
                        </div>
                    ` : ''}
                </article>
            </section>
        `;
    }

    function renderSummary() {
        const completed = roundCorrect.size;
        const percent = round.length ? Math.round(completed / round.length * 100) : 0;
        root.innerHTML = `
            <section class="english-learn english-summary">
                <span class="english-eyebrow">LERNRUNDE BEENDET</span>
                <h1>Gut gemacht!</h1>
                <p>${completed} von ${round.length} Aufgaben sind in dieser Runde richtig gelöst.</p>
                <strong class="english-result">${percent} % Erfolgsquote</strong>
                <div class="english-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div>
                <p>Dein Lernstand ist auf diesem Gerät und bei Anmeldung mit deinem Lernkonto gespeichert.</p>
                <div class="english-actions">
                    <button type="button" class="english-button english-button-primary" data-action="topic">Zum Thema</button>
                    <button type="button" class="english-button english-button-light" data-action="home">Zur Themenübersicht</button>
                </div>
            </section>
        `;
    }

    function collectAnswer(exercise) {
        if (exercise.type === 'choice') return selectedChoice;
        return root.querySelector('[data-answer]')?.value || answerText;
    }

    loadProgress();
    root.innerHTML = `
        <section class="english-learn">
            <div class="english-hero">
                <a class="english-back" href="./englisch.html">← Englisch</a>
                <span class="english-eyebrow">ENGLISCH · KLASSE 9</span>
                <h1>Englisch lernen und anwenden</h1>
                <p>Wörter werden in Sätzen, Texten und eigenen Formulierungen gebraucht – für echten Lernfortschritt.</p>
            </div>
            <div class="english-section-heading"><h2>Deine Lernbereiche</h2><span>${exercises.length} Übungen</span></div>
            <div class="english-topic-grid english-topic-overview">
                ${categories.map(category => {
                    const done = category.exercises.filter(exercise => progress.completed.includes(exercise.id)).length;
                    const percent = Math.round(done / category.exercises.length * 100);
                    return `<button type="button" class="english-topic-button" data-category="${category.id}">
                        <span>${category.icon}</span>
                        <strong>${category.title}</strong>
                        <small>${category.description}</small>
                        <span class="english-topic-count">${done}/${category.exercises.length} richtig gelöst</span>
                        <div class="english-progress-track"><span style="width:${percent}%"></span></div>
                        <span class="english-topic-link">Lernbereich öffnen →</span>
                    </button>`;
                }).join('')}
            </div>
        </section>
    `;

    root.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;
        if (button.dataset.category) {
            openTopic(categories.find(category => category.id === button.dataset.category));
            return;
        }
        if (button.dataset.choice) {
            selectedChoice = button.dataset.choice;
            renderExercise();
            return;
        }
        const action = button.dataset.action;
        if (action === 'home') {
            window.location.reload();
        } else if (action === 'topic') {
            renderTopic();
        } else if (action === 'start') {
            startRound();
        } else if (action === 'hint') {
            hintVisible = !hintVisible;
            renderExercise();
        } else if (action === 'check') {
            const exercise = round[index];
            const value = collectAnswer(exercise);
            const correct = answerIsCorrect(exercise, value);
            if (correct) roundCorrect.add(exercise.id);
            if (!progress.attempted.includes(exercise.id)) progress.attempted.push(exercise.id);
            if (correct && !progress.completed.includes(exercise.id)) progress.completed.push(exercise.id);
            progress.answerHistory[exercise.id] = [
                ...(progress.answerHistory[exercise.id] || []),
                { answer: String(Array.isArray(value) ? value.join(' ') : value), correct, at: new Date().toISOString() }
            ];
            feedback = { correct, explanation: exercise.explanation };
            persistProgress();
            renderExercise();
        } else if (action === 'retry') {
            feedback = null;
            selectedChoice = '';
            answerText = '';
            renderExercise();
        } else if (action === 'next') {
            index += 1;
            feedback = null;
            selectedChoice = '';
            answerText = '';
            hintVisible = false;
            renderExercise();
        }
    });

    root.addEventListener('input', event => {
        if (event.target.matches('[data-answer]')) {
            answerText = event.target.value;
        }
    });
})();
