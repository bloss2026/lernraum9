const subjects = [
    { id: 'deutsch', name: 'Deutsch', icon: '📖', file: 'deutsch.html', group: 'Sprachen' },
    { id: 'mathematik', name: 'Mathematik', icon: '📐', file: 'mathematik.html', group: 'Mathematik', available: true, note: 'Zehn Themengebiete mit Erklärungen und Übungen.' },
    { id: 'biologie', name: 'Biologie', icon: '🧬', file: 'biologie.html', group: 'Naturwissenschaften' },
    { id: 'chemie', name: 'Chemie', icon: '⚗️', file: 'chemie.html', group: 'Naturwissenschaften', available: true },
    { id: 'physik', name: 'Physik', icon: '⚡', file: 'physik.html', group: 'Naturwissenschaften', available: true, note: 'Erklärungen und Übungen zu wichtigen Physik-Themen der 9. Klasse.' },
    { id: 'geschichte', name: 'Geschichte', icon: '🏛️', file: 'geschichte.html', group: 'Gesellschaft' },
    { id: 'erdkunde', name: 'Geographie / Erdkunde', icon: '🌍', file: 'geographie.html', group: 'Gesellschaft' }
];

const physicsTopics = [
    {
        id: 'mechanics', icon: '🏃', title: 'Bewegung und Kräfte',
        description: 'Geschwindigkeit, Beschleunigung und Kräfte beschreiben und berechnen.',
        subtopics: [
            { id: 'speed', icon: '⏱️', title: 'Geschwindigkeit', description: 'Strecke, Zeit und Geschwindigkeit mit v = s/t berechnen.' },
            { id: 'acceleration', icon: '🚀', title: 'Beschleunigung', description: 'Änderungen der Geschwindigkeit pro Zeit untersuchen.' },
            { id: 'forces', icon: '🧲', title: 'Kräfte', description: 'Kraftwirkungen, Gewichtskraft und Newtons Grundgesetz kennenlernen.' }
        ]
    },
    {
        id: 'electricity', icon: '⚡', title: 'Elektrizität',
        description: 'Stromstärke, Spannung, Widerstand und elektrische Leistung verstehen.',
        subtopics: [
            { id: 'current-voltage', icon: '🔋', title: 'Stromstärke und Spannung', description: 'Ladung, Stromstärke und Spannung im Stromkreis erklären.' },
            { id: 'resistance', icon: 'Ω', title: 'Elektrischer Widerstand', description: 'Das Ohmsche Gesetz anwenden und Widerstände berechnen.' },
            { id: 'circuits', icon: '🔌', title: 'Reihen- und Parallelschaltung', description: 'Strom und Spannung in verschiedenen Schaltungen vergleichen.' },
            { id: 'electric-power', icon: '💡', title: 'Elektrische Leistung und Energie', description: 'Leistung und verbrauchte elektrische Energie bestimmen.' }
        ]
    },
    {
        id: 'optics', icon: '🔦', title: 'Optik und Licht',
        description: 'Lichtausbreitung, Spiegelung, Brechung und Linsen untersuchen.',
        subtopics: [
            { id: 'light-reflection', icon: '🪞', title: 'Licht und Spiegelung', description: 'Lichtstrahlen und das Reflexionsgesetz verstehen.' },
            { id: 'refraction', icon: '💧', title: 'Lichtbrechung', description: 'Erklären, warum Licht beim Medienwechsel seine Richtung ändert.' },
            { id: 'lenses', icon: '🔍', title: 'Linsen und Bilder', description: 'Bilder an Sammellinsen konstruieren und berechnen.' }
        ]
    },
    {
        id: 'thermal', icon: '🌡️', title: 'Wärme und Temperatur',
        description: 'Temperatur, Wärmeübertragung und Ausdehnung von Stoffen erklären.',
        subtopics: [
            { id: 'temperature-heat', icon: '🌡️', title: 'Temperatur und Wärme', description: 'Temperatur von übertragener Wärme unterscheiden.' },
            { id: 'heat-capacity', icon: '🔥', title: 'Wärmemenge berechnen', description: 'Wärmeenergie mit Masse, Stoff und Temperaturänderung bestimmen.' },
            { id: 'thermal-expansion', icon: '↔️', title: 'Wärmeausdehnung', description: 'Ausdehnung von Festkörpern, Flüssigkeiten und Gasen erklären.' },
            { id: 'heat-transfer', icon: '♨️', title: 'Wärmeübertragung', description: 'Wärmeleitung, Strömung und Wärmestrahlung unterscheiden.' }
        ]
    },
    {
        id: 'magnetism', icon: '🧲', title: 'Magnetismus',
        description: 'Magnetfelder, Elektromagnete und elektromagnetische Induktion erforschen.',
        subtopics: [
            { id: 'magnetic-fields', icon: '🧭', title: 'Magnetische Felder', description: 'Feldlinien und Kräfte zwischen Magnetpolen deuten.' },
            { id: 'electromagnets', icon: '🌀', title: 'Elektromagnete', description: 'Einfluss von Strom, Windungszahl und Eisenkern untersuchen.' },
            { id: 'induction', icon: '⚙️', title: 'Elektromagnetische Induktion', description: 'Spannung durch Änderung eines Magnetfelds erzeugen.' }
        ]
    },
    {
        id: 'waves-sound', icon: '🔊', title: 'Schall und Wellen',
        description: 'Schwingungen, Frequenz, Wellenlänge und Schallausbreitung beschreiben.',
        subtopics: [
            { id: 'vibrations-waves', icon: '〰️', title: 'Schwingungen und Wellen', description: 'Frequenz, Periodendauer und Wellenlänge verknüpfen.' },
            { id: 'sound', icon: '🎵', title: 'Schall', description: 'Entstehung, Ausbreitung und Wahrnehmung von Schall erklären.' },
            { id: 'echo', icon: '⛰️', title: 'Echo und Entfernung', description: 'Mit der Schalllaufzeit Entfernungen bestimmen.' }
        ]
    },
    {
        id: 'energy', icon: '♻️', title: 'Energie und Leistung',
        description: 'Energieformen, Energieumwandlung, Arbeit und Wirkungsgrad anwenden.',
        subtopics: [
            { id: 'energy-forms', icon: '🔄', title: 'Energieformen und Umwandlung', description: 'Energieformen in Alltag und Technik erkennen.' },
            { id: 'work-power', icon: '🏋️', title: 'Arbeit und Leistung', description: 'Mechanische Arbeit und Leistung berechnen.' },
            { id: 'efficiency', icon: '📊', title: 'Wirkungsgrad', description: 'Nutzenergie und zugeführte Energie vergleichen.' }
        ]
    },
    {
        id: 'fluids', icon: '🌊', title: 'Druck und Auftrieb',
        description: 'Druck, Dichte und Auftrieb in Flüssigkeiten und Gasen untersuchen.',
        subtopics: [
            { id: 'pressure', icon: '⬇️', title: 'Druck', description: 'Druck als Kraft pro Fläche berechnen.' },
            { id: 'density', icon: '⚖️', title: 'Dichte', description: 'Masse, Volumen und Dichte verknüpfen.' },
            { id: 'buoyancy', icon: '🛟', title: 'Auftrieb', description: 'Erklären und berechnen, warum Körper in Flüssigkeiten aufsteigen oder sinken.' }
        ]
    },
    {
        id: 'atomic-physics', icon: '☢️', title: 'Atome und Radioaktivität',
        description: 'Atomkerne, Strahlungsarten und den radioaktiven Zerfall kennenlernen.',
        subtopics: [
            { id: 'atoms-nuclei', icon: '⚛️', title: 'Atome und Atomkerne', description: 'Protonen, Neutronen, Elektronen und Isotope unterscheiden.' },
            { id: 'radiation', icon: '☢️', title: 'Radioaktive Strahlung', description: 'Alpha-, Beta- und Gammastrahlung vergleichen.' },
            { id: 'half-life', icon: '⌛', title: 'Halbwertszeit', description: 'Die Abnahme radioaktiver Stoffe schrittweise berechnen.' }
        ]
    }
];

