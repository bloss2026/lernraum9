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
            { id: 'eng-daily-04', type: 'rewrite', prompt: 'Make this more polite: “Open the window.”', validAnswers: ['Could you open the window, please?', 'Would you open the window, please?'], tip: 'Use could or would and say please.', explanation: 'Polite requests often use could or would.' },
            { id: 'eng-daily-05', type: 'choice', prompt: 'Which phrase is suitable for a short introduction?', options: ['I am Mia and I am from Stuttgart.', 'Mia Stuttgart.', 'My Mia.', 'From Stuttgart Mia.'], answer: 'I am Mia and I am from Stuttgart.', tip: 'Use a complete sentence.', explanation: 'The sentence clearly gives a name and place.' },
            { id: 'eng-daily-06', type: 'fill', prompt: 'Complete the offer.', sentence: 'Would you like ___ help?', answer: 'some', strictCase: false, tip: 'A small amount of help uses “some” here.', explanation: '“Would you like some help?” is a complete offer.' },
            { id: 'eng-daily-07', type: 'rewrite', prompt: 'Write a complete answer to: “Why are you late?”', validAnswers: ['I am late because my bus was delayed.', 'I am sorry. I am late because my bus was late.', 'I am late because the bus did not arrive on time.'], tip: 'Give an apology or reason.', explanation: 'The answer explains the reason with “because”.' },
            { id: 'eng-daily-08', type: 'choice', prompt: 'Choose the sentence that politely refuses.', options: ['No.', 'Sorry, I cannot come. I have to study.', 'I do not come.', 'Cannot.'], answer: 'Sorry, I cannot come. I have to study.', tip: 'A refusal should be clear but polite.', explanation: 'The sentence gives a reason and stays polite.' },
            { id: 'eng-daily-09', type: 'fill', prompt: 'Complete the request.', sentence: 'Do you mind ___ the door?', answer: 'closing', strictCase: false, tip: 'After “mind”, use the -ing form.', explanation: '“Do you mind closing the door?” is a polite request.' },
            { id: 'eng-daily-10', type: 'rewrite', prompt: 'Write a sentence beginning with “I think ...”', validAnswers: ['I think English is useful.', 'I think this lesson is interesting.', 'I think we should work in pairs.'], tip: 'Introduce your own opinion.', explanation: '“I think ...” makes an opinion easy to identify.' }
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
            { id: 'eng-time-08', type: 'rewrite', prompt: 'Form one sentence in Present Perfect: “I / lose / my key”.', validAnswers: ['I have lost my key.'], tip: 'Have + past participle.', explanation: 'Lose becomes lost in the Present Perfect.' },
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
            { id: 'eng-read-04', type: 'rewrite', prompt: 'Summarise: “Leo bought a red bicycle on Tuesday. It cost 150 euros.”', validAnswers: ['Leo bought a red bicycle for 150 euros on Tuesday.', 'On Tuesday, Leo paid 150 euros for a red bicycle.'], tip: 'Keep the person, item, price and time.', explanation: 'Both answers contain the key information.' },
            { id: 'eng-read-05', type: 'choice', prompt: 'Which is a fact from: “Sam left London in 2024 and moved to Bristol.”?', options: ['Sam likes Bristol.', 'Sam moved in 2024.', 'Sam was born in London.', 'Sam drives to London.'], answer: 'Sam moved in 2024.', tip: 'Check only information written in the text.', explanation: 'The text directly states that Sam moved in 2024.' },
            { id: 'eng-read-06', type: 'fill', prompt: 'Text: “The campsite is next to the river.” Where is the campsite?', answer: 'next to the river', strictCase: false, tip: 'The location follows “is”.', explanation: 'The campsite is beside the river.' },
            { id: 'eng-read-07', type: 'choice', prompt: 'Text: “Although it rained, the match continued.” What happened?', options: ['The match stopped.', 'The match continued despite the rain.', 'There was no rain.', 'The match was cancelled.'], answer: 'The match continued despite the rain.', tip: 'Although introduces contrast.', explanation: 'Although means that the rain did not stop the match.' },
            { id: 'eng-read-08', type: 'rewrite', prompt: 'Write one question for: “Maya started the project on Monday.”', validAnswers: ['When did Maya start the project?', 'What day did Maya start the project?'], tip: 'Ask for the time.', explanation: 'Both questions target Monday.' },
            { id: 'eng-read-09', type: 'choice', prompt: 'Which sentence is a conclusion, not a direct fact?', options: ['Ella has blue shoes.', 'Ella is probably outdoors.', 'Ella is 15.', 'Ella lives in Berlin.'], answer: 'Ella is probably outdoors.', tip: 'Probably marks an inference.', explanation: 'An inference is not directly proved by the text.' },
            { id: 'eng-read-10', type: 'fill', prompt: 'Text: “Ava saw a fox near the station at night.” What animal did Ava see?', answer: 'a fox', strictCase: false, tip: 'Search for the animal name.', explanation: 'The text directly names a fox.' }
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
            { id: 'eng-write-07', type: 'choice', prompt: 'Which sentence has the correct word order?', options: ['Yesterday met I my friend.', 'I met my friend yesterday.', 'Met yesterday I my friend.', 'My friend I met yesterday.'], answer: 'I met my friend yesterday.', tip: 'Use subject, verb and object first.', explanation: 'The main sentence follows standard English word order.' },
            { id: 'eng-write-08', type: 'fill', prompt: 'Complete the conclusion.', sentence: '___, I would recommend this trip.', answer: 'In conclusion', strictCase: false, tip: 'Use a conclusion marker.', explanation: 'In conclusion introduces the final judgement.' },
            { id: 'eng-write-09', type: 'rewrite', prompt: 'Write a short opinion with a reason.', validAnswers: ['I prefer summer because the days are longer.', 'I think reading is useful because it improves vocabulary.', 'I enjoy team sports because they are fun.'], tip: 'Use opinion + because + reason.', explanation: 'The sentence clearly names an opinion and explains it.' },
            { id: 'eng-write-10', type: 'choice', prompt: 'Which word is best to add another idea?', options: ['however', 'therefore', 'also', 'although'], answer: 'also', tip: 'Also adds information.', explanation: 'Also introduces an additional idea.' }
        ]
    }
];

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
        explanation: `The English form is “${word.studyEnglish}”.`
    });
});
})();

window.EnglishExercises.push(...vocabularyGroups.values());
