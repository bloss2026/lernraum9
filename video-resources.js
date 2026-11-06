(() => {
    'use strict';

    const youtubeIdPattern = /^[A-Za-z0-9_-]{11}$/;
    const curatedVideos = {
        Mathematik: {
            powers: { id: 'Oo7gFQoG16c', title: 'Potenzen - Grundlagen, Basis, Exponent, Potenzgesetze', creator: 'Lehrerschmidt' },
            roots: { id: 'nHZx_9SgLEY', title: 'Potenzieren und Radizieren (Wurzelziehen) - Grundlagen', creator: 'Lehrerschmidt' },
            'linear-functions': { id: 'MgUqwCat-Ho', title: 'Lineare Funktionen - Übersicht', creator: 'Mathe by Daniel Jung' },
            slope: { id: 'MgUqwCat-Ho', title: 'Lineare Funktionen - Übersicht', creator: 'Mathe by Daniel Jung' },
            graphs: { id: 'TKK-25nz-cE', title: 'Lineare Funktion zeichnen (y=mx+b)', creator: 'Lehrerschmidt' },
            percent: { id: 'yE9hPPvPQ6E', title: '"Schnelle" Prozentrechnung', creator: 'Lehrerschmidt' },
            interest: { id: 'Yme_T-O_s2w', title: 'Zins & Zinsrechnung', creator: 'Lehrerschmidt' },
            'plane-areas': { id: 'aWWf6E9-jmQ', title: 'Rechteck - Flächeninhalt und Umfang berechnen', creator: 'Lehrerschmidt' },
            'triangle-area': { id: 'VKkRc8O8_R8', title: 'Dreieck - Flächeninhalt berechnen', creator: 'Lehrerschmidt' },
            pythagoras: { id: 'FECtVbC-mgk', title: 'Satz des Pythagoras | a² + b² = c²', creator: 'Lehrerschmidt' },
            prism: { id: 'OjL6ZEK7sC8', title: 'Geometrische Körper - eine Übersicht', creator: 'Lehrerschmidt' },
            cylinder: { id: 'OjL6ZEK7sC8', title: 'Geometrische Körper - eine Übersicht', creator: 'Lehrerschmidt' },
            pyramid: { id: 'kSxeMtSysqA', title: 'Pyramide - Oberfläche berechnen', creator: 'Lehrerschmidt' },
            statistics: { id: 'do79J-0JhqQ', title: 'Mittelwert berechnen - einfach erklärt mit Beispielen', creator: 'Lehrerschmidt' },
            'tree-diagrams': { id: 'mBknBnww5fA', title: 'Baumdiagramm | mehrstufiger Zufallsversuch', creator: 'Lehrerschmidt' },
            'path-rules': { id: 'I5a8_KjHimo', title: 'Summenregel | Wahrscheinlichkeitsrechnung', creator: 'Lehrerschmidt' },
            'quadratic-functions': { id: 'KEuNUgIiIyI', title: 'Parabeln und quadratische Funktionen', creator: 'Mathe by Daniel Jung' },
            'quadratic-equations': { id: 'KEuNUgIiIyI', title: 'Parabeln und quadratische Funktionen', creator: 'Mathe by Daniel Jung' },
            units: { id: 'iRh4wA6TVy4', title: 'Maßeinheiten umrechnen - Längenmaße', creator: 'Lehrerschmidt' },
            fractions: { id: '2MvyITxrU-g', title: 'Bruchrechnen - ganz einfach erklärt', creator: 'Lehrerschmidt' },
            terms: { id: 'HIfIpLay8BM', title: 'Terme - Was ist das? Das Basiswissen!', creator: 'Lehrerschmidt' },
            equations: { id: 'isudBsbEAhQ', title: 'Einfache Gleichungen lösen', creator: 'Lehrerschmidt' },
            'rearranging-formulas': { id: 'G5XxS2OFsJU', title: 'Äquivalenzumformung, äquivalentes Umformen', creator: 'Lehrerschmidt' },
            'word-equations': { id: 'x3PsPgt_bvs', title: 'Textaufgaben berechnen', creator: 'Lehrerschmidt' },
            'mental-math': { id: 'PCcK92FAzwo', title: 'Kopfrechnen - superschnell - genialer Rechentrick', creator: 'Lehrerschmidt' }
        },
        Physik: {
            acceleration: { id: 'JHcyonExGZs', title: 'Beschleunigung - gleichmäßig beschleunigte Bewegung', creator: 'Lehrerschmidt' },
            forces: { id: 'Jh__xKp-qlc', title: 'F = m · a | Kraft = Masse · Beschleunigung', creator: 'Lehrerschmidt' },
            'current-voltage': { id: 'F5C80ZLJi3c', title: 'Ohmsches Gesetz (URI) mit Beispielen', creator: 'Lehrerschmidt' },
            resistance: { id: 'F5C80ZLJi3c', title: 'Ohmsches Gesetz (URI) mit Beispielen', creator: 'Lehrerschmidt' },
            circuits: { id: 'aHCFAJ4wmH4', title: 'Parallelschaltung berechnen - Widerstand & Stromstärke', creator: 'Lehrerschmidt' },
            'electric-power': { id: 'lj3x8H_sqLY', title: 'Elektrische Leistung', creator: 'Lehrerschmidt' },
            'light-reflection': { id: 'ua5erp_8V1c', title: 'Reflexionsgesetz', creator: 'Lehrerschmidt' },
            refraction: { id: 'CRDW0Znucvc', title: 'Lichtbrechung - kurz erklärt', creator: 'LehrerTEF' },
            lenses: { id: 'J6RapPPoKno', title: 'Sammellinse - Konvexlinse', creator: 'Lehrerschmidt' },
            'temperature-heat': { id: 'oMKU5-YMDJs', title: 'Wärme und Temperatur einfach und kurz erklärt', creator: 'erklaerung-und-mehr' },
            'thermal-expansion': { id: 'NktVeQ5WkaQ', title: 'Wärmeausdehnung - thermische Ausdehnung berechnen', creator: 'Lehrerschmidt' },
            'heat-capacity': { id: '3RloUg089XM', title: 'Grundgleichung der Wärmelehre Q = c · m · ΔT', creator: 'Physik verstehen – leicht gemacht' },
            'heat-transfer': { id: 'iizUT01u9mA', title: 'Wärmeübertragung', creator: 'Physik - simpleclub' },
            'magnetic-fields': { id: '5FRdulem8c4', title: 'Das Magnetfeld | Dauermagnetismus', creator: 'Lehrerschmidt' },
            electromagnets: { id: 'hYbeB4IMhiQ', title: 'Magnetfeld einer Spule erklärt (Elektromagnet)', creator: 'cg-physics' },
            induction: { id: 'CkYO5RMsZuo', title: 'Elektromagnetische Induktion - einfach erklärt', creator: 'physikdigital' },
            'vibrations-waves': { id: 'wl3Wrs_0IqQ', title: 'Schwingungen - Einführung', creator: 'Physik - simpleclub' },
            sound: { id: 'cFrOoD1IeSc', title: 'Was ist Schall? Schallwelle und Tonentstehung', creator: 'Physik - simpleclub' },
            echo: { id: 'lO73GekRvQY', title: 'Schallgeschwindigkeit', creator: 'C.T. teaching' },
            'energy-forms': { id: 'pe0Z7V--_rU', title: 'Energieformen - Überblick', creator: 'Physik - simpleclub' },
            'work-power': { id: 'rLpzY_u--JQ', title: 'Physik: Arbeit, Energie und Leistung', creator: 'erklaerung-und-mehr' },
            efficiency: { id: 'gOXEm2Gh5wc', title: 'Wirkungsgrad berechnen', creator: 'Lehrerschmidt' },
            'atoms-nuclei': { id: '5B7j8a8dcEM', title: 'Atommodelle - Kern-Hülle- und Schalenmodell', creator: 'Lehrerschmidt' },
            radiation: { id: 'vnoCgrPJ9CE', title: 'Radioaktivität - Alpha-, Beta- und Gamma-Strahlung', creator: 'Lehrerschmidt' },
            'half-life': { id: '2P_iGccjx_E', title: 'Halbwertzeit - radioaktiver Zerfall', creator: 'Lehrerschmidt' },
            pressure: { id: 'JV7oVImOXEw', title: 'Druck berechnen', creator: 'Lehrerschmidt' },
            density: { id: 'N2u8Syb-CIk', title: 'Dichte berechnen - Formel und Beispiele', creator: 'Lehrerschmidt' },
            buoyancy: { id: 'ZUWrj-nqkE4', title: 'Archimedisches Prinzip – Der Auftrieb', creator: 'Physik - simpleclub' }
        }
    };

    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);

    window.LernraumVideoResources = Object.freeze({
        render(lesson, subject) {
            const videos = Array.isArray(lesson.videos)
                ? lesson.videos
                : curatedVideos[subject]?.[lesson.id]
                    ? [curatedVideos[subject][lesson.id]]
                    : [];
            const searchQuery = encodeURIComponent(`${lesson.title} ${subject} Erklärung${subject === 'Mathematik' ? ' Daniel Jung' : ''}`);
            const videoCards = videos.map((video, index) => {
                if (!youtubeIdPattern.test(video.id)) {
                    throw new Error(`Ungültige YouTube-ID für das Lernvideo "${video.title}".`);
                }
                return `
                    <article class="math-panel video-resource-card">
                        <h4>${escapeHtml(video.title)}</h4>
                        <p>${escapeHtml(video.description || '')}</p>
                        <div class="learning-video-frame" data-learning-video-frame>
                            <button class="math-button math-button-primary" type="button" data-learning-video-id="${escapeHtml(video.id)}" data-learning-video-title="${escapeHtml(video.title)}">▶ Im Lernraum abspielen</button>
                        </div>
                        <a href="https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}" target="_blank" rel="noopener noreferrer">Alternativ auf YouTube öffnen ↗</a>
                        <small>${escapeHtml(video.creator || 'YouTube')} · Wird erst nach Klick geladen</small>
                    </article>`;
            }).join('');

            return `
                <section class="learning-video-section" aria-labelledby="learningVideoHeading-${escapeHtml(lesson.id)}">
                    <div>
                        <span class="math-eyebrow">VIDEO-LERNEN</span>
                        <h3 id="learningVideoHeading-${escapeHtml(lesson.id)}">Lernvideos zu „${escapeHtml(lesson.title)}“</h3>
                        <p>Öffentliche YouTube-Videos zum Thema:</p>
                    </div>
                    ${videos.length
                        ? `<div class="video-resource-grid">${videoCards}</div>`
                        : `<div class="video-resource-search">
                            <p>Für dieses Unterthema ist noch kein Video direkt eingebunden.</p>
                            <a href="https://www.youtube.com/results?search_query=${searchQuery}" target="_blank" rel="noopener noreferrer">Passende Videos auf YouTube suchen ↗</a>
                        </div>`}
                </section>`;
        }
    });

    document.addEventListener('click', event => {
        const button = event.target.closest('[data-learning-video-id]');
        if (!button) return;

        const videoId = button.dataset.learningVideoId;
        if (!youtubeIdPattern.test(videoId)) {
            throw new Error('Das ausgewählte Lernvideo hat eine ungültige YouTube-ID.');
        }

        const frame = button.closest('[data-learning-video-frame]');
        if (!frame) {
            throw new Error('Der Video-Playerbereich für das ausgewählte Lernvideo fehlt.');
        }

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
        iframe.title = button.dataset.learningVideoTitle || 'Lernvideo';
        iframe.loading = 'lazy';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        frame.replaceChildren(iframe);
    });
})();