const currentSubject = subjects.find(subject => subject.id === document.documentElement.dataset.subject);
const app = document.getElementById('portalApp');
const subjectProgressTotals = {
    mathematik: 10,
    physik: 9,
    chemie: 10
};

async function readSubjectProgressState() {
    if (!window.LernraumDB) return { subjects: {} };
    const state = await window.LernraumDB.get('lernraumFachFortschritte');
    return state && typeof state === 'object' ? state : { subjects: {} };
}

async function updateSubjectProgress(subjectId, topicId) {
    if (!subjectId || !window.LernraumDB) return;

    const state = await readSubjectProgressState();
    state.subjects = state.subjects || {};
    const entry = state.subjects[subjectId] || { topics: [] };
    const topics = Array.isArray(entry.topics) ? entry.topics : [];
    if (topicId && !topics.includes(topicId)) {
        topics.push(topicId);
    }

    state.subjects[subjectId] = {
        ...entry,
        topics,
        lastUpdated: Date.now()
    };

    await window.LernraumDB.set('lernraumFachFortschritte', state);
    refreshSubjectProgressCards();
}

async function currentSubjectProgress(subjectId) {
    const state = await readSubjectProgressState();
    const entry = state.subjects && state.subjects[subjectId] ? state.subjects[subjectId] : { topics: [] };
    const topics = Array.isArray(entry.topics) ? entry.topics : [];
    const total = subjectProgressTotals[subjectId] || Math.max(topics.length, 1);
    const completed = Math.min(topics.length, total);
    return {
        completed,
        total,
        percent: total ? Math.round((completed / total) * 100) : 0
    };
}

function refreshSubjectProgressCards() {
    if (!document.querySelector('[data-progress-subject]')) return;

    Object.keys(subjectProgressTotals).forEach(async subjectId => {
        const nodes = document.querySelectorAll(`[data-progress-subject="${subjectId}"]`);
        const progress = await currentSubjectProgress(subjectId);
        nodes.forEach(node => {
            node.textContent = `Fortschritt: ${progress.completed}/${progress.total}`;
        });
    });

    if (window.LernraumDB) {
        window.LernraumDB.get('chemieLernState').then(state => {
            const completed = Array.isArray(state?.completedModules) ? state.completedModules.length : 0;
            const total = subjectProgressTotals.chemie || 10;
            document.querySelectorAll('[data-progress-subject="chemie"]').forEach(node => {
                node.textContent = `Fortschritt: ${Math.min(completed, total)}/${total}`;
            });
        }).catch(() => {
            document.querySelectorAll('[data-progress-subject="chemie"]').forEach(node => {
                node.textContent = 'Fortschritt: 0/10';
            });
        });
    }
}

