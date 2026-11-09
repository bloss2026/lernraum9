(() => {
    'use strict';

    const root = document.getElementById('vocabularyApp');
    const words = window.VocabularyData.vocabularyData.map((item, index) => {
        if (!item || item.id === undefined || !String(item.english || '').trim() || !String(item.german || '').trim()) {
            throw new Error(`Der Vokabeleintrag ${index + 1} benötigt id, english und german.`);
        }
        return {
            ...item,
            id: String(item.id),
            english: String(item.english).trim(),
            german: String(item.german).trim(),
            studyEnglish: String(item.studyEnglish || item.english).trim(),
            studyGerman: String(item.studyGerman || item.german).trim(),
            alternatives: Array.isArray(item.alternatives)
                ? item.alternatives.filter(value => typeof value === 'string').map(value => value.trim()).filter(Boolean)
                : [],
            unit: typeof item.unit === 'string' && item.unit.trim() ? item.unit.trim() : 'Ohne Unit',
            category: typeof item.category === 'string' && item.category.trim() ? item.category.trim() : 'Ohne Thema'
        };
    });
    const wordsById = new Map(words.map(word => [word.id, word]));
    if (wordsById.size !== words.length) {
        throw new Error('Jede Vokabel braucht eine eindeutige ID.');
    }
    const units = [...new Set(words.map(word => word.unit))];
    const maxQuizQuestions = 20;
    const state = {
        mode: 'dashboard',
        direction: 'en-de',
        filterStatus: 'all',
        filterCategory: '',
        filterUnit: '',
        sessionUnit: '',
        query: '',
        progress: {},
        activity: {},
        quizResults: [],
        dailyGoal: 10,
        loaded: false,
        busy: false,
        notice: '',
        noticeType: 'info',
        sessionWords: [],
        sessionIndex: 0,
        revealed: false,
        question: null,
        quizQuestionCount: 0,
        quizFinished: false,
        answered: false,
        answerCorrect: false,
        answerText: '',
        answer: '',
        refreshPromise: null
    };

    const html = value => String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
    const progressFor = wordId => state.progress[wordId] || window.VocabularySpacedRepetition.initialProgress();
    const answerKey = value => String(value).trim().replace(/\s+/g, ' ').toLocaleLowerCase('en');
    const todayKey = () => new Date().toISOString().slice(0, 10);
    const setNotice = (message, type = 'info') => {
        state.notice = message;
        state.noticeType = type;
    };
    const renderUnitSelector = label => `
        <div class="vocab-controls"><label>${label}<select data-action="session-unit">
            <option value="">Alle Units</option>
            ${units.map(unit => `<option value="${html(unit)}" ${state.sessionUnit === unit ? 'selected' : ''}>${html(unit)}</option>`).join('')}
        </select></label></div>`;

    function normalizeRows(rows) {
        state.progress = {};
        rows.forEach(row => {
            if (!row || typeof row.word_id !== 'string') {
                throw new Error('Supabase enthält einen beschädigten Lernstand ohne Vokabel-ID.');
            }
            if (!wordsById.has(row.word_id)) return;
            const values = {
                repetitions: Number(row.repetitions),
                intervalDays: Number(row.interval_days),
                easeFactor: Number(row.ease_factor),
                dueAt: row.due_at,
                lapses: Number(row.lapses),
                correctCount: Number(row.correct_count),
                seenCount: Number(row.seen_count),
                lastReviewed: row.last_reviewed,
                lastRating: row.last_rating,
                difficult: Boolean(row.difficult)
            };
            const counters = [values.repetitions, values.lapses, values.correctCount, values.seenCount];
            if (counters.some(value => !Number.isSafeInteger(value) || value < 0)
                || !Number.isFinite(values.intervalDays) || values.intervalDays < 0
                || !Number.isFinite(values.easeFactor) || values.easeFactor < 1.3
                || (values.dueAt !== null && !Number.isFinite(Date.parse(values.dueAt)))
                || (values.lastReviewed !== null && !Number.isFinite(Date.parse(values.lastReviewed)))
                || !['again', 'hard', 'good', 'easy', null].includes(values.lastRating)) {
                throw new Error(`Der gespeicherte Lernstand für "${row.word_id}" ist beschädigt.`);
            }
            state.progress[row.word_id] = values;
        });
    }

    function refreshFromCloud(syncCore = true) {
        if (state.refreshPromise) return state.refreshPromise;
        state.refreshPromise = (async () => {
            if (!window.LernraumDB || !window.LernraumCloud) {
                throw new Error('Die Lernkonto-Verbindung konnte nicht gestartet werden. Bitte lade die Seite erneut.');
            }
            const data = await window.VocabularySupabase.load({ syncCore });
            if (!Array.isArray(data.progress) || !Array.isArray(data.activity) || !Array.isArray(data.quiz)) {
                throw new Error('Supabase hat einen beschädigten Lernstand gesendet.');
            }
            if (![5, 10, 15, 20].includes(data.dailyGoal)) {
                throw new Error('Das gespeicherte tägliche Lernziel ist ungültig.');
            }
            if (data.activity.some(row => {
                const date = String(row?.activity_date || '');
                const parsedDate = new Date(`${date}T00:00:00.000Z`);
                return !/^\d{4}-\d{2}-\d{2}$/.test(date)
                    || !Number.isFinite(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== date
                    || !Number.isSafeInteger(Number(row.reviewed_count)) || Number(row.reviewed_count) < 0;
            })) {
                throw new Error('Supabase enthält beschädigte Tagesaktivitäten.');
            }
            normalizeRows(data.progress);
            state.dailyGoal = data.dailyGoal;
            state.activity = Object.fromEntries(data.activity.map(row => [row.activity_date, { reviewedCount: Number(row.reviewed_count) }]));
            state.quizResults = data.quiz;
            state.loaded = true;
        })().finally(() => {
            state.refreshPromise = null;
        });
        return state.refreshPromise;
    }

    function topDashboard(summary) {
        const todayCount = Number(state.activity[todayKey()]?.reviewedCount || 0);
        const cards = [
            ['Vokabeln insgesamt', summary.total],
            ['Schon bearbeitet', summary.studied],
            ['Sicher gelernt', summary.mastered],
            ['Heute fällig', summary.due],
            ['Schwierige Wörter', summary.difficult],
            ['Lernserie', `${summary.streak} ${summary.streak === 1 ? 'Tag' : 'Tage'}`]
        ];
        return `
            <section class="vocab-stats" aria-label="Dein Lernstand">
                ${cards.map(([label, value]) => `<article class="vocab-stat"><span>${html(label)}</span><strong>${html(value)}</strong></article>`).join('')}
            </section>
            <section class="vocab-panel vocab-dashboard-progress">
                <div class="vocab-panel-heading"><div><h2>Dein Lernfortschritt</h2><p>${summary.percent}% der vorhandenen Wörter sicher gelernt</p></div><strong>${todayCount} / ${state.dailyGoal} heute</strong></div>
                <div class="vocab-progress-track" role="progressbar" aria-label="Sicher gelernte Vokabeln" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${summary.percent}"><span style="width:${summary.percent}%"></span></div>
                <div class="vocab-week" aria-label="Lernaktivität der letzten sieben Tage">
                    ${summary.recentDays.map(day => `<div class="vocab-week-day"><span>${new Date(`${day.date}T12:00:00`).toLocaleDateString('de-DE', { weekday: 'short' })}</span><strong>${day.count}</strong></div>`).join('')}
                </div>
                <label class="vocab-goal">Tägliches Lernziel
                    <select data-action="goal" ${state.busy ? 'disabled' : ''}>
                        ${[5, 10, 15, 20].map(goal => `<option value="${goal}" ${state.dailyGoal === goal ? 'selected' : ''}>${goal} Vokabeln</option>`).join('')}
                    </select>
                </label>
            </section>
            <section class="vocab-mode-grid" aria-label="Lernbereiche">
                ${[
                    ['flashcards', '🗂️', 'Karteikarten', 'Lerne neue Wörter oder wiederhole fällige Karten.'],
                    ['quiz', '🔎', 'Multiple Choice', 'Wähle die passende Übersetzung aus.'],
                    ['writing', '✍️', 'Schreibtraining', 'Schreibe die englische Übersetzung selbst.'],
                    ['list', '📚', 'Vokabelliste', 'Suche und filtere alle bereitgestellten Wörter.']
                ].map(([mode, icon, title, description]) => `<button class="vocab-mode-card" type="button" data-action="mode" data-mode="${mode}"><span aria-hidden="true">${icon}</span><strong>${title}</strong><small>${description}</small><span class="vocab-mode-link">Öffnen →</span></button>`).join('')}
            </section>`;
    }

    function renderFlashcards() {
        const selectedWords = words.filter(word => !state.sessionUnit || word.unit === state.sessionUnit);
        if (!state.sessionWords.length) {
            return `<section class="vocab-panel"><h2>Karteikarten</h2><p>Starte eine kleine Lerneinheit mit neuen, fälligen oder schwierigen Wörtern.</p>
                <div class="vocab-controls"><label>Lernrichtung<select data-action="direction"><option value="en-de" ${state.direction === 'en-de' ? 'selected' : ''}>Englisch → Deutsch</option><option value="de-en" ${state.direction === 'de-en' ? 'selected' : ''}>Deutsch → Englisch</option></select></label></div>
                ${renderUnitSelector('Unit auswählen')}
                <div class="vocab-button-row">
                    <button class="vocab-button" data-action="start-session" data-kind="new" ${selectedWords.some(word => !state.progress[word.id]?.seenCount) ? '' : 'disabled'}>Neue Wörter (${selectedWords.filter(word => !state.progress[word.id]?.seenCount).length})</button>
                    <button class="vocab-button vocab-button-secondary" data-action="start-session" data-kind="due" ${selectedWords.some(word => window.VocabularySpacedRepetition.isDue(progressFor(word.id))) ? '' : 'disabled'}>Fällige Wiederholungen (${selectedWords.filter(word => window.VocabularySpacedRepetition.isDue(progressFor(word.id))).length})</button>
                    <button class="vocab-button vocab-button-secondary" data-action="start-session" data-kind="difficult" ${selectedWords.some(word => progressFor(word.id).difficult) ? '' : 'disabled'}>Schwierige Wörter (${selectedWords.filter(word => progressFor(word.id).difficult).length})</button>
                </div></section>`;
        }
        const word = state.sessionWords[state.sessionIndex];
        const front = state.direction === 'en-de' ? word.studyEnglish : word.studyGerman;
        const back = state.direction === 'en-de' ? word.studyGerman : word.studyEnglish;
        return `<section class="vocab-panel vocab-study-panel"><div class="vocab-session-heading"><span>${state.sessionIndex + 1} von ${state.sessionWords.length}</span><span>${state.direction === 'en-de' ? 'Englisch → Deutsch' : 'Deutsch → Englisch'}</span></div>
            <div class="vocab-progress-track"><span style="width:${Math.round(((state.sessionIndex + 1) / state.sessionWords.length) * 100)}%"></span></div>
            <article class="vocab-flashcard"><span>${state.revealed ? 'Übersetzung' : 'Frage'}</span><strong>${html(state.revealed ? back : front)}</strong>
                ${state.revealed ? '' : `<button class="vocab-sound-button" type="button" data-action="speak" data-word="${html(word.id)}" aria-label="Englische Aussprache abspielen">🔊 Aussprache</button>`}
            </article>
            ${state.revealed ? `<p class="vocab-help">Wie sicher konntest du dich erinnern? Deine Auswahl plant die nächste Wiederholung.</p><div class="vocab-rating-row">
                ${[['again', 'Nochmal'], ['hard', 'Schwer'], ['good', 'Gut'], ['easy', 'Einfach']].map(([rating, label]) => `<button type="button" class="vocab-rating" data-action="rate" data-rating="${rating}" ${state.busy ? 'disabled' : ''}>${label}</button>`).join('')}
            </div>` : `<button class="vocab-button" data-action="reveal">Übersetzung anzeigen</button>`}
            <div class="vocab-button-row vocab-card-nav"><button class="vocab-button vocab-button-secondary" data-action="previous" ${state.sessionIndex === 0 ? 'disabled' : ''}>← Vorheriges</button><button class="vocab-button vocab-button-secondary" data-action="next" ${state.sessionIndex >= state.sessionWords.length - 1 ? 'disabled' : ''}>Nächstes →</button></div>
        </section>`;
    }

    function renderQuiz() {
        const selectedWords = words.filter(word => !state.sessionUnit || word.unit === state.sessionUnit);
        if (selectedWords.length < 2) return `<section class="vocab-panel"><h2>Multiple Choice</h2>${renderUnitSelector('Unit auswählen')}<p>Für ein Quiz müssen mindestens zwei Vokabeln in der ausgewählten Unit bereitgestellt sein. Es werden keine Antwortmöglichkeiten erfunden.</p></section>`;
        if (state.quizFinished && !state.question) return `<section class="vocab-panel"><h2>Multiple Choice</h2>${renderUnitSelector('Unit auswählen')}<p>Du hast alle ${maxQuizQuestions} Fragen geschafft. Gut gemacht!</p><button class="vocab-button" data-action="restart-quiz">Neue Runde starten</button></section>`;
        if (!state.question) return `<section class="vocab-panel"><h2>Multiple Choice</h2>${renderUnitSelector('Unit auswählen')}<p>Es gibt pro Runde höchstens ${maxQuizQuestions} Fragen. Die Richtung wechselt zufällig zwischen Englisch → Deutsch und Deutsch → Englisch. Bei weniger als vier Wörtern werden nur die verfügbaren Antworten angezeigt.</p><button class="vocab-button" data-action="new-question">Quiz starten</button></section>`;
        const question = state.question;
        return `<section class="vocab-panel vocab-quiz-panel">${renderUnitSelector('Unit auswählen')}<div class="vocab-session-heading"><span>Frage ${state.quizQuestionCount} von ${maxQuizQuestions}</span><button class="vocab-sound-button" data-action="speak" data-word="${html(question.word.id)}">🔊 Anhören</button></div>
            <p class="vocab-question-label">${question.direction === 'en-de' ? 'Was bedeutet dieses englische Wort?' : 'Wie heißt dieses Wort auf Englisch?'}</p><h2 class="vocab-question">${html(question.prompt)}</h2>
            <div class="vocab-choice-grid">${question.choices.map(choice => `<button type="button" class="vocab-choice" data-action="choose" data-choice="${html(choice)}" ${state.answered || state.busy ? 'disabled' : ''}>${html(choice)}</button>`).join('')}</div>
            ${state.answered ? `<div class="vocab-feedback ${state.answerCorrect ? 'vocab-correct' : 'vocab-incorrect'}" role="status">${state.answerCorrect ? 'Richtig! Gut gemacht.' : `Noch nicht ganz. Die richtige Antwort ist: ${html(question.correct)}`}${state.quizFinished ? `<p>Du hast alle ${maxQuizQuestions} Fragen geschafft!</p><button class="vocab-button" data-action="restart-quiz">Neue Runde starten</button>` : '<button class="vocab-button vocab-next-question" data-action="new-question">Nächste Frage</button>'}</div>` : ''}
        </section>`;
    }

    function renderWriting() {
        if (!words.length) return `<section class="vocab-panel"><h2>Schreibtraining</h2><p>Hier erscheinen Aufgaben, sobald Vokabeln bereitgestellt wurden.</p></section>`;
        const word = state.question?.word;
        if (!word) return `<section class="vocab-panel"><h2>Schreibtraining</h2>${renderUnitSelector('Unit auswählen')}<p>Schreibe die englische Übersetzung. Groß- und Kleinschreibung sowie zusätzliche Leerzeichen werden beim Prüfen ignoriert.</p><button class="vocab-button" data-action="new-question">Schreibtraining starten</button></section>`;
        return `<section class="vocab-panel vocab-quiz-panel">${renderUnitSelector('Unit auswählen')}<div class="vocab-session-heading"><span>Schreibtraining</span><button class="vocab-sound-button" data-action="speak" data-word="${html(word.id)}">🔊 Anhören</button></div>
            <p class="vocab-question-label">Schreibe das englische Wort für:</p><h2 class="vocab-question">${html(word.german)}</h2>
            <form class="vocab-writing-form" data-form="writing"><label for="vocabAnswer">Deine Antwort</label><input id="vocabAnswer" name="answer" autocomplete="off" ${state.answered ? 'disabled' : ''} value="${html(state.answerText)}" required><button class="vocab-button" type="submit" ${state.answered || state.busy ? 'disabled' : ''}>Prüfen</button></form>
            ${state.answered ? `<div class="vocab-feedback ${state.answerCorrect ? 'vocab-correct' : 'vocab-incorrect'}" role="status">${state.answerCorrect ? 'Richtig! Deine Antwort stimmt.' : `Das war noch nicht richtig. Gesucht war: ${html(word.english)}`}<button class="vocab-button vocab-next-question" data-action="new-question">Nächstes Wort</button></div>` : ''}
        </section>`;
    }

    function renderList() {
        const categories = [...new Set(words
            .filter(word => !state.filterUnit || word.unit === state.filterUnit)
            .map(word => word.category))];
        const query = state.query.trim().toLocaleLowerCase('de');
        const filtered = words.filter(word => {
            const entry = progressFor(word.id);
            const matchesQuery = !query || `${word.english} ${word.german} ${word.unit} ${word.category}`.toLocaleLowerCase('de').includes(query);
            const matchesStatus = state.filterStatus === 'all'
                || (state.filterStatus === 'new' && !entry.seenCount)
                || (state.filterStatus === 'due' && window.VocabularySpacedRepetition.isDue(entry))
                || (state.filterStatus === 'difficult' && entry.difficult)
                || (state.filterStatus === 'mastered' && entry.repetitions >= 3 && entry.intervalDays >= 7 && !entry.difficult);
            return matchesQuery && matchesStatus
                && (!state.filterUnit || word.unit === state.filterUnit)
                && (!state.filterCategory || word.category === state.filterCategory);
        });
        const groupedByUnit = new Map();
        filtered.forEach(word => {
            if (!groupedByUnit.has(word.unit)) groupedByUnit.set(word.unit, new Map());
            const sections = groupedByUnit.get(word.unit);
            if (!sections.has(word.category)) sections.set(word.category, []);
            sections.get(word.category).push(word);
        });
        return `<section class="vocab-panel"><div class="vocab-panel-heading"><div><h2>Vokabelliste</h2><p>${filtered.length} von ${words.length} Wörtern</p></div></div>
            <div class="vocab-list-filters"><label class="vocab-search">Suchen<input type="search" data-action="search" value="${html(state.query)}" placeholder="Englisch, Deutsch, Unit oder Thema"></label>
                <label>Unit<select data-action="filter-unit"><option value="">Alle Units</option>${units.map(unit => `<option value="${html(unit)}" ${state.filterUnit === unit ? 'selected' : ''}>${html(unit)}</option>`).join('')}</select></label>
                <label>Status<select data-action="filter-status"><option value="all" ${state.filterStatus === 'all' ? 'selected' : ''}>Alle</option><option value="new" ${state.filterStatus === 'new' ? 'selected' : ''}>Noch neu</option><option value="due" ${state.filterStatus === 'due' ? 'selected' : ''}>Heute fällig</option><option value="difficult" ${state.filterStatus === 'difficult' ? 'selected' : ''}>Schwierig</option><option value="mastered" ${state.filterStatus === 'mastered' ? 'selected' : ''}>Sicher gelernt</option></select></label>
                <label>Thema<select data-action="filter-category"><option value="">Alle Themen</option>${categories.map(category => `<option value="${html(category)}" ${state.filterCategory === category ? 'selected' : ''}>${html(category)}</option>`).join('')}</select></label>
            </div>
            ${filtered.length ? `<div class="vocab-group-list">${[...groupedByUnit].map(([unit, sections]) => `<section class="vocab-unit-group"><h3 class="vocab-unit-heading">${html(unit)}</h3>${[...sections].map(([category, entries]) => `<section class="vocab-category-group"><h4 class="vocab-list-section-heading">${html(category)}</h4><div class="vocab-list">${entries.map(word => {
                const entry = progressFor(word.id);
                return `<article class="vocab-list-item"><div><strong>${html(word.english)}</strong><span>${html(word.german)}</span><small>${entry.difficult ? 'Schwierig' : entry.seenCount ? 'Bearbeitet' : 'Noch neu'}</small></div>
                    <div class="vocab-list-actions"><button type="button" class="vocab-sound-button" data-action="speak" data-word="${html(word.id)}" aria-label="Aussprache ${html(word.english)}">🔊</button><button type="button" class="vocab-mark-button" data-action="toggle-difficult" data-word="${html(word.id)}" aria-pressed="${entry.difficult}">${entry.difficult ? 'Schwierig ★' : 'Als schwierig markieren'}</button></div></article>`;
            }).join('')}</div></section>`).join('')}</section>`).join('')}</div>` : '<p class="vocab-empty">Für diese Suche und Filter gibt es keine Wörter.</p>'}
        </section>`;
    }

    function render() {
        if (!root) return;
        const summary = window.VocabularyDashboard.summarize(words, state.progress, state.activity);
        const content = {
            dashboard: topDashboard(summary),
            flashcards: renderFlashcards(),
            quiz: renderQuiz(),
            writing: renderWriting(),
            list: renderList()
        }[state.mode];
        root.innerHTML = `
            <section class="vocab-page">
                <div class="vocab-heading"><div><span class="vocab-eyebrow">🇬🇧 ENGLISCH · KLASSE 9</span><h1>Vokabeltrainer</h1><p>Übe in deinem Tempo. Jede kleine Lerneinheit zählt.</p></div></div>
                <nav class="vocab-tabs" aria-label="Lernbereiche">${[['dashboard', 'Übersicht'], ['flashcards', 'Karteikarten'], ['quiz', 'Multiple Choice'], ['writing', 'Schreibtraining'], ['list', 'Vokabelliste']].map(([mode, title]) => `<button type="button" data-action="mode" data-mode="${mode}" class="${state.mode === mode ? 'vocab-tab-active' : ''}" aria-current="${state.mode === mode ? 'page' : 'false'}">${title}</button>`).join('')}</nav>
                ${state.notice ? `<p class="vocab-notice vocab-notice-${html(state.noticeType)}" role="status">${html(state.notice)}</p>` : ''}
                ${!state.loaded ? `<section class="vocab-panel"><p>Dein Lernstand wird geladen …</p></section>` : words.length ? content : `<section class="vocab-empty-state"><span aria-hidden="true">📘</span><h2>Noch keine Vokabeln vorhanden</h2><p>Die Vokabeldaten sind noch leer. Sobald die vorbereiteten Vokabeln ergänzt wurden, kannst du hier Karteikarten, Quiz und Schreibtraining nutzen.</p><a href="./englisch.html">Zur Englisch-Übersicht</a></section>`}
                <footer class="vocab-footer"><a href="./englisch.html">← Zurück zu Englisch</a><span>Dein Fortschritt wird sicher in deinem Lernkonto gespeichert.</span></footer>
            </section>`;
    }

    function speech(wordId) {
        const word = wordsById.get(wordId);
        if (!word) throw new Error('Dieses Wort konnte nicht gefunden werden.');
        if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
            throw new Error('Die Sprachausgabe wird von diesem Browser nicht unterstützt.');
        }
        const voices = window.speechSynthesis.getVoices();
        if (!voices.length) {
            throw new Error('Für die Sprachausgabe ist keine Stimme verfügbar. Prüfe die Spracheinstellungen deines Geräts.');
        }
        const utterance = new SpeechSynthesisUtterance(word.pronunciation || word.english);
        utterance.lang = 'en-US';
        utterance.voice = voices.find(voice => voice.lang.toLowerCase().startsWith('en')) || null;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }

    async function persistReview(word, rating, mode, isCorrect) {
        state.busy = true;
        render();
        try {
            const nextProgress = window.VocabularySpacedRepetition.schedule(progressFor(word.id), rating);
            await window.VocabularySupabase.saveProgress(word.id, nextProgress);
            await window.VocabularySupabase.saveQuizResult(word.id, mode, isCorrect);
            await window.VocabularySupabase.recordActivity();
            state.progress[word.id] = nextProgress;
            const today = todayKey();
            state.activity[today] = { reviewedCount: Number(state.activity[today]?.reviewedCount || 0) + 1 };
            setNotice(isCorrect ? 'Gut gemacht! Dein Lernstand wurde gespeichert.' : 'Das Wort ist für eine spätere Wiederholung vorgemerkt.', isCorrect ? 'success' : 'info');
            return true;
        } catch (error) {
            setNotice(error.message || 'Dein Lernstand konnte nicht gespeichert werden.', 'error');
            return false;
        } finally {
            state.busy = false;
            render();
        }
    }

    function beginSession(kind) {
        const candidates = words.filter(word => {
            const progress = progressFor(word.id);
            const matchesUnit = !state.sessionUnit || word.unit === state.sessionUnit;
            if (!matchesUnit) return false;
            if (kind === 'new') return !progress.seenCount;
            if (kind === 'due') return window.VocabularySpacedRepetition.isDue(progress);
            return progress.difficult;
        });
        state.sessionWords = candidates.slice(0, 10);
        state.sessionIndex = 0;
        state.revealed = false;
        setNotice(state.sessionWords.length ? `Deine Lerneinheit enthält ${state.sessionWords.length} Wörter.` : 'Für diese Auswahl gibt es gerade keine Wörter.', 'info');
        render();
    }

    function newQuestion() {
        const selectedWords = words.filter(word => !state.sessionUnit || word.unit === state.sessionUnit);
        const direction = state.mode === 'quiz' ? 'mixed' : state.direction;
        state.question = window.VocabularyQuiz.makeQuestion(selectedWords, state.progress, direction);
        if (state.mode === 'quiz') state.quizQuestionCount += 1;
        state.answered = false;
        state.answerCorrect = false;
        state.answer = '';
        state.answerText = '';
        render();
    }

    async function answerQuestion(answer, mode) {
        if (!state.question || state.answered || state.busy) return;
        const word = state.question.word;
        const correct = mode === 'writing'
            ? [word.english, ...word.alternatives].some(value => answerKey(value) === answerKey(answer))
            : answer === state.question.correct;
        state.answered = true;
        state.answerCorrect = correct;
        state.answer = answer;
        state.answerText = answer;
        if (mode === 'quiz' && state.quizQuestionCount >= maxQuizQuestions) state.quizFinished = true;
        render();
        await persistReview(word, correct ? 'good' : 'again', mode, correct);
    }

    root?.addEventListener('click', async event => {
        const button = event.target.closest('[data-action]');
        if (!button || state.busy) return;
        const action = button.dataset.action;
        try {
            if (action === 'mode') {
                state.mode = button.dataset.mode;
                state.sessionWords = [];
                if (state.mode === 'quiz' || state.mode === 'writing') state.question = null;
                state.quizQuestionCount = 0;
                state.quizFinished = false;
                setNotice('');
                render();
            } else if (action === 'start-session') {
                beginSession(button.dataset.kind);
            } else if (action === 'reveal') {
                state.revealed = true;
                render();
            } else if (action === 'previous' || action === 'next') {
                state.sessionIndex = Math.max(0, Math.min(state.sessionWords.length - 1, state.sessionIndex + (action === 'next' ? 1 : -1)));
                state.revealed = false;
                render();
            } else if (action === 'rate') {
                const word = state.sessionWords[state.sessionIndex];
                const saved = await persistReview(word, button.dataset.rating, 'flashcard', button.dataset.rating !== 'again');
                if (saved) {
                    state.revealed = false;
                    if (state.sessionIndex < state.sessionWords.length - 1) state.sessionIndex += 1;
                    else state.sessionWords = [];
                    render();
                }
            } else if (action === 'speak') {
                speech(button.dataset.word);
            } else if (action === 'new-question') {
                newQuestion();
            } else if (action === 'restart-quiz') {
                state.quizQuestionCount = 0;
                state.quizFinished = false;
                state.question = null;
                newQuestion();
            } else if (action === 'choose') {
                await answerQuestion(button.dataset.choice, 'quiz');
            } else if (action === 'toggle-difficult') {
                const wordId = button.dataset.word;
                const nextProgress = { ...progressFor(wordId), difficult: !progressFor(wordId).difficult };
                state.busy = true;
                render();
                await window.VocabularySupabase.saveProgress(wordId, nextProgress);
                state.progress[wordId] = nextProgress;
                setNotice(nextProgress.difficult ? 'Als schwierig markiert.' : 'Markierung für schwierige Wörter entfernt.', 'success');
                state.busy = false;
                render();
            }
        } catch (error) {
            state.busy = false;
            setNotice(error.message || 'Die Aktion konnte nicht abgeschlossen werden.', 'error');
            render();
        }
    });

    root?.addEventListener('change', async event => {
        const action = event.target.dataset.action;
        if (action === 'direction') {
            state.direction = event.target.value;
            render();
        } else if (action === 'goal') {
            const goal = Number(event.target.value);
            try {
                await window.VocabularySupabase.saveDailyGoal(goal);
                state.dailyGoal = goal;
                setNotice('Dein tägliches Lernziel wurde gespeichert.', 'success');
            } catch (error) {
                setNotice(error.message || 'Das Lernziel konnte nicht gespeichert werden.', 'error');
            }
            render();
        } else if (action === 'filter-status') {
            state.filterStatus = event.target.value;
            render();
        } else if (action === 'filter-unit') {
            state.filterUnit = event.target.value;
            state.filterCategory = '';
            render();
        } else if (action === 'filter-category') {
            state.filterCategory = event.target.value;
            render();
        } else if (action === 'session-unit') {
            state.sessionUnit = event.target.value;
            state.sessionWords = [];
            state.question = null;
            state.quizQuestionCount = 0;
            state.quizFinished = false;
            state.answered = false;
            state.answer = '';
            state.answerText = '';
            render();
        }
    });

    root?.addEventListener('input', event => {
        if (event.target.dataset.action === 'search') {
            const selectionStart = event.target.selectionStart;
            state.query = event.target.value;
            render();
            const input = root.querySelector('[data-action="search"]');
            input?.focus();
            input?.setSelectionRange(selectionStart, selectionStart);
        }
    });

    root?.addEventListener('submit', event => {
        if (event.target.dataset.form !== 'writing') return;
        event.preventDefault();
        const answer = new FormData(event.target).get('answer');
        answerQuestion(String(answer || ''), 'writing');
    });

    window.addEventListener('lernraum:cloud-state', event => {
        const cloud = event.detail;
        if (cloud.status === 'guest') {
            state.progress = {};
            state.activity = {};
            state.quizResults = [];
            state.dailyGoal = 10;
            state.loaded = true;
            setNotice(cloud.message || 'Melde dich an, damit dein Lernstand automatisch geladen wird.', 'info');
            render();
        } else if (cloud.status === 'synced' && cloud.email) {
            refreshFromCloud(false).then(() => {
                setNotice('Dein Lernstand ist automatisch mit deinem Lernkonto synchronisiert.', 'success');
                render();
            }).catch(error => {
                setNotice(error.message || 'Dein Lernstand konnte nicht automatisch geladen werden.', 'error');
                render();
            });
        } else if (cloud.status === 'error') {
            setNotice(cloud.message || 'Die automatische Synchronisierung ist fehlgeschlagen.', 'error');
            render();
        }
    });

    async function synchronizeOnReturn() {
        const cloud = window.LernraumCloud.getState();
        if (!cloud.email || !navigator.onLine || document.visibilityState === 'hidden') return;
        try {
            await window.LernraumCloud.syncNow();
            await refreshFromCloud(false);
            setNotice('Dein Lernstand ist automatisch mit deinem Lernkonto synchronisiert.', 'success');
        } catch (error) {
            setNotice(error.message || 'Dein Lernstand konnte nicht automatisch synchronisiert werden.', 'error');
        }
        render();
    }

    window.addEventListener('focus', synchronizeOnReturn);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') synchronizeOnReturn();
    });
    window.addEventListener('online', synchronizeOnReturn);

    render();
    refreshFromCloud().then(() => {
        setNotice('Dein Lernstand ist automatisch mit deinem Lernkonto synchronisiert.', 'success');
        render();
    }).catch(error => {
        state.loaded = true;
        setNotice(error.message || 'Dein Lernstand konnte nicht geladen werden.', 'error');
        render();
    });
})();
