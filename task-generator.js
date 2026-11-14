(() => {
    'use strict';

    const subjects = {
        deutsch: 'Deutsch',
        mathematik: 'Mathematik',
        englisch: 'Englisch',
        chemie: 'Chemie',
        physik: 'Physik',
        biologie: 'Biologie',
        geschichte: 'Geschichte',
        erdkunde: 'Geographie'
    };
    const recentTaskKeys = new Map();
    const issueCounters = new Map();
    const randomInteger = (min, max, random) => Math.floor(random() * (max - min + 1)) + min;
    const pick = (items, random) => items[randomInteger(0, items.length - 1, random)];
    const shuffle = (items, random) => {
        const result = [...items];
        for (let index = result.length - 1; index > 0; index -= 1) {
            const swap = randomInteger(0, index, random);
            [result[index], result[swap]] = [result[swap], result[index]];
        }
        return result;
    };
    const numberText = value => String(Number(value.toFixed(2))).replace('.', ',');

    function multipleChoice(subject, prompt, answer, distractors, explanation, hint, random, extra = {}) {
        const choices = shuffle([...new Set([String(answer), ...distractors.map(String)])].slice(0, 4), random);
        while (choices.length < 4) {
            const fallback = String(Number(answer) + choices.length + 2);
            if (!choices.includes(fallback)) choices.push(fallback);
        }
        return {
            subject,
            type: 'multiple-choice',
            prompt,
            options: choices,
            answer: String(answer),
            explanation,
            hint,
            ...extra
        };
    }

    function generateGerman(random) {
        const cases = [
            {
                id: 'case-dative', type: 'fill-in',
                prompt: 'Ergänze den Artikel im Dativ: „Die Trainerin hilft ___ Spieler nach dem Sturz.“',
                sentence: 'Die Trainerin hilft ___ Spieler nach dem Sturz.', answer: 'dem', strictCase: true,
                hint: 'Frage: Wem hilft die Trainerin?',
                explanation: '„Helfen“ verlangt den Dativ. Bei „der Spieler“ lautet der Artikel im Dativ „dem“.'
            },
            {
                id: 'case-genitive', type: 'multiple-choice',
                prompt: 'Welcher Fall ist markiert? „Die Bewerbung **des Schülers** liegt bereit.“',
                question: 'Bestimme den Fall von „des Schülers“.',
                options: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], answer: 'Genitiv',
                hint: 'Frage: Wessen Bewerbung liegt bereit?',
                explanation: '„Wessen Bewerbung?“ – „des Schülers“. Die Frage „Wessen?“ zeigt den Genitiv.'
            },
            {
                id: 'case-accusative', type: 'dropdown',
                prompt: 'Setze das passende Pronomen ein: „Morgen besucht Lara ___.“',
                sentence: 'Morgen besucht Lara {{blank}}.',
                choices: ['ich', 'mich', 'mir', 'mein'], answer: 'mich',
                hint: 'Wen besucht Lara?',
                explanation: '„Besuchen“ verlangt hier den Akkusativ. Auf „Wen?“ passt „mich“.'
            },
            {
                id: 'tense-past', type: 'rewrite',
                prompt: 'Setze den Satz ins Präteritum: „Die Mannschaft gewinnt das Finale.“',
                validAnswers: ['Die Mannschaft gewann das Finale.'],
                hint: '„Gewinnen“ ist ein unregelmäßiges Verb.',
                explanation: 'Die Präteritumform von „gewinnen“ lautet „gewann“.'
            },
            {
                id: 'tense-perfect', type: 'rewrite',
                prompt: 'Setze den Satz ins Perfekt: „Wir fahren nach dem Training nach Hause.“',
                validAnswers: ['Wir sind nach dem Training nach Hause gefahren.'],
                hint: 'Bei einer Ortsveränderung steht „fahren“ im Perfekt meist mit „sein“.',
                explanation: 'Das Perfekt wird mit „sein“ und dem Partizip II „gefahren“ gebildet.'
            },
            {
                id: 'tense-future', type: 'dropdown',
                prompt: 'Ergänze das Futur I: „Morgen ___ wir die Präsentation vorstellen.“',
                sentence: 'Morgen {{blank}} wir die Präsentation vorstellen.',
                choices: ['haben', 'werden', 'sind', 'wurden'], answer: 'werden',
                hint: 'Futur I: eine Form von „werden“ plus Infinitiv.',
                explanation: '„Werden vorstellen“ bildet das Futur I.'
            },
            {
                id: 'passive', type: 'rewrite',
                prompt: 'Forme ins Vorgangspassiv um: „Die Klasse gestaltet das Plakat.“',
                validAnswers: ['Das Plakat wird von der Klasse gestaltet.', 'Das Plakat wird durch die Klasse gestaltet.'],
                hint: 'Das Akkusativobjekt wird zum Subjekt; bilde „werden + Partizip II“.',
                explanation: '„Das Plakat“ rückt ins Subjekt. Das Passiv im Präsens lautet „wird gestaltet“.'
            },
            {
                id: 'das-dass', type: 'dropdown',
                prompt: 'Wähle „das“ oder „dass“: „Ich hoffe, ___ mein Team heute gewinnt.“',
                sentence: 'Ich hoffe, {{blank}} mein Team heute gewinnt.',
                choices: ['das', 'dass'], answer: 'dass',
                hint: 'Das Wort leitet einen Nebensatz ein und lässt sich nicht durch „welches“ ersetzen.',
                explanation: '„Dass“ leitet den Nebensatz „dass mein Team heute gewinnt“ ein.'
            },
            {
                id: 'ss-ss', type: 'fill-in',
                prompt: 'Ergänze die richtige Schreibweise: „Vor dem Sportplatz verläuft die breite ___.“',
                sentence: 'Vor dem Sportplatz verläuft die breite ___.', answer: 'Straße', strictCase: true,
                hint: 'Nach einem langen Vokal steht häufig „ß“.',
                explanation: '„Straße“ wird nach dem langen Vokal „a“ mit „ß“ geschrieben.'
            },
            {
                id: 'nominalization', type: 'error-correction',
                prompt: 'Korrigiere die Groß- und Kleinschreibung: „Beim laufen höre ich gern Musik.“',
                sentence: 'Beim laufen höre ich gern Musik.',
                validAnswers: ['Beim Laufen höre ich gern Musik.'],
                hint: 'Nach „beim“ wird der Infinitiv wie ein Nomen gebraucht.',
                explanation: '„Laufen“ ist nach „beim“ nominalisiert und wird großgeschrieben.'
            }
        ];
        return { ...pick(cases, random), categoryId: 'generator-deutsch', categoryTitle: 'Deutsch · Zufallsaufgabe' };
    }

    function generateMath(random) {
        const kind = pick(['percent', 'interest', 'equation', 'area', 'proportion'], random);
        let task;
        if (kind === 'percent') {
            const rate = pick([10, 15, 20, 25, 30, 40], random);
            const base = randomInteger(4, 40, random) * 20;
            const result = base * rate / 100;
            task = {
                subtopic: 'percent', topic: 'percent-interest',
                prompt: `Berechne ${rate} % von ${base} €.`, answer: result, unit: '€',
                steps: [`Prozentwert = Grundwert · Prozentsatz / 100.`, `${base} · ${rate} / 100 = ${numberText(result)}.`, `Ergebnis: ${numberText(result)} €.`],
                hint: `Berechne zuerst ${base} · ${rate} und teile dann durch 100.`,
                explanation: `${rate} % von ${base} € sind ${numberText(result)} €.`
            };
        } else if (kind === 'interest') {
            const capital = randomInteger(2, 20, random) * 100;
            const rate = randomInteger(2, 6, random);
            const months = pick([3, 6, 9, 12], random);
            const interest = Math.round(capital * rate / 100 * months / 12 * 100) / 100;
            task = {
                subtopic: 'interest', topic: 'percent-interest',
                prompt: `${capital} € werden zu ${rate} % pro Jahr für ${months} Monate angelegt. Wie hoch sind die einfachen Zinsen?`,
                answer: interest, unit: '€',
                steps: [`Jahreszinsen: ${capital} · ${rate} / 100 = ${numberText(capital * rate / 100)} €.`, `Für ${months} Monate: ${numberText(capital * rate / 100)} · ${months} / 12.`, `Ergebnis: ${numberText(interest)} €.`],
                hint: 'Berechne erst die Jahreszinsen und multipliziere anschließend mit Monate/12.',
                explanation: `Die einfachen Zinsen für ${months} Monate betragen ${numberText(interest)} €.`
            };
        } else if (kind === 'equation') {
            const multiplier = randomInteger(2, 8, random);
            const solution = randomInteger(2, 12, random);
            const constant = randomInteger(1, 15, random);
            const total = multiplier * solution + constant;
            task = {
                subtopic: 'equations', topic: 'terms',
                prompt: `Löse die Gleichung: ${multiplier}x + ${constant} = ${total}. Gib x an.`,
                answer: solution, unit: 'x =',
                steps: [`Ziehe ${constant} auf beiden Seiten ab: ${multiplier}x = ${total - constant}.`, `Teile beide Seiten durch ${multiplier}.`, `x = ${solution}. Probe: ${multiplier} · ${solution} + ${constant} = ${total}.`],
                hint: 'Bringe zuerst die Zahl ohne x auf die andere Seite, dann teile durch den Koeffizienten.',
                explanation: `Die Lösung ist x = ${solution}; eingesetzt ergibt sich auf beiden Seiten ${total}.`
            };
        } else if (kind === 'area') {
            const length = randomInteger(3, 15, random);
            const width = randomInteger(2, 12, random);
            task = {
                subtopic: 'plane-areas', topic: 'geometry',
                prompt: `Ein rechteckiger Trainingsplatz ist ${length} m lang und ${width} m breit. Berechne seine Fläche.`,
                answer: length * width, unit: 'm²',
                steps: ['Fläche eines Rechtecks: A = Länge · Breite.', `${length} · ${width} = ${length * width}.`, `Die Fläche beträgt ${length * width} m².`],
                hint: 'Multipliziere Länge und Breite.',
                explanation: `A = ${length} · ${width} = ${length * width} m².`
            };
        } else {
            const unitCount = randomInteger(2, 8, random);
            const unitPrice = randomInteger(2, 9, random);
            const requestedCount = unitCount * randomInteger(2, 5, random);
            const result = requestedCount * unitPrice;
            task = {
                subtopic: 'word-equations', topic: 'terms',
                prompt: `${unitCount} Hefte kosten ${unitCount * unitPrice} €. Wie viel kosten ${requestedCount} Hefte zum gleichen Stückpreis?`,
                answer: result, unit: '€',
                steps: [`Stückpreis: ${unitCount * unitPrice} € / ${unitCount} = ${unitPrice} €.`, `${requestedCount} · ${unitPrice} € = ${result} €.`, `Die Hefte kosten ${result} €.`],
                hint: 'Berechne zunächst den Preis für ein Heft.',
                explanation: `Ein Heft kostet ${unitPrice} €. ${requestedCount} Hefte kosten ${result} €.`
            };
        }
        return {
            subject: 'mathematik', type: 'fill-in', ...task,
            kind: 'number', id: 'generator-math'
        };
    }

    const localVocabulary = [
        ['practice', 'üben'], ['team', 'Mannschaft'], ['application', 'Bewerbung'], ['to improve', 'verbessern'],
        ['carefully', 'sorgfältig'], ['experience', 'Erfahrung'], ['to share', 'teilen'], ['neighbour', 'Nachbar'],
        ['journey', 'Reise'], ['equipment', 'Ausrüstung'], ['to decide', 'entscheiden'], ['healthy', 'gesund'],
        ['goal', 'Ziel'], ['to borrow', 'ausleihen'], ['message', 'Nachricht'], ['environment', 'Umwelt']
    ];

    function generateEnglish(random) {
        const providedWords = window.VocabularyData?.vocabularyData;
        const vocabulary = Array.isArray(providedWords) && providedWords.length >= 4
            ? providedWords.map(word => [word.studyEnglish || word.english, word.studyGerman || word.german]).filter(pair => pair[0] && pair[1])
            : localVocabulary;
        if (random() < 0.62) {
            const selectedIndex = randomInteger(0, vocabulary.length - 1, random);
            const [english, german] = vocabulary[selectedIndex];
            const isEnglishToGerman = random() < 0.5;
            const answer = isEnglishToGerman ? german : english;
            const distractors = shuffle(vocabulary.filter((_, index) => index !== selectedIndex)
                .map(pair => isEnglishToGerman ? pair[1] : pair[0]), random).slice(0, 3);
            const question = multipleChoice(
                'englisch',
                isEnglishToGerman ? `Was bedeutet „${english}“?` : `Wie heißt „${german}“ auf Englisch?`,
                answer,
                distractors,
                `„${english}“ bedeutet „${german}“.`,
                isEnglishToGerman ? 'Überlege, in welchem Alltagssatz du das Wort verwenden würdest.' : 'Denke an das englische Wort aus dem Wortschatz.',
                random,
                { word: { id: `local-${selectedIndex}`, english, german }, direction: isEnglishToGerman ? 'en-de' : 'de-en' }
            );
            question.correct = question.answer;
            return question;
        }
        const tenseItems = [
            { prompt: 'Yesterday, Mia ___ football after school.', answer: 'played', wrong: ['plays', 'has played', 'will play'], explanation: '„Yesterday“ signalisiert Simple Past: play wird zu played.', hint: 'Achte auf das Signalwort „Yesterday“.', id: 'simple-past' },
            { prompt: 'We have ___ our homework already.', answer: 'finished', wrong: ['finish', 'finishing', 'will finish'], explanation: 'Present Perfect: have/has + past participle. Das Partizip von finish lautet finished.', hint: 'Nach have steht das past participle.', id: 'present-perfect' },
            { prompt: 'I think it ___ rain tomorrow.', answer: 'will', wrong: ['did', 'has', 'was'], explanation: 'Will-Future: will + Grundform des Verbs.', hint: '„Tomorrow“ weist auf die Zukunft hin.', id: 'will-future' }
        ];
        const item = pick(tenseItems, random);
        return multipleChoice('englisch', item.prompt, item.answer, item.wrong, item.explanation, item.hint, random, { grammarTopic: item.id });
    }

    function generatePhysics(random, context = {}) {
        const kind = context.subtopic === 'speed' ? 'speed'
            : context.subtopic === 'resistance' ? 'ohm'
                : context.subtopic === 'electric-power' ? 'power'
                    : pick(['speed', 'ohm', 'power', 'pressure'], random);
        let prompt;
        let answer;
        let unit;
        let steps;
        let hint;
        if (kind === 'speed') {
            const time = randomInteger(2, 12, random) * 10;
            const speed = randomInteger(3, 12, random);
            const distance = speed * time;
            prompt = `Ein Radfahrer fährt ${distance} m in ${time} s. Berechne seine Geschwindigkeit.`;
            answer = speed;
            unit = 'm/s';
            steps = ['Formel: v = s / t.', `v = ${distance} m / ${time} s.`, `v = ${speed} m/s.`];
            hint = 'Teile die Strecke durch die Zeit: v = s/t.';
        } else if (kind === 'ohm') {
            const resistance = randomInteger(2, 12, random);
            const current = randomInteger(1, 6, random);
            const voltage = resistance * current;
            prompt = `An einem Widerstand von ${resistance} Ω fließen ${current} A. Berechne die Spannung.`;
            answer = voltage;
            unit = 'V';
            steps = ['Ohmsches Gesetz: U = R · I.', `U = ${resistance} Ω · ${current} A.`, `U = ${voltage} V.`];
            hint = 'Verwende das Ohmsche Gesetz U = R · I.';
        } else if (kind === 'power') {
            const voltage = pick([6, 9, 12, 24], random);
            const current = randomInteger(1, 5, random);
            const power = voltage * current;
            prompt = `Ein Gerät arbeitet mit ${voltage} V und ${current} A. Wie groß ist seine Leistung?`;
            answer = power;
            unit = 'W';
            steps = ['Elektrische Leistung: P = U · I.', `P = ${voltage} V · ${current} A.`, `P = ${power} W.`];
            hint = 'Multipliziere Spannung und Stromstärke.';
        } else {
            const force = randomInteger(2, 12, random) * 10;
            const area = pick([2, 4, 5, 10], random);
            const pressure = force / area;
            prompt = `Eine Kraft von ${force} N wirkt auf ${area} m². Berechne den Druck.`;
            answer = pressure;
            unit = 'Pa';
            steps = ['Druck: p = F / A.', `p = ${force} N / ${area} m².`, `p = ${numberText(pressure)} Pa.`];
            hint = 'Teile die Kraft durch die Fläche.';
        }
        return {
            subject: 'physik', type: 'fill-in', id: 'generator-physics',
            prompt, answer, unit, steps, hint,
            explanation: `${steps[steps.length - 1]}`
        };
    }

    const elements = [
        { name: 'Wasserstoff', symbol: 'H', protons: 1, mass: 1 },
        { name: 'Kohlenstoff', symbol: 'C', protons: 6, mass: 12 },
        { name: 'Sauerstoff', symbol: 'O', protons: 8, mass: 16 },
        { name: 'Natrium', symbol: 'Na', protons: 11, mass: 23 },
        { name: 'Magnesium', symbol: 'Mg', protons: 12, mass: 24 },
        { name: 'Chlor', symbol: 'Cl', protons: 17, mass: 35 }
    ];

    function generateChemistry(random) {
        const element = pick(elements, random);
        const kind = pick(['protons', 'electrons', 'neutrons'], random);
        const label = kind === 'protons' ? 'Protonen' : kind === 'electrons' ? 'Elektronen' : 'Neutronen';
        const answer = kind === 'neutrons' ? element.mass - element.protons : element.protons;
        const prompt = kind === 'neutrons'
            ? `Wie viele Neutronen hat ein Atom ${element.name}-(${element.mass}) mit der Ordnungszahl ${element.protons}?`
            : `Wie viele ${label} hat ein neutrales Atom ${element.name} (${element.symbol}) mit der Ordnungszahl ${element.protons}?`;
        const distractors = [Math.max(0, answer - 1), answer + 1, element.mass + 1];
        return multipleChoice(
            'chemie',
            prompt,
            answer,
            distractors,
            kind === 'neutrons'
                ? `Neutronenzahl = Massenzahl − Ordnungszahl = ${element.mass} − ${element.protons} = ${answer}.`
                : `Die Ordnungszahl gibt ${answer} Protonen an. Bei einem neutralen Atom ist auch die Elektronenzahl ${answer}.`,
            kind === 'neutrons' ? 'Ziehe die Ordnungszahl von der Massenzahl ab.' : 'Die Ordnungszahl ist die Protonenzahl; neutral bedeutet gleich viele Elektronen.',
            random,
            { topic: 'Atombau' }
        );
    }

    const facts = {
        biologie: [
            ['Welche Zellstruktur enthält bei Pflanzenzellen Chlorophyll?', 'Chloroplast', ['Zellkern', 'Mitochondrium', 'Zellmembran'], 'Chloroplasten enthalten Chlorophyll und ermöglichen die Fotosynthese.', 'Dort wird Lichtenergie für die Fotosynthese genutzt.'],
            ['Welches Organ pumpt Blut durch den Körper?', 'Herz', ['Lunge', 'Magen', 'Niere'], 'Das Herz pumpt Blut durch den Körperkreislauf.', 'Es arbeitet wie eine Pumpe.'],
            ['Welches Gas nehmen Pflanzen bei der Fotosynthese auf?', 'Kohlenstoffdioxid', ['Sauerstoff', 'Stickstoff', 'Wasserstoff'], 'Pflanzen nehmen Kohlenstoffdioxid auf und geben bei der Fotosynthese Sauerstoff ab.', 'Es ist das Gas, das auch in der Luft ausgeatmet wird.'],
            ['Wo beginnt die Verdauung der Nahrung?', 'Im Mund', ['Im Dünndarm', 'Im Magen', 'In der Speiseröhre'], 'Im Mund wird Nahrung zerkleinert und mit Speichel vermischt.', 'Hier wird Nahrung gekaut.']
        ],
        geschichte: [
            ['In welchem Jahr begann die Französische Revolution?', '1789', ['1492', '1815', '1914'], 'Die Französische Revolution begann 1789.', 'Die Jahreszahl liegt am Ende des 18. Jahrhunderts.'],
            ['In welchem Jahr wurde das Deutsche Kaiserreich gegründet?', '1871', ['1848', '1918', '1949'], 'Das Deutsche Kaiserreich wurde 1871 gegründet.', 'Die Gründung erfolgte nach dem Deutsch-Französischen Krieg.'],
            ['Welcher Mauerfall fand am 9. November 1989 statt?', 'Der Fall der Berliner Mauer', ['Der Bau der Berliner Mauer', 'Die deutsche Kaiserreichsgründung', 'Die Wiedervereinigung Europas'], 'Am 9. November 1989 wurde die Berliner Mauer geöffnet.', 'Das Ereignis leitete das Ende der deutschen Teilung ein.'],
            ['Welche Epoche folgte in Europa auf das Mittelalter?', 'Die Frühe Neuzeit', ['Die Steinzeit', 'Die Antike', 'Die Bronzezeit'], 'Auf das Mittelalter folgte die Frühe Neuzeit.', 'Buchdruck und Entdeckungsfahrten prägten diese Epoche.']
        ],
        erdkunde: [
            ['Wie heißt die Hauptstadt von Frankreich?', 'Paris', ['Lyon', 'Marseille', 'Nizza'], 'Paris ist die Hauptstadt Frankreichs.', 'Die Stadt liegt an der Seine.'],
            ['Auf welchem Kontinent liegt Kenia?', 'Afrika', ['Asien', 'Europa', 'Südamerika'], 'Kenia liegt in Ostafrika.', 'Der Kontinent liegt südlich von Europa.'],
            ['Welcher Ozean liegt zwischen Europa und Nordamerika?', 'Atlantischer Ozean', ['Indischer Ozean', 'Pazifischer Ozean', 'Arktischer Ozean'], 'Der Atlantische Ozean liegt zwischen Europa und Nordamerika.', 'Er ist nach der griechischen Sagengestalt Atlas benannt.'],
            ['Welches Land hat die Hauptstadt Rom?', 'Italien', ['Spanien', 'Portugal', 'Griechenland'], 'Rom ist die Hauptstadt Italiens.', 'Das Land sieht auf der Karte wie ein Stiefel aus.']
        ]
    };

    function generateFact(subject, random) {
        const [prompt, answer, options, explanation, hint] = pick(facts[subject], random);
        return {
            subject, type: 'multiple-choice', prompt, options: shuffle([answer, ...options], random), answer,
            explanation, hint, topic: subjects[subject]
        };
    }

    function makeTask(subject, random, context) {
        if (subject === 'deutsch') return generateGerman(random);
        if (subject === 'mathematik') return generateMath(random);
        if (subject === 'englisch') return generateEnglish(random);
        if (subject === 'physik') return generatePhysics(random, context);
        if (subject === 'chemie') return generateChemistry(random);
        return generateFact(subject, random);
    }

    function signature(task) {
        return `${task.prompt}|${JSON.stringify(task.answer)}`;
    }

    function create(subject, context = {}) {
        if (!Object.prototype.hasOwnProperty.call(subjects, subject)) {
            throw new RangeError(`Für das Fach "${subject}" gibt es keinen Aufgaben-Generator.`);
        }
        const random = typeof context.random === 'function' ? context.random : Math.random;
        let task = makeTask(subject, random, context);
        let attempts = 0;
        while (signature(task) === recentTaskKeys.get(subject) && attempts < 12) {
            task = makeTask(subject, random, context);
            attempts += 1;
        }
        if (signature(task) === recentTaskKeys.get(subject)) {
            task.prompt += ` (Zusatzrunde ${issueCounters.get(subject) || 1})`;
        }
        recentTaskKeys.set(subject, signature(task));
        const count = (issueCounters.get(subject) || 0) + 1;
        issueCounters.set(subject, count);
        task.id = `${task.id || `generated-${subject}`}-${count}`;
        task.subject = subject;
        task.subjectTitle = subjects[subject];
        task.hint = task.hint || task.tip || 'Lies die Frage sorgfältig und zerlege sie in kleine Schritte.';
        task.explanation = task.explanation || (Array.isArray(task.steps) ? task.steps.join(' ') : 'Prüfe deine Antwort mit der passenden Regel.');
        return task;
    }

    function escapeHTML(value) {
        return String(value ?? '').replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[character]);
    }

    window.LernraumTaskGenerator = Object.freeze({ create, subjects: Object.freeze({ ...subjects }) });

    if (typeof document === 'undefined') return;

    const storageKey = 'lernraum9.task-generator.progress';

    function currentSubject() {
        const page = document.documentElement.dataset.page || '';
        const subject = document.documentElement.dataset.subject || '';
        if (subject && Object.prototype.hasOwnProperty.call(subjects, subject)) return subject;
        const path = window.location.pathname.toLocaleLowerCase('de');
        if (/mathematik/.test(path) || page.startsWith('math-')) return 'mathematik';
        if (/physik/.test(path) || page.startsWith('physics-')) return 'physik';
        if (/chemie/.test(path)) return 'chemie';
        if (/deutsch/.test(path)) return 'deutsch';
        if (/englisch|vokabel/.test(path)) return 'englisch';
        if (/biologie/.test(path)) return 'biologie';
        if (/geschichte/.test(path)) return 'geschichte';
        if (/geographie/.test(path) || /erdkunde/.test(path)) return 'erdkunde';
        return '';
    }

    function initialize() {
        return;
    }

    function legacyInitialize() {
        if (document.documentElement.dataset.page !== 'subject') return;
        if (document.querySelector('[data-action="generate-random"], [data-tg-action]')) return;
        const subject = currentSubject();
        if (!subject || !document.body || document.getElementById('taskGeneratorDock')) return;

        const dock = document.createElement('aside');
        dock.id = 'taskGeneratorDock';
        dock.className = 'task-generator-dock';
        dock.innerHTML = `
            <button class="tg-launcher" type="button" data-tg-action="toggle" aria-expanded="false" aria-controls="tgPanel">🎲 <span>Zufallsaufgabe</span></button>
            <section id="tgPanel" class="tg-panel" aria-label="Offline-Aufgabengenerator" hidden>
                <header class="tg-header"><div><span class="tg-eyebrow">OFFLINE · ${escapeHTML(subjects[subject])}</span><h2>Zufallsaufgabe</h2></div><button class="tg-close" type="button" data-tg-action="close" aria-label="Generator schließen">×</button></header>
                <div class="tg-body" data-tg-body><p>Erzeuge eine neue Aufgabe für ${escapeHTML(subjects[subject])}.</p></div>
                <div class="tg-footer"><button class="tg-button tg-button-primary" type="button" data-tg-action="new">Neue Aufgabe 🎲</button></div>
            </section>`;
        document.body.appendChild(dock);

        const panel = dock.querySelector('#tgPanel');
        const body = dock.querySelector('[data-tg-body]');
        let currentTask = null;
        let selected = '';
        let selectedIndices = [];
        let hintVisible = false;
        let feedback = '';
        let progress = { attempts: {}, correct: {} };
        let autoAdvanceTimer = null;

        try {
            const saved = window.localStorage.getItem(storageKey);
            const parsed = saved ? JSON.parse(saved) : null;
            if (parsed && parsed.attempts && parsed.correct) progress = parsed;
        } catch (error) {
            console.error('Der Generator-Lernstand konnte nicht geladen werden:', error);
            body.innerHTML = '<p class="tg-error" role="status">Der lokale Generator-Lernstand konnte nicht geladen werden.</p>';
        }

        function persistAttempt(correct) {
            const attempts = Number(progress.attempts[subject] || 0) + 1;
            const successes = Number(progress.correct[subject] || 0) + (correct ? 1 : 0);
            progress = {
                ...progress,
                attempts: { ...progress.attempts, [subject]: attempts },
                correct: { ...progress.correct, [subject]: successes }
            };
            try {
                window.localStorage.setItem(storageKey, JSON.stringify(progress));
            } catch (error) {
                console.error('Der Generator-Lernstand konnte nicht gespeichert werden:', error);
                feedback = 'Deine Antwort wurde geprüft, aber der Fortschritt konnte nicht gespeichert werden.';
            }
        }

        function inputMarkup(task) {
            if (task.type === 'multiple-choice') {
                return `<div class="tg-choices">${task.options.map((option, index) => `<button class="tg-choice ${selected === option ? 'is-selected' : ''}" type="button" data-tg-option="${index}" aria-pressed="${selected === option}">${escapeHTML(option)}</button>`).join('')}</div>`;
            }
            if (task.type === 'dropdown') {
                return `<label class="tg-answer-label">Deine Auswahl<select data-tg-answer><option value="">Bitte auswählen …</option>${task.choices.map(option => `<option value="${escapeHTML(option)}">${escapeHTML(option)}</option>`).join('')}</select></label>`;
            }
            if (task.type === 'sentence-builder') {
                return `<p class="tg-instruction">Dein Satz: ${selectedIndices.map(index => escapeHTML(task.cards[index])).join(' ') || 'Wähle die Wortkarten.'}</p><div class="tg-choices">${task.cards.map((card, index) => `<button class="tg-choice" type="button" data-tg-card="${index}" ${selectedIndices.includes(index) ? 'disabled' : ''}>${escapeHTML(card)}</button>`).join('')}</div>`;
            }
            if (task.type === 'word-click') {
                return `<p class="tg-instruction">Klicke die gesuchten Wörter an:</p><div class="tg-choices">${task.tokens.map((token, index) => `<button class="tg-choice ${selectedIndices.includes(index) ? 'is-selected' : ''}" type="button" data-tg-token="${index}" aria-pressed="${selectedIndices.includes(index)}">${escapeHTML(token)}</button>`).join('')}</div>`;
            }
            if (task.type === 'error-correction') {
                return `<label class="tg-answer-label">Korrigierter Satz<textarea data-tg-answer rows="3">${escapeHTML(task.sentence)}</textarea></label>`;
            }
            if (task.type === 'rewrite') {
                return `<label class="tg-answer-label">Deine Formulierung<textarea data-tg-answer rows="3" placeholder="Schreibe den ganzen Satz hier …"></textarea></label>`;
            }
            return `<label class="tg-answer-label">Deine Antwort<input data-tg-answer type="${typeof task.answer === 'number' ? 'text' : 'text'}" ${typeof task.answer === 'number' ? 'inputmode="decimal"' : ''} autocomplete="off" placeholder="${task.unit ? `Ergebnis in ${escapeHTML(task.unit)}` : 'Antwort eingeben'}"></label>`;
        }

        function render() {
            if (!currentTask) return;
            const attempts = Number(progress.attempts[subject] || 0);
            const correct = Number(progress.correct[subject] || 0);
            body.innerHTML = `
                <div class="tg-counter">Generator-Aufgaben: ${correct} richtig von ${attempts} geprüft</div>
                <h3>${escapeHTML(currentTask.prompt)}</h3>
                ${inputMarkup(currentTask)}
                <div class="tg-actions"><button class="tg-button tg-button-light" type="button" data-tg-action="hint" aria-expanded="${hintVisible}">${hintVisible ? 'Tipp ausblenden' : 'Tipp anzeigen'}</button><button class="tg-button tg-button-primary" type="button" data-tg-action="check">Prüfen</button></div>
                ${hintVisible ? `<p class="tg-hint"><strong>Tipp:</strong> ${escapeHTML(currentTask.hint)}</p>` : ''}
                ${feedback ? `<p class="tg-feedback ${feedback.startsWith('Richtig') ? 'is-correct' : 'is-incorrect'}" role="status">${escapeHTML(feedback)}</p>` : ''}`;

            if (feedback && feedback.startsWith('Richtig')) {
                if (autoAdvanceTimer) window.clearTimeout(autoAdvanceTimer);
                autoAdvanceTimer = window.setTimeout(() => {
                    createTask();
                }, 850);
            }
        }

        function answerValue() {
            if (currentTask.type === 'multiple-choice') return selected;
            if (currentTask.type === 'sentence-builder' || currentTask.type === 'word-click') return selectedIndices;
            return body.querySelector('[data-tg-answer]')?.value || '';
        }

        function normalized(value) {
            return String(value).trim().replace(/\s+/g, ' ').toLocaleLowerCase('de-DE');
        }

        function checkAnswer(value) {
            if (currentTask.type === 'sentence-builder' || currentTask.type === 'word-click') {
                const expected = currentTask.type === 'sentence-builder' ? currentTask.correctOrder : currentTask.correctIndices;
                return Array.isArray(value) && value.length === expected.length && value.every((part, index) => part === expected[index]);
            }
            if (currentTask.type === 'multiple-choice' || currentTask.type === 'dropdown') return value === currentTask.answer;
            if (typeof currentTask.answer === 'number') {
                const number = Number(String(value).trim().replace(/\s/g, '').replace(',', '.'));
                return Number.isFinite(number) && Math.abs(number - currentTask.answer) <= (currentTask.tolerance || 0.01);
            }
            if (currentTask.strictCase) return String(value).trim() === currentTask.answer;
            const answers = currentTask.validAnswers || [currentTask.answer];
            return answers.some(answer => normalized(answer) === normalized(value));
        }

        function expectedAnswer() {
            if (currentTask.type === 'sentence-builder') return currentTask.correctOrder.map(index => currentTask.cards[index]).join(' ');
            if (currentTask.type === 'word-click') return currentTask.correctIndices.map(index => currentTask.tokens[index]).join(' ');
            return String(currentTask.answer ?? currentTask.validAnswers?.[0] ?? '');
        }

        function createTask() {
            if (autoAdvanceTimer) {
                window.clearTimeout(autoAdvanceTimer);
                autoAdvanceTimer = null;
            }
            try {
                currentTask = create(subject, { subtopic: new URLSearchParams(window.location.search).get('subtopic') || '' });
                selected = '';
                selectedIndices = [];
                hintVisible = false;
                feedback = '';
                render();
            } catch (error) {
                console.error('Die Zufallsaufgabe konnte nicht erzeugt werden:', error);
                body.innerHTML = `<p class="tg-error" role="alert">${escapeHTML(error.message)}</p>`;
            }
        }

        dock.addEventListener('click', event => {
            const target = event.target.closest('button');
            if (!target) return;
            const action = target.dataset.tgAction;
            if (action === 'toggle') {
                const open = panel.hidden;
                panel.hidden = !open;
                target.setAttribute('aria-expanded', String(open));
                if (open && !currentTask) createTask();
            } else if (action === 'close') {
                panel.hidden = true;
                dock.querySelector('[data-tg-action="toggle"]').setAttribute('aria-expanded', 'false');
            } else if (action === 'new') {
                createTask();
            } else if (action === 'hint') {
                hintVisible = !hintVisible;
                render();
            } else if (action === 'check' && currentTask) {
                const value = answerValue();
                const empty = Array.isArray(value) ? value.length === 0 : !String(value).trim();
                if (empty) {
                    feedback = 'Gib zuerst eine Antwort ein oder wähle eine Antwortmöglichkeit.';
                } else {
                    const correct = checkAnswer(value);
                    persistAttempt(correct);
                    feedback = correct
                        ? `Richtig! ${currentTask.explanation}`
                        : `Noch nicht richtig. ${currentTask.type === 'rewrite' || currentTask.type === 'error-correction' ? `Deine Antwort: ${String(value)}. Musterlösung: ${expectedAnswer()}. ` : `Musterlösung: ${expectedAnswer()}. `}${currentTask.explanation}`;
                }
                render();
            }

            if (target.dataset.tgOption !== undefined && currentTask?.type === 'multiple-choice') {
                selected = currentTask.options[Number(target.dataset.tgOption)];
                render();
            }
            if (target.dataset.tgCard !== undefined && currentTask?.type === 'sentence-builder') {
                selectedIndices.push(Number(target.dataset.tgCard));
                render();
            }
            if (target.dataset.tgToken !== undefined && currentTask?.type === 'word-click') {
                const index = Number(target.dataset.tgToken);
                selectedIndices = selectedIndices.includes(index)
                    ? selectedIndices.filter(item => item !== index)
                    : [...selectedIndices, index].sort((a, b) => a - b);
                render();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
