window.EnglishExercises = [
    {
        id: 'everyday-language',
        title: 'Alltagssprache',
        icon: '💬',
        description: 'Höflich fragen, um Hilfe bitten und eigene Gedanken verständlich äußern.',
        lesson: {
            overview: 'In Alltagssituationen ist nicht nur die Übersetzung wichtig, sondern auch eine passende, natürliche Formulierung. Höfliche Wendungen, vollständige Sätze und klare Antworten helfen, verstanden zu werden.',
            points: [
                'Use „could“ or „would“ for polite requests.',
                'Give reasons with „because“.',
                'Use complete answers, not only single words.',
                'Choose phrases that fit the situation.'
            ],
            examples: [
                ['Can you help me, please?', 'Höfliche Bitte'],
                ['Could I borrow your ruler?', 'Höfliche Erlaubnis'],
                ['I am not sure, because ...', 'Begründung']
            ]
        },
        exercises: [
            { id: 'eng-daily-01', type: 'choice', prompt: 'What is the most polite way to ask for help?', options: ['Give me your pen.', 'Could you help me, please?', 'You help me now.', 'Help.'], answer: 'Could you help me, please?', tip: '„Could“ makes a request polite.', explanation: 'Could you ...? is a polite and complete request.' },
            { id: 'eng-daily-02', type: 'fill', prompt: 'Complete the request.', sentence: '___ I borrow your dictionary, please?', answer: 'Could', strictCase: true, tip: 'A modal verb expresses a polite request.', explanation: '“Could I ...?” is a natural way to ask for permission.' },
            { id: 'eng-daily-03', type: 'choice', prompt: 'Which answer gives a reason?', options: ['I am busy.', 'I am busy because I have football practice.', 'Football practice.', 'Busy.'], answer: 'I am busy because I have football practice.', tip: 'Use “because” before the reason.', explanation: 'A complete reason follows because.' },
            { id: 'eng-daily-04', type: 'open-writing', prompt: 'Make this more polite: “Open the window.”', requiredPhraseGroups: [['could', 'would'], ['please'], ['open the window']], minimumWords: 5, modelAnswer: 'Could you open the window, please?', tip: 'Use could or would and say please.', explanation: 'A polite request uses could or would and includes please.' },
            { id: 'eng-daily-05', type: 'choice', prompt: 'Which phrase is suitable for a short introduction?', options: ['I am Mia and I am from Stuttgart.', 'Mia Stuttgart.', 'My Mia.', 'From Stuttgart Mia.'], answer: 'I am Mia and I am from Stuttgart.', tip: 'Use a complete sentence.', explanation: 'The sentence clearly gives a name and place.' },
            { id: 'eng-daily-06', type: 'fill', prompt: 'Complete the offer.', sentence: 'Would you like ___ help?', answer: 'some', strictCase: false, tip: 'A small amount of help uses “some” here.', explanation: '“Would you like some help?” is a complete offer.' },
            { id: 'eng-daily-07', type: 'open-writing', prompt: 'Write a complete answer to: “Why are you late?”', requiredPhraseGroups: [['i am late', "i'm late", 'sorry'], ['because', 'bus', 'train', 'traffic', 'missed', 'overslept', 'delayed', 'accident']], minimumWords: 5, modelAnswer: 'I am late because my bus was delayed.', tip: 'Give an apology or explain a reason for being late.', explanation: 'A complete answer includes an apology or says you are late, and gives a reason.' },
            { id: 'eng-daily-08', type: 'choice', prompt: 'Choose the sentence that politely refuses.', options: ['No.', 'Sorry, I cannot come. I have to study.', 'I do not come.', 'Cannot.'], answer: 'Sorry, I cannot come. I have to study.', tip: 'A refusal should be clear but polite.', explanation: 'The sentence gives a reason and stays polite.' },
            { id: 'eng-daily-09', type: 'fill', prompt: 'Complete the request.', sentence: 'Do you mind ___ the door?', answer: 'closing', strictCase: false, tip: 'After “mind”, use the -ing form.', explanation: '“Do you mind closing the door?” is a polite request.' },
            { id: 'eng-daily-10', type: 'open-writing', prompt: 'Write a sentence beginning with “I think ...”', requiredStart: 'i think', requiredPhraseGroups: [['i think']], minimumWords: 4, modelAnswer: 'I think English is useful.', tip: 'Introduce your own opinion.', explanation: 'A complete sentence beginning with “I think” gives your opinion.' }
        ]
    },
    {
        id: 'present-past',
        title: 'Gegenwart und Vergangenheit',
        icon: '⏱️',
        description: 'Simple Present, Present Progressive und die Vergangenheitsformen sicher anwenden.',
        lesson: {
            overview: 'Die Zeitform zeigt, ob etwas jetzt passiert, regelmäßig geschieht oder bereits abgeschlossen ist. Verbform und Signalwort müssen zusammenpassen.',
            points: [
                'Simple Present: routines and facts.',
                'Present Progressive: action at the moment.',
                'Simple Past: finished action at a known time.',
                'Present Perfect: past action with a result in the present.'
            ],
            examples: [
                ['She walks to school every day.', 'Simple Present'],
                ['She is walking to school now.', 'Present Progressive'],
                ['She walked to school yesterday.', 'Simple Past']
            ]
        },
        exercises: [
            { id: 'eng-time-01', type: 'choice', prompt: 'Choose the correct present form: “Tom ___ football every Saturday.”', options: ['play', 'plays', 'is playing', 'played'], answer: 'plays', tip: 'Every Saturday indicates a routine.', explanation: 'For he/she/it, the Simple Present adds -s.' },
            { id: 'eng-time-02', type: 'fill', prompt: 'Complete the sentence.', sentence: 'They ___ reading a text now.', answer: 'are', strictCase: false, tip: 'Use a form of be for Present Progressive.', explanation: 'They + are forms the Present Progressive.' },
            { id: 'eng-time-03', type: 'choice', prompt: 'Which sentence describes an action happening now?', options: ['Mia cooks dinner.', 'Mia is cooking dinner.', 'Mia cooked dinner.', 'Mia has cooked dinner.'], answer: 'Mia is cooking dinner.', tip: 'Look for is + verb-ing.', explanation: 'Is cooking shows that the action is happening now.' },
            { id: 'eng-time-04', type: 'rewrite', prompt: 'Put the sentence into Simple Past: “We visit our grandparents.”', validAnswers: ['We visited our grandparents.'], tip: 'Regular verbs add -ed.', explanation: 'Visited is the Simple Past form of visit.' },
            { id: 'eng-time-05', type: 'choice', prompt: 'Choose the correct sentence.', options: ['Yesterday I go to the park.', 'Yesterday I went to the park.', 'Yesterday I going to the park.', 'Yesterday I goes to the park.'], answer: 'Yesterday I went to the park.', tip: 'Go has the irregular past form went.', explanation: 'Went is the Simple Past of go.' },
            { id: 'eng-time-06', type: 'fill', prompt: 'Complete the sentence.', sentence: 'She ___ already finished her homework.', answer: 'has', strictCase: false, tip: 'Present Perfect: have/has + past participle.', explanation: 'She has finished uses the Present Perfect.' },
            { id: 'eng-time-07', type: 'choice', prompt: 'Which word is a Present Perfect signal?', options: ['yesterday', 'now', 'every day', 'already'], answer: 'already', tip: 'Already often shows a result in the present.', explanation: 'Already commonly appears in Present Perfect sentences.' },
            { id: 'eng-time-08', type: 'rewrite', prompt: 'Form one sentence in Present Perfect: “I / lose / my key”.', validAnswers: ['I have lost my key.', "I've lost my key."], tip: 'Have + past participle.', explanation: 'Lose becomes lost in the Present Perfect. The contraction “I’ve” is also correct.' },
            { id: 'eng-time-09', type: 'choice', prompt: 'Which sentence contains a finished past action?', options: ['I have lunch now.', 'I am having lunch.', 'I had lunch at 1 p.m.', 'I will have lunch.'], answer: 'I had lunch at 1 p.m.', tip: 'A specific past time points to Simple Past.', explanation: 'Had is Simple Past and 1 p.m. fixes the past time.' },
            { id: 'eng-time-10', type: 'fill', prompt: 'Complete the negative sentence.', sentence: 'Ben ___ not like milk.', answer: 'does', strictCase: false, tip: 'Negative Simple Present uses do or does.', explanation: 'Ben is third person singular, so does + not is used.' }
        ]
    },
    {
        id: 'short-texts',
        title: 'Kurze Texte verstehen',
        icon: '🔎',
        description: 'Informationen suchen, Zusammenhänge erkennen und Antworten mit Textbelegen begründen.',
        lesson: {
            overview: 'Beim Lesen arbeitest du nicht Wort für Wort, sondern in mehreren Schritten: Thema erfassen, Schlüsselwörter suchen und eine Antwort mit dem Text vergleichen.',
            points: [
                'Read the title and first sentence first.',
                'Underline names, times and places.',
                'Do not guess: find a text clue.',
                'A summary uses your own words.'
            ],
            examples: [
                ['Why did Mia leave early?', 'Find the reason in the text.'],
                ['Who is Ben?', 'Find the name and its information.'],
                ['What happened?', 'Identify the main event.']
            ]
        },
        exercises: [
            { id: 'eng-read-01', type: 'choice', prompt: 'Text: “Nora arrived at 8 a.m. She took the bus because her bike was broken.” What was broken?', options: ['the bus', 'Nora’s bike', 'the school', 'the clock'], answer: 'Nora’s bike', tip: 'Search the text for “broken”.', explanation: 'The text says that her bike was broken.' },
            { id: 'eng-read-02', type: 'fill', prompt: 'Text: “Ben works in a bakery on Saturdays.” When does Ben work?', answer: 'on Saturdays', strictCase: false, tip: 'The answer follows the time information.', explanation: 'The sentence names Saturdays as Ben’s workday.' },
            { id: 'eng-read-03', type: 'choice', prompt: 'Text: “The library closes at 6 p.m. Please return books before that.” What should visitors do?', options: ['return books before 6 p.m.', 'borrow no books', 'close the library', 'buy books'], answer: 'return books before 6 p.m.', tip: 'The instruction is linked to the closing time.', explanation: 'Visitors should return books before closing.' },
            { id: 'eng-read-04', type: 'open-writing', prompt: 'Summarise: “Leo bought a red bicycle on Tuesday. It cost 150 euros.”', requiredPhraseGroups: [['leo'], ['red bicycle', 'red bike'], ['150 euros', '150 euro'], ['tuesday']], minimumWords: 7, modelAnswer: 'Leo bought a red bicycle for 150 euros on Tuesday.', tip: 'Include Leo, the red bicycle, the price and Tuesday.', explanation: 'A good summary keeps the person, item, price and time.' },
            { id: 'eng-read-05', type: 'choice', prompt: 'Which is a fact from: “Sam left London in 2024 and moved to Bristol.”?', options: ['Sam likes Bristol.', 'Sam moved in 2024.', 'Sam was born in London.', 'Sam drives to London.'], answer: 'Sam moved in 2024.', tip: 'Check only information written in the text.', explanation: 'The text directly states that Sam moved in 2024.' },
            { id: 'eng-read-06', type: 'fill', prompt: 'Text: “The campsite is next to the river.” Where is the campsite?', answer: 'next to the river', strictCase: false, tip: 'The location follows “is”.', explanation: 'The campsite is beside the river.' },
            { id: 'eng-read-07', type: 'choice', prompt: 'Text: “Although it rained, the match continued.” What happened?', options: ['The match stopped.', 'The match continued despite the rain.', 'There was no rain.', 'The match was cancelled.'], answer: 'The match continued despite the rain.', tip: 'Although introduces contrast.', explanation: 'Although means that the rain did not stop the match.' },
            { id: 'eng-read-08', type: 'open-writing', prompt: 'Write a question asking when Maya started the project.', requiredPhraseGroups: [['when', 'what day', 'which day'], ['did'], ['maya']], minimumWords: 6, modelAnswer: 'When did Maya start the project?', tip: 'Use a time question word and “did”.', explanation: 'A correct question uses a time question word and asks when Maya started.' },
            { id: 'eng-read-09', type: 'choice', prompt: 'Text: “Ella is wearing sunglasses and carrying a beach towel.” Which sentence is a reasonable conclusion, not a direct fact?', options: ['Ella is probably outdoors.', 'Ella is 15.', 'Ella lives in Berlin.', 'Ella bought new sunglasses yesterday.'], answer: 'Ella is probably outdoors.', tip: 'Probably marks an inference. Check which detail supports it.', explanation: 'Sunglasses and a beach towel make it reasonable to infer that Ella is outdoors. Her age, home and when she bought the sunglasses are not stated.' },
            { id: 'eng-read-10', type: 'fill', prompt: 'Text: “Ava saw a fox near the station at night.” What animal did Ava see?', answer: 'a fox', validAnswers: ['fox'], strictCase: false, tip: 'Search for the animal name.', explanation: 'The text directly names a fox.' }
        ]
    },
    {
        id: 'own-text',
        title: 'Eigene Texte formulieren',
        icon: '✍️',
        description: 'Klare Sätze, Textstruktur und nützliche Verknüpfungswörter verwenden.',
        lesson: {
            overview: 'Gutes Schreiben beginnt mit einer klaren Struktur. Eine Einleitung nennt Thema und Standpunkt, der Hauptteil entwickelt Ideen, und der Schluss fasst zusammen.',
            points: [
                'Use and, but and because to connect ideas.',
                'First, next and finally structure a text.',
                'A topic sentence introduces a paragraph.',
                'Check spelling and verb position before finishing.'
            ],
            examples: [
                ['First, I take the bus.', 'At the beginning'],
                ['However, the weather changed.', 'Contrast'],
                ['Finally, we arrived home.', 'Ending']
            ]
        },
        exercises: [
            { id: 'eng-write-01', type: 'choice', prompt: 'Which connector shows a contrast?', options: ['and', 'because', 'but', 'first'], answer: 'but', tip: 'But introduces a difference.', explanation: 'But connects contrasting ideas.' },
            { id: 'eng-write-02', type: 'fill', prompt: 'Complete the sequence.', sentence: '___, we packed our bags. Next, we left the house.', answer: 'First', strictCase: true, tip: 'Use a sequencing word.', explanation: 'First starts a clear sequence of actions.' },
            { id: 'eng-write-03', type: 'rewrite', prompt: 'Combine the ideas: “It rained. We stayed outside.”', validAnswers: ['It rained, but we stayed outside.', 'Although it rained, we stayed outside.'], tip: 'Use but or although.', explanation: 'The sentence connects contrast and weather.' },
            { id: 'eng-write-04', type: 'choice', prompt: 'Which is a strong topic sentence?', options: ['Sports are good for health and friendships.', 'Sports.', 'Health.', 'Very good.'], answer: 'Sports are good for health and friendships.', tip: 'A topic sentence states the main idea.', explanation: 'The sentence announces a clear topic and point.' },
            { id: 'eng-write-05', type: 'fill', prompt: 'Complete the reason.', sentence: 'I want to learn English ___ I need it for travelling.', answer: 'because', strictCase: false, tip: 'A reason follows because.', explanation: 'Because introduces the reason for learning English.' },
            { id: 'eng-write-06', type: 'rewrite', prompt: 'Improve the sentence: “I like the subject. It is interesting.”', validAnswers: ['I like the subject because it is interesting.', 'I like the subject, as it is interesting.'], tip: 'Combine related ideas.', explanation: 'A because-sentence is more compact and explains the opinion.' },
            { id: 'eng-write-07', type: 'choice', prompt: 'Which sentence has the correct word order?', options: ['Yesterday met I my friend.', 'I met my friend yesterday.', 'Met yesterday I my friend.', 'Met my friend yesterday I.'], answer: 'I met my friend yesterday.', tip: 'Use subject, verb and object first.', explanation: 'The main sentence follows standard English word order.' },
            { id: 'eng-write-08', type: 'fill', prompt: 'Complete the conclusion.', sentence: '___, I would recommend this trip.', answer: 'In conclusion', strictCase: false, tip: 'Use a conclusion marker.', explanation: 'In conclusion introduces the final judgement.' },
            { id: 'eng-write-09', type: 'open-writing', prompt: 'Write a short opinion with a reason.', requiredPhraseGroups: [['i think', 'i prefer', 'i enjoy'], ['because']], minimumWords: 6, modelAnswer: 'I prefer summer because the days are longer.', tip: 'Use an opinion phrase and explain your reason with “because”.', explanation: 'A complete response includes an opinion, a reason introduced by “because”, and at least six words.' },
            { id: 'eng-write-10', type: 'choice', prompt: 'Which word is best to add another idea?', options: ['however', 'therefore', 'also', 'although'], answer: 'also', tip: 'Also adds information.', explanation: 'Also introduces an additional idea.' }
        ]
    }
];

