(() => {
    'use strict';

    const STORAGE_KEY = 'lernraum9.deutsch.progress';
    const categories = window.DeutschExercises || [];
    const pageParams = new URLSearchParams(window.location?.search || '');
    const exercises = categories.flatMap(category =>
        category.exercises.map(exercise => ({ ...exercise, categoryId: category.id, categoryTitle: category.title }))
    );
    const exerciseIds = exercises.map(exercise => exercise.id);

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

    const emptyProgress = () => ({
        completed: [],
        attempted: [],
        firstTryCorrect: [],
        studiedTopics: [],
        answerHistory: {}
    });
    const validIds = new Set(exerciseIds);

    function normalizeProgress(value) {
        const source = value && typeof value === 'object' ? value : {};
        const answerHistory = {};
        if (source.answerHistory && typeof source.answerHistory === 'object') {
            Object.entries(source.answerHistory).forEach(([exerciseId, attempts]) => {
                if (!validIds.has(exerciseId) || !Array.isArray(attempts)) return;
                answerHistory[exerciseId] = attempts
                    .filter(attempt => attempt && typeof attempt.correct === 'boolean')
                    .map(attempt => ({
                        id: typeof attempt.id === 'string' ? attempt.id : '',
                        sequence: Number.isInteger(attempt.sequence) ? attempt.sequence : 0,
                        answer: String(attempt.answer || ''),
                        correct: attempt.correct,
                        correctAnswer: String(attempt.correctAnswer || ''),
                        explanation: String(attempt.explanation || ''),
                        at: typeof attempt.at === 'string' ? attempt.at : ''
                    }));
            });
        }

        const completed = new Set((Array.isArray(source.completed) ? source.completed : [])
            .filter(id => validIds.has(id)));
        const attempted = new Set((Array.isArray(source.attempted) ? source.attempted : [])
            .filter(id => validIds.has(id)));
        const firstTryCorrect = new Set((Array.isArray(source.firstTryCorrect) ? source.firstTryCorrect : [])
            .filter(id => validIds.has(id)));
        Object.entries(answerHistory).forEach(([exerciseId, attempts]) => {
            if (!attempts.length) return;
            attempted.add(exerciseId);
            if (attempts.some(attempt => attempt.correct)) completed.add(exerciseId);
            attempts.sort((first, second) => first.at.localeCompare(second.at)
                || first.sequence - second.sequence
                || first.id.localeCompare(second.id));
            firstTryCorrect.delete(exerciseId);
            if (attempts[0].correct) firstTryCorrect.add(exerciseId);
        });

        return {
            completed: [...completed],
            attempted: [...attempted],
            firstTryCorrect: [...firstTryCorrect],
            studiedTopics: [...new Set((Array.isArray(source.studiedTopics) ? source.studiedTopics : [])
                .filter(id => categories.some(category => category.id === id)))],
            answerHistory
        };
    }

    function mergeProgress(firstValue, secondValue) {
        const first = normalizeProgress(firstValue);
        const second = normalizeProgress(secondValue);
        const answerHistory = { ...first.answerHistory };
        Object.entries(second.answerHistory).forEach(([exerciseId, attempts]) => {
            const existing = answerHistory[exerciseId] || [];
            const seen = new Set(existing.map(attempt => attempt.id || JSON.stringify(attempt)));
            answerHistory[exerciseId] = [
                ...existing,
                ...attempts.filter(attempt => {
                    const key = attempt.id || JSON.stringify(attempt);
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                })
            ];
        });
        return normalizeProgress({
            completed: [...first.completed, ...second.completed],
            attempted: [...first.attempted, ...second.attempted],
            firstTryCorrect: [...first.firstTryCorrect, ...second.firstTryCorrect],
            studiedTopics: [...first.studiedTopics, ...second.studiedTopics],
            answerHistory
        });
    }

    function cloneProgress(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function readLocalProgress() {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            return normalizeProgress(saved ? JSON.parse(saved) : null);
        } catch (error) {
            storageError = 'Dein gespeicherter Lernstand konnte nicht geladen werden. Neue Fortschritte bleiben möglicherweise nicht erhalten.';
            console.error('Der Deutsch-Lernstand konnte nicht geladen werden:', error);
            return emptyProgress();
        }
    }

    let progress = emptyProgress();
    let storageError = '';
    let activeCategory = null;
    let sharedProgressReady = !window.LernraumDB
        || typeof window.LernraumDB.get !== 'function'
        || typeof window.LernraumDB.update !== 'function';
    let progressWriteQueue = Promise.resolve();
    let round = null;
    let hintVisible = false;
    let feedback = null;
    let selectedChoice = '';
    let selectedWords = [];
    let selectedCards = [];
    let attemptIdSequence = 0;

    progress = readLocalProgress();

    function refreshProgressView() {
        if (round) {
            renderExercise();
        } else if (activeCategory) {
            renderTopicDetail(activeCategory);
        }
    }

    function persistProgress() {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            storageError = 'Dein Lernfortschritt konnte nicht gespeichert werden. Prüfe bitte den verfügbaren Speicherplatz.';
            console.error('Der Deutsch-Lernstand konnte nicht gespeichert werden:', error);
        }

        if (!sharedProgressReady || !window.LernraumDB || typeof window.LernraumDB.update !== 'function') {
            return Promise.resolve();
        }

        const snapshot = cloneProgress(progress);
        const write = progressWriteQueue.then(() => window.LernraumDB.update('lernraumUebungen', state => {
            const subjects = state && typeof state === 'object' && state.subjects
                ? state.subjects
                : {};
            const current = subjects.deutsch && typeof subjects.deutsch === 'object'
                ? subjects.deutsch
                : {};
            const merged = mergeProgress(current, snapshot);
            const available = new Set(Array.isArray(current.available) ? current.available : []);
            exerciseIds.forEach(id => available.add(id));
            return {
                ...state,
                subjects: {
                    ...subjects,
                    deutsch: {
                        ...current,
                        available: [...available],
                        completed: merged.completed,
                        attempted: merged.attempted,
                        firstTryCorrect: merged.firstTryCorrect,
                        studiedTopics: merged.studiedTopics,
                        answerHistory: merged.answerHistory
                    }
                }
            };
        }));
        progressWriteQueue = write.then(() => {
            storageError = '';
        }).catch(error => {
            storageError = 'Der Lernstand konnte nicht im gemeinsamen Speicher gesichert werden. Die lokale Sicherung bleibt auf diesem Gerät verfügbar.';
            console.error('Der Deutsch-Lernstand konnte nicht mit dem gemeinsamen Speicher abgeglichen werden:', error);
            refreshProgressView();
        });
        return progressWriteQueue;
    }

    async function loadSharedProgress() {
        if (sharedProgressReady) return;
        try {
            const state = await window.LernraumDB.get('lernraumUebungen');
            const stored = state?.subjects?.deutsch;
            progress = mergeProgress(progress, stored);
            sharedProgressReady = true;
            await persistProgress();
            refreshProgressView();
        } catch (error) {
            storageError = 'Der gemeinsame Lernstand konnte nicht geladen werden. Deine lokalen Fortschritte bleiben erhalten.';
            console.error('Der Deutsch-Lernstand konnte nicht aus dem gemeinsamen Speicher geladen werden:', error);
            refreshProgressView();
        }
    }

    function recordAttempt(exercise, value, correct) {
        const history = progress.answerHistory[exercise.id] || [];
        history.push({
            id: `${Date.now().toString(36)}-${++attemptIdSequence}-${Math.random().toString(36).slice(2)}`,
            sequence: history.length + 1,
            answer: displayAnswer(exercise, value),
            correct,
            correctAnswer: modelAnswer(exercise),
            explanation: exercise.explanation,
            at: new Date().toISOString()
        });
        progress.answerHistory[exercise.id] = history;
        if (!progress.attempted.includes(exercise.id)) progress.attempted.push(exercise.id);
        if (correct && !progress.completed.includes(exercise.id)) progress.completed.push(exercise.id);
        progress = normalizeProgress(progress);
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
        activeCategory = category;
        if (!progress.studiedTopics.includes(category.id)) {
            progress.studiedTopics.push(category.id);
            persistProgress();
        }
        const lesson = category.lesson || {
            overview: category.theory || category.description,
            focusPoints: [category.description],
            examples: [{ title: category.title, text: category.theory || category.description }]
        };
        const sources = category.sources || [];
        const attemptedIds = new Set(progress.attempted);
        const completedIds = new Set(progress.completed);
        const firstTryIds = new Set(progress.firstTryCorrect);
        const attempted = category.exercises.filter(exercise => attemptedIds.has(exercise.id)).length;
        const completed = category.exercises.filter(exercise => completedIds.has(exercise.id)).length;
        const firstTryCorrect = category.exercises.filter(exercise => firstTryIds.has(exercise.id)).length;
        const wrongAttempts = category.exercises.reduce((total, exercise) =>
            total + (progress.answerHistory[exercise.id] || []).filter(attempt => !attempt.correct).length, 0);
        const attemptedExercises = category.exercises.filter(exercise =>
            attemptedIds.has(exercise.id) || completedIds.has(exercise.id));
        root.innerHTML = `
            <section class="deutsch-session deutsch-topic-detail">
                <div class="deutsch-session-top">
                    <button class="deutsch-text-button" type="button" data-action="topic-map">← Themenkarten</button>
                    <span>${escapeHTML(category.title)}</span>
                </div>
                <article class="deutsch-question-card deutsch-topic-card-detail">
                    <span class="deutsch-question-topic">${escapeHTML(category.icon)} ${escapeHTML(category.title)}</span>
                    <h2>${escapeHTML(category.title)}</h2>
                    <p class="deutsch-topic-detail-description">${escapeHTML(category.description)}</p>
                    <div class="deutsch-topic-meta">
                        <span>${attempted}/${category.exercises.length} versucht</span>
                        <span>${completed} richtig gelöst</span>
                        <span>${firstTryCorrect} beim ersten Versuch richtig</span>
                        <span>${wrongAttempts} Fehlversuche</span>
                        <span>${categories.length} Themen · ${category.exercises.length} Aufgaben</span>
                    </div>
                    ${storageError ? `<p class="deutsch-storage-warning" role="status">${escapeHTML(storageError)}</p>` : ''}
                    <ol class="deutsch-learning-path" aria-label="Lernpfad">
                        <li class="is-active"><span>1</span><strong>Einführung lesen</strong></li>
                        <li><span>2</span><strong>Merksätze merken</strong></li>
                        <li><span>3</span><strong>${category.exercises.length} Aufgaben lösen</strong></li>
                    </ol>
                    <p class="deutsch-progress-note"><strong>Lernstand gespeichert:</strong> Dieses Thema wurde aufgerufen; Antworten, erste Versuche, richtige Lösungen und Fehlversuche werden festgehalten.</p>
                    ${attemptedExercises.length ? `
                        <details class="deutsch-answer-history">
                            <summary>Bearbeitete Übungen und Antworten ansehen (${attemptedExercises.length})</summary>
                            <ol>
                                ${attemptedExercises.map(exercise => {
                                    const attempts = progress.answerHistory[exercise.id] || [];
                                    const firstAttempt = attempts[0];
                                    return `
                                        <li class="deutsch-history-exercise">
                                            <strong>${formatText(exercise.prompt)}</strong>
                                            <span>${completedIds.has(exercise.id) ? 'Richtig gelöst' : 'Noch nicht richtig gelöst'}
                                                ${firstAttempt ? ` · Beim ersten Versuch ${firstAttempt.correct ? 'richtig' : 'falsch'}` : ''}
                                            </span>
                                            ${attempts.length ? `
                                                <ol>
                                                    ${attempts.map((attempt, index) => `
                                                        <li class="${attempt.correct ? 'is-correct' : 'is-incorrect'}">
                                                            <strong>Versuch ${index + 1}: ${attempt.correct ? 'richtig' : 'falsch'}</strong>
                                                            <span>Deine Antwort: ${escapeHTML(attempt.answer || 'Keine Antwort eingegeben')}</span>
                                                            <span>Musterlösung: ${escapeHTML(attempt.correctAnswer || 'Keine Musterlösung hinterlegt')}</span>
                                                            <span>${escapeHTML(attempt.explanation)}</span>
                                                        </li>
                                                    `).join('')}
                                                </ol>
                                            ` : '<span>Vor der detaillierten Antwortspeicherung bearbeitet.</span>'}
                                        </li>
                                    `;
                                }).join('')}
                            </ol>
                        </details>
                    ` : ''}
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
                    ${Array.isArray(lesson.sections) && lesson.sections.length ? `
                        <section class="deutsch-lesson-sections" aria-label="Vertiefung">
                            <h3>Schritt für Schritt vertiefen</h3>
                            <div class="deutsch-lesson-section-grid">
                                ${lesson.sections.map(section => `
                                    <article class="deutsch-lesson-section">
                                        <h4>${escapeHTML(section.title)}</h4>
                                        <p>${escapeHTML(section.text)}</p>
                                        ${section.points?.length ? `<ul>${section.points.map(point => `<li>${escapeHTML(point)}</li>`).join('')}</ul>` : ''}
                                    </article>
                                `).join('')}
                            </div>
                        </section>
                    ` : ''}
                    <div class="deutsch-example-grid">
                        ${lesson.examples.map(example => `
                            <article class="deutsch-example-card">
                                <strong>${escapeHTML(example.title)}</strong>
                                <p>${escapeHTML(example.text)}</p>
                            </article>
                        `).join('')}
                    </div>
                    ${sources.length ? `
                        <section class="deutsch-sources" aria-labelledby="deutschSourcesTitle">
                            <h3 id="deutschSourcesTitle">Fachliche Quellen</h3>
                            <ul>
                                ${sources.map(source => `
                                    <li>
                                        <a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.title)}</a>
                                        <span>${escapeHTML(source.note)}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <p>Die Erklärungen und Übungen in diesem Lernmodul sind eigenständig formuliert.</p>
                        </section>
                    ` : ''}
                    <div class="deutsch-question-actions">
                        <button class="deutsch-button deutsch-button-primary" type="button" data-action="start-category" data-category="${category.id}">Übungen starten</button>
                        <button class="deutsch-button deutsch-button-light" type="button" data-action="topic-map">Zurück zu den Themenkarten</button>
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
                <p>Trainiere Grammatik, Rechtschreibung, Gedichtverständnis und den Umgang mit Sachtexten, Schaubildern und der 2. Deutschklassenarbeit.</p>
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
            <footer class="deutsch-footer">Bearbeitete Themen, Aufgaben und Antworten werden gespeichert; mit Lernkonto auch geräteübergreifend synchronisiert.</footer>
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

    function startTopicRound(category, maxTasks) {
        if (!category || !Array.isArray(category.exercises) || category.exercises.length === 0) {
            console.error('Für dieses Deutsch-Thema sind keine Übungen vorhanden.');
            return;
        }
        const taskLimit = Number.isFinite(maxTasks) ? maxTasks : category.exercises.length;
        const items = shuffle(category.exercises)
            .slice(0, Math.min(taskLimit, category.exercises.length))
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
        const poemBlock = exercise.poem ? `
            <figure class="deutsch-exercise-poem">
                <figcaption>
                    <strong>${escapeHTML(exercise.poem.title)}</strong>
                    <span>von ${escapeHTML(exercise.poem.author)}</span>
                </figcaption>
                <blockquote class="deutsch-exercise-poem-text">${escapeHTML(exercise.poem.text)}</blockquote>
                <a class="deutsch-exercise-poem-source" href="${escapeHTML(exercise.poem.sourceUrl)}" target="_blank" rel="noopener noreferrer">Textquelle bei Wikisource</a>
            </figure>` : '';
        const theoryBlock = category && category.theory && !exercise.poem ? `
            <div class="deutsch-theory-box">
                <h3>Regel und Erklärung</h3>
                <p>${escapeHTML(category.theory)}</p>
            </div>` : '';
        root.innerHTML = `
            <section class="deutsch-session">
                <div class="deutsch-session-top">
                    <button class="deutsch-text-button" type="button" data-action="topic-map">← Themenkarten</button>
                    <span>${escapeHTML(round.title)}</span>
                </div>
                ${storageError ? `<p class="deutsch-storage-warning" role="status">${escapeHTML(storageError)}</p>` : ''}
                <div class="deutsch-question-progress" role="progressbar" aria-label="Rundenfortschritt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div>
                <div class="deutsch-session-count">Aufgabe ${round.index + 1} von ${totalTasks} <span>${round.solved.size} richtig</span></div>
                ${theoryBlock}
                ${poemBlock}
                <article class="deutsch-question-card">
                    <span class="deutsch-question-topic">${escapeHTML(exercise.categoryTitle || round.title)}</span>
                    <h2>${formatText(exercise.displayPrompt || exercise.prompt)}</h2>
                    ${exercise.question && !exercise.poem ? `<p class="deutsch-question-text">${escapeHTML(exercise.question)}</p>` : ''}
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
        const accuracy = total ? Math.round(correctCount / total * 100) : 0;
        root.innerHTML = `
            <section class="deutsch-session deutsch-round-summary">
                ${storageError ? `<p class="deutsch-storage-warning" role="status">${escapeHTML(storageError)}</p>` : ''}
                <span class="deutsch-eyebrow">RUNDE BEENDET</span>
                <h1>Gut gemacht!</h1>
                <p>Du hast ${correctCount} von ${total} Aufgaben richtig gelöst. ${missed.length ? `${missed.length} Aufgabe${missed.length === 1 ? '' : 'n'} kannst du gezielt wiederholen.` : 'Diesmal gab es keine Fehler.'}</p>
                <div class="deutsch-summary-result">
                    <strong>${accuracy} %</strong>
                    <span>Erfolgsquote in dieser Runde</span>
                    <div class="deutsch-progress-track" role="progressbar" aria-label="Erfolgsquote" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${accuracy}"><span style="width:${accuracy}%"></span></div>
                    <p>Dein Ergebnis und alle Antworten bleiben auf diesem Gerät gespeichert${window.LernraumDB ? ' und werden mit deinem Lernkonto synchronisiert' : ''}.</p>
                </div>
                <div class="deutsch-summary-actions">
                    ${missed.length ? '<button class="deutsch-button deutsch-button-primary" type="button" data-action="repeat-mistakes">Fehler noch einmal üben</button>' : ''}
                    <button class="deutsch-button deutsch-button-light" type="button" data-action="topic-map">Zur Themenkarte</button>
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
        } else {
            round.mistakes.add(exercise.id);
        }
        recordAttempt(exercise, value, correct);
        const compare = exercise.type === 'rewrite' || exercise.type === 'error-correction';
        feedback = {
            correct,
            explanation: exercise.explanation,
            showComparison: !correct && compare,
            userAnswer: compare ? value : '',
            modelAnswer: modelAnswer(exercise)
        };

        persistProgress();
        renderExercise();
    }

    root.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

        const action = button.dataset.action;

        if (action === 'home') {
            window.location.href = './deutsch.html';
            return;
        }
        if (action === 'topic-map') {
            window.location.href = './deutsch.html';
            return;
        }
        if (action === 'start-category') {
            const category = categories.find(item => item.id === button.dataset.category);
            if (category) {
                startTopicRound(category);
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

    const initialTopic = categories.find(category => category.id === pageParams.get('topic'));
    if (initialTopic) {
        renderTopicDetail(initialTopic);
    } else if (pageParams.has('topic')) {
        root.innerHTML = `
            <section class="deutsch-session deutsch-topic-detail">
                <article class="deutsch-question-card deutsch-topic-card-detail">
                    <h1>Thema nicht gefunden</h1>
                    <p>Diese Themenkarte ist nicht verfügbar. Öffne eine Karte aus der Themenübersicht.</p>
                    <a class="deutsch-button deutsch-button-primary" href="./deutsch.html">Zu den Themenkarten</a>
                </article>
            </section>
        `;
    } else {
        renderHome();
    }
    loadSharedProgress();
})();