function renderNavigation(activeSubjectId = '') {
    return `
        <aside class="portal-sidebar" id="portalSidebar">
            <a class="portal-brand" href="./index.html">
                <span class="portal-brand-icon" aria-hidden="true">📚</span>
                <span class="portal-brand-copy"><strong>Lernraum 9</strong><small>DEIN LERNRAUM</small></span>
            </a>
            ${renderCloudMenu()}
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
        <button class="portal-nav-overlay" type="button" aria-label="Menü schließen" tabindex="-1" hidden></button>
    `;
}

function renderCloudMenu() {
    return `
        <button id="cloudMenuButton" class="portal-cloud-menu-button" type="button" aria-haspopup="dialog" aria-controls="cloudAuthDialog">
            <span aria-hidden="true">☁️</span><span id="cloudMenuLabel">Anmelden</span>
        </button>
        <dialog class="cloud-auth-dialog" id="cloudAuthDialog" aria-labelledby="cloudDialogTitle">
            <div class="cloud-dialog-heading">
                <div>
                    <span class="pill">DEIN LERNSTAND</span>
                    <h2 id="cloudDialogTitle">Lernkonto</h2>
                </div>
                <button id="cloudDialogClose" class="cloud-dialog-close" type="button" aria-label="Fenster schließen">×</button>
            </div>
            <p class="cloud-dialog-description">Melde dich einmal an. Dein Lernstand wird danach automatisch auf deinen Geräten synchronisiert.</p>
            <form id="cloudAuthForm" class="cloud-auth-form">
                <label for="cloudEmail">E-Mail-Adresse</label>
                <input id="cloudEmail" name="email" type="email" autocomplete="email" required>
                <label for="cloudPassword">Passwort</label>
                <input id="cloudPassword" name="password" type="password" autocomplete="current-password" minlength="6" required>
                <div class="cloud-auth-actions">
                    <button class="btn" type="submit" data-cloud-auth="signin">Anmelden</button>
                    <button class="btn cloud-signup-button" type="submit" data-cloud-auth="signup">Konto erstellen</button>
                </div>
                <button id="cloudResendConfirmation" class="btn cloud-secondary-button" type="button">Bestätigungs-E-Mail erneut senden</button>
            </form>
            <div id="cloudAccountActions" class="cloud-account-actions" hidden>
                <p>Angemeldet als <strong id="cloudAccountEmail"></strong></p>
                <div class="cloud-auth-actions">
                    <button id="cloudSyncNow" class="btn" type="button">Jetzt synchronisieren</button>
                    <button id="cloudSignOut" class="btn cloud-secondary-button" type="button">Abmelden</button>
                </div>
            </div>
            <p id="cloudSyncStatus" class="cloud-sync-status" role="status" aria-live="polite"></p>
        </dialog>
    `;
}