const germanExerciseSupport = {
    'eng-daily-01': { promptDe: 'Welche Formulierung ist die höflichste Bitte um Hilfe?', tipDe: '„Could you …?“ macht eine Bitte höflich.', explanationDe: '„Could you …, please?“ ist eine höfliche und vollständige Bitte.' },
    'eng-daily-02': { promptDe: 'Ergänze die höfliche Bitte.', sentenceDe: 'Könnte ich mir bitte dein Wörterbuch ausleihen?', tipDe: 'Ein Modalverb drückt eine höfliche Bitte aus.', explanationDe: '„Could I …?“ ist eine natürliche Frage, wenn man um Erlaubnis bittet.' },
    'eng-daily-03': { promptDe: 'Welche Antwort nennt einen Grund?', tipDe: 'Vor dem Grund steht „because“ (weil).', explanationDe: 'Auf „because“ folgt eine vollständige Begründung.' },
    'eng-daily-04': { promptDe: 'Formuliere die folgende Aufforderung höflicher.', sentenceDe: 'Öffne das Fenster.', tipDe: 'Verwende „could“ oder „would“ und „please“ (bitte).', explanationDe: 'Eine höfliche Bitte verwendet „could“ oder „would“ und enthält „please“.' },
    'eng-daily-05': { promptDe: 'Welche Formulierung passt zu einer kurzen Vorstellung?', tipDe: 'Verwende einen vollständigen Satz.', explanationDe: 'Der Satz nennt verständlich den Namen und die Herkunft.' },
    'eng-daily-06': { promptDe: 'Ergänze das Angebot.', sentenceDe: 'Möchtest du Hilfe?', tipDe: '„Some“ passt hier zu einem Angebot.', explanationDe: '„Would you like some help?“ ist ein vollständiges Angebot.' },
    'eng-daily-07': { promptDe: 'Schreibe eine vollständige Antwort auf die Frage.', sentenceDe: 'Warum kommst du zu spät?', tipDe: 'Entschuldige dich oder erkläre den Grund für die Verspätung.', explanationDe: 'Eine vollständige Antwort enthält eine Entschuldigung oder sagt, dass du zu spät bist, und nennt einen Grund.' },
    'eng-daily-08': { promptDe: 'Wähle den Satz, mit dem man höflich absagt.', tipDe: 'Eine Absage soll klar und höflich sein.', explanationDe: 'Der Satz nennt einen Grund und bleibt höflich.' },
    'eng-daily-09': { promptDe: 'Ergänze die Bitte.', sentenceDe: 'Würde es dich stören, die Tür zu schließen?', tipDe: 'Nach „mind“ steht das Verb mit der Endung „-ing“.', explanationDe: '„Do you mind closing the door?“ ist eine höfliche Bitte. Auch der vollständige Satz wird als Antwort akzeptiert.' },
    'eng-daily-10': { promptDe: 'Schreibe einen vollständigen Satz, der mit „I think …“ (Ich denke …) beginnt.', tipDe: 'Nenne deine eigene Meinung in einem vollständigen Satz.', explanationDe: 'Ein vollständiger Satz mit „I think“ drückt deine Meinung aus.' },
    'eng-time-01': { promptDe: 'Wähle die richtige Form im Simple Present (einfache Gegenwart).', sentenceDe: 'Tom spielt jeden Samstag Fußball.', tipDe: '„Every Saturday“ (jeden Samstag) zeigt eine regelmäßige Handlung an.', explanationDe: 'Bei he/she/it erhält das Verb im Simple Present meistens ein „-s“.' },
    'eng-time-02': { promptDe: 'Ergänze den Satz.', sentenceDe: 'Sie lesen gerade einen Text.', tipDe: 'Das Present Progressive braucht eine Form von „be“.', explanationDe: 'Mit „they“ lautet die Form „are“: „They are reading“.' },
    'eng-time-03': { promptDe: 'Welcher Satz beschreibt eine Handlung, die gerade stattfindet?', tipDe: 'Achte auf „is“ plus Verb mit „-ing“.', explanationDe: '„Is cooking“ zeigt, dass die Handlung gerade stattfindet.' },
    'eng-time-04': { promptDe: 'Setze den Satz ins Simple Past (einfache Vergangenheit).', sentenceDe: 'Wir besuchen unsere Großeltern.', tipDe: 'Regelmäßige Verben erhalten im Simple Past die Endung „-ed“.', explanationDe: '„Visited“ ist die Simple-Past-Form von „visit“.' },
    'eng-time-05': { promptDe: 'Wähle den grammatisch richtigen Satz.', sentenceDe: 'Gestern ging ich in den Park.', tipDe: '„Go“ ist unregelmäßig; die Vergangenheitsform lautet „went“.', explanationDe: '„Went“ ist die Simple-Past-Form von „go“.' },
    'eng-time-06': { promptDe: 'Ergänze den Satz.', sentenceDe: 'Sie hat ihre Hausaufgaben schon erledigt.', tipDe: 'Present Perfect: „have/has“ plus Partizip.', explanationDe: '„She has finished“ steht im Present Perfect.' },
    'eng-time-07': { promptDe: 'Welches Wort ist ein mögliches Signalwort für das Present Perfect?', tipDe: '„Already“ bedeutet „schon“ und weist oft auf ein Ergebnis hin.', explanationDe: '„Already“ steht häufig im Present Perfect.' },
    'eng-time-08': { promptDe: 'Bilde einen Satz im Present Perfect aus den Wörtern.', sentenceDe: 'Ich habe meinen Schlüssel verloren.', tipDe: 'Bilde „have“ plus Partizip Perfekt.', explanationDe: 'Das Partizip von „lose“ lautet „lost“. Auch die Kurzform „I’ve“ ist richtig.' },
    'eng-time-09': { promptDe: 'Welcher Satz beschreibt eine abgeschlossene Handlung in der Vergangenheit?', tipDe: 'Eine konkrete vergangene Uhrzeit ist ein Hinweis auf das Simple Past.', explanationDe: '„Had“ steht im Simple Past; „at 1 p.m.“ nennt eine konkrete Zeit in der Vergangenheit.' },
    'eng-time-10': { promptDe: 'Ergänze die Verneinung im Simple Present.', sentenceDe: 'Ben mag keine Milch.', tipDe: 'Die Verneinung im Simple Present verwendet „do“ oder „does“.', explanationDe: 'Bei „Ben“ (3. Person Singular) heißt es „does not“.' },
    'eng-read-01': { promptDe: 'Textverständnis: Was war kaputt?', sentenceDe: 'Nora kam um 8 Uhr an. Sie nahm den Bus, weil ihr Fahrrad kaputt war.', tipDe: 'Suche im Text nach dem Wort „broken“ (kaputt).', explanationDe: 'Im Text steht, dass Noras Fahrrad kaputt war.' },
    'eng-read-02': { promptDe: 'Textverständnis: Wann arbeitet Ben?', sentenceDe: 'Ben arbeitet samstags in einer Bäckerei.', tipDe: 'Die Antwort steht bei der Zeitangabe im Text.', explanationDe: 'Im Satz steht, dass Ben samstags arbeitet.' },
    'eng-read-03': { promptDe: 'Textverständnis: Was sollen die Besucher tun?', sentenceDe: 'Die Bibliothek schließt um 18 Uhr. Bitte gib die Bücher vorher zurück.', tipDe: 'Die Anweisung bezieht sich auf die Schließzeit.', explanationDe: 'Die Bücher sollen vor der Schließzeit zurückgegeben werden.' },
    'eng-read-04': { promptDe: 'Fasse die Information kurz zusammen.', sentenceDe: 'Leo kaufte am Dienstag ein rotes Fahrrad. Es kostete 150 Euro.', tipDe: 'Nenne Leo, das rote Fahrrad, den Preis und den Dienstag.', explanationDe: 'Eine gute Zusammenfassung enthält die Person, den Gegenstand, den Preis und den Zeitpunkt.' },
    'eng-read-05': { promptDe: 'Welche Aussage ist eine Tatsache aus dem Text?', sentenceDe: 'Sam verließ London im Jahr 2024 und zog nach Bristol.', tipDe: 'Wähle nur Informationen, die ausdrücklich im Text stehen.', explanationDe: 'Der Text sagt direkt, dass Sam 2024 umzog.' },
    'eng-read-06': { promptDe: 'Textverständnis: Wo liegt der Campingplatz?', sentenceDe: 'Der Campingplatz liegt neben dem Fluss.', tipDe: 'Die Ortsangabe folgt auf „is“.', explanationDe: 'Der Campingplatz liegt neben dem Fluss.' },
    'eng-read-07': { promptDe: 'Textverständnis: Was ist passiert?', sentenceDe: 'Obwohl es regnete, wurde das Spiel fortgesetzt.', tipDe: '„Although“ (obwohl) leitet einen Gegensatz ein.', explanationDe: 'Der Regen hat das Spiel nicht verhindert.' },
    'eng-read-08': { promptDe: 'Stelle eine Frage dazu, wann Maya das Projekt gestartet hat.', sentenceDe: 'Maya startete das Projekt am Montag.', tipDe: 'Verwende ein Zeit-Fragewort und „did“.', explanationDe: 'Eine richtige Frage verwendet ein Zeit-Fragewort und fragt, wann Maya gestartet ist.' },
    'eng-read-09': { promptDe: 'Welche Aussage ist eine plausible Schlussfolgerung und keine direkt genannte Tatsache?', sentenceDe: 'Ella trägt eine Sonnenbrille und hat ein Strandtuch dabei.', tipDe: '„Probably“ (wahrscheinlich) kennzeichnet eine Schlussfolgerung. Prüfe, welche Hinweise sie stützen.', explanationDe: 'Sonnenbrille und Strandtuch lassen vermuten, dass Ella draußen ist. Ihr Alter, Wohnort und Kaufdatum werden nicht genannt.' },
    'eng-read-10': { promptDe: 'Textverständnis: Welches Tier hat Ava gesehen?', sentenceDe: 'Ava sah nachts in der Nähe des Bahnhofs einen Fuchs.', tipDe: 'Suche im Text nach dem Tiernamen.', explanationDe: 'Im Text wird ausdrücklich ein Fuchs genannt.' },
    'eng-write-01': { promptDe: 'Welches Verbindungswort drückt einen Gegensatz aus?', tipDe: '„But“ bedeutet „aber“ und leitet einen Gegensatz ein.', explanationDe: '„But“ verbindet gegensätzliche Gedanken.' },
    'eng-write-02': { promptDe: 'Ergänze die Reihenfolge.', sentenceDe: 'Zuerst packten wir unsere Taschen. Danach verließen wir das Haus.', tipDe: 'Verwende ein Wort, das den Anfang einer Reihenfolge markiert.', explanationDe: '„First“ (zuerst) leitet eine Reihenfolge ein.' },
    'eng-write-03': { promptDe: 'Verbinde die beiden Aussagen mit einem passenden Gegensatz.', sentenceDe: 'Es regnete. Wir blieben draußen.', tipDe: 'Verwende „but“ (aber) oder „although“ (obwohl).', explanationDe: 'Der Satz verbindet zwei gegensätzliche Aussagen.' },
    'eng-write-04': { promptDe: 'Welcher Satz eignet sich als klarer Einleitungssatz für einen Absatz?', tipDe: 'Ein Einleitungssatz nennt den Hauptgedanken.', explanationDe: 'Der Satz nennt ein klares Thema und eine Aussage dazu.' },
    'eng-write-05': { promptDe: 'Ergänze die Begründung.', sentenceDe: 'Ich möchte Englisch lernen, weil ich es auf Reisen brauche.', tipDe: 'Vor einer Begründung steht „because“ (weil).', explanationDe: '„Because“ leitet den Grund für das Englischlernen ein.' },
    'eng-write-06': { promptDe: 'Verbessere den Satz und verbinde die zusammengehörenden Gedanken.', sentenceDe: 'Ich mag das Fach. Es ist interessant.', tipDe: 'Verbinde Gedanken, die inhaltlich zusammengehören.', explanationDe: 'Der because-Satz ist kompakter und erklärt die Meinung.' },
    'eng-write-07': { promptDe: 'Welcher Satz hat die richtige englische Wortstellung?', tipDe: 'Im englischen Aussagesatz steht meist zuerst das Subjekt, dann das Verb und das Objekt.', explanationDe: 'Der Satz folgt der üblichen englischen Wortstellung.' },
    'eng-write-08': { promptDe: 'Ergänze eine Wendung für den Schluss.', sentenceDe: 'Abschließend würde ich diese Reise empfehlen.', tipDe: 'Verwende eine Wendung, die ein Fazit einleitet.', explanationDe: '„In conclusion“ leitet eine Schlussfolgerung ein.' },
    'eng-write-09': { promptDe: 'Schreibe eine kurze Meinung und begründe sie.', tipDe: 'Nenne deine Meinung und erkläre sie mit „because“ (weil).', explanationDe: 'Eine vollständige Antwort enthält eine Meinung, eine mit „because“ eingeleitete Begründung und mindestens sechs Wörter.' },
    'eng-write-10': { promptDe: 'Welches Wort eignet sich am besten, um einen weiteren Gedanken hinzuzufügen?', tipDe: '„Also“ bedeutet hier „außerdem“ und ergänzt eine Information.', explanationDe: '„Also“ leitet einen zusätzlichen Gedanken ein.' }
};

