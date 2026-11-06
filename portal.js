const subjects = [
    { id: 'deutsch', name: 'Deutsch', icon: '📖', file: 'deutsch.html', group: 'Sprachen' },
    { id: 'mathematik', name: 'Mathematik', icon: '📐', file: 'mathematik.html', group: 'Mathematik', available: true, note: 'Grundlagen, Übungen und Prüfungstraining für den Hauptschulabschluss.' },
    { id: 'biologie', name: 'Biologie', icon: '🧬', file: 'biologie.html', group: 'Naturwissenschaften' },
    { id: 'chemie', name: 'Chemie', icon: '⚗️', file: 'chemie.html', group: 'Naturwissenschaften', available: true },
    { id: 'physik', name: 'Physik', icon: '⚡', file: 'physik.html', group: 'Naturwissenschaften' },
    { id: 'geschichte', name: 'Geschichte', icon: '🏛️', file: 'geschichte.html', group: 'Gesellschaft' },
    { id: 'erdkunde', name: 'Geographie / Erdkunde', icon: '🌍', file: 'geographie.html', group: 'Gesellschaft' }
];

const currentSubject = subjects.find(subject => subject.id === document.documentElement.dataset.subject);
const app = document.getElementById('portalApp');

function renderNavigation(activeSubjectId = '') {
    return `
        <aside class="portal-sidebar">
            <a class="portal-brand" href="./index.html">
                <span class="portal-brand-icon" aria-hidden="true">📚</span>
                <span class="portal-brand-copy"><strong>Lernraum 9</strong><small>DEIN LERNRAUM</small></span>
            </a>
            <nav aria-label="Fächer und Navigation">
                <a class="portal-nav-link portal-dashboard-link ${document.documentElement.dataset.page === 'home' ? 'active' : ''}" href="./index.html">📊 Dashboard</a>
                <h2 class="portal-nav-heading">DEINE FÄCHER</h2>
                ${subjects.map(subject => `
                    <a class="portal-nav-link ${subject.id === activeSubjectId ? 'active' : ''}" href="./${subject.file}">
                        <span>${subject.icon}</span><span>${subject.name}</span>
                    </a>
                `).join('')}
            </nav>
            <div class="portal-sidebar-footer">
                <span aria-hidden="true">✨</span>
                <p><strong>Lernraum · Klasse 9</strong><br>Fachpläne können je nach Schule variieren.</p>
            </div>
        </aside>
    `;
}

function renderSubjectCards() {
    return subjects.map(subject => `
        <a class="subject-card portal-subject-card ${subject.available ? '' : 'placeholder-card'}" href="./${subject.file}">
            <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
            <span class="subject-status ${subject.available ? 'available' : ''}">
                ${subject.available ? 'Themen verfügbar' : 'Platzhalter · Inhalte folgen'}
            </span>
            <h3>${subject.name}</h3>
            <p>${subject.available
                ? 'Themenübersicht und Lernmodule'
                : subject.note || `Noch keine Lerninhalte für ${subject.name} hinterlegt.`}</p>
            <span class="portal-card-link">Fach öffnen →</span>
        </a>
    `).join('');
}

function renderDashboard() {
    return `
        <section class="portal-hero">
            <span class="pill">LERNRAUM · KLASSE 9</span>
            <h1>Willkommen in deinem Lernraum 👋</h1>
            <p>Wähle ein Fach über die Navigation und öffne dort ein Thema. Die Inhalte werden Schritt für Schritt ergänzt.</p>
        </section>
        <section class="portal-stats" aria-label="Lernstand">
            <article class="card">
                <h2>Chemie-Module</h2>
                <p class="portal-stat-number" id="portalChemistryModules">— / 10</p>
                <p>Module abgeschlossen</p>
            </article>
            <article class="card">
                <h2>Quiz-Bestleistung</h2>
                <p class="portal-stat-number" id="portalChemistryBestScore">—%</p>
                <p>Dein bisheriger Chemie-Quizstand</p>
            </article>
            <article class="card">
                <h2>Fächer</h2>
                <p class="portal-stat-number">${subjects.length}</p>
                <p>Chemie mit Lerninhalten, weitere Fächer als Platzhalter</p>
            </article>
        </section>
    `;
}