function renderSubjectCards() {
    return subjects.map(subject => `
        <a class="subject-card portal-subject-card ${subject.available ? '' : 'placeholder-card'}" href="./${subject.file}" data-subject-card data-subject-name="${subject.name.toLowerCase()}">
            <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
            <span class="subject-status ${subject.available ? 'available' : ''}">
                ${subject.available ? 'Themen verfügbar' : 'Platzhalter · Inhalte folgen'}
            </span>
            <div class="subject-progress" data-progress-subject="${subject.id}">Fortschritt: --</div>
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
        <section class="portal-content-section">
            <div class="portal-section-heading">
                <div><span class="pill">FÄCHERÜBERSICHT</span><h2>Fach wählen</h2></div>
            </div>
            <div class="portal-search" role="search">
                <label class="portal-search-label" for="subjectSearch">Fach suchen</label>
                <input id="subjectSearch" type="search" placeholder="z. B. Mathematik, Physik, Chemie" aria-label="Fächer suchen" autocomplete="off">
            </div>
            <div class="subject-grid" id="subjectGrid">
                ${renderSubjectCards()}
            </div>
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
    if (subject.id === 'physik') {
        return `
            <section class="portal-hero portal-subject-hero">
                <a class="portal-back-link" href="./index.html">← Dashboard</a>
                <span class="pill">${subject.icon} PHYSIK · KLASSE 9</span>
                <h1>Physik</h1>
                <p>Entdecke wichtige Themen der Physik mit ausführlichen Erklärungen, Beispielen und passenden Übungen.</p>
            </section>
            <section class="portal-content-section">
                <div class="portal-section-heading">
                    <div><span class="pill">THEMENÜBERSICHT</span><h2>Physik-Themen</h2></div>
                    <p>Thema auswählen → Unterthema öffnen → lernen und üben</p>
                </div>
                <div class="subject-grid">
                    ${physicsTopics.map(topic => `
                        <a class="subject-card portal-subject-card" href="./physik-themen.html?topic=${topic.id}">
                            <span class="subject-icon" aria-hidden="true">${topic.icon}</span>
                            <span class="subject-status available">${topic.subtopics.length} Unterthemen · Erklärungen &amp; Übungen</span>
                            <h3>${topic.title}</h3>
                            <p>${topic.description}</p>
                            <span class="portal-card-link">Thema öffnen →</span>
                        </a>
                    `).join('')}
                    <a class="subject-card portal-subject-card" href="./physik-formelsammlung.html">
                        <span class="subject-icon" aria-hidden="true">📑</span>
                        <span class="subject-status available">25 Formeln · 22 Rechenaufgaben</span>
                        <h3>Physik-Formelsammlung</h3>
                        <p>Wichtige Formeln, Größen und Einheiten nach Themen geordnet – mit Übungen und nachvollziehbaren Lösungswegen.</p>
                        <span class="portal-card-link">Thema öffnen →</span>
                    </a>
                </div>
            </section>
        `;
    }
    if (subject.id === 'mathematik') {
        const mathTopics = [
            { id: 'powers-roots', icon: '√', title: 'Potenzen und Wurzeln', description: 'Potenzen berechnen, Potenzgesetze anwenden und Quadratwurzeln ziehen.' },
            { id: 'functions', icon: '📈', title: 'Funktionen', description: 'Vor allem lineare Funktionen: Gleichungen, Steigung, Wertetabellen und Graphen.' },
            { id: 'percent-interest', icon: '%', title: 'Prozent- und Zinsrechnung', description: 'Prozentwert, Grundwert, Prozentsatz, Zinsen und Preisänderungen berechnen.' },
            { id: 'geometry', icon: '📐', title: 'Flächen und Körperberechnungen', description: 'Flächeninhalte, Pythagoras, Volumen und Oberflächen berechnen.' },
            { id: 'data-chance', icon: '🎲', title: 'Daten und Zufall', description: 'Daten auswerten, Wahrscheinlichkeiten und Pfadregeln bestimmen.' },
            { id: 'quadratics', icon: '∿', title: 'Quadratische Funktionen und Gleichungen', description: 'Parabeln, Scheitelpunkte, Funktionswerte und quadratische Gleichungen.' },
            { id: 'units', icon: '↔️', title: 'Einheiten umrechnen', description: 'Längen, Flächen, Volumen, Gewichte und Zeiten umwandeln.' },
            { id: 'mental', icon: '🧠', title: 'Kopfrechnen', description: 'Zufällige Aufgaben in drei Schwierigkeitsstufen lösen.', href: './mathematik-lernen.html?view=mental' },
            { id: 'fractions', icon: '½', title: 'Bruchrechnen', description: 'Brüche kürzen, erweitern und mit ihnen rechnen.' },
            { id: 'terms', icon: '🔤', title: 'Terme', description: 'Terme vereinfachen, Gleichungen lösen und Sachaufgaben aufstellen.' }
        ];
        return `
            <section class="portal-hero portal-subject-hero">
                <a class="portal-back-link" href="./index.html">← Dashboard</a>
                <span class="pill">${subject.icon} MATHEMATIK · KLASSE 9 · WERKREALSCHULE</span>
                <h1>Mathematik</h1>
                <p>Wähle eines der zehn Themengebiete. Dort findest du ausführliche Erklärungen, Beispiele und passende Übungen.</p>
            </section>
            <section class="portal-content-section">
                <div class="portal-section-heading">
                    <div><span class="pill">THEMENÜBERSICHT</span><h2>Mathematik-Themen</h2></div>
                    <p>Fach auswählen → Thema öffnen → lernen</p>
                </div>
                <div class="subject-grid">
                    ${mathTopics.map(topic => `
                        <a class="subject-card portal-subject-card" href="${topic.href || `./mathematik-themen.html?topic=${topic.id}`}">
                            <span class="subject-icon" aria-hidden="true">${topic.icon}</span>
                            <span class="subject-status available">${topic.id === 'mental' ? 'Zufällige Übungen' : 'Erklärungen &amp; Übungen'}</span>
                            <h3>${topic.title}</h3>
                            <p>${topic.description}</p>
                            <span class="portal-card-link">Thema öffnen →</span>
                        </a>
                    `).join('')}
                </div>
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
        'powers-roots': {
            icon: '√', title: 'Potenzen und Wurzeln', description: 'Potenzen berechnen, Potenzgesetze anwenden und Quadratwurzeln ziehen.',
            subtopics: [
                { id: 'powers', icon: '²', title: 'Potenzen', description: 'Potenzen verstehen und Potenzgesetze sicher anwenden.' },
                { id: 'roots', icon: '√', title: 'Wurzeln', description: 'Quadratwurzeln berechnen und Wurzelterme vereinfachen.' }
            ]
        },
        functions: {
            icon: '📈', title: 'Funktionen', description: 'Der Schwerpunkt liegt auf linearen Funktionen: Gleichungen, Steigung, Tabellen und Graphen.',
            subtopics: [
                { id: 'linear-functions', icon: '📉', title: 'Lineare Funktionen', description: 'Funktionswerte aus y = mx + b berechnen.' },
                { id: 'slope', icon: '↗️', title: 'Steigung', description: 'Steigungen aus Gleichungen und Punkten ermitteln.' },
                { id: 'graphs', icon: '📊', title: 'Wertetabellen und Graphen', description: 'Wertetabellen erstellen, Geraden zeichnen und ablesen.' }
            ]
        },
        'percent-interest': {
            icon: '%', title: 'Prozent- und Zinsrechnung', description: 'Prozentwert, Prozentsatz, Grundwert, Zinsen und Preisänderungen berechnen.',
            subtopics: [
                { id: 'percent', icon: '%', title: 'Prozentrechnung', description: 'Prozentwert, Grundwert und Prozentsatz bestimmen.' },
                { id: 'interest', icon: '€', title: 'Zinsrechnung', description: 'Kapital, Zinssatz und Laufzeit bei Zinsaufgaben berechnen.' }
            ]
        },
        geometry: {
            icon: '📐', title: 'Flächen und Körperberechnungen', description: 'Flächeninhalte, Pythagoras, Volumen und Oberflächen berechnen.',
            subtopics: [
                { id: 'plane-areas', icon: '▱', title: 'Flächen ebener Figuren', description: 'Rechteck-, Dreiecks- und Kreisflächen berechnen.' },
                { id: 'triangle-area', icon: '🔺', title: 'Dreiecksfläche', description: 'Den Flächeninhalt eines Dreiecks mit Grundseite und Höhe berechnen.' },
                { id: 'pythagoras', icon: '📐', title: 'Satz des Pythagoras', description: 'Fehlende Seiten im rechtwinkligen Dreieck berechnen.' },
                { id: 'prism', icon: '📦', title: 'Prisma', description: 'Volumen und Oberfläche eines Prismas berechnen.' },
                { id: 'cylinder', icon: '🥫', title: 'Zylinder', description: 'Grundfläche, Volumen und Oberfläche bestimmen.' },
                { id: 'pyramid', icon: '🔺', title: 'Pyramide', description: 'Volumen und Oberfläche einer Pyramide berechnen.' }
            ]
        },
        'data-chance': {
            icon: '🎲', title: 'Daten und Zufall', description: 'Daten auswerten, Wahrscheinlichkeiten bestimmen und Baumdiagramme verwenden.',
            subtopics: [
                { id: 'statistics', icon: '📊', title: 'Daten und Statistik', description: 'Mittelwert, Median, Modalwert und Spannweite berechnen.' },
                { id: 'tree-diagrams', icon: '🌳', title: 'Baumdiagramme', description: 'Mehrstufige Zufallsversuche übersichtlich darstellen.' },
                { id: 'path-rules', icon: '🧮', title: 'Pfadregeln', description: 'Wahrscheinlichkeiten entlang von Pfaden berechnen.' }
            ]
        },
        quadratics: {
            icon: '∿', title: 'Quadratische Funktionen und Gleichungen', description: 'Parabeln und quadratische Gleichungen verstehen und berechnen.',
            subtopics: [
                { id: 'quadratic-functions', icon: '∿', title: 'Quadratische Funktionen', description: 'Funktionswerte, Scheitelpunkt und Parabeln untersuchen.' },
                { id: 'quadratic-equations', icon: '📐', title: 'Quadratische Gleichungen', description: 'Quadratische Gleichungen faktorisieren und Nullstellen bestimmen.' }
            ]
        },
        units: {
            icon: '↔️', title: 'Einheiten umrechnen', description: 'Längen-, Flächen-, Volumen-, Gewichts- und Zeiteinheiten passend umwandeln.',
            subtopics: [
                { id: 'units', icon: '📏', title: 'Einheiten umrechnen', description: 'Umrechnungen von Längen, Flächen, Volumen, Gewichten und Zeit üben.' }
            ]
        },
        fractions: {
            icon: '½', title: 'Bruchrechnen', description: 'Brüche kürzen, erweitern, vergleichen und die vier Grundrechenarten anwenden.',
            subtopics: [
                { id: 'fractions', icon: '½', title: 'Brüche und rationale Zahlen', description: 'Brüche kürzen, erweitern und mit Vorzeichen rechnen.' }
            ]
        },
        terms: {
            icon: '🔤', title: 'Terme', description: 'Terme vereinfachen, lineare Gleichungen lösen und Sachaufgaben mathematisch beschreiben.',
            subtopics: [
                { id: 'terms', icon: '🔤', title: 'Terme', description: 'Terme ordnen, zusammenfassen und Klammern auflösen.' },
                { id: 'equations', icon: '⚖️', title: 'Gleichungen', description: 'Gleichungen schrittweise lösen und die Lösung prüfen.' },
                { id: 'rearranging-formulas', icon: '🔄', title: 'Formeln umstellen', description: 'Formeln nach der gesuchten Variablen umstellen.' },
                { id: 'word-equations', icon: '📝', title: 'Textaufgaben mit Gleichungen', description: 'Text in Gleichungen übersetzen und Ergebnisse prüfen.' }
            ]
        }
    };
    const requestedTopic = new URLSearchParams(window.location.search).get('topic');
    const legacyTopicIds = { algebra: 'terms', probability: 'data-chance' };
    const resolvedTopicId = topics[requestedTopic] ? requestedTopic : legacyTopicIds[requestedTopic];
    const topicId = resolvedTopicId && topics[resolvedTopicId] ? resolvedTopicId : 'terms';
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
            </div>
        </section>
    `;
}

function renderMathLearningNavigation() {
    const topicTitles = {
        'powers-roots': 'Potenzen und Wurzeln',
        functions: 'Funktionen',
        'percent-interest': 'Prozent- und Zinsrechnung',
        geometry: 'Flächen und Körperberechnungen',
        'data-chance': 'Daten und Zufall',
        quadratics: 'Quadratische Funktionen und Gleichungen',
        units: 'Einheiten umrechnen',
        fractions: 'Bruchrechnen',
        terms: 'Terme'
    };
    const requestedTopic = new URLSearchParams(window.location.search).get('topic');
    const legacyTopicIds = { algebra: 'terms', probability: 'data-chance' };
    const topicId = topicTitles[requestedTopic] ? requestedTopic : legacyTopicIds[requestedTopic] || 'terms';

    return `
        <aside class="portal-sidebar" id="portalSidebar">
            <a class="portal-brand" href="./index.html">
                <span class="portal-brand-icon" aria-hidden="true">📚</span>
                <span class="portal-brand-copy"><strong>Lernraum 9</strong><small>DEIN LERNRAUM</small></span>
            </a>
            ${renderCloudMenu()}
            <nav aria-label="Hauptnavigation">
                <h2 class="portal-nav-heading">SCHNELLZUGRIFF</h2>
                <a class="portal-nav-link" href="./index.html">🏠 Home</a>
                <a class="portal-nav-link" href="./mathematik.html">📐 Mathe-Themen</a>
                <a class="portal-nav-link active" aria-current="page" href="./mathematik-themen.html?topic=${topicId}">${topicTitles[topicId]}</a>
            </nav>
        </aside>
        <button class="portal-nav-overlay" type="button" aria-label="Menü schließen" tabindex="-1" hidden></button>
    `;
}

function renderMathLearningPage() {
    const topicId = new URLSearchParams(window.location.search).get('topic');
    const topicIds = ['powers-roots', 'functions', 'percent-interest', 'geometry', 'data-chance', 'quadratics', 'units', 'fractions', 'terms'];
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
                <p>Ausführliche Erklärungen, Beispiele und Übungen zum Mathematikunterricht in Klasse 9.</p>
            </section>
            <nav class="math-tabs" aria-label="Mathematik-Lernwerkzeuge">
                <button class="math-tab active" type="button" data-math-view="topics">Themen &amp; Erklärungen</button>
                <button class="math-tab" type="button" data-math-view="practice">Übungsdatenbank</button>
                <button class="math-tab" type="button" data-math-view="mental">Kopfrechnen</button>
            </nav>
            <div id="mathViewTopics" class="math-view"></div>
            <div id="mathViewPractice" class="math-view hidden"></div>
            <div id="mathViewMental" class="math-view hidden"></div>
            <div id="mathLiveRegion" class="math-sr-only" aria-live="polite"></div>
        </section>
    `;
}