window.EnglishExercises.forEach(category => {
    category.exercises.forEach(exercise => {
        const support = germanExerciseSupport[exercise.id];
        if (support) Object.assign(exercise, support);
    });
});

const vocabularyGroups = new Map();
(function addVocabularyPractice() {
const slug = value => value.toLocaleLowerCase('en').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
(window.VocabularyData?.vocabularyData || []).forEach(word => {
    if (!word || typeof word.id !== 'string' || !word.id.trim()
        || typeof word.studyEnglish !== 'string' || !word.studyEnglish.trim()
        || typeof word.studyGerman !== 'string' || !word.studyGerman.trim()) {
        throw new Error('Jede Englisch-Vokabel braucht eine ID sowie bereinigte englische und deutsche Lernformen.');
    }

    const unit = typeof word.unit === 'string' && word.unit.trim() ? word.unit.trim() : 'Ohne Unit';
    const category = typeof word.category === 'string' && word.category.trim() ? word.category.trim() : 'Ohne Thema';
    const key = `${unit}\u0000${category}`;
    if (!vocabularyGroups.has(key)) {
        vocabularyGroups.set(key, {
            id: `vocabulary-${slug(unit)}-${slug(category)}`,
            title: `${unit} · ${category}`,
            icon: '📚',
            description: `Lerne ${category} aus ${unit} aktiv aus dem Gedächtnis abzufragen.`,
            lesson: {
                overview: 'Decke die englische Form ab, rufe sie aus der deutschen Bedeutung ab und prüfe danach die Lösung. So übst du aktives Erinnern statt nur Wiedererkennen.',
                points: [
                    'Lies zuerst die deutsche Bedeutung und formuliere die englische Lösung selbst.',
                    'Achte bei Verben auf die passende Wortform und bei Wendungen auf die vollständige Phrase.',
                    'Sprich die englische Antwort laut aus und prüfe die Aussprache im Vokabeltrainer.',
                    'Falsche Antworten bleiben als Fehlversuche sichtbar und können erneut geübt werden.'
                ],
                examples: [
                    ['Deutsche Bedeutung lesen', 'Abruf ohne Vorlage'],
                    ['Englische Form selbst schreiben', 'Aktives Erinnern'],
                    ['Lösung vergleichen und laut sprechen', 'Wiederholen und festigen']
                ]
            },
            exercises: [],
            vocabulary: true
        });
    }

    vocabularyGroups.get(key).exercises.push({
        id: `eng-vocab-${word.id}`,
        type: 'fill',
        prompt: `Write in English: “${word.studyGerman}”`,
        sentence: '',
        answer: word.studyEnglish,
        strictCase: false,
        tip: `Recall the English word or phrase for “${word.studyGerman}”.`,
        explanation: `The English form is “${word.studyEnglish}”.`,
        promptDe: `Schreibe auf Englisch: „${word.studyGerman}“`,
        tipDe: `Rufe das englische Wort oder die englische Wendung für „${word.studyGerman}“ ab.`,
        explanationDe: `Die englische Form lautet „${word.studyEnglish}“.`
    });
});
})();

window.EnglishExercises.push(...vocabularyGroups.values());