function loadDashboardState() {
    window.LernraumDB.get('chemieLernState').then(state => {
        document.getElementById('portalChemistryModules').textContent =
            `${Array.isArray(state?.completedModules) ? state.completedModules.length : 0} / 10`;
        document.getElementById('portalChemistryBestScore').textContent =
            `${Number.isFinite(state?.quizBestScore) ? state.quizBestScore : 0}%`;
    }).catch(error => {
        console.error('Der Chemie-Lernstand konnte im Dashboard nicht aus IndexedDB geladen werden:', error);
    });
}

function renderSubjectPage(subject) {
    if (subject.id === 'mathematik') {
        const mathTopics = [
            { id: 'algebra', icon: '➗', title: 'Arithmetik & Algebra', description: 'Terme, Gleichungen, Potenz- und Wurzelrechnung, Prozent- und Zinsrechnung.' },
            { id: 'functions', icon: '📈', title: 'Funktionen', description: 'Lineare Funktionen, Steigung und Funktionsgraphen.' },
            { id: 'geometry', icon: '📐', title: 'Geometrie', description: 'Pythagoras sowie Prisma, Zylinder und Pyramide.' },
            { id: 'probability', icon: '🎲', title: 'Stochastik', description: 'Baumdiagramme, Pfadregeln und Statistik.' }
        ];
        return `
            <section class="portal-hero portal-subject-hero">
                <a class="portal-back-link" href="./index.html">← Dashboard</a>
                <span class="pill">${subject.icon} MATHEMATIK · KLASSE 9 · WERKREALSCHULE</span>
                <h1>Mathematik</h1>
                <p>Wähle ein Themengebiet und öffne dort Erklärungen und Übungen. Zusätzlich kannst du eine Prüfungssimulation starten.</p>
            </section>
            <section class="portal-content-section">
                <div class="portal-section-heading">
                    <div><span class="pill">THEMENÜBERSICHT</span><h2>Mathematik-Themen</h2></div>
                    <p>Fach auswählen → Thema öffnen → lernen</p>
                </div>
                <div class="subject-grid">
                    ${mathTopics.map(topic => `
                        <a class="subject-card portal-subject-card" href="./mathematik-themen.html?topic=${topic.id}">
                            <span class="subject-icon" aria-hidden="true">${topic.icon}</span>
                            <span class="subject-status available">Erklärungen &amp; Übungen</span>
                            <h3>${topic.title}</h3>
                            <p>${topic.description}</p>
                            <span class="portal-card-link">Thema öffnen →</span>
                        </a>
                    `).join('')}
                    <a class="subject-card portal-subject-card math-exam-subject-card" href="./mathematik-lernen.html?view=exam">
                        <span class="subject-icon" aria-hidden="true">📝</span>
                        <span class="subject-status available">Prüfungstraining</span>
                        <h3>Prüfungssimulator</h3>
                        <p>135 Minuten · Pflichtteile A1 und A2 · zwei von drei Aufgaben im Wahlteil B.</p>
                        <span class="portal-card-link">Prüfung starten →</span>
                    </a>
                    <a class="subject-card portal-subject-card" href="./mathematik-lernen.html?view=mental">
                        <span class="subject-icon" aria-hidden="true">🧠</span>
                        <span class="subject-status available">Kurze Rechenübungen</span>
                        <h3>Kopfrechnen</h3>
                        <p>Trainiere Rechenfertigkeiten mit zufälligen Aufgaben in drei Schwierigkeitsstufen.</p>
                        <span class="portal-card-link">Jetzt üben →</span>
                    </a>
                </div>
                <p class="portal-curriculum-note">Die Simulation ist ein Lernangebot und keine Originalprüfung. Prüfungsinhalte und Vorgaben können sich ändern.</p>
            </section>
        `;
    }

    if (subject.id === 'deutsch') {
        return `
            <section class="portal-hero portal-subject-hero">
                <a class="portal-back-link" href="./index.html">← Dashboard</a>
                <span class="pill">${subject.icon} SPRACHEN · KLASSE 9</span>
                <h1>Deutsch</h1>
                <p>Ein kurzer Einstieg in die Rechtschreibung: Woran erkennst du, ob „das“ oder „dass“ richtig ist?</p>
            </section>
            <section class="portal-content-section">
                <div class="portal-section-heading">
                    <div><span class="pill">THEMA</span><h2>Rechtschreibung: das oder dass?</h2></div>
                </div>
                <article class="card">
                    <h3>Die Regel</h3>
                    <p><strong>„Das“</strong> ist ein Artikel oder ein Fürwort. Du kannst es oft durch „dieses“, „jenes“ oder „welches“ ersetzen.</p>
                    <p class="visual-box"><strong>Beispiel:</strong> Das Buch, <em>das</em> ich lese, ist spannend. → Das Buch, <em>welches</em> ich lese, ist spannend.</p>
                    <p><strong>„Dass“</strong> verbindet einen Hauptsatz mit einem Nebensatz. Es lässt sich nicht durch „dieses“, „jenes“ oder „welches“ ersetzen.</p>
                    <p class="analogy-box"><strong>Beispiel:</strong> Ich hoffe, <em>dass</em> du heute Zeit hast.</p>
                    <h3>Übung</h3>
                    <p>Ergänze die Lücken. Öffne danach die Lösung und prüfe deine Antworten.</p>
                    <ol class="spelling-exercise">
                        <li>Ich glaube, ___ es morgen regnet.</li>
                        <li>Das Fahrrad, ___ vor dem Haus steht, ist neu.</li>
                        <li>Sie weiß, ___ der Film bald beginnt.</li>
                    </ol>
                    <details class="spelling-answer">
                        <summary>Lösung anzeigen</summary>
                        <p>1. <strong>dass</strong> · 2. <strong>das</strong> (ersetzbar durch „welches“) · 3. <strong>dass</strong></p>
                    </details>
                </article>
            </section>
        `;
    }

    if (subject.id === 'chemie') {
        return `
            <section class="portal-hero portal-subject-hero">
                <a class="portal-back-link" href="./index.html">← Dashboard</a>
                <span class="pill">${subject.icon} NATURWISSENSCHAFTEN · KLASSE 9</span>
                <h1>Chemie</h1>
                <p>Wähle ein Thema aus der Übersicht. Bei „Atome und Atommodelle“ findest du die vorhandenen vollständigen Lernmodule, Erklärungen, Experimente und Fragen.</p>
            </section>
            <section class="portal-content-section">
                <div class="portal-section-heading"><div><span class="pill">THEMENÜBERSICHT</span><h2>Chemie-Themen</h2></div></div>
                <div class="subject-grid">
                    <a class="subject-card" href="./chemie-atome.html">
                        <span class="subject-icon" aria-hidden="true">⚛️</span>
                        <span class="subject-status available">Inhalte verfügbar</span>
                        <h3>Atome und Atommodelle</h3>
                        <p>Demokrit, Dalton, Rutherford, Bohr, Elementarteilchen, Periodensystem, Übungen und Quiz.</p>
                        <span class="portal-card-link">Thema lernen →</span>
                    </a>
                    <article class="subject-card placeholder-card">
                        <span class="subject-icon" aria-hidden="true">🧪</span>
                        <span class="subject-status">Platzhalter · Inhalte folgen</span>
                        <h3>Weitere Chemie-Themen</h3>
                        <p>Hier können später zusätzliche Themen aus deinem Chemieunterricht ergänzt werden.</p>
                    </article>
                </div>
            </section>
        `;
    }

    return `
        <section class="portal-hero portal-subject-hero">
            <a class="portal-back-link" href="./index.html">← Dashboard</a>
            <span class="pill">${subject.icon} ${subject.group.toUpperCase()} · KLASSE 9</span>
            <h1>${subject.name}</h1>
            <p>${subject.note || `Für ${subject.name} sind noch keine Lerninhalte hinterlegt.`}</p>
        </section>
        <section class="portal-content-section">
            <div class="portal-section-heading"><div><span class="pill">THEMENÜBERSICHT</span><h2>Themen in ${subject.name}</h2></div></div>
            <div class="subject-grid">
                <article class="subject-card placeholder-card">
                    <span class="subject-status">Platzhalter · Inhalte folgen</span>
                    <h3>Lernmodule und Themen</h3>
                    <p>Für dieses Fach gibt es noch keine ausgearbeiteten Themen. Sobald Inhalte bereitstehen, erscheint hier ein eigener Themenlink.</p>
                </article>
                <article class="subject-card placeholder-card">
                    <span class="subject-status">Platzhalter · Inhalte folgen</span>
                    <h3>Übungen und Tests</h3>
                    <p>Übungen und Selbsttests für dieses Fach sind noch nicht verfügbar.</p>
                </article>
            </div>
            <p class="portal-curriculum-note">Welche Themen in Klasse 9 behandelt werden, hängt von Bundesland, Schulform und Unterrichtsplanung ab.</p>
        </section>
    `;
}

