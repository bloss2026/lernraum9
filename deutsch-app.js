(() => {
    'use strict';

    const STORAGE_KEY = 'lernraum9.deutsch.progress';
    const categories = window.DeutschExercises || [];
    const exercises = categories.flatMap(category =>
        category.exercises.map(exercise => ({ ...exercise, categoryId: category.id, categoryTitle: category.title }))
    );

    function normalizeAnswer(value) {
        return String(value || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('de-DE');
    }

    function matchesAnswer(value, validAnswers) {
        return validAnswers.some(answer => normalizeAnswer(answer) === normalizeAnswer(value));
    }

    window.DeutschApp = { normalizeAnswer, matchesAnswer, isCorrect: answerIsCorrect };

    if (typeof document === 'undefined') return;
    const root = document.getElementById('deutschApp');
    if (!root || !categories.length) return;

    let progress = { completed: [] };
    let storageError = '';
    let round = null;
    let hintVisible = false;
    let feedback = null;
    let selectedChoice = '';
    let selectedWords = [];
    let selectedCards = [];

    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        const parsed = saved ? JSON.parse(saved) : null;
        if (parsed && Array.isArray(parsed.completed)) {
            progress = { completed: parsed.completed.filter(id => exercises.some(exercise => exercise.id === id)) };
        }
    } catch (error) {
        storageError = 'Dein gespeicherter Lernstand konnte nicht geladen werden. Neue Fortschritte bleiben möglicherweise nicht erhalten.';
        console.error('Der Deutsch-Lernstand konnte nicht geladen werden:', error);
    }

    function persistProgress() {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
            storageError = '';
        } catch (error) {
            storageError = 'Dein Lernfortschritt konnte nicht gespeichert werden. Prüfe bitte den verfügbaren Speicherplatz.';
            console.error('Der Deutsch-Lernstand konnte nicht gespeichert werden:', error);
        }
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    function formatText(value) {
        return escapeHTML(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    }

    function shuffle(items) {
        const result = [...items];
        for (let index = result.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
        }
        return result;
    }

    function renderTopicDetail(category) {
        if (!category) return;
        const lesson = category.lesson || {
            overview: category.theory || category.description,
            focusPoints: [category.description],
            examples: [{ title: category.title, text: category.theory || category.description }]
        };
        const done = category.exercises.filter(exercise => progress.completed.includes(exercise.id)).length;
        root.innerHTML = `
            <section class="deutsch-session deutsch-topic-detail">
                <div class="deutsch-session-top">
                    <button class="deutsch-text-button" type="button" data-action="home">← Themenübersicht</button>
                    <span>${escapeHTML(category.title)}</span>
                </div>
                <article class="deutsch-question-card deutsch-topic-card-detail">
                    <span class="deutsch-question-topic">${escapeHTML(category.icon)} ${escapeHTML(category.title)}</span>
                    <h2>${escapeHTML(category.title)}</h2>
                    <p class="deutsch-topic-detail-description">${escapeHTML(category.description)}</p>
                    <div class="deutsch-topic-meta">
                        <span>${done}/${category.exercises.length} bearbeitet</span>
                        <span>7 Themen · ${category.exercises.length} Aufgaben</span>
                    </div>
                    <div class="deutsch-topic-feature-grid">
                        <div class="deutsch-topic-feature">
                            <h3>Kurz erklärt</h3>
                            <p>${escapeHTML(lesson.overview)}</p>
                        </div>
                        <div class="deutsch-topic-feature">
                            <h3>Merksätze</h3>
                            <ul>
                                ${lesson.focusPoints.map(point => `<li>${escapeHTML(point)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="deutsch-example-grid">
                        ${lesson.examples.map(example => `
                            <article class="deutsch-example-card">
                                <strong>${escapeHTML(example.title)}</strong>
                                <p>${escapeHTML(example.text)}</p>
                            </article>
                        `).join('')}
                    </div>
                    <div class="deutsch-question-actions">
                        <button class="deutsch-button deutsch-button-primary" type="button" data-action="start-category" data-category="${category.id}">Übungen starten</button>
                        <button class="deutsch-button deutsch-button-light" type="button" data-action="home">Zurück</button>
                    </div>
                </article>
            </section>
        `;
    }

    function renderHome() {
        round = null;
        const completed = new Set(progress.completed);
        root.innerHTML = `
            <section class="portal-hero portal-subject-hero deutsch-hero">
                <a class="portal-back-link" href="./index.html">← Dashboard</a>
                <span class="pill">📖 SPRACHEN · KLASSE 9 · HAUPTSCHULE / WERKREALSCHULE</span>
                <h1>Deutsch lernen</h1>
                <p>Trainiere Grammatik, Rechtschreibung und deinen Ausdruck mit Beispielen aus Schule, Praktikum, Sport und Alltag.</p>
                <div class="deutsch-hero-actions">
                    <a class="deutsch-button deutsch-button-light" href="./deutsch-themen.html">🗂️ Themenkarte</a>
                </div>
            </section>
            <section class="deutsch-overview" aria-labelledby="deutschOverviewTitle">
                <div class="deutsch-section-heading">
                    <div><span class="deutsch-eyebrow">DEINE LERNBEREICHE</span><h2 id="deutschOverviewTitle">Womit möchtest du starten?</h2></div>
                    <span class="deutsch-total">${completed.size} von ${exercises.length} Aufgaben geschafft</span>
                </div>
                ${storageError ? `<p class="deutsch-storage-warning" role="status">${escapeHTML(storageError)}</p>` : ''}
                <div class="deutsch-topic-grid">
                    ${categories.map(category => {
                        const done = category.exercises.filter(exercise => completed.has(exercise.id)).length;
                        const percent = Math.round(done / category.exercises.length * 100);
                        return `
                            <button class="deutsch-topic-card" type="button" data-category="${category.id}">
                                <span class="deutsch-topic-icon" aria-hidden="true">${category.icon}</span>
                                <span class="deutsch-topic-count">${done}/${category.exercises.length} Aufgaben</span>
                                <strong>${escapeHTML(category.title)}</strong>
                                <span class="deutsch-topic-description">${escapeHTML(category.description)}</span>
                                <span class="deutsch-progress-track" role="progressbar" aria-label="Fortschritt ${escapeHTML(category.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></span>
                                <span class="deutsch-topic-link">Thema ansehen →</span>
                            </button>`;
                    }).join('')}
                </div>
            </section>
            <footer class="deutsch-footer">Dein Fortschritt wird auf diesem Gerät gespeichert.</footer>
        `;
    }

    function startRound(items, title, options = {}) {
        if (!items.length) return;
        round = {
            items,
            title,
            index: 0,
            mistakes: new Set(),
            correct: new Set(),
            solved: new Set(),
            mode: options.mode || 'category',
            maxTasks: options.maxTasks || items.length
        };
        hintVisible = false;
        feedback = null;
        selectedChoice = '';
        selectedWords = [];
        selectedCards = [];
        renderExercise();
    }

    function startTopicRound(category, maxTasks = 30) {
        if (!category || !Array.isArray(category.exercises) || category.exercises.length === 0) {
            console.error('Für dieses Deutsch-Thema sind keine Übungen vorhanden.');
            return;
        }
        const items = shuffle(category.exercises)
            .slice(0, Math.min(maxTasks, 30))
            .map(exercise => ({
                ...exercise,
                categoryId: category.id,
                categoryTitle: category.title
            }));
        startRound(items, category.title, {
            mode: 'topic-round',
            maxTasks: items.length
        });
    }

    function renderQuestionInput(exercise) {
        if (exercise.type === 'multiple-choice') {
            return `<div class="deutsch-choice-grid">${exercise.options.map(option => `
                <button class="deutsch-choice ${selectedChoice === option ? 'is-selected' : ''}" type="button" data-choice="${escapeHTML(option)}" aria-pressed="${selectedChoice === option}">
                    <span class="deutsch-choice-letter" aria-hidden="true">${String.fromCharCode(65 + exercise.options.indexOf(option))}</span>${escapeHTML(option)}
                </button>`).join('')}</div>`;
        }

        if (exercise.type === 'word-click') {
            return `<p class="deutsch-word-instruction">Wähle die passenden Wörter im Satz aus.</p><div class="deutsch-word-row">${exercise.tokens.map((token, index) => `
                <button class="deutsch-word ${selectedWords.includes(index) ? 'is-selected' : ''}" type="button" data-word="${index}" aria-pressed="${selectedWords.includes(index)}">${escapeHTML(token)}</button>`).join('')}</div>`;
        }

        if (exercise.type === 'dropdown') {
            const answers = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
            let blankIndex = 0;
            const sentence = exercise.sentence.replace(/\{\{blank\d*\}\}/g, () => {
                const current = blankIndex;
                blankIndex += 1;
                const choices = Array.isArray(exercise.choices[current]) ? exercise.choices[current] : exercise.choices;
                return `<label class="deutsch-inline-select"><span class="deutsch-sr-only">Lücke ${current + 1}</span><select data-blank="${current}"><option value="">Bitte wählen</option>${choices.map(choice => `<option value="${escapeHTML(choice)}">${escapeHTML(choice)}</option>`).join('')}</select></label>`;
            });
            return `<p class="deutsch-fill-sentence">${sentence}</p>`;
        }

        if (exercise.type === 'fill-in') {
            const sentence = escapeHTML(exercise.sentence).replace('___', '<input class="deutsch-inline-input" type="text" data-answer-input autocomplete="off" aria-label="Fehlendes Wort">');
            return `<p class="deutsch-fill-sentence">${sentence}</p>`;
        }

        if (exercise.type === 'rewrite' || exercise.type === 'error-correction') {
            const initialText = exercise.type === 'error-correction' ? exercise.sentence : '';
            return `<label class="deutsch-answer-label" for="deutschWrittenAnswer">${exercise.type === 'error-correction' ? 'Korrigiere den Satz direkt:' : 'Deine Formulierung:'}</label>
                <textarea class="deutsch-textarea" id="deutschWrittenAnswer" data-answer-input rows="3" placeholder="${exercise.type === 'error-correction' ? '' : 'Schreibe hier deinen ganzen Satz …'}">${escapeHTML(initialText)}</textarea>`;
        }

        if (exercise.type === 'sentence-builder') {
            return `<p class="deutsch-word-instruction">Tippe die Wortkarten in der richtigen Reihenfolge an. Deine Satzfolge:</p>
                <div class="deutsch-built-sentence" aria-live="polite">${selectedCards.map(index => `<span>${escapeHTML(exercise.cards[index])}</span>`).join('') || '<span class="deutsch-empty-build">Noch keine Wortkarten gewählt</span>'}</div>
                <div class="deutsch-word-row">${exercise.cards.map((card, index) => `
                    <button class="deutsch-word ${selectedCards.includes(index) ? 'is-used' : ''}" type="button" data-card="${index}" ${selectedCards.includes(index) ? 'disabled' : ''}>${escapeHTML(card)}</button>`).join('')}
                </div><button class="deutsch-button deutsch-button-light deutsch-reset-builder" type="button" data-action="reset-builder">Satz zurücksetzen</button>`;
        }

        return '';
    }

    function renderFeedback() {
        if (!feedback) return '';
        const statusClass = feedback.correct ? 'deutsch-feedback-correct' : 'deutsch-feedback-incorrect';
        const comparison = feedback.showComparison ? `
            <div class="deutsch-comparison">
                <div><strong>Deine Antwort</strong><span>${escapeHTML(feedback.userAnswer || '—')}</span></div>
                <div><strong>Musterlösung</strong><span>${escapeHTML(feedback.modelAnswer)}</span></div>
            </div>` : '';
        return `<div class="deutsch-feedback ${statusClass}" role="status">
            <strong>${feedback.correct ? 'Richtig!' : 'Noch nicht ganz.'}</strong>
            <p>${escapeHTML(feedback.explanation)}</p>${comparison}
        </div>`;
    }

    function renderExercise() {
        if (!round || round.index >= round.items.length) {
            renderRoundSummary();
            return;
        }
        const exercise = round.items[round.index];
        const category = categories.find(item => item.id === exercise.categoryId);
        const totalTasks = round.mode === 'topic-round' ? round.maxTasks : round.items.length;
        const percent = Math.round((round.index / totalTasks) * 100);
        const theoryBlock = category && category.theory ? `
            <div class="deutsch-theory-box">
                <h3>Regel und Erklärung</h3>
                <p>${escapeHTML(category.theory)}</p>
            </div>` : '';
        root.innerHTML = `
            <section class="deutsch-session">
                <div class="deutsch-session-top">
                    <button class="deutsch-text-button" type="button" data-action="home">← Themenübersicht</button>
                    <span>${escapeHTML(round.title)}</span>
                </div>
                <div class="deutsch-question-progress" role="progressbar" aria-label="Rundenfortschritt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div>
                <div class="deutsch-session-count">Aufgabe ${round.index + 1} von ${totalTasks} <span>${round.solved.size} richtig</span></div>
                ${theoryBlock}
                <article class="deutsch-question-card">
                    <span class="deutsch-question-topic">${escapeHTML(exercise.categoryTitle || round.title)}</span>
                    <h2>${formatText(exercise.prompt)}</h2>
                    ${exercise.question ? `<p class="deutsch-question-text">${escapeHTML(exercise.question)}</p>` : ''}
                    <div class="deutsch-input-area">${renderQuestionInput(exercise)}</div>
                    <div class="deutsch-question-actions">
                        <button class="deutsch-button deutsch-button-light" type="button" data-action="hint" aria-expanded="${hintVisible}">${hintVisible ? 'Tipp ausblenden' : 'Tipp anzeigen'}</button>
                        ${feedback ? '' : `<button class="deutsch-button deutsch-button-primary" type="button" data-action="check">Antwort prüfen</button>`}
                    </div>
                    ${hintVisible ? `<p class="deutsch-hint"><strong>Tipp:</strong> ${escapeHTML(exercise.tip || exercise.hint)}</p>` : ''}
                    ${renderFeedback()}
                    ${feedback ? `<div class="deutsch-question-actions deutsch-after-feedback">
                        ${feedback.correct ? '' : '<button class="deutsch-button deutsch-button-light" type="button" data-action="retry">Noch einmal versuchen</button>'}
                        ${round.mode === 'topic-round'
                            ? (feedback.correct ? `<button class="deutsch-button deutsch-button-primary" type="button" data-action="next">${round.index === round.items.length - 1 ? 'Runde beenden' : 'Nächste Aufgabe'} →</button>` : '')
                            : `<button class="deutsch-button deutsch-button-primary" type="button" data-action="next">${round.index === round.items.length - 1 ? 'Runde beenden' : 'Weiter'} →</button>`}
                    </div>` : ''}
                </article>
            </section>
        `;
    }

    function renderRoundSummary() {
        const missed = [...round.mistakes];
        const correctCount = round.solved.size;
        const total = round.items.length;
        root.innerHTML = `
            <section class="deutsch-session deutsch-round-summary">
                <span class="deutsch-eyebrow">RUNDE BEENDET</span>
                <h1>Gut gemacht!</h1>
                <p>Du hast ${correctCount} von ${total} Aufgaben richtig gelöst. ${missed.length ? `${missed.length} Aufgabe${missed.length === 1 ? '' : 'n'} kannst du gezielt wiederholen.` : 'Diesmal gab es keine Fehler.'}</p>
                <div class="deutsch-summary-actions">
                    ${missed.length ? '<button class="deutsch-button deutsch-button-primary" type="button" data-action="repeat-mistakes">Fehler noch einmal üben</button>' : ''}
                    <button class="deutsch-button deutsch-button-light" type="button" data-action="home">Zur Themenübersicht</button>
                </div>
            </section>`;
    }

    function collectAnswer(exercise) {
        if (exercise.type === 'multiple-choice') return selectedChoice;
        if (exercise.type === 'word-click') return selectedWords;
        if (exercise.type === 'dropdown') {
            return [...root.querySelectorAll('[data-blank]')].map(select => select.value);
        }
        if (exercise.type === 'fill-in' || exercise.type === 'rewrite' || exercise.type === 'error-correction') {
            return root.querySelector('[data-answer-input]')?.value || '';
        }
        if (exercise.type === 'sentence-builder') return selectedCards;
        return '';
    }

    function answerIsCorrect(exercise, value) {
        if (exercise.type === 'multiple-choice') return value === exercise.answer;
        if (exercise.type === 'word-click' || exercise.type === 'sentence-builder') {
            const expected = exercise.type === 'word-click' ? exercise.correctIndices : exercise.correctOrder;
            return Array.isArray(value) && value.length === expected.length && value.every((item, index) => item === expected[index]);
        }
        if (exercise.type === 'dropdown') {
            const expected = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
            return value.length === expected.length && value.every((answer, index) => answer === expected[index]);
        }
        if (exercise.type === 'fill-in') {
            return exercise.strictCase
                ? String(value).trim() === exercise.answer
                : normalizeAnswer(value) === normalizeAnswer(exercise.answer);
        }
        return matchesAnswer(value, exercise.validAnswers);
    }

    function displayAnswer(exercise, value) {
        if (Array.isArray(value)) {
            if (exercise.type === 'word-click') return value.map(index => exercise.tokens[index]).join(' ');
            if (exercise.type === 'sentence-builder') return value.map(index => exercise.cards[index]).join(' ');
            return value.join(' · ');
        }
        return String(value);
    }

    function modelAnswer(exercise) {
        if (exercise.type === 'multiple-choice') return exercise.answer;
        if (exercise.type === 'word-click') return exercise.correctIndices.map(index => exercise.tokens[index]).join(' ');
        if (exercise.type === 'sentence-builder') return exercise.correctOrder.map(index => exercise.cards[index]).join(' ');
        if (exercise.type === 'dropdown') return (Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer]).join(' · ');
        if (exercise.type === 'fill-in') return exercise.answer;
        return exercise.validAnswers[0];
    }

    function checkCurrentAnswer() {
        const exercise = round.items[round.index];
        const value = collectAnswer(exercise);
        const correct = answerIsCorrect(exercise, value);
        if (correct) {
            round.correct.add(exercise.id);
            round.solved.add(round.index);
            if (!progress.completed.includes(exercise.id)) {
                progress.completed.push(exercise.id);
                persistProgress();
            }
        } else {
            round.mistakes.add(exercise.id);
        }
        const compare = exercise.type === 'rewrite' || exercise.type === 'error-correction';
        feedback = {
            correct,
            explanation: exercise.explanation,
            showComparison: !correct && compare,
            userAnswer: compare ? value : '',
            modelAnswer: modelAnswer(exercise)
        };

        renderExercise();
    }

    root.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

        const action = button.dataset.action;

        if (action === 'home') {
            renderHome();
            return;
        }
        if (action === 'start-category') {
            const category = categories.find(item => item.id === button.dataset.category);
            if (category) {
                startTopicRound(category, 30);
            }
            return;
        }
        if (button.dataset.category) {
            const category = categories.find(item => item.id === button.dataset.category);
            if (category) {
                renderTopicDetail(category);
            }
            return;
        }

        if (button.dataset.choice) {
            selectedChoice = button.dataset.choice;
            renderExercise();
            return;
        }

        if (button.dataset.word !== undefined) {
            const index = Number(button.dataset.word);
            selectedWords = selectedWords.includes(index)
                ? selectedWords.filter(item => item !== index)
                : [...selectedWords, index].sort((a, b) => a - b);
            renderExercise();
            return;
        }

        if (button.dataset.card !== undefined) {
            selectedCards.push(Number(button.dataset.card));
            renderExercise();
            return;
        }

        if (action === 'hint') {
            hintVisible = !hintVisible;
            renderExercise();
        } else if (action === 'check') {
            checkCurrentAnswer();
        } else if (action === 'retry') {
            feedback = null;
            selectedChoice = '';
            selectedWords = [];
            selectedCards = [];
            renderExercise();
        } else if (action === 'next') {
            if (round.mode === 'topic-round') {
                if (round.index >= round.items.length - 1) {
                    round.index = round.items.length;
                    renderExercise();
                    return;
                }
            }
            round.index += 1;
            hintVisible = false;
            feedback = null;
            selectedChoice = '';
            selectedWords = [];
            selectedCards = [];
            renderExercise();
        } else if (action === 'repeat-mistakes') {
            const missedItems = round.items.filter(exercise => round.mistakes.has(exercise.id));
            startRound(missedItems, 'Fehler-Wiederholung');
        } else if (action === 'reset-builder') {
            selectedCards = [];
            renderExercise();
        }
    });

    root.addEventListener('change', event => {
        if (event.target.matches('[data-blank]')) {
            const selects = [...root.querySelectorAll('[data-blank]')];
            const currentValues = selects.map(select => select.value);
            feedback = null;
            renderExercise();
            [...root.querySelectorAll('[data-blank]')].forEach((select, index) => {
                select.value = currentValues[index] || '';
            });
        }
    });

    renderHome();
})();