function renderPhysicsTopicPage() {
    const requestedTopic = new URLSearchParams(window.location.search).get('topic');
    const topic = physicsTopics.find(item => item.id === requestedTopic);
    if (!topic) {
        return `<section class="portal-hero"><h1>Thema nicht gefunden</h1><p>Dieses Physik-Thema ist nicht verfügbar.</p><a class="portal-back-link" href="./physik.html">Zur Physik-Themenübersicht</a></section>`;
    }
    return `
        <section class="portal-hero portal-subject-hero">
            <a class="portal-back-link" href="./physik.html">← Physik-Themen</a>
            <span class="pill">${topic.icon} PHYSIK · KLASSE 9</span>
            <h1>${topic.title}</h1>
            <p>${topic.description} Wähle ein Unterthema für eine ausführliche Erklärung und passende Übungen.</p>
        </section>
        <section class="portal-content-section">
            <div class="portal-section-heading">
                <div><span class="pill">UNTERTHEMEN</span><h2>Womit möchtest du lernen?</h2></div>
            </div>
            <div class="subject-grid">
                ${topic.subtopics.map(subtopic => `
                    <a class="subject-card portal-subject-card" href="./physik-lernen.html?subtopic=${subtopic.id}">
                        <span class="subject-icon" aria-hidden="true">${subtopic.icon}</span>
                        <span class="subject-status available">Erklärung &amp; Übungen</span>
                        <h3>${subtopic.title}</h3>
                        <p>${subtopic.description}</p>
                        <span class="portal-card-link">Öffnen →</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
}