function renderAtomTopicPage() {
    const tools = [
        { id: 'modules', icon: '📚', title: 'Lernmodule', description: 'Lerne Atommodelle, Elementarteilchen und das Periodensystem Schritt für Schritt.', label: '10 Lernmodule' },
        { id: 'atommodel', icon: '⚛️', title: 'Interaktives Atom', description: 'Verändere Protonen, Neutronen und Elektronen und beobachte, was sich am Atom ändert.', label: 'Modell ausprobieren' },
        { id: 'exercises', icon: '✏️', title: 'Übungen', description: 'Übe die wichtigsten Begriffe und Zusammenhänge mit schrittweiser Rückmeldung.', label: 'Aufgaben bearbeiten' },
        { id: 'quiz', icon: '🎯', title: 'Quiz-Modus', description: 'Teste dein Wissen zu Atomen, Atommodellen und dem Periodensystem.', label: 'Wissen testen' },
        { id: 'progress', icon: '📈', title: 'Lernfortschritt', description: 'Sieh nach, welche Module du abgeschlossen hast und wie dein Quiz gelaufen ist.', label: 'Fortschritt ansehen' },
        { id: 'lexicon', icon: '📖', title: 'Chemie-Lexikon', description: 'Schlage wichtige Fachbegriffe aus dem Themenbereich Atomaufbau nach.', label: 'Begriffe nachschlagen' }
    ];

    return `
        <section class="portal-hero portal-subject-hero">
            <a class="portal-back-link" href="./chemie.html">← Chemie-Themen</a>
            <span class="pill">⚛️ CHEMIE · KLASSE 9</span>
            <h1>Atome und Atommodelle</h1>
            <p>Wähle aus, wie du lernen möchtest. Die Lernmodule öffnen sich erst, wenn du sie hier auswählst.</p>
        </section>
        <section class="portal-content-section">
            <div class="portal-section-heading">
                <div><span class="pill">LERNWERKZEUGE</span><h2>Womit möchtest du lernen?</h2></div>
            </div>
            <div class="subject-grid">
                ${tools.map(tool => `
                    <a class="subject-card portal-subject-card" href="./chemie-atome-lernen.html?view=${tool.id}">
                        <span class="subject-icon" aria-hidden="true">${tool.icon}</span>
                        <span class="subject-status available">${tool.label}</span>
                        <h3>${tool.title}</h3>
                        <p>${tool.description}</p>
                        <span class="portal-card-link">Öffnen →</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
}

