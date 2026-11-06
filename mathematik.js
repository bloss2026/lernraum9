(() => {
    'use strict';

    const root = document.getElementById('mathLearningApp');
    if (!root) return;

    const topics = [
        {
            id: 'powers-roots',
            title: 'Potenzen und Wurzeln',
            icon: '√',
            summary: 'Potenzen verstehen, Potenzgesetze sicher anwenden und Quadratwurzeln berechnen.',
            lessons: [
                { id: 'powers', title: 'Potenzen', text: 'Eine Potenz fasst gleiche Faktoren zusammen: aⁿ bedeutet, dass a n-mal mit sich selbst multipliziert wird. Bei gleicher Basis gilt aᵐ · aⁿ = aᵐ⁺ⁿ und aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0).', example: '2⁴ = 2 · 2 · 2 · 2 = 16; 3² · 3³ = 3⁵ = 243.' },
                { id: 'roots', title: 'Wurzeln', text: 'Die Quadratwurzel √a ist die nichtnegative Zahl, deren Quadrat a ergibt. Quadrieren und Quadratwurzelziehen sind Umkehroperationen.', example: '√49 = 7, denn 7² = 49. Bei √(3² + 4²) rechnest du zuerst unter der Wurzel: √25 = 5.' }
            ]
        },
        {
            id: 'functions',
            title: 'Funktionen',
            icon: '📈',
            summary: 'Der Schwerpunkt liegt auf linearen Funktionen: Gleichungen, Steigung, Achsenabschnitt, Tabellen und Graphen.',
            lessons: [
                { id: 'linear-functions', title: 'Lineare Funktionen', text: 'Eine lineare Funktion hat die Form y = m · x + b. m ist die Steigung und b der y-Achsenabschnitt. Setze einen x-Wert ein, um den zugehörigen y-Wert zu berechnen.', example: 'y = 2x + 1: Für x = 3 gilt y = 2 · 3 + 1 = 7.' },
                { id: 'slope', title: 'Steigung', text: 'Die Steigung m beschreibt die Änderung der y-Werte im Verhältnis zur Änderung der x-Werte: m = (y₂ − y₁)/(x₂ − x₁).', example: 'Zwischen (1|2) und (3|6): m = (6 − 2)/(3 − 1) = 2.' },
                { id: 'graphs', title: 'Tabellen und Funktionsgraphen', text: 'Eine Wertetabelle ordnet x-Werte den berechneten y-Werten zu. Trage die Punkte (x|y) ins Koordinatensystem ein; zwei Punkte bestimmen eine Gerade.', example: 'Für y = x + 2 ergeben x = 0 und x = 2 die Punkte (0|2) und (2|4).' }
            ]
        },
        {
            id: 'percent-interest',
            title: 'Prozent- und Zinsrechnung',
            icon: '%',
            summary: 'Prozentwert, Prozentsatz und Grundwert berechnen sowie Zinsen und Preisänderungen verstehen.',
            lessons: [
                { id: 'percent', title: 'Prozentrechnung', text: 'Prozent bedeutet „von hundert“. Mit W = G · p / 100 berechnest du den Prozentwert; G ist der Grundwert, p der Prozentsatz und W der Anteil.', example: '20 % von 80 €: W = 80 · 20 / 100 = 16 €.' },
                { id: 'interest', title: 'Zinsrechnung', text: 'Zinsen sind Prozentrechnung mit Geld und Zeit. Für ein Jahr gilt Z = K · p / 100; bei einer einfachen anteiligen Verzinsung berechnest du für m Monate Z = K · p / 100 · m / 12.', example: '500 € zu 4 % für ein Jahr: Z = 500 · 4 / 100 = 20 €.' }
            ]
        },
        {
            id: 'geometry',
            title: 'Flächen und Körperberechnungen',
            icon: '📐',
            summary: 'Flächeninhalte ebener Figuren, Seitenlängen rechtwinkliger Dreiecke sowie Volumen und Oberflächen von Körpern berechnen.',
            lessons: [
                { id: 'plane-areas', title: 'Flächen ebener Figuren', text: 'Flächeninhalte werden in Quadrateinheiten angegeben. Rechteck: A = a · b; Dreieck: A = g · h / 2; Kreis: A = πr².', example: 'Ein Rechteck mit 8 cm und 5 cm hat A = 8 · 5 = 40 cm².' },
                { id: 'triangle-area', title: 'Dreiecksfläche', text: 'Der Flächeninhalt eines Dreiecks ist halb so groß wie Grundseite mal zugehörige senkrechte Höhe: A = g · h / 2.', example: 'g = 12 cm, h = 7 cm: A = 12 · 7 / 2 = 42 cm².' },
                { id: 'pythagoras', title: 'Satz des Pythagoras', text: 'Im rechtwinkligen Dreieck gilt a² + b² = c². c ist immer die längste Seite gegenüber dem rechten Winkel.', example: 'a = 3 cm, b = 4 cm: c = √(3² + 4²) = √25 = 5 cm.' },
                { id: 'prism', title: 'Prisma', text: 'Volumen: V = Grundfläche · Länge. Bei einem geraden Prisma gilt für die Oberfläche: O = 2G + Umfang der Grundfläche · Länge.', example: 'Grundfläche 12 cm² und Länge 5 cm: V = 12 · 5 = 60 cm³.' },
                { id: 'cylinder', title: 'Zylinder', text: 'Grundfläche G = πr². Volumen V = πr²h; Oberfläche O = 2πr² + 2πrh.', example: 'r = 2 cm, h = 5 cm: V = π · 2² · 5 ≈ 62,8 cm³.' },
                { id: 'pyramid', title: 'Pyramide', text: 'Das Volumen ist ein Drittel aus Grundfläche mal senkrechter Höhe: V = G · h / 3.', example: 'G = 36 cm², h = 9 cm: V = 36 · 9 / 3 = 108 cm³.' }
            ]
        },
        {
            id: 'data-chance',
            title: 'Daten und Zufall',
            icon: '🎲',
            summary: 'Daten sortieren und auswerten, Wahrscheinlichkeiten bestimmen sowie Baumdiagramme und Pfadregeln nutzen.',
            lessons: [
                { id: 'statistics', title: 'Daten und Statistik', text: 'Der Mittelwert ist die Summe aller Werte geteilt durch ihre Anzahl. Der Median ist der mittlere Wert der sortierten Liste; der häufigste Wert heißt Modalwert.', example: '2, 4, 4, 10: Mittelwert = 20/4 = 5; Median = 4; Modalwert = 4.' },
                { id: 'tree-diagrams', title: 'Baumdiagramme', text: 'Jede Stufe eines Baumdiagramms steht für einen Versuchsschritt. An den Ästen stehen die Wahrscheinlichkeiten der möglichen Ergebnisse.', example: 'Bei einer fairen Münze haben Kopf und Zahl jeweils die Wahrscheinlichkeit 1/2.' },
                { id: 'path-rules', title: 'Pfadregeln', text: 'Entlang eines Pfades multiplizierst du die Astwahrscheinlichkeiten. Passen mehrere Pfade zum Ereignis, addierst du deren Wahrscheinlichkeiten.', example: 'Genau einmal Kopf bei zwei Würfen: 1/4 + 1/4 = 1/2.' }
            ]
        },
        {
            id: 'quadratics',
            title: 'Quadratische Funktionen und Gleichungen',
            icon: '∿',
            summary: 'Parabeln untersuchen, Funktionswerte und Scheitelpunkte bestimmen und quadratische Gleichungen lösen.',
            lessons: [
                { id: 'quadratic-functions', title: 'Quadratische Funktionen', text: 'Der Graph einer quadratischen Funktion ist eine Parabel. In der Scheitelpunktform f(x) = a(x − h)² + k liegt der Scheitelpunkt bei (h|k).', example: 'f(x) = (x − 4)² + 2 hat den Scheitelpunkt (4|2).' },
                { id: 'quadratic-equations', title: 'Quadratische Gleichungen', text: 'Bringe die Gleichung auf die Form … = 0. Lässt sich die linke Seite faktorisieren, kannst du mit der Nullproduktregel die Lösungen bestimmen.', example: 'x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 oder x = 3.' }
            ]
        },
        {
            id: 'units',
            title: 'Einheiten umrechnen',
            icon: '↔️',
            summary: 'Längen-, Flächen-, Volumen-, Gewichts- und Zeiteinheiten passend umwandeln.',
            lessons: [
                { id: 'units', title: 'Einheiten umrechnen', text: 'Bei benachbarten Längeneinheiten ist jeder Schritt zehnfach. Bei Flächeneinheiten ist es hundertfach und bei Volumeneinheiten tausendfach. Schreibe die Einheit immer mit um.', example: '2,5 m = 250 cm; 3 m² = 30.000 cm²; 1,2 l = 1.200 ml.' }
            ]
        },
        {
            id: 'fractions',
            title: 'Bruchrechnen',
            icon: '½',
            summary: 'Brüche kürzen und erweitern, vergleichen sowie addieren, subtrahieren, multiplizieren und dividieren.',
            lessons: [
                { id: 'fractions', title: 'Brüche und rationale Zahlen', text: 'Ein Bruch besteht aus Zähler und Nenner; der Nenner darf nie 0 sein. Zum Addieren brauchst du einen gemeinsamen Nenner, beim Dividieren multiplizierst du mit dem Kehrwert.', example: '3/4 + 1/8 = 6/8 + 1/8 = 7/8.' }
            ]
        },
        {
            id: 'terms',
            title: 'Terme',
            icon: '🔤',
            summary: 'Terme vereinfachen, Klammern auflösen, lineare Gleichungen lösen und Textaufgaben mathematisch beschreiben.',
            lessons: [
                { id: 'terms', title: 'Terme vereinfachen', text: 'Fasse nur gleichartige Glieder zusammen. Klammern löst du mit dem Distributivgesetz auf: a(b + c) = ab + ac.', example: '3x + 2x − 4 = 5x − 4; 2(x + 3) = 2x + 6.' },
                { id: 'equations', title: 'Lineare Gleichungen', text: 'Führe auf beiden Seiten dieselbe Rechenoperation aus, bis die Variable allein steht. Prüfe die Lösung durch Einsetzen.', example: '3x + 5 = 20 → 3x = 15 → x = 5.' },
                { id: 'rearranging-formulas', title: 'Formeln umstellen', text: 'Stelle eine Formel nach einer gesuchten Variablen um, indem du auf beiden Seiten Umkehroperationen ausführst.', example: 's = v · t wird nach t umgestellt zu t = s / v.' },
                { id: 'word-equations', title: 'Textaufgaben mit Gleichungen', text: 'Übersetze Angaben in eine Gleichung, löse sie und prüfe, ob das Ergebnis zur Situation passt.', example: 'Das Dreifache einer Zahl plus 4 ist 19: 3x + 4 = 19, also x = 5.' }
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
        'quadratic-equations': {
            paragraphs: [
                'Eine quadratische Gleichung enthält eine Variable mit dem Exponenten 2. Eine wichtige Form ist x² + bx + c = 0. Wenn sich der Term in zwei Faktoren zerlegen lässt, kannst du die Nullproduktregel verwenden: Ein Produkt ist genau dann null, wenn mindestens ein Faktor null ist.',
                'Setze beide Faktoren einzeln gleich null und löse die entstehenden einfachen Gleichungen. So erhältst du die Lösungen der quadratischen Gleichung. Bei einer Parabel sind diese Lösungen zugleich die Nullstellen, also die x-Werte, an denen der Graph die x-Achse schneidet. Nicht jede quadratische Gleichung lässt sich auf diese Weise faktorisieren; hier üben wir zunächst Gleichungen, die sich in Faktoren zerlegen lassen.'
            ],
            steps: ['Alle Terme auf eine Seite bringen, sodass auf der anderen Seite 0 steht.', 'Den quadratischen Term faktorisieren.', 'Jeden Faktor einzeln gleich 0 setzen.', 'Beide Gleichungen lösen und die Lösungen durch Einsetzen prüfen.'],
            examples: [
                { title: 'Quadratische Gleichung lösen', lines: ['x² − 5x + 6 = 0', '(x − 2)(x − 3) = 0', 'x − 2 = 0 oder x − 3 = 0; also x = 2 oder x = 3.'] },
                { title: 'Nullstellen bestimmen', lines: ['x² − 4x + 3 = 0', '(x − 1)(x − 3) = 0', 'Die Nullstellen sind x = 1 und x = 3.'] }
            ],
            commonMistake: 'Bei der Nullproduktregel müssen alle Faktoren betrachtet werden. Eine quadratische Gleichung kann zwei Lösungen haben; prüfe daher jeden Faktor einzeln.',
            sources: []
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
        'quadratic-functions': {
            paragraphs: [
                'Eine quadratische Funktion enthält x² und hat als Graph eine Parabel. Eine typische Form ist f(x) = ax² + bx + c. Der Faktor a bestimmt, ob die Parabel nach oben oder unten geöffnet und wie breit sie ist.',
                'In der Scheitelpunktform f(x) = a(x − h)² + k kannst du den Scheitelpunkt S(h|k) direkt ablesen. Für einen Funktionswert setzt du den gegebenen x-Wert überall für x ein und rechnest mit der üblichen Reihenfolge der Rechenoperationen.'
            ],
            steps: ['Form der Funktion erkennen und gegebenenfalls in Scheitelpunktform bringen.', 'Für einen Funktionswert den x-Wert überall einsetzen.', 'Potenzen vor Multiplikation und Addition berechnen.', 'In der Scheitelpunktform den Scheitelpunkt S(h|k) ablesen.'],
            examples: [
                { title: 'Funktionswert berechnen', lines: ['f(x) = x² − 2x + 4; gesucht ist f(3).', 'f(3) = 3² − 2 · 3 + 4.', 'f(3) = 9 − 6 + 4 = 7.'] },
                { title: 'Scheitelpunkt ablesen', lines: ['f(x) = (x − 4)² + 2', 'Vergleich mit f(x) = (x − h)² + k: h = 4, k = 2.', 'Scheitelpunkt S(4|2).'] }
            ],
            commonMistake: 'In f(x) = (x − h)² + k ist die x-Koordinate des Scheitelpunkts h. Achte auf das Vorzeichen in der Klammer: (x − 4)² hat h = 4.',
            sources: []
        },
        'plane-areas': {
            paragraphs: [
                'Ein Flächeninhalt gibt an, wie viel Platz eine ebene Figur bedeckt. Er wird in Quadrateinheiten wie cm² oder m² angegeben. Wähle die Formel passend zur Figur und setze alle Längen in derselben Einheit ein.',
                'Für ein Rechteck gilt A = a · b. Beim Dreieck wird das Produkt aus Grundseite und zugehöriger senkrechter Höhe halbiert: A = g · h / 2. Für einen Kreis gilt A = πr²; r ist der Abstand vom Mittelpunkt zum Rand. Mit π ≈ 3,14 erhältst du einen Näherungswert.'
            ],
            steps: ['Figur erkennen und passende Formel notieren.', 'Gegebene Seitenlängen und die zugehörige Höhe markieren.', 'Vor dem Rechnen alle Längen in dieselbe Einheit umwandeln.', 'Werte einsetzen und mit Quadrateinheit angeben.', 'Bei einem Kreis den Radius quadrieren, nicht den Durchmesser.'],
            examples: [
                { title: 'Rechteck', lines: ['a = 8 cm, b = 5 cm', 'A = a · b = 8 · 5', 'A = 40 cm².'] },
                { title: 'Dreieck', lines: ['g = 12 cm, h = 7 cm', 'A = g · h / 2 = 12 · 7 / 2', 'A = 42 cm².'] },
                { title: 'Kreis', lines: ['r = 3 cm, π ≈ 3,14', 'A = πr² = 3,14 · 3²', 'A ≈ 28,26 cm².'] }
            ],
            commonMistake: 'Flächeninhalte haben eine quadratische Einheit. Beim Dreieck muss durch 2 geteilt werden; beim Kreis wird der Radius quadriert.',
            sources: []
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
        'triangle-area': {
            paragraphs: [
                'Der Flächeninhalt eines Dreiecks hängt von einer Grundseite g und der dazugehörigen senkrechten Höhe h ab. Die Höhe muss im rechten Winkel auf der gewählten Grundseite stehen; sie ist nicht unbedingt eine der Dreiecksseiten.',
                'Ein Dreieck ist halb so groß wie ein Parallelogramm mit derselben Grundseite und Höhe. Deshalb gilt A = g · h / 2. Gib den Flächeninhalt in Quadrateinheiten an.'
            ],
            steps: ['Grundseite g und die dazugehörige senkrechte Höhe h bestimmen.', 'Formel A = g · h / 2 notieren.', 'Werte mit ihren Einheiten einsetzen und rechnen.', 'Flächeneinheit, zum Beispiel cm², angeben.'],
            examples: [
                { title: 'Flächeninhalt berechnen', lines: ['g = 12 cm, h = 7 cm', 'A = 12 · 7 / 2', 'A = 84 / 2 = 42 cm².'] },
                { title: 'Höhe berechnen', lines: ['A = 30 cm², g = 10 cm', 'h = 2A / g = 60 / 10', 'h = 6 cm.'] }
            ],
            commonMistake: 'Die Höhe muss zur gewählten Grundseite senkrecht sein. Vergiss beim Flächeninhalt außerdem nicht, das Produkt aus Grundseite und Höhe durch 2 zu teilen.',
            sources: []
        },
        units: {
            paragraphs: [
                'Beim Umrechnen von Einheiten wird dieselbe Größe nur anders ausgedrückt. In der Längentabelle ist jeder Schritt zur kleineren Einheit zehnmal so groß: 1 m = 10 dm = 100 cm = 1.000 mm. Zur größeren Einheit teilst du entsprechend.',
                'Bei Flächen wird der Umrechnungsfaktor quadriert: ein Schritt in der Flächentabelle entspricht dem Faktor 100. Bei Volumen wird er hoch drei genommen: ein Schritt entspricht dem Faktor 1.000. Merke außerdem: 1 l = 1 dm³ und 1 ml = 1 cm³. Rechne Geld- und Zeiteinheiten mit ihren eigenen Beziehungen um, zum Beispiel 1 € = 100 ct und 1 h = 60 min.'
            ],
            steps: ['Größe und Ausgangseinheit erkennen.', 'Ziel- und Ausgangseinheit in der Umrechnungstabelle finden.', 'Bei Länge pro Schritt mit 10, bei Fläche mit 100 und bei Volumen mit 1.000 umrechnen.', 'In die richtige Richtung multiplizieren oder teilen.', 'Einheit dazuschreiben und prüfen, ob der Zahlenwert plausibel ist.'],
            examples: [
                { title: 'Längeneinheiten', lines: ['2,5 m in cm umrechnen.', '1 m = 100 cm, also mit 100 multiplizieren.', '2,5 m = 250 cm.'] },
                { title: 'Flächeneinheiten', lines: ['3 m² in cm² umrechnen.', '1 m² = 100 cm · 100 cm = 10.000 cm².', '3 m² = 30.000 cm².'] },
                { title: 'Volumen und Liter', lines: ['1,2 l in ml umrechnen.', '1 l = 1.000 ml.', '1,2 l = 1.200 ml.'] }
            ],
            commonMistake: 'Bei Flächen und Volumen reicht es nicht, den Längenfaktor zu verwenden: 1 m² sind 10.000 cm² und 1 m³ sind 1.000.000 cm³.',
            sources: []
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

    exercises.forEach(exercise => {
        const topic = topics.find(item => item.lessons.some(lesson => lesson.id === exercise.subtopic));
        if (!topic) throw new Error(`Für das Unterthema "${exercise.subtopic}" fehlt ein Themengebiet.`);
        exercise.topic = topic.id;
    });

    function addPracticeSet(subtopic, items) {
        const topic = topics.find(item => item.lessons.some(lesson => lesson.id === subtopic));
        if (!topic) throw new Error(`Für das Unterthema "${subtopic}" fehlt ein Themengebiet.`);
        items.forEach(([prompt, answer, unit, steps, tolerance]) => {
            exercises.push({
                id: `extra-${subtopic}-${exercises.filter(task => task.id.startsWith(`extra-${subtopic}-`)).length + 1}`,
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
    addPracticeSet('powers', [
        ['Vereinfache: 4³ · 4². Gib das Ergebnis als Zahl an.', 1024, '', ['Bei gleicher Basis die Exponenten addieren: 4³ · 4² = 4⁵.', '4⁵ = 4 · 4 · 4 · 4 · 4.', 'Das Ergebnis ist 1.024.']],
        ['Berechne: 10⁴.', 10000, '', ['10⁴ bedeutet vier Faktoren 10.', '10 · 10 · 10 · 10 = 10.000.', 'Das Ergebnis ist 10.000.']],
        ['Berechne: (−2)³.', -8, '', ['Bei einer ungeraden Anzahl negativer Faktoren ist das Ergebnis negativ.', '(−2)³ = (−2) · (−2) · (−2).', 'Das Ergebnis ist −8.']],
        ['Vereinfache: 7⁵ : 7³. Gib das Ergebnis als Zahl an.', 49, '', ['Bei gleicher Basis die Exponenten subtrahieren: 7⁵ : 7³ = 7².', '7² = 7 · 7.', 'Das Ergebnis ist 49.']]
    ]);
    addPracticeSet('roots', [
        ['Berechne √289.', 17, '', ['Gesucht ist die nichtnegative Zahl, deren Quadrat 289 ist.', '17 · 17 = 289.', '√289 = 17.']],
        ['Berechne √324.', 18, '', ['18² = 18 · 18 = 324.', 'Die Quadratwurzel ist nichtnegativ.', '√324 = 18.']],
        ['Berechne √100 + √36.', 16, '', ['Zuerst die Wurzeln berechnen: √100 = 10 und √36 = 6.', 'Dann addieren: 10 + 6.', 'Das Ergebnis ist 16.']],
        ['Zwischen welchen ganzen Zahlen liegt √70? Gib die kleinere Zahl an.', 8, '', ['8² = 64 und 9² = 81.', '70 liegt zwischen 64 und 81.', '√70 liegt zwischen 8 und 9; die kleinere Zahl ist 8.']]
    ]);
    addPracticeSet('linear-functions', [
        ['Bei y = 3x − 5: Berechne y für x = 4.', 7, 'y =', ['x = 4 einsetzen: y = 3 · 4 − 5.', 'Zuerst multiplizieren: 12 − 5.', 'y = 7.']],
        ['Bei y = −4x + 6: Berechne y für x = 2.', -2, 'y =', ['x = 2 einsetzen: y = −4 · 2 + 6.', '−8 + 6 = −2.', 'y = −2.']],
        ['Bei y = 7x − 3: Gib die Steigung m an.', 7, 'm =', ['Mit y = mx + b vergleichen.', 'Der Koeffizient vor x ist die Steigung m.', 'm = 7.']],
        ['Bei y = −2x + 8: Gib den y-Achsenabschnitt b an.', 8, 'b =', ['Mit y = mx + b vergleichen.', 'Der konstante Term ist der y-Achsenabschnitt.', 'b = 8.']]
    ]);
    addPracticeSet('slope', [
        ['Berechne die Steigung zwischen (2|3) und (5|12).', 3, 'm =', ['Änderung y: 12 − 3 = 9.', 'Änderung x: 5 − 2 = 3.', 'm = 9/3 = 3.']],
        ['Berechne die Steigung zwischen (1|8) und (3|2).', -3, 'm =', ['Änderung y: 2 − 8 = −6.', 'Änderung x: 3 − 1 = 2.', 'm = −6/2 = −3.']],
        ['Eine Gerade steigt 6 Einheiten bei 3 Schritten nach rechts. Wie groß ist m?', 2, 'm =', ['Steigung = Änderung y / Änderung x.', 'm = 6/3.', 'm = 2.']],
        ['Eine Gerade ist waagerecht. Wie groß ist ihre Steigung?', 0, 'm =', ['Bei einer waagerechten Geraden ändert sich y nicht.', 'Die Änderung in y ist 0.', 'Die Steigung m = 0.']]
    ]);
    addPracticeSet('graphs', [
        ['Ergänze den Funktionswert: y = 2x + 3 für x = 0.', 3, 'y =', ['x = 0 einsetzen: y = 2 · 0 + 3.', '2 · 0 = 0.', 'y = 3.']],
        ['Für y = x − 2: Berechne y für x = 5.', 3, 'y =', ['x = 5 einsetzen: y = 5 − 2.', 'Ausrechnen: 5 − 2 = 3.', 'y = 3.']],
        ['Eine Gerade verläuft durch (0|−3). Wie groß ist ihr y-Achsenabschnitt?', -3, 'b =', ['Der y-Achsenabschnitt ist der y-Wert bei x = 0.', 'Der Punkt (0|−3) liegt auf der y-Achse.', 'b = −3.']],
        ['Für y = 3x + 1: Berechne x, wenn y = 10 ist.', 3, 'x =', ['10 = 3x + 1.', '9 = 3x.', 'x = 3.']]
    ]);
    addPracticeSet('percent', [
        ['Berechne 12 % von 300.', 36, '€', ['W = G · p / 100.', 'W = 300 · 12 / 100 = 36.', '12 % von 300 sind 36.']],
        ['40 € sind wie viel Prozent von 160 €?', 25, '%', ['p = W / G · 100.', 'p = 40 / 160 · 100.', 'p = 25 %.']],
        ['Ein Preis von 150 € wird um 20 % gesenkt. Wie hoch ist der neue Preis?', 120, '€', ['20 % von 150 € sind 30 €.', 'Den Rabatt abziehen: 150 € − 30 €.', 'Der neue Preis beträgt 120 €.']],
        ['Ein Preis steigt von 80 € auf 100 €. Um wie viel Prozent ist er gestiegen?', 25, '%', ['Die Erhöhung beträgt 100 € − 80 € = 20 €.', 'Bezogen auf den Grundwert 80 €: 20 / 80 · 100.', 'Der Preis ist um 25 % gestiegen.']]
    ]);
    addPracticeSet('interest', [
        ['Berechne die Jahreszinsen für 1.500 € bei 2 %.', 30, '€', ['Z = K · p / 100.', 'Z = 1.500 · 2 / 100.', 'Z = 30 €.']],
        ['Wie viele Zinsen bringen 800 € bei 5 % für ein halbes Jahr?', 20, '€', ['Jahreszinsen: 800 · 5 / 100 = 40 €.', 'Ein halbes Jahr ist die Hälfte eines Jahreszinses.', '40 / 2 = 20 €.']],
        ['Bei 1.000 € Kapital entstehen in einem Jahr 40 € Zinsen. Wie hoch ist der Zinssatz?', 4, '%', ['p = Z / K · 100.', 'p = 40 / 1.000 · 100.', 'Der Zinssatz beträgt 4 %.']],
        ['Wie hoch ist das Kapital, wenn 3 % Jahreszinsen 45 € betragen?', 1500, '€', ['K = Z · 100 / p.', 'K = 45 · 100 / 3.', 'Das Kapital beträgt 1.500 €.']]
    ]);
    addPracticeSet('plane-areas', [
        ['Ein Rechteck ist 9 cm lang und 4 cm breit. Berechne den Flächeninhalt.', 36, 'cm²', ['A = a · b.', 'A = 9 · 4.', 'A = 36 cm².']],
        ['Ein Quadrat hat eine Seitenlänge von 7 cm. Berechne seinen Flächeninhalt.', 49, 'cm²', ['Für ein Quadrat gilt A = a · a.', 'A = 7 · 7.', 'A = 49 cm².']],
        ['Ein Kreis hat den Radius 5 cm. Berechne den Flächeninhalt mit π ≈ 3,14.', 78.5, 'cm²', ['A = πr².', 'A = 3,14 · 5² = 3,14 · 25.', 'A = 78,5 cm².'], 0.1],
        ['Ein Rechteck hat A = 54 cm² und a = 9 cm. Wie breit ist es?', 6, 'cm', ['A = a · b, also b = A/a.', 'b = 54/9.', 'b = 6 cm.']]
    ]);
    addPracticeSet('triangle-area', [
        ['Ein Dreieck hat g = 10 cm und h = 8 cm. Berechne A.', 40, 'cm²', ['A = g · h / 2.', 'A = 10 · 8 / 2 = 80/2.', 'A = 40 cm².']],
        ['Ein Dreieck hat g = 15 cm und h = 6 cm. Berechne A.', 45, 'cm²', ['A = g · h / 2.', 'A = 15 · 6 / 2 = 90/2.', 'A = 45 cm².']],
        ['Ein Dreieck hat A = 36 cm² und g = 12 cm. Wie hoch ist es?', 6, 'cm', ['h = 2A/g.', 'h = 2 · 36 / 12 = 72/12.', 'h = 6 cm.']],
        ['Ein Dreieck hat A = 24 cm² und h = 8 cm. Wie lang ist g?', 6, 'cm', ['g = 2A/h.', 'g = 2 · 24 / 8 = 48/8.', 'g = 6 cm.']]
    ]);
    addPracticeSet('pythagoras', [
        ['Die Katheten sind 7 cm und 24 cm lang. Berechne die Hypotenuse.', 25, 'cm', ['c² = 7² + 24² = 49 + 576 = 625.', 'c = √625.', 'c = 25 cm.']],
        ['Die Hypotenuse ist 10 cm und eine Kathete 8 cm lang. Berechne die andere Kathete.', 6, 'cm', ['a² = 10² − 8² = 100 − 64 = 36.', 'a = √36.', 'a = 6 cm.']],
        ['Die Katheten sind 5 cm und 12 cm lang. Berechne die Hypotenuse.', 13, 'cm', ['c² = 5² + 12² = 25 + 144 = 169.', 'c = √169.', 'c = 13 cm.']],
        ['Die Hypotenuse ist 17 cm und eine Kathete 8 cm lang. Berechne die andere Kathete.', 15, 'cm', ['a² = 17² − 8² = 289 − 64 = 225.', 'a = √225.', 'a = 15 cm.']]
    ]);
    addPracticeSet('prism', [
        ['Ein Prisma hat G = 16 cm² und eine Länge von 8 cm. Berechne V.', 128, 'cm³', ['V = G · Länge.', 'V = 16 · 8.', 'V = 128 cm³.']],
        ['Ein Prisma hat G = 21 cm² und eine Länge von 5 cm. Berechne V.', 105, 'cm³', ['V = G · Länge.', 'V = 21 · 5.', 'V = 105 cm³.']],
        ['Ein Prisma hat V = 180 cm³ und eine Länge von 9 cm. Berechne G.', 20, 'cm²', ['G = V / Länge.', 'G = 180 / 9.', 'G = 20 cm².']],
        ['Ein gerades Prisma hat G = 10 cm², Umfang u = 14 cm und Länge 5 cm. Berechne O.', 90, 'cm²', ['O = 2G + u · Länge.', 'O = 2 · 10 + 14 · 5 = 20 + 70.', 'O = 90 cm².']]
    ]);
    addPracticeSet('cylinder', [
        ['Ein Zylinder hat r = 2 cm und h = 5 cm. Berechne V mit π ≈ 3,14.', 62.8, 'cm³', ['V = πr²h.', 'V = 3,14 · 2² · 5 = 3,14 · 4 · 5.', 'V = 62,8 cm³.'], 0.1],
        ['Ein Zylinder hat r = 4 cm und h = 2 cm. Berechne V mit π ≈ 3,14.', 100.48, 'cm³', ['V = πr²h.', 'V = 3,14 · 4² · 2 = 3,14 · 16 · 2.', 'V = 100,48 cm³.'], 0.1],
        ['Ein Zylinder hat Radius 3 cm und Höhe 4 cm. Berechne O mit π ≈ 3,14.', 131.88, 'cm²', ['O = 2πr² + 2πrh.', 'O = 2 · 3,14 · 9 + 2 · 3,14 · 3 · 4.', 'O = 56,52 + 75,36 = 131,88 cm².'], 0.2],
        ['Ein Zylinder hat V = 314 cm³ und r = 5 cm. Berechne h mit π ≈ 3,14.', 4, 'cm', ['h = V/(πr²).', 'h = 314/(3,14 · 25) = 314/78,5.', 'h = 4 cm.']]
    ]);
    addPracticeSet('pyramid', [
        ['Eine Pyramide hat G = 30 cm² und h = 12 cm. Berechne V.', 120, 'cm³', ['V = G · h / 3.', 'V = 30 · 12 / 3 = 360/3.', 'V = 120 cm³.']],
        ['Eine Pyramide hat G = 18 cm² und h = 15 cm. Berechne V.', 90, 'cm³', ['V = G · h / 3.', 'V = 18 · 15 / 3 = 270/3.', 'V = 90 cm³.']],
        ['Eine Pyramide hat V = 84 cm³ und G = 21 cm². Berechne h.', 12, 'cm', ['h = 3V/G.', 'h = 3 · 84 / 21 = 252/21.', 'h = 12 cm.']],
        ['Eine quadratische Pyramide hat Grundkante 6 cm und Höhe 9 cm. Berechne V.', 108, 'cm³', ['Grundfläche G = 6 · 6 = 36 cm².', 'V = G · h / 3 = 36 · 9 / 3.', 'V = 108 cm³.']]
    ]);
    addPracticeSet('tree-diagrams', [
        ['Ein fairer Würfel wird einmal geworfen. Wie groß ist die Wahrscheinlichkeit für eine gerade Zahl in Prozent?', 50, '%', ['Gerade Ergebnisse sind 2, 4 und 6: drei von sechs.', 'P = 3/6 = 1/2.', '1/2 = 50 %.']],
        ['Eine Münze wird dreimal geworfen. Wie viele vollständige Endpfade gibt es?', 8, 'Pfade', ['Bei jedem Wurf gibt es 2 Möglichkeiten.', 'Drei Stufen ergeben 2 · 2 · 2 Pfade.', 'Es gibt 8 Endpfade.']],
        ['In einem Beutel liegen 5 rote und 5 blaue Kugeln. Wie groß ist P(Rot) in Prozent?', 50, '%', ['Insgesamt gibt es 10 Kugeln, davon 5 rot.', 'P(Rot) = 5/10 = 1/2.', 'P(Rot) = 50 %.']],
        ['Ein Glücksrad hat 10 gleich große Felder, davon 4 gelbe. Wie groß ist P(Gelb) in Prozent?', 40, '%', ['P(Gelb) = 4/10.', '4/10 = 0,4.', 'Die Wahrscheinlichkeit beträgt 40 %.']]
    ]);
    addPracticeSet('path-rules', [
        ['Eine faire Münze wird dreimal geworfen. Wie groß ist P(Kopf-Zahl-Kopf) in Prozent?', 12.5, '%', ['Entlang des Pfades multiplizieren: 1/2 · 1/2 · 1/2 = 1/8.', '1/8 = 0,125.', '0,125 · 100 = 12,5 %.']],
        ['Zwei passende Pfade haben Wahrscheinlichkeiten 15 % und 25 %. Wie groß ist die Gesamtwahrscheinlichkeit?', 40, '%', ['Passende Pfade addieren.', '15 % + 25 % = 40 %.', 'Die Gesamtwahrscheinlichkeit beträgt 40 %.']],
        ['Zwei unabhängige Ereignisse haben P(A) = 40 % und P(B) = 25 %. Berechne P(A und B).', 10, '%', ['Für unabhängige Ereignisse multiplizieren.', '0,4 · 0,25 = 0,1.', 'P(A und B) = 10 %.']],
        ['Eine faire Münze wird zweimal geworfen. Wie groß ist P(kein Kopf) in Prozent?', 25, '%', ['Kein Kopf bedeutet Zahl-Zahl.', 'P = 1/2 · 1/2 = 1/4.', '1/4 = 25 %.']]
    ]);
    addPracticeSet('statistics', [
        ['Bestimme den Modalwert: 2, 3, 3, 4, 5.', 3, '', ['Der Modalwert ist der am häufigsten vorkommende Wert.', 'Die 3 kommt zweimal vor; alle anderen Werte nur einmal.', 'Der Modalwert ist 3.']],
        ['Eine Klasse hat 20 Kinder, 5 davon fahren mit dem Rad. Wie viel Prozent sind das?', 25, '%', ['Anteil = 5/20 = 1/4.', '1/4 · 100 = 25.', 'Das sind 25 %.']],
        ['Bestimme die Spannweite: 12, 4, 9, 7, 15.', 11, '', ['Größter Wert: 15; kleinster Wert: 4.', 'Spannweite = 15 − 4.', 'Die Spannweite ist 11.']],
        ['Berechne den Mittelwert von 5, 7, 8 und 12.', 8, '', ['Summe: 5 + 7 + 8 + 12 = 32.', 'Es gibt 4 Werte.', 'Mittelwert = 32/4 = 8.']]
    ]);
    addPracticeSet('quadratic-functions', [
        ['Berechne f(2) für f(x) = x² + 3x + 1.', 11, '', ['x = 2 einsetzen: f(2) = 2² + 3 · 2 + 1.', 'f(2) = 4 + 6 + 1.', 'f(2) = 11.']],
        ['Die Funktion f(x) = (x + 3)² − 1 hat ihren Scheitelpunkt bei (−3|−1). Gib die x-Koordinate an.', -3, 'x =', ['Mit f(x) = (x − h)² + k vergleichen.', 'x + 3 = x − (−3), daher h = −3.', 'Die x-Koordinate ist −3.']],
        ['Berechne f(−1) für f(x) = x² − 2x + 3.', 6, '', ['x = −1 einsetzen: f(−1) = (−1)² − 2 · (−1) + 3.', 'f(−1) = 1 + 2 + 3.', 'f(−1) = 6.']],
        ['Der Scheitelpunkt einer Parabel ist S(2|−4). Wie groß ist seine y-Koordinate?', -4, 'y =', ['Beim Punkt S(x|y) ist die zweite Koordinate der y-Wert.', 'S(2|−4) einsetzen.', 'Die y-Koordinate ist −4.']]
    ]);
    addPracticeSet('quadratic-equations', [
        ['Löse x² − 9 = 0. Gib die kleinere Lösung an.', -3, 'x =', ['Als Differenz zweier Quadrate faktorisieren: (x − 3)(x + 3) = 0.', 'Daraus folgen x = 3 oder x = −3.', 'Die kleinere Lösung ist −3.']],
        ['Löse x² − 6x + 8 = 0. Gib die kleinere Lösung an.', 2, 'x =', ['Faktorisieren: (x − 2)(x − 4) = 0.', 'Nullprodukt: x = 2 oder x = 4.', 'Die kleinere Lösung ist 2.']],
        ['Löse x² + x − 6 = 0. Gib die kleinere Lösung an.', -3, 'x =', ['Faktorisieren: (x + 3)(x − 2) = 0.', 'Nullprodukt: x = −3 oder x = 2.', 'Die kleinere Lösung ist −3.']],
        ['Löse x² − 10x + 25 = 0.', 5, 'x =', ['Faktorisieren: (x − 5)² = 0.', 'Der Faktor ist null, wenn x − 5 = 0.', 'Die Lösung ist x = 5.']]
    ]);
    addPracticeSet('units', [
        ['Wandle 3,4 m in Zentimeter um.', 340, 'cm', ['1 m = 100 cm.', '3,4 · 100 = 340.', '3,4 m = 340 cm.']],
        ['Wandle 2,5 km in Meter um.', 2500, 'm', ['1 km = 1.000 m.', '2,5 · 1.000 = 2.500.', '2,5 km = 2.500 m.']],
        ['Wandle 4 m² in Quadratzentimeter um.', 40000, 'cm²', ['1 m² = 10.000 cm².', '4 · 10.000 = 40.000.', '4 m² = 40.000 cm².']],
        ['Wandle 0,003 m³ in Liter um.', 3, 'l', ['1 m³ = 1.000 l.', '0,003 · 1.000 = 3.', '0,003 m³ = 3 l.']],
        ['Wandle 2,4 kg in Gramm um.', 2400, 'g', ['1 kg = 1.000 g.', '2,4 · 1.000 = 2.400.', '2,4 kg = 2.400 g.']],
        ['Wandle 150 Minuten in Stunden um.', 2.5, 'h', ['1 h = 60 min.', '150 / 60 = 2,5.', '150 min = 2,5 h.']],
        ['Wandle 750 ml in Liter um.', 0.75, 'l', ['1 l = 1.000 ml.', '750 / 1.000 = 0,75.', '750 ml = 0,75 l.']],
        ['Wandle 3,2 ha in Quadratmeter um.', 32000, 'm²', ['1 ha = 10.000 m².', '3,2 · 10.000 = 32.000.', '3,2 ha = 32.000 m².']]
    ]);
    addPracticeSet('fractions', [
        ['Berechne 2/5 + 1/10. Gib den Zähler des gekürzten Ergebnisses an.', 1, 'Zähler', ['2/5 auf Zehntel erweitern: 2/5 = 4/10.', '4/10 + 1/10 = 5/10 = 1/2.', 'Der Zähler ist 1.']],
        ['Berechne 7/8 − 1/4. Gib den Zähler des gekürzten Ergebnisses an.', 5, 'Zähler', ['1/4 auf Achtel erweitern: 1/4 = 2/8.', '7/8 − 2/8 = 5/8.', 'Der Zähler ist 5.']],
        ['Berechne 3/7 · 14/9. Gib den Zähler des gekürzten Ergebnisses an.', 2, 'Zähler', ['Zähler mal Zähler und Nenner mal Nenner: 42/63.', '42/63 durch 21 kürzen: 2/3.', 'Der Zähler ist 2.']],
        ['Berechne 5/6 : 10/9. Gib den Zähler des gekürzten Ergebnisses an.', 3, 'Zähler', ['Mit dem Kehrwert multiplizieren: 5/6 · 9/10 = 45/60.', '45/60 durch 15 kürzen: 3/4.', 'Der Zähler ist 3.']]
    ]);
    addPracticeSet('terms', [
        ['Fasse zusammen: 8x + 5 − 3x + 2.', 5, 'Koeffizient vor x', ['x-Glieder zusammenfassen: 8x − 3x = 5x.', 'Zahlen zusammenfassen: 5 + 2 = 7.', 'Der Koeffizient vor x ist 5.']],
        ['Löse die Klammer auf und fasse zusammen: 4(2x − 3) − 5x. Gib den Koeffizienten von x an.', 3, 'Koeffizient vor x', ['Ausmultiplizieren: 8x − 12 − 5x.', 'Gleichartige Glieder zusammenfassen: 3x − 12.', 'Der Koeffizient von x ist 3.']],
        ['Berechne 2a² − 3 für a = 4.', 29, '', ['a = 4 einsetzen: 2 · 4² − 3.', 'Zuerst quadrieren: 2 · 16 − 3 = 32 − 3.', 'Der Termwert ist 29.']],
        ['Löse: 7x + 4 = 25.', 3, 'x =', ['Auf beiden Seiten 4 abziehen: 7x = 21.', 'Beide Seiten durch 7 teilen.', 'x = 3.']],
        ['Löse: 4x − 3 = 2x + 9.', 6, 'x =', ['Auf beiden Seiten 2x abziehen: 2x − 3 = 9.', 'Auf beiden Seiten 3 addieren: 2x = 12.', 'x = 6.']],
        ['Das Doppelte einer Zahl plus 7 ist 23. Wie groß ist die Zahl?', 8, '', ['Gleichung aufstellen: 2x + 7 = 23.', '7 abziehen und durch 2 teilen: 2x = 16.', 'x = 8.']],
        ['Stelle s = v · t nach v um. Für s = 36 m und t = 4 s: Wie groß ist v?', 9, 'm/s', ['Nach v umstellen: v = s/t.', 'Einsetzen: v = 36/4.', 'v = 9 m/s.']],
        ['Löse: 3(x + 2) = 21.', 5, 'x =', ['Beide Seiten durch 3 teilen: x + 2 = 7.', 'Auf beiden Seiten 2 abziehen.', 'x = 5.']]
    ]);

    const practiceQuestionBank = {
        a1: [
            { id: 'exam-a1-1', prompt: 'Berechne 3⁴.', answer: 81, points: 2, steps: ['3⁴ = 3 · 3 · 3 · 3.', '3 · 3 · 3 · 3 = 81.'], error: 'Der Exponent gibt an, wie oft die Basis als Faktor vorkommt.' },
            { id: 'exam-a1-2', prompt: 'Berechne √169.', answer: 13, points: 2, steps: ['Gesucht ist die nichtnegative Zahl, deren Quadrat 169 ergibt.', '13² = 169.', 'Also ist √169 = 13.'], error: 'Prüfe den Wurzelwert, indem du ihn quadrierst.' },
            { id: 'exam-a1-3', prompt: 'Löse: 5x − 8 = 17.', answer: 5, points: 2, steps: ['Auf beiden Seiten 8 addieren: 5x = 25.', 'Durch 5 teilen: x = 5.'], error: 'Führe jede Umkehroperation auf beiden Seiten der Gleichung aus.' },
            { id: 'exam-a1-4', prompt: 'Berechne 25 % von 240.', answer: 60, points: 2, steps: ['25 % = 1/4.', '240 durch 4 teilen: 60.', '25 % von 240 sind 60.'], error: 'Der Prozentwert ist Grundwert mal Prozentsatz geteilt durch 100.' },
            { id: 'exam-a1-5', prompt: 'Berechne 3/4 + 1/8. Gib das Ergebnis als Dezimalzahl an.', answer: 0.875, points: 3, steps: ['3/4 auf Achtel erweitern: 3/4 = 6/8.', '6/8 + 1/8 = 7/8.', '7/8 = 0,875.'], error: 'Mache Brüche vor dem Addieren gleichnamig.' },
            { id: 'exam-a1-6', prompt: 'Ein Kapital von 1.200 € wird ein Jahr mit 2 % verzinst. Wie hoch sind die Zinsen?', answer: 24, points: 3, steps: ['Z = K · p / 100.', 'Z = 1.200 · 2 / 100.', 'Z = 24 €.'], error: 'Jahreszinsen = Kapital mal Zinssatz geteilt durch 100.' }
        ],
        a2: [
            { id: 'exam-a2-1', prompt: 'Bei y = −2x + 9: Berechne y für x = 4.', answer: 1, points: 3, steps: ['x = 4 einsetzen: y = −2 · 4 + 9.', 'y = −8 + 9.', 'y = 1.'], error: 'Setze den x-Wert in y = mx + b ein und beachte das Vorzeichen.' },
            { id: 'exam-a2-2', prompt: 'Die Parabel y = x² − 4x + 3 schneidet die x-Achse an zwei Stellen. Gib die kleinere Nullstelle an.', answer: 1, points: 4, steps: ['Nullstellen: x² − 4x + 3 = 0.', 'Faktorisieren: (x − 1)(x − 3) = 0.', 'Die Nullstellen sind 1 und 3; die kleinere ist 1.'], error: 'Für Nullstellen setzt du y = 0 und löst die quadratische Gleichung.' },
            { id: 'exam-a2-3', prompt: 'Ein rechtwinkliges Dreieck hat eine Hypotenuse von 13 cm und eine Kathete von 5 cm. Berechne die andere Kathete.', answer: 12, points: 3, steps: ['a² = 13² − 5².', 'a² = 169 − 25 = 144.', 'a = √144 = 12 cm.'], error: 'Wenn eine Kathete fehlt, ziehe ihr Quadrat von der Hypotenusenquadratzahl ab.' },
            { id: 'exam-a2-4', prompt: 'Nach einer Preiserhöhung um 10 % kostet ein Artikel 220 €. Wie hoch war der Preis vorher?', answer: 200, points: 3, steps: ['Nach der Erhöhung entsprechen 220 € insgesamt 110 %.', 'Ursprungspreis = 220 / 1,10.', 'Der ursprüngliche Preis war 200 €.'], error: 'Nach einer Erhöhung um 10 % entspricht der neue Preis 110 %, nicht 100 %.' },
            { id: 'exam-a2-5', prompt: 'Ein Zylinder hat r = 3 cm und h = 4 cm. Berechne das Volumen mit π ≈ 3,14.', answer: 113.04, tolerance: 0.2, points: 3, steps: ['V = πr²h.', 'V = 3,14 · 3² · 4.', 'V = 3,14 · 9 · 4 = 113,04 cm³.'], error: 'Beim Zylinder wird der Radius quadriert und anschließend mit Höhe und π multipliziert.' },
            { id: 'exam-a2-6', prompt: 'Berechne den Mittelwert der Daten 4, 6, 8 und 10.', answer: 7, points: 2, steps: ['Werte addieren: 4 + 6 + 8 + 10 = 28.', 'Durch die Anzahl 4 teilen.', 'Der Mittelwert ist 28/4 = 7.'], error: 'Addiere alle Werte und teile durch die Anzahl der Werte.' },
            { id: 'exam-a2-7', prompt: 'Ein Dreieck hat eine Grundseite von 12 cm und eine Höhe von 7 cm. Berechne den Flächeninhalt.', answer: 42, points: 3, steps: ['A = g · h / 2.', 'A = 12 · 7 / 2 = 84/2.', 'Der Flächeninhalt ist 42 cm².'], error: 'Beim Dreieck wird das Produkt aus Grundseite und zugehöriger Höhe halbiert.' }
        ],
        b: {
            B1: [
                { id: 'exam-b1-1', prompt: 'Ein rechtwinkliges Dreieck hat Katheten 8 cm und 15 cm. Berechne die Hypotenuse.', answer: 17, points: 3, steps: ['c² = 8² + 15² = 64 + 225 = 289.', 'c = √289.', 'c = 17 cm.'], error: 'Die Hypotenuse liegt gegenüber dem rechten Winkel und wird mit a² + b² = c² berechnet.' },
                { id: 'exam-b1-2', prompt: 'Ein Prisma hat eine Grundfläche von 24 cm² und eine Länge von 7 cm. Berechne das Volumen.', answer: 168, points: 3, steps: ['V = G · Länge.', 'V = 24 · 7.', 'V = 168 cm³.'], error: 'Prismenvolumen = Grundfläche mal Länge.' },
                { id: 'exam-b1-3', prompt: 'Ein Zylinder hat r = 4 cm und h = 5 cm. Berechne das Volumen mit π ≈ 3,14.', answer: 251.2, tolerance: 0.2, points: 4, steps: ['V = πr²h.', 'V = 3,14 · 4² · 5.', 'V = 3,14 · 16 · 5 = 251,2 cm³.'], error: 'Quadriere zuerst den Radius und gib das Ergebnis in Kubikeinheiten an.' }
            ],
            B2: [
                { id: 'exam-b2-1', prompt: 'Eine faire Münze wird zweimal geworfen. Wie groß ist die Wahrscheinlichkeit für mindestens einmal Kopf in Prozent?', answer: 75, points: 3, steps: ['Gegenereignis: kein Kopf bedeutet Zahl-Zahl.', 'P(Zahl-Zahl) = 1/2 · 1/2 = 1/4.', 'P(mindestens einmal Kopf) = 1 − 1/4 = 3/4 = 75 %.'], error: 'Nutze das Gegenereignis und ziehe seine Wahrscheinlichkeit von 100 % ab.' },
                { id: 'exam-b2-2', prompt: 'Berechne den Median der Daten 3, 5, 6, 10, 11.', answer: 6, points: 3, steps: ['Die Daten sind bereits sortiert.', 'Bei fünf Werten liegt der Median an dritter Stelle.', 'Der Median ist 6.'], error: 'Sortiere die Daten und bestimme den mittleren Wert.' },
                { id: 'exam-b2-3', prompt: 'Ein Beutel enthält 4 rote und 6 blaue Kugeln. Wie groß ist die Wahrscheinlichkeit, eine rote Kugel zu ziehen, in Prozent?', answer: 40, points: 4, steps: ['Insgesamt gibt es 10 Kugeln.', 'P(Rot) = 4/10 = 0,4.', 'Die Wahrscheinlichkeit beträgt 40 %.'], error: 'Wahrscheinlichkeit = günstige Ergebnisse geteilt durch alle gleich wahrscheinlichen Ergebnisse.' }
            ],
            B3: [
                { id: 'exam-b3-1', prompt: 'Berechne den Funktionswert von f(x) = x² − 2x + 4 für x = 3.', answer: 7, points: 3, steps: ['x = 3 einsetzen: f(3) = 3² − 2 · 3 + 4.', 'f(3) = 9 − 6 + 4.', 'f(3) = 7.'], error: 'Setze den Wert für x überall ein und beachte die Reihenfolge der Rechenoperationen.' },
                { id: 'exam-b3-2', prompt: 'Löse x² − 7x + 12 = 0. Gib die kleinere Lösung an.', answer: 3, points: 4, steps: ['Faktorisieren: x² − 7x + 12 = (x − 3)(x − 4).', 'Nullprodukt: x − 3 = 0 oder x − 4 = 0.', 'Die Lösungen sind 3 und 4; die kleinere ist 3.'], error: 'Faktorisiere die quadratische Gleichung und prüfe beide Lösungen.' },
                { id: 'exam-b3-3', prompt: 'Die Parabel f(x) = (x − 4)² + 2 hat ihren Scheitelpunkt bei (4|2). Wie groß ist die x-Koordinate des Scheitelpunkts?', answer: 4, points: 3, steps: ['Scheitelpunktform: f(x) = (x − h)² + k.', 'Hier ist h = 4 und k = 2.', 'Die x-Koordinate ist 4.'], error: 'Lies in der Scheitelpunktform f(x) = (x − h)² + k den Wert h ab.' }
            ]
        }
    };

    const examPracticeSubtopics = {
        'exam-a1-1': 'powers',
        'exam-a1-2': 'roots',
        'exam-a1-3': 'equations',
        'exam-a1-4': 'percent',
        'exam-a1-5': 'fractions',
        'exam-a1-6': 'interest',
        'exam-a2-1': 'linear-functions',
        'exam-a2-2': 'quadratic-equations',
        'exam-a2-3': 'pythagoras',
        'exam-a2-4': 'percent',
        'exam-a2-5': 'cylinder',
        'exam-a2-6': 'statistics',
        'exam-a2-7': 'triangle-area',
        'exam-b1-1': 'pythagoras',
        'exam-b1-2': 'prism',
        'exam-b1-3': 'cylinder',
        'exam-b2-1': 'path-rules',
        'exam-b2-2': 'statistics',
        'exam-b2-3': 'tree-diagrams',
        'exam-b3-1': 'quadratic-functions',
        'exam-b3-2': 'quadratic-equations',
        'exam-b3-3': 'quadratic-functions'
    };
    const examQuestions = [...practiceQuestionBank.a1, ...practiceQuestionBank.a2, ...Object.values(practiceQuestionBank.b).flat()];
    examQuestions.forEach(question => {
        const subtopic = examPracticeSubtopics[question.id];
        if (!subtopic) throw new Error(`Für die Prüfungsaufgabe "${question.id}" fehlt ein Unterthema.`);
        const topic = topics.find(item => item.lessons.some(lesson => lesson.id === subtopic));
        if (!topic) throw new Error(`Für das Unterthema "${subtopic}" fehlt ein Themengebiet.`);
        if (exercises.some(item => item.subtopic === subtopic && item.prompt === question.prompt)) return;
        exercises.push({
            id: `practice-${question.id}`,
            topic: topic.id,
            subtopic,
            kind: 'number',
            prompt: question.prompt,
            answer: question.answer,
            unit: '',
            steps: [...question.steps],
            ...(question.tolerance !== undefined ? { tolerance: question.tolerance } : {})
        });
    });

    let activeTopic = topics[0].id;
    let activeFilter = 'all';
    const pageParams = new URLSearchParams(window.location.search);
    const requestedTopic = pageParams.get('topic');
    const requestedSubtopic = pageParams.get('subtopic');
    const requestedView = pageParams.get('view');
    let activeSubtopic = null;
    let activeSubtopicFilter = null;
    let learningState = {};
    const legacyTopicIds = { algebra: 'terms', probability: 'data-chance' };
    const requestedLessonTopic = topics.find(topic => topic.lessons.some(lesson => lesson.id === requestedSubtopic));
    const initialTopic = requestedLessonTopic?.id || legacyTopicIds[requestedTopic] || requestedTopic;
    if (topics.some(topic => topic.id === initialTopic)) {
        activeTopic = initialTopic;
        activeFilter = initialTopic;
        if (requestedLessonTopic) {
            activeSubtopic = requestedSubtopic;
            activeSubtopicFilter = requestedSubtopic;
        }
    }
    let feedbackState = {};
    let mentalMathState = { difficulty: 'easy', question: null, answer: '', feedback: '', score: 0, scored: false };

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    function topicById(id) {
        return topics.find(topic => topic.id === id);
    }

    function formatFractions(container) {
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        textNodes.forEach(textNode => {
            const text = textNode.nodeValue;
            const fractionPattern = /(\([^()]+\)|\d+)\s*\/\s*(\([^()]+\)|\d+)/g;
            let lastIndex = 0;
            let match;
            const fragment = document.createDocumentFragment();

            while ((match = fractionPattern.exec(text))) {
                fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
                const fraction = document.createElement('span');
                fraction.className = 'math-fraction';
                fraction.setAttribute('role', 'math');
                const numeratorText = match[1].replace(/^\((.*)\)$/, '$1');
                const denominatorText = match[2].replace(/^\((.*)\)$/, '$1');
                fraction.setAttribute('aria-label', `${numeratorText} geteilt durch ${denominatorText}`);
                const numerator = document.createElement('span');
                numerator.textContent = numeratorText;
                const denominator = document.createElement('span');
                denominator.textContent = denominatorText;
                fraction.append(numerator, denominator);
                fragment.append(fraction);
                lastIndex = fractionPattern.lastIndex;
            }

            if (lastIndex) {
                fragment.append(document.createTextNode(text.slice(lastIndex)));
                textNode.replaceWith(fragment);
            }
        });
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
            formatFractions(document.getElementById('mathViewTopics'));
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
        formatFractions(document.getElementById('mathViewTopics'));
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
        formatFractions(document.getElementById('mathViewPractice'));
    }

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createMentalMathQuestion() {
        const settings = {
            easy: { min: 10, max: 100, factorMin: 2, factorMax: 12, quotientMin: 2, quotientMax: 12, divisorMax: 10, percentValues: [10, 25, 50], baseMax: 25 },
            medium: { min: 100, max: 999, factorMin: 6, factorMax: 25, quotientMin: 10, quotientMax: 50, divisorMax: 20, percentValues: [10, 15, 20, 25], baseMax: 50 },
            hard: { min: 500, max: 9999, factorMin: 12, factorMax: 50, quotientMin: 20, quotientMax: 200, divisorMax: 25, percentValues: [15, 20, 25, 30], baseMax: 100 }
        }[mentalMathState.difficulty];
        const operation = ['addition', 'subtraction', 'multiplication', 'division', 'percent'][randomInteger(0, 4)];

        if (operation === 'addition') {
            const first = randomInteger(settings.min, settings.max);
            const second = randomInteger(settings.min, settings.max);
            return { prompt: `Berechne: ${first} + ${second}`, answer: first + second };
        }
        if (operation === 'subtraction') {
            const first = randomInteger(settings.min, settings.max);
            const second = randomInteger(1, first);
            return { prompt: `Berechne: ${first} − ${second}`, answer: first - second };
        }
        if (operation === 'multiplication') {
            const first = randomInteger(settings.factorMin, settings.factorMax);
            const second = randomInteger(settings.factorMin, settings.factorMax);
            return { prompt: `Berechne: ${first} · ${second}`, answer: first * second };
        }
        if (operation === 'division') {
            const divisor = randomInteger(2, settings.divisorMax);
            const quotient = randomInteger(settings.quotientMin, settings.quotientMax);
            return { prompt: `Berechne: ${divisor * quotient} : ${divisor}`, answer: quotient };
        }

        const percent = settings.percentValues[randomInteger(0, settings.percentValues.length - 1)];
        const base = randomInteger(1, settings.baseMax) * 20;
        return { prompt: `Wie viel sind ${percent} % von ${base}?`, answer: percent * base / 100 };
    }

    function nextMentalMathQuestion() {
        mentalMathState.question = createMentalMathQuestion();
        mentalMathState.answer = '';
        mentalMathState.feedback = '';
        mentalMathState.scored = false;
        renderMentalMath();
    }

    function renderMentalMath() {
        if (!mentalMathState.question) mentalMathState.question = createMentalMathQuestion();
        const difficultyLabels = { easy: 'Leicht', medium: 'Mittel', hard: 'Schwer' };
        document.getElementById('mathViewMental').innerHTML = `
            <div class="math-section-heading">
                <div><span class="math-eyebrow">KOPFRECHNEN</span><h2>Rechne ohne Taschenrechner</h2></div>
                <p>${mentalMathState.score} ${mentalMathState.score === 1 ? 'Aufgabe' : 'Aufgaben'} richtig gelöst</p>
            </div>
            <label class="math-filter-label" for="mentalDifficulty">Schwierigkeitsstufe
                <select id="mentalDifficulty" class="math-select">
                    ${Object.entries(difficultyLabels).map(([value, label]) => `<option value="${value}" ${mentalMathState.difficulty === value ? 'selected' : ''}>${label}</option>`).join('')}
                </select>
            </label>
            <article class="math-panel">
                <div class="math-exercise-meta">${difficultyLabels[mentalMathState.difficulty]} · Addition, Subtraktion, Multiplikation, Division und Prozentrechnung</div>
                <h3>${mentalMathState.question.prompt}</h3>
                <div class="math-answer-row">
                    <label class="math-answer-label">
                        <span class="math-sr-only">Deine Antwort</span>
                        <input id="mentalMathAnswer" class="math-answer" type="text" inputmode="decimal" autocomplete="off" placeholder="Dein Ergebnis" aria-label="Dein Ergebnis" value="${escapeHtml(mentalMathState.answer)}">
                    </label>
                    <button type="button" class="math-button math-button-primary" data-mental-check>Prüfen</button>
                    <button type="button" class="math-button" data-mental-new>Neue Aufgabe</button>
                </div>
                <p class="math-feedback ${mentalMathState.feedback.startsWith('Richtig') ? 'is-correct' : 'is-incorrect'}" aria-live="polite" ${mentalMathState.feedback ? '' : 'hidden'}>${escapeHtml(mentalMathState.feedback)}</p>
            </article>`;
        formatFractions(document.getElementById('mathViewMental'));
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

    function switchView(view) {
        document.querySelectorAll('.math-tab').forEach(button => button.classList.toggle('active', button.dataset.mathView === view));
        document.querySelectorAll('.math-view').forEach(section => section.classList.toggle('hidden', section.id !== `mathView${view[0].toUpperCase()}${view.slice(1)}`));
        root.closest('#portalApp')?.classList.toggle('math-subtopic-focus', view === 'topics' && Boolean(activeSubtopic));
        if (view === 'practice') renderPractice();
        if (view === 'mental') renderMentalMath();
    }

    root.addEventListener('click', event => {
        const target = event.target.closest('button');
        if (!target) return;

        if (target.dataset.mathView) switchView(target.dataset.mathView);
        if (target.hasAttribute('data-mental-new')) nextMentalMathQuestion();
        if (target.hasAttribute('data-mental-check')) {
            const input = document.getElementById('mentalMathAnswer');
            const value = numericValue(input.value);
            if (value === null) {
                mentalMathState.answer = input.value;
                mentalMathState.feedback = 'Gib zuerst eine gültige Zahl ein.';
            } else if (Math.abs(value - mentalMathState.question.answer) < 0.000001) {
                if (!mentalMathState.scored) mentalMathState.score += 1;
                mentalMathState.scored = true;
                mentalMathState.feedback = 'Richtig! Gut gerechnet.';
            } else {
                mentalMathState.feedback = 'Noch nicht richtig. Versuche es noch einmal.';
            }
            renderMentalMath();
        }
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
        if (target.hasAttribute('data-calculate')) {
            const first = numericValue(document.getElementById('mathCalcA').value);
            const second = numericValue(document.getElementById('mathCalcB').value);
            document.getElementById('mathCalcResult').textContent = first === null || second === null
                ? 'Bitte gib zwei gültige Zahlen ein.'
                : `Ergebnis: ${first + second}`;
        }
    });

    root.addEventListener('change', event => {
        if (event.target.id === 'mentalDifficulty') {
            mentalMathState.difficulty = event.target.value;
            nextMentalMathQuestion();
        }
        if (event.target.id === 'mathTopicFilter') {
            activeFilter = event.target.value;
            activeSubtopicFilter = null;
            renderPractice();
        }
        if (event.target.matches('[data-task-answer]')) {
            const taskId = event.target.dataset.taskAnswer;
            const task = exercises.find(item => item.id === taskId);
            if (task) feedbackState[taskId] = { ...(feedbackState[taskId] || {}), value: event.target.value };
            persistPractice();
        }
    });

    root.addEventListener('input', event => {
        if (event.target.id === 'mentalMathAnswer') {
            mentalMathState.answer = event.target.value;
            return;
        }
        if (!event.target.matches('[data-task-answer]')) return;
        const taskId = event.target.dataset.taskAnswer;
        feedbackState[taskId] = { ...(feedbackState[taskId] || {}), value: event.target.value };
        persistPractice();
    });

    root.setAttribute('aria-busy', 'true');
    loadState().then(() => {
        renderTopics();
        renderPractice();
        if (['practice', 'mental'].includes(requestedView)) {
            switchView(requestedView);
        } else {
            root.closest('#portalApp')?.classList.toggle('math-subtopic-focus', Boolean(activeSubtopic));
        }
    }).finally(() => root.removeAttribute('aria-busy'));
})();
