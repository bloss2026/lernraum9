(() => {
    'use strict';

    const root = document.getElementById('physicsFormulaContent');
    if (!root) return;

    const formulaGroups = [
        {
            title: 'Bewegung und Kräfte',
            formulas: [
                { name: 'Geschwindigkeit', formula: 'v = s / t', variables: 'v: Geschwindigkeit (m/s), s: Strecke (m), t: Zeit (s)', variants: 's = v · t  |  t = s / v' },
                { name: 'Beschleunigung', formula: 'a = Δv / Δt', variables: 'a: Beschleunigung (m/s²), Δv: Geschwindigkeitsänderung (m/s), Δt: Zeitspanne (s)', variants: 'Δv = v₂ − v₁  |  a = (v₂ − v₁) / Δt' },
                { name: 'Kraft (Newtons Grundgesetz)', formula: 'F = m · a', variables: 'F: Kraft (N), m: Masse (kg), a: Beschleunigung (m/s²)', variants: 'm = F / a  |  a = F / m' },
                { name: 'Gewichtskraft', formula: 'F_G = m · g', variables: 'F_G: Gewichtskraft (N), m: Masse (kg), g ≈ 9,81 N/kg (oft gerundet: 10 N/kg)' },
                { name: 'Mechanische Arbeit', formula: 'W = F · s', variables: 'W: Arbeit (J), F: Kraft (N), s: Weg in Kraftrichtung (m)' },
                { name: 'Leistung', formula: 'P = W / t', variables: 'P: Leistung (W), W: Arbeit/Energie (J), t: Zeit (s)', variants: 'W = P · t  |  1 W = 1 J/s' },
                { name: 'Lageenergie', formula: 'E_pot = m · g · h', variables: 'E_pot: Lageenergie (J), m: Masse (kg), g: Fallbeschleunigung (m/s²), h: Höhe (m)' },
                { name: 'Bewegungsenergie', formula: 'E_kin = ½ · m · v²', variables: 'E_kin: Bewegungsenergie (J), m: Masse (kg), v: Geschwindigkeit (m/s)' }
            ]
        },
        {
            title: 'Elektrizität',
            formulas: [
                { name: 'Stromstärke und Ladung', formula: 'I = Q / t', variables: 'I: Stromstärke (A), Q: Ladung (C), t: Zeit (s)', variants: 'Q = I · t' },
                { name: 'Ohmsches Gesetz', formula: 'U = R · I', variables: 'U: Spannung (V), R: Widerstand (Ω), I: Stromstärke (A)', variants: 'R = U / I  |  I = U / R' },
                { name: 'Elektrische Leistung', formula: 'P = U · I', variables: 'P: Leistung (W), U: Spannung (V), I: Stromstärke (A)' },
                { name: 'Elektrische Energie', formula: 'E = P · t', variables: 'E: Energie (J oder Wh), P: Leistung (W), t: Zeit (s oder h)', variants: 'Bei P in W und t in s erhältst du J; bei P in W und t in h erhältst du Wh.' },
                { name: 'Widerstände in Reihenschaltung', formula: 'R_ges = R₁ + R₂ + …', variables: 'Der Gesamtwiderstand ist größer als jeder einzelne Widerstand.' },
                { name: 'Widerstände in Parallelschaltung', formula: '1 / R_ges = 1 / R₁ + 1 / R₂ + …', variables: 'Bei zwei Widerständen: R_ges = (R₁ · R₂) / (R₁ + R₂). Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.' }
            ]
        },
        {
            title: 'Wärme, Schwingungen und Wellen',
            formulas: [
                { name: 'Temperaturänderung', formula: 'ΔT = T₂ − T₁', variables: 'ΔT: Temperaturänderung (K oder °C als Differenz), T₁: Anfangstemperatur, T₂: Endtemperatur' },
                { name: 'Wärmemenge', formula: 'Q = c · m · ΔT', variables: 'Q: Wärmeenergie (J), c: spezifische Wärmekapazität (J/(kg·K)), m: Masse (kg), ΔT: Temperaturänderung (K)' },
                { name: 'Frequenz und Periodendauer', formula: 'f = 1 / T', variables: 'f: Frequenz (Hz), T: Periodendauer (s)', variants: 'T = 1 / f' },
                { name: 'Wellengeschwindigkeit', formula: 'v = f · λ', variables: 'v: Wellengeschwindigkeit (m/s), f: Frequenz (Hz), λ: Wellenlänge (m)' },
                { name: 'Echo und Entfernung', formula: 's = c · t / 2', variables: 's: Entfernung zur reflektierenden Fläche (m), c: Schallgeschwindigkeit (in Luft ca. 340 m/s), t: Hin- und Rücklaufzeit des Echos (s)' }
            ]
        },
        {
            title: 'Druck und Flüssigkeiten',
            formulas: [
                { name: 'Druck', formula: 'p = F / A', variables: 'p: Druck (Pa), F: senkrecht wirkende Kraft (N), A: Fläche (m²)', variants: '1 Pa = 1 N/m²' },
                { name: 'Dichte', formula: 'ρ = m / V', variables: 'ρ: Dichte (kg/m³), m: Masse (kg), V: Volumen (m³)', variants: 'm = ρ · V  |  V = m / ρ' },
                { name: 'Auftriebskraft', formula: 'F_A = ρ_F · g · V_verdrängt', variables: 'F_A: Auftriebskraft (N), ρ_F: Dichte der Flüssigkeit (kg/m³), g: Fallbeschleunigung (m/s²), V_verdrängt: verdrängtes Volumen (m³)' }
            ]
        },
        {
            title: 'Optik',
            formulas: [
                { name: 'Reflexionsgesetz', formula: 'Einfallswinkel = Reflexionswinkel', variables: 'Beide Winkel werden zum Lot (der Senkrechten auf die Oberfläche) gemessen.' },
                { name: 'Linsengleichung', formula: '1 / f = 1 / g + 1 / b', variables: 'f: Brennweite, g: Gegenstandsweite, b: Bildweite (alle in derselben Längeneinheit)' },
                { name: 'Abbildungsmaßstab', formula: 'B / G = b / g', variables: 'B: Bildgröße, G: Gegenstandsgröße, b: Bildweite, g: Gegenstandsweite' }
            ]
        }
    ];

    const exercises = [
        { prompt: 'Ein Zug legt in 12 s eine Strecke von 240 m zurück. Wie groß ist seine Geschwindigkeit?', answer: 20, unit: 'm/s', steps: ['Gesucht ist v; verwende v = s / t.', 'Werte einsetzen: v = 240 m / 12 s.', 'Ergebnis: v = 20 m/s.'] },
        { prompt: 'Ein Radfahrer fährt 54 km/h. Wie viel sind das in m/s?', answer: 15, unit: 'm/s', steps: ['Für km/h in m/s durch 3,6 teilen.', '54 km/h / 3,6 = 15 m/s.', 'Die Geschwindigkeit beträgt 15 m/s.'] },
        { prompt: 'Ein Körper beschleunigt in 5 s von 4 m/s auf 19 m/s. Berechne a.', answer: 3, unit: 'm/s²', steps: ['Geschwindigkeitsänderung: Δv = 19 m/s − 4 m/s = 15 m/s.', 'Beschleunigung: a = Δv / Δt = 15 m/s / 5 s.', 'Ergebnis: a = 3 m/s².'] },
        { prompt: 'Welche Kraft beschleunigt eine Masse von 8 kg mit 2,5 m/s²?', answer: 20, unit: 'N', steps: ['Verwende Newtons Grundgesetz: F = m · a.', 'Werte einsetzen: F = 8 kg · 2,5 m/s².', 'Ergebnis: F = 20 kg·m/s² = 20 N.'] },
        { prompt: 'Berechne die Gewichtskraft einer Masse von 6 kg. Verwende g = 10 N/kg.', answer: 60, unit: 'N', steps: ['Verwende F_G = m · g.', 'Werte einsetzen: F_G = 6 kg · 10 N/kg.', 'Ergebnis: F_G = 60 N.'] },
        { prompt: 'Eine Kraft von 35 N bewegt eine Kiste 4 m weit. Wie groß ist die Arbeit?', answer: 140, unit: 'J', steps: ['Bei einer Kraft in Wegrichtung gilt W = F · s.', 'Werte einsetzen: W = 35 N · 4 m.', 'Ergebnis: W = 140 N·m = 140 J.'] },
        { prompt: 'Ein Motor verrichtet 1.500 J Arbeit in 30 s. Berechne seine Leistung.', answer: 50, unit: 'W', steps: ['Verwende P = W / t.', 'Werte einsetzen: P = 1.500 J / 30 s.', 'Ergebnis: P = 50 J/s = 50 W.'] },
        { prompt: 'Ein Ball mit 2 kg bewegt sich mit 5 m/s. Wie groß ist seine Bewegungsenergie?', answer: 25, unit: 'J', steps: ['Verwende E_kin = ½ · m · v².', 'Werte einsetzen: E_kin = ½ · 2 kg · (5 m/s)².', 'Ergebnis: E_kin = 25 kg·m²/s² = 25 J.'] },
        { prompt: 'In 8 s fließen 40 C Ladung durch einen Leiter. Wie groß ist I?', answer: 5, unit: 'A', steps: ['Verwende I = Q / t.', 'Werte einsetzen: I = 40 C / 8 s.', 'Ergebnis: I = 5 C/s = 5 A.'] },
        { prompt: 'An einem Widerstand von 6 Ω liegt eine Spannung von 12 V. Berechne I.', answer: 2, unit: 'A', steps: ['Aus U = R · I folgt I = U / R.', 'Werte einsetzen: I = 12 V / 6 Ω.', 'Ergebnis: I = 2 A.'] },
        { prompt: 'Durch einen Widerstand fließen 0,5 A bei 9 V. Wie groß ist R?', answer: 18, unit: 'Ω', steps: ['Aus U = R · I folgt R = U / I.', 'Werte einsetzen: R = 9 V / 0,5 A.', 'Ergebnis: R = 18 Ω.'] },
        { prompt: 'Ein Gerät wird mit 230 V betrieben und nimmt 2 A auf. Berechne die Leistung.', answer: 460, unit: 'W', steps: ['Verwende P = U · I.', 'Werte einsetzen: P = 230 V · 2 A.', 'Ergebnis: P = 460 V·A = 460 W.'] },
        { prompt: 'Eine Lampe mit 60 W leuchtet 3 h. Wie viel Energie verbraucht sie in Wh?', answer: 180, unit: 'Wh', steps: ['Verwende E = P · t.', 'Werte einsetzen: E = 60 W · 3 h.', 'Ergebnis: E = 180 Wh.'] },
        { prompt: 'Wie groß ist die Gesamtspannung an zwei in Reihe geschalteten Widerständen mit 4 V und 7 V Teilspannung?', answer: 11, unit: 'V', steps: ['In einer Reihenschaltung addieren sich die Teilspannungen.', 'U_ges = U₁ + U₂ = 4 V + 7 V.', 'Ergebnis: U_ges = 11 V.'] },
        { prompt: '0,5 kg Wasser werden um 10 K erwärmt. Berechne Q mit c = 4.200 J/(kg·K).', answer: 21000, unit: 'J', steps: ['Verwende Q = c · m · ΔT.', 'Werte einsetzen: Q = 4.200 J/(kg·K) · 0,5 kg · 10 K.', 'Einheiten kg und K kürzen sich; Q = 21.000 J.'] },
        { prompt: 'Eine Schwingung dauert 0,2 s. Wie groß ist die Frequenz?', answer: 5, unit: 'Hz', steps: ['Verwende f = 1 / T.', 'Werte einsetzen: f = 1 / 0,2 s.', 'Ergebnis: f = 5 s⁻¹ = 5 Hz.'] },
        { prompt: 'Eine Welle hat f = 8 Hz und λ = 0,5 m. Berechne ihre Geschwindigkeit.', answer: 4, unit: 'm/s', steps: ['Verwende v = f · λ.', 'Werte einsetzen: v = 8 s⁻¹ · 0,5 m.', 'Ergebnis: v = 4 m/s.'] },
        { prompt: 'Ein Echo kommt nach 1,2 s zurück. Wie weit ist die Wand entfernt? Verwende c = 340 m/s.', answer: 204, unit: 'm', steps: ['Die 1,2 s umfassen Hin- und Rückweg; für den einfachen Weg halbieren.', 's = c · t / 2 = 340 m/s · 1,2 s / 2.', 'Ergebnis: s = 204 m.'] },
        { prompt: 'Eine Kraft von 600 N wirkt senkrecht auf 0,2 m². Berechne den Druck.', answer: 3000, unit: 'Pa', steps: ['Verwende p = F / A.', 'Werte einsetzen: p = 600 N / 0,2 m².', 'Ergebnis: p = 3.000 N/m² = 3.000 Pa.'] },
        { prompt: 'Ein Körper hat 1,5 kg Masse und 0,0005 m³ Volumen. Wie groß ist seine Dichte?', answer: 3000, unit: 'kg/m³', steps: ['Verwende ρ = m / V.', 'Werte einsetzen: ρ = 1,5 kg / 0,0005 m³.', 'Ergebnis: ρ = 3.000 kg/m³.'] },
        { prompt: 'Ein Körper verdrängt 0,003 m³ Wasser. Berechne die Auftriebskraft mit ρ_Wasser = 1.000 kg/m³ und g = 10 N/kg.', answer: 30, unit: 'N', steps: ['Verwende F_A = ρ_Wasser · g · V_verdrängt.', 'Werte einsetzen: F_A = 1.000 kg/m³ · 10 N/kg · 0,003 m³.', 'Ergebnis: F_A = 30 N.'] },
        { prompt: 'Eine Sammellinse hat f = 10 cm; der Gegenstand steht g = 30 cm entfernt. Berechne b.', answer: 15, unit: 'cm', steps: ['Linsengleichung: 1/f = 1/g + 1/b; nach 1/b umstellen: 1/b = 1/f − 1/g.', 'Werte einsetzen: 1/b = 1/(10 cm) − 1/(30 cm) = 3/(30 cm) − 1/(30 cm) = 2/(30 cm) = 1/(15 cm).', 'Kehrwert bilden: b = 15 cm.'] }
    ];

    window.LernraumDB.registerExercises('physik', exercises.map((exercise, index) => `formel-${index}`)).catch(error => {
        console.error('Die Physik-Formelübungen konnten nicht für den Lernfortschritt registriert werden:', error);
    });

    root.innerHTML = `
        <div class="physics-formula-grid">
            ${formulaGroups.map((group, groupIndex) => `
                <section class="physics-formula-group" aria-labelledby="physics-formula-group-${groupIndex}">
                    <h3 id="physics-formula-group-${groupIndex}">${group.title}</h3>
                    <div class="physics-formula-cards">
                        ${group.formulas.map(item => `
                            <article class="physics-formula-card">
                                <h4>${item.name}</h4>
                                <p class="physics-formula-equation"><code>${item.formula}</code></p>
                                <p>${item.variables}</p>
                                ${item.variants ? `<p class="physics-formula-variants">${item.variants}</p>` : ''}
                            </article>`).join('')}
                    </div>
                </section>`).join('')}
        </div>
        <section class="physics-formula-exercises" aria-labelledby="physicsFormulaExercisesHeading">
            <div class="portal-section-heading">
                <div><span class="pill">${exercises.length} RECHENAUFGABEN</span><h3 id="physicsFormulaExercisesHeading">Formeln anwenden</h3></div>
                <p>Gib das Ergebnis als Zahl ein. Einheiten stehen bereits neben dem Eingabefeld; Dezimalkommas werden akzeptiert.</p>
            </div>
            <p class="physics-formula-score" role="status" aria-live="polite">Noch keine Aufgaben richtig gelöst.</p>
            <div class="physics-exercise-grid">
                ${exercises.map((exercise, index) => `
                    <article class="physics-formula-exercise card" data-formula-exercise="${index}">
                        <div class="physics-formula-exercise-number">Aufgabe ${index + 1}</div>
                        <h4>${exercise.prompt}</h4>
                        <label class="physics-formula-answer">
                            <span class="math-sr-only">Dein Ergebnis zu Aufgabe ${index + 1}</span>
                            <input type="text" inputmode="decimal" autocomplete="off" placeholder="Ergebnis" data-formula-answer="${index}" aria-label="Ergebnis zu Aufgabe ${index + 1}">
                            <span>${exercise.unit}</span>
                        </label>
                        <button class="btn physics-formula-check" type="button" data-formula-check="${index}">Prüfen</button>
                        <p class="physics-formula-feedback" data-formula-feedback="${index}" role="status" aria-live="polite" hidden></p>
                        <details>
                            <summary>Lösungsweg anzeigen</summary>
                            <ol>${exercise.steps.map(step => `<li>${step}</li>`).join('')}</ol>
                        </details>
                    </article>`).join('')}
            </div>
        </section>`;

    const solved = new Set();
    const score = root.querySelector('.physics-formula-score');

    root.addEventListener('click', event => {
        const button = event.target.closest('[data-formula-check]');
        if (!button) return;

        const index = Number(button.dataset.formulaCheck);
        const exercise = exercises[index];
        const input = root.querySelector(`[data-formula-answer="${index}"]`);
        const feedback = root.querySelector(`[data-formula-feedback="${index}"]`);
        const answer = Number(input.value.trim().replace(/\s/g, '').replace(',', '.'));
        const isCorrect = input.value.trim() !== '' && Number.isFinite(answer)
            && Math.abs(answer - exercise.answer) <= Math.max(0.01, Math.abs(exercise.answer) * 0.005);

        feedback.textContent = isCorrect ? 'Richtig! Gut gerechnet.' : input.value.trim() ? 'Noch nicht richtig. Prüfe Formel und Einheiten.' : 'Gib zuerst ein Ergebnis ein.';
        feedback.className = `physics-formula-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
        feedback.hidden = false;

        if (input.value.trim()) {
            window.LernraumDB.recordExerciseAttempt('physik', `formel-${index}`).catch(error => {
                console.error('Der bearbeitete Physik-Aufgabenstand konnte nicht gespeichert werden:', error);
            });
        }
        if (isCorrect) solved.add(index);
        score.textContent = solved.size === exercises.length
            ? `Alle ${exercises.length} Aufgaben richtig gelöst – starke Leistung!`
            : `${solved.size} von ${exercises.length} Aufgaben richtig gelöst.`;
    });
})();