function renderMathTopicPage() {
    const topics = {
        algebra: {
            icon: '➗', title: 'Arithmetik & Algebra', description: 'Terme, Gleichungen, Brüche, Formeln, Potenz- und Wurzelrechnung sowie Prozent- und Zinsrechnung.',
            subtopics: [
                { id: 'terms', icon: '🔤', title: 'Terme', description: 'Terme ordnen, zusammenfassen und Klammern auflösen.' },
                { id: 'equations', icon: '⚖️', title: 'Gleichungen', description: 'Gleichungen schrittweise lösen und die Lösung prüfen.' },
                { id: 'fractions', icon: '½', title: 'Brüche & rationale Zahlen', description: 'Brüche kürzen, erweitern und mit Vorzeichen rechnen.' },
                { id: 'rearranging-formulas', icon: '🔄', title: 'Formeln umstellen', description: 'Formeln nach der gesuchten Variablen umstellen.' },
                { id: 'word-equations', icon: '📝', title: 'Textaufgaben mit Gleichungen', description: 'Text in Gleichungen übersetzen und Ergebnisse prüfen.' },
                { id: 'powers', icon: '²', title: 'Potenzrechnung', description: 'Potenzen berechnen und Potenzgesetze anwenden.' },
                { id: 'roots', icon: '√', title: 'Wurzelrechnung', description: 'Quadratwurzeln bestimmen und mit Wurzeln rechnen.' },
                { id: 'percent', icon: '%', title: 'Prozentrechnung', description: 'Grundwert, Prozentwert und Prozentsatz berechnen.' },
                { id: 'interest', icon: '€', title: 'Zinsrechnung', description: 'Jahreszinsen und einfache Zinsaufgaben berechnen.' }
            ]
        },
        functions: {
            icon: '📈', title: 'Funktionen', description: 'Lineare Funktionen, Steigung und Funktionsgraphen.',
            subtopics: [
                { id: 'linear-functions', icon: '📉', title: 'Lineare Funktionen', description: 'Funktionsgleichungen der Form y = mx + b verstehen.' },
                { id: 'slope', icon: '↗️', title: 'Steigung', description: 'Die Steigung aus einer Gleichung oder zwei Punkten bestimmen.' },
                { id: 'graphs', icon: '📊', title: 'Funktionsgraphen', description: 'Geraden zeichnen und Graphen ablesen.' }
            ]
        },
        geometry: {
            icon: '📐', title: 'Geometrie', description: 'Satz des Pythagoras und Berechnungen an Körpern.',
            subtopics: [
                { id: 'pythagoras', icon: '📐', title: 'Satz des Pythagoras', description: 'Fehlende Seiten im rechtwinkligen Dreieck berechnen.' },
                { id: 'prism', icon: '📦', title: 'Prisma', description: 'Volumen und Oberfläche eines Prismas berechnen.' },
                { id: 'cylinder', icon: '🥫', title: 'Zylinder', description: 'Grundfläche, Volumen und Oberfläche bestimmen.' },
                { id: 'pyramid', icon: '🔺', title: 'Pyramide', description: 'Volumen einer Pyramide aus Grundfläche und Höhe berechnen.' }
            ]
        },
        probability: {
            icon: '🎲', title: 'Stochastik', description: 'Baumdiagramme, Pfadregeln und Statistik.',
            subtopics: [
                { id: 'tree-diagrams', icon: '🌳', title: 'Baumdiagramme', description: 'Mehrstufige Zufallsversuche übersichtlich darstellen.' },
                { id: 'path-rules', icon: '🧮', title: 'Pfadregeln', description: 'Wahrscheinlichkeiten entlang von Pfaden berechnen.' },
                { id: 'statistics', icon: '📊', title: 'Statistik', description: 'Mittelwert und Median aus Daten bestimmen.' }
            ]
        }
    };
    const requestedTopic = new URLSearchParams(window.location.search).get('topic');
    const topicId = topics[requestedTopic] ? requestedTopic : 'algebra';
    const topic = topics[topicId];

    return `
        <section class="portal-hero portal-subject-hero">
            <a class="portal-back-link" href="./mathematik.html">← Mathematik-Themen</a>
            <span class="pill">${topic.icon} MATHEMATIK · KLASSE 9</span>
            <h1>${topic.title}</h1>
            <p>${topic.description} Wähle ein Unterthema aus, um die Erklärung und passende Übungen zu öffnen.</p>
        </section>
        <section class="portal-content-section">
            <div class="portal-section-heading">
                <div><span class="pill">LERNWERKZEUGE</span><h2>Womit möchtest du lernen?</h2></div>
            </div>
            <div class="subject-grid">
                ${topic.subtopics.map(subtopic => `
                    <a class="subject-card portal-subject-card" href="./mathematik-lernen.html?view=topics&amp;topic=${topicId}&amp;subtopic=${subtopic.id}">
                        <span class="subject-icon" aria-hidden="true">${subtopic.icon}</span>
                        <span class="subject-status available">Erklärung &amp; Übungen</span>
                        <h3>${subtopic.title}</h3>
                        <p>${subtopic.description}</p>
                        <span class="portal-card-link">Öffnen →</span>
                    </a>
                `).join('')}
                <a class="subject-card portal-subject-card math-exam-subject-card" href="./mathematik-lernen.html?view=exam&amp;topic=${topicId}">
                        <span class="subject-icon" aria-hidden="true">📝</span>
                        <span class="subject-status available">Prüfungstraining</span>
                        <h3>Prüfungssimulator</h3>
                        <p>135 Minuten · A1 und A2 verpflichtend · zwei von drei Aufgaben in Teil B.</p>
                        <span class="portal-card-link">Prüfung starten →</span>
                </a>
            </div>
        </section>
    `;
}

