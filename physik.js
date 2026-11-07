(() => {
    'use strict';

    const root = document.getElementById('physicsLearningApp');
    const view = document.getElementById('physicsLessonView');
    if (!root || !view) return;

    const lessons = [
        {
            topic: 'mechanics', topicTitle: 'Bewegung und Kräfte', topicIcon: '🏃',
            id: 'speed', title: 'Geschwindigkeit', summary: 'Geschwindigkeit gibt an, welche Strecke ein Körper in einer bestimmten Zeit zurücklegt.',
            paragraphs: [
                'Für eine gleichförmige Bewegung gilt v = s / t. Dabei ist s die zurückgelegte Strecke und t die dafür benötigte Zeit. Die Geschwindigkeit bleibt gleich, wenn in gleichen Zeitabschnitten immer gleich lange Strecken zurückgelegt werden.',
                'Die Einheiten müssen zusammenpassen: Meter und Sekunden ergeben Meter pro Sekunde (m/s). Kilometer und Stunden ergeben Kilometer pro Stunde (km/h). Zur Umrechnung gilt 1 m/s = 3,6 km/h. Ein Weg-Zeit-Diagramm zeigt bei gleichförmiger Bewegung eine Gerade; je steiler sie ist, desto größer ist die Geschwindigkeit.'
            ],
            steps: ['Gesuchte Größe und passende Formel notieren: v = s / t, s = v · t oder t = s / v.', 'Strecke und Zeit in passenden Einheiten einsetzen.', 'Rechnen und das Ergebnis mit der richtigen Einheit angeben.'],
            example: { title: 'Fahrradfahrt', lines: ['Ein Fahrrad fährt 600 m in 120 s.', 'v = 600 m / 120 s = 5 m/s.', 'In km/h: 5 · 3,6 = 18 km/h.'] },
            videos: [
                { id: 'UeSm8SgJf08', title: 'Geschwindigkeit berechnen (nur km/h)', description: 'Die Formel zur Berechnung der Geschwindigkeit mit Beispielen anwenden.', creator: 'Lehrerschmidt', url: 'https://www.youtube.com/watch?v=UeSm8SgJf08' },
                { id: 'ABfjpgI9O9M', title: 'km/h in m/s umrechnen', description: 'Geschwindigkeiten zwischen Kilometer pro Stunde und Meter pro Sekunde umrechnen.', creator: 'Lehrerschmidt', url: 'https://www.youtube.com/watch?v=ABfjpgI9O9M' }
            ],
            exercises: [
                { prompt: 'Ein Läufer legt 400 m in 80 s zurück. Wie groß ist seine Geschwindigkeit in m/s?', answer: 5, unit: 'm/s', steps: ['Formel: v = s / t.', 'v = 400 m / 80 s.', 'v = 5 m/s.'] },
                { prompt: 'Ein Auto fährt 150 km in 2 h. Berechne die Durchschnittsgeschwindigkeit.', answer: 75, unit: 'km/h', steps: ['Formel: v = s / t.', 'v = 150 km / 2 h.', 'v = 75 km/h.'] },
                { prompt: 'Wandle 10 m/s in km/h um.', answer: 36, unit: 'km/h', steps: ['Von m/s in km/h wird mit 3,6 multipliziert.', '10 · 3,6 = 36.', 'Die Geschwindigkeit beträgt 36 km/h.'] }
            ]
        },
        {
            topic: 'mechanics', topicTitle: 'Bewegung und Kräfte', topicIcon: '🏃',
            id: 'acceleration', title: 'Beschleunigung', summary: 'Beschleunigung beschreibt, wie schnell sich die Geschwindigkeit eines Körpers ändert.',
            paragraphs: [
                'Beschleunigung liegt vor, wenn ein Körper schneller oder langsamer wird oder seine Bewegungsrichtung ändert. Bei gleichmäßiger Beschleunigung gilt a = Δv / Δt. Δv ist die Änderung der Geschwindigkeit und Δt die dafür benötigte Zeit.',
                'Die Einheit der Beschleunigung ist m/s². Eine Beschleunigung von 2 m/s² bedeutet: Die Geschwindigkeit nimmt in jeder Sekunde um 2 m/s zu. Wird ein Körper langsamer, ist die Beschleunigung in Bewegungsrichtung negativ; man spricht oft von Verzögerung.'
            ],
            steps: ['Anfangs- und Endgeschwindigkeit bestimmen.', 'Änderung berechnen: Δv = vEnde − vAnfang.', 'Δv durch die Zeitänderung teilen: a = Δv / Δt.'],
            example: { title: 'Start aus dem Stand', lines: ['Ein Roller erreicht in 4 s die Geschwindigkeit 12 m/s.', 'Δv = 12 m/s − 0 m/s = 12 m/s.', 'a = 12 m/s / 4 s = 3 m/s².'] },
            exercises: [
                { prompt: 'Ein Zug beschleunigt in 5 s von 0 auf 20 m/s. Berechne a.', answer: 4, unit: 'm/s²', steps: ['Δv = 20 − 0 = 20 m/s.', 'a = Δv / Δt = 20 / 5.', 'a = 4 m/s².'] },
                { prompt: 'Ein Fahrrad wird in 3 s von 2 m/s auf 11 m/s schneller. Berechne a.', answer: 3, unit: 'm/s²', steps: ['Δv = 11 − 2 = 9 m/s.', 'a = 9 m/s / 3 s.', 'a = 3 m/s².'] },
                { prompt: 'Ein Auto bremst in 4 s von 24 m/s auf 8 m/s. Wie groß ist a mit Vorzeichen?', answer: -4, unit: 'm/s²', steps: ['Δv = 8 − 24 = −16 m/s.', 'a = −16 m/s / 4 s.', 'a = −4 m/s²; das Minus zeigt die Verzögerung an.'] }
            ]
        },
        {
            topic: 'mechanics', topicTitle: 'Bewegung und Kräfte', topicIcon: '🏃',
            id: 'forces', title: 'Kräfte', summary: 'Kräfte können Körper beschleunigen, abbremsen, umlenken oder verformen.',
            paragraphs: [
                'Eine Kraft wird mit F bezeichnet und in Newton (N) gemessen. Kräfte sind gerichtete Größen: Für eine vollständige Beschreibung gehören Betrag und Richtung dazu. Kräfte erkennt man an ihrer Wirkung, zum Beispiel an einer Bewegungsänderung oder Verformung.',
                'Nach dem Grundgesetz der Mechanik gilt F = m · a. Eine größere Kraft erzeugt bei gleicher Masse eine größere Beschleunigung; eine größere Masse wird durch dieselbe Kraft weniger stark beschleunigt. Die Gewichtskraft nahe der Erdoberfläche lässt sich näherungsweise mit Fg = m · g berechnen, wobei g ≈ 10 N/kg gilt.'
            ],
            steps: ['Masse und Beschleunigung beziehungsweise Masse und g notieren.', 'Für Bewegungsänderungen F = m · a verwenden; für Gewicht Fg = m · g.', 'Werte mit Einheiten einsetzen und das Ergebnis in Newton angeben.'],
            example: { title: 'Kiste anschieben', lines: ['Eine Kiste mit 4 kg wird mit 3 m/s² beschleunigt.', 'F = m · a = 4 kg · 3 m/s².', 'F = 12 N.'] },
            exercises: [
                { prompt: 'Welche Kraft beschleunigt eine Masse von 6 kg mit 2 m/s²?', answer: 12, unit: 'N', steps: ['F = m · a.', 'F = 6 kg · 2 m/s².', 'F = 12 N.'] },
                { prompt: 'Berechne die Gewichtskraft einer Masse von 7 kg mit g = 10 N/kg.', answer: 70, unit: 'N', steps: ['Fg = m · g.', 'Fg = 7 kg · 10 N/kg.', 'Fg = 70 N.'] },
                { prompt: 'Eine Kraft von 24 N wirkt auf 8 kg. Wie groß ist die Beschleunigung?', answer: 3, unit: 'm/s²', steps: ['Aus F = m · a folgt a = F / m.', 'a = 24 N / 8 kg.', 'a = 3 m/s².'] }
            ]
        },
        {
            topic: 'electricity', topicTitle: 'Elektrizität', topicIcon: '⚡',
            id: 'current-voltage', title: 'Stromstärke und Spannung', summary: 'Stromstärke beschreibt den Ladungsfluss; Spannung ist der Antrieb für diesen Fluss.',
            paragraphs: [
                'Elektrischer Strom ist die gerichtete Bewegung elektrischer Ladungen. In einem Metalldraht bewegen sich dafür Elektronen. Die Stromstärke I sagt, wie viel Ladung Q in einer bestimmten Zeit t an einer Stelle vorbeifließt. Die Formel lautet I = Q / t. Die Einheit Ampere (A) bedeutet Coulomb pro Sekunde: 1 A = 1 C/s. Ein Coulomb ist eine bestimmte Menge elektrischer Ladung.',
                'Stell dir als Vergleich Wasser in einem Rohr vor. Die Wassermenge, die pro Sekunde an einer Stelle vorbeifließt, passt zur Stromstärke. Fließt in derselben Zeit mehr Wasser vorbei, ist der „Strom“ stärker. Der Vergleich hilft beim Vorstellen, ist aber nicht ganz genau: In einem Draht bewegen sich elektrische Ladungen, kein Wasser.',
                'Die Spannung U gibt an, wie viel Energie die Spannungsquelle auf eine bestimmte Ladungsmenge überträgt. Ihre Einheit ist Volt (V). Man kann sich die Spannung grob wie einen Druck vorstellen, der den Fluss antreibt. Eine Batterie kann also Spannung haben, obwohl gerade kein Strom fließt: Dafür muss der Stromkreis geschlossen sein. Die Quelle liefert Energie; die Ladungen transportieren diese Energie zu den Bauteilen und werden dabei nicht verbraucht.',
                'Ein Stromkreis braucht eine Spannungsquelle, Leitungen und ein Bauteil, zum Beispiel eine Lampe. Ist irgendwo eine Unterbrechung, ist der Weg offen und es fließt kein dauerhafter Strom. Für Messungen gilt: Ein Amperemeter wird in Reihe in den Stromweg eingebaut. Ein Voltmeter wird parallel an die beiden Anschlüsse des Bauteils gelegt. Das Messgerät für Spannung misst den Unterschied zwischen diesen zwei Anschlüssen.'
            ],
            steps: [
                'Lies die Aufgabe und markiere, was gegeben ist: Ladung Q, Zeit t oder Stromstärke I.',
                'Schreibe die passende Formel auf: I = Q / t. Wenn Q gesucht ist, stelle um: Q = I · t.',
                'Setze die Zahlen mit ihren Einheiten ein. Teile bei I = Q / t die Ladung durch die Zeit.',
                'Rechne erst danach aus. Prüfe, ob die Einheit passt: Coulomb pro Sekunde ergibt Ampere.',
                'Schreibe einen Antwortsatz. Spannung wird nicht mit I = Q / t berechnet; sie wird in Volt gemessen.'
            ],
            example: { title: 'Ladung im Stromkreis', lines: ['Gesucht ist die Stromstärke I. Gegeben sind Q = 10 C und t = 5 s.', 'Formel: I = Q / t.', 'Einsetzen: I = 10 C / 5 s.', 'Rechnen: I = 2 C/s = 2 A.', 'Antwort: In jeder Sekunde fließen 2 Coulomb Ladung am Messpunkt vorbei.', 'Probe: 2 A · 5 s = 10 C. Das ist die angegebene Ladung.'] },
            exercises: [
                { prompt: 'In 4 s fließen 12 C durch einen Leiter. Wie groß ist I?', answer: 3, unit: 'A', steps: ['I = Q / t.', 'I = 12 C / 4 s.', 'I = 3 A.'] },
                { prompt: 'Bei 2 A fließt eine Ladung 15 s lang. Wie groß ist Q?', answer: 30, unit: 'C', steps: ['Q = I · t.', 'Q = 2 A · 15 s.', 'Q = 30 C.'] },
                { prompt: 'Ein Strom von 0,5 A fließt 20 s. Wie viel Ladung wird transportiert?', answer: 10, unit: 'C', steps: ['Q = I · t.', 'Q = 0,5 A · 20 s.', 'Q = 10 C.'] },
                { prompt: 'In 30 s fließen 90 C durch ein Bauteil. Berechne die Stromstärke.', answer: 3, unit: 'A', steps: ['Gesucht ist I; gegeben sind Q = 90 C und t = 30 s.', 'I = Q / t = 90 C / 30 s.', 'I = 3 A.'] },
                { prompt: 'Ein Strom von 0,2 A fließt 10 s lang. Wie groß ist die transportierte Ladung?', answer: 2, unit: 'C', steps: ['Gesucht ist Q, deshalb verwenden wir Q = I · t.', 'Q = 0,2 A · 10 s.', 'Q = 2 C.'] },
                { prompt: 'Ein Amperemeter soll die Stromstärke durch eine Lampe messen. Wird es in Reihe oder parallel angeschlossen? Antworte mit „Reihe“ oder „parallel“.', answer: 'Reihe', accepted: ['in Reihe', 'reihenschaltung'], steps: ['Das Amperemeter muss im selben Stromweg wie die Lampe liegen.', 'So fließt der zu messende Strom durch das Messgerät.', 'Es wird in Reihe angeschlossen.'] },
                { prompt: 'An einer Lampe soll die Spannung gemessen werden. Wird das Voltmeter in Reihe oder parallel angeschlossen? Antworte mit „Reihe“ oder „parallel“.', answer: 'parallel', accepted: ['parallel zum bauteil'], steps: ['Spannung wird zwischen den beiden Anschlüssen der Lampe gemessen.', 'Dafür wird das Voltmeter an beide Anschlüsse gelegt.', 'Es wird parallel angeschlossen.'] }
            ]
        },
        {
            topic: 'electricity', topicTitle: 'Elektrizität', topicIcon: '⚡',
            id: 'resistance', title: 'Elektrischer Widerstand', summary: 'Der elektrische Widerstand gibt an, wie stark ein Bauteil den Stromfluss hemmt.',
            paragraphs: [
                'Ein elektrischer Widerstand bremst den Stromfluss. Denk an eine Engstelle in einem Wasserrohr: Durch die enge Stelle kommt bei gleichem Druck weniger Wasser. Das Bild ist nur ein Vergleich, hilft aber beim Merken: Bei gleicher Spannung lässt ein größerer Widerstand weniger Strom fließen. Der Widerstand wird mit R bezeichnet und in Ohm (Ω) gemessen.',
                'Für einen ohmschen Widerstand gilt das Ohmsche Gesetz: U = R · I. Dabei ist U die Spannung in Volt (V), R der Widerstand in Ohm (Ω) und I die Stromstärke in Ampere (A). Die Formel hat drei passende Formen: U = R · I, R = U / I und I = U / R. Alle drei beschreiben denselben Zusammenhang.',
                'Bleibt der Widerstand gleich, führt eine doppelt so große Spannung zu einer doppelt so großen Stromstärke. Bleibt die Spannung gleich und wird der Widerstand doppelt so groß, wird die Stromstärke halb so groß. Beispiel: Bei 12 V fließen durch 4 Ω genau 3 A; durch 8 Ω fließen bei denselben 12 V nur 1,5 A.',
                'Das Ohmsche Gesetz beschreibt Bauteile, deren Widerstand gleich bleibt, solange sie nicht deutlich wärmer oder kälter werden. Bei einer Glühlampe wird der Draht heiß und sein Widerstand verändert sich. Darum darf man das Gesetz nicht blind auf jedes Bauteil anwenden. Für einfache Aufgaben steht meist dabei, dass der Widerstand ohmsch ist.'
            ],
            steps: [
                'Schreibe die bekannten Größen U, R und I mit ihren Einheiten auf.',
                'Markiere die gesuchte Größe. Wähle die Formel, in der diese Größe allein steht.',
                'U gesucht: U = R · I. R gesucht: R = U / I. I gesucht: I = U / R.',
                'Setze die Werte ein. Bei der Division kommt die gesuchte Größe in den Zähler oder Nenner passend zur Formel.',
                'Rechne aus und schreibe die Einheit dazu: Volt (V), Ohm (Ω) oder Ampere (A).',
                'Plausibilitätsprüfung: Bei gleicher Spannung bedeutet mehr Widerstand weniger Strom.'
            ],
            example: { title: 'Stromstärke aus Spannung und Widerstand berechnen', lines: ['Gegeben sind U = 12 V und R = 4 Ω. Gesucht ist I.', 'Formel auswählen: I = U / R.', 'Einsetzen: I = 12 V / 4 Ω.', 'Rechnen: I = 3 A.', 'Antwort: Durch den Widerstand fließen 3 A.', 'Probe mit U = R · I: 4 Ω · 3 A = 12 V. Die Probe stimmt.'] },
            exercises: [
                { prompt: 'An einem Widerstand liegen 18 V an. Es fließen 3 A. Berechne R.', answer: 6, unit: 'Ω', steps: ['R = U / I.', 'R = 18 V / 3 A.', 'R = 6 Ω.'] },
                { prompt: 'Ein Widerstand von 8 Ω liegt an 24 V. Berechne I.', answer: 3, unit: 'A', steps: ['I = U / R.', 'I = 24 V / 8 Ω.', 'I = 3 A.'] },
                { prompt: 'Durch 5 Ω fließt ein Strom von 0,4 A. Wie groß ist U?', answer: 2, unit: 'V', steps: ['U = R · I.', 'U = 5 Ω · 0,4 A.', 'U = 2 V.'] },
                { prompt: 'An 6 Ω liegen 12 V an. Berechne I.', answer: 2, unit: 'A', steps: ['Gesucht ist I. Formel: I = U / R.', 'I = 12 V / 6 Ω.', 'I = 2 A.'] },
                { prompt: 'Durch einen Widerstand fließen 0,5 A. Der Widerstand beträgt 10 Ω. Berechne U.', answer: 5, unit: 'V', steps: ['Gesucht ist U. Formel: U = R · I.', 'U = 10 Ω · 0,5 A.', 'U = 5 V.'] },
                { prompt: 'Bei 12 V fließen durch einen Widerstand 2 A. Wie groß ist R?', answer: 6, unit: 'Ω', steps: ['Gesucht ist R. Formel: R = U / I.', 'R = 12 V / 2 A.', 'R = 6 Ω.'] },
                { prompt: 'Die Spannung bleibt gleich. Was passiert mit der Stromstärke, wenn der Widerstand größer wird: Sie wird größer oder kleiner? Antworte mit „größer“ oder „kleiner“.', answer: 'kleiner', accepted: ['sie wird kleiner'], steps: ['Bei gleicher Spannung bremst ein größerer Widerstand den Strom stärker.', 'Deshalb fließt weniger Strom.', 'Die Stromstärke wird kleiner.'] }
            ]
        },
        {
            topic: 'electricity', topicTitle: 'Elektrizität', topicIcon: '⚡',
            id: 'circuits', title: 'Reihen- und Parallelschaltung', summary: 'Die Anordnung der Bauteile bestimmt, wie sich Stromstärke und Spannung verteilen.',
            paragraphs: [
                'Ein Stromkreis kann Bauteile hintereinander oder in mehreren Zweigen enthalten. Bei einer Reihenschaltung gibt es nur einen Weg für den Strom. Die Ladungen können nicht an einem Bauteil vorbeifließen und müssen nacheinander durch alle Bauteile. Darum ist die Stromstärke überall gleich: Iges = I1 = I2.',
                'In der Reihenschaltung teilt sich die Spannung auf die Bauteile auf. Die Teilspannungen ergeben zusammen die Spannung der Quelle: Uges = U1 + U2. Auch die Widerstände addieren sich: Rges = R1 + R2. Wird ein Bauteil entfernt oder geht es kaputt, ist der einzige Weg unterbrochen und kein Bauteil bekommt mehr Strom.',
                'Bei einer Parallelschaltung gibt es mehrere Wege, die man Zweige nennt. Jeder Zweig ist an denselben beiden Verbindungspunkten angeschlossen. Darum liegt an allen Zweigen dieselbe Spannung: Uges = U1 = U2. Der Strom teilt sich an einer Verzweigung auf und fließt später wieder zusammen: Iges = I1 + I2.',
                'Fällt in einer Parallelschaltung ein Zweig aus, kann Strom durch die übrigen Zweige weiterfließen. Deshalb sind Haushaltsgeräte parallel angeschlossen: Eine ausgeschaltete Lampe schaltet nicht automatisch alle anderen Geräte aus. Merksatz: Reihe – gleicher Strom. Parallel – gleiche Spannung.',
                'Beim Rechnen zuerst das Schaltbild anschauen und die Verzweigungen zählen. Ein einziger Weg bedeutet Reihe, mehrere getrennte Wege bedeuten parallel. Danach nur die passende Regel anwenden. Nicht die Regeln vertauschen: In der Reihe addieren sich Spannungen; parallel addieren sich die Teilströme.'
            ],
            steps: [
                'Schau das Schaltbild an: ein geschlossener Weg bedeutet Reihenschaltung; mehrere Zweige bedeuten Parallelschaltung.',
                'Bei Reihe notieren: Stromstärke überall gleich. Teilspannungen und Widerstände addieren.',
                'Bei Parallel notieren: Spannung an allen Zweigen gleich. Teilströme addieren.',
                'Schreibe die passende Formel auf, bevor du Zahlen einsetzt: zum Beispiel Iges = I1 + I2.',
                'Prüfe, ob das Ergebnis zur Schaltung passt: Bei einer Reihe ist I nicht in jedem Bauteil anders; bei Parallel ist U in jedem Zweig gleich.'
            ],
            example: { title: 'Zwei Widerstände in Reihe', lines: ['Zwei Widerstände liegen hintereinander: R1 = 4 Ω und R2 = 6 Ω.', 'Gesucht ist der Gesamtwiderstand Rges.', 'In Reihe gilt: Rges = R1 + R2.', 'Einsetzen: Rges = 4 Ω + 6 Ω.', 'Ergebnis: Rges = 10 Ω.', 'Der Gesamtwiderstand ist größer als jeder einzelne Widerstand.'] },
            exercises: [
                { prompt: 'Zwei Widerstände von 3 Ω und 7 Ω sind in Reihe geschaltet. Berechne Rges.', answer: 10, unit: 'Ω', steps: ['In Reihe addieren sich die Widerstände.', 'Rges = 3 Ω + 7 Ω.', 'Rges = 10 Ω.'] },
                { prompt: 'In zwei parallelen Zweigen fließen 0,4 A und 0,6 A. Wie groß ist der Gesamtstrom?', answer: 1, unit: 'A', steps: ['In der Parallelschaltung addieren sich die Teilströme.', 'Iges = 0,4 A + 0,6 A.', 'Iges = 1 A.'] },
                { prompt: 'An zwei parallelen Zweigen liegen 12 V. Welche Spannung liegt am zweiten Zweig?', answer: 12, unit: 'V', steps: ['In parallelen Zweigen ist die Spannung gleich.', 'U2 = Uges.', 'U2 = 12 V.'] },
                { prompt: 'Zwei Widerstände von 5 Ω und 8 Ω sind in Reihe geschaltet. Berechne Rges.', answer: 13, unit: 'Ω', steps: ['Bei einer Reihenschaltung addieren sich die Widerstände.', 'Rges = 5 Ω + 8 Ω.', 'Rges = 13 Ω.'] },
                { prompt: 'In einer Reihenschaltung fließen durch den ersten Widerstand 0,3 A. Wie groß ist der Strom durch den zweiten Widerstand?', answer: 0.3, unit: 'A', steps: ['In einer Reihenschaltung gibt es nur einen Stromweg.', 'Darum ist die Stromstärke durch alle Bauteile gleich.', 'I2 = I1 = 0,3 A.'] },
                { prompt: 'Eine Quelle liefert 9 V. An einem Bauteil in der Reihenschaltung liegen 4 V. Wie viel Spannung liegt am zweiten Bauteil?', answer: 5, unit: 'V', steps: ['In Reihe addieren sich die Teilspannungen: Uges = U1 + U2.', 'Umstellen: U2 = Uges − U1.', 'U2 = 9 V − 4 V = 5 V.'] },
                { prompt: 'In einer Parallelschaltung fließen insgesamt 1,2 A. Durch den ersten Zweig fließen 0,5 A. Wie groß ist der Strom im zweiten Zweig?', answer: 0.7, unit: 'A', steps: ['In parallel gilt Iges = I1 + I2.', 'Umstellen: I2 = Iges − I1.', 'I2 = 1,2 A − 0,5 A = 0,7 A.'] },
                { prompt: 'In einer Parallelschaltung wird ein Zweig unterbrochen. Können die anderen Zweige weiterhin Strom führen? Antworte mit „ja“ oder „nein“.', answer: 'ja', steps: ['Bei parallel gibt es mehrere getrennte Wege.', 'Eine Unterbrechung in einem Zweig sperrt nicht automatisch die anderen Wege.', 'Ja, die anderen Zweige können weiterhin Strom führen.'] }
            ]
        },
        {
            topic: 'electricity', topicTitle: 'Elektrizität', topicIcon: '⚡',
            id: 'electric-power', title: 'Elektrische Leistung und Energie', summary: 'Leistung beschreibt die pro Zeit umgesetzte Energie; elektrische Energie wird häufig in Kilowattstunden abgerechnet.',
            paragraphs: [
                'Leistung beschreibt, wie schnell ein Gerät Energie umsetzt. Das Zeichen dafür ist P, die Einheit Watt (W). Bei einem elektrischen Gerät gilt: P = U · I. Man multipliziert die Spannung U in Volt mit der Stromstärke I in Ampere. Eine höhere Leistung bedeutet: In jeder Sekunde wird mehr Energie umgesetzt.',
                'Energie hängt sowohl von der Leistung als auch von der Betriebszeit ab. Die Formel lautet E = P · t. Läuft ein Gerät doppelt so lange, wird bei gleichbleibender Leistung doppelt so viel Energie verbraucht. Ein Gerät mit 100 W verbraucht in einer Stunde mehr Energie als ein Gerät mit 50 W.',
                'Für kleine Energiemengen kann man Joule (J) oder Wattstunden (Wh) verwenden. Wenn P in Watt und t in Sekunden eingesetzt wird, erhält man Joule: 1 W · 1 s = 1 J. Wenn P in Watt und t in Stunden eingesetzt wird, erhält man Wattstunden. Wichtig: Die Einheiten müssen zur Rechnung passen.',
                'Auf der Stromrechnung steht meistens Kilowattstunde (kWh). Ein Kilowatt sind 1000 Watt; eine Kilowattstunde ist die Energie, die ein Gerät mit 1000 W in einer Stunde verbraucht. Um Watt in Kilowatt umzuwandeln, teilst du durch 1000. Beispiel: 60 W = 0,06 kW. Läuft dieses Gerät 5 h, dann gilt E = 0,06 kW · 5 h = 0,3 kWh.',
                'Der Strompreis wird oft pro Kilowattstunde angegeben. Die Kosten berechnest du dann mit Kosten = Energie in kWh · Preis pro kWh. Das Ergebnis ist nur eine einfache Verbrauchsrechnung; Grundgebühren oder andere Preisbestandteile können auf einer echten Rechnung zusätzlich dazukommen.'
            ],
            steps: [
                'Wenn Spannung und Stromstärke gegeben sind, berechne die Leistung mit P = U · I.',
                'Wenn Energie gesucht ist, notiere Leistung und Betriebszeit und verwende E = P · t.',
                'Wähle passende Einheiten: W mit Sekunden ergibt J; W mit Stunden ergibt Wh; kW mit Stunden ergibt kWh.',
                'Für eine Stromkosten-Aufgabe berechne zuerst die Energie in kWh und multipliziere dann mit dem Preis pro kWh.',
                'Prüfe das Ergebnis: Längere Betriebszeit oder größere Leistung muss zu mehr Energie führen.'
            ],
            example: { title: 'Energie und Kosten einer Lampe berechnen', lines: ['Eine 60-W-Lampe leuchtet 5 h. Der Strompreis beträgt beispielhaft 0,30 € pro kWh.', 'Leistung umrechnen: 60 W = 0,06 kW.', 'Energie berechnen: E = P · t = 0,06 kW · 5 h = 0,30 kWh.', 'Kosten berechnen: 0,30 kWh · 0,30 €/kWh = 0,09 €.', 'Antwort: Die Lampe verbraucht 0,30 kWh; das kostet in diesem Beispiel 9 Cent.', 'Beachte: Der Preis ist ein Übungswert und kann sich im Alltag unterscheiden.'] },
            exercises: [
                { prompt: 'Ein Gerät arbeitet bei 230 V mit 2 A. Wie groß ist seine Leistung?', answer: 460, unit: 'W', steps: ['P = U · I.', 'P = 230 V · 2 A.', 'P = 460 W.'] },
                { prompt: 'Eine 100-W-Lampe leuchtet 3 h. Wie viel Energie verbraucht sie in Wh?', answer: 300, unit: 'Wh', steps: ['E = P · t.', 'E = 100 W · 3 h.', 'E = 300 Wh.'] },
                { prompt: 'Ein 2-kW-Gerät läuft 1,5 h. Berechne die Energie in kWh.', answer: 3, unit: 'kWh', steps: ['E = P · t.', 'E = 2 kW · 1,5 h.', 'E = 3 kWh.'] },
                { prompt: 'Ein Gerät hat 12 V und 0,5 A. Berechne seine Leistung.', answer: 6, unit: 'W', steps: ['Gesucht ist P. Formel: P = U · I.', 'P = 12 V · 0,5 A.', 'P = 6 W.'] },
                { prompt: 'Ein 40-W-Gerät läuft 2 h. Wie viel Energie verbraucht es in Wh?', answer: 80, unit: 'Wh', steps: ['E = P · t.', 'E = 40 W · 2 h.', 'E = 80 Wh.'] },
                { prompt: 'Ein 500-W-Gerät läuft 2 h. Berechne die Energie in kWh.', answer: 1, unit: 'kWh', steps: ['500 W = 0,5 kW.', 'E = P · t = 0,5 kW · 2 h.', 'E = 1 kWh.'] },
                { prompt: 'Ein Gerät verbraucht 2 kWh. Eine Kilowattstunde kostet 0,30 €. Wie hoch sind die Verbrauchskosten?', answer: 0.6, unit: '€', steps: ['Kosten = Energie · Preis pro kWh.', 'Kosten = 2 kWh · 0,30 €/kWh.', 'Kosten = 0,60 €.'] }
            ]
        },
        {
            topic: 'optics', topicTitle: 'Optik und Licht', topicIcon: '🔦',
            id: 'light-reflection', title: 'Licht und Spiegelung', summary: 'Licht breitet sich in einem homogenen Stoff geradlinig aus und wird an Oberflächen reflektiert.',
            paragraphs: [
                'Lichtquellen senden Licht aus. Sichtbar werden Gegenstände, wenn Licht von ihnen in unser Auge gelangt. In einem gleichartigen, durchsichtigen Stoff breitet sich Licht geradlinig aus; Schatten entstehen, wenn ein undurchsichtiger Gegenstand den Lichtweg blockiert.',
                'Beim Reflexionsgesetz sind Einfallswinkel und Reflexionswinkel gleich groß. Beide Winkel werden zum Lot gemessen, also zur Senkrechten auf die Oberfläche. Ein glatter Spiegel erzeugt eine gerichtete Reflexion; an einer rauen Fläche wird Licht in viele Richtungen gestreut.'
            ],
            steps: ['Einfallenden Lichtstrahl und das Lot am Auftreffpunkt einzeichnen.', 'Einfallswinkel immer zwischen Strahl und Lot messen.', 'Reflexionswinkel auf der anderen Seite des Lots gleich groß einzeichnen.'],
            example: { title: 'Strahl am Spiegel', lines: ['Der Einfallswinkel beträgt 35° zum Lot.', 'Nach dem Reflexionsgesetz gilt α = α′.', 'Der Reflexionswinkel beträgt ebenfalls 35°.'] },
            exercises: [
                { prompt: 'Ein Lichtstrahl trifft mit 25° zum Lot auf einen Spiegel. Wie groß ist der Reflexionswinkel?', answer: 25, unit: '°', steps: ['Einfallswinkel und Reflexionswinkel werden zum Lot gemessen.', 'Es gilt α = α′.', 'Der Reflexionswinkel ist 25°.'] },
                { prompt: 'Der Einfallswinkel beträgt 60°. Wie groß ist der Winkel zwischen reflektiertem Strahl und Lot?', answer: 60, unit: '°', steps: ['Das Reflexionsgesetz besagt: α = α′.', 'Der gesuchte Winkel wird zum Lot gemessen.', 'Er beträgt 60°.'] },
                { prompt: 'Der Winkel zwischen einfallendem Strahl und Spiegeloberfläche beträgt 20°. Wie groß ist der Einfallswinkel zum Lot?', answer: 70, unit: '°', steps: ['Lot und Spiegeloberfläche stehen senkrecht aufeinander.', 'Die beiden Winkel ergänzen sich zu 90°.', '90° − 20° = 70°.'] }
            ]
        },
        {
            topic: 'optics', topicTitle: 'Optik und Licht', topicIcon: '🔦',
            id: 'refraction', title: 'Lichtbrechung', summary: 'Beim Übergang in einen anderen Stoff ändert Licht seine Ausbreitungsgeschwindigkeit und meist auch seine Richtung.',
            paragraphs: [
                'Licht bewegt sich in verschiedenen Stoffen unterschiedlich schnell. Trifft es schräg auf die Grenze zweier durchsichtiger Stoffe, ändert es seine Richtung: Es wird gebrochen. Beim Übergang in einen optisch dichteren Stoff wird der Strahl zum Lot hin gebrochen; beim Übergang in einen optisch dünneren Stoff vom Lot weg.',
                'Trifft Licht genau entlang des Lots auf die Grenzfläche, ändert es seine Richtung nicht. Das Brechungsgesetz verknüpft die Winkel mit den Brechungsindizes: n1 · sin(α) = n2 · sin(β). Für einfache Aufgaben genügt oft die qualitative Regel. Die scheinbare Verschiebung eines Gegenstands im Wasser ist eine Folge der Brechung.'
            ],
            steps: ['Grenzfläche und Lot am Auftreffpunkt markieren.', 'Stoffe und Richtung des Lichtwegs bestimmen.', 'Zum dichteren Stoff hin zum Lot, zum dünneren Stoff vom Lot weg brechen; bei senkrechtem Einfall keine Richtungsänderung.'],
            example: { title: 'Licht von Luft in Glas', lines: ['Luft ist optisch dünner als Glas.', 'Der Lichtstrahl wird beim schrägen Eintritt in Glas zum Lot hin gebrochen.', 'Beim Austritt aus Glas in Luft wird er vom Lot weg gebrochen.'] },
            exercises: [
                { prompt: 'Licht tritt schräg aus Luft in Glas ein. Wird es zum Lot hin oder vom Lot weg gebrochen? Schreibe „zum Lot“ oder „vom Lot“.', answer: 'zum Lot', steps: ['Glas ist optisch dichter als Luft.', 'Beim Übergang in einen optisch dichteren Stoff wird Licht zum Lot hin gebrochen.', 'Antwort: zum Lot.'] },
                { prompt: 'Ein Lichtstrahl trifft genau senkrecht auf eine Glasplatte. Um wie viele Grad ändert sich seine Richtung an der Grenzfläche?', answer: 0, unit: '°', steps: ['Senkrechter Einfall bedeutet: Der Strahl läuft entlang des Lots.', 'Dabei ändert er seine Richtung nicht.', 'Die Richtungsänderung beträgt 0°.'] },
                { prompt: 'Licht tritt schräg aus Wasser in Luft aus. Wird es zum Lot hin oder vom Lot weg gebrochen?', answer: 'vom Lot', steps: ['Wasser ist optisch dichter als Luft.', 'Beim Übergang in den optisch dünneren Stoff wird Licht vom Lot weg gebrochen.', 'Antwort: vom Lot.'] }
            ]
        },
        {
            topic: 'optics', topicTitle: 'Optik und Licht', topicIcon: '🔦',
            id: 'lenses', title: 'Linsen und Bilder', summary: 'Sammellinsen bündeln parallele Lichtstrahlen im Brennpunkt und können reelle Bilder erzeugen.',
            paragraphs: [
                'Eine Sammellinse ist in der Mitte dicker als am Rand. Parallel einfallende Lichtstrahlen werden hinter der Linse im Brennpunkt gebündelt. Der Abstand zwischen Linsenmitte und Brennpunkt heißt Brennweite f. Eine Zerstreuungslinse ist in der Mitte dünner und lässt Strahlen auseinanderlaufen.',
                'Bei einer dünnen Sammellinse gilt 1/f = 1/g + 1/b. g bezeichnet die Gegenstandsweite und b die Bildweite. Steht der Gegenstand weiter als die Brennweite entfernt, kann ein reelles, umgekehrtes Bild entstehen. Die Bildgröße hängt davon ab, wie Gegenstands- und Bildweite zueinander stehen.'
            ],
            steps: ['Sammel- oder Zerstreuungslinse erkennen und Brennpunkt markieren.', 'Für eine dünne Linse 1/f = 1/g + 1/b verwenden.', 'Abstände in derselben Einheit einsetzen; das Bild bei einer Sammellinse liegt auf der anderen Linsenseite, wenn es reell ist.'],
            example: { title: 'Brennweite mit gleichen Abständen', lines: ['g = 20 cm und b = 20 cm.', '1/f = 1/20 + 1/20 = 2/20 = 1/10.', 'Damit ist f = 10 cm.'] },
            exercises: [
                { prompt: 'Bei einer Sammellinse sind g = 30 cm und b = 30 cm. Berechne f.', answer: 15, unit: 'cm', steps: ['1/f = 1/g + 1/b.', '1/f = 1/30 + 1/30 = 2/30 = 1/15.', 'f = 15 cm.'] },
                { prompt: 'Eine Sammellinse hat f = 10 cm. In welchem Abstand liegt der Brennpunkt von der Linsenmitte?', answer: 10, unit: 'cm', steps: ['Die Brennweite ist der Abstand zwischen Linsenmitte und Brennpunkt.', 'Dieser Abstand ist f.', 'Der Brennpunkt liegt 10 cm entfernt.'] },
                { prompt: 'Ein Gegenstand steht 20 cm vor einer Linse, das reelle Bild entsteht 20 cm hinter ihr. Wie groß ist f?', answer: 10, unit: 'cm', steps: ['1/f = 1/g + 1/b.', '1/f = 1/20 + 1/20 = 1/10.', 'f = 10 cm.'] }
            ]
        },
        {
            topic: 'thermal', topicTitle: 'Wärme und Temperatur', topicIcon: '🌡️',
            id: 'temperature-heat', title: 'Temperatur und Wärme', summary: 'Temperatur beschreibt einen thermischen Zustand; Wärme ist Energie, die wegen eines Temperaturunterschieds übertragen wird.',
            paragraphs: [
                'Die Temperatur gibt an, wie warm oder kalt ein Körper ist. Sie wird im Alltag meist in Grad Celsius (°C), in der Wissenschaft auch in Kelvin (K) angegeben. Eine Temperaturdifferenz von 1 °C ist gleich groß wie 1 K. Für Schulaufgaben kann näherungsweise T(K) = θ(°C) + 273 verwendet werden.',
                'Wärme ist keine gespeicherte Stoffart, sondern übertragene Energie. Sie fließt von selbst vom wärmeren zum kälteren Körper, bis ein Temperaturausgleich erreicht ist. Bei einer Erwärmung nimmt die innere Energie zu; dabei können sich Temperatur, Aggregatzustand oder beides ändern.'
            ],
            steps: ['Temperatur und Temperaturänderung unterscheiden.', 'Für Celsius nach Kelvin näherungsweise 273 addieren.', 'Bei einer Wärmeübertragung den Weg der Energie vom warmen zum kälteren Körper beschreiben.'],
            example: { title: 'Celsius und Kelvin', lines: ['Ein Raum hat 20 °C.', 'T = 20 + 273.', 'Das entspricht ungefähr 293 K.'] },
            exercises: [
                { prompt: 'Wandle 27 °C näherungsweise in Kelvin um.', answer: 300, unit: 'K', steps: ['T(K) = θ(°C) + 273.', 'T = 27 + 273.', 'T = 300 K.'] },
                { prompt: 'Welche Celsius-Temperatur entspricht 373 K? Verwende 273 als Umrechnungszahl.', answer: 100, unit: '°C', steps: ['θ(°C) = T(K) − 273.', 'θ = 373 − 273.', 'θ = 100 °C.'] },
                { prompt: 'Ein Körper kühlt von 80 °C auf 35 °C ab. Um wie viele Grad sinkt seine Temperatur?', answer: 45, unit: '°C', steps: ['Temperaturänderung = Anfangstemperatur − Endtemperatur.', '80 − 35 = 45.', 'Die Temperatur sinkt um 45 °C.'] }
            ]
        },
        {
            topic: 'thermal', topicTitle: 'Wärme und Temperatur', topicIcon: '🌡️',
            id: 'thermal-expansion', title: 'Wärmeausdehnung', summary: 'Viele Stoffe ändern beim Erwärmen ihr Volumen.',
            paragraphs: [
                'Beim Erwärmen bewegen sich Teilchen im Mittel stärker. Bei vielen Festkörpern vergrößern sich dadurch die Abstände der Teilchen und der Körper dehnt sich aus. Beim Abkühlen zieht er sich wieder zusammen. Flüssigkeiten und Gase dehnen sich ebenfalls aus; Gase reagieren meist besonders deutlich auf Temperaturänderungen.',
                'Die Ausdehnung kann im Alltag wichtig sein: Brücken brauchen Dehnungsfugen, Schienen werden nicht lückenlos verlegt, und ein Flüssigkeitsthermometer nutzt die Volumenänderung einer Flüssigkeit. Wasser verhält sich zwischen 0 °C und 4 °C ungewöhnlich: Es zieht sich beim Erwärmen zunächst zusammen und hat bei 4 °C seine größte Dichte.'
            ],
            steps: ['Erwärmen oder Abkühlen als Ursache der Änderung erkennen.', 'Bei den meisten Stoffen gilt: Erwärmen führt zu Ausdehnung, Abkühlen zum Zusammenziehen.', 'Bei Wasser zwischen 0 °C und 4 °C die Dichteanomalie beachten.'],
            example: { title: 'Brückenkonstruktion', lines: ['Eine lange Brücke wird im Sommer wärmer.', 'Das Baumaterial dehnt sich aus.', 'Dehnungsfugen bieten Platz und verhindern Schäden.'] },
            exercises: [
                { prompt: 'Was geschieht mit den meisten festen Stoffen beim Erwärmen: Sie dehnen sich aus oder ziehen sich zusammen?', answer: 'dehnen sich aus', accepted: ['ausdehnung'], steps: ['Beim Erwärmen bewegen sich die Teilchen stärker.', 'Bei den meisten Festkörpern vergrößern sich dadurch die Abstände.', 'Der Körper dehnt sich aus.'] },
                { prompt: 'Warum haben lange Brücken häufig Dehnungsfugen? Antworte kurz mit „Ausdehnung“ oder „Abkühlung“.', answer: 'ausdehnung', accepted: ['wärmeausdehnung'], steps: ['Brückenmaterial ändert seine Länge mit der Temperatur.', 'Die Fugen lassen Platz für die Wärmeausdehnung.', 'Antwort: Ausdehnung.'] },
                { prompt: 'Bei welcher Temperatur hat Wasser ungefähr seine größte Dichte?', answer: 4, unit: '°C', steps: ['Wasser hat eine Dichteanomalie.', 'Seine größte Dichte erreicht es ungefähr bei 4 °C.', 'Antwort: 4 °C.'] }
            ]
        },
        {
            topic: 'thermal', topicTitle: 'Wärme und Temperatur', topicIcon: '🌡️',
            id: 'heat-capacity', title: 'Wärmemenge berechnen', summary: 'Die nötige Wärmeenergie hängt von Masse, Stoff und Temperaturänderung ab.',
            paragraphs: [
                'Für eine Temperaturänderung ohne Phasenwechsel gilt Q = m · c · ΔT. Q ist die Wärmeenergie, m die Masse, c die spezifische Wärmekapazität des Stoffs und ΔT die Temperaturänderung. Die spezifische Wärmekapazität sagt, wie viel Energie nötig ist, um ein Kilogramm eines Stoffs um ein Kelvin zu erwärmen.',
                'Wasser hat eine große spezifische Wärmekapazität: ungefähr 4,2 kJ/(kg·K). Darum erwärmt es sich langsamer als viele Metalle und kann viel Wärme speichern. Die Formel gilt nicht während eines Phasenwechsels wie Schmelzen oder Sieden, wenn die zugeführte Energie zunächst den Aggregatzustand verändert.'
            ],
            steps: ['Masse, spezifische Wärmekapazität und Temperaturänderung notieren.', 'Q = m · c · ΔT einsetzen; auf zusammenpassende Einheiten achten.', 'Einheiten multiplizieren und die Energie in J oder kJ angeben.'],
            example: { title: 'Wasser erwärmen', lines: ['1 kg Wasser wird um 10 K erwärmt; c = 4,2 kJ/(kg·K).', 'Q = 1 · 4,2 · 10 kJ.', 'Q = 42 kJ.'] },
            exercises: [
                { prompt: 'Wie viel Wärme braucht 1 kg Wasser für eine Erwärmung um 5 K? Nutze c = 4,2 kJ/(kg·K).', answer: 21, unit: 'kJ', steps: ['Q = m · c · ΔT.', 'Q = 1 · 4,2 · 5 kJ.', 'Q = 21 kJ.'] },
                { prompt: '0,5 kg Wasser werden um 10 K erwärmt. Berechne Q mit c = 4,2 kJ/(kg·K).', answer: 21, unit: 'kJ', steps: ['Q = m · c · ΔT.', 'Q = 0,5 · 4,2 · 10 kJ.', 'Q = 21 kJ.'] },
                { prompt: '2 kg eines Stoffes mit c = 0,5 kJ/(kg·K) werden um 8 K erwärmt. Berechne Q.', answer: 8, unit: 'kJ', steps: ['Q = m · c · ΔT.', 'Q = 2 · 0,5 · 8 kJ.', 'Q = 8 kJ.'] }
            ]
        },
        {
            topic: 'thermal', topicTitle: 'Wärme und Temperatur', topicIcon: '🌡️',
            id: 'heat-transfer', title: 'Wärmeübertragung', summary: 'Wärme wird durch Leitung, Strömung oder Strahlung übertragen.',
            paragraphs: [
                'Bei Wärmeleitung wird Energie innerhalb eines Stoffes weitergegeben, ohne dass der Stoff insgesamt mitwandert. Metalle leiten Wärme gut; Holz und viele Kunststoffe sind schlechte Wärmeleiter. Deshalb fühlen sich Metallgegenstände bei gleicher Temperatur oft kälter an als Holz.',
                'Bei Wärmeströmung (Konvektion) wird Wärme durch bewegte Flüssigkeiten oder Gase transportiert. Warme Luft steigt auf, kühlere sinkt nach unten. Wärmestrahlung benötigt keinen Stoff als Träger und kann sich auch im Vakuum ausbreiten; die Sonne erwärmt die Erde auf diese Weise.'
            ],
            steps: ['Fragen, ob Energie durch direkten Kontakt, durch bewegte Flüssigkeit/Gase oder ohne Medium übertragen wird.', 'Direkter Kontakt im Stoff bedeutet Wärmeleitung.', 'Bewegung von Luft oder Flüssigkeit bedeutet Strömung; Übertragung durch elektromagnetische Strahlung bedeutet Wärmestrahlung.'],
            example: { title: 'Kochtopf auf dem Herd', lines: ['Der Topfboden wird durch Kontakt mit der Herdplatte warm: Wärmeleitung.', 'Im Wasser transportieren auf- und absteigende Strömungen Energie: Konvektion.', 'Die Sonne überträgt Wärme zur Erde durch Strahlung.'] },
            exercises: [
                { prompt: 'Ein Metalllöffel wird in heißem Tee am Griff warm. Welche Art der Wärmeübertragung findet im Löffel statt?', answer: 'Wärmeleitung', steps: ['Der Löffel ist ein fester Stoff.', 'Die Energie breitet sich durch direkten Stoffkontakt aus.', 'Das ist Wärmeleitung.'] },
                { prompt: 'Warme Luft steigt über einem Heizkörper auf. Wie heißt diese Wärmeübertragung?', answer: 'Wärmeströmung', accepted: ['Konvektion', 'Strömung'], steps: ['Die erwärmte Luft bewegt sich.', 'Energie wird mit dem strömenden Gas transportiert.', 'Das heißt Wärmeströmung oder Konvektion.'] },
                { prompt: 'Wie gelangt Wärme von der Sonne durch den Weltraum zur Erde?', answer: 'Wärmestrahlung', accepted: ['Strahlung'], steps: ['Zwischen Sonne und Erde ist nahezu Vakuum.', 'Leitung und Strömung benötigen Materie.', 'Wärme gelangt als Strahlung zur Erde.'] }
            ]
        },
        {
            topic: 'magnetism', topicTitle: 'Magnetismus', topicIcon: '🧲',
            id: 'magnetic-fields', title: 'Magnetische Felder', summary: 'Magnetische Felder beschreiben, wo und in welche Richtung magnetische Kräfte wirken.',
            paragraphs: [
                'Jeder Magnet besitzt einen Nordpol und einen Südpol. Gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an. Ein Magnetfeld lässt sich mit Feldlinien darstellen; außerhalb eines Stabmagneten verlaufen sie vom Nordpol zum Südpol und bilden geschlossene Linien.',
                'Je dichter die Feldlinien gezeichnet sind, desto stärker ist das Feld. Eine Kompassnadel richtet sich entlang des örtlichen Magnetfelds aus. Feldlinien schneiden sich nicht, denn an einem Ort kann das Feld nur eine eindeutige Richtung haben.'
            ],
            steps: ['Nord- und Südpol eines Magneten bestimmen.', 'Außerhalb des Magneten zeigen Feldlinien vom Nordpol zum Südpol.', 'Mit einer Kompassnadel die Richtung des Felds an einem Ort erkunden.'],
            example: { title: 'Zwei Magnetpole', lines: ['Ein Nordpol wird einem Südpol gegenübergestellt.', 'Ungleichnamige Pole ziehen sich an.', 'Außerhalb des Magneten zeigen Feldlinien vom Nord- zum Südpol.'] },
            exercises: [
                { prompt: 'Was passiert, wenn zwei Nordpole einander gegenüberstehen? Schreibe „anziehen“ oder „abstoßen“.', answer: 'abstoßen', accepted: ['stoßen sich ab'], steps: ['Beide Pole sind gleichnamig.', 'Gleichnamige Magnetpole stoßen sich ab.', 'Antwort: abstoßen.'] },
                { prompt: 'In welche Richtung verlaufen Feldlinien außerhalb eines Stabmagneten? Antworte mit „Nord nach Süd“ oder „Süd nach Nord“.', answer: 'nord nach süd', accepted: ['vom nordpol zum südpol'], steps: ['Außerhalb des Magneten starten die Feldlinien am Nordpol.', 'Sie verlaufen zum Südpol.', 'Antwort: Nord nach Süd.'] },
                { prompt: 'Was zeigt eine größere Dichte der Feldlinien an: ein stärkeres oder ein schwächeres Magnetfeld?', answer: 'stärkeres', accepted: ['starkes', 'stärker'], steps: ['Dicht gezeichnete Feldlinien bedeuten ein starkes Feld.', 'Eine größere Dichte zeigt daher ein stärkeres Magnetfeld an.'] }
            ]
        },
        {
            topic: 'magnetism', topicTitle: 'Magnetismus', topicIcon: '🧲',
            id: 'electromagnets', title: 'Elektromagnete', summary: 'Ein stromdurchflossener Leiter erzeugt ein Magnetfeld; eine Spule kann dadurch wie ein Magnet wirken.',
            paragraphs: [
                'Um einen stromdurchflossenen Draht entsteht ein Magnetfeld. Wird der Draht zu einer Spule gewickelt, überlagern sich die Felder der einzelnen Windungen zu einem stärkeren Feld. Die Spule besitzt dann einen Nord- und einen Südpol.',
                'Ein Eisenkern in der Spule verstärkt die magnetische Wirkung. Auch eine größere Stromstärke und mehr Windungen machen den Elektromagneten stärker. Wird der Strom ausgeschaltet, verschwindet das Feld weitgehend; dadurch lässt sich ein Elektromagnet gezielt ein- und ausschalten.'
            ],
            steps: ['Stromquelle an die Spule anschließen, damit Strom fließt.', 'Für ein stärkeres Feld Stromstärke oder Windungszahl vergrößern.', 'Einen Eisenkern einsetzen, um das Feld zusätzlich zu verstärken.'],
            example: { title: 'Elektromagnet am Schrottkran', lines: ['Strom durch die Spule erzeugt ein Magnetfeld.', 'Der Eisenkern verstärkt das Feld und hebt Eisenteile an.', 'Wird der Strom abgeschaltet, fallen die Eisenteile wieder ab.'] },
            exercises: [
                { prompt: 'Was passiert mit dem Magnetfeld einer Spule, wenn die Stromstärke steigt: Es wird stärker oder schwächer?', answer: 'stärker', accepted: ['stärkeres'], steps: ['Eine größere Stromstärke erzeugt ein stärkeres Magnetfeld.', 'Das Feld der Spule wird stärker.'] },
                { prompt: 'Welches Material wird häufig in eine Spule eingesetzt, um einen Elektromagneten zu verstärken?', answer: 'Eisen', accepted: ['eisenkern'], steps: ['Ein Eisenkern bündelt und verstärkt das Feld.', 'Antwort: Eisen.'] },
                { prompt: 'Wie viele Pole hat eine stromdurchflossene Spule als Elektromagnet?', answer: 2, unit: 'Pole', steps: ['Die Spule besitzt einen Nordpol und einen Südpol.', 'Das sind insgesamt 2 Pole.'] }
            ]
        },
        {
            topic: 'magnetism', topicTitle: 'Magnetismus', topicIcon: '🧲',
            id: 'induction', title: 'Elektromagnetische Induktion', summary: 'Eine Spannung wird induziert, wenn sich das Magnetfeld in einer Spule ändert.',
            paragraphs: [
                'Wird ein Magnet relativ zu einer Spule bewegt, ändert sich das Magnetfeld durch die Spulenfläche. Dadurch entsteht eine elektrische Spannung; dieser Vorgang heißt elektromagnetische Induktion. Auch eine bewegte Spule in einem Magnetfeld kann eine Spannung erzeugen.',
                'Eine Induktionsspannung entsteht nur bei einer Änderung des magnetischen Flusses. Ein ruhender Magnet in einer ruhenden Spule erzeugt keine dauerhafte Induktionsspannung. Schnelleres Bewegen, ein stärkerer Magnet und mehr Spulenwindungen können die Spannung erhöhen. Generatoren nutzen dieses Prinzip.'
            ],
            steps: ['Prüfen, ob sich Magnet und Spule relativ zueinander bewegen.', 'Eine Änderung des Magnetfelds durch die Spule erzeugt eine Induktionsspannung.', 'Bei Stillstand ohne Feldänderung wird keine Spannung induziert.'],
            example: { title: 'Magnet in einer Spule', lines: ['Ein Stabmagnet wird in eine Spule hineingeschoben.', 'Das Magnetfeld in der Spule ändert sich.', 'Es entsteht eine Spannung; beim Herausziehen ändert sich ihre Richtung.'] },
            exercises: [
                { prompt: 'Ein Magnet wird schneller durch eine Spule bewegt. Wird die induzierte Spannung normalerweise größer oder kleiner?', answer: 'größer', accepted: ['höher'], steps: ['Schnellere Bewegung ändert das Magnetfeld in kürzerer Zeit.', 'Dadurch wird eine größere Induktionsspannung erzeugt.', 'Antwort: größer.'] },
                { prompt: 'Ein Magnet liegt unbewegt in einer Spule. Wird dabei dauerhaft eine Induktionsspannung erzeugt? Antworte „ja“ oder „nein“.', answer: 'nein', steps: ['Für Induktion muss sich der magnetische Fluss ändern.', 'Bei einem ruhenden Magneten bleibt das Feld konstant.', 'Antwort: nein.'] },
                { prompt: 'Welches Gerät wandelt mit elektromagnetischer Induktion Bewegung in elektrische Energie um?', answer: 'Generator', accepted: ['dynamo'], steps: ['Im Generator bewegt sich eine Spule oder ein Magnet.', 'Die Feldänderung induziert eine Spannung.', 'Antwort: Generator.'] }
            ]
        },
        {
            topic: 'waves-sound', topicTitle: 'Schall und Wellen', topicIcon: '🔊',
            id: 'vibrations-waves', title: 'Schwingungen und Wellen', summary: 'Eine Schwingung wiederholt sich regelmäßig; eine Welle breitet eine Schwingung und Energie aus.',
            paragraphs: [
                'Die Periodendauer T ist die Zeit für eine vollständige Schwingung. Die Frequenz f zählt Schwingungen pro Sekunde und wird in Hertz (Hz) gemessen. Es gilt f = 1/T. Eine Frequenz von 5 Hz bedeutet fünf vollständige Schwingungen in jeder Sekunde.',
                'Eine Welle transportiert Energie, aber ein Stoffteilchen wird dabei normalerweise nicht dauerhaft mit der Welle mitgenommen. Die Wellenlänge λ ist der Abstand zwischen zwei benachbarten Punkten gleicher Schwingungsphase. Für die Ausbreitungsgeschwindigkeit gilt v = f · λ.'
            ],
            steps: ['Periodendauer T und Frequenz f nicht verwechseln: f = 1/T.', 'Für die Wellengeschwindigkeit v = f · λ verwenden.', 'Einheiten prüfen: Hz = 1/s; m/s = Hz · m.'],
            example: { title: 'Welle auf einem Seil', lines: ['Eine Welle hat f = 4 Hz und λ = 0,5 m.', 'v = f · λ = 4 · 0,5.', 'Die Welle breitet sich mit 2 m/s aus.'] },
            exercises: [
                { prompt: 'Eine Schwingung dauert 0,2 s. Wie groß ist die Frequenz?', answer: 5, unit: 'Hz', steps: ['f = 1 / T.', 'f = 1 / 0,2 s.', 'f = 5 Hz.'] },
                { prompt: 'Eine Welle hat f = 3 Hz und λ = 2 m. Berechne v.', answer: 6, unit: 'm/s', steps: ['v = f · λ.', 'v = 3 Hz · 2 m.', 'v = 6 m/s.'] },
                { prompt: 'Eine Welle breitet sich mit 12 m/s aus und hat f = 4 Hz. Wie groß ist λ?', answer: 3, unit: 'm', steps: ['Aus v = f · λ folgt λ = v / f.', 'λ = 12 m/s / 4 Hz.', 'λ = 3 m.'] }
            ]
        },
        {
            topic: 'waves-sound', topicTitle: 'Schall und Wellen', topicIcon: '🔊',
            id: 'sound', title: 'Schall', summary: 'Schall entsteht durch Schwingungen und braucht einen Stoff, in dem er sich ausbreiten kann.',
            paragraphs: [
                'Eine schwingende Quelle versetzt benachbarte Teilchen in einem Stoff in Schwingung. So breitet sich Schall in Luft, Wasser oder festen Körpern aus. Im Vakuum kann sich Schall nicht ausbreiten, weil dort keine Teilchen die Schwingung weitergeben.',
                'Die Frequenz bestimmt die Tonhöhe: hohe Frequenz klingt hoch, niedrige Frequenz tief. Die Amplitude hängt mit der Lautstärke zusammen: Größere Schwingungen erzeugen meist lauteren Schall. Die Schallgeschwindigkeit hängt vom Medium und von dessen Temperatur ab; in Luft beträgt sie ungefähr 340 m/s.'
            ],
            steps: ['Schallquelle als schwingenden Körper erkennen.', 'Ein Medium wie Luft, Wasser oder einen Festkörper für die Ausbreitung benennen.', 'Frequenz mit Tonhöhe und Amplitude mit Lautstärke verknüpfen.'],
            example: { title: 'Gitarrensaite', lines: ['Eine gezupfte Saite schwingt und versetzt die Luft in Schwingung.', 'Die Schwingung breitet sich als Schallwelle aus.', 'Eine schneller schwingende Saite erzeugt einen höheren Ton.'] },
            exercises: [
                { prompt: 'Kann sich Schall im luftleeren Weltraum ausbreiten? Antworte „ja“ oder „nein“.', answer: 'nein', steps: ['Schall braucht Teilchen, die die Schwingung weitergeben.', 'Im Vakuum gibt es nahezu keine Teilchen.', 'Antwort: nein.'] },
                { prompt: 'Was wird bei einem Ton höher: die Frequenz oder die Amplitude?', answer: 'Frequenz', accepted: ['frequenz'], steps: ['Die Tonhöhe hängt von der Frequenz ab.', 'Je größer die Frequenz, desto höher der Ton.', 'Antwort: Frequenz.'] },
                { prompt: 'Wie groß ist die Schallgeschwindigkeit in Luft ungefähr? Runde auf 10 m/s.', answer: 340, unit: 'm/s', steps: ['Als Näherungswert in Luft gilt v ≈ 340 m/s.', 'Die Geschwindigkeit hängt etwas von der Temperatur ab.', 'Antwort: 340 m/s.'] }
            ]
        },
        {
            topic: 'waves-sound', topicTitle: 'Schall und Wellen', topicIcon: '🔊',
            id: 'echo', title: 'Echo und Entfernung', summary: 'Aus der Laufzeit eines Echos lässt sich die Entfernung zu einer reflektierenden Fläche berechnen.',
            paragraphs: [
                'Ein Echo entsteht, wenn Schall an einer Fläche reflektiert wird und wieder zum Ohr oder Messgerät zurückkehrt. Die gemessene Zeit umfasst den Hin- und Rückweg. Für die Entfernung zur Fläche muss man deshalb die gesamte Strecke halbieren.',
                'Bei bekannter Schallgeschwindigkeit gilt d = v · t / 2. In Luft kann v näherungsweise mit 340 m/s angesetzt werden. Ultraschallgeräte und Sonar nutzen das gleiche Prinzip, um Abstände oder Tiefen zu bestimmen.'
            ],
            steps: ['Schalllaufzeit t und Schallgeschwindigkeit v notieren.', 'Hin- und Rückweg bedenken: d = v · t / 2.', 'Einsetzen und die Entfernung in Metern angeben.'],
            example: { title: 'Echo an einer Felswand', lines: ['Das Echo kommt nach 2 s zurück; v = 340 m/s.', 'Gesamter Schallweg = 340 · 2 = 680 m.', 'Entfernung = 680 / 2 = 340 m.'] },
            exercises: [
                { prompt: 'Ein Echo kehrt nach 1 s zurück. Wie weit ist die Wand entfernt? Nutze v = 340 m/s.', answer: 170, unit: 'm', steps: ['d = v · t / 2.', 'd = 340 · 1 / 2.', 'd = 170 m.'] },
                { prompt: 'Nach 0,5 s hört man das Echo. Berechne die Entfernung bei 340 m/s.', answer: 85, unit: 'm', steps: ['d = v · t / 2.', 'd = 340 · 0,5 / 2.', 'd = 85 m.'] },
                { prompt: 'Ein Sonarsignal kommt nach 4 s zurück. Wie weit ist das Hindernis entfernt, wenn sich Schall im Wasser mit 1500 m/s ausbreitet?', answer: 3000, unit: 'm', steps: ['d = v · t / 2.', 'd = 1500 · 4 / 2.', 'd = 3000 m.'] }
            ]
        },
        {
            topic: 'energy', topicTitle: 'Energie und Leistung', topicIcon: '♻️',
            id: 'energy-forms', title: 'Energieformen und Umwandlung', summary: 'Energie tritt in unterschiedlichen Formen auf und wird bei Vorgängen umgewandelt oder übertragen.',
            paragraphs: [
                'Beispiele für Energieformen sind Bewegungsenergie, Lageenergie, Spannenergie, Wärmeenergie, elektrische Energie, chemische Energie und Lichtenergie. In technischen Geräten wird Energie von einer Form in eine andere umgewandelt, etwa in einer Lampe von elektrischer Energie in Licht und Wärme.',
                'Energie geht nicht verloren. In einem abgeschlossenen System bleibt die Gesamtenergie erhalten, auch wenn sie in weniger nutzbare Formen wie Wärme übergeht. Bei einer Beschreibung einer Energieumwandlung sollte man die Ausgangsform, die Nutzenergie und mögliche Verluste nennen.'
            ],
            steps: ['Ausgangssituation und beteiligte Energieformen erkennen.', 'Energiefluss mit „wird umgewandelt in“ beschreiben.', 'Nutzenergie und abgegebene Wärme oder Schall als mögliche Nebenformen nennen.'],
            example: { title: 'Wasserkocher', lines: ['Ausgangsform ist elektrische Energie.', 'Die Heizspirale wandelt sie überwiegend in Wärmeenergie um.', 'Wasser und Umgebung werden erwärmt; die Gesamtenergie bleibt erhalten.'] },
            exercises: [
                { prompt: 'Welche Energieform hat ein fahrendes Fahrrad hauptsächlich aufgrund seiner Bewegung?', answer: 'Bewegungsenergie', accepted: ['kinetische energie'], steps: ['Bewegung ist mit Bewegungsenergie verbunden.', 'In der Physik heißt sie auch kinetische Energie.', 'Antwort: Bewegungsenergie.'] },
                { prompt: 'In welche Energieform wandelt eine Solarzelle Licht hauptsächlich um?', answer: 'elektrische Energie', accepted: ['elektrizität'], steps: ['Eine Solarzelle nutzt einfallendes Licht.', 'Sie erzeugt daraus elektrische Energie.', 'Antwort: elektrische Energie.'] },
                { prompt: 'Welche Energieform wird in einem angehobenen Buch gespeichert?', answer: 'Lageenergie', accepted: ['potenzielle energie'], steps: ['Das Buch befindet sich erhöht im Schwerefeld der Erde.', 'Dadurch besitzt es Lageenergie.', 'Antwort: Lageenergie.'] }
            ]
        },
        {
            topic: 'energy', topicTitle: 'Energie und Leistung', topicIcon: '♻️',
            id: 'work-power', title: 'Arbeit und Leistung', summary: 'Mechanische Arbeit wird verrichtet, wenn eine Kraft einen Körper entlang eines Weges bewegt.',
            paragraphs: [
                'Bei einer konstanten Kraft in Bewegungsrichtung gilt W = F · s. W bezeichnet die Arbeit, F die Kraft und s den Weg. Die Einheit ist Joule (J); 1 J = 1 N·m. Wird ein Körper hochgehoben, wird Arbeit gegen die Gewichtskraft verrichtet und Lageenergie gespeichert.',
                'Leistung beschreibt, wie schnell Arbeit verrichtet oder Energie umgesetzt wird: P = W / t. Die Einheit Watt entspricht Joule pro Sekunde. Für dieselbe Arbeit ist die Leistung größer, wenn die benötigte Zeit kleiner ist.'
            ],
            steps: ['Kraft und Weg in Bewegungsrichtung bestimmen.', 'Arbeit mit W = F · s berechnen.', 'Für die Leistung P = W / t verwenden und die Zeit in Sekunden einsetzen.'],
            example: { title: 'Kiste verschieben', lines: ['Eine Kiste wird mit 20 N über 3 m geschoben.', 'W = F · s = 20 · 3.', 'W = 60 J.'] },
            exercises: [
                { prompt: 'Eine Kraft von 15 N bewegt einen Körper 4 m weit. Wie groß ist die Arbeit?', answer: 60, unit: 'J', steps: ['W = F · s.', 'W = 15 N · 4 m.', 'W = 60 J.'] },
                { prompt: 'Es werden 600 J Arbeit in 3 s verrichtet. Wie groß ist die Leistung?', answer: 200, unit: 'W', steps: ['P = W / t.', 'P = 600 J / 3 s.', 'P = 200 W.'] },
                { prompt: 'Eine Last wird mit 50 N um 2 m angehoben. Berechne die Arbeit.', answer: 100, unit: 'J', steps: ['W = F · s.', 'W = 50 N · 2 m.', 'W = 100 J.'] }
            ]
        },
        {
            topic: 'energy', topicTitle: 'Energie und Leistung', topicIcon: '♻️',
            id: 'efficiency', title: 'Wirkungsgrad', summary: 'Der Wirkungsgrad vergleicht die nutzbare Energie mit der zugeführten Energie.',
            paragraphs: [
                'Bei einer Energieumwandlung wird nicht die gesamte zugeführte Energie in die gewünschte Nutzenergie umgewandelt. Ein Teil wird beispielsweise als Wärme oder Schall an die Umgebung abgegeben. Der Wirkungsgrad η ist das Verhältnis von Nutzenergie zu zugeführter Energie.',
                'Es gilt η = Enutz / Ezu. Als Prozentwert rechnet man η = Enutz / Ezu · 100 %. Der Wirkungsgrad liegt bei realen Geräten höchstens bei 100 %. Ein höherer Wirkungsgrad bedeutet, dass weniger Energie ungenutzt abgegeben wird.'
            ],
            steps: ['Nutzenergie und zugeführte Energie unterscheiden.', 'η = Enutz / Ezu berechnen.', 'Für Prozent mit 100 multiplizieren und das Ergebnis prüfen: höchstens 100 %.'],
            example: { title: 'Elektromotor', lines: ['Zugeführte Energie: 500 J; Nutzenergie: 400 J.', 'η = 400 / 500 = 0,8.', 'η = 80 %.'] },
            exercises: [
                { prompt: 'Ein Gerät erhält 200 J und gibt 150 J als Nutzenergie ab. Wie groß ist η in Prozent?', answer: 75, unit: '%', steps: ['η = Enutz / Ezu · 100 %.', 'η = 150 / 200 · 100 %.', 'η = 75 %.'] },
                { prompt: 'Von 800 J zugeführter Energie werden 600 J nutzbar. Berechne den Wirkungsgrad.', answer: 75, unit: '%', steps: ['η = 600 / 800 · 100 %.', '600 / 800 = 0,75.', 'η = 75 %.'] },
                { prompt: 'Ein Wirkungsgrad beträgt 50 %. Wie viel Nutzenergie entstehen aus 300 J zugeführter Energie?', answer: 150, unit: 'J', steps: ['Enutz = η · Ezu.', '50 % = 0,5; 0,5 · 300 J = 150 J.', 'Die Nutzenergie beträgt 150 J.'] }
            ]
        },
        {
            topic: 'atomic-physics', topicTitle: 'Atome und Radioaktivität', topicIcon: '☢️',
            id: 'atoms-nuclei', title: 'Atome und Atomkerne', summary: 'Atome bestehen aus einer positiv geladenen Kernhülle und einer Elektronenhülle.',
            paragraphs: [
                'Im Atomkern befinden sich positiv geladene Protonen und elektrisch neutrale Neutronen. Die negativ geladenen Elektronen bilden die Hülle. Ein neutrales Atom hat gleich viele Protonen wie Elektronen. Fast die gesamte Masse des Atoms steckt im Kern.',
                'Die Protonenzahl Z legt fest, zu welchem Element ein Atom gehört. Die Massenzahl A ist die Summe aus Protonen und Neutronen. Isotope eines Elements besitzen dieselbe Protonenzahl, aber unterschiedliche Neutronenzahlen. Die Zahl der Neutronen berechnet sich mit N = A − Z.'
            ],
            steps: ['Protonenzahl Z und Massenzahl A ablesen.', 'Neutronenzahl N = A − Z berechnen.', 'Für ein neutrales Atom gilt: Elektronenzahl = Protonenzahl.'],
            example: { title: 'Kohlenstoff-12', lines: ['Kohlenstoff hat Z = 6; das Isotop hat A = 12.', 'N = A − Z = 12 − 6 = 6 Neutronen.', 'Ein neutrales Atom besitzt außerdem 6 Elektronen.'] },
            exercises: [
                { prompt: 'Ein Atom hat Massenzahl A = 23 und Protonenzahl Z = 11. Wie viele Neutronen hat es?', answer: 12, unit: 'Neutronen', steps: ['N = A − Z.', 'N = 23 − 11.', 'Das Atom hat 12 Neutronen.'] },
                { prompt: 'Ein neutrales Atom besitzt 8 Protonen. Wie viele Elektronen hat es?', answer: 8, unit: 'Elektronen', steps: ['Ein neutrales Atom hat gleich viele positive Protonen wie negative Elektronen.', 'Elektronenzahl = Protonenzahl.', 'Es hat 8 Elektronen.'] },
                { prompt: 'Ein Kern enthält 17 Protonen und 18 Neutronen. Wie groß ist die Massenzahl A?', answer: 35, steps: ['A = Protonen + Neutronen.', 'A = 17 + 18.', 'A = 35.'] }
            ]
        },
        {
            topic: 'atomic-physics', topicTitle: 'Atome und Radioaktivität', topicIcon: '☢️',
            id: 'radiation', title: 'Radioaktive Strahlung', summary: 'Instabile Atomkerne können Teilchen oder Energie aussenden und sich dabei umwandeln.',
            paragraphs: [
                'Radioaktive Strahlung entsteht beim Zerfall instabiler Atomkerne. Alphastrahlung besteht aus Heliumkernen und wird schon durch Papier oder die äußere Haut stark abgeschirmt. Betastrahlung besteht aus schnellen Elektronen oder Positronen und wird zum Beispiel durch dünnes Metall abgeschwächt.',
                'Gammastrahlung ist energiereiche elektromagnetische Strahlung. Sie ist sehr durchdringend und wird durch dicke Schichten aus Blei oder Beton abgeschwächt. Ionisierende Strahlung kann Zellen schädigen. Abstand, kurze Aufenthaltszeit und geeignete Abschirmung verringern die Strahlenbelastung.'
            ],
            steps: ['Strahlungsart nach Teilchenart unterscheiden: Alpha = Heliumkern, Beta = Elektron/Positron, Gamma = elektromagnetische Strahlung.', 'Durchdringungsfähigkeit vergleichen: Alpha gering, Beta mittel, Gamma hoch.', 'Schutzprinzipien Abstand, Aufenthaltszeit und Abschirmung berücksichtigen.'],
            example: { title: 'Abschirmung', lines: ['Papier hält Alphastrahlung weitgehend auf.', 'Dünnes Metall schirmt Betastrahlung ab.', 'Gammastrahlung benötigt eine dicke Blei- oder Betonschicht.'] },
            exercises: [
                { prompt: 'Welche Strahlungsart besteht aus Heliumkernen: Alpha, Beta oder Gamma?', answer: 'alpha', accepted: ['alphastrahlung'], steps: ['Alphateilchen sind Heliumkerne.', 'Antwort: Alpha.'] },
                { prompt: 'Welche Strahlungsart ist am durchdringendsten: Alpha, Beta oder Gamma?', answer: 'gamma', accepted: ['gammastrahlung'], steps: ['Gammastrahlung ist sehr durchdringende elektromagnetische Strahlung.', 'Antwort: Gamma.'] },
                { prompt: 'Nenne eine einfache Maßnahme, die die Strahlenbelastung verringert: Abstand, Zeit oder Abschirmung.', answer: 'abstand', accepted: ['zeit', 'abschirmung'], steps: ['Abstand vergrößern, Aufenthaltszeit verkürzen und passende Abschirmung nutzen.', 'Jede dieser Maßnahmen verringert die Belastung.'] }
            ]
        },
        {
            topic: 'atomic-physics', topicTitle: 'Atome und Radioaktivität', topicIcon: '☢️',
            id: 'half-life', title: 'Halbwertszeit', summary: 'Die Halbwertszeit ist die Zeit, in der die Hälfte der noch nicht zerfallenen Kerne zerfällt.',
            paragraphs: [
                'Bei radioaktiven Stoffen zerfallen einzelne Kerne zufällig. Für eine große Anzahl von Kernen lässt sich trotzdem eine regelmäßige Abnahme beschreiben. Die Halbwertszeit T½ gibt an, nach welcher Zeit im Mittel noch die Hälfte der ursprünglichen Kerne nicht zerfallen ist.',
                'Nach jeder weiteren Halbwertszeit halbiert sich die verbleibende Anzahl erneut. Nach n Halbwertszeiten gilt N = N0 · (1/2)^n. Die Masse eines reinen radioaktiven Stoffes nimmt im selben Verhältnis ab. Die Halbwertszeit ist für ein bestimmtes Isotop charakteristisch.'
            ],
            steps: ['Anzahl der vergangenen Halbwertszeiten bestimmen.', 'Die verbleibende Menge bei jeder Halbwertszeit halbieren.', 'Alternativ N = N0 · (1/2)^n einsetzen.'],
            example: { title: 'Vier Halbwertszeiten', lines: ['Anfangsmenge: 80 g; vier Halbwertszeiten sind vergangen.', '80 → 40 → 20 → 10 → 5 g.', 'Es bleiben 5 g übrig.'] },
            exercises: [
                { prompt: 'Von 80 g sind zwei Halbwertszeiten vergangen. Wie viel bleibt übrig?', answer: 20, unit: 'g', steps: ['Nach jeder Halbwertszeit halbiert sich die Menge.', '80 g → 40 g → 20 g.', 'Es bleiben 20 g.'] },
                { prompt: 'Eine Probe enthält 64 mg. Nach drei Halbwertszeiten: Wie viel ist noch vorhanden?', answer: 8, unit: 'mg', steps: ['64 → 32 → 16 → 8 mg.', 'Nach drei Halbwertszeiten wurde dreimal halbiert.', 'Es bleiben 8 mg.'] },
                { prompt: 'Von einer Probe bleiben nach einer Halbwertszeit 15 g übrig. Wie groß war die Anfangsmasse?', answer: 30, unit: 'g', steps: ['Nach einer Halbwertszeit ist noch die Hälfte übrig.', 'Anfangsmasse = 2 · 15 g.', 'Die Anfangsmasse betrug 30 g.'] }
            ]
        },
        {
            topic: 'fluids', topicTitle: 'Druck und Auftrieb', topicIcon: '🌊',
            id: 'pressure', title: 'Druck', summary: 'Druck gibt an, wie groß eine Kraft auf einer bestimmten Fläche wirkt.',
            paragraphs: [
                'Der Druck p ist die Kraft F geteilt durch die Fläche A: p = F / A. Die Einheit ist Pascal (Pa); 1 Pa = 1 N/m². Bei gleicher Kraft steigt der Druck, wenn die Fläche kleiner wird. Deshalb sinkt ein spitzer Nagel leichter in Holz als ein stumpfer.',
                'In Flüssigkeiten nimmt der Druck mit der Tiefe zu, weil über einem tieferen Punkt mehr Flüssigkeit liegt. In ruhenden Flüssigkeiten hängt der Schweredruck von Dichte, Erdbeschleunigung und Tiefe ab: p = ρ · g · h. Der Luftdruck entsteht durch das Gewicht der Luftsäule über uns.'
            ],
            steps: ['Kraft F und Fläche A in passenden Einheiten notieren.', 'p = F / A verwenden; bei Flächen in m² ergibt sich Pa.', 'Bei Flüssigkeiten: Größere Tiefe oder Dichte führt zu größerem Schweredruck.'],
            example: { title: 'Druck auf einer Fläche', lines: ['Eine Kraft von 100 N wirkt auf 0,5 m².', 'p = F / A = 100 / 0,5.', 'p = 200 Pa.'] },
            exercises: [
                { prompt: 'Eine Kraft von 200 N wirkt auf 0,5 m². Berechne den Druck.', answer: 400, unit: 'Pa', steps: ['p = F / A.', 'p = 200 N / 0,5 m².', 'p = 400 Pa.'] },
                { prompt: 'Auf 2 m² wirkt ein Druck von 500 Pa. Wie groß ist die Kraft?', answer: 1000, unit: 'N', steps: ['Aus p = F / A folgt F = p · A.', 'F = 500 Pa · 2 m².', 'F = 1000 N.'] },
                { prompt: 'Eine Kraft von 60 N wirkt auf 0,2 m². Wie groß ist p?', answer: 300, unit: 'Pa', steps: ['p = F / A.', 'p = 60 N / 0,2 m².', 'p = 300 Pa.'] }
            ]
        },
        {
            topic: 'fluids', topicTitle: 'Druck und Auftrieb', topicIcon: '🌊',
            id: 'density', title: 'Dichte', summary: 'Die Dichte beschreibt, wie viel Masse in einem bestimmten Volumen enthalten ist.',
            paragraphs: [
                'Die Dichte ρ berechnet sich aus Masse m geteilt durch Volumen V: ρ = m / V. Übliche Einheiten sind kg/m³ oder g/cm³. Für Wasser gilt ungefähr 1 g/cm³ = 1000 kg/m³. Vor dem Rechnen müssen Masse und Volumen in passenden Einheiten vorliegen.',
                'Die Dichte hilft, Stoffe zu vergleichen und vorherzusagen, ob ein Körper in einer Flüssigkeit sinkt oder schwimmt. Bei gleichem Volumen besitzt der Stoff mit der größeren Dichte die größere Masse. Ein Körper mit geringerer mittlerer Dichte als die Flüssigkeit kann schwimmen.'
            ],
            steps: ['Masse und Volumen bestimmen und Einheiten angleichen.', 'ρ = m / V berechnen.', 'Einheit dazuschreiben und die Dichte mit dem Stoff oder der Flüssigkeit vergleichen.'],
            example: { title: 'Metallwürfel', lines: ['Ein Würfel hat m = 780 g und V = 100 cm³.', 'ρ = 780 g / 100 cm³.', 'ρ = 7,8 g/cm³.'] },
            exercises: [
                { prompt: 'Ein Körper hat 600 g Masse und 200 cm³ Volumen. Berechne seine Dichte.', answer: 3, unit: 'g/cm³', steps: ['ρ = m / V.', 'ρ = 600 g / 200 cm³.', 'ρ = 3 g/cm³.'] },
                { prompt: '1 m³ eines Stoffes hat eine Masse von 800 kg. Wie groß ist seine Dichte?', answer: 800, unit: 'kg/m³', steps: ['ρ = m / V.', 'ρ = 800 kg / 1 m³.', 'ρ = 800 kg/m³.'] },
                { prompt: 'Ein Stoff hat 2 g/cm³ Dichte und ein Volumen von 10 cm³. Welche Masse hat er?', answer: 20, unit: 'g', steps: ['Aus ρ = m / V folgt m = ρ · V.', 'm = 2 g/cm³ · 10 cm³.', 'm = 20 g.'] }
            ]
        },
        {
            topic: 'fluids', topicTitle: 'Druck und Auftrieb', topicIcon: '🌊',
            id: 'buoyancy', title: 'Auftrieb', summary: 'In einer Flüssigkeit wirkt auf einen eingetauchten Körper eine nach oben gerichtete Auftriebskraft.',
            paragraphs: [
                'Der Flüssigkeitsdruck ist weiter unten größer als weiter oben. Deshalb wirkt auf die Unterseite eines eingetauchten Körpers eine größere Druckkraft als auf seine Oberseite. Die resultierende Kraft nach oben heißt Auftriebskraft.',
                'Nach dem archimedischen Prinzip ist die Auftriebskraft so groß wie die Gewichtskraft der verdrängten Flüssigkeit: FA = ρFlüssigkeit · g · Vverdrängt. Ein Körper sinkt, wenn seine Gewichtskraft größer als der Auftrieb ist. Ist der Auftrieb mindestens gleich groß, kann er schweben oder schwimmen.'
            ],
            steps: ['Volumen des verdrängten Fluids und dessen Dichte bestimmen.', 'FA = ρ · g · V mit g ≈ 10 N/kg berechnen.', 'Auftriebskraft mit der Gewichtskraft des Körpers vergleichen.'],
            example: { title: 'Körper im Wasser', lines: ['Ein Körper verdrängt 0,002 m³ Wasser; ρ = 1000 kg/m³ und g = 10 N/kg.', 'FA = 1000 · 10 · 0,002.', 'FA = 20 N.'] },
            exercises: [
                { prompt: 'Ein Körper verdrängt 0,001 m³ Wasser. Berechne den Auftrieb mit ρ = 1000 kg/m³ und g = 10 N/kg.', answer: 10, unit: 'N', steps: ['FA = ρ · g · V.', 'FA = 1000 · 10 · 0,001.', 'FA = 10 N.'] },
                { prompt: 'Ein Körper verdrängt 0,003 m³ Wasser. Wie groß ist FA bei ρ = 1000 kg/m³ und g = 10 N/kg?', answer: 30, unit: 'N', steps: ['FA = ρ · g · V.', 'FA = 1000 · 10 · 0,003.', 'FA = 30 N.'] },
                { prompt: 'Ein Körper hat eine Gewichtskraft von 8 N und eine Auftriebskraft von 12 N. Steigt er nach oben oder sinkt er? Antworte mit „steigt“ oder „sinkt“.', answer: 'steigt', accepted: ['schwimmt nach oben'], steps: ['Die Auftriebskraft ist 12 N und damit größer als die Gewichtskraft von 8 N.', 'Die resultierende Kraft zeigt nach oben.', 'Der Körper steigt.'] }
            ]
        }
    ];

    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
    const lesson = lessons.find(item => item.id === root.dataset.subtopic);
    const isPractice = new URLSearchParams(window.location.search).get('view') === 'practice';
    const taskState = new Map();
    const exerciseIds = lessons.flatMap(item => (item.exercises || []).map((task, index) => `${item.id}-${index + 1}`));
    window.LernraumDB.registerExercises('physik', exerciseIds).catch(error => {
        console.error('Die Physik-Übungen konnten nicht für den Lernfortschritt registriert werden:', error);
    });

    if (!lesson) {
        view.innerHTML = '<section class="math-panel"><h2>Unterthema nicht gefunden</h2><p>Bitte wähle ein Unterthema aus der Physik-Übersicht.</p><a class="portal-back-link" href="./physik.html">Zur Physik-Themenübersicht</a></section>';
        return;
    }

    const topicUrl = `./physik-themen.html?topic=${encodeURIComponent(lesson.topic)}`;

    const electricityVisuals = {
        'current-voltage': `
            <section class="physics-visual" aria-labelledby="physicsVisualTitle">
                <h3 id="physicsVisualTitle">Als Bild: ein geschlossener Stromkreis</h3>
                <svg class="physics-visual-svg" viewBox="0 0 600 220" role="img" aria-labelledby="currentSvgTitle currentSvgDesc">
                    <title id="currentSvgTitle">Geschlossener Stromkreis mit Batterie und Lampe</title>
                    <desc id="currentSvgDesc">Eine Batterie treibt Ladungen durch einen geschlossenen Drahtkreis und eine Lampe. Ein Pfeil zeigt die Stromrichtung.</desc>
                    <path class="physics-wire" d="M100 48 H475 V172 H100 V48"/>
                    <circle class="physics-source" cx="100" cy="110" r="26"/>
                    <path class="physics-mark" d="M91 102 H109 M100 93 V111 M93 131 H107"/>
                    <circle class="physics-lamp" cx="475" cy="110" r="28"/>
                    <path class="physics-mark" d="M462 97 L488 123 M488 97 L462 123"/>
                    <path class="physics-arrow" d="M190 48 H270 M270 48 L257 41 M270 48 L257 55"/>
                    <text class="physics-label" x="100" y="207" text-anchor="middle">Spannungsquelle U</text>
                    <text class="physics-label" x="475" y="207" text-anchor="middle">Lampe</text>
                    <text class="physics-label" x="230" y="34" text-anchor="middle">Strom I</text>
                    <text class="physics-small-label" x="100" y="116" text-anchor="middle">+</text>
                    <text class="physics-small-label" x="475" y="114" text-anchor="middle">Licht</text>
                </svg>
                <div class="physics-visual-notes">
                    <p><strong>Stromstärke I:</strong> Wie viel Ladung pro Sekunde an einer Stelle vorbeifließt.</p>
                    <p><strong>Spannung U:</strong> Wie viel Energie die Quelle pro Ladungsmenge bereitstellt.</p>
                </div>
                <p class="physics-visual-memory"><strong>Merke:</strong> Spannung kann anliegen, auch wenn der Schalter offen ist. Dauerhafter Strom fließt erst im geschlossenen Kreis.</p>
            </section>`,
        resistance: `
            <section class="physics-visual" aria-labelledby="physicsVisualTitle">
                <h3 id="physicsVisualTitle">Als Bild: gleicher Antrieb, unterschiedlicher Widerstand</h3>
                <svg class="physics-visual-svg" viewBox="0 0 600 260" role="img" aria-labelledby="resistanceSvgTitle resistanceSvgDesc">
                    <title id="resistanceSvgTitle">Vergleich von kleinem und großem Widerstand</title>
                    <desc id="resistanceSvgDesc">Bei derselben Spannung zeigt ein dicker Pfeil den größeren Strom durch einen kleinen Widerstand. Ein dünner Pfeil zeigt den kleineren Strom durch einen großen Widerstand.</desc>
                    <text class="physics-label" x="150" y="28" text-anchor="middle">Kleiner Widerstand</text>
                    <text class="physics-label" x="450" y="28" text-anchor="middle">Großer Widerstand</text>
                    <path class="physics-wire" d="M65 70 H235 V185 H65 V70 M365 70 H535 V185 H365 V70"/>
                    <circle class="physics-source" cx="65" cy="128" r="21"/>
                    <circle class="physics-source" cx="365" cy="128" r="21"/>
                    <rect class="physics-resistor" x="127" y="55" width="54" height="30" rx="6"/>
                    <rect class="physics-resistor" x="427" y="55" width="54" height="30" rx="6"/>
                    <text class="physics-small-label" x="154" y="76" text-anchor="middle">R klein</text>
                    <text class="physics-small-label" x="454" y="76" text-anchor="middle">R groß</text>
                    <path class="physics-arrow physics-arrow-strong" d="M84 185 H199 M199 185 L184 176 M199 185 L184 194"/>
                    <path class="physics-arrow" d="M384 185 H416 M416 185 L404 178 M416 185 L404 192"/>
                    <text class="physics-label" x="150" y="222" text-anchor="middle">größerer Strom I</text>
                    <text class="physics-label" x="450" y="222" text-anchor="middle">kleinerer Strom I</text>
                    <text class="physics-small-label" x="300" y="252" text-anchor="middle">In beiden Kreisen ist die Spannung gleich.</text>
                </svg>
                <p class="physics-visual-memory"><strong>Merke:</strong> Bei gleicher Spannung gilt: Je größer der Widerstand, desto kleiner der Strom. Das Ohmsche Gesetz verbindet U, R und I.</p>
            </section>`,
        circuits: `
            <section class="physics-visual" aria-labelledby="physicsVisualTitle">
                <h3 id="physicsVisualTitle">Schaltungen sehen: nur ein Weg oder mehrere Zweige?</h3>
                <div class="physics-circuit-grid">
                    <figure class="physics-circuit-card">
                        <figcaption><strong>Reihenschaltung</strong><span>Ein Weg für den Strom</span></figcaption>
                        <svg class="physics-visual-svg" viewBox="0 0 560 230" role="img" aria-labelledby="seriesSvgTitle seriesSvgDesc">
                            <title id="seriesSvgTitle">Zwei Widerstände in einer Reihenschaltung</title>
                            <desc id="seriesSvgDesc">Ein einziger geschlossener Stromweg führt nacheinander durch Widerstand eins und zwei.</desc>
                            <path class="physics-wire" d="M70 45 H490 V185 H70 V45"/>
                            <path class="physics-wire" d="M70 94 V138"/>
                            <path class="physics-mark" d="M53 102 H87 M58 128 H82"/>
                            <rect class="physics-resistor" x="170" y="30" width="72" height="30" rx="6"/>
                            <rect class="physics-resistor" x="322" y="30" width="72" height="30" rx="6"/>
                            <text class="physics-small-label" x="206" y="51" text-anchor="middle">R1</text>
                            <text class="physics-small-label" x="358" y="51" text-anchor="middle">R2</text>
                            <path class="physics-arrow" d="M105 45 H145 M145 45 L132 38 M145 45 L132 52"/>
                            <text class="physics-label" x="280" y="216" text-anchor="middle">I überall gleich · U1 + U2 = Uges</text>
                        </svg>
                        <p>Wird die Kette an einer Stelle geöffnet, stoppt der Strom im ganzen Kreis.</p>
                    </figure>
                    <figure class="physics-circuit-card">
                        <figcaption><strong>Parallelschaltung</strong><span>Mehrere Wege für den Strom</span></figcaption>
                        <svg class="physics-visual-svg" viewBox="0 0 560 230" role="img" aria-labelledby="parallelSvgTitle parallelSvgDesc">
                            <title id="parallelSvgTitle">Zwei Widerstände in einer Parallelschaltung</title>
                            <desc id="parallelSvgDesc">Zwei getrennte Zweige verbinden dieselben oberen und unteren Leitungen. Der Strom teilt sich auf die Zweige auf.</desc>
                            <path class="physics-wire" d="M75 48 H485 M75 182 H485 M75 48 V88 M75 142 V182"/>
                            <path class="physics-mark" d="M58 96 H92 M63 132 H87"/>
                            <path class="physics-wire" d="M235 48 V82 M235 138 V182 M390 48 V82 M390 138 V182"/>
                            <rect class="physics-resistor" x="204" y="82" width="62" height="56" rx="6"/>
                            <rect class="physics-resistor" x="359" y="82" width="62" height="56" rx="6"/>
                            <text class="physics-small-label" x="235" y="116" text-anchor="middle">R1</text>
                            <text class="physics-small-label" x="390" y="116" text-anchor="middle">R2</text>
                            <path class="physics-arrow" d="M235 57 V72 M235 72 L228 61 M235 72 L242 61 M390 57 V72 M390 72 L383 61 M390 72 L397 61"/>
                            <text class="physics-label" x="280" y="216" text-anchor="middle">U in jedem Zweig gleich · I1 + I2 = Iges</text>
                        </svg>
                        <p>Ein Zweig kann ausfallen, während Strom durch die anderen Zweige fließt.</p>
                    </figure>
                </div>
                <p class="physics-visual-memory"><strong>Merksatz:</strong> Reihe = gleicher Strom. Parallel = gleiche Spannung.</p>
            </section>`,
        'electric-power': `
            <section class="physics-visual" aria-labelledby="physicsVisualTitle">
                <h3 id="physicsVisualTitle">Energieverbrauch: Leistung mal Zeit</h3>
                <div class="physics-energy-flow" role="img" aria-label="Die Spannungsquelle versorgt ein Gerät. Je größer die Leistung und je länger die Betriebszeit, desto größer die verbrauchte Energie.">
                    <div class="physics-energy-step"><span class="physics-energy-icon" aria-hidden="true">🔋</span><strong>Spannungsquelle</strong><small>Spannung U und Strom I</small></div>
                    <span class="physics-energy-arrow" aria-hidden="true">→</span>
                    <div class="physics-energy-step"><span class="physics-energy-icon" aria-hidden="true">💡</span><strong>Gerät</strong><small>Leistung P = U · I</small></div>
                    <span class="physics-energy-arrow" aria-hidden="true">→</span>
                    <div class="physics-energy-step"><span class="physics-energy-icon" aria-hidden="true">✨</span><strong>Umgesetzte Energie</strong><small>E = P · t</small></div>
                </div>
                <p class="physics-visual-memory"><strong>Einheiten merken:</strong> Watt × Sekunden = Joule. Kilowatt × Stunden = Kilowattstunden. 1000 W = 1 kW.</p>
            </section>`
    };

    function renderLesson() {
        view.innerHTML = `
            <section class="math-panel math-lesson-heading-card">
                <a class="portal-back-link" href="${topicUrl}">← ${escapeHtml(lesson.topicTitle)}</a>
                <span class="math-eyebrow">${lesson.topicIcon} PHYSIK · KLASSE 9</span>
                <h2>${escapeHtml(lesson.title)}</h2>
                <p>${escapeHtml(lesson.summary)}</p>
            </section>
            <article class="math-panel math-lesson-detail">
                <div class="math-lesson-explanation">
                    ${lesson.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
                </div>
                ${lesson.topic === 'electricity' ? electricityVisuals[lesson.id] : ''}
                ${window.LernraumVideoResources.render(lesson, 'Physik')}
                <section class="math-lesson-steps">
                    <h3>So gehst du vor</h3>
                    <ol>${lesson.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
                </section>
                <section class="math-lesson-examples">
                    <h3>Schritt für Schritt vorgerechnet</h3>
                    <div class="math-example">
                        <strong>${escapeHtml(lesson.example.title)}</strong>
                        <ol>${lesson.example.lines.map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ol>
                    </div>
                </section>
            </article>
            <a class="math-button math-button-primary" href="./physik-lernen.html?view=practice&amp;subtopic=${encodeURIComponent(lesson.id)}">Passende Übungen zu „${escapeHtml(lesson.title)}“ →</a>`;
    }

    function renderPractice() {
        view.innerHTML = `
            <a class="portal-back-link" href="./physik-lernen.html?subtopic=${encodeURIComponent(lesson.id)}">← Zurück zur Erklärung: ${escapeHtml(lesson.title)}</a>
            <section class="math-section-heading">
                <div><span class="math-eyebrow">PASSENDE ÜBUNGEN</span><h2>Übungen: ${escapeHtml(lesson.title)}</h2></div>
                <p>${lesson.exercises.length} Aufgaben · Schrittweise Lösungswege</p>
            </section>
            <div class="math-exercise-grid">${lesson.exercises.map((task, index) => {
                const id = `${lesson.id}-${index + 1}`;
                const state = taskState.get(id) || {};
                const answer = state.answer || '';
                return `<article class="math-panel math-exercise" data-physics-task="${id}">
                    <div class="math-exercise-meta"><span>${lesson.topicIcon} ${escapeHtml(lesson.topicTitle)}</span><span>Aufgabe ${index + 1}</span></div>
                    <h3>${escapeHtml(task.prompt)}</h3>
                    <div class="math-answer-row">
                        <label class="math-answer-label">
                            <span class="math-sr-only">Deine Antwort</span>
                            <input class="math-answer" type="text" ${typeof task.answer === 'number' ? 'inputmode="decimal"' : ''} autocomplete="off" placeholder="Deine Antwort" aria-label="Antwort zu Aufgabe ${index + 1}" data-physics-answer="${id}" value="${escapeHtml(answer)}">
                            ${task.unit ? `<span>${escapeHtml(task.unit)}</span>` : ''}
                        </label>
                        <button class="math-button math-button-primary" type="button" data-physics-check="${id}">Prüfen</button>
                    </div>
                    <p class="math-feedback ${state.feedback === 'correct' ? 'is-correct' : state.feedback === 'incorrect' ? 'is-incorrect' : ''}" data-physics-feedback="${id}" role="status" aria-live="polite" ${state.feedback ? '' : 'hidden'}>${state.message || ''}</p>
                    <button class="math-text-button" type="button" data-physics-solution="${id}" aria-expanded="${state.solution ? 'true' : 'false'}">Lösungsweg ${state.solution ? 'ausblenden' : 'anzeigen'}</button>
                    <ol class="math-solution" data-physics-steps="${id}" ${state.solution ? '' : 'hidden'}>${task.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
                </article>`;
            }).join('')}</div>`;
    }

    function normalized(value) {
        return value.trim().toLocaleLowerCase('de-DE').replace(/\s+/g, ' ');
    }

    function matchesAnswer(task, value) {
        if (typeof task.answer === 'number') {
            const parsed = Number(value.trim().replace(/\s/g, '').replace(',', '.'));
            return Number.isFinite(parsed) && Math.abs(parsed - task.answer) <= Math.max(0.01, Math.abs(task.answer) * 0.005);
        }
        return [task.answer, ...(task.accepted || [])].some(answer => normalized(value) === normalized(answer));
    }

    view.addEventListener('input', event => {
        const input = event.target.closest('[data-physics-answer]');
        if (!input) return;
        const state = taskState.get(input.dataset.physicsAnswer) || {};
        state.answer = input.value;
        taskState.set(input.dataset.physicsAnswer, state);
    });

    view.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

        if (button.dataset.physicsCheck) {
            const taskParts = button.dataset.physicsCheck.split('-');
            const taskIndex = Number(taskParts[taskParts.length - 1]) - 1;
            const task = lesson.exercises[taskIndex];
            const input = view.querySelector(`[data-physics-answer="${button.dataset.physicsCheck}"]`);
            const feedback = view.querySelector(`[data-physics-feedback="${button.dataset.physicsCheck}"]`);
            const value = input.value.trim();
            const state = taskState.get(button.dataset.physicsCheck) || {};
            if (!value) {
                state.feedback = 'incorrect';
                state.message = 'Gib zuerst eine Antwort ein.';
            } else if (matchesAnswer(task, value)) {
                window.LernraumDB.recordExerciseAttempt('physik', button.dataset.physicsCheck).catch(error => {
                    console.error('Der bearbeitete Physik-Aufgabenstand konnte nicht gespeichert werden:', error);
                });
                state.feedback = 'correct';
                state.message = 'Richtig! Gut gelöst.';
            } else {
                window.LernraumDB.recordExerciseAttempt('physik', button.dataset.physicsCheck).catch(error => {
                    console.error('Der bearbeitete Physik-Aufgabenstand konnte nicht gespeichert werden:', error);
                });
                state.feedback = 'incorrect';
                state.message = 'Noch nicht richtig. Prüfe deinen Rechenweg und versuche es erneut.';
            }
            state.answer = value;
            taskState.set(button.dataset.physicsCheck, state);
            feedback.textContent = state.message;
            feedback.className = `math-feedback ${state.feedback === 'correct' ? 'is-correct' : 'is-incorrect'}`;
            feedback.hidden = false;
        }

        if (button.dataset.physicsSolution) {
            const state = taskState.get(button.dataset.physicsSolution) || {};
            state.solution = !state.solution;
            taskState.set(button.dataset.physicsSolution, state);
            const steps = view.querySelector(`[data-physics-steps="${button.dataset.physicsSolution}"]`);
            steps.hidden = !state.solution;
            button.textContent = `Lösungsweg ${state.solution ? 'ausblenden' : 'anzeigen'}`;
            button.setAttribute('aria-expanded', String(state.solution));
        }

    });

    root.dataset.theme = 'dark';
    root.querySelector('#physicsThemeToggle').addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.querySelector('#physicsThemeToggle').textContent = root.dataset.theme === 'dark' ? '☀️ Hellmodus' : '🌙 Dunkelmodus';
    });

    if (isPractice) renderPractice();
    else renderLesson();
})();
