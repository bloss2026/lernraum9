(() => {
    'use strict';

    const root = document.getElementById('mathLearningApp');
    if (!root) return;

    const topics = [
        {
            id: 'algebra',
            title: 'Arithmetik & Algebra',
            icon: '➗',
            summary: 'Terme, Gleichungen, Brüche, Formeln, Potenzen, Wurzeln sowie Prozent- und Zinsaufgaben sicher bearbeiten.',
            lessons: [
                { id: 'terms', title: 'Terme', text: 'Fasse gleichartige Glieder zusammen. Klammern löst du mit dem Distributivgesetz auf: a(b + c) = ab + ac.', example: '3x + 2x − 4 = 5x − 4; 2(x + 3) = 2x + 6.' },
                { id: 'equations', title: 'Gleichungen', text: 'Führe auf beiden Seiten dieselbe Rechenoperation aus. Ziel ist, x allein stehen zu lassen.', example: '3x + 5 = 20 → 3x = 15 → x = 5. Probe: 3 · 5 + 5 = 20.' },
                { id: 'fractions', title: 'Brüche & rationale Zahlen', text: 'Brüche kürzen und erweitern, gleichnamig machen und sicher mit Vorzeichen rechnen.', example: '3/4 + 1/8 = 6/8 + 1/8 = 7/8.' },
                { id: 'rearranging-formulas', title: 'Formeln umstellen', text: 'Stelle eine Formel nach einer gesuchten Variablen um, indem du auf beiden Seiten Umkehroperationen ausführst.', example: 's = v · t wird nach t umgestellt zu t = s / v.' },
                { id: 'word-equations', title: 'Textaufgaben mit Gleichungen', text: 'Übersetze Angaben in eine Gleichung, löse sie und prüfe, ob das Ergebnis zur Situation passt.', example: 'Das Dreifache einer Zahl plus 4 ist 19: 3x + 4 = 19, also x = 5.' },
                { id: 'powers', title: 'Potenzrechnung', text: 'Eine Potenz fasst gleiche Faktoren zusammen: aⁿ bedeutet, dass a n-mal mit sich selbst multipliziert wird. Bei gleicher Basis gilt aᵐ · aⁿ = aᵐ⁺ⁿ und aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0).', example: '2⁴ = 2 · 2 · 2 · 2 = 16; 3² · 3³ = 3⁵ = 243.' },
                { id: 'roots', title: 'Wurzelrechnung', text: 'Die Quadratwurzel √a ist die nichtnegative Zahl, deren Quadrat a ergibt. Quadrieren und Quadratwurzelziehen sind Umkehroperationen.', example: '√49 = 7, denn 7² = 49. Bei √(3² + 4²) rechnest du zuerst unter der Wurzel: √25 = 5.' },
                { id: 'percent', title: 'Prozentrechnung', text: 'Prozentwert W = Grundwert G · p / 100. Der Prozentsatz beschreibt einen Anteil von 100.', example: '20 % von 80 €: W = 80 · 20 / 100 = 16 €.' },
                { id: 'interest', title: 'Zinsrechnung', text: 'Für ein Jahr gilt: Zinsen = Kapital · Zinssatz / 100. Für Monate wird der Jahreszins anteilig berechnet.', example: '500 € zu 4 % für ein Jahr: 500 · 4 / 100 = 20 € Zinsen.' }
            ]
        },
        {
            id: 'functions',
            title: 'Funktionen',
            icon: '📈',
            summary: 'Lineare Zusammenhänge lesen, Steigungen berechnen und Geraden im Koordinatensystem deuten.',
            lessons: [
                { id: 'linear-functions', title: 'Lineare Funktion', text: 'Eine Gerade hat die Form y = m · x + b. m ist die Steigung; b ist der Schnittpunkt mit der y-Achse.', example: 'y = 2x + 1: Bei x = 0 ist y = 1; bei x = 2 ist y = 5.' },
                { id: 'slope', title: 'Steigung', text: 'Die Steigung m = Änderung in y / Änderung in x. Positive Steigung bedeutet, die Gerade steigt nach rechts.', example: 'Von (1|2) nach (3|6): m = (6 − 2) / (3 − 1) = 2.' },
                { id: 'graphs', title: 'Graph zeichnen', text: 'Markiere zuerst den y-Achsenabschnitt b. Nutze dann die Steigung als Schritt nach rechts und nach oben oder unten.', example: 'Bei y = 2x + 1 startest du bei (0|1). Zwei nach rechts und vier nach oben ergibt (2|5).' }
            ]
        },
        {
            id: 'geometry',
            title: 'Geometrie',
            icon: '📐',
            summary: 'Rechtwinklige Dreiecke und Volumen sowie Oberflächen von Körpern berechnen.',
            lessons: [
                { id: 'pythagoras', title: 'Satz des Pythagoras', text: 'Im rechtwinkligen Dreieck gilt a² + b² = c². c ist immer die längste Seite gegenüber dem rechten Winkel.', example: 'a = 3 cm, b = 4 cm: c = √(3² + 4²) = √25 = 5 cm.' },
                { id: 'prism', title: 'Prisma', text: 'Volumen: V = Grundfläche · Länge. Bei einem geraden Prisma gilt für die Oberfläche: O = 2G + Umfang der Grundfläche · Länge.', example: 'Rechteckige Grundfläche 3 cm · 4 cm, Länge 5 cm: V = 12 · 5 = 60 cm³.' },
                { id: 'cylinder', title: 'Zylinder', text: 'Grundfläche G = πr². Volumen V = πr²h; Oberfläche O = 2πr² + 2πrh.', example: 'r = 2 cm, h = 5 cm: V = π · 2² · 5 = 20π ≈ 62,8 cm³.' },
                { id: 'pyramid', title: 'Pyramide', text: 'Das Volumen ist ein Drittel aus Grundfläche mal Höhe: V = (G · h) / 3.', example: 'G = 36 cm², h = 9 cm: V = 36 · 9 / 3 = 108 cm³.' }
            ]
        },
        {
            id: 'probability',
            title: 'Stochastik',
            icon: '🎲',
            summary: 'Wahrscheinlichkeiten in Baumdiagrammen berechnen und Daten statistisch beschreiben.',
            lessons: [
                { id: 'tree-diagrams', title: 'Baumdiagramm', text: 'Jede Stufe steht für einen Versuchsschritt. An jedem Ast steht die Wahrscheinlichkeit des Ergebnisses.', example: 'Eine faire Münze hat die Äste Kopf (1/2) und Zahl (1/2).' },
                { id: 'path-rules', title: 'Pfadregeln', text: '1. Pfadregel: Entlang eines Pfades multiplizieren. 2. Pfadregel: Wahrscheinlichkeiten passender Pfade addieren.', example: 'Zweimal Kopf: 1/2 · 1/2 = 1/4. Genau einmal Kopf: 1/4 + 1/4 = 1/2.' },
                { id: 'statistics', title: 'Statistik', text: 'Der Mittelwert ist Summe der Werte geteilt durch ihre Anzahl. Der Median ist der mittlere Wert der sortierten Liste.', example: '2, 4, 4, 10: Mittelwert = 20/4 = 5; Median = (4 + 4)/2 = 4.' }
            ]
        }
    ];

    const lessonDetails = {
        terms: {
            paragraphs: [
                'Ein Term ist ein Rechenausdruck aus Zahlen, Variablen und Rechenzeichen, zum Beispiel 4x + 3. Eine Variable wie x steht für eine Zahl, die noch unbekannt ist oder sich ändern kann. Ein Term enthält kein Gleichheitszeichen; steht ein Gleichheitszeichen dazwischen, hast du eine Gleichung.',
                'Beim Vereinfachen rechnest du zuerst nur gleichartige Glieder zusammen: x-Glieder mit x-Gliedern, reine Zahlen mit reinen Zahlen. Für x gilt dabei 1x = x. Klammern kannst du mit dem Distributivgesetz auflösen: Eine Zahl vor der Klammer wird mit jedem Glied in der Klammer multipliziert. Beim Einsetzen einer Zahl ersetzt du jedes x durch diese Zahl und beachtest die Reihenfolge der Rechenoperationen.'
            ],
            steps: ['Klammern beachten und gegebenenfalls auflösen.', 'Gleichartige Glieder erkennen und sortieren.', 'Koeffizienten gleichartiger Variablen addieren oder subtrahieren.', 'Konstanten zusammenfassen und das Ergebnis übersichtlich schreiben.'],
            examples: [
                { title: 'Gleichartige Glieder zusammenfassen', lines: ['4x + 3 − 2x + 5', '= (4 − 2)x + (3 + 5)', '= 2x + 8'] },
                { title: 'Klammer auflösen', lines: ['3(2x − 4) + x', '= 6x − 12 + x', '= 7x − 12'] },
                { title: 'Termwert berechnen', lines: ['Für x = 3: 2x² + 1', '= 2 · 3² + 1', '= 2 · 9 + 1 = 19'] }
            ],
            commonMistake: 'Nur gleichartige Glieder darfst du zusammenfassen: 3x + 2 ist nicht 5x. Bei 3(x + 2) wird die 3 mit beiden Klammergliedern multipliziert.',
            sources: [{ label: 'Mathebibel: Terme', url: 'https://www.mathebibel.de/terme' }]
        },
        equations: {
            paragraphs: [
                'Eine Gleichung sagt, dass zwei Terme denselben Wert haben. Du kannst sie dir wie eine Waage vorstellen: Beide Seiten müssen im Gleichgewicht bleiben. Eine Lösung ist eine Zahl, die beim Einsetzen die Gleichung wahr macht.',
                'Um die Unbekannte freizustellen, machst du Rechenoperationen rückwärts und führst jeden Schritt auf beiden Seiten aus. Auf Addition folgt Subtraktion, auf Multiplikation folgt Division. Am Ende setzt du die gefundene Lösung in die ursprüngliche Gleichung ein. Diese Probe zeigt, ob beide Seiten tatsächlich gleich sind.'
            ],
            steps: ['Klammern auflösen und gleichartige Terme zusammenfassen.', 'Alle x-Terme auf eine Seite bringen; auf beiden Seiten dieselbe Operation ausführen.', 'Zahlen auf die andere Seite bringen.', 'Den Faktor vor x durch Teilen beseitigen.', 'Probe durch Einsetzen in die Ausgangsgleichung.'],
            examples: [
                { title: 'Einfache lineare Gleichung', lines: ['3x + 5 = 20', '| −5: 3x = 15', '| :3: x = 5', 'Probe: 3 · 5 + 5 = 20 ✓'] },
                { title: 'x auf beiden Seiten', lines: ['5x − 4 = 2x + 8', '| −2x: 3x − 4 = 8', '| +4: 3x = 12', '| :3: x = 4'] }
            ],
            commonMistake: 'Wird auf einer Seite addiert, muss auf der anderen Seite ebenfalls addiert werden. Beim Verschieben eines Terms ändert sich sein Vorzeichen, weil du dieselbe Gegenoperation auf beiden Seiten ausführst.',
            sources: [{ label: 'Mathebibel: Gleichungen', url: 'https://www.mathebibel.de/gleichungen' }]
        },
        fractions: {
            paragraphs: [
                'Rationale Zahlen sind Zahlen, die sich als Bruch ganzer Zahlen schreiben lassen. Ein Bruch besteht aus Zähler und Nenner; der Nenner darf nie 0 sein. Gleichwertige Brüche entstehen durch Erweitern oder Kürzen, also wenn Zähler und Nenner mit derselben Zahl multipliziert oder durch dieselbe Zahl geteilt werden.',
                'Zum Addieren und Subtrahieren müssen Brüche gleichnamig sein. Beim Multiplizieren rechnest du Zähler mal Zähler und Nenner mal Nenner. Beim Dividieren multiplizierst du mit dem Kehrwert. Achte bei negativen Zahlen darauf, das Vorzeichen konsequent mitzunehmen.'
            ],
            steps: ['Vorzeichen beachten und Brüche wenn möglich kürzen.', 'Bei Addition oder Subtraktion einen gemeinsamen Nenner bestimmen.', 'Zähler entsprechend erweitern und dann addieren oder subtrahieren.', 'Beim Multiplizieren Zähler und Nenner jeweils miteinander multiplizieren.', 'Beim Dividieren den zweiten Bruch umdrehen und multiplizieren.', 'Ergebnis kürzen und auf Plausibilität prüfen.'],
            examples: [
                { title: 'Brüche addieren', lines: ['3/4 + 1/8', '= 6/8 + 1/8', '= 7/8'] },
                { title: 'Bruch kürzen', lines: ['18/24', '= (18 : 6)/(24 : 6)', '= 3/4'] },
                { title: 'Brüche multiplizieren', lines: ['2/3 · 3/5', '= 6/15', '= 2/5'] }
            ],
            commonMistake: 'Bei Addition darfst du nicht Nenner und Zähler einfach getrennt addieren. 1/2 + 1/3 ist 3/6 + 2/6 = 5/6, nicht 2/5.',
            sources: [{ label: 'Mathebibel: Brüche addieren', url: 'https://www.mathebibel.de/brueche-addieren' }, { label: 'Mathebibel: Brüche multiplizieren', url: 'https://www.mathebibel.de/brueche-multiplizieren' }]
        },
        'rearranging-formulas': {
            paragraphs: [
                'Eine Formel beschreibt einen Zusammenhang zwischen mehreren Größen. Beim Umstellen bleibt die Gleichung im Gleichgewicht: Jede Rechenoperation wird auf beiden Seiten rückgängig gemacht, bis die gesuchte Variable allein steht.',
                'Arbeite in umgekehrter Reihenfolge der Rechenoperationen. Bei s = v · t teilst du zum Freistellen von t durch v. Bei A = (g · h)/2 multiplizierst du zuerst mit 2 und teilst danach durch g, wenn h gesucht ist. Prüfe das Ergebnis, indem du die Ausgangswerte in die ursprüngliche Formel einsetzt.'
            ],
            steps: ['Gesuchte Variable markieren.', 'Klammern und Rechenoperationen in der Formel erkennen.', 'Mit Umkehroperationen die gesuchte Variable freistellen.', 'Dieselben Schritte auf beiden Seiten der Gleichung ausführen.', 'Formelprobe mit einfachen Zahlen machen.', 'Auf sinnvolle Einheiten und mögliche Division durch 0 achten.'],
            examples: [
                { title: 'Weg-Zeit-Formel nach der Zeit umstellen', lines: ['s = v · t', '| :v', 't = s/v'] },
                { title: 'Rechteckfläche nach der Breite umstellen', lines: ['A = a · b', '| :a', 'b = A/a'] },
                { title: 'Dreiecksfläche nach der Höhe umstellen', lines: ['A = (g · h)/2', '| ·2 und :g', 'h = 2A/g'] }
            ],
            commonMistake: 'Beim Umstellen darfst du nicht nur auf einer Seite etwas verändern. Führe die Umkehroperation immer auf beiden Seiten aus.',
            sources: [{ label: 'Mathebibel: Formeln umstellen', url: 'https://www.mathebibel.de/formeln-umstellen' }]
        },
        'word-equations': {
            paragraphs: [
                'In einer Textaufgabe ist eine Zahl oft unbekannt. Nenne sie x und übersetze die beschriebenen Rechenschritte in eine Gleichung. Wörter wie „das Doppelte“, „um 5 größer“ oder „zusammen“ helfen dabei, die passenden Terme zu bilden.',
                'Löse die Gleichung anschließend wie gewohnt. Zum Schluss setzt du die Lösung in den ursprünglichen Text ein: Passt sie zur Frage und zur Einheit? Wenn nach einem Preis gefragt ist, muss das Ergebnis beispielsweise ein sinnvoller Geldbetrag sein.'
            ],
            steps: ['Gesuchte Größe und Einheit aus der Frage herauslesen.', 'Unbekannte mit x bezeichnen.', 'Text Schritt für Schritt in einen Term und eine Gleichung übersetzen.', 'Gleichung lösen und Rechenweg übersichtlich notieren.', 'Lösung in den Text einsetzen und Antwortsatz mit Einheit schreiben.'],
            examples: [
                { title: 'Zahl gesucht', lines: ['Das Dreifache einer Zahl plus 4 ist 19.', '3x + 4 = 19', '3x = 15, also x = 5.'] },
                { title: 'Zwei aufeinanderfolgende Zahlen', lines: ['Die Summe zweier aufeinanderfolgender Zahlen ist 31.', 'x + (x + 1) = 31', '2x = 30, also sind die Zahlen 15 und 16.'] },
                { title: 'Preisaufgabe', lines: ['Drei gleiche Hefte kosten zusammen 12 €.', '3x = 12', 'x = 4 € pro Heft.'] }
            ],
            commonMistake: 'Übersetze die gesamte Aussage und prüfe, worauf sich die gesuchte Zahl bezieht. Bei „5 größer als x“ lautet der Term x + 5.',
            sources: [{ label: 'Mathebibel: Textaufgaben mit Gleichungen', url: 'https://www.mathebibel.de/textaufgaben-mit-gleichungen' }]
        },
        powers: {
            paragraphs: [
                'Bei einer Potenz aⁿ heißt a Basis und n Exponent. Der Exponent zählt, wie oft die Basis als Faktor vorkommt: 2⁴ = 2 · 2 · 2 · 2. Eine Potenz ist daher nicht dasselbe wie Basis mal Exponent.',
                'Bei gleicher Basis darfst du beim Multiplizieren die Exponenten addieren und beim Dividieren die Exponenten subtrahieren. Eine Potenz hoch einer weiteren Potenz bedeutet, dass die Exponenten multipliziert werden. Diese Regeln gelten nicht wahllos für Summen. Klammern sind wichtig, wenn die Basis negativ ist: (−2)² ist positiv, während −2² als −(2²) gelesen wird.'
            ],
            steps: ['Basis und Exponent bestimmen.', 'Klammern und Vorzeichen zuerst prüfen.', 'Bei gleicher Basis und Multiplikation Exponenten addieren.', 'Bei gleicher Basis und Division Exponenten subtrahieren (Nenner darf nicht 0 sein).', 'Bei einer Potenz von einer Potenz die Exponenten multiplizieren.', 'Erst die Potenzregel anwenden, dann den Zahlenwert berechnen.'],
            examples: [
                { title: 'Potenz als wiederholte Multiplikation', lines: ['2⁵ = 2 · 2 · 2 · 2 · 2', '= 4 · 2 · 2 · 2', '= 32'] },
                { title: 'Gleiche Basis multiplizieren', lines: ['3² · 3⁴ = 3²⁺⁴', '= 3⁶', '= 729'] },
                { title: 'Eine Potenz potenzieren', lines: ['(2³)² = 2³·²', '= 2⁶', '= 64'] }
            ],
            commonMistake: 'Exponenten werden nur bei gleicher Basis addiert: 2³ · 2⁴ = 2⁷, aber 2³ + 2⁴ ist nicht 2⁷. Außerdem ist 2⁴ = 16 und nicht 2 · 4.',
            sources: [{ label: 'Mathebibel: Potenzgesetze', url: 'https://www.mathebibel.de/potenzgesetze' }]
        },
        roots: {
            paragraphs: [
                'Die Quadratwurzel √a fragt: Welche nichtnegative Zahl ergibt mit sich selbst multipliziert a? Diese Zahl heißt Wurzelwert; a unter dem Wurzelzeichen heißt Radikand. Zum Beispiel ist √49 = 7, weil 7² = 49. Die Quadratwurzel ist immer nichtnegativ.',
                'Quadratzahlen wie 1, 4, 9, 16, 25, 36, 49, 64, 81 und 100 helfen beim Kopfrechnen. Bei nicht perfekten Quadratzahlen kannst du den Wert näherungsweise bestimmen. In der Geometrie taucht die Wurzel zum Beispiel beim Satz des Pythagoras auf. Rechne dabei zuerst den Ausdruck unter der Wurzel aus; eine Summe darf nicht einfach in einzelne Wurzeln zerlegt werden.'
            ],
            steps: ['Prüfen, ob der Radikand eine bekannte Quadratzahl ist.', 'Die Zahl suchen, deren Quadrat dem Radikanden entspricht.', 'Zur Kontrolle den gefundenen Wert quadrieren.', 'Bei einem längeren Term zuerst Klammern und Potenzen unter der Wurzel ausrechnen.'],
            examples: [
                { title: 'Quadratwurzel einer Quadratzahl', lines: ['√144 = ?', '12 · 12 = 144', 'Also: √144 = 12'] },
                { title: 'Wurzel im rechtwinkligen Dreieck', lines: ['c² = 5² + 12² = 25 + 144 = 169', 'c = √169', 'c = 13'] },
                { title: 'Näherungswert', lines: ['√20 liegt zwischen √16 und √25.', 'Also liegt √20 zwischen 4 und 5.', 'Mit dem Taschenrechner: √20 ≈ 4,47.'] }
            ],
            commonMistake: '√(9 + 16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7. Die Wurzel verteilt sich nicht über Plus oder Minus.',
            sources: [{ label: 'Mathebibel: Quadratwurzel', url: 'https://www.mathebibel.de/quadratwurzel' }, { label: 'Mathebibel: Wurzelgesetze', url: 'https://www.mathebibel.de/wurzelgesetze' }]
        },
        percent: {
            paragraphs: [
                'Prozent bedeutet „von hundert“. 25 % sind deshalb 25/100 = 0,25 des Ganzen. Der Grundwert G ist das Ganze (100 %), der Prozentsatz p gibt den Anteil in Prozent an und der Prozentwert W ist die tatsächliche Größe des Anteils.',
                'Die Grundformel lautet W = G · p / 100. Wenn eine andere Größe gesucht wird, stellst du die Formel um: p = W/G · 100 oder G = W · 100/p. Überlege zuerst, was das Ganze ist und auf welchen Wert sich die Prozentangabe bezieht. Bei Rabatten berechnest du zunächst den Rabatt und ziehst ihn dann vom ursprünglichen Preis ab.'
            ],
            steps: ['Text lesen und Grundwert, Prozentsatz und gesuchte Größe markieren.', 'Passende Formel auswählen oder nach der gesuchten Größe umstellen.', 'Werte mit Einheiten einsetzen.', 'Rechnen und das Ergebnis mit Einheit angeben.', 'Plausibilität prüfen: Ein Anteil von 20 % muss kleiner als das Ganze sein.'],
            examples: [
                { title: 'Prozentwert finden', lines: ['20 % von 80 €', 'W = 80 · 20 / 100', 'W = 16 €'] },
                { title: 'Rabatt und neuer Preis', lines: ['25 % von 80 € = 80 · 25 / 100 = 20 € Rabatt.', 'Neuer Preis = 80 € − 20 €.', 'Zu zahlen sind 60 €.'] },
                { title: 'Prozentsatz finden', lines: ['15 von 60 Schülerinnen und Schülern', 'p = 15 / 60 · 100', 'p = 25 %'] }
            ],
            commonMistake: 'Beim Prozentwert muss der Prozentsatz durch 100 geteilt werden. Achte außerdem darauf, dass du den Rabatt nicht mit dem reduzierten Endpreis verwechselst.',
            sources: [{ label: 'Mathebibel: Prozentrechnung', url: 'https://www.mathebibel.de/prozentrechnung' }, { label: 'Mathebibel: Prozentwert', url: 'https://www.mathebibel.de/prozentwert' }]
        },
        interest: {
            paragraphs: [
                'Zinsen sind der Preis dafür, dass Geld für eine bestimmte Zeit geliehen oder angelegt wird. In der Zinsrechnung entspricht das Kapital K dem Grundwert, der Zinssatz p dem Prozentsatz und der Zinsbetrag Z dem Prozentwert. Ein Jahreszinssatz bezieht sich auf ein ganzes Jahr.',
                'Für ein Jahr gilt Z = K · p / 100. Bei einer kürzeren Zeit als einem Jahr berechnest du den entsprechenden Zeitanteil, sofern die Aufgabe eine einfache anteilige Verzinsung verlangt. Für m Monate gilt Z = K · p/100 · m/12. Danach kann das Endkapital als K + Z berechnet werden. In echten Bankprodukten können zusätzliche Bedingungen gelten; hier üben wir die schulische Grundform.'
            ],
            steps: ['Kapital, Zinssatz und Laufzeit aus dem Text herausschreiben.', 'Jahreszinsen mit K · p / 100 berechnen.', 'Bei Monaten den Jahreszins mit Monate/12 multiplizieren.', 'Zinsbetrag mit Euro-Einheit angeben; falls gefragt, zum Kapital addieren.'],
            examples: [
                { title: 'Zinsen für ein Jahr', lines: ['K = 500 €, p = 4 %', 'Z = 500 · 4 / 100', 'Z = 20 €'] },
                { title: 'Zinsen für sechs Monate', lines: ['Jahreszins: 600 · 5 / 100 = 30 €.', 'Sechs Monate sind 6/12 eines Jahres.', 'Z = 30 · 6/12 = 15 €.'] }
            ],
            commonMistake: 'Bei sechs Monaten darfst du nicht den vollen Jahreszins ansetzen. Teile den Zinssatz auch nicht durch 12, ohne die restliche Formel konsistent umzuformen.',
            sources: [{ label: 'Mathebibel: Zinsrechnung', url: 'https://www.mathebibel.de/zinsrechnung' }]
        },
        'linear-functions': {
            paragraphs: [
                'Eine Funktion ordnet jedem erlaubten x-Wert genau einen y-Wert zu. Bei einer linearen Funktion ist der Graph eine Gerade. Eine übliche Schreibweise ist y = mx + b (auch y = mx + n). m beschreibt, wie stark y sich ändert, wenn x um 1 wächst; b ist der y-Wert bei x = 0.',
                'Um den Funktionswert zu berechnen, setzt du einen x-Wert für x ein und rechnest aus. Um eine lineare Funktion zu zeichnen, reicht es, zwei Punkte zu bestimmen und mit dem Lineal zu verbinden. Ein sinnvoller Startpunkt ist der y-Achsenabschnitt (0|b); einen zweiten Punkt findest du mit der Steigung.'
            ],
            steps: ['Gleichung in die Form y = mx + b bringen.', 'Steigung m und y-Achsenabschnitt b ablesen.', 'Für einen Funktionswert den x-Wert einsetzen.', 'Für einen Graphen mindestens zwei passende Punkte berechnen.', 'Punkte ins Koordinatensystem eintragen und verbinden.'],
            examples: [
                { title: 'Funktionswert berechnen', lines: ['y = 2x + 1; gesucht ist y für x = 3.', 'y = 2 · 3 + 1', 'y = 7. Der Punkt (3|7) liegt auf der Geraden.'] },
                { title: 'Gerade aus der Gleichung zeichnen', lines: ['y = 2x + 1: b = 1, also erster Punkt (0|1).', 'm = 2 = 2/1: 1 nach rechts, 2 nach oben.', 'Zweiter Punkt (1|3); die beiden Punkte verbinden.'] }
            ],
            commonMistake: 'Der y-Achsenabschnitt ist b, nicht m. Bei y = 2x + 1 schneidet die Gerade die y-Achse bei 1; die Steigung ist 2.',
            sources: [{ label: 'Mathebibel: Lineare Funktionen', url: 'https://www.mathebibel.de/lineare-funktionen' }]
        },
        slope: {
            paragraphs: [
                'Die Steigung m beschreibt die Änderung der y-Werte im Verhältnis zur Änderung der x-Werte. Zwischen zwei Punkten P₁(x₁|y₁) und P₂(x₂|y₂) gilt m = (y₂ − y₁)/(x₂ − x₁), sofern x₂ und x₁ verschieden sind. Man liest den Bruch als „hoch durch rechts“.',
                'Eine positive Steigung bedeutet: Der Graph steigt nach rechts. Bei einer negativen Steigung fällt er. Bei m = 0 ist die Gerade waagerecht. In der Form y = mx + b ist m direkt die Steigung. Eine Steigung von 3/2 heißt beispielsweise: zwei Kästchen nach rechts und drei nach oben.'
            ],
            steps: ['Punkte in gleicher Reihenfolge notieren: (x₁|y₁), (x₂|y₂).', 'Änderung nach oben/unten berechnen: Δy = y₂ − y₁.', 'Änderung nach rechts berechnen: Δx = x₂ − x₁.', 'm = Δy/Δx berechnen und Vorzeichen deuten.', 'Mit einer Skizze prüfen, ob das Vorzeichen zum Verlauf passt.'],
            examples: [
                { title: 'Steigung aus zwei Punkten', lines: ['P₁(1|2), P₂(3|6)', 'm = (6 − 2)/(3 − 1) = 4/2', 'm = 2'] },
                { title: 'Fallende Gerade', lines: ['P₁(0|5), P₂(2|1)', 'm = (1 − 5)/(2 − 0) = −4/2', 'm = −2; die Gerade fällt nach rechts.'] }
            ],
            commonMistake: 'Zähler und Nenner müssen dieselbe Punktreihenfolge verwenden. Richtig ist (y₂ − y₁)/(x₂ − x₁); vertauschst du nur oben oder nur unten, wird das Vorzeichen falsch.',
            sources: [{ label: 'Mathebibel: Lineare Funktionen', url: 'https://www.mathebibel.de/lineare-funktionen' }]
        },
        graphs: {
            paragraphs: [
                'Ein Funktionsgraph macht sichtbar, welche y-Werte zu den x-Werten gehören. Im Koordinatensystem verläuft die x-Achse waagerecht und die y-Achse senkrecht. Ein Punkt (x|y) wird zuerst in x-Richtung und dann in y-Richtung gefunden.',
                'Für eine Gerade y = mx + b kannst du bei (0|b) anfangen. Schreibe m möglichst als Bruch: Der Nenner gibt den Schritt nach rechts an, der Zähler den Schritt nach oben (bei negativem Zähler nach unten). Zeichne die Gerade durch mehrere korrekt gesetzte Punkte. Beim Ablesen prüfst du, welche Koordinaten zu einem Punkt gehören oder wo der Graph eine Achse schneidet.'
            ],
            steps: ['Achsen, Nullpunkt und gleichmäßige Skalierung festlegen.', 'y-Achsenabschnitt b als Punkt (0|b) eintragen.', 'Steigung als waagerechten und senkrechten Schritt nutzen.', 'Einen weiteren Punkt markieren und beide Punkte mit einer Geraden verbinden.', 'Punktkoordinaten stets in der Reihenfolge (x|y) ablesen.'],
            examples: [
                { title: 'Graph von y = −x + 3', lines: ['b = 3: Punkt (0|3) markieren.', 'm = −1 = −1/1: 1 nach rechts, 1 nach unten.', 'Punkt (1|2) markieren und die Gerade durch beide Punkte ziehen.'] },
                { title: 'Nullstelle aus dem Graphen deuten', lines: ['Die Nullstelle liegt dort, wo der Graph die x-Achse schneidet.', 'Auf der x-Achse ist y = 0.', 'Bei y = −x + 3: 0 = −x + 3, also x = 3.'] }
            ],
            commonMistake: 'Bei einem Punkt (2|5) bedeutet 2 die waagerechte x-Koordinate und 5 die senkrechte y-Koordinate. Prüfe, ob beide Achsen dieselbe oder unterschiedliche Skalierungen haben.',
            sources: [{ label: 'Mathebibel: Graph einer Funktion', url: 'https://www.mathebibel.de/graph' }, { label: 'Mathebibel: Lineare Funktionen', url: 'https://www.mathebibel.de/lineare-funktionen' }]
        },
        pythagoras: {
            paragraphs: [
                'Der Satz des Pythagoras gilt ausschließlich in rechtwinkligen Dreiecken. Die beiden Seiten, die den rechten Winkel bilden, heißen Katheten. Die gegenüberliegende und längste Seite heißt Hypotenuse. Bezeichne die Katheten mit a und b und die Hypotenuse mit c.',
                'Dann gilt a² + b² = c². Ist c gesucht, addierst du die Kathetenquadrate und ziehst die Wurzel. Ist eine Kathete gesucht, stellst du zuerst um, zum Beispiel a = √(c² − b²). Zeichne eine Skizze und markiere den rechten Winkel, bevor du Werte einsetzt.'
            ],
            steps: ['Prüfen, dass ein rechter Winkel vorhanden ist.', 'Hypotenuse gegenüber dem rechten Winkel bestimmen.', 'Passende Form des Satzes notieren.', 'Seitenlängen einsetzen und quadrieren.', 'Bei einer gesuchten Seite nach ihr umstellen und gegebenenfalls die Wurzel ziehen.', 'Einheit und Größenordnung kontrollieren.'],
            examples: [
                { title: 'Hypotenuse finden', lines: ['a = 3 cm, b = 4 cm', 'c² = 3² + 4² = 9 + 16 = 25', 'c = √25 = 5 cm'] },
                { title: 'Kathete finden', lines: ['c = 13 cm, b = 5 cm', 'a² = c² − b² = 169 − 25 = 144', 'a = √144 = 12 cm'] }
            ],
            commonMistake: 'Die Hypotenuse ist nicht einfach die schräg gezeichnete Seite, sondern immer die Seite gegenüber dem rechten Winkel. Sie ist die längste Seite.',
            sources: [{ label: 'Mathebibel: Satz des Pythagoras', url: 'https://www.mathebibel.de/satz-des-pythagoras' }]
        },
        prism: {
            paragraphs: [
                'Ein Prisma hat zwei gleiche, parallele Flächen: Grundfläche und Deckfläche. Dazwischen liegt der Mantel. Bei einem geraden Prisma stehen die Seitenkanten senkrecht auf der Grundfläche. Die Form der Grundfläche kann zum Beispiel ein Dreieck oder Rechteck sein.',
                'Das Volumen berechnest du mit V = G · h, wobei G der Flächeninhalt der Grundfläche und h die Länge beziehungsweise senkrechte Höhe des Prismas ist. Für ein gerades Prisma gilt für die Oberfläche O = 2G + M; die Mantelfläche M ist Umfang der Grundfläche mal Prismahöhe. Achte darauf, Flächen in Quadrateinheiten und Volumen in Kubikeinheiten anzugeben.'
            ],
            steps: ['Grundfläche erkennen und ihren Flächeninhalt G berechnen.', 'Prismahöhe h bestimmen; sie ist der Abstand zwischen Grund- und Deckfläche.', 'Volumen mit V = G · h berechnen.', 'Für die Oberfläche: Umfang u der Grundfläche bestimmen, M = u · h berechnen.', 'O = 2G + M bilden und Einheiten prüfen.'],
            examples: [
                { title: 'Volumen eines Dreiecksprismas', lines: ['Dreiecksgrundfläche: g = 6 cm, Dreieckshöhe = 4 cm.', 'G = 6 · 4 / 2 = 12 cm²; Prismahöhe h = 10 cm.', 'V = 12 · 10 = 120 cm³.'] },
                { title: 'Oberfläche eines Quaders (Rechteckprisma)', lines: ['Grundfläche 3 cm · 4 cm: G = 12 cm²; Umfang u = 14 cm.', 'Prismahöhe h = 5 cm: M = 14 · 5 = 70 cm².', 'O = 2 · 12 + 70 = 94 cm².'] }
            ],
            commonMistake: 'Für das Volumen brauchst du zuerst eine Fläche G und multiplizierst diese mit einer Länge h. Eine Antwort in cm² wäre beim Volumen eine falsche Einheit.',
            sources: [{ label: 'Wikipedia: Prisma (Geometrie)', url: 'https://de.wikipedia.org/wiki/Prisma_(Geometrie)' }]
        },
        cylinder: {
            paragraphs: [
                'Ein gerader Kreiszylinder hat zwei gleich große Kreisflächen als Grund- und Deckfläche. Der Radius r geht vom Kreismittelpunkt zum Rand; der Durchmesser d geht durch den Mittelpunkt und ist doppelt so groß wie der Radius. Die Höhe h ist der Abstand zwischen den Kreisflächen.',
                'Die Kreisfläche ist G = πr². Deshalb ist das Volumen V = πr²h. Die Oberfläche besteht aus zwei Kreisflächen und dem Mantel: O = 2πr² + 2πrh. Wenn der Durchmesser gegeben ist, musst du zuerst r = d/2 berechnen. Für Näherungswerte kann π ≈ 3,14 verwendet werden; r² bedeutet r mal r.'
            ],
            steps: ['Skizze beschriften und Radius r sowie Höhe h bestimmen.', 'Falls der Durchmesser gegeben ist: r = d/2 berechnen.', 'Für das Volumen V = πr²h verwenden.', 'Für die Oberfläche O = 2πr² + 2πrh verwenden.', 'Werte einsetzen, erst r quadrieren und dann mit π und h rechnen.', 'Volumen in Längeneinheiten³, Oberfläche in Längeneinheiten² angeben.'],
            examples: [
                { title: 'Volumen', lines: ['r = 2 cm, h = 5 cm', 'V = π · 2² · 5 = 20π cm³', 'V ≈ 62,8 cm³'] },
                { title: 'Oberfläche', lines: ['r = 3 cm, h = 4 cm', 'O = 2π · 3² + 2π · 3 · 4', 'O = 18π + 24π = 42π ≈ 131,9 cm²'] }
            ],
            commonMistake: 'Den Radius nicht mit dem Durchmesser verwechseln und die Einheit unterscheiden: Fläche in cm², Volumen in cm³.',
            sources: [{ label: 'Wikipedia: Zylinder (Geometrie)', url: 'https://de.wikipedia.org/wiki/Zylinder_(Geometrie)' }]
        },
        pyramid: {
            paragraphs: [
                'Eine Pyramide hat eine Grundfläche und dreieckige Seitenflächen, die sich in einer Spitze treffen. Die senkrechte Höhe h verläuft von der Spitze im rechten Winkel zur Grundfläche. Sie ist nicht automatisch die schräge Seitenhöhe.',
                'Das Volumen einer Pyramide beträgt ein Drittel des Volumens eines Prismas mit derselben Grundfläche und Höhe: V = G · h / 3. Um die Oberfläche zu finden, addierst du Grundfläche und Mantelfläche. Bei einer regelmäßigen Pyramide mit gleichartigen Dreiecksseiten kannst du die Seitenflächen einzeln berechnen und addieren.'
            ],
            steps: ['Grundfläche und senkrechte Höhe aus der Skizze ablesen.', 'Grundflächeninhalt G berechnen.', 'V = G · h / 3 aufschreiben.', 'G und h mit passenden Einheiten einsetzen.', 'Multiplizieren und anschließend durch 3 teilen.', 'Volumeneinheit als Kubikeinheit angeben.'],
            examples: [
                { title: 'Volumen einer quadratischen Pyramide', lines: ['Grundkante a = 6 cm: G = 6 · 6 = 36 cm².', 'Senkrechte Höhe h = 9 cm.', 'V = 36 · 9 / 3 = 108 cm³.'] },
                { title: 'Höhe aus dem Volumen berechnen', lines: ['V = 80 cm³, G = 30 cm²', 'V = G · h / 3, also h = 3V/G.', 'h = 3 · 80 / 30 = 8 cm.'] }
            ],
            commonMistake: 'Bei einer Pyramide wird durch 3 geteilt. Verwende die senkrechte Körperhöhe, nicht ohne Prüfung die schräge Seitenhöhe.',
            sources: [{ label: 'Wikipedia: Pyramide (Geometrie)', url: 'https://de.wikipedia.org/wiki/Pyramide_(Geometrie)' }]
        },
        'tree-diagrams': {
            paragraphs: [
                'Ein Baumdiagramm stellt einen Zufallsversuch mit mehreren Schritten dar. Jede Verzweigung entspricht einem möglichen Ergebnis des nächsten Schrittes. An jeden Ast schreibst du seine Wahrscheinlichkeit. Alle Astwahrscheinlichkeiten, die von demselben Punkt ausgehen, müssen zusammen 1 oder 100 % ergeben.',
                'Bei Ziehen mit Zurücklegen bleibt die Zusammensetzung vor jedem Zug gleich. Ohne Zurücklegen verändert sie sich: Nach einem Zug sind weniger Gegenstände da und die bedingten Wahrscheinlichkeiten ändern sich. Ein Baum hilft dabei, keine Reihenfolge und kein mögliches Ergebnis zu vergessen.'
            ],
            steps: ['Versuchs-Schritte in der richtigen Reihenfolge notieren.', 'Für jede Stufe Äste mit allen möglichen Ergebnissen zeichnen.', 'Astwahrscheinlichkeiten abhängig von vorherigen Ergebnissen eintragen.', 'An jedem Verzweigungspunkt prüfen, ob die Astwahrscheinlichkeiten 1 ergeben.', 'Endpunkte als vollständige Ergebniswege lesen.'],
            examples: [
                { title: 'Zweimal eine faire Münze', lines: ['Erster Wurf: Kopf 1/2 oder Zahl 1/2.', 'Von jedem Ast gehen beim zweiten Wurf wieder Kopf 1/2 und Zahl 1/2 ab.', 'Endpfade: KK, KZ, ZK und ZZ.'] },
                { title: 'Ziehen ohne Zurücklegen', lines: ['In einer Urne liegen 2 rote und 1 blaue Kugel.', 'Erster Zug: Rot 2/3, Blau 1/3.', 'Nach Rot bleibt 1 Rot und 1 Blau: jeweils 1/2; nach Blau bleiben 2 rote: Rot 1.'] }
            ],
            commonMistake: 'Ohne Zurücklegen ändern sich die Wahrscheinlichkeiten nach dem ersten Zug. Prüfe bei jeder Stufe neu, wie viele passende und wie viele gesamte Ergebnisse übrig sind.',
            sources: [{ label: 'Mathebibel: Baumdiagramm', url: 'https://www.mathebibel.de/baumdiagramm' }]
        },
        'path-rules': {
            paragraphs: [
                'Die erste Pfadregel berechnet die Wahrscheinlichkeit eines vollständigen Weges: Multipliziere die Wahrscheinlichkeiten der Äste entlang dieses Pfades. Das entspricht Ereignissen, die nacheinander eintreten (oft mit „und“ beschrieben).',
                'Wenn mehrere verschiedene Pfade zum gesuchten Ereignis gehören, verwendest du die zweite Pfadregel: Addiere die Wahrscheinlichkeiten dieser Pfade. Das entspricht verschiedenen Möglichkeiten (oft mit „oder“ beschrieben). Wahrscheinlichkeiten kannst du als Bruch, Dezimalzahl oder Prozent angeben; die Summe aller vollständigen Pfade muss 1 ergeben.'
            ],
            steps: ['Gesuchtes Ereignis genau beschreiben.', 'Alle passenden Endpfade im Baum markieren.', 'Für jeden einzelnen Pfad seine Astwahrscheinlichkeiten multiplizieren.', 'Wenn mehrere Pfade passen, deren Pfadwahrscheinlichkeiten addieren.', 'Ergebnis auf Plausibilität prüfen und bei Bedarf in Prozent umwandeln.'],
            examples: [
                { title: 'Zweimal Kopf', lines: ['Faire Münze: P(Kopf) = 1/2.', 'Pfad Kopf-Kopf: 1/2 · 1/2 = 1/4.', 'P = 25 %.'] },
                { title: 'Genau einmal Kopf', lines: ['Passende Pfade: Kopf-Zahl und Zahl-Kopf.', 'Jeder Pfad hat 1/2 · 1/2 = 1/4.', 'Addieren: 1/4 + 1/4 = 1/2 = 50 %.'] }
            ],
            commonMistake: 'Multipliziere zuerst entlang eines Pfades; addiere erst danach die Wahrscheinlichkeiten der verschiedenen passenden Pfade. „Und“ steht meist für einen Pfad, „oder“ für mehrere Pfade.',
            sources: [{ label: 'Mathebibel: Pfadregeln', url: 'https://www.mathebibel.de/pfadregeln' }, { label: 'Mathebibel: Baumdiagramm', url: 'https://www.mathebibel.de/baumdiagramm' }]
        },
        statistics: {
            paragraphs: [
                'Statistik ordnet und beschreibt gesammelte Daten. Sortiere Werte zunächst der Größe nach. Der arithmetische Mittelwert (Durchschnitt) entsteht, indem du alle Werte addierst und durch ihre Anzahl teilst. Er reagiert stark auf sehr große oder sehr kleine Ausreißer.',
                'Der Median ist der mittlere Wert der sortierten Daten. Bei einer ungeraden Anzahl ist es der einzelne mittlere Wert; bei einer geraden Anzahl bildest du den Durchschnitt der beiden mittleren Werte. Der Median ist gegenüber einzelnen Ausreißern robuster. Welche Kennzahl sinnvoll ist, hängt davon ab, was die Daten zeigen sollen.'
            ],
            steps: ['Daten vollständig notieren und der Größe nach sortieren.', 'Für den Mittelwert: alle Werte addieren und durch die Anzahl teilen.', 'Für den Median: mittlere Position bestimmen.', 'Bei gerader Anzahl die beiden mittleren Werte addieren und durch 2 teilen.', 'Ergebnis im Zusammenhang mit der Fragestellung deuten.'],
            examples: [
                { title: 'Mittelwert', lines: ['Daten: 4, 6, 8', 'Summe: 4 + 6 + 8 = 18; Anzahl: 3.', 'Mittelwert = 18/3 = 6.'] },
                { title: 'Median bei gerader Anzahl', lines: ['Sortierte Daten: 2, 4, 8, 10.', 'Die beiden mittleren Werte sind 4 und 8.', 'Median = (4 + 8)/2 = 6.'] },
                { title: 'Ausreißer verstehen', lines: ['Daten: 2, 3, 3, 4, 18.', 'Mittelwert = 30/5 = 6; Median = 3.', 'Der hohe Einzelwert zieht den Mittelwert nach oben.'] }
            ],
            commonMistake: 'Den Median bestimmst du erst nach dem Sortieren. Bei einer geraden Anzahl gibt es keinen einzelnen mittleren Wert; bilde den Durchschnitt der beiden mittleren Zahlen.',
            sources: [{ label: 'Mathebibel: Arithmetisches Mittel', url: 'https://www.mathebibel.de/arithmetisches-mittel' }, { label: 'Mathebibel: Median', url: 'https://www.mathebibel.de/median' }]
        }
    };

    const exercises = [
        { id: 'a1', topic: 'algebra', subtopic: 'terms', kind: 'number', prompt: 'Vereinfache: 3x + 2x − 4. Wie groß ist der Koeffizient vor x?', answer: 5, unit: 'Koeffizient', steps: ['Gleichartige Glieder zusammenfassen: 3x + 2x = 5x.', 'Der Term lautet 5x − 4.', 'Der Koeffizient vor x ist 5.'] },
        { id: 'a2', topic: 'algebra', subtopic: 'equations', kind: 'number', prompt: 'Löse: 3x + 5 = 20. Gib x an.', answer: 5, unit: 'x =', steps: ['Auf beiden Seiten 5 abziehen: 3x = 15.', 'Beide Seiten durch 3 teilen.', 'x = 5. Probe: 3 · 5 + 5 = 20.'] },
        { id: 'a3', topic: 'algebra', subtopic: 'percent', kind: 'number', prompt: 'Berechne 15 % von 200 €.', answer: 30, unit: '€', steps: ['Prozentwert = Grundwert · Prozentsatz / 100.', '200 · 15 / 100 = 30.', '15 % von 200 € sind 30 €.'] },
        { id: 'a4', topic: 'algebra', subtopic: 'percent', kind: 'number', prompt: 'Ein Artikel kostet 80 €. Er wird um 25 % reduziert. Wie hoch ist der Rabatt in Euro?', answer: 20, unit: '€', steps: ['Rabatt = 80 · 25 / 100.', '80 · 0,25 = 20.', 'Der Rabatt beträgt 20 €.'] },
        { id: 'a5', topic: 'algebra', subtopic: 'interest', kind: 'number', prompt: 'Wie viele Zinsen bringt ein Kapital von 600 € bei 3 % für ein Jahr?', answer: 18, unit: '€', steps: ['Jahreszinsen = Kapital · Zinssatz / 100.', '600 · 3 / 100 = 18.', 'Es entstehen 18 € Zinsen.'] },
        { id: 'a6', topic: 'algebra', subtopic: 'powers', kind: 'number', prompt: 'Berechne 2⁵.', answer: 32, steps: ['Die Hochzahl 5 bedeutet: fünfmal mit 2 multiplizieren.', '2⁵ = 2 · 2 · 2 · 2 · 2.', 'Das Ergebnis ist 32.'] },
        { id: 'a7', topic: 'algebra', subtopic: 'powers', kind: 'number', prompt: 'Vereinfache und berechne: 3² · 3³.', answer: 243, steps: ['Bei gleicher Basis werden beim Multiplizieren die Exponenten addiert: 3² · 3³ = 3⁵.', '3⁵ = 3 · 3 · 3 · 3 · 3.', 'Das Ergebnis ist 243.'] },
        { id: 'a8', topic: 'algebra', subtopic: 'roots', kind: 'number', prompt: 'Berechne √144.', answer: 12, steps: ['Gesucht ist die nichtnegative Zahl, deren Quadrat 144 ist.', '12 · 12 = 144.', 'Also ist √144 = 12.'] },
        { id: 'a9', topic: 'algebra', subtopic: 'roots', kind: 'number', prompt: 'Berechne √81 + 2³.', answer: 17, steps: ['Zuerst Potenz und Wurzel berechnen: √81 = 9 und 2³ = 8.', 'Dann addieren: 9 + 8.', 'Das Ergebnis ist 17.'] },

        { id: 'f1', topic: 'functions', subtopic: 'linear-functions', kind: 'number', prompt: 'Bei y = 2x + 3: Welchen y-Wert erhältst du für x = 4?', answer: 11, unit: 'y =', steps: ['x = 4 in die Funktionsgleichung einsetzen.', 'y = 2 · 4 + 3.', 'y = 11.'] },
        { id: 'f2', topic: 'functions', subtopic: 'slope', kind: 'number', prompt: 'Berechne die Steigung zwischen den Punkten (1|2) und (3|6).', answer: 2, unit: 'm =', steps: ['Änderung der y-Werte: 6 − 2 = 4.', 'Änderung der x-Werte: 3 − 1 = 2.', 'm = 4 / 2 = 2.'] },
        { id: 'f3', topic: 'functions', subtopic: 'linear-functions', kind: 'choice', prompt: 'Was ist bei y = 3x − 2 der y-Achsenabschnitt?', options: ['3', '−2', '2', '−3'], answer: '−2', steps: ['Vergleiche mit y = m · x + b.', 'Der konstante Term ist b.', 'Der Graph schneidet die y-Achse bei −2.'] },
        { id: 'f4', topic: 'functions', subtopic: 'graphs', kind: 'number', prompt: 'Eine Gerade hat m = 2 und b = 1. Berechne y für x = 3.', answer: 7, unit: 'y =', steps: ['Setze m = 2, b = 1 und x = 3 ein.', 'y = 2 · 3 + 1.', 'y = 7.'] },
        { id: 'f5', topic: 'functions', subtopic: 'slope', kind: 'choice', prompt: 'Was bedeutet eine negative Steigung im Graphen?', options: ['Die Gerade steigt nach rechts.', 'Die Gerade fällt nach rechts.', 'Die Gerade verläuft immer durch den Ursprung.', 'Die Gerade ist senkrecht.'], answer: 'Die Gerade fällt nach rechts.', steps: ['Die x-Werte werden von links nach rechts größer.', 'Bei negativer Steigung werden die y-Werte dabei kleiner.', 'Die Gerade fällt nach rechts.'] },

        { id: 'g1', topic: 'geometry', subtopic: 'pythagoras', kind: 'number', prompt: 'Ein rechtwinkliges Dreieck hat Katheten 6 cm und 8 cm. Wie lang ist die Hypotenuse?', answer: 10, unit: 'cm', steps: ['Pythagoras: c² = 6² + 8².', 'c² = 36 + 64 = 100.', 'c = √100 = 10 cm.'] },
        { id: 'g2', topic: 'geometry', subtopic: 'prism', kind: 'number', prompt: 'Ein Prisma hat eine Grundfläche von 12 cm² und eine Länge von 5 cm. Berechne das Volumen.', answer: 60, unit: 'cm³', steps: ['Volumen Prisma = Grundfläche · Länge.', 'V = 12 · 5.', 'V = 60 cm³.'] },
        { id: 'g3', topic: 'geometry', subtopic: 'cylinder', kind: 'number', prompt: 'Ein Zylinder hat r = 2 cm und h = 3 cm. Berechne das Volumen auf eine Dezimalstelle (π ≈ 3,14).', answer: 37.68, tolerance: 0.15, unit: 'cm³', steps: ['V = πr²h.', 'V = 3,14 · 2² · 3.', 'V = 3,14 · 4 · 3 = 37,68 cm³.'] },
        { id: 'g4', topic: 'geometry', subtopic: 'pyramid', kind: 'number', prompt: 'Eine Pyramide hat G = 30 cm² und h = 9 cm. Berechne das Volumen.', answer: 90, unit: 'cm³', steps: ['V = (G · h) / 3.', 'V = (30 · 9) / 3.', 'V = 270 / 3 = 90 cm³.'] },
        { id: 'g5', topic: 'geometry', subtopic: 'pyramid', kind: 'choice', prompt: 'Welche Formel berechnet das Volumen einer Pyramide?', options: ['V = G · h', 'V = (G · h) / 3', 'V = 2G + h', 'V = πr²'], answer: 'V = (G · h) / 3', steps: ['Eine Pyramide hat bei gleicher Grundfläche und Höhe ein Drittel des Prismenvolumens.', 'Deshalb gilt V = (G · h) / 3.'] },

        { id: 's1', topic: 'probability', subtopic: 'tree-diagrams', kind: 'number', prompt: 'Eine faire Münze wird einmal geworfen. Welche Wahrscheinlichkeit steht an jedem der beiden Äste Kopf und Zahl in Prozent?', answer: 50, unit: '%', steps: ['Eine faire Münze hat zwei gleich wahrscheinliche Ergebnisse.', 'Die Gesamtwahrscheinlichkeit von 100 % wird gleichmäßig auf zwei Äste verteilt.', 'An jedem Ast steht 100 % / 2 = 50 %.'] },
        { id: 's2', topic: 'probability', subtopic: 'path-rules', kind: 'number', prompt: 'Eine faire Münze wird zweimal geworfen. Wie groß ist die Wahrscheinlichkeit für genau einmal Kopf in Prozent?', answer: 50, unit: '%', steps: ['Passende Pfade: Kopf-Zahl und Zahl-Kopf.', 'Jeder Pfad hat die Wahrscheinlichkeit 1/2 · 1/2 = 1/4.', 'Addieren: 1/4 + 1/4 = 1/2 = 50 %.'] },
        { id: 's3', topic: 'probability', subtopic: 'statistics', kind: 'number', prompt: 'Berechne den Mittelwert der Zahlen 4, 6 und 8.', answer: 6, steps: ['Werte addieren: 4 + 6 + 8 = 18.', 'Durch die Anzahl 3 teilen: 18 / 3.', 'Der Mittelwert ist 6.'] },
        { id: 's4', topic: 'probability', subtopic: 'statistics', kind: 'number', prompt: 'Bestimme den Median: 2, 5, 7, 10, 11.', answer: 7, steps: ['Die Werte sind bereits sortiert.', 'Bei fünf Werten liegt der Median an dritter Stelle.', 'Der Median ist 7.'] },
        { id: 's5', topic: 'probability', subtopic: 'path-rules', kind: 'choice', prompt: 'Welche Regel verwendest du, um die Wahrscheinlichkeit eines einzelnen Pfades zu berechnen?', options: ['Wahrscheinlichkeiten entlang des Pfades multiplizieren', 'Alle Zahlen des Diagramms addieren', 'Nur die letzte Wahrscheinlichkeit verwenden', 'Durch die Anzahl aller Pfade teilen'], answer: 'Wahrscheinlichkeiten entlang des Pfades multiplizieren', steps: ['Ein Pfad besteht aus mehreren aufeinanderfolgenden Ereignissen.', 'Für die Wahrscheinlichkeit dieses Pfades multiplizierst du die Astwahrscheinlichkeiten.', 'Das ist die 1. Pfadregel.'] }
    ];

    function addPracticeSet(subtopic, items) {
        const topic = topics.find(item => item.lessons.some(lesson => lesson.id === subtopic));
        if (!topic) throw new Error(`Für das Unterthema "${subtopic}" fehlt ein Themengebiet.`);
        items.forEach(([prompt, answer, unit, steps, tolerance], index) => {
            exercises.push({
                id: `extra-${subtopic}-${index + 1}`,
                topic: topic.id,
                subtopic,
                kind: 'number',
                prompt,
                answer,
                unit,
                steps,
                ...(tolerance ? { tolerance } : {})
            });
        });
    }

    addPracticeSet('terms', [
        ['Fasse zusammen: 7x − 3x + 2.', 4, 'Koeffizient vor x', ['Gleichartige x-Glieder zusammenfassen: 7x − 3x = 4x.', 'Der Term lautet 4x + 2.', 'Der Koeffizient vor x ist 4.']],
        ['Löse die Klammer auf und fasse zusammen: 2(x + 4) + 3x.', 5, 'Koeffizient vor x', ['2 mit beiden Klammergliedern multiplizieren: 2x + 8 + 3x.', 'Gleichartige x-Glieder zusammenfassen: 5x + 8.', 'Der Koeffizient vor x ist 5.']],
        ['Berechne den Wert von 3a − 2 für a = 5.', 13, '', ['a durch 5 ersetzen: 3 · 5 − 2.', 'Zuerst multiplizieren: 15 − 2.', 'Der Termwert ist 13.']],
        ['Fasse zusammen: 4y + 6 − y − 2.', 3, 'Koeffizient vor y', ['y-Glieder: 4y − y = 3y.', 'Zahlen: 6 − 2 = 4.', 'Der Term lautet 3y + 4; der Koeffizient ist 3.']]
    ]);
    addPracticeSet('equations', [
        ['Löse: 4x − 7 = 13.', 5, 'x =', ['Auf beiden Seiten 7 addieren: 4x = 20.', 'Durch 4 teilen.', 'x = 5.']],
        ['Löse: 2x + 9 = 25.', 8, 'x =', ['Auf beiden Seiten 9 abziehen: 2x = 16.', 'Durch 2 teilen.', 'x = 8.']],
        ['Löse: 5x = 45.', 9, 'x =', ['Beide Seiten durch 5 teilen.', 'x = 45 / 5.', 'x = 9.']],
        ['Löse: 3x + 4 = x + 18.', 7, 'x =', ['Auf beiden Seiten x abziehen: 2x + 4 = 18.', 'Auf beiden Seiten 4 abziehen: 2x = 14.', 'Durch 2 teilen: x = 7.']]
    ]);
    addPracticeSet('fractions', [
        ['Berechne: 1/4 + 2/4. Gib den Zähler des gekürzten Ergebnisses an.', 3, 'Zähler', ['Die Brüche haben denselben Nenner: 1/4 + 2/4 = 3/4.', '3/4 ist bereits vollständig gekürzt.', 'Der Zähler ist 3.']],
        ['Berechne: 5/6 − 1/3. Gib den Zähler des gekürzten Ergebnisses an.', 1, 'Zähler', ['1/3 auf Sechstel erweitern: 1/3 = 2/6.', '5/6 − 2/6 = 3/6.', '3/6 gekürzt ist 1/2; der Zähler ist 1.']],
        ['Berechne: 2/3 · 3/5. Gib den Nenner des gekürzten Ergebnisses an.', 5, 'Nenner', ['Zähler mal Zähler und Nenner mal Nenner: 6/15.', '6/15 durch 3 kürzen: 2/5.', 'Der Nenner ist 5.']],
        ['Berechne: 3/4 : 1/2. Gib das Ergebnis als Dezimalzahl an.', 1.5, '', ['Beim Dividieren mit dem Kehrwert multiplizieren: 3/4 · 2/1.', 'Das ergibt 6/4 = 3/2.', '3/2 = 1,5.']],
        ['Berechne: −2/5 + 1/5. Gib das Ergebnis als Dezimalzahl an.', -0.2, '', ['Die Nenner sind gleich: −2/5 + 1/5 = −1/5.', '−1/5 als Dezimalzahl ist −0,2.', 'Das Ergebnis ist −0,2.']]
    ]);
    addPracticeSet('rearranging-formulas', [
        ['s = v · t. Berechne t für s = 36 km und v = 12 km/h.', 3, 'h', ['Nach t umstellen: t = s/v.', 'Werte einsetzen: t = 36/12.', 't = 3 Stunden.']],
        ['A = a · b. Berechne b für A = 42 cm² und a = 6 cm.', 7, 'cm', ['Nach b umstellen: b = A/a.', 'Einsetzen: b = 42/6.', 'b = 7 cm.']],
        ['U = 2a + 2b. Berechne a für U = 30 cm und b = 5 cm.', 10, 'cm', ['2a = U − 2b.', '2a = 30 − 10 = 20.', 'a = 20/2 = 10 cm.']],
        ['A = (g · h)/2. Berechne h für A = 30 cm² und g = 10 cm.', 6, 'cm', ['Mit 2 multiplizieren: 2A = g · h.', 'Durch g teilen: h = 2A/g.', 'h = 60/10 = 6 cm.']],
        ['v = s/t. Berechne s für v = 8 m/s und t = 5 s.', 40, 'm', ['Nach s umstellen: s = v · t.', 'Einsetzen: s = 8 · 5.', 's = 40 m.']]
    ]);
    addPracticeSet('word-equations', [
        ['Das Vierfache einer Zahl ist 36. Wie groß ist die Zahl?', 9, '', ['Unbekannte Zahl x nennen: 4x = 36.', 'Beide Seiten durch 4 teilen.', 'x = 9.']],
        ['Eine Zahl wird um 8 vergrößert. Das Ergebnis ist 21. Wie groß ist die Zahl?', 13, '', ['Gleichung aufstellen: x + 8 = 21.', 'Auf beiden Seiten 8 abziehen.', 'x = 13.']],
        ['Ein Erwachsenenticket kostet 6 € mehr als ein Kinderticket. Zusammen kosten beide 20 €. Was kostet das Kinderticket?', 7, '€', ['Kinderticket x, Erwachsenenticket x + 6.', 'x + (x + 6) = 20, also 2x = 14.', 'x = 7 €.']],
        ['Drei gleiche Hefte und ein Stift für 2 € kosten zusammen 17 €. Was kostet ein Heft?', 5, '€', ['Heftpreis x: 3x + 2 = 17.', '2 abziehen: 3x = 15.', 'x = 5 € pro Heft.']],
        ['Ein Rechteck ist 3 cm länger als breit. Sein Umfang beträgt 30 cm. Wie breit ist es?', 6, 'cm', ['Breite x, Länge x + 3.', '2x + 2(x + 3) = 30, also 4x + 6 = 30.', '4x = 24, daher x = 6 cm.']],
        ['Nach 5 € Rabatt kostet ein Spiel 28 €. Wie hoch war der ursprüngliche Preis?', 33, '€', ['Ursprungspreis x: x − 5 = 28.', 'Auf beiden Seiten 5 addieren.', 'x = 33 €.']]
    ]);
    addPracticeSet('powers', [
        ['Berechne: 3⁴.', 81, '', ['3⁴ bedeutet 3 · 3 · 3 · 3.', '3 · 3 = 9 und 9 · 9 = 81.', 'Das Ergebnis ist 81.']],
        ['Vereinfache und berechne: 2³ · 2².', 32, '', ['Gleiche Basis multiplizieren: Exponenten addieren, 2⁵.', '2⁵ = 2 · 2 · 2 · 2 · 2.', 'Das Ergebnis ist 32.']],
        ['Vereinfache und berechne: 5⁴ : 5².', 25, '', ['Bei gleicher Basis werden beim Dividieren die Exponenten subtrahiert: 5².', '5² = 5 · 5.', 'Das Ergebnis ist 25.']],
        ['Berechne: (−3)².', 9, '', ['Die Klammer zeigt, dass die ganze Zahl −3 quadriert wird.', '(−3) · (−3) = 9.', 'Das Ergebnis ist 9.']]
    ]);
    addPracticeSet('roots', [
        ['Berechne √196.', 14, '', ['14 · 14 = 196.', 'Die nichtnegative Quadratwurzel ist gesucht.', '√196 = 14.']],
        ['Berechne √225 − 5.', 10, '', ['Zuerst die Wurzel berechnen: √225 = 15.', '15 − 5 = 10.', 'Das Ergebnis ist 10.']],
        ['Ein rechtwinkliges Dreieck hat Katheten 5 cm und 12 cm. Wie lang ist die Hypotenuse?', 13, 'cm', ['c² = 5² + 12² = 25 + 144 = 169.', 'c = √169.', 'c = 13 cm.']],
        ['Zwischen welchen ganzen Zahlen liegt √50? Gib die kleinere Zahl an.', 7, '', ['7² = 49 und 8² = 64.', '50 liegt zwischen 49 und 64.', '√50 liegt zwischen 7 und 8; die kleinere Zahl ist 7.']]
    ]);
    addPracticeSet('percent', [
        ['Berechne 8 % von 250.', 20, '€', ['Prozentwert = Grundwert · Prozentsatz / 100.', '250 · 8 / 100 = 20.', 'Der Prozentwert ist 20 €.']],
        ['18 sind wie viel Prozent von 120?', 15, '%', ['Prozentsatz = Prozentwert / Grundwert · 100.', '18 / 120 · 100 = 15.', 'Das sind 15 %.']],
        ['Ein Pullover kostet 60 €. Der Preis steigt um 10 %. Wie hoch ist der neue Preis?', 66, '€', ['10 % von 60 € sind 6 €.', 'Zum alten Preis addieren: 60 € + 6 €.', 'Der neue Preis beträgt 66 €.']],
        ['Ein Fahrrad kostet nach 20 % Rabatt 160 €. Wie hoch war der Preis vorher?', 200, '€', ['Nach 20 % Rabatt bleiben 80 % des ursprünglichen Preises.', '160 € entsprechen 80 %; 160 / 0,8 = 200.', 'Der ursprüngliche Preis war 200 €.']]
    ]);
    addPracticeSet('interest', [
        ['Wie viele Jahreszinsen entstehen bei 900 € Kapital und 2 % Zinssatz?', 18, '€', ['Jahreszinsen = Kapital · Zinssatz / 100.', '900 · 2 / 100 = 18.', 'Es entstehen 18 € Zinsen.']],
        ['Berechne die Zinsen für 400 € bei 3 % für ein halbes Jahr.', 6, '€', ['Jahreszinsen: 400 · 3 / 100 = 12 €.', 'Ein halbes Jahr ist die Hälfte davon.', '12 / 2 = 6 € Zinsen.']],
        ['Wie hoch ist das Kapital, wenn 5 % Jahreszinsen 25 € betragen?', 500, '€', ['K = Z · 100 / p.', 'K = 25 · 100 / 5.', 'Das Kapital beträgt 500 €.']],
        ['Wie hoch ist der Zinssatz, wenn 800 € in einem Jahr 32 € Zinsen bringen?', 4, '%', ['p = Z / K · 100.', 'p = 32 / 800 · 100.', 'Der Zinssatz beträgt 4 %.']]
    ]);
    addPracticeSet('linear-functions', [
        ['Bei y = 4x − 3: Berechne y für x = 5.', 17, 'y =', ['x = 5 einsetzen: y = 4 · 5 − 3.', 'Multiplizieren: 20 − 3.', 'y = 17.']],
        ['Bei y = −2x + 7: Berechne y für x = 3.', 1, 'y =', ['x = 3 einsetzen: y = −2 · 3 + 7.', '−6 + 7 = 1.', 'y = 1.']],
        ['Bei y = 5x + 2: Welchen y-Achsenabschnitt b hat die Gerade?', 2, 'b =', ['Vergleiche y = 5x + 2 mit y = mx + b.', 'Der konstante Term ist der y-Achsenabschnitt.', 'b = 2.']],
        ['Eine Funktion hat m = 3 und b = −4. Berechne y für x = 2.', 2, 'y =', ['In y = mx + b einsetzen: y = 3 · 2 − 4.', '6 − 4 = 2.', 'y = 2.']]
    ]);
    addPracticeSet('slope', [
        ['Berechne die Steigung zwischen (0|1) und (2|5).', 2, 'm =', ['Änderung y: 5 − 1 = 4.', 'Änderung x: 2 − 0 = 2.', 'm = 4/2 = 2.']],
        ['Berechne die Steigung zwischen (1|7) und (4|1).', -2, 'm =', ['Änderung y: 1 − 7 = −6.', 'Änderung x: 4 − 1 = 3.', 'm = −6/3 = −2.']],
        ['Eine Gerade steigt bei 4 Schritten nach rechts um 12 nach oben. Wie groß ist m?', 3, 'm =', ['Steigung = Änderung y / Änderung x.', 'm = 12/4.', 'm = 3.']],
        ['Eine Gerade fällt bei 5 Schritten nach rechts um 10 nach unten. Wie groß ist m?', -2, 'm =', ['Änderung nach unten ist −10; Änderung nach rechts ist 5.', 'm = −10/5.', 'm = −2.']]
    ]);
    addPracticeSet('graphs', [
        ['Eine Gerade hat m = 1 und b = 4. Berechne y für x = 6.', 10, 'y =', ['y = mx + b einsetzen: y = 1 · 6 + 4.', '6 + 4 = 10.', 'y = 10.']],
        ['Eine Gerade hat m = −3 und b = 2. Berechne y für x = 2.', -4, 'y =', ['y = −3 · 2 + 2.', '−6 + 2 = −4.', 'y = −4.']],
        ['Eine Gerade schneidet die y-Achse bei 5. Wie groß ist y für x = 0?', 5, 'y =', ['Auf der y-Achse ist x = 0.', 'Der Funktionswert dort ist der y-Achsenabschnitt.', 'y = 5.']],
        ['Für y = 2x − 1: Berechne den x-Wert, wenn y = 7 ist.', 4, 'x =', ['7 = 2x − 1.', '8 = 2x.', 'x = 4.']]
    ]);
    addPracticeSet('pythagoras', [
        ['Die Katheten sind 9 cm und 12 cm lang. Berechne die Hypotenuse.', 15, 'cm', ['c² = 9² + 12² = 81 + 144 = 225.', 'c = √225.', 'c = 15 cm.']],
        ['Die Hypotenuse ist 13 cm und eine Kathete 5 cm. Berechne die andere Kathete.', 12, 'cm', ['a² = 13² − 5² = 169 − 25 = 144.', 'a = √144.', 'a = 12 cm.']],
        ['Die Katheten sind 8 cm und 15 cm lang. Wie lang ist die Hypotenuse?', 17, 'cm', ['c² = 8² + 15² = 64 + 225 = 289.', 'c = √289.', 'c = 17 cm.']],
        ['Die Hypotenuse ist 10 cm und eine Kathete 6 cm. Wie lang ist die andere Kathete?', 8, 'cm', ['a² = 10² − 6² = 100 − 36 = 64.', 'a = √64.', 'a = 8 cm.']]
    ]);
    addPracticeSet('prism', [
        ['Ein Prisma hat G = 18 cm² und eine Länge von 4 cm. Berechne V.', 72, 'cm³', ['V = G · Länge.', 'V = 18 · 4.', 'V = 72 cm³.']],
        ['Ein Prisma hat G = 25 cm² und eine Länge von 6 cm. Berechne V.', 150, 'cm³', ['V = G · Länge.', 'V = 25 · 6.', 'V = 150 cm³.']],
        ['Ein Prisma hat V = 96 cm³ und G = 12 cm². Wie lang ist es?', 8, 'cm', ['V = G · Länge, daher Länge = V/G.', '96/12 = 8.', 'Die Länge beträgt 8 cm.']],
        ['Eine dreieckige Grundfläche hat g = 6 cm und h = 4 cm. Das Prisma ist 10 cm lang. Berechne V.', 120, 'cm³', ['Dreiecksfläche G = g · h / 2 = 6 · 4 / 2 = 12 cm².', 'V = G · Länge = 12 · 10.', 'V = 120 cm³.']]
    ]);
    addPracticeSet('cylinder', [
        ['Ein Zylinder hat r = 3 cm und h = 4 cm. Berechne V mit π ≈ 3,14.', 113.04, 'cm³', ['V = πr²h.', 'V = 3,14 · 3² · 4 = 3,14 · 9 · 4.', 'V = 113,04 cm³.'], 0.2],
        ['Ein Zylinder hat r = 2 cm und h = 7 cm. Berechne V mit π ≈ 3,14.', 87.92, 'cm³', ['V = πr²h.', 'V = 3,14 · 2² · 7 = 3,14 · 4 · 7.', 'V = 87,92 cm³.'], 0.2],
        ['Ein Zylinder hat r = 5 cm und h = 2 cm. Berechne V mit π ≈ 3,14.', 157, 'cm³', ['V = πr²h.', 'V = 3,14 · 5² · 2 = 3,14 · 25 · 2.', 'V = 157 cm³.'], 0.2],
        ['Ein Zylinder hat V = 314 cm³ und r = 5 cm. Berechne h mit π ≈ 3,14.', 4, 'cm', ['V = πr²h, daher h = V/(πr²).', 'h = 314/(3,14 · 25) = 314/78,5.', 'h = 4 cm.'], 0.05]
    ]);
    addPracticeSet('pyramid', [
        ['Eine Pyramide hat G = 24 cm² und h = 10 cm. Berechne V.', 80, 'cm³', ['V = G · h / 3.', 'V = 24 · 10 / 3 = 240/3.', 'V = 80 cm³.']],
        ['Eine Pyramide hat G = 45 cm² und h = 8 cm. Berechne V.', 120, 'cm³', ['V = G · h / 3.', 'V = 45 · 8 / 3 = 360/3.', 'V = 120 cm³.']],
        ['Eine Pyramide hat V = 72 cm³ und G = 24 cm². Berechne h.', 9, 'cm', ['V = G · h / 3, daher h = 3V/G.', 'h = 3 · 72 / 24 = 216/24.', 'h = 9 cm.']],
        ['Eine quadratische Pyramide hat Grundkante 5 cm und Höhe 12 cm. Berechne V.', 100, 'cm³', ['G = 5 · 5 = 25 cm².', 'V = G · h / 3 = 25 · 12 / 3.', 'V = 100 cm³.']]
    ]);
    addPracticeSet('tree-diagrams', [
        ['In einer Urne liegen 3 rote und 1 blaue Kugel. Wie groß ist P(Rot) in Prozent?', 75, '%', ['Es gibt 4 Kugeln, davon 3 rot.', 'P(Rot) = 3/4.', '3/4 = 75 %.']],
        ['Eine Münze wird zweimal geworfen. Wie viele vollständige Endpfade gibt es?', 4, 'Pfade', ['Beim ersten Wurf gibt es 2 Möglichkeiten.', 'Von jeder Möglichkeit gehen wieder 2 Äste ab.', '2 · 2 = 4 Endpfade.']],
        ['In einer Urne liegen 2 rote und 3 blaue Kugeln. Wie groß ist P(Blau) in Prozent?', 60, '%', ['Insgesamt gibt es 5 Kugeln, davon 3 blau.', 'P(Blau) = 3/5.', '3/5 = 60 %.']],
        ['Ein Zufallsrad hat 8 gleich große Felder, davon 3 grün. Wie groß ist P(Grün) in Prozent?', 37.5, '%', ['P(Grün) = 3/8.', '3 geteilt durch 8 ergibt 0,375.', '0,375 = 37,5 %.']]
    ]);
    addPracticeSet('path-rules', [
        ['Zwei unabhängige Ereignisse haben jeweils P = 1/2. Wie groß ist die Wahrscheinlichkeit, dass beide eintreten, in Prozent?', 25, '%', ['Entlang eines Pfades multiplizieren: 1/2 · 1/2 = 1/4.', '1/4 als Prozent: 1/4 · 100.', 'Die Wahrscheinlichkeit beträgt 25 %.']],
        ['Zwei verschiedene passende Pfade haben jeweils Wahrscheinlichkeit 20 %. Wie groß ist die Gesamtwahrscheinlichkeit?', 40, '%', ['Für verschiedene passende Pfade addieren.', '20 % + 20 % = 40 %.', 'Die Gesamtwahrscheinlichkeit beträgt 40 %.']],
        ['Eine faire Münze wird dreimal geworfen. Wie groß ist P(Kopf-Kopf-Kopf) in Prozent?', 12.5, '%', ['Pfadwahrscheinlichkeit: 1/2 · 1/2 · 1/2 = 1/8.', '1/8 = 0,125.', '0,125 · 100 = 12,5 %.']],
        ['Zwei unabhängige Ereignisse haben P(A) = 30 % und P(B) = 50 %. Wie groß ist P(A und B)?', 15, '%', ['Für unabhängige Ereignisse multiplizieren: 0,3 · 0,5 = 0,15.', '0,15 als Prozent sind 15 %.', 'P(A und B) = 15 %.']]
    ]);
    addPracticeSet('statistics', [
        ['Berechne den Mittelwert von 3, 5, 7 und 9.', 6, '', ['Summe: 3 + 5 + 7 + 9 = 24.', 'Es gibt 4 Werte.', 'Mittelwert = 24/4 = 6.']],
        ['Bestimme den Median: 1, 4, 6, 8, 10.', 6, '', ['Die Daten sind sortiert und es gibt 5 Werte.', 'Der mittlere, dritte Wert ist 6.', 'Der Median ist 6.']],
        ['Bestimme den Median: 2, 4, 8, 10.', 6, '', ['Bei 4 Werten werden die beiden mittleren Werte gemittelt.', '(4 + 8)/2 = 6.', 'Der Median ist 6.']],
        ['Bestimme die Spannweite der Werte 4, 7, 9 und 15.', 11, '', ['Größter Wert: 15; kleinster Wert: 4.', 'Spannweite = größter Wert − kleinster Wert.', '15 − 4 = 11.']]
    ]);

    const exam = {
        a1: [
            { id: 'exam-a1-1', prompt: 'Berechne ohne Taschenrechner: 3/4 von 20.', answer: 15, points: 2, steps: ['20 durch 4 teilen: 5.', '5 · 3 = 15.'], error: 'Bruchteilaufgabe: erst durch den Nenner teilen, dann mit dem Zähler multiplizieren.' },
            { id: 'exam-a1-2', prompt: 'Löse: 4x − 7 = 13.', answer: 5, points: 2, steps: ['Auf beiden Seiten 7 addieren: 4x = 20.', 'Durch 4 teilen: x = 5.'], error: 'Gleichung: Führe die Umkehroperationen auf beiden Seiten aus.' },
            { id: 'exam-a1-3', prompt: 'Berechne 12 % von 150.', answer: 18, points: 2, steps: ['150 · 12 / 100.', '18.'], error: 'Prozentrechnung: Prozentwert = Grundwert · Prozentsatz / 100.' },
            { id: 'exam-a1-4', prompt: 'Rechne aus: 2,5 + 3,75.', answer: 6.25, points: 2, steps: ['Dezimalstellen untereinander schreiben: 2,50 + 3,75.', 'Ergebnis: 6,25.'], error: 'Achte beim Addieren auf gleich ausgerichtete Dezimalkommas.' }
        ],
        a2: [
            { id: 'exam-a2-1', prompt: 'Ein Taxi verlangt 4 € Grundgebühr und 2 € pro Kilometer. Wie viel kostet eine Fahrt über 7 km?', answer: 18, points: 3, steps: ['Kostenfunktion: K = 2 · Kilometer + 4.', 'K = 2 · 7 + 4.', 'K = 18 €.'], error: 'Lineare Funktion: Steigung mal Strecke plus Grundgebühr.' },
            { id: 'exam-a2-2', prompt: 'Ein Zylinder hat r = 3 cm und h = 5 cm. Berechne das Volumen mit π ≈ 3,14.', answer: 141.3, tolerance: 0.5, points: 3, steps: ['V = πr²h.', 'V = 3,14 · 3² · 5.', 'V = 3,14 · 9 · 5 = 141,3 cm³.'], error: 'Zylinder: erst den Radius quadrieren, dann mit Höhe und π multiplizieren.' }
        ],
        b: {
            B1: [
                { id: 'exam-b1-1', prompt: 'Ein rechtwinkliges Dreieck hat Katheten 9 cm und 12 cm. Berechne die Hypotenuse.', answer: 15, points: 3, steps: ['c² = 9² + 12².', 'c² = 81 + 144 = 225.', 'c = 15 cm.'], error: 'Pythagoras: c ist die Hypotenuse und steht allein auf einer Seite der Gleichung.' },
                { id: 'exam-b1-2', prompt: 'Ein Guthaben von 800 € wird ein Jahr mit 2,5 % verzinst. Wie hoch sind die Zinsen?', answer: 20, points: 2, steps: ['Z = 800 · 2,5 / 100.', 'Z = 20 €.'], error: 'Zinsen für ein Jahr: Kapital mal Zinssatz geteilt durch 100.' }
            ],
            B2: [
                { id: 'exam-b2-1', prompt: 'Eine faire Münze wird zweimal geworfen. Wie groß ist die Wahrscheinlichkeit für mindestens einmal Kopf in Prozent?', answer: 75, points: 3, steps: ['Gegenereignis: kein Kopf bedeutet Zahl-Zahl.', 'P(Zahl-Zahl) = 1/2 · 1/2 = 1/4.', 'P(mindestens einmal Kopf) = 1 − 1/4 = 3/4 = 75 %.'], error: 'Nutze das Gegenereignis Zahl-Zahl und ziehe dessen Wahrscheinlichkeit von 100 % ab.' },
                { id: 'exam-b2-2', prompt: 'Eine Gerade verläuft durch (0|2) und (4|10). Berechne ihre Steigung.', answer: 2, points: 2, steps: ['Änderung y: 10 − 2 = 8.', 'Änderung x: 4 − 0 = 4.', 'm = 8 / 4 = 2.'], error: 'Steigung: Änderung der y-Werte durch Änderung der x-Werte teilen.' }
            ]
        }
    };

    const gradeScale = [
        { min: 92, grade: '1', label: 'sehr gut' },
        { min: 81, grade: '2', label: 'gut' },
        { min: 67, grade: '3', label: 'befriedigend' },
        { min: 50, grade: '4', label: 'ausreichend' },
        { min: 30, grade: '5', label: 'mangelhaft' },
        { min: 0, grade: '6', label: 'ungenügend' }
    ];
    let activeTopic = topics[0].id;
    let activeFilter = 'all';
    const pageParams = new URLSearchParams(window.location.search);
    const requestedTopic = pageParams.get('topic');
    const requestedSubtopic = pageParams.get('subtopic');
    const requestedView = pageParams.get('view');
    let activeSubtopic = null;
    let activeSubtopicFilter = null;
    let learningState = {};
    if (topics.some(topic => topic.id === requestedTopic)) {
        activeTopic = requestedTopic;
        activeFilter = requestedTopic;
        const lesson = topicById(requestedTopic).lessons.find(item => item.id === requestedSubtopic);
        if (lesson) {
            activeSubtopic = lesson.id;
            activeSubtopicFilter = lesson.id;
        }
    }
    let examState = { phase: 'intro', bChoice: 'B1', answers: {}, remainingSeconds: 45 * 60, interval: null };
    let feedbackState = {};

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    function topicById(id) {
        return topics.find(topic => topic.id === id);
    }

    function renderTopics() {
        const selected = topicById(activeTopic);
        const selectedLesson = selected.lessons.find(lesson => lesson.id === activeSubtopic);
        if (selectedLesson) {
            const detail = lessonDetails[selectedLesson.id];
            if (!detail) {
                throw new Error(`Für das Unterthema "${selectedLesson.id}" fehlt der ausführliche Lerninhalt.`);
            }
            document.getElementById('mathViewTopics').innerHTML = `
                <section class="math-topic-content">
                    <section class="math-panel math-lesson-heading-card">
                        <a class="portal-back-link" href="./mathematik-themen.html?topic=${selected.id}">← ${selected.title}</a>
                        <span class="math-eyebrow">${selected.icon} MATHEMATIK · KLASSE 9</span>
                        <h2>${selectedLesson.title}</h2>
                        <p>${escapeHtml(selectedLesson.text)}</p>
                    </section>
                    <article class="math-panel math-lesson-detail">
                        <div class="math-lesson-explanation">
                            ${detail.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
                        </div>
                        <section class="math-lesson-steps">
                            <h3>So gehst du vor</h3>
                            <ol>${detail.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
                        </section>
                        <section class="math-lesson-examples">
                            <h3>Schritt für Schritt vorgerechnet</h3>
                            ${detail.examples.map(example => `
                                <div class="math-example">
                                    <strong>${escapeHtml(example.title)}</strong>
                                    <ol>${example.lines.map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ol>
                                </div>`).join('')}
                        </section>
                        <section class="math-lesson-sources">
                            <h3>Quellen und zum Weiterlesen</h3>
                            <ul>
                                ${detail.sources.map(source => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join('')}
                                <li><a href="https://www.bildungsplaene-bw.de/,Lde/LS/BP2016BW/ALLG/SEK1/M" target="_blank" rel="noopener noreferrer">Bildungsplan Baden-Württemberg: Mathematik Sekundarstufe I</a></li>
                            </ul>
                            <p>Die Erklärungen sind eigenständig für dieses Lernmodul formuliert; die Links dienen zum Vertiefen und Nachprüfen.</p>
                        </section>
                    </article>
                    <button class="math-button math-button-primary" type="button" data-open-practice="${selected.id}" data-open-subtopic="${selectedLesson.id}">Passende Übungen zu „${selectedLesson.title}“ →</button>
                </section>`;
            return;
        }
        document.getElementById('mathViewTopics').innerHTML = `
            <div class="math-topic-layout">
                <nav class="math-topic-nav" aria-label="Mathematik-Themen">
                    ${topics.map(topic => `<button type="button" class="math-topic-button ${topic.id === activeTopic ? 'active' : ''}" data-topic="${topic.id}"><span>${topic.icon}</span>${topic.title}</button>`).join('')}
                </nav>
                <section class="math-topic-content">
                    <div class="math-section-heading"><div><span class="math-eyebrow">${selected.icon} THEMEN &amp; ERKLÄRUNGEN</span><h2>${selected.title}</h2></div><p>${selected.summary}</p></div>
                    <div class="math-lesson-grid">
                        ${selected.lessons.map(lesson => `<article class="math-panel"><h3>${lesson.title}</h3><p>${lesson.text}</p><div class="math-example"><strong>Beispiel</strong><br>${lesson.example}</div></article>`).join('')}
                    </div>
                    <button class="math-button math-button-primary" type="button" data-open-practice="${selected.id}">Zu den ${selected.title}-Übungen →</button>
                </section>
            </div>`;
    }

    function taskInput(task, value = '') {
        if (task.kind === 'choice') {
            return `<select class="math-answer" aria-label="Antwort auswählen" data-task-answer="${task.id}"><option value="">Antwort auswählen …</option>${task.options.map(option => `<option value="${escapeHtml(option)}" ${value === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select>`;
        }
        return `<label class="math-answer-label"><span class="math-sr-only">Deine Antwort</span><input class="math-answer" type="text" inputmode="decimal" autocomplete="off" placeholder="Ergebnis${task.unit ? ` in ${escapeHtml(task.unit)}` : ''}" aria-label="Ergebnis${task.unit ? ` in ${escapeHtml(task.unit)}` : ''}" data-task-answer="${task.id}" value="${escapeHtml(value)}">${task.unit ? `<span>${escapeHtml(task.unit)}</span>` : ''}</label>`;
    }

    function renderPractice() {
        const list = exercises.filter(task =>
            (activeFilter === 'all' || task.topic === activeFilter)
            && (!activeSubtopicFilter || task.subtopic === activeSubtopicFilter)
        );
        const selectedTopic = topicById(activeFilter);
        const selectedLesson = selectedTopic?.lessons.find(lesson => lesson.id === activeSubtopicFilter);
        document.getElementById('mathViewPractice').innerHTML = `
            <div class="math-section-heading"><div><span class="math-eyebrow">ÜBUNGSDATENBANK</span><h2>${selectedLesson ? `Übungen: ${selectedLesson.title}` : 'Üben mit direktem Feedback'}</h2></div><p>${list.length} Aufgaben · Schrittweise Lösungswege</p></div>
            <label class="math-filter-label">Themengebiet
                <select id="mathTopicFilter" class="math-select">${[['all', 'Alle Themen'], ...topics.map(topic => [topic.id, topic.title])].map(([value, label]) => `<option value="${value}" ${activeFilter === value ? 'selected' : ''}>${label}</option>`).join('')}</select>
            </label>
            <div class="math-exercise-grid">${list.map((task, index) => {
                const topic = topicById(task.topic);
                const state = feedbackState[task.id] || {};
                return `<article class="math-panel math-exercise" data-exercise="${task.id}">
                    <div class="math-exercise-meta"><span>${topic.icon} ${topic.title}</span><span>Aufgabe ${index + 1}</span></div>
                    <h3>${task.prompt}</h3>
                    <div class="math-answer-row">${taskInput(task, state.value || '')}<button type="button" class="math-button math-button-primary" data-check-task="${task.id}">Prüfen</button></div>
                    <p class="math-feedback ${state.checked ? (state.correct ? 'is-correct' : 'is-incorrect') : ''}" data-feedback="${task.id}" ${state.checked ? '' : 'hidden'}>${state.checked ? (state.correct ? 'Richtig! Gut gerechnet.' : 'Noch nicht richtig. Prüfe deinen Rechenweg und versuche es erneut.') : ''}</p>
                    <button type="button" class="math-text-button" data-show-solution="${task.id}" aria-expanded="${state.solution ? 'true' : 'false'}">Lösungsweg ${state.solution ? 'ausblenden' : 'anzeigen'}</button>
                    <ol class="math-solution" data-solution="${task.id}" ${state.solution ? '' : 'hidden'}>${task.steps.map(step => `<li>${step}</li>`).join('')}</ol>
                </article>`;
            }).join('')}</div>`;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainder = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
    }

    function renderExam() {
        const host = document.getElementById('mathViewExam');
        if (examState.phase === 'intro') {
            host.innerHTML = `
                <div class="math-section-heading"><div><span class="math-eyebrow">PRÜFUNGSSIMULATOR</span><h2>Trainiere den Prüfungsablauf</h2></div></div>
                <div class="math-exam-intro-grid">
                    <article class="math-panel"><span class="math-exam-number">A1</span><h3>Hilfsmittelfreier Teil</h3><p>45-Minuten-Timer · kein Taschenrechner · Grundlagen und Bruchteile.</p></article>
                    <article class="math-panel"><span class="math-exam-number">A2</span><h3>Anwendungsaufgaben</h3><p>Mit digitalem Taschenrechner-Hinweis · Funktionen und Geometrie.</p></article>
                    <article class="math-panel"><span class="math-exam-number">B</span><h3>Wahlteil</h3><p>Wähle zwischen zwei Übungsvarianten und bearbeite die Aufgaben.</p></article>
                </div>
                <div class="math-notice"><strong>Hinweis:</strong> Dies ist eine selbst erstellte Übungssimulation, keine Originalprüfung. Dauer und Aufbau orientieren sich an deiner Vorgabe. Die Notenanzeige ist eine veränderbare Orientierung und kein amtlicher BW-Notenschlüssel.</div>
                <button type="button" class="math-button math-button-primary" data-exam-start>Prüfung starten</button>`;
            return;
        }
        if (examState.phase === 'a1') {
            host.innerHTML = `
                <div class="math-exam-topline"><div><span class="math-eyebrow">TEIL A1 · OHNE HILFSMITTEL</span><h2>Rechne ohne Taschenrechner</h2></div><div class="math-timer" role="timer" aria-live="off">${formatTime(examState.remainingSeconds)}</div></div>
                <div class="math-notice">Taschenrechner und digitale Hilfsmittel sind in diesem Übungsteil nicht vorgesehen. Bei Zeitablauf wird A1 automatisch abgeschlossen.</div>
                ${renderExamQuestions(exam.a1)}
                <button type="button" class="math-button math-button-primary" data-exam-next>A1 abgeben und mit A2 fortfahren</button>`;
            return;
        }
        if (examState.phase === 'a2b') {
            const questions = [...exam.a2, ...exam.b[examState.bChoice]];
            host.innerHTML = `
                <div class="math-section-heading"><div><span class="math-eyebrow">TEIL A2 &amp; WAHLTEIL B</span><h2>Anwenden und begründen</h2></div></div>
                <div class="math-notice"><strong>Taschenrechner-Hinweis:</strong> In diesem Übungsteil darfst du einen Taschenrechner verwenden. Das digitale Werkzeug unten ist eine einfache Rechenhilfe, kein wissenschaftlicher Taschenrechner.</div>
                <div class="math-calculator"><label for="mathCalcExpression">Rechenhilfe: zwei Zahlen addieren</label><div><input id="mathCalcA" type="number" step="any" placeholder="Zahl 1"><span>+</span><input id="mathCalcB" type="number" step="any" placeholder="Zahl 2"><button type="button" class="math-button" data-calculate>Berechnen</button></div><output id="mathCalcResult" aria-live="polite"></output></div>
                <label class="math-filter-label">Wahlteil auswählen
                    <select id="mathBChoice" class="math-select"><option value="B1" ${examState.bChoice === 'B1' ? 'selected' : ''}>Wahlteil B1 · Geometrie &amp; Zinsen</option><option value="B2" ${examState.bChoice === 'B2' ? 'selected' : ''}>Wahlteil B2 · Wahrscheinlichkeit &amp; Funktionen</option></select>
                </label>
                <div class="math-exam-questions">${renderExamQuestions(questions)}</div>
                <button type="button" class="math-button math-button-primary" data-exam-submit>Prüfung auswerten</button>`;
            return;
        }
        renderExamResults();
    }

    function renderExamQuestions(questions) {
        return `<div class="math-exercise-grid">${questions.map((task, index) => `
            <article class="math-panel math-exercise">
                <div class="math-exercise-meta"><span>${task.id.toUpperCase().replaceAll('-', ' · ')}</span><span>${task.points} Punkte</span></div>
                <h3>${index + 1}. ${task.prompt}</h3>
                ${taskInput(task, examState.answers[task.id] || '')}
            </article>`).join('')}</div>`;
    }

    function numericValue(value) {
        const normalized = String(value).trim().replace(/\s/g, '').replace(',', '.');
        if (!normalized || !/^-?(?:\d+\.?\d*|\.\d+)$/.test(normalized)) return null;
        const result = Number(normalized);
        return Number.isFinite(result) ? result : null;
    }

    function isCorrect(task, value) {
        if (task.kind === 'choice') return value === task.answer;
        const parsed = numericValue(value);
        return parsed !== null && Math.abs(parsed - task.answer) <= (task.tolerance || 0.01);
    }

    function persistPractice() {
        window.LernraumDB.update('mathematikLearningState', state => ({
            ...state,
            feedback: feedbackState,
            theme: root.dataset.theme
        })).catch(error => {
            console.error('Der Mathematik-Lernstand konnte nicht in IndexedDB gespeichert werden:', error);
        });
    }

    async function loadState() {
        try {
            learningState = await window.LernraumDB.get('mathematikLearningState') || {};
            feedbackState = learningState.feedback && typeof learningState.feedback === 'object' ? learningState.feedback : {};
            const theme = learningState.theme === 'light' ? 'light' : 'dark';
            root.dataset.theme = theme;
            updateThemeButton();
        } catch (error) {
            console.error('Der Mathematik-Lernstand konnte nicht aus IndexedDB geladen werden:', error);
            root.dataset.theme = 'dark';
        }
    }

    function updateThemeButton() {
        const button = document.getElementById('mathThemeToggle');
        if (button) button.textContent = root.dataset.theme === 'dark' ? '☀️ Hellmodus' : '🌙 Dunkelmodus';
    }

    function saveExamAnswer(taskId, value) {
        examState.answers[taskId] = value;
    }

    function stopExamTimer() {
        if (examState.interval) {
            window.clearInterval(examState.interval);
            examState.interval = null;
        }
    }

    function beginExamTimer() {
        examState.remainingSeconds = 45 * 60;
        examState.interval = window.setInterval(() => {
            examState.remainingSeconds -= 1;
            const timer = document.querySelector('.math-timer');
            if (timer) timer.textContent = formatTime(Math.max(examState.remainingSeconds, 0));
            if (examState.remainingSeconds <= 0) {
                stopExamTimer();
                examState.phase = 'a2b';
                document.getElementById('mathLiveRegion').textContent = 'Die Zeit für Teil A1 ist abgelaufen. A1 wurde abgeschlossen; du kannst mit A2 und dem Wahlteil fortfahren.';
                renderExam();
            }
        }, 1000);
    }

    function gradeQuestions(questions) {
        return questions.map(task => ({
            ...task,
            response: examState.answers[task.id] || '',
            correct: isCorrect(task, examState.answers[task.id] || '')
        }));
    }

    function renderExamResults() {
        stopExamTimer();
        const questions = [...exam.a1, ...exam.a2, ...exam.b[examState.bChoice]];
        const graded = gradeQuestions(questions);
        const score = graded.reduce((sum, task) => sum + (task.correct ? task.points : 0), 0);
        const max = graded.reduce((sum, task) => sum + task.points, 0);
        const percent = Math.round(score / max * 100);
        const grade = gradeScale.find(item => percent >= item.min) || gradeScale[gradeScale.length - 1];
        window.LernraumDB.update('mathematikLearningState', state => ({
            ...state,
            bestExamPercent: Math.max(Number(state.bestExamPercent) || 0, percent),
            lastExam: { score, max, percent, grade: grade.grade, date: new Date().toISOString() }
        })).catch(error => {
            console.error('Das Prüfungsergebnis konnte nicht in IndexedDB gespeichert werden:', error);
        });
        document.getElementById('mathViewExam').innerHTML = `
            <div class="math-section-heading"><div><span class="math-eyebrow">AUSWERTUNG</span><h2>Dein Ergebnis</h2></div></div>
            <div class="math-result-card"><div class="math-result-percent">${percent}%</div><div><strong>${score} von ${max} Punkten</strong><p>Orientierungsnote: ${grade.grade} · ${grade.label}</p></div></div>
            <div class="math-notice">Die Note ist eine Übungsorientierung, kein offizielles Prüfungsergebnis. Den verwendeten Notenschlüssel kannst du im Array <code>gradeScale</code> in <code>mathematik.js</code> anpassen.</div>
            <h3 class="math-analysis-heading">Fehleranalyse und Lösungswege</h3>
            <div class="math-exercise-grid">${graded.map(task => `<article class="math-panel math-result-question ${task.correct ? 'is-correct' : 'is-incorrect'}">
                <div class="math-exercise-meta"><span>${task.correct ? '✓ Richtig' : '✗ Noch üben'}</span><span>${task.correct ? task.points : 0}/${task.points} Punkte</span></div>
                <h3>${task.prompt}</h3><p><strong>Deine Antwort:</strong> ${task.response ? escapeHtml(task.response) : 'Keine Antwort'}</p>
                ${task.correct ? '' : `<p><strong>Hinweis:</strong> ${task.error}</p>`}
                <details><summary>Lösungsweg anzeigen</summary><ol>${task.steps.map(step => `<li>${step}</li>`).join('')}</ol></details>
            </article>`).join('')}</div>
            <button type="button" class="math-button math-button-primary" data-exam-reset>Nochmal üben</button>`;
    }

    function switchView(view) {
        document.querySelectorAll('.math-tab').forEach(button => button.classList.toggle('active', button.dataset.mathView === view));
        document.querySelectorAll('.math-view').forEach(section => section.classList.toggle('hidden', section.id !== `mathView${view[0].toUpperCase()}${view.slice(1)}`));
        root.closest('#portalApp')?.classList.toggle('math-subtopic-focus', view === 'topics' && Boolean(activeSubtopic));
        if (view === 'practice') renderPractice();
        if (view === 'exam') renderExam();
    }

    root.addEventListener('click', event => {
        const target = event.target.closest('button');
        if (!target) return;

        if (target.dataset.mathView) switchView(target.dataset.mathView);
        if (target.dataset.topic) {
            activeTopic = target.dataset.topic;
            activeSubtopic = null;
            activeSubtopicFilter = null;
            activeFilter = activeTopic;
            renderTopics();
        }
        if (target.dataset.openPractice) {
            activeFilter = target.dataset.openPractice;
            activeSubtopicFilter = target.dataset.openSubtopic || null;
            switchView('practice');
        }
        if (target.dataset.checkTask) {
            const task = exercises.find(item => item.id === target.dataset.checkTask);
            const input = document.querySelector(`[data-task-answer="${task.id}"]`);
            const value = input.value.trim();
            if (!value) {
                input.focus();
                document.querySelector(`[data-feedback="${task.id}"]`).textContent = 'Gib zuerst eine Antwort ein.';
                document.querySelector(`[data-feedback="${task.id}"]`).hidden = false;
                return;
            }
            feedbackState[task.id] = { ...(feedbackState[task.id] || {}), value, checked: true, correct: isCorrect(task, value) };
            persistPractice();
            const feedback = document.querySelector(`[data-feedback="${task.id}"]`);
            feedback.textContent = feedbackState[task.id].correct ? 'Richtig! Gut gerechnet.' : 'Noch nicht richtig. Prüfe deinen Rechenweg und versuche es erneut.';
            feedback.className = `math-feedback ${feedbackState[task.id].correct ? 'is-correct' : 'is-incorrect'}`;
            feedback.hidden = false;
        }
        if (target.dataset.showSolution) {
            const state = feedbackState[target.dataset.showSolution] || {};
            state.solution = !state.solution;
            feedbackState[target.dataset.showSolution] = state;
            const solution = document.querySelector(`[data-solution="${target.dataset.showSolution}"]`);
            solution.hidden = !state.solution;
            target.textContent = `Lösungsweg ${state.solution ? 'ausblenden' : 'anzeigen'}`;
            target.setAttribute('aria-expanded', String(state.solution));
            persistPractice();
        }
        if (target.id === 'mathThemeToggle') {
            root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
            persistPractice();
            updateThemeButton();
        }
        if (target.hasAttribute('data-exam-start')) {
            examState = { ...examState, phase: 'a1', answers: {}, bChoice: 'B1' };
            renderExam();
            beginExamTimer();
        }
        if (target.hasAttribute('data-exam-next')) {
            stopExamTimer();
            examState.phase = 'a2b';
            renderExam();
        }
        if (target.hasAttribute('data-exam-submit')) {
            examState.phase = 'results';
            renderExam();
        }
        if (target.hasAttribute('data-exam-reset')) {
            stopExamTimer();
            examState = { phase: 'intro', bChoice: 'B1', answers: {}, remainingSeconds: 45 * 60, interval: null };
            renderExam();
        }
        if (target.hasAttribute('data-calculate')) {
            const first = numericValue(document.getElementById('mathCalcA').value);
            const second = numericValue(document.getElementById('mathCalcB').value);
            document.getElementById('mathCalcResult').textContent = first === null || second === null
                ? 'Bitte gib zwei gültige Zahlen ein.'
                : `Ergebnis: ${first + second}`;
        }
    });

    root.addEventListener('change', event => {
        if (event.target.id === 'mathTopicFilter') {
            activeFilter = event.target.value;
            activeSubtopicFilter = null;
            renderPractice();
        }
        if (event.target.id === 'mathBChoice') {
            examState.bChoice = event.target.value;
            renderExam();
        }
        if (event.target.matches('[data-task-answer]')) {
            const taskId = event.target.dataset.taskAnswer;
            const task = exercises.find(item => item.id === taskId);
            if (task) feedbackState[taskId] = { ...(feedbackState[taskId] || {}), value: event.target.value };
            persistPractice();
        }
    });

    root.addEventListener('input', event => {
        if (!event.target.matches('[data-task-answer]')) return;
        const taskId = event.target.dataset.taskAnswer;
        if (examState.phase === 'a1' || examState.phase === 'a2b') {
            saveExamAnswer(taskId, event.target.value);
        } else {
            feedbackState[taskId] = { ...(feedbackState[taskId] || {}), value: event.target.value };
            persistPractice();
        }
    });

    root.setAttribute('aria-busy', 'true');
    loadState().then(() => {
        renderTopics();
        renderPractice();
        renderExam();
        if (['practice', 'exam'].includes(requestedView)) {
            switchView(requestedView);
        } else {
            root.closest('#portalApp')?.classList.toggle('math-subtopic-focus', Boolean(activeSubtopic));
        }
    }).finally(() => root.removeAttribute('aria-busy'));
})();