function renderMathLearningNavigation() {
    const topicTitles = {
        algebra: 'Arithmetik & Algebra',
        functions: 'Funktionen',
        geometry: 'Geometrie',
        probability: 'Stochastik'
    };
    const requestedTopic = new URLSearchParams(window.location.search).get('topic');
    const topicId = topicTitles[requestedTopic] ? requestedTopic : 'algebra';

    return `
        <aside class="portal-sidebar">
            <a class="portal-brand" href="./index.html">
                <span class="portal-brand-icon" aria-hidden="true">📚</span>
                <span class="portal-brand-copy"><strong>Lernraum 9</strong><small>DEIN LERNRAUM</small></span>
            </a>
            <nav aria-label="Hauptnavigation">
                <h2 class="portal-nav-heading">SCHNELLZUGRIFF</h2>
                <a class="portal-nav-link" href="./index.html">🏠 Home</a>
                <a class="portal-nav-link" href="./mathematik.html">📐 Mathe-Themen</a>
                <a class="portal-nav-link active" aria-current="page" href="./mathematik-themen.html?topic=${topicId}">${topicTitles[topicId]}</a>
            </nav>
        </aside>
    `;
}

function renderMathLearningPage() {
    const topicId = new URLSearchParams(window.location.search).get('topic');
    const topicIds = ['algebra', 'functions', 'geometry', 'probability'];
    const returnUrl = topicIds.includes(topicId)
        ? `./mathematik-themen.html?topic=${topicId}`
        : './mathematik.html';
    return `
        <section id="mathLearningApp" class="math-learning-app">
            <section class="portal-hero portal-subject-hero math-hero">
                <a class="portal-back-link" href="${returnUrl}">← Zurück zu den Mathematik-Themen</a>
                <div class="math-hero-actions">
                    <span class="pill">📐 MATHEMATIK · KLASSE 9 · WERKREALSCHULE</span>
                    <button class="math-button math-theme-toggle" type="button" id="mathThemeToggle" aria-label="Farbschema umschalten">☀️ Hellmodus</button>
                </div>
                <h1>Mathematik für deinen Abschluss</h1>
                <p>Erklärungen, Übungen und Prüfungstraining für den Hauptschulabschluss in Baden-Württemberg.</p>
            </section>
            <nav class="math-tabs" aria-label="Mathematik-Lernwerkzeuge">
                <button class="math-tab active" type="button" data-math-view="topics">Themen &amp; Erklärungen</button>
                <button class="math-tab" type="button" data-math-view="practice">Übungsdatenbank</button>
                <button class="math-tab" type="button" data-math-view="mental">Kopfrechnen</button>
                <button class="math-tab" type="button" data-math-view="exam">Prüfungssimulator</button>
            </nav>
            <div id="mathViewTopics" class="math-view"></div>
            <div id="mathViewPractice" class="math-view hidden"></div>
            <div id="mathViewMental" class="math-view hidden"></div>
            <div id="mathViewExam" class="math-view hidden"></div>
            <div id="mathLiveRegion" class="math-sr-only" aria-live="polite"></div>
        </section>
    `;
}