function renderPhysicsLearningPage() {
    const subtopic = new URLSearchParams(window.location.search).get('subtopic') || '';
    return `
        <section id="physicsLearningApp" class="math-learning-app physics-learning-app" data-subtopic="${subtopic}">
            <section class="portal-hero portal-subject-hero math-hero">
                <a class="portal-back-link" href="./physik.html">← Zurück zu Physik</a>
                <div class="math-hero-actions">
                    <span class="pill">⚡ PHYSIK · KLASSE 9</span>
                    <button class="math-button math-theme-toggle" type="button" id="physicsThemeToggle" aria-label="Farbschema umschalten">☀️ Hellmodus</button>
                </div>
                <h1>Physik verstehen</h1>
                <p>Erklärung, Beispiele und Übungen zum ausgewählten Unterthema.</p>
            </section>
            <div id="physicsLessonView" class="physics-lesson-view"></div>
        </section>
    `;
}

function renderPhysicsFormulaPage() {
    return `
        <section class="portal-hero portal-subject-hero">
            <a class="portal-back-link" href="./physik.html">← Zurück zu Physik</a>
            <span class="pill">📑 PHYSIK · KLASSE 9</span>
            <h1>Physik-Formelsammlung</h1>
            <p>Wichtige Formeln, Größen und Einheiten – nach Themen geordnet, mit Rechenübungen und nachvollziehbaren Lösungswegen.</p>
        </section>
        <section class="portal-content-section physics-formula-section" aria-label="Formeln und Rechenübungen">
            <div id="physicsFormulaContent"></div>
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
    } else if (page === 'physics-formulas') {
        app.innerHTML = `
            ${renderNavigation('physik')}
            <main class="portal-main">
                <header class="portal-topbar">
                    <button class="portal-menu-toggle" type="button" aria-controls="portalSidebar" aria-expanded="false">
                        <span aria-hidden="true">☰</span><span>Fächer</span>
                    </button>
                    <span>Lernplattform · Klasse 9</span>
                    <a href="./index.html">Startseite</a>
                </header>
                ${renderPhysicsFormulaPage()}
                <footer class="portal-footer">Lernraum 9 · Physik · Klasse 9.</footer>
            </main>
        `;
    } else if (page === 'physics-topic') {
        app.innerHTML = `
            ${renderNavigation('physik')}
            <main class="portal-main">
                <header class="portal-topbar">
                    <button class="portal-menu-toggle" type="button" aria-controls="portalSidebar" aria-expanded="false">
                        <span aria-hidden="true">☰</span><span>Fächer</span>
                    </button>
                    <span>Lernplattform · Klasse 9</span>
                    <a href="./index.html">Startseite</a>
                </header>
                ${renderPhysicsTopicPage()}
                <footer class="portal-footer">Lernraum 9 · Physik · Klasse 9.</footer>
            </main>
        `;
    } else if (page === 'physics-learning') {
        app.innerHTML = `
            ${renderNavigation('physik')}
            <main class="portal-main">
                <header class="portal-topbar">
                    <button class="portal-menu-toggle" type="button" aria-controls="portalSidebar" aria-expanded="false">
                        <span aria-hidden="true">☰</span><span>Fächer</span>
                    </button>
                    <span>Lernplattform · Klasse 9</span>
                    <a href="./index.html">Startseite</a>
                </header>
                ${renderPhysicsLearningPage()}
                <footer class="portal-footer">Lernraum 9 · Physik · Klasse 9.</footer>
            </main>
        `;
    } else if (page === 'subject' && !subject) {
        app.innerHTML = `${renderNavigation()}<main class="portal-main"><h1>Fach nicht gefunden</h1><p>Das angeforderte Fach ist nicht in der Fächerliste.</p><a href="./index.html">Zum Dashboard</a></main>`;
    } else {
        app.innerHTML = `
            ${renderNavigation(subject?.id || '')}
            <main class="portal-main">
                <header class="portal-topbar">
                    <button class="portal-menu-toggle" type="button" aria-controls="portalSidebar" aria-expanded="false">
                        <span aria-hidden="true">☰</span><span>Fächer</span>
                    </button>
                    <span>Lernplattform · Klasse 9</span>
                    ${page === 'home' ? '' : '<a href="./index.html">Startseite</a>'}
                </header>
                ${page === 'home' ? renderDashboard() : renderSubjectPage(subject)}
                ${page === 'home' ? '' : '<footer class="portal-footer">Lernraum 9 · Fachinhalte werden fortlaufend ergänzt.</footer>'}
            </main>
        `;
    }

    const navigation = document.getElementById('portalSidebar');
    const menuToggle = document.querySelector('.portal-menu-toggle');
    const menuOverlay = document.querySelector('.portal-nav-overlay');
    if (navigation && menuToggle && menuOverlay) {
        const mobileNavigation = typeof window.matchMedia === 'function' ? window.matchMedia('(max-width: 600px)') : null;
        const setMenuOpen = open => {
            const isMobile = Boolean(mobileNavigation && mobileNavigation.matches);
            const isOpen = isMobile && open;
            app.classList.toggle('portal-nav-open', isOpen);
            navigation.setAttribute('aria-hidden', String(isMobile && !isOpen));
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuOverlay.hidden = !isOpen;
            document.body.classList.toggle('portal-nav-open', isOpen);
        };

        setMenuOpen(false);
        menuToggle.addEventListener('click', () => {
            const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
            setMenuOpen(opening);
            if (opening) navigation.querySelector('nav a')?.focus();
        });
        menuOverlay.addEventListener('click', () => setMenuOpen(false));
        navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
        if (mobileNavigation && typeof mobileNavigation.addEventListener === 'function') {
            mobileNavigation.addEventListener('change', () => setMenuOpen(false));
        } else if (mobileNavigation && typeof mobileNavigation.addListener === 'function') {
            mobileNavigation.addListener(() => setMenuOpen(false));
        }
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });
    }

    refreshSubjectProgressCards();

    if (page === 'home' && window.LernraumDB) loadDashboardState();

    const cloudAuthForm = document.getElementById('cloudAuthForm');
    const cloudSyncStatus = document.getElementById('cloudSyncStatus');
    const cloudAccountActions = document.getElementById('cloudAccountActions');
    const cloudAccountEmail = document.getElementById('cloudAccountEmail');
    const cloudSyncNow = document.getElementById('cloudSyncNow');
    const cloudSignOut = document.getElementById('cloudSignOut');
    const cloudResendConfirmation = document.getElementById('cloudResendConfirmation');
    const cloudMenuLabel = document.getElementById('cloudMenuLabel');
    const cloudMenuButton = document.getElementById('cloudMenuButton');
    const cloudAuthDialog = document.getElementById('cloudAuthDialog');
    const cloudDialogClose = document.getElementById('cloudDialogClose');
    const cloudAuthButtons = cloudAuthForm ? cloudAuthForm.querySelectorAll('button[type="submit"]') : [];

    const updateCloudPanel = state => {
        if (!cloudAuthForm || !cloudSyncStatus) return;
        const hasAccount = Boolean(state.email)
            && ['syncing', 'synced', 'offline', 'error'].includes(state.status);
        cloudAuthForm.hidden = hasAccount;
        cloudAccountActions.hidden = !hasAccount;
        cloudAccountEmail.textContent = hasAccount ? state.email : '';
        cloudSyncStatus.textContent = state.message || '';
        cloudSyncStatus.dataset.status = state.status || 'guest';
        if (cloudMenuLabel) {
            cloudMenuLabel.textContent = hasAccount ? 'Mein Lernkonto' : 'Anmelden';
        }
        const isSyncing = state.status === 'syncing';
        if (cloudSyncNow) cloudSyncNow.disabled = isSyncing;
        if (cloudSignOut) cloudSignOut.disabled = isSyncing;
        cloudAuthButtons.forEach(button => {
            button.disabled = isSyncing;
        });
    };

    if (window.LernraumCloud) {
        updateCloudPanel(window.LernraumCloud.getState());
        window.addEventListener('lernraum:cloud-state', event => updateCloudPanel(event.detail));
    }

    cloudMenuButton?.addEventListener('click', () => {
        if (!cloudAuthDialog?.open) cloudAuthDialog?.showModal();
        const hasAccount = Boolean(window.LernraumCloud?.getState().email);
        (hasAccount ? cloudSyncNow : cloudAuthForm?.elements.email)?.focus();
    });
    cloudDialogClose?.addEventListener('click', () => cloudAuthDialog?.close());
    cloudAuthDialog?.addEventListener('click', event => {
        if (event.target === cloudAuthDialog) cloudAuthDialog.close();
    });

    if (cloudAuthForm && window.LernraumCloud) {
        cloudAuthForm.addEventListener('submit', async event => {
            event.preventDefault();
            const submitter = event.submitter;
            const email = cloudAuthForm.elements.email.value.trim();
            const password = cloudAuthForm.elements.password.value;
            cloudAuthButtons.forEach(button => {
                button.disabled = true;
            });
            cloudSyncStatus.textContent = 'Anmeldung wird geprüft …';
            try {
                if (submitter?.dataset.cloudAuth === 'signup') {
                    const result = await window.LernraumCloud.signUp(email, password);
                    if (result.confirmationRequired) {
                        cloudSyncStatus.textContent = 'Konto angelegt. Bitte bestätige deine E-Mail-Adresse und melde dich danach an.';
                    }
                } else {
                    await window.LernraumCloud.signIn(email, password);
                }
            } catch (error) {
                cloudSyncStatus.textContent = window.LernraumCloud.getErrorMessage(error);
            } finally {
                cloudAuthButtons.forEach(button => {
                    button.disabled = false;
                });
                const nextState = window.LernraumCloud.getState();
                updateCloudPanel(nextState);
                if (submitter?.dataset.cloudAuth === 'signin' && ['synced', 'offline'].includes(nextState.status)) {
                    cloudAuthDialog?.close();
                }
            }
        });
    }

    cloudResendConfirmation?.addEventListener('click', async () => {
        const email = cloudAuthForm.elements.email.value.trim();
        if (!email) {
            cloudSyncStatus.textContent = 'Bitte gib zuerst deine E-Mail-Adresse ein.';
            cloudAuthForm.elements.email.focus();
            return;
        }

        cloudResendConfirmation.disabled = true;
        cloudSyncStatus.textContent = 'Bestätigungs-E-Mail wird erneut angefordert …';
        try {
            await window.LernraumCloud.resendConfirmation(email);
        } catch (error) {
            cloudSyncStatus.textContent = window.LernraumCloud.getErrorMessage(error);
        } finally {
            cloudResendConfirmation.disabled = false;
            updateCloudPanel(window.LernraumCloud.getState());
        }
    });

    cloudSyncNow?.addEventListener('click', () => {
        window.LernraumCloud.syncNow().catch(error => {
            console.error('Die manuelle Lernstand-Synchronisierung ist fehlgeschlagen:', error);
        });
    });
    cloudSignOut?.addEventListener('click', () => {
        window.LernraumCloud.signOut().catch(error => {
            console.error('Das Lernkonto konnte nicht vollständig abgemeldet werden:', error);
            cloudSyncStatus.textContent = window.LernraumCloud.getErrorMessage(error);
        });
    });

    if (page === 'home') {
        const subjectSearchInput = document.getElementById('subjectSearch');
        if (subjectSearchInput) {
            const filterCards = () => {
                const query = subjectSearchInput.value.trim().toLowerCase();
                document.querySelectorAll('[data-subject-card]').forEach(card => {
                    const matches = !query || card.dataset.subjectName.includes(query);
                    card.classList.toggle('hidden', !matches);
                });
            };
            subjectSearchInput.addEventListener('input', filterCards);
            filterCards();
        }
    }
}