if (app) {
    const page = document.documentElement.dataset.page;
    const subject = currentSubject;
    if (page === 'topic') {
        app.innerHTML = `
            ${renderNavigation('chemie')}
            <main class="portal-main">
                <header class="portal-topbar"><span>Lernplattform · Klasse 9</span><a href="./index.html">Startseite</a></header>
                ${renderAtomTopicPage()}
                <footer class="portal-footer">Lernraum 9 · Fachinhalte werden fortlaufend ergänzt.</footer>
            </main>
        `;
    } else if (page === 'math-topic') {
        app.innerHTML = `
            ${renderNavigation('mathematik')}
            <main class="portal-main">
                <header class="portal-topbar"><span>Lernplattform · Klasse 9</span><a href="./index.html">Startseite</a></header>
                ${renderMathTopicPage()}
                <footer class="portal-footer">Lernraum 9 · Mathematik · Klasse 9.</footer>
            </main>
        `;
    } else if (page === 'math-learning') {
        app.classList.add('math-learning-layout');
        app.innerHTML = `
            ${renderMathLearningNavigation()}
            <main class="portal-main">
                <header class="portal-topbar"><span>Lernplattform · Klasse 9</span><a href="./index.html">Startseite</a></header>
                ${renderMathLearningPage()}
                <footer class="portal-footer">Lernraum 9 · Mathematik · Klasse 9.</footer>
            </main>
        `;
    } else if (page === 'subject' && !subject) {
        app.innerHTML = `${renderNavigation()}<main class="portal-main"><h1>Fach nicht gefunden</h1><p>Das angeforderte Fach ist nicht in der Fächerliste.</p><a href="./index.html">Zum Dashboard</a></main>`;
    } else {
        app.innerHTML = `
            ${renderNavigation(subject?.id || '')}
            <main class="portal-main">
                <header class="portal-topbar"><span>Lernplattform · Klasse 9</span>${page === 'home' ? '' : '<a href="./index.html">Startseite</a>'}</header>
                ${page === 'home' ? renderDashboard() : renderSubjectPage(subject)}
                ${page === 'home' ? '' : '<footer class="portal-footer">Lernraum 9 · Fachinhalte werden fortlaufend ergänzt.</footer>'}
            </main>
        `;
    }

    if (page === 'home') loadDashboardState();
}
