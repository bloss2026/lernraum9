const classworkPoems = {
    wuenschelrute: {
        title: 'Wünschelrute',
        author: 'Joseph von Eichendorff',
        text: 'Schläft ein Lied in allen Dingen,\nDie da träumen fort und fort,\nUnd die Welt hebt an zu singen,\nTriffst du nur das Zauberwort.',
        sourceUrl: 'https://de.wikisource.org/wiki/W%C3%BCnschelrute'
    },
    dieDreiSpatzen: {
        title: 'Die drei Spatzen',
        author: 'Christian Morgenstern',
        text: 'In einem leeren Haselstrauch\nda sitzen drei Spatzen, Bauch an Bauch.\nDer Erich rechts und links der Franz\nund mitten drin der freche Hans.\n\nSie haben die Augen zu, ganz zu,\nund obendrüber da schneit es, hu!\n\nSie rücken zusammen dicht an dicht.\nSo warm wie der Hans hats niemand nicht.\n\nSie hör’n alle drei ihrer Herzlein Gepoch.\nUnd wenn sie nicht weg sind, so sitzen sie noch.',
        sourceUrl: 'https://de.wikisource.org/wiki/Die_drei_Spatzen'
    },
    erlkönig: {
        title: 'Erlkönig (Auszug: erste zwei Strophen)',
        author: 'Johann Wolfgang von Goethe',
        text: 'Wer reitet so spät durch Nacht und Wind?\nEs ist der Vater mit seinem Kind;\nEr hat den Knaben wohl in dem Arm,\nEr faßt ihn sicher, er hält ihn warm.\n\nMein Sohn, was birgst du so bang dein Gesicht? —\nSiehst, Vater, du den Erlkönig nicht?\nDen Erlenkönig mit Kron’ und Schweif? —\nMein Sohn, es ist ein Nebelstreif. —',
        sourceUrl: 'https://de.wikisource.org/wiki/Erlk%C3%B6nig'
    },
    dieBürgschaft: {
        title: 'Die Bürgschaft (Auszug: erste Strophe)',
        author: 'Friedrich Schiller',
        text: 'Zu Dionys dem Tirannen schlich\nMöros, den Dolch im Gewande,\nIhn schlugen die Häscher in Bande.\nWas wolltest du mit dem Dolche, sprich!\nEntgegnet ihm finster der Wütherich.\n„Die Stadt vom Tyrannen befreien!“\nDas sollst du am Kreutze bereuen.',
        sourceUrl: 'https://de.wikisource.org/wiki/Die_B%C3%BCrgschaft'
    }
};

window.DeutschExercises = [
    {
        id: 'kasus', title: 'Die vier Fälle', icon: '🧩',
        description: 'Nominativ, Genitiv, Dativ und Akkusativ im Alltag erkennen.',
        theory: 'Der Nominativ nennt das Subjekt eines Satzes: Wer oder was handelt? Der Genitiv zeigt Zugehörigkeit und antwortet auf Wessen? Der Dativ zeigt, wem etwas gegeben, geholfen oder erzählt wird: Wem? Der Akkusativ nennt das direkte Ziel oder Objekt: Wen oder was? In der Schule helfen diese Fragen dabei, Satzglieder schnell zu erkennen und Fehler zu vermeiden.',
        lesson: {
            overview: 'Die vier Fälle sagen, welche grammatische Rolle ein Nomen oder Pronomen im Satz hat. Wenn du die Frage richtig stellst, erkennst du schnell, ob etwas Subjekt, Besitz, Empfänger oder Ziel ist.',
            focusPoints: [
                'Nominativ: Wer oder was? — Das Subjekt steht hier.',
                'Genitiv: Wessen? — Zeigt Besitz oder Zugehörigkeit an.',
                'Dativ: Wem? — Der Empfänger oder der Begünstigte steht hier.',
                'Akkusativ: Wen oder was? — Das direkte Objekt oder Ziel steht hier.'
            ],
            examples: [
                { title: 'Nominativ', text: 'Der Trainer erklärt die Regeln. — Wer erklärt die Regeln? Der Trainer.' },
                { title: 'Genitiv', text: 'Die Tasche der Schülerin liegt im Klassenraum. — Wessen Tasche? Der Schülerin.' },
                { title: 'Dativ', text: 'Mila hilft dem Freund. — Wem hilft Mila? Dem Freund.' },
                { title: 'Akkusativ', text: 'Lena trifft den Chef. — Wen trifft Lena? Den Chef.' }
            ],
            sections: [
                {
                    title: '1. Mit der richtigen Frage prüfen',
                    text: 'Stelle vor der Bestimmung eine Fallfrage zur Wortgruppe. Die Frage ergibt sich aus Verb und Präposition: Wer oder was?, Wessen?, Wem? oder Wen oder was?',
                    points: [
                        'Frage zuerst nach dem Verb und nicht nur nach dem Wort.',
                        'Behalte in der Antwort die ganze passende Wortgruppe im Blick.',
                        'Prüfe bei Präpositionen, welchen Fall die Präposition verlangt.'
                    ]
                },
                {
                    title: '2. Artikel und Pronomen mitbeachten',
                    text: 'Der bestimmte Artikel verändert sich je nach Fall und Geschlecht. Er ist ein nützlicher Hinweis, ersetzt aber nicht die Fallfrage.',
                    points: [
                        'Nominativ maskulin: der; Akkusativ maskulin: den.',
                        'Dativ feminin: der; Genitiv feminin: der.',
                        'Personalpronomen wechseln ebenfalls: ich – meiner – mir – mich.'
                    ]
                },
                {
                    title: '3. Den Satzinhalt kontrollieren',
                    text: 'Übersetze die Frageprobe in eine kurze Kontrollfrage und prüfe, welche Rolle die Wortgruppe im Satz hat.',
                    points: [
                        'Das Subjekt antwortet auf Wer oder was?',
                        'Der Empfänger steht nach geben, helfen und erzählen häufig im Dativ.',
                        'Das direkte Ziel steht nach treffen, sehen oder fragen oft im Akkusativ.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'IDS grammis: Kasus', url: 'https://grammis.ids-mannheim.de/vggf/2143', note: 'Fachliche Erklärung zu Nominativ, Genitiv, Dativ und Akkusativ.' },
            { title: 'Duden: Vier Fälle', url: 'https://www.duden.de/sprachwissen/sprachratgeber/Fall-oder-Kasus', note: 'Regeln und typische Zweifelsfälle zu den deutschen Fällen.' }
        ],
        exercises: [
            { id: 'kasus-01', type: 'multiple-choice', prompt: 'Bestimme den Fall des markierten Satzglieds: **Der neue Torwart** hält den Ball.', question: 'In welchem Fall steht „Der neue Torwart“?', options: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], answer: 'Nominativ', tip: 'Frage: Wer oder was hält den Ball?', explanation: '„Der neue Torwart“ ist das Subjekt. Nach ihm fragst du mit „Wer oder was hält den Ball?“ – das ist der Nominativ.' },
            { id: 'kasus-02', type: 'multiple-choice', prompt: '„Die Tasche **meiner Schwester** liegt im Bus.“ Welcher Fall ist markiert?', question: 'Bestimme den Fall von „meiner Schwester“.', options: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], answer: 'Genitiv', tip: 'Der Genitiv antwortet oft auf „Wessen?“', explanation: 'Wessen Tasche liegt im Bus? Die Tasche meiner Schwester. Die Frage „Wessen?“ zeigt den Genitiv.' },
            { id: 'kasus-03', type: 'word-click', prompt: 'Klicke das Satzglied im Dativ an.', tokens: ['Mila', 'leiht', 'ihrem', 'Nachbarn', 'das', 'Ladegerät.'], correctIndices: [2, 3], tip: 'Wem leiht Mila das Ladegerät?', explanation: '„Ihrem Nachbarn“ steht im Dativ: Wem leiht Mila das Ladegerät? Ihrem Nachbarn.' },
            { id: 'kasus-04', type: 'dropdown', prompt: 'Setze das passende Pronomen ein: „Kannst du ___ nach dem Training anrufen?“', sentence: 'Kannst du {{blank}} nach dem Training anrufen?', choices: ['ich', 'mich', 'mir', 'meiner'], answer: 'mich', tip: 'Anrufen verlangt hier die Frage „Wen?“', explanation: 'Wen kannst du anrufen? Mich. Das Verb „anrufen“ verlangt hier den Akkusativ.' },
            { id: 'kasus-05', type: 'fill-in', prompt: 'Ergänze den bestimmten Artikel: „Wir helfen ___ Trainer beim Aufräumen.“', sentence: 'Wir helfen ___ Trainer beim Aufräumen.', answer: 'dem', strictCase: true, tip: 'Helfen steht mit dem Dativ: Wem helfen wir?', explanation: '„Helfen“ verlangt den Dativ. Der maskuline Artikel „der“ wird im Dativ zu „dem“.' },
            { id: 'kasus-06', type: 'multiple-choice', prompt: '„Wegen **des starken Regens** fiel das Spiel aus.“ Welcher Fall ist markiert?', question: 'Bestimme den Fall.', options: ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], answer: 'Genitiv', tip: '„Wegen“ steht standardsprachlich meistens mit dem Genitiv.', explanation: 'Wegen wessen fiel das Spiel aus? Wegen des starken Regens. Das ist der Genitiv.' },
            { id: 'kasus-07', type: 'word-click', prompt: 'Klicke das Akkusativobjekt an.', tokens: ['Der', 'Praktikant', 'sortiert', 'die', 'Bewerbungsunterlagen.'], correctIndices: [3, 4], tip: 'Wen oder was sortiert der Praktikant?', explanation: '„Die Bewerbungsunterlagen“ ist das Akkusativobjekt: Was sortiert der Praktikant?' },
            { id: 'kasus-08', type: 'rewrite', prompt: 'Formuliere den Satz mit „der Freund“ im Dativ: „Ich schreibe dem Freund eine Nachricht.“', validAnswers: ['Ich schreibe dem Freund eine Nachricht.'], tip: 'Frage beim Empfänger: Wem schreibe ich?', explanation: 'Der Empfänger steht bei „schreiben“ im Dativ: wem? dem Freund. Die Nachricht steht im Akkusativ.' },
            { id: 'kasus-09', type: 'dropdown', prompt: 'Ergänze den passenden Fall: „Lena wartet auf ___ Bus.“', sentence: 'Lena wartet auf {{blank}} Bus.', choices: ['der', 'des', 'dem', 'den'], answer: 'den', tip: '„Warten auf“ verlangt hier den Akkusativ: auf wen oder was?', explanation: 'Die Präposition „auf“ steht bei „warten auf“ mit dem Akkusativ. „Der Bus“ wird zu „den Bus“.' },
            { id: 'kasus-10', type: 'sentence-builder', prompt: 'Baue einen Satz: Die Nachbarin gibt dem Jugendlichen einen Tipp.', cards: ['einen Tipp.', 'Die Nachbarin', 'dem Jugendlichen', 'gibt'], correctOrder: [1, 3, 2, 0], tip: 'Beginne mit dem Subjekt. Wem gibt sie den Tipp?', explanation: '„Die Nachbarin“ ist das Subjekt (Nominativ), „dem Jugendlichen“ der Empfänger (Dativ) und „einen Tipp“ das Objekt (Akkusativ).' }
        ]
    },
    {
        id: 'tempora', title: 'Zeitformen', icon: '⏱️',
        description: 'Präsens, Präteritum, Perfekt und Futur I sicher unterscheiden.',
        theory: 'Die Zeitform zeigt, wann eine Handlung geschieht. Das Präsens beschreibt Gegenwart oder Gewohnheiten: Ich trainiere. Das Präteritum beschreibt vergangene Ereignisse: Ich trainierte. Das Perfekt bildet man oft mit haben oder sein und dem Partizip II: Ich habe trainiert. Das Futur I verwendet werden + Infinitiv: Ich werde trainieren. Die Zeitform ist wichtig, weil sie den zeitlichen Rahmen eines Satzes eindeutig macht.',
        lesson: {
            overview: 'Zeitformen geben an, wann etwas geschieht. Die Zeitform ist deshalb ein wichtiges Signal für die Handlung im Satz und hilft dabei, Erzählungen, Planungen und Berichte richtig zu verstehen.',
            focusPoints: [
                'Präsens: Jetzt oder regelmäßig. Beispiele: Ich lerne, wir trainieren.',
                'Präteritum: Einfache Vergangenheit. Beispiele: Ich lernte, wir trainierten.',
                'Perfekt: Vergangenheit mit Hilfsverb und Partizip II. Beispiel: Ich habe gelernt.',
                'Futur I: Zukunft mit werden + Infinitiv. Beispiel: Ich werde lernen.'
            ],
            examples: [
                { title: 'Präsens', text: 'Heute sehe ich mir die Aufgaben an. — Handlung findet jetzt statt.' },
                { title: 'Präteritum', text: 'Gestern lief ich zum Training. — Handlung liegt in der Vergangenheit.' },
                { title: 'Perfekt', text: 'Ich habe meine Bewerbung schon abgeschickt. — Ergebnis der Vergangenheit ist wichtig.' },
                { title: 'Futur I', text: 'Morgen werde ich mich auf den Test vorbereiten. — Zukunft.' }
            ],
            sections: [
                {
                    title: '1. Zeitangaben und Verbformen prüfen',
                    text: 'Such nach einer Zeitangabe und danach nach der Verbform. Zeitangaben wie heute, gestern oder morgen sind Hinweise, nicht immer die alleinige Regel.',
                    points: [
                        'Heute und jetzt können das Präsens anzeigen.',
                        'Gestern und letztes Jahr weisen häufig auf Vergangenheit hin.',
                        'Morgen zeigt häufig eine Zukunftsplanung oder Absicht an.'
                    ]
                },
                {
                    title: '2. Perfekt als Verbgruppe verstehen',
                    text: 'Beim Perfekt besteht die Verbform aus Hilfsverb und Partizip II. Hilfsverb und Partizip dürfen nicht wie ein einzelnes Verb behandelt werden.',
                    points: [
                        'Haben wird bei den meisten Verben verwendet.',
                        'Sein erscheint häufig bei Bewegung oder Zustandswechsel.',
                        'Das Partizip II steht in der Regel am Satzende.'
                    ]
                },
                {
                    title: '3. Zeitform passend einsetzen',
                    text: 'In mündlichen Erzählungen kommt häufig das Perfekt vor, in schriftlichen Erzählungen oft das Präteritum. Wähle eine einheitliche Erzählweise.',
                    points: [
                        'Im Text nicht ständig zwischen Perfekt und Präteritum wechseln.',
                        'Das Futur I besteht aus werden und Infinitiv.',
                        'Das Präsens kann Gegenwart, Gewohnheit oder in seltenen Fällen Zukunft ausdrücken.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'IDS grammis: Tempus', url: 'https://grammis.ids-mannheim.de/vggf/2104', note: 'Zeitformen und ihre Verwendung im Deutschen.' },
            { title: 'Duden: Perfekt und Präteritum', url: 'https://www.duden.de/sprachwissen/sprachratgeber/Perfekt-und-Praeteritum', note: 'Hilfen zur Wahl der Vergangenheitsformen.' }
        ],
        exercises: [
            { id: 'tempora-01', type: 'multiple-choice', prompt: 'Welche Zeitform hat der Satz: „Wir trainieren heute in der Halle.“', question: 'Bestimme die Zeitform.', options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], answer: 'Präsens', tip: 'Die Handlung findet jetzt oder regelmäßig statt.', explanation: '„Trainieren“ ist die finite Verbform im Präsens. Der Satz beschreibt eine aktuelle Handlung.' },
            { id: 'tempora-02', type: 'multiple-choice', prompt: '„Gestern schrieb Amir seine Bewerbung.“ Welche Zeitform ist das?', question: 'Bestimme die Zeitform.', options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], answer: 'Präteritum', tip: 'Achte auf die einfache Vergangenheitsform „schrieb“.', explanation: '„Schrieb“ ist die Präteritumform von „schreiben“.' },
            { id: 'tempora-03', type: 'fill-in', prompt: 'Setze „laden“ im Perfekt ein: „Sie ___ das Video hochgeladen.“', sentence: 'Sie ___ das Video hochgeladen.', answer: 'hat', strictCase: true, tip: 'Das Verb „hochladen“ bildet das Perfekt mit „haben“.', explanation: 'Das Perfekt besteht hier aus „hat“ und dem Partizip II „hochgeladen“.' },
            { id: 'tempora-04', type: 'rewrite', prompt: 'Setze den Satz ins Präteritum: „Die Mannschaft gewinnt das Spiel.“', validAnswers: ['Die Mannschaft gewann das Spiel.'], tip: 'Die Präteritumform von „gewinnen“ ist unregelmäßig.', explanation: '„Gewinnen“ wird im Präteritum zu „gewann“: Die Mannschaft gewann das Spiel.' },
            { id: 'tempora-05', type: 'dropdown', prompt: 'Wähle die passende Verbform im Futur I: „Morgen ___ ich mein Praktikum beginnen.“', sentence: 'Morgen {{blank}} ich mein Praktikum beginnen.', choices: ['habe', 'werde', 'bin', 'hatte'], answer: 'werde', tip: 'Futur I: werden + Infinitiv.', explanation: 'Das Futur I wird mit einer Form von „werden“ und dem Infinitiv gebildet: werde beginnen.' },
            { id: 'tempora-06', type: 'word-click', prompt: 'Klicke die Verbform im Perfekt an.', tokens: ['Wir', 'haben', 'nach', 'dem', 'Training', 'lange', 'geduscht.'], correctIndices: [1], tip: 'Das Perfekt besteht aus Hilfsverb und Partizip II.', explanation: '„Haben geduscht“ ist das Perfekt. Das Partizip II steht am Satzende.' },
            { id: 'tempora-07', type: 'sentence-builder', prompt: 'Ordne die Wörter zu einem Satz im Perfekt: „Ich habe gestern meine Freundin besucht.“', cards: ['gestern', 'besucht.', 'Ich', 'meine Freundin', 'habe'], correctOrder: [2, 4, 0, 3, 1], tip: 'Das Partizip II steht im Aussagesatz am Ende.', explanation: 'Das Perfekt wird mit „habe“ und „besucht“ gebildet; das Partizip steht am Ende.' },
            { id: 'tempora-08', type: 'rewrite', prompt: 'Setze den Satz ins Perfekt: „Der Bus kam zu spät.“', validAnswers: ['Der Bus ist zu spät gekommen.'], tip: '„Kommen“ bildet das Perfekt mit „sein“.', explanation: 'Bei einer Ortsveränderung steht „kommen“ im Perfekt mit „sein“: ist gekommen.' },
            { id: 'tempora-09', type: 'multiple-choice', prompt: '„In den Ferien werden wir ans Meer fahren.“ Welche Zeitform ist das?', question: 'Bestimme die Zeitform.', options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], answer: 'Futur I', tip: 'Suche die Form von „werden“ und den Infinitiv.', explanation: '„Werden fahren“ bildet das Futur I und drückt eine zukünftige Handlung aus.' },
            { id: 'tempora-10', type: 'error-correction', prompt: 'Korrigiere den Satz. Achte auf die passende Vergangenheitsform.', sentence: 'Letzte Woche habe ich mein Praktikum begonnen.', validAnswers: ['Letzte Woche begann ich mein Praktikum.', 'Letzte Woche habe ich mein Praktikum begonnen.'], tip: 'In Erzählungen passt oft das Präteritum; im Gespräch ist das Perfekt ebenfalls möglich.', explanation: '„Begann“ ist das Präteritum von „beginnen“. Auch das grammatisch korrekte Perfekt ist hier zulässig.' }
        ]
    },
    {
        id: 'aktiv-passiv', title: 'Aktiv und Passiv', icon: '🔄',
        description: 'Handelnde Personen und Vorgänge im Passiv ausdrücken.',
        theory: 'Im Aktiv liegt die Handlung beim Subjekt: Die Trainerin erklärt die Regeln. Im Passiv steht das Objekt im Vordergrund: Die Regeln werden erklärt. Das Passiv wird meist mit einer Form von werden und dem Partizip II gebildet. Das aktive Subjekt kann dabei weggelassen oder mit von + Dativ ergänzt werden. Das Passiv ist besonders in Berichten, Anleitungen und Nachrichten wichtig, weil es sachlicher und weniger subjektiv klingt.',
        lesson: {
            overview: 'Aktiv und Passiv zeigen, ob die handelnde Person im Vordergrund steht oder ob die Handlung auf die Sache fokussiert wird. Die Sprache wirkt dann sachlicher oder persönlicher, je nach Zweck des Satzes.',
            focusPoints: [
                'Aktiv: Das Subjekt handelt. Beispiel: Der Coach erklärt die Übung.',
                'Passiv: Das Objekt steht im Fokus. Beispiel: Die Übung wird erklärt.',
                'Bildung: werden + Partizip II.',
                'Achtung: Das handelnde Subjekt kann mit „von + Dativ“ ergänzt werden.'
            ],
            examples: [
                { title: 'Aktiv', text: 'Die Klasse organisiert das Sportfest. — Das Subjekt tut etwas.' },
                { title: 'Passiv', text: 'Das Sportfest wird von der Klasse organisiert. — Das Ergebnis ist wichtig.' },
                { title: 'Präzise Formulierung', text: 'Die Aufgaben werden verteilt. — Sachliche und neutrale Sprache.' }
            ],
            sections: [
                {
                    title: '1. Vom Aktor zur betroffenen Sache',
                    text: 'Stelle fest, wer handelt und was betroffen ist. Im Aktiv führt das handelnde Subjekt die Tätigkeit aus; im Passiv steht die betroffene Sache im Fokus.',
                    points: [
                        'Aktiv: Der Hausmeister repariert das Tor.',
                        'Passiv: Das Tor wird repariert.',
                        'Die handelnde Person kann mit von oder durch ergänzt werden.'
                    ]
                },
                {
                    title: '2. Die Passivform erkennen',
                    text: 'Das Vorgangspassiv besteht aus einer Form von werden und dem Partizip II. Die Form von werden bestimmt die Zeit.',
                    points: [
                        'Präsens: wird/wird ... repariert.',
                        'Präteritum: wurde/wurden ... repariert.',
                        'Das Partizip II bleibt bei der Umformung unverändert.'
                    ]
                },
                {
                    title: '3. Aktiv und Passiv gezielt umformen',
                    text: 'Beim Umformen wird das Akkusativobjekt zum Subjekt. Die handelnde Person wird im Aktiv wieder zum Subjekt.',
                    points: [
                        'Mia wirft den Ball. -> Der Ball wird von Mia geworfen.',
                        'Das Passiv lässt die handelnde Person weg, wenn sie unwichtig ist.',
                        'Achte nach der Umformung auf die richtige Form von werden.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'IDS grammis: Passiv', url: 'https://grammis.ids-mannheim.de/vggf/2230', note: 'Bildung und Funktion des Vorgangspassivs.' },
            { title: 'Duden: Aktiv und Passiv', url: 'https://www.duden.de/sprachwissen/sprachratgeber/Aktiv-Passiv', note: 'Gebrauch und Umformung von Aktiv- und Passivsätzen.' }
        ],
        exercises: [
            { id: 'passiv-01', type: 'multiple-choice', prompt: '„Die Trainerin erklärt die neue Taktik.“ Aktiv oder Passiv?', question: 'Welche Aussage passt?', options: ['Aktiv', 'Passiv', 'Infinitiv', 'Keine Verbform'], answer: 'Aktiv', tip: 'Im Aktiv handelt das Subjekt selbst.', explanation: 'Die Trainerin führt die Handlung aus. Das Subjekt ist die handelnde Person – deshalb Aktiv.' },
            { id: 'passiv-02', type: 'rewrite', prompt: 'Forme ins Vorgangspassiv um: „Der Hausmeister repariert das Tor.“', validAnswers: ['Das Tor wird vom Hausmeister repariert.', 'Das Tor wird durch den Hausmeister repariert.'], tip: 'Passiv im Präsens: werden + Partizip II; das Objekt rückt nach vorn.', explanation: 'Das Akkusativobjekt „das Tor“ wird zum Subjekt. „Wird repariert“ bildet das Vorgangspassiv im Präsens.' },
            { id: 'passiv-03', type: 'dropdown', prompt: 'Ergänze die Passivform: „Die Fotos ___ heute noch sortiert.“', sentence: 'Die Fotos {{blank}} heute noch sortiert.', choices: ['sortieren', 'wird', 'werden', 'wurden'], answer: 'werden', tip: 'Das Subjekt „Die Fotos“ steht im Plural.', explanation: 'Das Passiv im Präsens lautet „werden + Partizip II“. Bei „die Fotos“ steht „werden“.' },
            { id: 'passiv-04', type: 'word-click', prompt: 'Klicke die Verbteile des Passivs an.', tokens: ['Die', 'Klassenfahrt', 'wird', 'von', 'der', 'Klasse', 'geplant.'], correctIndices: [2, 6], tip: 'Suche die Form von „werden“ und das Partizip II.', explanation: '„Wird geplant“ ist das Passiv: Hilfsverb „wird“ plus Partizip II „geplant“.' },
            { id: 'passiv-05', type: 'rewrite', prompt: 'Forme ins Aktiv um: „Der Bericht wird von Nele geschrieben.“', validAnswers: ['Nele schreibt den Bericht.'], tip: 'Die handelnde Person wird im Aktiv zum Subjekt.', explanation: '„Nele“ handelt. Im Aktiv wird sie zum Subjekt; „den Bericht“ ist das Akkusativobjekt.' },
            { id: 'passiv-06', type: 'multiple-choice', prompt: '„Die Nachrichten wurden am Abend verschickt.“ In welcher Zeit steht das Passiv?', question: 'Bestimme die Zeitform.', options: ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], answer: 'Präteritum', tip: 'Die Form „wurden“ ist Präteritum von „werden“.', explanation: '„Wurden verschickt“ ist das Vorgangspassiv im Präteritum.' },
            { id: 'passiv-07', type: 'sentence-builder', prompt: 'Baue das Passiv: „Die Sporthalle wird morgen gereinigt.“', cards: ['gereinigt.', 'morgen', 'Die Sporthalle', 'wird'], correctOrder: [2, 3, 1, 0], tip: 'Das Passiv besteht aus „werden“ und Partizip II.', explanation: 'Im Präsens steht „wird“ vor dem Partizip II „gereinigt“, das am Satzende steht.' },
            { id: 'passiv-08', type: 'fill-in', prompt: 'Ergänze die passende Form von „werden“: „Die E-Mail ___ sofort beantwortet.“', sentence: 'Die E-Mail ___ sofort beantwortet.', answer: 'wird', strictCase: true, tip: '„Die E-Mail“ ist Einzahl.', explanation: 'Beim Passiv im Präsens steht bei einem Subjekt im Singular „wird“.' },
            { id: 'passiv-09', type: 'error-correction', prompt: 'Korrigiere den Passivsatz. Prüfe die Verbform zum Subjekt „die Plakate“.', sentence: 'Die Plakate wird für das Sportfest aufgehängt.', validAnswers: ['Die Plakate werden für das Sportfest aufgehängt.'], tip: '„Die Plakate“ steht im Plural.', explanation: 'Das Subjekt steht im Plural, daher muss das Hilfsverb „werden“ lauten.' },
            { id: 'passiv-10', type: 'rewrite', prompt: 'Forme ins Vorgangspassiv um: „Man öffnet die Turnhalle um acht Uhr.“', validAnswers: ['Die Turnhalle wird um acht Uhr geöffnet.', 'Um acht Uhr wird die Turnhalle geöffnet.'], tip: '„Man“ fällt im Passiv meist weg; das Objekt wird zum Subjekt.', explanation: 'Das Akkusativobjekt „die Turnhalle“ wird zum Subjekt. Das Passiv lautet „wird geöffnet“.' }
        ]
    },
    {
        id: 'wortarten', title: 'Wortarten', icon: '🔎',
        description: 'Nomen, Verben, Adjektive, Pronomen, Präpositionen und Konjunktionen erkennen.',
        theory: 'Wortarten helfen dabei, Wörter nach ihrer Funktion zu ordnen. Nomen benennen Personen, Dinge oder Begriffe, Verben zeigen Handlungen oder Zustände, Adjektive beschreiben Eigenschaften und Pronomen ersetzen oder begleiten Nomen. Präpositionen verbinden Wörter miteinander und geben Verhältnisse an, etwa Zeit, Ort oder Richtung. Konjunktionen verknüpfen Satzteile oder Sätze. Wer Wortarten sicher erkennt, kann Satzbau, Rechtschreibung und Bedeutung besser verstehen.',
        lesson: {
            overview: 'Wortarten sind die „Bausteine“ eines Satzes. Sie verraten, welche Rolle ein Wort im Satz spielt und machen Grammatik verständlicher.',
            focusPoints: [
                'Nomen: Namen von Personen, Dingen oder Begriffen. Sie sind immer großgeschrieben.',
                'Verben: Handlungen, Vorgänge oder Zustände. Sie sind die Kernstücke des Satzes.',
                'Adjektive: Beschreiben Eigenschaften oder Merkmale.',
                'Pronomen: Ersetzen oder begleiten Nomen.',
                'Präpositionen: Zeigen Ort, Zeit oder Richtung an.',
                'Konjunktionen: Verknüpfen Satzteile oder Sätze.'
            ],
            examples: [
                { title: 'Nomen', text: 'Die Schule, der Lehrer, das Wissen.' },
                { title: 'Verb', text: 'lernen, laufen, schreiben.' },
                { title: 'Adjektiv', text: 'schnell, freundlich, wichtig.' },
                { title: 'Präposition', text: 'in, auf, zwischen, wegen.' }
            ],
            sections: [
                {
                    title: '1. Die Wortrolle bestimmen',
                    text: 'Wortarten beschreiben die Rolle eines Wortes in einem bestimmten Satz. Dasselbe Wort kann je nach Satz sogar eine andere Rolle haben.',
                    points: [
                        'Frage bei Verben: Was geschieht oder was wird gemacht?',
                        'Frage bei Adjektiven: Wie ist oder geschieht etwas?',
                        'Prüfe bei Pronomen, ob ein Nomen ersetzt oder begleitet wird.'
                    ]
                },
                {
                    title: '2. Nomen und Adjektive unterscheiden',
                    text: 'Nomen benennen Gegenstände, Personen, Gefühle oder Begriffe. Adjektive beschreiben Eigenschaften oder Zustände.',
                    points: [
                        'Nomen werden großgeschrieben.',
                        'Adjektive bleiben kleingeschrieben, wenn sie kein Nomen ersetzen.',
                        'Bei Nominalisierung können Verben oder Adjektive wie Nomen behandelt werden.'
                    ]
                },
                {
                    title: '3. Verbindungswörter erkennen',
                    text: 'Präpositionen stellen Beziehungen her und bilden mit einem Nomen eine Gruppe. Konjunktionen verbinden Wörter, Satzteile oder ganze Sätze.',
                    points: [
                        'Präpositionen nennen Ort, Zeit oder Richtung: in, an, wegen.',
                        'Nebenordnende Konjunktionen verbinden gleichrangige Teile.',
                        'Unterordnende Konjunktionen wie weil oder obwohl leiten Nebensätze ein.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'IDS grammis: Wortarten', url: 'https://grammis.ids-mannheim.de/vggf/2169', note: 'Überblick über die deutschen Wortarten und ihre Merkmale.' },
            { title: 'Duden: Wortarten', url: 'https://www.duden.de/sprachwissen/sprachratgeber/Wortarten', note: 'Erläuterungen zu Nomen, Verben, Adjektiven und weiteren Wortarten.' }
        ],
        exercises: [
            { id: 'wort-01', type: 'multiple-choice', prompt: 'Welche Wortart hat „zuverlässig“ in „Mina arbeitet zuverlässig“?', question: 'Wähle die passende Wortart.', options: ['Nomen', 'Verb', 'Adjektiv', 'Präposition'], answer: 'Adjektiv', tip: 'Adjektive beschreiben Eigenschaften oder wie etwas geschieht.', explanation: '„Zuverlässig“ beschreibt, wie Mina arbeitet. Es ist ein Adjektiv.' },
            { id: 'wort-02', type: 'word-click', prompt: 'Klicke alle Nomen an.', tokens: ['Nach', 'dem', 'Training', 'trinkt', 'Ben', 'Wasser.'], correctIndices: [2, 4, 5], tip: 'Nomen bezeichnen Menschen, Dinge oder Begriffe und werden großgeschrieben.', explanation: '„Training“, „Ben“ und „Wasser“ sind Nomen. „Nach“ ist eine Präposition, „trinkt“ ein Verb.' },
            { id: 'wort-03', type: 'dropdown', prompt: 'Bestimme die Wortart: „Wir bleiben drinnen, ___ es regnet.“', sentence: 'Wir bleiben drinnen, {{blank}} es regnet.', choices: ['obwohl', 'weil', 'aber', 'oder'], answer: 'weil', tip: 'Gesucht ist eine Konjunktion, die einen Grund einleitet.', explanation: '„Weil“ ist eine unterordnende Konjunktion und leitet einen Begründungssatz ein.' },
            { id: 'wort-04', type: 'multiple-choice', prompt: 'Welche Wortart hat „zwischen“ im Satz „Der Ball liegt zwischen den Taschen“?', question: 'Wähle die passende Wortart.', options: ['Pronomen', 'Präposition', 'Verb', 'Adjektiv'], answer: 'Präposition', tip: 'Präpositionen stehen oft vor einem Nomen und beschreiben Beziehungen.', explanation: '„Zwischen“ beschreibt die Lage des Balls und steht vor „den Taschen“ – es ist eine Präposition.' },
            { id: 'wort-05', type: 'word-click', prompt: 'Klicke das Pronomen an.', tokens: ['Sie', 'schickt', 'ihrem', 'Bruder', 'ein', 'Foto.'], correctIndices: [0, 2], tip: 'Pronomen können Nomen ersetzen oder begleiten.', explanation: '„Sie“ ersetzt einen Namen; „ihrem“ begleitet „Bruder“. Beide sind Pronomen.' },
            { id: 'wort-06', type: 'fill-in', prompt: 'Wie heißt die Wortart des Wortes „springen“? Schreibe ein.', sentence: '„springen“ ist ein ___.', answer: 'Verb', strictCase: true, tip: 'Verben drücken Handlungen, Vorgänge oder Zustände aus.', explanation: '„Springen“ bezeichnet eine Handlung und ist ein Verb.' },
            { id: 'wort-07', type: 'sentence-builder', prompt: 'Ordne zu einem Satz mit einer Konjunktion: „Ich nehme eine Jacke mit, obwohl es warm ist.“', cards: ['es warm ist.', 'Ich', 'obwohl', 'nehme', 'eine Jacke mit,'], correctOrder: [1, 3, 4, 2, 0], tip: 'Nach „obwohl“ steht das finite Verb im Nebensatz am Ende.', explanation: '„Obwohl“ leitet einen Nebensatz ein. Deshalb steht das Verb „ist“ am Ende.' },
            { id: 'wort-08', type: 'multiple-choice', prompt: 'Welche Wortart hat „Ehrlichkeit“?', question: 'Wähle die passende Wortart.', options: ['Nomen', 'Verb', 'Adjektiv', 'Konjunktion'], answer: 'Nomen', tip: 'Auch Gefühle und Eigenschaften können Nomen sein.', explanation: '„Ehrlichkeit“ ist ein abstraktes Nomen und wird großgeschrieben.' },
            { id: 'wort-09', type: 'word-click', prompt: 'Klicke das Verb an.', tokens: ['Der', 'neue', 'Rucksack', 'passt', 'perfekt', 'zum', 'Praktikum.'], correctIndices: [3], tip: 'Frage: Was tut oder ist das Subjekt?', explanation: '„Passt“ ist das Verb und sagt aus, was der Rucksack tut beziehungsweise wie er geeignet ist.' },
            { id: 'wort-10', type: 'error-correction', prompt: 'Korrigiere die falsche Großschreibung des Adjektivs.', sentence: 'Der Film war Spannend und Lustig.', validAnswers: ['Der Film war spannend und lustig.'], tip: 'Nach „war“ bleiben diese beschreibenden Adjektive kleingeschrieben.', explanation: '„Spannend“ und „lustig“ sind hier Adjektive und werden kleingeschrieben.' }
        ]
    },
    {
        id: 'rechtschreibung', title: 'das/dass und s/ss/ß', icon: '✍️',
        description: 'Typische Rechtschreibfallen in Nachrichten, Schule und Bewerbung meistern.',
        theory: 'Bei „das“ und „dass“ ist die Schreibweise entscheidend: Das ist ein Artikel, Pronomen oder Relativwort; dass ist eine Konjunktion, die einen Nebensatz einleitet. Bei s, ss und ß gilt die Regel: Nach kurzem Vokal steht meist ss, nach langem Vokal oder Doppellaut steht oft ß. Viele Fehler entstehen durch Unsicherheit beim Satzbau oder beim Aussprechen. Einfache Merksätze wie „dass = Nebensatz, das = Artikel oder Pronomen“ und „langes Wort, langes Lautzeichen“ helfen beim sicheren Schreiben.',
        lesson: {
            overview: 'Rechtschreibung hängt oft an kleinen Zeichen und Wörtern. Gerade bei „das/dass“ und „s/ss/ß“ entsteht viel Unsicherheit – doch mit klaren Regeln werden diese Fehler leicht vermeidbar.',
            focusPoints: [
                'das = Artikel, Pronomen oder Relativwort; dass = Konjunktion bei Nebensätzen.',
                'Kurzvokal + kurzer Laut -> oft ss: Fluss, Klasse, Strasse.',
                'Langer Vokal oder Doppellaut -> oft ß: Straße, groß, Fuß.',
                'Merksatz: „dass“ leitet Nebensätze ein, „das“ kann man oft durch „dieses“ oder „welches“ ersetzen.'
            ],
            examples: [
                { title: 'das', text: 'Das Auto steht vor dem Haus. — Artikel.' },
                { title: 'dass', text: 'Ich weiß, dass du morgen kommst. — Nebensatz mit Konjunktion.' },
                { title: 'ss', text: 'fließen, Strasse, Klasse.' },
                { title: 'ß', text: 'Straße, groß, Fuß, Maß.' }
            ],
            sections: [
                {
                    title: '1. das oder dass mit der Ersatzprobe',
                    text: 'Prüfe, ob das Wort ein Artikel, ein Pronomen oder ein Relativwort ist. Ein Nebensatz wird dagegen mit dass eingeleitet.',
                    points: [
                        'Kannst du dieses oder jenes einsetzen, passt meist das.',
                        'Kannst du welches einsetzen, ist das ein Relativpronomen.',
                        'Leitet dass einen Nebensatz ein, wird es mit ss geschrieben.'
                    ]
                },
                {
                    title: '2. s, ss oder ß durch die Aussprache prüfen',
                    text: 'Sprich das Wort langsam und höre auf den vorherigen Vokal. Eine kurze betonte Silbe wird oft mit ss geschrieben.',
                    points: [
                        'Kurz: nass, Klasse, Fluss.',
                        'Lang oder Doppellaut: Straße, groß, Fuß.',
                        'Bei Unsicherheit hilft ein verwandtes Wort oder die Wortfamilie.'
                    ]
                },
                {
                    title: '3. Satz und Wort zugleich kontrollieren',
                    text: 'Bei einem Rechtschreibfehler können mehrere Regeln zusammenkommen. Prüfe zuerst Satzbau und Wortart, danach die s-Schreibung.',
                    points: [
                        'Vor Nebensätzen steht häufig ein Komma.',
                        'Nomen werden großgeschrieben.',
                        'Kontrolliere das neue Wort noch einmal im vollständigen Satz.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'Duden: Das oder dass', url: 'https://www.duden.de/sprachwissen/rechtschreibregeln/das-dass', note: 'Ersatzprobe und Schreibweise von das beziehungsweise dass.' },
            { title: 'Duden: s, ss oder ß', url: 'https://www.duden.de/sprachwissen/rechtschreibregeln/s-ss-ss', note: 'Lautorientierte Regeln für s, ss und ß.' }
        ],
        exercises: [
            { id: 'recht-01', type: 'dropdown', prompt: '„Ich finde, ___ unser Team gut gespielt hat.“', sentence: 'Ich finde, {{blank}} unser Team gut gespielt hat.', choices: ['das', 'dass'], answer: 'dass', tip: 'Leitet das Wort einen Nebensatz ein? Dann meist „dass“.', explanation: '„Dass“ leitet den Nebensatz „dass unser Team gut gespielt hat“ ein. Die Ersatzprobe mit „welches“ passt nicht.' },
            { id: 'recht-02', type: 'fill-in', prompt: 'Setze „das“ oder „dass“ ein. Achte auf die genaue Schreibweise: „___ Video, ___ du geteilt hast, ist witzig.“', sentence: '___ Video, ___ du geteilt hast, ist witzig.', answer: 'Das, das', strictCase: true, tip: 'Vor „Video“ passt „dieses“. Beim zweiten Wort passt „welches“.', explanation: '„Das Video“ enthält den Artikel „das“. Im Relativsatz kannst du „das“ durch „welches“ ersetzen.' },
            { id: 'recht-03', type: 'multiple-choice', prompt: 'Welche Schreibweise ist richtig?', question: '„Ich weiß, ___ du recht hast.“', options: ['das', 'dass', 'daß', 'dasss'], answer: 'dass', tip: 'Nach „Ich weiß,“ folgt ein Nebensatz.', explanation: 'Die Konjunktion „dass“ leitet den Nebensatz ein. „Daß“ ist die alte Rechtschreibung.' },
            { id: 'recht-04', type: 'dropdown', prompt: 'Wähle die richtige Schreibweise: „Der Weg war ___.“', sentence: 'Der Weg war {{blank}}.', choices: ['nass', 'naß', 'nas', 'naass'], answer: 'nass', tip: 'Nach einem kurzen betonten Vokal folgt oft „ss“.', explanation: 'Der Vokal in „nass“ ist kurz, daher schreibt man nach der Regel „ss“.' },
            { id: 'recht-05', type: 'fill-in', prompt: 'Ergänze das fehlende Wort: „Vor dem Tor endet die lange ___.“', sentence: 'Vor dem Tor endet die lange ___.', answer: 'Straße', strictCase: true, tip: 'Nach einem langen Vokal steht häufig „ß“.', explanation: '„Straße“ wird nach dem langen „a“ mit „ß“ geschrieben.' },
            { id: 'recht-06', type: 'error-correction', prompt: 'Korrigiere den Satz: Prüfe „das/dass“ und die s-Schreibung.', sentence: 'Ich glaube das der Ausflug spaß macht.', validAnswers: ['Ich glaube, dass der Ausflug Spaß macht.'], tip: 'Nebensatz mit „dass“; Nomen werden großgeschrieben.', explanation: 'Nach „Ich glaube“ steht ein Komma vor dem dass-Satz. „Dass“ ist die Konjunktion, und „Spaß“ ist ein Nomen.' },
            { id: 'recht-07', type: 'multiple-choice', prompt: 'Welche Schreibweise ist richtig?', question: 'Der Akku ist fast ___.', options: ['leer', 'lehr', 'leähr', 'lähr'], answer: 'leer', tip: 'Gesucht ist das Gegenteil von „voll“.', explanation: '„Leer“ bedeutet, dass nichts mehr enthalten ist. „Lehr“ gehört zum Wortfeld „Lehrer“.' },
            { id: 'recht-08', type: 'word-click', prompt: 'Klicke das Wort an, in dem „ß“ richtig geschrieben ist.', tokens: ['Der', 'Fußball', 'rollt', 'über', 'den', 'Rasen.'], correctIndices: [1], tip: 'Nach langem Vokal oder Doppellaut steht oft „ß“.', explanation: '„Fußball“ wird mit „ß“ geschrieben, weil der Vokal „u“ lang gesprochen wird.' },
            { id: 'recht-09', type: 'rewrite', prompt: 'Schreibe den Satz richtig: „Ich hoffe das dass Wetter hält.“', validAnswers: ['Ich hoffe, dass das Wetter hält.'], tip: 'Die Konjunktion „dass“ leitet den Nebensatz ein; vor „Wetter“ steht der Artikel „das“.', explanation: '„Dass“ verbindet Haupt- und Nebensatz. „Das Wetter“ ist eine Nomengruppe. Vor dem Nebensatz steht ein Komma.' },
            { id: 'recht-10', type: 'dropdown', prompt: '„___ Fahrrad, ___ vor der Schule steht, gehört mir.“', sentence: '{{blank}} Fahrrad, {{blank2}} vor der Schule steht, gehört mir.', choices: [['Das', 'Dass'], ['das', 'dass']], answer: ['Das', 'das'], tip: 'Vor „Fahrrad“ steht ein Artikel; das zweite Wort kann „welches“ ersetzen.', explanation: 'Beide Wörter sind „das“: zuerst der Artikel vor dem Nomen, danach das Relativpronomen im Sinn von „welches“.' }
        ]
    },
    {
        id: 'gross-klein', title: 'Groß- und Kleinschreibung', icon: '🔠',
        description: 'Nominalisierungen erkennen: beim Laufen, etwas Wichtiges und mehr.',
        theory: 'Bei der Groß- und Kleinschreibung gilt: Nomen werden immer großgeschrieben. Wenn ein Verb oder Adjektiv als Nomen gebraucht wird, nennt man das Nominalisierung. Beispiele sind „beim Laufen“, „das Schreiben“, „etwas Wichtiges“ oder „alles Gute“. Dabei bleibt die Bedeutung erhalten, aber die Wortform ist wie ein Substantiv behandelt. Das ist besonders in Texten über Alltag, Sport und Bewerbungen wichtig, weil solche Formulierungen häufig vorkommen.',
        lesson: {
            overview: 'Nominalisierung bedeutet: Verben oder Adjektive werden wie Nomen gebraucht. Dann werden sie großgeschrieben. Das ist in vielen Alltags- und Bewerbungsformulierung häufig.',
            focusPoints: [
                'Nach Artikeln wie „das“, „ein“ oder „beim“ können Verben und Adjektive nominalisiert werden.',
                'Beispiele: beim Laufen, das Schreiben, etwas Wichtiges, alles Gute.',
                'Nomen werden immer großgeschrieben – auch wenn das Wort ursprünglich kein Nomen war.',
                'Achtung: Der Satz bleibt grammatisch korrekt, aber die Form wird substantiviert.'
            ],
            examples: [
                { title: 'beim Laufen', text: 'Beim Laufen höre ich Musik. — „Laufen“ wird als Nomen genutzt.' },
                { title: 'das Schreiben', text: 'Das Schreiben fällt mir leicht. — Nominalisierter Infinitiv.' },
                { title: 'etwas Wichtiges', text: 'Ich habe etwas Wichtiges gelernt. — Das Adjektiv wird zu einem Nomen.' }
            ],
            sections: [
                {
                    title: '1. Hinweise auf Nominalisierung finden',
                    text: 'Achte auf Artikel, Präpositionen mit Artikel oder unbestimmte Mengenangaben. Sie können anzeigen, dass ein Verb oder Adjektiv als Nomen gebraucht wird.',
                    points: [
                        'das Schreiben, das Lachen',
                        'beim Lesen, zum Kochen',
                        'etwas Neues, alles Gute'
                    ]
                },
                {
                    title: '2. Großschreibung begründen',
                    text: 'Ist ein Wort in einen Nomengebrauch überführt, erhält es die Großschreibung eines Nomen. Die Begründung sollte sich auf den Artikel oder die Mengenangabe beziehen.',
                    points: [
                        'Artikel: das Lesen',
                        'Präposition mit Artikel: beim Laufen',
                        'Unbestimmtes Fürwort: etwas Wichtiges'
                    ]
                },
                {
                    title: '3. Adjektive nach der Nominalisierung prüfen',
                    text: 'Ein nominalisiertes Adjektiv erhält je nach Begleitwort eine starke oder schwache Adjektivendung. Beginne mit der sicheren Großschreibung und prüfe dann die Endung.',
                    points: [
                        'etwas Neues',
                        'nichts Gutes',
                        'alles Schöne',
                        'viele Wichtige'
                    ]
                }
            ]
        },
        sources: [
            { title: 'Duden: Groß- und Kleinschreibung', url: 'https://www.duden.de/sprachwissen/rechtschreibregeln/gross-kleinschreibung', note: 'Grundregeln und Nominalisierungen.' },
            { title: 'IDS grammis: Nominalisierung', url: 'https://grammis.ids-mannheim.de/vggf/2204', note: 'Substantivierung von Verben und Adjektiven.' }
        ],
        exercises: [
            { id: 'gross-01', type: 'multiple-choice', prompt: 'Welche Schreibweise ist richtig?', question: '„Beim ___ kann ich gut abschalten.“', options: ['laufen', 'Laufen', 'Laufen,', 'LAUFEN'], answer: 'Laufen', tip: 'Auf „beim“ folgt häufig ein nominalisierter Infinitiv.', explanation: '„Beim“ ist die Verschmelzung aus „bei dem“. Der Infinitiv wird dadurch als Nomen gebraucht und großgeschrieben.' },
            { id: 'gross-02', type: 'fill-in', prompt: 'Ergänze das nominalisierte Adjektiv: „Im Praktikum habe ich viel ___ gelernt.“', sentence: 'Im Praktikum habe ich viel ___ gelernt.', answer: 'Wichtiges', strictCase: true, tip: 'Nach „viel“ kann ein Adjektiv als Nomen gebraucht werden.', explanation: '„Wichtiges“ steht ohne Bezugsnomen und wird nominalisiert – deshalb schreibt man es groß.' },
            { id: 'gross-03', type: 'dropdown', prompt: '„Das ___ auf dem Sportplatz macht Spaß.“', sentence: 'Das {{blank}} auf dem Sportplatz macht Spaß.', choices: ['trainieren', 'Trainieren', 'Trainieren,', 'TRAINIEREN'], answer: 'Trainieren', tip: 'Der Artikel „das“ zeigt hier eine Nominalisierung an.', explanation: 'Der Infinitiv „trainieren“ wird mit Artikel als Nomen verwendet und großgeschrieben.' },
            { id: 'gross-04', type: 'error-correction', prompt: 'Korrigiere die Groß- und Kleinschreibung.', sentence: 'Nach dem schwimmen esse ich etwas gesundes.', validAnswers: ['Nach dem Schwimmen esse ich etwas Gesundes.'], tip: 'Auf „dem“ und „etwas“ folgen hier nominalisierte Wörter.', explanation: '„Schwimmen“ wird nach „dem“ nominalisiert; „Gesundes“ steht als Nomen nach „etwas“. Beide werden großgeschrieben.' },
            { id: 'gross-05', type: 'word-click', prompt: 'Klicke alle nominalisierten Wörter an.', tokens: ['Das', 'laute', 'Lachen', 'und', 'das', 'Rennen', 'waren', 'anstrengend.'], correctIndices: [2, 5], tip: 'Artikel vor einem Verb können auf eine Nominalisierung hinweisen.', explanation: '„Lachen“ und „Rennen“ sind substantivierte Infinitive und werden großgeschrieben.' },
            { id: 'gross-06', type: 'multiple-choice', prompt: 'Welche Form passt?', question: '„Sie wünscht dir alles ___.“', options: ['gute', 'Gute', 'GUTE', 'güte'], answer: 'Gute', tip: 'Nach „alles“ kann ein Adjektiv als Nomen stehen.', explanation: '„Gute“ ist hier nominalisiert: alles Gute. Deshalb wird es großgeschrieben.' },
            { id: 'gross-07', type: 'sentence-builder', prompt: 'Ordne den Satz richtig: „Beim Radfahren trage ich immer einen Helm.“', cards: ['einen Helm.', 'Beim', 'trage', 'Radfahren', 'ich', 'immer'], correctOrder: [1, 3, 4, 5, 2, 0], tip: '„Beim“ und der nominalisierte Infinitiv bilden den Satzanfang.', explanation: 'Nach „beim“ wird „Radfahren“ großgeschrieben. Das finite Verb „trage“ steht im Hauptsatz an zweiter Stelle.' },
            { id: 'gross-08', type: 'dropdown', prompt: '„Das ___ der Bewerbung hat länger gedauert.“', sentence: 'Das {{blank}} der Bewerbung hat länger gedauert.', choices: ['schreiben', 'Schreiben', 'Schreiben,', 'schreiben,'], answer: 'Schreiben', tip: 'Der Artikel „das“ macht den Infinitiv zum Nomen.', explanation: '„Schreiben“ ist ein nominalisierter Infinitiv und steht nach dem Artikel „das“.' },
            { id: 'gross-09', type: 'rewrite', prompt: 'Schreibe den Satz mit korrekter Groß- und Kleinschreibung: „am besten gefällt mir das gemeinsame kochen.“', validAnswers: ['Am besten gefällt mir das gemeinsame Kochen.'], tip: '„Kochen“ steht nach dem Artikel „das“ als Nomen.', explanation: 'Das nominalisierte Verb „Kochen“ wird großgeschrieben. Der Satzanfang „Am“ ebenfalls.' },
            { id: 'gross-10', type: 'multiple-choice', prompt: 'Welche Schreibweise ist richtig?', question: '„Sie hat nichts ___ gesagt.“', options: ['neues', 'Neues', 'NEUES', 'neüs'], answer: 'Neues', tip: 'Nach „nichts“ wird ein folgendes Adjektiv oft nominalisiert.', explanation: '„Neues“ steht ohne Nomen und wird nach „nichts“ substantiviert. Daher Großschreibung.' }
        ]
    },
    {
        id: 'schreibwerkstatt', title: 'Schreibwerkstatt & Ausdruck', icon: '📝',
        description: 'Sätze verbessern, Kommas setzen und überzeugend für Praktika schreiben.',
        theory: 'Die Schreibwerkstatt hilft dir, Texte klar, höflich und korrekt zu gestalten. Bei Nebensätzen setzt man ein Komma, zum Beispiel weil, dass, obwohl. Umgangssprache wie „ich hab“, „mega cool“ oder „kann ich mal“ sollte in formellen Texten in Standardsprache umgewandelt werden. In Bewerbungen sind klare, sachliche Formulierungen wichtig: „Ich interessiere mich für ein Praktikum in Ihrem Betrieb.“ Die Regeln der Schreibwerkstatt verbessern nicht nur die Grammatik, sondern auch die Wirkung des Textes.',
        lesson: {
            overview: 'Die Schreibwerkstatt verbindet Grammatik, Zeichensetzung und stilistische Korrektheit. Sie hilft dir, in Schulaufsätzen, Präsentationen und Bewerbungen formell, klar und überzeugend zu schreiben.',
            focusPoints: [
                'Nebensätze mit weil, dass, obwohl werden durch Kommas abgetrennt.',
                'Umgangssprache in Standardsprache umformen: „ich hab“ → „ich habe“; „kann ich mal“ → „ich möchte ...“',
                'In Bewerbungen sind sachliche und höfliche Formulierungen besser als informelle Aussagen.',
                'Detaillierte, klare Sätze wirken professionell und verständlich.'
            ],
            examples: [
                { title: 'Komma bei Nebensätzen', text: 'Ich komme später, weil mein Bus verspätet ist.' },
                { title: 'Standardsprache', text: 'Ich habe das Praktikum sehr interessant gefunden.' },
                { title: 'Bewerbung', text: 'Ich interessiere mich für ein Praktikum in Ihrem Betrieb.' }
            ],
            sections: [
                {
                    title: '1. Inhalt zuerst klar formulieren',
                    text: 'Überlege, welche Aussage wichtig ist, und ordne Hauptaussage, Grund und Beispiel in einer verständlichen Reihenfolge.',
                    points: [
                        'Ein Satz sollte eine klare Aussage enthalten.',
                        'Begründe zentrale Aussagen mit weil oder dass.',
                        'Wiederholungen durch präzise Nomen und Verben vermeiden.'
                    ]
                },
                {
                    title: '2. Stil und Adressat prüfen',
                    text: 'Passe die Sprache dem Zweck an. Für Bewerbung und Unterricht ist die Standardsprache angemessen.',
                    points: [
                        'Vermeide Füllwörter wie irgendwie oder mega.',
                        'Sprich Empfängerinnen und Empfänger in formellen Texten mit Sie an.',
                        'Nenne konkrete Fähigkeiten und Beispiele statt allgemeiner Aussagen.'
                    ]
                },
                {
                    title: '3. Satzzeichen und Lesbarkeit kontrollieren',
                    text: 'Lies den Text laut. Lange Nebensätze sollten durch sinnvolle Kommas gegliedert und nicht überladen werden.',
                    points: [
                        'Nebensätze vom Hauptsatz abgrenzen.',
                        'Eingeschobene Nebensätze beidseitig mit Komma markieren.',
                        'Nach der Zeichensetzung Rechtschreibung und Großschreibung prüfen.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'Duden: Kommasetzung', url: 'https://www.duden.de/sprachwissen/rechtschreibregeln/Komma', note: 'Regeln für Haupt- und Nebensätze sowie Aufzählungen.' },
            { title: 'Duden: Stilratgeber', url: 'https://www.duden.de/sprachwissen/sprachratgeber', note: 'Höfliche, klare und sachliche Formulierungen in verschiedenen Textsorten.' }
        ],
        exercises: [
            { id: 'schreib-01', type: 'rewrite', prompt: 'Schreibe den Satz in Standardsprache um: „Der Film war voll nice und ich hab ihn direkt gepostet.“', validAnswers: ['Der Film war sehr gut und ich habe ihn sofort veröffentlicht.', 'Der Film hat mir sehr gut gefallen, deshalb habe ich ihn sofort gepostet.', 'Der Film war wirklich gut und ich habe ihn direkt geteilt.'], tip: 'Ersetze Umgangssprache durch genaue, sachliche Wörter.', explanation: 'In Standardsprache verwendest du zum Beispiel „sehr gut“ statt „voll nice“ und „habe“ statt „hab“. Eine passende Formulierung klingt klar und vollständig.' },
            { id: 'schreib-02', type: 'error-correction', prompt: 'Setze die fehlenden Kommas und korrigiere die Großschreibung.', sentence: 'Ich hoffe dass ich im Praktikum viel neues lerne.', validAnswers: ['Ich hoffe, dass ich im Praktikum viel Neues lerne.'], tip: 'Vor einem dass-Nebensatz steht ein Komma.', explanation: 'Der Nebensatz beginnt mit „dass“ und wird durch ein Komma abgetrennt. „Neues“ ist nach „viel“ nominalisiert.' },
            { id: 'schreib-03', type: 'sentence-builder', prompt: 'Baue den Nebensatz richtig: „Obwohl es regnete, spielten wir draußen Fußball.“', cards: ['spielten', 'Obwohl', 'draußen Fußball.', 'es regnete,', 'wir'], correctOrder: [1, 3, 4, 0, 2], tip: 'Im Nebensatz mit „obwohl“ steht das Verb am Ende; danach folgt das Komma.', explanation: '„Obwohl es regnete“ ist ein Nebensatz mit Verb am Ende. Er wird durch ein Komma vom Hauptsatz getrennt.' },
            { id: 'schreib-04', type: 'rewrite', prompt: 'Formuliere für eine Bewerbung höflich und vollständig: „Hi, ich will bei euch ein Praktikum machen.“', validAnswers: ['Sehr geehrte Damen und Herren, ich möchte bei Ihnen ein Praktikum machen.', 'Guten Tag, ich interessiere mich für ein Praktikum in Ihrem Betrieb.'], tip: 'Nutze eine höfliche Anrede und „möchte“ oder „interessiere mich“.', explanation: 'In einer Bewerbung sprichst du den Betrieb höflich mit „Sie/Ihnen/Ihr“ an. Ein vollständiger, sachlicher Satz wirkt professionell.' },
            { id: 'schreib-05', type: 'fill-in', prompt: 'Setze das Komma: „Ich komme später ___ weil mein Bus Verspätung hat.“', sentence: 'Ich komme später ___ weil mein Bus Verspätung hat.', answer: ',', strictCase: true, tip: 'Ein mit „weil“ eingeleiteter Nebensatz wird durch Komma abgetrennt.', explanation: 'Vor dem Nebensatz mit „weil“ steht ein Komma: „Ich komme später, weil …“' },
            { id: 'schreib-06', type: 'rewrite', prompt: 'Verbessere den Ausdruck: „Ich kann gut mit Leuten und bin auch nett.“ Formuliere passend für eine Bewerbung.', validAnswers: ['Ich arbeite gerne im Team und gehe freundlich auf Menschen zu.', 'Zu meinen Stärken zählen Teamfähigkeit und ein freundlicher Umgang mit Menschen.', 'Ich bin teamfähig und begegne anderen Menschen freundlich.'], tip: 'Nenne konkrete Stärken statt „nett“ und verbinde sie mit einer passenden Aussage.', explanation: 'Bewerbungsformulierungen sind konkret und sachlich. Teamfähigkeit und ein freundlicher Umgang beschreiben die Stärken genauer.' },
            { id: 'schreib-07', type: 'error-correction', prompt: 'Korrigiere Zeichensetzung und Satzbau.', sentence: 'Obwohl ich war müde bin ich zum Training gegangen.', validAnswers: ['Obwohl ich müde war, bin ich zum Training gegangen.'], tip: 'Im obwohl-Nebensatz steht das Verb am Ende; setze danach ein Komma.', explanation: 'Im Nebensatz steht „war“ am Ende: „Obwohl ich müde war“. Danach trennt ein Komma den Hauptsatz ab.' },
            { id: 'schreib-08', type: 'multiple-choice', prompt: 'Welche Formulierung passt am besten in eine Bewerbung?', question: 'Wähle den sachlichen und höflichen Satz.', options: ['Ich will unbedingt bei euch arbeiten.', 'Ich interessiere mich für ein Praktikum in Ihrem Betrieb.', 'Euer Laden sieht cool aus.', 'Gebt mir bitte schnell Bescheid.'], answer: 'Ich interessiere mich für ein Praktikum in Ihrem Betrieb.', tip: 'Eine Bewerbung klingt höflich, klar und sachlich.', explanation: 'Die Formulierung nennt das Anliegen präzise und spricht den Betrieb höflich mit „Ihrem“ an.' },
            { id: 'schreib-09', type: 'rewrite', prompt: 'Setze das Komma und schreibe den Satz richtig: „Ich denke dass wir obwohl es spät ist noch trainieren können.“', validAnswers: ['Ich denke, dass wir, obwohl es spät ist, noch trainieren können.'], tip: 'Der dass-Satz und der eingeschobene obwohl-Satz werden durch Kommas markiert.', explanation: 'Der dass-Nebensatz beginnt nach „denke“. Der eingeschobene obwohl-Nebensatz wird vorn und hinten durch Kommas abgetrennt.' },
            { id: 'schreib-10', type: 'rewrite', prompt: 'Schreibe sachlicher: „Der Kunde war mega sauer, weil sein Paket nicht kam.“', validAnswers: ['Der Kunde war sehr verärgert, weil sein Paket nicht angekommen war.', 'Der Kunde war verärgert, da sein Paket nicht angekommen war.', 'Der Kunde zeigte sich sehr unzufrieden, weil sein Paket nicht angekommen war.'], tip: 'Vermeide „mega sauer“ und wähle eine sachliche Beschreibung.', explanation: '„Sehr verärgert“ oder „unzufrieden“ ist sachlicher als „mega sauer“. Der weil-Satz wird mit Komma abgetrennt.' }
        ]
    },
    {
        id: 'satzbau', title: 'Satzbau & Satzverbindungen', icon: '🧱',
        description: 'Satzglieder, Haupt- und Nebensätze sowie Satzreihen erkennen.',
        theory: 'Ein Satz besteht aus Satzgliedern. Im Aussagesatz steht das finite Verb meist an zweiter Stelle; im Entscheidungsfragesatz steht es oft an erster Stelle. Hauptsätze können selbstständig stehen. Ein Nebensatz ist einem Hauptsatz untergeordnet und hat häufig das finite Verb am Ende. Eine Satzreihe verbindet gleichrangige Hauptsätze, ein Satzgefüge verbindet Haupt- und Nebensatz. Nebensätze werden in der Regel mit Komma abgetrennt.',
        lesson: {
            overview: 'Wenn du Satzglieder und Verbposition erkennst, kannst du Sätze sicher untersuchen und verständlich verbinden. Die Stellung des finiten Verbs hilft dabei, Haupt- und Nebensätze auseinanderzuhalten.',
            focusPoints: [
                'Aussagesatz: Das finite Verb steht meistens an zweiter Stelle.',
                'Entscheidungsfrage: Das finite Verb steht häufig an erster Stelle.',
                'Im eingeleiteten Nebensatz steht das finite Verb typischerweise am Ende.',
                'Satzreihe: Hauptsatz + Hauptsatz. Satzgefüge: Hauptsatz + Nebensatz.',
                'Nebensätze werden mit Kommas vom übergeordneten Satz getrennt.'
            ],
            examples: [
                { title: 'Aussagesatz', text: 'Am Nachmittag übt Mira Klavier. — Das Verb „übt“ steht an zweiter Stelle.' },
                { title: 'Nebensatz', text: 'Mira übt, weil sie morgen vorspielt. — Im weil-Satz steht „vorspielt“ am Ende.' },
                { title: 'Satzreihe', text: 'Mira übt, und ihr Bruder liest. — Zwei gleichrangige Hauptsätze.' }
            ],
            sections: [
                {
                    title: '1. Das Verb als Orientierung',
                    text: 'Suche zuerst das finite Verb: Es ist die Verbform, die zu Person und Zahl passt. In einem Aussagesatz steht es typischerweise an zweiter Satzgliedstelle. In einer Ja-Nein-Frage steht es meist vorn. Ein Nebensatz mit „weil“, „dass“ oder „obwohl“ stellt das finite Verb gewöhnlich ans Ende.',
                    points: [
                        'Aussage: „Heute fährt Lea mit dem Bus.“ – „fährt“ steht an zweiter Satzgliedstelle.',
                        'Frage: „Fährt Lea heute mit dem Bus?“ – das finite Verb steht zuerst.',
                        'Nebensatz: „…, weil Lea mit dem Bus fährt.“ – das finite Verb steht am Schluss.'
                    ]
                },
                {
                    title: '2. Satzglieder sicher bestimmen',
                    text: 'Ein Satzglied kann aus einem Wort oder aus einer Wortgruppe bestehen. Stelle die passende Frage und prüfe mit der Umstellprobe: Ein Satzglied lässt sich als Einheit an eine andere Stelle verschieben, ohne dass seine Wörter getrennt werden.',
                    points: [
                        'Subjekt: Wer oder was handelt? Es steht im Nominativ.',
                        'Objekte: Frage nach wem? oder wen/was?; die Verbverbindung hilft bei der Bestimmung.',
                        'Angaben: Wo, wann, wie oder warum geschieht etwas? Sie liefern zusätzliche Informationen.'
                    ]
                },
                {
                    title: '3. Sätze verbinden und Kommas setzen',
                    text: 'Eine Satzreihe verbindet gleichrangige Hauptsätze. Ein Satzgefüge enthält einen Hauptsatz und mindestens einen untergeordneten Nebensatz. Unterordnende Konjunktionen wie „weil“ oder „obwohl“ verändern die Verbposition; der Nebensatz wird mit Komma abgegrenzt.',
                    points: [
                        'Satzreihe: „Mira übt, und ihr Bruder liest.“ Beide Teile können selbstständig stehen.',
                        'Satzgefüge: „Mira übt, weil sie morgen vorspielt.“ Der weil-Satz ist untergeordnet.',
                        'Steht der Nebensatz vorn, folgt das Komma vor dem Hauptsatz: „Weil sie vorspielt, übt Mira.“'
                    ]
                }
            ]
        },
        sources: [
            { title: 'IDS grammis: Satzart', url: 'https://grammis.ids-mannheim.de/vggf/2258', note: 'Fachliche Definitionen und Beispiele zu Aussage-, Frage- und Aufforderungssätzen.' },
            { title: 'IDS grammis: Satzgefüge', url: 'https://grammis.ids-mannheim.de/vggf/2252', note: 'Haupt- und Nebensätze, ihre Stellung und Beziehungen.' },
            { title: 'IDS grammis: Nebensatz', url: 'https://grammis.ids-mannheim.de/vggf/2256', note: 'Grundlagen zur Verbstellung in Nebensätzen.' }
        ],
        exercises: [
            { id: 'satz-01', type: 'multiple-choice', prompt: 'Welche Satzart ist das? „Hast du morgen Zeit?“', question: 'Achte auf die Stellung des Verbs und die erwartete Antwort.', options: ['Aussagesatz', 'Entscheidungsfrage', 'Aufforderungssatz', 'Ausrufesatz'], answer: 'Entscheidungsfrage', tip: 'Kann man mit Ja oder Nein antworten?', explanation: 'Das Verb „hast“ steht am Anfang. Die Frage kann mit Ja oder Nein beantwortet werden.' },
            { id: 'satz-02', type: 'word-click', prompt: 'Klicke alle Teile des Prädikats an.', tokens: ['Morgen', 'bringt', 'Sina', 'ihre', 'Mappe', 'mit.'], correctIndices: [1, 5], tip: 'Suche die zusammengehörenden Verbteile.', explanation: '„Bringt … mit“ ist ein trennbares Verb und bildet gemeinsam das Prädikat.' },
            { id: 'satz-03', type: 'dropdown', prompt: 'Ergänze das Verb im Nebensatz: „Wir bleiben drinnen, weil es stark ___.“', sentence: 'Wir bleiben drinnen, weil es stark {{blank}}.', choices: ['regnet', 'regnet es', 'es regnet', 'regnen'], answer: 'regnet', tip: 'Im weil-Nebensatz steht das finite Verb am Ende.', explanation: 'Der Nebensatz beginnt mit „weil“; das finite Verb „regnet“ steht am Schluss.' },
            { id: 'satz-04', type: 'sentence-builder', prompt: 'Ordne die Satzteile zu einem Satzgefüge.', cards: ['Kim', 'Obwohl', 'den Zug.', 'erreichte', 'der Bus spät kam,'], correctOrder: [1, 4, 3, 0, 2], tip: 'Im obwohl-Satz kommt das Verb ans Ende; danach folgt der Hauptsatz.', explanation: '„Obwohl der Bus spät kam“ ist der Nebensatz. Im Hauptsatz steht das finite Verb „erreichte“ an zweiter Stelle.' },
            { id: 'satz-05', type: 'multiple-choice', prompt: 'Was verbindet der Satz „Nora übt, und Ben liest“?', question: 'Bestimme die Satzverbindung.', options: ['Zwei Hauptsätze (Satzreihe)', 'Hauptsatz und Nebensatz (Satzgefüge)', 'Zwei Nebensätze', 'Eine Frage und eine Aufforderung'], answer: 'Zwei Hauptsätze (Satzreihe)', tip: 'Können beide Teilsätze selbstständig stehen?', explanation: '„Nora übt“ und „Ben liest“ sind jeweils selbstständige Hauptsätze. Sie bilden eine Satzreihe.' },
            { id: 'satz-06', type: 'fill-in', prompt: 'Setze das fehlende Komma ein.', sentence: 'Der Wecker klingelt ___ ich stehe sofort auf.', answer: ',', strictCase: true, tip: 'Hier treffen zwei Hauptsätze aufeinander.', explanation: 'Zwischen den verbundenen Hauptsätzen steht ein Komma: „Der Wecker klingelt, ich stehe sofort auf.“' },
            { id: 'satz-07', type: 'rewrite', prompt: 'Verbinde die beiden Aussagen mit „weil“: „Lina nimmt einen Schirm mit. Es regnet.“', validAnswers: ['Lina nimmt einen Schirm mit, weil es regnet.', 'Weil es regnet, nimmt Lina einen Schirm mit.'], tip: 'Im weil-Satz steht das finite Verb am Ende.', explanation: '„Weil es regnet“ begründet die Handlung. Der Nebensatz wird durch ein Komma abgetrennt und das Verb steht am Ende.' },
            { id: 'satz-08', type: 'multiple-choice', prompt: 'Welcher Satz hat die typische Verbzweitstellung eines Aussagesatzes?', question: 'Wähle den grammatisch passenden Aussagesatz.', options: ['Morgen fährt Lea mit dem Bus.', 'Morgen Lea fährt mit dem Bus.', 'Fährt morgen Lea mit dem Bus.', 'Mit dem Bus morgen Lea.'], answer: 'Morgen fährt Lea mit dem Bus.', tip: 'Im Aussagesatz steht das finite Verb an zweiter Stelle.', explanation: 'Im Satz „Morgen fährt Lea …“ steht „fährt“ an zweiter Stelle, nach dem Satzglied „Morgen“.' },
            { id: 'satz-09', type: 'word-click', prompt: 'Klicke das Subjekt an: „Nach dem Unterricht helfen die Jugendlichen im Garten.“', tokens: ['Nach', 'dem', 'Unterricht', 'helfen', 'die', 'Jugendlichen', 'im', 'Garten.'], correctIndices: [4, 5], tip: 'Frage: Wer oder was hilft?', explanation: 'Auf die Frage „Wer hilft?“ antwortet „die Jugendlichen“. Das ist das Subjekt im Nominativ.' },
            { id: 'satz-10', type: 'error-correction', prompt: 'Korrigiere die Wortstellung im Nebensatz.', sentence: 'Ich weiß, dass du kommst morgen.', validAnswers: ['Ich weiß, dass du morgen kommst.'], tip: 'Im dass-Satz steht das finite Verb am Ende.', explanation: '„Dass du morgen kommst“ ist ein Nebensatz. Das finite Verb „kommst“ steht am Satzende.' }
        ]
    },
    {
        id: 'adjektiv-vergleich', title: 'Adjektive & Vergleiche', icon: '📏',
        description: 'Grundform, Vergleichsform und Höchststufe sicher verwenden.',
        theory: 'Adjektive beschreiben Eigenschaften. Viele lassen sich steigern: Grundform (Positiv), Vergleichsform (Komparativ) und Höchststufe (Superlativ). Der Komparativ endet häufig auf -er und wird oft mit „als“ verwendet; Gleichheit drückt man mit „so … wie“ aus. Der Superlativ steht häufig mit „am … -sten“. Einige Formen sind unregelmäßig, etwa gut – besser – am besten. Nicht jedes Adjektiv lässt sich sinnvoll steigern.',
        lesson: {
            overview: 'Mit Adjektiven vergleichst du Eigenschaften. Achte beim Vergleichen auf die passende Form und die Signalwörter „als“, „wie“ und „am“. Manche Adjektive haben unregelmäßige Steigerungsformen.',
            focusPoints: [
                'Positiv: schnell; Komparativ: schneller; Superlativ: am schnellsten.',
                'Unterschied: größer als. Gleichheit: genauso groß wie.',
                'Viele Superlative werden mit „am“ und der Endung „-sten“ gebildet.',
                'Unregelmäßig: gut – besser – am besten; viel – mehr – am meisten.',
                'Nicht jedes Adjektiv ist steigerbar, zum Beispiel „einzig“ oder „tot“.'
            ],
            examples: [
                { title: 'Unterschied', text: 'Der Bus ist schneller als das Fahrrad.' },
                { title: 'Gleichheit', text: 'Mina ist genauso groß wie ihre Cousine.' },
                { title: 'Unregelmäßig', text: 'Diese Lösung ist gut, jene ist besser, aber diese ist am besten.' }
            ],
            sections: [
                {
                    title: '1. Die drei Steigerungsstufen',
                    text: 'Der Positiv nennt eine Eigenschaft, der Komparativ vergleicht zwei oder mehr Dinge, und der Superlativ bezeichnet die höchste Ausprägung innerhalb einer Gruppe. Das Vergleichswort hilft dir, die passende Form auszuwählen.',
                    points: [
                        'Positiv: „Der Weg ist lang.“',
                        'Komparativ + als: „Der Schulweg ist länger als der Feldweg.“',
                        'so/genauso + Positiv + wie: „Der Feldweg ist genauso lang wie der Schulweg.“',
                        'Superlativ: „Von allen Wegen ist dieser am längsten.“'
                    ]
                },
                {
                    title: '2. Formen richtig bilden',
                    text: 'Viele Komparative enden auf „-er“, Superlative häufig auf „-sten“ oder „-esten“. Bei manchen kurzen Adjektiven kommt ein Umlaut hinzu. Einige Formen sind unregelmäßig und müssen gelernt werden.',
                    points: [
                        'Umlaut: alt – älter – am ältesten; groß – größer – am größten.',
                        'Zusätzliches „e“ kann die Aussprache erleichtern: heiß – heißer – am heißesten.',
                        'Unregelmäßig: gut – besser – am besten; viel – mehr – am meisten; nah – näher – am nächsten.'
                    ]
                },
                {
                    title: '3. Adjektive im Satz verwenden',
                    text: 'Steht das Adjektiv direkt vor einem Nomen, erhält es eine passende Endung: „der schnellere Bus“, „ein hohes Gebäude“. Nach Verben wie „sein“, „werden“ oder „bleiben“ steht es meist ohne Endung: „Der Bus ist schneller.“',
                    points: [
                        'Vor einem Nomen: „der ältere Bruder“, „die beste Lösung“.',
                        'Nach „sein“: „Der Bruder ist älter.“ – keine Adjektivendung.',
                        'Nicht jede Eigenschaft ist sinnvoll abstufbar: „einzig“ ist normalerweise nicht steigerbar.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'IDS grammis: Adjektiv', url: 'https://grammis.ids-mannheim.de/vggf/2189', note: 'Wortart, Eigenschaften und Steigerungsstufen von Adjektiven.' },
            { title: 'Duden: Sprache und Stil', url: 'https://www.duden.de/sprachwissen/sprachratgeber', note: 'Sprachliche Zweifelsfälle und Hinweise zu Grammatik und Stil.' }
        ],
        exercises: [
            { id: 'adj-01', type: 'dropdown', prompt: 'Ergänze die Vergleichsform: „Der neue Weg ist ___ als der alte.“', sentence: 'Der neue Weg ist {{blank}} als der alte.', choices: ['kurz', 'kürzer', 'am kürzesten', 'kurzer'], answer: 'kürzer', tip: 'Bei einem Vergleich mit „als“ steht meistens der Komparativ.', explanation: '„Kürzer“ ist der Komparativ von „kurz“ und passt zum Vergleich mit „als“.' },
            { id: 'adj-02', type: 'multiple-choice', prompt: 'Welche Steigerungsreihe ist richtig?', question: 'Wähle die Formen von „gut“.', options: ['gut – besser – am besten', 'gut – guter – am gutesten', 'gut – mehr gut – am meisten gut', 'gut – guterer – am gutsten'], answer: 'gut – besser – am besten', tip: '„Gut“ wird unregelmäßig gesteigert.', explanation: 'Die Steigerungsformen sind unregelmäßig: gut – besser – am besten.' },
            { id: 'adj-03', type: 'word-click', prompt: 'Klicke das Adjektiv im Superlativ an.', tokens: ['Die', 'zweite', 'Aufgabe', 'war', 'am', 'schwierigsten.'], correctIndices: [4, 5], tip: 'Die Höchststufe wird häufig mit „am“ gebildet.', explanation: '„Am schwierigsten“ ist die Höchststufe (Superlativ) von „schwierig“.' },
            { id: 'adj-04', type: 'fill-in', prompt: 'Ergänze den Komparativ von „hoch“.', sentence: 'Der Aussichtspunkt liegt ___ als die Brücke.', answer: 'höher', strictCase: true, tip: '„Hoch“ wird mit Umlaut gesteigert.', explanation: 'Der Komparativ von „hoch“ lautet „höher“.' },
            { id: 'adj-05', type: 'sentence-builder', prompt: 'Ordne den Satz mit einem Vergleich richtig.', cards: ['als', 'Der', 'ist', 'Rucksack', 'leichter', 'meiner.'], correctOrder: [1, 3, 2, 4, 0, 5], tip: 'Vergleichsform plus „als“ zeigen einen Unterschied.', explanation: '„Leichter als“ ist ein Komparativvergleich. Im Aussagesatz steht „ist“ an zweiter Stelle.' },
            { id: 'adj-06', type: 'multiple-choice', prompt: 'Welcher Satz drückt Gleichheit aus?', question: 'Achte auf die Vergleichswörter.', options: ['Mia läuft schneller als Ben.', 'Mia läuft so schnell wie Ben.', 'Mia läuft am schnellsten.', 'Mia läuft schneller, denn Ben.'], answer: 'Mia läuft so schnell wie Ben.', tip: 'Gleichheit wird häufig mit „so … wie“ ausgedrückt.', explanation: 'Die Wendung „so schnell wie“ sagt aus, dass beide gleich schnell laufen.' },
            { id: 'adj-07', type: 'error-correction', prompt: 'Korrigiere den Vergleich.', sentence: 'Dieses Heft ist leichter wie das andere.', validAnswers: ['Dieses Heft ist leichter als das andere.'], tip: 'Beim Komparativ verwendest du hier „als“.', explanation: 'Ein Unterschied wird mit dem Komparativ und „als“ ausgedrückt: leichter als.' },
            { id: 'adj-08', type: 'multiple-choice', prompt: 'Welches Adjektiv lässt sich normalerweise nicht sinnvoll steigern?', question: 'Wähle das passende Beispiel.', options: ['warm', 'schnell', 'einzig', 'freundlich'], answer: 'einzig', tip: 'Überlege, ob etwas „mehr einzig“ sein kann.', explanation: '„Einzig“ bedeutet bereits „nur einmal vorhanden“. Eine Steigerung ist normalerweise nicht sinnvoll.' },
            { id: 'adj-09', type: 'dropdown', prompt: 'Ergänze den Superlativ: „Von allen Teilnehmenden lief Omar ___.“', sentence: 'Von allen Teilnehmenden lief Omar {{blank}}.', choices: ['schnell', 'schneller', 'am schnellsten', 'schnellste'], answer: 'am schnellsten', tip: 'Bei einer Höchststufe ohne Nomen verwendest du oft „am“.', explanation: '„Am schnellsten“ ist die Höchststufe, wenn das Adjektiv nicht direkt vor einem Nomen steht.' },
            { id: 'adj-10', type: 'rewrite', prompt: 'Bilde einen Gleichheitsvergleich mit „so … wie“: „Der Weg zu Fuß dauert 20 Minuten. Der Weg mit dem Rad dauert auch 20 Minuten.“', validAnswers: ['Der Weg zu Fuß dauert so lange wie der Weg mit dem Rad.', 'Der Weg mit dem Rad dauert so lange wie der Weg zu Fuß.'], tip: 'Für gleiche Dauer passt die Form „so lange wie“.', explanation: '„So lange wie“ drückt gleiche Dauer aus. Beide Aussagen nennen dieselbe Zeit.' }
        ]
    },
    {
        id: 'gedichte', title: 'Gedichte verstehen', icon: '🌙',
        description: 'Verse, Strophen, Reime, sprachliche Bilder und Stimmung untersuchen.',
        theory: 'Gedichte sind lyrische Texte. Eine Zeile heißt Vers; mehrere Verse können eine Strophe bilden. Das Reimschema beschreibt, welche Versenden zusammenklingen: Paarreim aabb, Kreuzreim abab, umarmender Reim abba. Das lyrische Ich ist die Stimme im Gedicht und nicht automatisch die Autorin oder der Autor. Sprachliche Bilder wie Vergleiche, Metaphern und Personifikationen verdichten die Aussage. Eine Deutung sollte sich auf konkrete Wörter und Textstellen stützen.',
        lesson: {
            overview: 'Lyrik untersuchst du Schritt für Schritt: Form beschreiben, auffällige Wörter und Bilder finden und anschließend ihre mögliche Wirkung erklären. Eine Interpretation wird überzeugender, wenn du deine Beobachtungen mit Textbelegen begründest.',
            focusPoints: [
                'Vers = einzelne Gedichtzeile; Strophe = Gruppe von Versen.',
                'Reimschema: Paarreim aabb, Kreuzreim abab, umarmender Reim abba.',
                'Das lyrische Ich ist eine Stimme im Text und muss nicht die Autorin oder der Autor sein.',
                'Vergleich: Verbindung mit „wie“ oder „als“; Metapher: bildliche Übertragung.',
                'Personifikation lässt Dinge oder Natur wie Menschen handeln.',
                'Deutungen sind Vorschläge: Belege sie mit Wörtern oder Versen aus dem Gedicht.'
            ],
            examples: [
                { title: 'Personifikation', text: 'Der Wind klopft leise ans Fenster. — Der Wind handelt wie ein Mensch.' },
                { title: 'Vergleich', text: 'Die Wolken ziehen wie Schiffe vorbei. — „Wie“ markiert den Vergleich.' },
                { title: 'Metapher', text: 'Ein Meer aus Lichtern. — Viele Lichter werden bildlich als Meer beschrieben.' }
            ],
            sections: [
                {
                    title: '1. Form genau beobachten',
                    text: 'Lies ein Gedicht zunächst vollständig. Zähle Verse und Strophen, markiere auffällige Wiederholungen und untersuche die Versenden. Ein Reimschema wird mit Buchstaben notiert: gleiche Reime erhalten denselben Buchstaben.',
                    points: [
                        'Paarreim: aabb; Kreuzreim: abab; umarmender Reim: abba.',
                        'Nicht jedes Gedicht reimt sich. Freie Verse haben oft kein regelmäßiges Reimschema.',
                        'Rhythmus entsteht durch den Klang und die Betonung; er ist nicht dasselbe wie ein Endreim.'
                    ]
                },
                {
                    title: '2. Sprache und Wirkung untersuchen',
                    text: 'Achte auf Wörter, die Gefühle, Geräusche oder Farben hervorrufen. Sprachliche Bilder machen Aussagen anschaulich: Ein Vergleich stellt etwas mit „wie“ oder „als“ gegenüber; eine Metapher überträgt eine Bedeutung; eine Personifikation lässt Dinge menschlich handeln.',
                    points: [
                        'Vergleich: „Die Wolken ziehen wie Schiffe.“ – zwei Dinge werden ausdrücklich verglichen.',
                        'Metapher: „Ein Meer aus Lichtern.“ – die Lichter werden bildlich als Meer bezeichnet.',
                        'Personifikation: „Der Morgen klopft ans Fenster.“ – dem Morgen wird menschliches Handeln zugeschrieben.'
                    ]
                },
                {
                    title: '3. Eine Deutung begründen',
                    text: 'Unterscheide Beobachtung, Wirkung und Deutung. Eine gute Interpretation behauptet nicht einfach eine Stimmung, sondern erklärt, welche Wörter oder Bilder diesen Eindruck hervorrufen. Das lyrische Ich ist die Stimme im Gedicht und nicht automatisch die reale Autorin oder der Autor.',
                    points: [
                        'Beobachtung: „Im Vers steht das Bild ‚Meer aus Lichtern‘.“',
                        'Wirkung: „Das Bild lässt die vielen Lichter besonders zahlreich erscheinen.“',
                        'Deutung vorsichtig formulieren: „Das könnte die lebendige Stimmung der Szene betonen.“'
                    ]
                }
            ]
        },
        sources: [
            { title: 'KMK: Bildungsstandards Deutsch für den Ersten und Mittleren Schulabschluss', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Deutsch.pdf', note: 'Bundesweite Kompetenzziele zum Lesen, Verstehen und Untersuchen literarischer Texte.' },
            { title: 'IDS grammis: Satz und sprachliche Fachbegriffe', url: 'https://grammis.ids-mannheim.de/vggf', note: 'Von der KMK gebilligtes Verzeichnis grundlegender grammatischer Fachausdrücke.' }
        ],
        exercises: [
            { id: 'gedicht-01', type: 'multiple-choice', prompt: 'Wie heißt eine einzelne Zeile in einem Gedicht?', question: 'Wähle den Fachbegriff.', options: ['Vers', 'Strophe', 'Absatz', 'Refrain'], answer: 'Vers', tip: 'Mehrere dieser Einheiten können zusammen eine Strophe bilden.', explanation: 'Eine einzelne Gedichtzeile nennt man Vers. Eine Gruppe von Versen bildet häufig eine Strophe.' },
            { id: 'gedicht-02', type: 'multiple-choice', prompt: 'Welches Reimschema zeigt „Licht – Nacht – Sicht – Pracht“?', question: 'Die Versenden lauten der Reihe nach: Licht / Nacht / Sicht / Pracht.', options: ['Paarreim aabb', 'Kreuzreim abab', 'Umarmender Reim abba', 'Kein Reim'], answer: 'Kreuzreim abab', tip: 'Welche Versenden reimen sich miteinander?', explanation: '„Licht“ reimt sich auf „Sicht“ (Vers 1 und 3), „Nacht“ auf „Pracht“ (Vers 2 und 4): abab.' },
            { id: 'gedicht-03', type: 'word-click', prompt: 'Klicke die beiden Wörter an, die einen Paarreim bilden.', tokens: ['Die', 'Sonne', 'sinkt', 'ins', 'Tal,', 'am', 'Himmel', 'glüht', 'ihr', 'Strahl.'], correctIndices: [4, 9], tip: 'Vergleiche die letzten Wörter der beiden Verszeilen.', explanation: '„Tal“ und „Strahl“ klingen am Versende ähnlich und bilden hier einen Paarreim.' },
            { id: 'gedicht-04', type: 'multiple-choice', prompt: 'Wer ist mit dem „lyrischen Ich“ gemeint?', question: 'Wähle die genaueste Erklärung.', options: ['Die sprechende Stimme im Gedicht', 'Immer die Autorin oder der Autor', 'Die lesende Person', 'Die Figur auf dem Buchcover'], answer: 'Die sprechende Stimme im Gedicht', tip: 'Unterscheide Textstimme und reale Person.', explanation: 'Das lyrische Ich ist die Stimme, die im Gedicht spricht. Es muss nicht mit der Autorin oder dem Autor identisch sein.' },
            { id: 'gedicht-05', type: 'multiple-choice', prompt: 'Welches sprachliche Bild liegt vor? „Der Wind klopft an die Tür.“', question: 'Was tut der Wind hier wie ein Mensch?', options: ['Personifikation', 'Paarreim', 'Übertreibung', 'Stabreim'], answer: 'Personifikation', tip: 'Ein Naturding erhält eine menschliche Handlung.', explanation: 'Der Wind wird so dargestellt, als könne er wie ein Mensch klopfen. Das ist eine Personifikation.' },
            { id: 'gedicht-06', type: 'multiple-choice', prompt: 'Welches sprachliche Bild ist „Der Schulhof ist ein Bienenstock“?', question: 'Wähle den passenden Begriff.', options: ['Metapher', 'Vergleich', 'Paarreim', 'Strophe'], answer: 'Metapher', tip: 'Es wird eine bildliche Gleichsetzung ohne „wie“ verwendet.', explanation: 'Der belebte Schulhof wird bildlich mit einem Bienenstock gleichgesetzt. Das ist eine Metapher.' },
            { id: 'gedicht-07', type: 'dropdown', prompt: 'Ergänze den Fachbegriff: „Die Wolken ziehen ___ Schiffe über den Himmel.“', sentence: 'Die Wolken ziehen {{blank}} Schiffe über den Himmel.', choices: ['wie', 'weil', 'aber', 'dass'], answer: 'wie', tip: 'Ein Vergleich wird oft mit einem bestimmten Signalwort gebildet.', explanation: '„Wie Schiffe“ vergleicht die Wolken mit Schiffen. Das Wort „wie“ leitet den Vergleich ein.' },
            { id: 'gedicht-08', type: 'sentence-builder', prompt: 'Ordne die vier Versenden zum Reimschema aabb.', cards: ['Wald (a)', 'Licht (b)', 'bald (a)', 'Sicht (b)'], correctOrder: [0, 1, 2, 3], tip: 'Beim Paarreim reimen sich Vers 1 und 2 sowie Vers 3 und 4.', explanation: 'Wald/bald bilden den ersten Paarreim; Licht/Sicht den zweiten. Das ergibt aabb.' },
            { id: 'gedicht-09', type: 'multiple-choice', prompt: 'Welche Aussage ist eine belegbare Beobachtung?', question: 'Der erfundene Vers lautet: „Der Morgen schiebt das Dunkel fort.“', options: ['Der Vers enthält eine Personifikation.', 'Das Gedicht ist bestimmt traurig.', 'Die Autorin war morgens allein.', 'Alle Lesenden fühlen sich glücklich.'], answer: 'Der Vers enthält eine Personifikation.', tip: 'Wähle eine Aussage, die sich direkt am Wortlaut prüfen lässt.', explanation: '„Der Morgen schiebt“ schreibt dem Morgen eine menschliche Handlung zu. Aussagen über Autorabsicht oder alle Lesenden wären nicht direkt belegt.' },
            { id: 'gedicht-10', type: 'error-correction', prompt: 'Korrigiere die falsche Aussage über Gedichte.', sentence: 'Das lyrische Ich ist immer die echte Autorin oder der echte Autor.', validAnswers: ['Das lyrische Ich ist die sprechende Stimme im Gedicht und nicht automatisch die Autorin oder der Autor.'], tip: 'Textstimme und reale Person müssen nicht übereinstimmen.', explanation: 'Das lyrische Ich ist die Stimme im Text. Ohne zusätzliche Belege darf man es nicht mit der Autorin oder dem Autor gleichsetzen.' }
        ]
    },
    {
        id: 'sachtexte-diagramme', title: 'Sachtexte & Schaubilder', icon: '📊',
        description: 'Informationen aus Tabellen und Diagrammen entnehmen und sachlich beschreiben.',
        theory: 'Sachtexte informieren über ein Thema. Schaubilder zeigen Daten übersichtlich, zum Beispiel als Tabelle, Säulen- oder Balkendiagramm, Liniendiagramm oder Kreisdiagramm. Lies zuerst Titel, Zeitraum, Beschriftungen, Einheiten, Legende und Quelle. Beschreibe anschließend Werte genau und vergleiche sie, ohne mehr zu behaupten, als die Daten zeigen. Ein Diagramm zeigt Zusammenhänge; es beweist nicht automatisch, warum etwas passiert.',
        lesson: {
            overview: 'Lies ein Schaubild zuerst als Ganzes und dann gezielt: Worum geht es, welche Gruppen oder Zeitpunkte werden verglichen und in welcher Einheit? Stütze deine Aussagen auf die dargestellten Werte.',
            focusPoints: [
                'Titel und Quelle nennen Thema und Herkunft der Daten.',
                'Achsen, Zeitraum und Einheit zeigen, was genau gemessen wird.',
                'Die Legende erklärt Farben oder Datenreihen.',
                'Säulen/Balken vergleichen Gruppen; Linien zeigen häufig Veränderungen über die Zeit; Kreisstücke zeigen Anteile.',
                'Trenne Beobachtung von Erklärung: Ein Diagramm allein beweist keine Ursache.'
            ],
            examples: [
                { title: 'Tabelle', text: 'September: 4 Bücher; Oktober: 6 Bücher; November: 3 Bücher. Der höchste Wert ist im Oktober.' },
                { title: 'Vergleich', text: 'Im Oktober wurden 2 Bücher mehr gelesen als im September.' },
                { title: 'Sachlich bleiben', text: 'Die Daten zeigen eine Veränderung, aber nicht automatisch ihren Grund.' }
            ],
            sections: [
                {
                    title: '1. Sachtexte gezielt erschließen',
                    text: 'Lies zuerst Überschrift, Zwischenüberschriften, Einleitung und Quelle. Überlege, worüber der Text informiert und für wen er geschrieben wurde. Markiere wichtige Aussagen und trenne überprüfbare Fakten von Meinungen oder Bewertungen.',
                    points: [
                        'Fakten lassen sich anhand von Daten oder Quellen überprüfen.',
                        'Meinungen und Wertungen zeigen oft eine persönliche Einschätzung.',
                        'Eine Zusammenfassung nennt Kernaussagen knapp und in eigenen Worten.'
                    ]
                },
                {
                    title: '2. Schaubilder Schritt für Schritt lesen',
                    text: 'Kläre vor dem Vergleichen, was dargestellt wird: Thema, Zeitraum, Gruppen, Achsen, Einheit, Skala und Legende. Prüfe, ob Werte als Anzahl, Messgröße oder Prozentanteil angegeben sind. Bei Kreisdiagrammen entsprechen alle Anteile zusammen dem Ganzen.',
                    points: [
                        'Säulen- und Balkendiagramme vergleichen meist Kategorien oder Gruppen.',
                        'Liniendiagramme zeigen häufig Veränderungen über einen Zeitraum.',
                        'Achte auf einen abgeschnittenen Achsenbeginn: Er kann Größenunterschiede optisch stärker wirken lassen.',
                        'Eine Prozentangabe beschreibt einen Anteil; sie verrät ohne Grundzahl nicht immer die absolute Anzahl.'
                    ]
                },
                {
                    title: '3. Daten sachlich auswerten',
                    text: 'Nenne beim Schreiben konkrete Werte und Einheiten. Vergleiche Anfangs- und Endwerte oder den höchsten und niedrigsten Wert. Eine Grafik belegt zunächst nur, was dargestellt ist; Ursachen, Absichten oder Entwicklungen in der Zukunft lassen sich daraus allein nicht sicher ableiten.',
                    points: [
                        'Einleitung: Thema, Darstellungsform, Zeitraum und Quelle nennen.',
                        'Hauptteil: wichtige Werte beschreiben und mit passenden Zahlen vergleichen.',
                        'Schluss: Kernergebnis zusammenfassen und Beobachtung von Vermutung trennen.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'KMK: Bildungsstandards Deutsch für den Ersten und Mittleren Schulabschluss', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Deutsch.pdf', note: 'Kompetenzziele zum Erschließen und Auswerten von Sach- und Gebrauchstexten.' },
            { title: 'Statistisches Bundesamt: GENESIS-Online', url: 'https://www-genesis.destatis.de/datenbank/online', note: 'Offizielle Datenbank mit Tabellen, Merkmalen und Einheiten als Beispiel für überprüfbare Datenquellen.' }
        ],
        exercises: [
            { id: 'diagramm-01', type: 'multiple-choice', prompt: 'Welche Diagrammart eignet sich besonders, um Veränderungen von Monat zu Monat zu zeigen?', question: 'Wähle eine passende Darstellungsform.', options: ['Liniendiagramm', 'Kreisdiagramm ohne Zeitachse', 'Wortwolke', 'Bildunterschrift'], answer: 'Liniendiagramm', tip: 'Eine Linie macht einen Verlauf über mehrere Zeitpunkte sichtbar.', explanation: 'Ein Liniendiagramm eignet sich gut, um Entwicklungen über einen Zeitraum zu zeigen.' },
            { id: 'diagramm-02', type: 'multiple-choice', prompt: 'Die Tabelle zeigt: September 4 Bücher, Oktober 6, November 3. In welchem Monat ist der Wert am höchsten?', question: 'Lies die Werte und vergleiche sie.', options: ['September', 'Oktober', 'November', 'In allen gleich'], answer: 'Oktober', tip: 'Vergleiche 4, 6 und 3.', explanation: 'Der größte Wert ist 6. Er gehört zum Oktober.' },
            { id: 'diagramm-03', type: 'fill-in', prompt: 'Um wie viele Bücher liegt der Oktoberwert über dem Septemberwert? (September 4, Oktober 6)', sentence: 'Der Unterschied beträgt ___ Bücher.', answer: '2', strictCase: true, tip: 'Berechne 6 minus 4.', explanation: '6 − 4 = 2. Im Oktober wurden zwei Bücher mehr gezählt.' },
            { id: 'diagramm-04', type: 'multiple-choice', prompt: 'Was erklärt die Legende eines Diagramms?', question: 'Wähle die beste Antwort.', options: ['Welche Farben oder Zeichen zu den Datenreihen gehören', 'Wer die Daten erfunden hat', 'Welche Werte in Zukunft sicher gelten', 'Warum ein Ergebnis entstanden ist'], answer: 'Welche Farben oder Zeichen zu den Datenreihen gehören', tip: 'Die Legende hilft, Farben und Muster zuzuordnen.', explanation: 'Die Legende ordnet Farben, Symbole oder Muster den dargestellten Kategorien zu.' },
            { id: 'diagramm-05', type: 'word-click', prompt: 'Klicke die Einheit an: „Im April wurden 18 Kilogramm Papier gesammelt.“', tokens: ['Im', 'April', 'wurden', '18', 'Kilogramm', 'Papier', 'gesammelt.'], correctIndices: [4], tip: 'Die Einheit sagt, in welcher Maßeinheit die Zahl angegeben ist.', explanation: '„Kilogramm“ ist die Einheit; „18“ ist der Messwert und „Papier“ das Merkmal.' },
            { id: 'diagramm-06', type: 'dropdown', prompt: 'Ein Kreisdiagramm zeigt 25 % für Bus und 75 % für Fahrrad. Welche Gruppe hat den größeren Anteil?', sentence: 'Den größeren Anteil hat {{blank}}.', choices: ['der Bus', 'das Fahrrad', 'beide gleich', 'das zeigt die Prozentangabe nicht'], answer: 'das Fahrrad', tip: 'Vergleiche die Prozentzahlen.', explanation: '75 % ist größer als 25 %. Das Fahrrad hat den größeren Anteil.' },
            { id: 'diagramm-07', type: 'multiple-choice', prompt: 'Welche Aussage ist eine vorsichtige Deutung der Tabelle?', question: 'Im Oktober werden mehr Bücher gezählt als im September. Die Tabelle nennt keinen Grund.', options: ['Im Oktober wurden mehr Bücher gezählt als im September.', 'Im Oktober lasen alle Kinder mehr, weil es regnete.', 'Der Regen verursachte den höheren Wert.', 'Alle Kinder lasen im Oktober genau sechs Bücher.'], answer: 'Im Oktober wurden mehr Bücher gezählt als im September.', tip: 'Beschreibe nur, was die Zahlen tatsächlich belegen.', explanation: 'Der Vergleich ist direkt aus den Werten ablesbar. Die anderen Aussagen erfinden Ursachen oder Einzelinformationen.' },
            { id: 'diagramm-08', type: 'sentence-builder', prompt: 'Ordne eine sachliche Beschreibung: September 4, Oktober 6 Bücher.', cards: ['Sechs Bücher', 'wurden', 'im Oktober', 'gezählt.'], correctOrder: [0, 1, 2, 3], tip: 'Nenne den Messwert und den Zeitpunkt, ohne eine Ursache zu erfinden.', explanation: '„Sechs Bücher wurden im Oktober gezählt“ beschreibt den Wert und den Monat sachlich.' },
            { id: 'diagramm-09', type: 'multiple-choice', prompt: 'Welche Angaben solltest du vor dem Vergleichen von Säulen prüfen?', question: 'Wähle die vollständige und wichtigste Antwort.', options: ['Achsenbeschriftung und Einheit', 'Nur die Farbe der höchsten Säule', 'Nur den Namen der Grafik', 'Die Länge des Textes neben dem Diagramm'], answer: 'Achsenbeschriftung und Einheit', tip: 'Prüfe, was die Säulen messen und in welcher Einheit.', explanation: 'Achsenbeschriftungen und Einheiten zeigen, wie die Werte zu verstehen sind.' },
            { id: 'diagramm-10', type: 'rewrite', prompt: 'Formuliere als sachlichen Vergleich: September 4 Bücher, Oktober 6 Bücher.', validAnswers: ['Im Oktober wurden zwei Bücher mehr gelesen als im September.', 'Im September wurden zwei Bücher weniger gelesen als im Oktober.'], tip: 'Berechne den Unterschied und nenne beide Monate.', explanation: 'Der Unterschied beträgt 2 Bücher. Ein Vergleich nennt beide Zeitpunkte und übertreibt die Aussage nicht.' }
        ]
    },
    {
        id: 'deutsch-klassenarbeit', title: 'Deutsch Klassenarbeit', icon: '📝',
        description: 'Das Gedicht „Herbstabend“ verstehen und seine drei Analyseaufgaben an anderen Gedichten üben.',
        theory: 'Die Einführung erklärt Inhalt und Sprechsituation, Reimschema sowie Metapher, Personifikation und Vergleich am Gedicht „Herbstabend“. Danach übst du dieselben Fähigkeiten an vier anderen Gedichten aus Wikisource.',
        lesson: {
            overview: 'Die Einführung erklärt das Gedicht „Herbstabend“ vollständig anhand seiner drei Analyseaufgaben. Im anschließenden Übungsteil kommen andere Gedichte zum Einsatz: höchstens vier gemeinfreie Texte aus Wikisource mit verschiedenen Reimordnungen.',
            focusPoints: [
                'Aufgabe 1: Thema, lyrischen Sprecher, Situation (wann und wo) und Stimmung mit Textbelegen bestimmen.',
                'Aufgabe 2: Reimwörter am Versende vergleichen, Reimschema jeder Strophe notieren und die Reimform benennen.',
                'Aufgabe 3: Metapher und Personifikation erklären; erkennen und begründen, dass im Gedicht kein Vergleich vorkommt.',
                'Bei allen Antworten unterscheiden: Was steht ausdrücklich im Gedicht, und was ist eine begründete Deutung?'
            ],
            examples: [
                {
                    title: 'Übungstext: „Herbstabend“',
                    text: '1 Der Nebel zieht durch stille Gassen,\n2 die letzten Blätter fallen sacht.\n3 Ich kann die bunte Welt verlassen\n4 und gehe langsam in die Nacht.\n5 Ein kalter Wind weht um die Ecken,\n6 das Licht verlischt im alten Haus.\n7 Schatten beginnen sich zu strecken,\n8 der Tag geht leis zu Ende aus.'
                },
                {
                    title: 'Ausführliche Gedichtanalyse: „Herbstabend“',
                    text: 'Aufgabe 1 – Inhalt: Das Gedicht zeigt den Übergang vom Herbsttag in die Nacht und den Rückzug aus der „bunten Welt“ in Ruhe und Dunkelheit. Sprecher: In Vers 3 und 4 tritt ein „Ich“ auf. Das ist das lyrische Ich, nicht automatisch die reale Autorin oder der Autor. Situation: „in die Nacht“ legt Abend oder Dämmerung nahe; „stille Gassen“, „Ecken“ und „altes Haus“ zeichnen eine ruhige Umgebung. Dorf oder Kleinstadt sind mögliche Deutungen, kein ausdrücklich genannter Ort. Stimmung: ruhig, nachdenklich, leicht melancholisch und verträumt; Hinweise sind „still“, „sacht“, „langsam“, „kalt“, „verlischt“, „Schatten“ und „leis“.\n\nAufgabe 2 – Reimschema: In Strophe 1 reimen sich Vers 1 und 3 (Gassen / verlassen) sowie Vers 2 und 4 (sacht / Nacht): ABAB, ein Kreuzreim. In Strophe 2 gehören Ecken / strecken und Haus / aus zusammen: CDCD, wenn die Buchstaben im ganzen Gedicht weitergezählt werden; für sich allein hat auch die Strophe die Form ABAB, also einen Kreuzreim.\n\nAufgabe 3 – Stilmittel: „Bunte Welt“ (V. 3) ist als Metapher zu verstehen: Das Bild kann für das farbige, lebendige Treiben des Herbsttags stehen. „Schatten beginnen sich zu strecken“ (V. 7) ist eine Personifikation, weil Schatten eine Handlung wie Lebewesen erhalten; dadurch wirkt die Dunkelheit lebendig. Einen Vergleich enthält das Gedicht nicht. Ein Vergleich verbindet zwei Dinge ausdrücklich, häufig mit „wie“ oder „als“; hier sollte also kein Beispiel erfunden werden.\n\nHinweis zum Wortlaut: Vers 8 lautet „der Tag geht leis zu Ende aus“. Die Verbindung „zu Ende aus“ ist sprachlich ungewöhnlich. Für das Reimschema zählt das Endwort „aus“.'
                }
            ],
            sections: [
                {
                    title: '1. Aufgabe: Inhalt, lyrischer Sprecher, Situation und Stimmung',
                    text: 'Die Aufgabenstellung verlangt vier Punkte: Thema, lyrischen Sprecher, Situation (wann und wo) und Stimmung. Beim Thema fasst du die Entwicklung in einem Satz zusammen: Der Herbsttag geht in die Nacht über, während sich das Ich aus der Außenwelt zurückzieht. In Vers 3 („Ich kann … verlassen“) und Vers 4 („gehe … in die Nacht“) spricht ein lyrisches Ich. Es ist nicht automatisch mit dem Autor gleichzusetzen. Für die Zeit sprechen „in die Nacht“ und die dunkler werdenden Bilder. Für den Ort stehen „stille Gassen“, „Ecken“ und „altes Haus“; sie belegen eine ruhige Umgebung, aber keinen genauen Wohnort. Eine dörfliche oder kleinstädtische Umgebung bleibt eine mögliche Schlussfolgerung. Die Stimmung lässt sich als ruhig, nachdenklich, leicht melancholisch und verträumt beschreiben. Belege sie mit Wörtern wie „still“, „sacht“, „langsam“, „kalt“, „verlischt“, „Schatten“ und „leis“.',
                    points: [
                        'Thema: Übergang vom Herbsttag in die Nacht und Rückzug aus der Außenwelt.',
                        'Sprecher: Das „Ich“ in Vers 3–4 ist das lyrische Ich, nicht automatisch der Autor.',
                        'Zeit: Abend oder Dämmerung ist durch den Übergang „in die Nacht“ begründet.',
                        'Ort: Gassen, Ecken und altes Haus beschreiben eine Umgebung; sie verraten keine genaue Adresse.',
                        'Stimmung: Deutung immer mit passenden Wörtern aus dem Gedicht belegen.'
                    ]
                },
                {
                    title: '2. Aufgabe: Reimschema der beiden Strophen',
                    text: 'Ein Vers ist eine Gedichtzeile. Vergleiche die Wörter am Ende der Verse nach ihrem Klang. Der erste Reimklang erhält A, ein neuer Klang B. In Strophe 1 reimen sich „Gassen“ und „verlassen“ (A) sowie „sacht“ und „Nacht“ (B): ABAB. Weil sich Vers 1 mit 3 und Vers 2 mit 4 reimt, heißt die Form Kreuzreim. In Strophe 2 reimen sich „Ecken“ und „strecken“ sowie „Haus“ und „aus“. Wenn du die Buchstaben im gesamten Gedicht weiterzählst, schreibst du CDCD. Betrachtest du nur diese Strophe, kannst du wieder ABAB notieren. Auch sie ist ein Kreuzreim. Entscheidend ist der hörbare Klang, nicht eine ähnliche Schreibweise.',
                    points: [
                        'Strophe 1: Gassen / verlassen = A; sacht / Nacht = B; also ABAB.',
                        'Strophe 2: Ecken / strecken = C; Haus / aus = D; im Gesamtgedicht also CDCD.',
                        'Jede Strophe für sich ist ABAB und damit ein Kreuzreim.',
                        'Die Buchstaben stehen für Klanggruppen und nicht für gleiche Endbuchstaben.',
                        'Vers 8 lautet „der Tag geht leis zu Ende aus“; das Reimwort „aus“ steht am Versende, auch wenn die Formulierung ungewöhnlich klingt.'
                    ]
                },
                {
                    title: '3. Aufgabe: Metapher, Personifikation und Vergleich',
                    text: 'Untersuche Metapher, Personifikation und Vergleich und erkläre jeweils die Wirkung. Als Metapher wird „bunte Welt“ (V. 3) verwendet: Die Formulierung kann bildlich das farbige, lebendige Treiben des Tages meinen. Bei der Personifikation „Schatten beginnen sich zu strecken“ (V. 7) erhält etwas Lebloses eine Handlung, die man von einem Menschen oder Tier kennt. So erscheint die hereinbrechende Dunkelheit lebendig. Ein Vergleich wäre eine ausdrückliche Verbindung zweier Bereiche, oft mit „wie“ oder „als“. Im Gedicht steht kein solcher Vergleich. Eine vollständige Antwort sagt deshalb ausdrücklich, dass kein Beispiel vorhanden ist, statt ein Stilmittel zu erfinden.',
                    points: [
                        'Metapher: „bunte Welt“ (V. 3) – bildliche Bedeutung aus dem Zusammenhang ableiten.',
                        'Personifikation: „Schatten beginnen sich zu strecken“ (V. 7) – Lebloses erhält eine lebendige Handlung.',
                        'Wirkung erklären: Was macht das Bild anschaulich oder welche Stimmung unterstützt es?',
                        'Vergleich: zwei Dinge werden ausdrücklich verbunden, oft mit „wie“ oder „als“.',
                        'Hier fehlt ein Vergleich; das ist die fachlich richtige Antwort, keine Lücke, die gefüllt werden muss.'
                    ]
                }
            ]
        },
        sources: [
            { title: 'Wikisource: Wünschelrute – Joseph von Eichendorff', url: 'https://de.wikisource.org/wiki/W%C3%BCnschelrute', note: 'Kurzes Gedicht mit Kreuzreim (ABAB); Übung zu Deutung und Reimklang.' },
            { title: 'Wikisource: Die drei Spatzen – Christian Morgenstern', url: 'https://de.wikisource.org/wiki/Die_drei_Spatzen', note: 'Wintergedicht mit Paarreimen (AABB); Übung zu Reim und Stimmung.' },
            { title: 'Wikisource: Erlkönig – Johann Wolfgang von Goethe', url: 'https://de.wikisource.org/wiki/Erlk%C3%B6nig', note: 'Ballade mit paarweise gereimten Versen; Übung zu Reim und Sprechsituation.' },
            { title: 'Wikisource: Die Bürgschaft – Friedrich Schiller', url: 'https://de.wikisource.org/wiki/Die_B%C3%BCrgschaft', note: 'Ballade mit verschränkten Reimgruppen; der Anfang zeigt einen umarmenden Reim (ABBA).' }
        ],
        exercises: [
            { id: 'deutsch-klassenarbeit-poem-01', type: 'fill-in', prompt: 'Joseph von Eichendorff, „Wünschelrute“: „Schläft ein Lied in allen Dingen, / Die da träumen fort und fort, / Und die Welt hebt an zu singen, / Triffst du nur das Zauberwort.“ Bestimme das Reimschema.', sentence: 'Das Reimschema lautet ___.', answer: 'ABAB', strictCase: false, tip: 'Vergleiche die Versenden „Dingen / singen“ und „fort / Wort“.', explanation: 'Vers 1 reimt sich auf Vers 3 (Dingen / singen), Vers 2 auf Vers 4 (fort / Wort). Die Folge ABAB heißt Kreuzreim.' },
            { id: 'deutsch-klassenarbeit-poem-02', type: 'multiple-choice', prompt: 'Welche Versenden bilden in Eichendorffs „Wünschelrute“ den zweiten Reim?', question: '„Die da träumen fort und fort, / Und die Welt hebt an zu singen, / Triffst du nur das Zauberwort.“', options: ['fort / Wort', 'Dingen / fort', 'singen / Wort', 'träumen / Dingen'], answer: 'fort / Wort', tip: 'Achte auf den Klang am Ende von Vers 2 und Vers 4.', explanation: '„Fort“ und „Wort“ bilden den B-Reim; die andere Reimgruppe ist „Dingen / singen“.' },
            { id: 'deutsch-klassenarbeit-poem-03', type: 'multiple-choice', prompt: 'Was kann das „Zauberwort“ in „Wünschelrute“ bedeuten?', question: 'Wähle eine Deutung, die zum ganzen Gedicht passt.', options: ['Ein besonderes Wort oder Verständnis, durch das die verborgene Poesie der Welt hörbar wird.', 'Ein Zauberspruch, der im Gedicht ausdrücklich eine Person verwandelt.', 'Der Name eines Ortes, an dem alle Figuren wohnen.', 'Ein Wort, das ausschließlich die Jahreszeit bezeichnet.'], answer: 'Ein besonderes Wort oder Verständnis, durch das die verborgene Poesie der Welt hörbar wird.', tip: 'Das Lied ist schon „in allen Dingen“; das Zauberwort lässt die Welt zu singen beginnen.', explanation: 'Eine mögliche Deutung ist, dass ein sensibles Wort oder ein besonderes Verständnis die Poesie sichtbar beziehungsweise hörbar macht, die laut Gedicht bereits in den Dingen schlummert.' },
            { id: 'deutsch-klassenarbeit-poem-04', type: 'multiple-choice', prompt: 'An wen richtet sich das „du“ am Ende von Eichendorffs „Wünschelrute“?', question: 'Was lässt sich sicher aus dem kurzen Gedicht ableiten?', options: ['An ein nicht näher bestimmtes „du“; eine konkrete Person wird nicht genannt.', 'An eine namentlich genannte Königin.', 'An den Autor in einer ausdrücklich erzählten Kindheitserinnerung.', 'An einen Vogel, der im Gedicht spricht.'], answer: 'An ein nicht näher bestimmtes „du“; eine konkrete Person wird nicht genannt.', tip: 'Das Gedicht nennt nur „du“, aber keinen Namen und keine konkrete Situation.', explanation: 'Das Gedicht spricht ein „du“ an, legt dessen Identität aber nicht fest. Eine Antwort sollte diese offene Stelle nicht mit einer unbelegten Person füllen.' },
            { id: 'deutsch-klassenarbeit-poem-05', type: 'fill-in', prompt: 'Christian Morgenstern, „Die drei Spatzen“: „In einem leeren Haselstrauch / da sitzen drei Spatzen, Bauch an Bauch. / Der Erich rechts und links der Franz / und mitten drin der freche Hans.“ Bestimme das Reimschema.', sentence: 'Das Reimschema lautet ___.', answer: 'AABB', strictCase: false, tip: 'Vers 1 reimt sich auf 2; Vers 3 reimt sich auf 4.', explanation: 'Haselstrauch / Bauch bilden den A-Reim; Franz / Hans den B-Reim. Das Muster AABB heißt Paarreim.' },
            { id: 'deutsch-klassenarbeit-poem-06', type: 'multiple-choice', prompt: 'Welche Reimpaare hörst du in der ersten Strophe von Morgensterns „Die drei Spatzen“?', question: '„In einem leeren Haselstrauch / da sitzen drei Spatzen, Bauch an Bauch. / Der Erich rechts und links der Franz / und mitten drin der freche Hans.“', options: ['Haselstrauch / Bauch und Franz / Hans', 'Haselstrauch / Franz und Bauch / Hans', 'Spatzen / Haselstrauch und Franz / Bauch', 'Bauch / Franz und Haselstrauch / Hans'], answer: 'Haselstrauch / Bauch und Franz / Hans', tip: 'Lies jeweils zwei aufeinanderfolgende Versenden zusammen.', explanation: 'Die erste und zweite Zeile reimen sich auf Haselstrauch / Bauch; die dritte und vierte auf Franz / Hans.' },
            { id: 'deutsch-klassenarbeit-poem-07', type: 'multiple-choice', prompt: 'Welche Stimmung entsteht in der ersten Strophe von „Die drei Spatzen“?', question: '„da sitzen drei Spatzen, Bauch an Bauch“; „Der Erich rechts und links der Franz / und mitten drin der freche Hans“', options: ['Eine gemütliche, vertraute Stimmung; die Spatzen sitzen eng beieinander.', 'Eine bedrohliche Stimmung, weil die Spatzen voneinander fliehen.', 'Eine feierliche Stimmung bei einer Preisverleihung.', 'Eine traurige Stimmung, weil ein Spatz allein zurückbleibt.'], answer: 'Eine gemütliche, vertraute Stimmung; die Spatzen sitzen eng beieinander.', tip: 'Beachte die Wiederholung der Nähe in „Bauch an Bauch“ und die spielerische Namensnennung.', explanation: 'Die Spatzen sitzen eng zusammen und werden mit Namen vorgestellt. Das vermittelt Nähe und eine gemütliche, leicht verspielte Stimmung.' },
            { id: 'deutsch-klassenarbeit-poem-08', type: 'multiple-choice', prompt: 'Welches Stilmittel steht in Morgensterns Vers „So warm wie der Hans hats niemand nicht“?', question: 'Achte auf das Wort „wie“.', options: ['Ein Vergleich: Die Wärme der anderen wird mit Hans verglichen.', 'Eine Metapher ohne Vergleichswort.', 'Eine Personifikation des Haselstrauchs.', 'Ein umarmender Reim.'], answer: 'Ein Vergleich: Die Wärme der anderen wird mit Hans verglichen.', tip: 'Das Signalwort „wie“ verbindet hier zwei Größen.', explanation: 'Mit „wie“ wird die Wärme der anderen Spatzen ausdrücklich mit Hans verglichen. Die scherzhafte Formulierung unterstreicht, wie gemütlich Hans es in der Mitte hat.' },
            { id: 'deutsch-klassenarbeit-poem-09', type: 'fill-in', prompt: 'Johann Wolfgang von Goethe, „Erlkönig“: „Wer reitet so spät durch Nacht und Wind? / Es ist der Vater mit seinem Kind; / Er hat den Knaben wohl in dem Arm, / Er faßt ihn sicher, er hält ihn warm.“ Bestimme das Reimschema dieser Strophe.', sentence: 'Das Reimschema lautet ___.', answer: 'AABB', strictCase: false, tip: 'Wind / Kind reimen sich; Arm / warm bilden das nächste Paar.', explanation: 'Wind / Kind bilden den A-Reim, Arm / warm den B-Reim. Die Folge AABB ist ein Paarreim.' },
            { id: 'deutsch-klassenarbeit-poem-10', type: 'multiple-choice', prompt: 'Wer nimmt in den nächsten Versen des „Erlkönigs“ den Erlkönig wahr?', question: '„Siehst, Vater, du den Erlkönig nicht? / Mein Sohn, es ist ein Nebelstreif.“', options: ['Der Sohn sieht den Erlkönig; der Vater erklärt die Erscheinung als Nebelstreif.', 'Der Vater sieht den Erlkönig, der Sohn sieht nur Nebel.', 'Beide sehen dasselbe und nennen es einen Baum.', 'Der Erzähler sagt ausdrücklich, dass beide Figuren träumen.'], answer: 'Der Sohn sieht den Erlkönig; der Vater erklärt die Erscheinung als Nebelstreif.', tip: 'Achte darauf, wer die Frage stellt und wie der Vater antwortet.', explanation: 'Der Sohn fragt, ob der Vater den Erlkönig sehe. Der Vater deutet das Wahrgenommene als Nebelstreif. Das Gedicht stellt so die unterschiedlichen Wahrnehmungen der Figuren gegenüber.' },
            { id: 'deutsch-klassenarbeit-poem-11', type: 'multiple-choice', prompt: 'Welche Versenden reimen sich im ersten Vierzeiler des „Erlkönigs“?', question: '„Wer reitet so spät durch Nacht und Wind? / Es ist der Vater mit seinem Kind; / Er hat den Knaben wohl in dem Arm, / Er faßt ihn sicher, er hält ihn warm.“', options: ['Wind / Kind und Arm / warm', 'Wind / Arm und Kind / warm', 'Nacht / Kind und Vater / warm', 'reitet / sicher und Knaben / Vater'], answer: 'Wind / Kind und Arm / warm', tip: 'Die Reime stehen hier in benachbarten Versen.', explanation: '„Wind / Kind“ und „Arm / warm“ sind die beiden Reimpaare des Vierzeilers.' },
            { id: 'deutsch-klassenarbeit-poem-12', type: 'multiple-choice', prompt: 'Welche Wirkung hat der Wechsel der direkten Rede im „Erlkönig“?', question: '„Mein Sohn, was birgst du so bang dein Gesicht? — / Siehst, Vater, du den Erlkönig nicht? / … Mein Sohn, es ist ein Nebelstreif.“', options: ['Er zeigt den Gegensatz zwischen der Angst des Sohnes und den beruhigenden Erklärungen des Vaters.', 'Er beweist, dass der Vater den Erlkönig ebenfalls sieht.', 'Er macht die Ballade zu einer sachlichen Wetterbeschreibung.', 'Er zeigt, dass im Gedicht nur eine Figur spricht.'], answer: 'Er zeigt den Gegensatz zwischen der Angst des Sohnes und den beruhigenden Erklärungen des Vaters.', tip: 'Vergleiche, was der Sohn befürchtet und wie der Vater das Gesehene erklärt.', explanation: 'Die abwechselnde Rede macht die verschiedenen Wahrnehmungen hörbar: Der Sohn fürchtet den Erlkönig, während der Vater die Erscheinungen beruhigend natürlich erklärt. Das steigert die Spannung.' },
            { id: 'deutsch-klassenarbeit-poem-13', type: 'fill-in', prompt: 'Friedrich Schiller, „Die Bürgschaft“: „Zu Dionys dem Tirannen schlich / Möros, den Dolch im Gewande, / Ihn schlugen die Häscher in Bande. / Was wolltest du mit dem Dolche, sprich!“ Bestimme das Reimschema dieser vier Verse.', sentence: 'Das Reimschema lautet ___.', answer: 'ABBA', strictCase: false, tip: 'Schlich / sprich bilden den äußeren Reim; Gewande / Bande den inneren.', explanation: 'Vers 1 und 4 reimen sich (schlich / sprich); Vers 2 und 3 (Gewande / Bande). Die Folge ABBA heißt umarmender Reim.' },
            { id: 'deutsch-klassenarbeit-poem-14', type: 'multiple-choice', prompt: 'Wie lautet das Reimschema der ersten sieben Verse aus Schillers „Die Bürgschaft“?', question: 'Endwörter: schlich / Gewande / Bande / sprich / Wütherich / befreien / bereuen.', options: ['ABBAACC', 'AABBCCD', 'ABABABC', 'ABBAABB'], answer: 'ABBAACC', tip: 'Schlich / sprich / Wütherich gehören zusammen; Gewande / Bande bilden eine zweite Gruppe.', explanation: 'Die drei Reimgruppen lauten A: schlich / sprich / Wütherich, B: Gewande / Bande und C: befreien / bereuen. Daraus folgt ABBAACC.' },
            { id: 'deutsch-klassenarbeit-poem-15', type: 'multiple-choice', prompt: 'Was möchte Möros in Schillers „Die Bürgschaft“ erreichen?', question: '„Die Stadt vom Tyrannen befreien!“', options: ['Er will die Stadt von der Herrschaft des Tyrannen befreien.', 'Er möchte den König mit einem Geschenk erfreuen.', 'Er will als Bote eine Nachricht überbringen.', 'Er sucht einen verlorenen Becher am Fluss.'], answer: 'Er will die Stadt von der Herrschaft des Tyrannen befreien.', tip: 'Die Absicht wird in der direkten Rede ausdrücklich genannt.', explanation: 'Möros sagt ausdrücklich, dass er die Stadt vom Tyrannen befreien will. Das ist eine im Text belegte Aussage, keine bloße Vermutung.' },
            { id: 'deutsch-klassenarbeit-poem-16', type: 'multiple-choice', prompt: 'Welche Beschreibung passt zum Anfang von Schillers „Die Bürgschaft“?', question: 'Berücksichtige Reimordnung und Gesprächssituation.', options: ['Der umarmende Reim (ABBA) rahmt eine angespannte Befragung; die Erzählung wechselt danach in weitere Reimgruppen.', 'Ein Kreuzreim (ABAB) begleitet eine ruhige Naturbeschreibung.', 'Ein Paarreim (AABB) begleitet ein fröhliches Gespräch.', 'Es gibt keine Reime und keine direkte Rede.'], answer: 'Der umarmende Reim (ABBA) rahmt eine angespannte Befragung; die Erzählung wechselt danach in weitere Reimgruppen.', tip: 'Die erste und vierte Zeile umschließen das Reimpaar in der Mitte; beachte außerdem die Frage nach dem Dolch.', explanation: 'Im ersten Vierzeiler umschließen die Reime der ersten und vierten Zeile (schlich / sprich) die mittleren Reime (Gewande / Bande). Die Frage nach dem Dolch und die anschließende Antwort erzeugen eine gespannte Gesprächssituation.' }
        ]
    }
];

const additionalChoiceExercises = {
    kasus: [
        ['kasus-11', 'Bestimme den Fall: „**Der Schiedsrichter** pfeift das Spiel an.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Nominativ', 'Frage: Wer pfeift das Spiel an?', '„Der Schiedsrichter“ ist das Subjekt. Die Frage „Wer pfeift?“ ergibt den Nominativ.'],
        ['kasus-12', 'Bestimme den Fall: „Die Schuhe **des Stürmers** sind neu.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Genitiv', 'Frage: Wessen Schuhe sind neu?', '„Des Stürmers“ antwortet auf „Wessen?“ und steht im Genitiv.'],
        ['kasus-13', 'Bestimme den Fall: „Nora hilft **ihrer Mitschülerin**.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Dativ', 'Frage: Wem hilft Nora?', '„Ihrer Mitschülerin“ ist die Person, der Nora hilft. Das ist der Dativ.'],
        ['kasus-14', 'Bestimme den Fall: „Der Trainer lobt **den Torwart**.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Akkusativ', 'Frage: Wen lobt der Trainer?', '„Den Torwart“ ist das direkte Objekt und beantwortet die Frage „Wen?“.'],
        ['kasus-15', 'Welcher Fall passt? „Die Nachricht ___ Lehrerin kam am Morgen.“', 'Ergänze den Satz mit dem Genitiv.', ['der', 'die', 'den', 'dem'], 'der', 'Frage: Wessen Nachricht?', '„Der Lehrerin“ zeigt, wem die Nachricht gehört. Bei „die Lehrerin“ lautet der Genitiv „der Lehrerin“.'],
        ['kasus-16', 'Welcher Fall passt? „Ich gebe ___ Freund den Schlüssel zurück.“', 'Ergänze den Artikel im Dativ.', ['der', 'den', 'dem', 'des'], 'dem', 'Frage: Wem gebe ich den Schlüssel?', '„Dem Freund“ ist der Empfänger und steht deshalb im Dativ.'],
        ['kasus-17', 'Welcher Fall passt? „Morgen besucht Sara ___ Betrieb.“', 'Ergänze den Artikel im Akkusativ.', ['der', 'des', 'dem', 'den'], 'den', 'Frage: Wen oder was besucht Sara?', '„Betrieb“ ist das direkte Objekt. Der maskuline Artikel wird im Akkusativ zu „den“.'],
        ['kasus-18', 'Welcher Fall passt? „___ Bewerbung liegt auf dem Tisch.“', 'Ergänze den Artikel im Nominativ.', ['Die', 'Der', 'Den', 'Des'], 'Die', 'Frage: Wer oder was liegt auf dem Tisch?', '„Die Bewerbung“ ist das Subjekt und steht im Nominativ.'],
        ['kasus-19', 'Bestimme den Fall: „Wir sprechen mit **dem Trainer**.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Dativ', '„Mit“ verlangt immer den Dativ.', 'Die Präposition „mit“ steht mit dem Dativ: mit wem? mit dem Trainer.'],
        ['kasus-20', 'Bestimme den Fall: „Lena stellt **die Trinkflasche** neben die Tasche.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Akkusativ', 'Frage: Wen oder was stellt Lena neben die Tasche?', '„Die Trinkflasche“ ist das direkte Objekt und steht im Akkusativ.'],
        ['kasus-21', 'Bestimme den Fall: „**Unser Klassenlehrer** organisiert den Ausflug.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Nominativ', 'Frage: Wer organisiert den Ausflug?', '„Unser Klassenlehrer“ handelt und ist damit das Subjekt im Nominativ.'],
        ['kasus-22', 'Bestimme den Fall: „Das Ende **des Spiels** war spannend.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Genitiv', 'Frage: Wessen Ende?', '„Des Spiels“ beschreibt die Zugehörigkeit und antwortet auf „Wessen?“.'],
        ['kasus-23', 'Bestimme den Fall: „Die Chefin erklärt **den Praktikanten** die Aufgabe.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Dativ', 'Frage: Wem erklärt die Chefin die Aufgabe?', 'Die Praktikanten erhalten die Erklärung. Sie stehen als Empfänger im Dativ.'],
        ['kasus-24', 'Bestimme den Fall: „Murat trägt **den Karton** ins Lager.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Akkusativ', 'Frage: Wen oder was trägt Murat?', '„Den Karton“ ist das direkte Objekt und steht im Akkusativ.'],
        ['kasus-25', 'Welcher Fall passt? „Die Trainerin dankt ___ Helferinnen.“', 'Ergänze den Artikel im Dativ Plural.', ['die', 'den', 'der', 'des'], 'den', 'Frage: Wem dankt die Trainerin?', '„Danken“ verlangt den Dativ. Im Dativ Plural heißt es „den Helferinnen“.'],
        ['kasus-26', 'Welcher Fall passt? „Wir sehen ___ neuen Film im Unterricht.“', 'Ergänze den Artikel im Akkusativ.', ['der', 'dem', 'des', 'den'], 'den', 'Frage: Wen oder was sehen wir?', '„Den neuen Film“ ist das direkte Objekt im Akkusativ.'],
        ['kasus-27', 'Welcher Fall passt? „Das Fahrrad ___ Nachbarin steht draußen.“', 'Ergänze den Artikel im Genitiv.', ['der', 'die', 'den', 'dem'], 'der', 'Frage: Wessen Fahrrad?', '„Der Nachbarin“ steht im Genitiv und zeigt, wem das Fahrrad gehört.'],
        ['kasus-28', 'Bestimme den Fall: „Der Hund folgt **seinem Besitzer**.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Dativ', '„Folgen“ verlangt die Frage „Wem?“.', '„Seinem Besitzer“ steht im Dativ: Wem folgt der Hund?'],
        ['kasus-29', 'Bestimme den Fall: „Die Klasse wartet auf **den Bus**.“', 'In welchem Fall steht der markierte Ausdruck?', ['Nominativ', 'Genitiv', 'Dativ', 'Akkusativ'], 'Akkusativ', '„Warten auf“ verlangt hier die Frage „Wen oder was?“.', 'Nach „warten auf“ steht das Ziel im Akkusativ: auf wen oder was? Auf den Bus.'],
        ['kasus-30', 'Welcher Fall passt? „___ Jugendlichen spielen nach der Schule Basketball.“', 'Ergänze den Artikel im Nominativ Plural.', ['Die', 'Den', 'Der', 'Des'], 'Die', 'Frage: Wer spielt Basketball?', '„Die Jugendlichen“ ist das Subjekt im Nominativ Plural.']
    ],
    tempora: [
        ['tempora-11', 'Welche Zeitform hat „Heute schreibe ich eine Nachricht“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präsens', 'Die Handlung findet heute statt.', '„Schreibe“ ist die Verbform im Präsens.'],
        ['tempora-12', 'Welche Zeitform hat „Am Samstag gewann unser Team“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präteritum', 'Achte auf die Form „gewann“.', '„Gewann“ ist das Präteritum von „gewinnen“.'],
        ['tempora-13', 'Welche Zeitform hat „Wir haben die Küche aufgeräumt“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Perfekt', 'Suche Hilfsverb und Partizip II.', '„Haben aufgeräumt“ besteht aus Hilfsverb und Partizip II und bildet das Perfekt.'],
        ['tempora-14', 'Welche Zeitform hat „Morgen werde ich früher aufstehen“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Futur I', 'Suche „werden“ und den Infinitiv.', '„Werde aufstehen“ ist die Bildung des Futur I.'],
        ['tempora-15', 'Welche Form passt? „Gestern ___ Amir zum Training.“', 'Ergänze das Verb „laufen“ im Präteritum.', ['läuft', 'lief', 'ist gelaufen', 'wird laufen'], 'lief', '„Gestern“ zeigt die Vergangenheit an.', 'Das Präteritum von „laufen“ lautet „lief“.'],
        ['tempora-16', 'Welche Form passt? „Wir ___ schon zu Mittag gegessen.“', 'Ergänze das Hilfsverb für das Perfekt.', ['haben', 'sind', 'werden', 'wurden'], 'haben', '„Essen“ bildet das Perfekt mit „haben“.', 'Das Perfekt lautet „wir haben gegessen“.'],
        ['tempora-17', 'Welche Form passt? „Nächste Woche ___ sie die Bewerbung abschicken.“', 'Ergänze das Futur I.', ['hat', 'wurde', 'wird', 'ist'], 'wird', 'Futur I besteht aus „werden“ und Infinitiv.', 'Zum Subjekt „sie“ passt „wird“: Sie wird abschicken.'],
        ['tempora-18', 'Welche Form passt? „Jeden Morgen ___ der Bus um sieben Uhr.“', 'Ergänze das Verb „kommen“ im Präsens.', ['kam', 'kommt', 'ist gekommen', 'wird kommen'], 'kommt', '„Jeden Morgen“ beschreibt eine Gewohnheit.', 'Gewohnheiten werden im Präsens beschrieben: Der Bus kommt.'],
        ['tempora-19', 'Welche Zeitform hat „Die Klasse las den Text gemeinsam“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präteritum', '„Las“ ist eine einfache Vergangenheitsform.', '„Las“ ist das Präteritum von „lesen“.'],
        ['tempora-20', 'Welche Zeitform hat „Nele ist nach Hause gefahren“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Perfekt', 'Suche Hilfsverb und Partizip II.', '„Ist gefahren“ bildet das Perfekt mit „sein“ und dem Partizip II.'],
        ['tempora-21', 'Welche Zeitform hat „Ihr werdet die Regeln wiederholen“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Futur I', 'Eine Form von „werden“ steht mit dem Infinitiv.', '„Werdet wiederholen“ ist Futur I.'],
        ['tempora-22', 'Welche Form passt? „Letztes Jahr ___ ich in einer Mannschaft.“', 'Ergänze das Verb „spielen“ im Präteritum.', ['spiele', 'spielte', 'habe gespielt', 'werde spielen'], 'spielte', '„Letztes Jahr“ liegt in der Vergangenheit.', 'Das Präteritum von „spielen“ lautet „spielte“.'],
        ['tempora-23', 'Welche Form passt? „Die Kinder ___ ihre Sportsachen gepackt.“', 'Ergänze das Hilfsverb für das Perfekt.', ['haben', 'sind', 'werden', 'wurden'], 'haben', '„Packen“ bildet das Perfekt mit „haben“.', 'Richtig ist „Die Kinder haben gepackt“.'],
        ['tempora-24', 'Welche Form passt? „Morgen ___ wir den neuen Stundenplan bekommen.“', 'Ergänze das Futur I.', ['haben', 'hatten', 'werden', 'sind'], 'werden', 'Das Subjekt „wir“ braucht die Form „werden“.', 'Das Futur I lautet „wir werden bekommen“.'],
        ['tempora-25', 'Welche Zeitform hat „Ich telefoniere gerade mit meiner Freundin“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präsens', '„Gerade“ zeigt die aktuelle Handlung.', '„Telefoniere“ steht im Präsens.'],
        ['tempora-26', 'Welche Zeitform hat „Der Zug fuhr pünktlich ab“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präteritum', 'Achte auf die Verbform „fuhr“.', '„Fuhr“ ist das Präteritum von „fahren“.'],
        ['tempora-27', 'Welche Form passt? „Die Gäste ___ spät angekommen.“', 'Ergänze das Hilfsverb für das Perfekt.', ['haben', 'sind', 'werden', 'wurden'], 'sind', '„Ankommen“ beschreibt eine Bewegung und bildet das Perfekt mit „sein“.', 'Das Perfekt lautet „Die Gäste sind angekommen“.'],
        ['tempora-28', 'Welche Form passt? „In zwei Tagen ___ der Kurs beginnen.“', 'Ergänze das Futur I.', ['wird', 'hat', 'ist', 'war'], 'wird', 'Das Subjekt ist „der Kurs“ im Singular.', 'Zum Subjekt im Singular passt „wird“: Der Kurs wird beginnen.'],
        ['tempora-29', 'Welche Zeitform hat „Du hast deine Hausaufgaben erledigt“?', 'Bestimme die Zeitform.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Perfekt', 'Das Hilfsverb „hast“ steht mit dem Partizip „erledigt“.', '„Hast erledigt“ ist Perfekt.'],
        ['tempora-30', 'Welche Form passt? „Vorhin ___ der Trainer die Mannschaft“?', 'Ergänze das Verb „begrüßen“ im Präteritum.', ['begrüßt', 'begrüßte', 'hat begrüßt', 'wird begrüßen'], 'begrüßte', '„Vorhin“ zeigt eine abgeschlossene Handlung in der Vergangenheit.', 'Das Präteritum von „begrüßen“ lautet „begrüßte“.']
    ],
    'aktiv-passiv': [
        ['passiv-11', '„Der Hausmeister schließt die Turnhalle.“ Aktiv oder Passiv?', 'Bestimme die Satzform.', ['Aktiv', 'Passiv', 'Infinitiv', 'Partizip'], 'Aktiv', 'Wer handelt?', 'Der Hausmeister führt die Handlung aus und ist das Subjekt. Der Satz steht im Aktiv.'],
        ['passiv-12', '„Die Turnhalle wird um acht Uhr geöffnet.“ Aktiv oder Passiv?', 'Bestimme die Satzform.', ['Aktiv', 'Passiv', 'Infinitiv', 'Partizip'], 'Passiv', 'Suche „werden“ und ein Partizip II.', '„Wird geöffnet“ ist die Passivform aus „werden“ und Partizip II.'],
        ['passiv-13', 'Welche Passivform passt? „Der Brief ___ heute verschickt.“', 'Ergänze das Hilfsverb im Präsens.', ['wird', 'werden', 'wurde', 'ist'], 'wird', '„Der Brief“ steht im Singular.', 'Im Passiv Präsens steht bei einem Subjekt im Singular „wird“.'],
        ['passiv-14', 'Welche Passivform passt? „Die Trikots ___ nach dem Spiel gewaschen.“', 'Ergänze das Hilfsverb im Präsens.', ['wird', 'werden', 'wurde', 'ist'], 'werden', '„Die Trikots“ steht im Plural.', 'Zum Subjekt im Plural passt „werden“: Die Trikots werden gewaschen.'],
        ['passiv-15', 'Wie lautet das Aktiv zu „Der Ball wird von Mia geworfen“?', 'Wähle die passende Umformung.', ['Mia wirft den Ball.', 'Der Ball wirft Mia.', 'Mia wird geworfen.', 'Den Ball wird Mia.'], 'Mia wirft den Ball.', 'Die Person nach „von“ wird im Aktiv zum Subjekt.', 'Mia handelt. Im Aktiv heißt der Satz „Mia wirft den Ball“.'],
        ['passiv-16', 'Welche Zeitform hat „Die Tore wurden gestern repariert“?', 'Bestimme die Zeitform des Passivs.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präteritum', 'Achte auf die Form „wurden“.', '„Wurden repariert“ ist Passiv im Präteritum.'],
        ['passiv-17', 'Welche Zeitform hat „Die Einladungen werden verteilt“?', 'Bestimme die Zeitform des Passivs.', ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'], 'Präsens', '„Werden“ steht hier im Präsens.', '„Werden verteilt“ bildet das Vorgangspassiv im Präsens.'],
        ['passiv-18', 'Welche Form ist Passiv?', 'Wähle den Satz im Passiv.', ['Der Trainer erklärt die Übung.', 'Die Übung wird erklärt.', 'Die Klasse versteht die Übung.', 'Wir erklären die Übung.'], 'Die Übung wird erklärt.', 'Im Passiv steht die Handlung oder Sache im Vordergrund.', '„Wird erklärt“ besteht aus „werden“ und Partizip II und ist Passiv.'],
        ['passiv-19', 'Welche Form passt? „Das Fenster ___ gestern geschlossen.“', 'Ergänze das Passiv im Präteritum.', ['wird', 'wurden', 'wurde', 'ist'], 'wurde', '„Das Fenster“ steht im Singular.', 'Das Präteritum von „werden“ lautet beim Singular „wurde“.'],
        ['passiv-20', 'Wie lautet das Passiv zu „Die Schüler reinigen den Klassenraum“?', 'Wähle die passende Umformung.', ['Der Klassenraum wird von den Schülern gereinigt.', 'Die Schüler werden den Klassenraum gereinigt.', 'Der Klassenraum reinigt die Schüler.', 'Den Klassenraum wird gereinigt.'], 'Der Klassenraum wird von den Schülern gereinigt.', 'Das Akkusativobjekt wird zum Subjekt.', '„Den Klassenraum“ wird zum Subjekt „Der Klassenraum“; das Passiv heißt „wird gereinigt“.'],
        ['passiv-21', 'Wie lautet das Aktiv zu „Die Aufgabe wird von der Lehrerin erklärt“?', 'Wähle die passende Umformung.', ['Die Lehrerin erklärt die Aufgabe.', 'Die Aufgabe erklärt die Lehrerin.', 'Die Lehrerin wird erklärt.', 'Die Aufgabe ist erklärt.'], 'Die Lehrerin erklärt die Aufgabe.', 'Die handelnde Person wird im Aktiv zum Subjekt.', 'Die Lehrerin handelt; „die Aufgabe“ bleibt Akkusativobjekt.'],
        ['passiv-22', 'Welche Form passt? „Die Nachricht ___ am Abend gelesen.“', 'Ergänze das Passiv im Präteritum.', ['wurde', 'wurden', 'wird', 'werden'], 'wurde', '„Die Nachricht“ ist Singular.', 'Beim Singular bildet „wurde gelesen“ das Passiv Präteritum.'],
        ['passiv-23', 'Welche Form passt? „Die Fahrräder ___ im Hof abgestellt.“', 'Ergänze das Passiv im Präsens.', ['wird', 'werden', 'wurde', 'ist'], 'werden', '„Die Fahrräder“ ist Plural.', 'Im Präsens steht bei einem Subjekt im Plural „werden“.'],
        ['passiv-24', 'Welche Aussage beschreibt das Aktiv richtig?', 'Wähle die passende Erklärung.', ['Das Subjekt führt die Handlung aus.', 'Das Subjekt empfängt immer die Handlung.', 'Der Satz hat kein Verb.', 'Das Verb steht immer im Infinitiv.'], 'Das Subjekt führt die Handlung aus.', 'Im Aktiv ist wichtig, wer handelt.', 'Im Aktiv führt das Subjekt die Handlung aus, zum Beispiel: „Mila wirft den Ball“.'],
        ['passiv-25', 'Welche Aussage beschreibt das Passiv richtig?', 'Wähle die passende Erklärung.', ['Die Handlung oder das Ergebnis steht im Vordergrund.', 'Es gibt immer zwei Subjekte.', 'Das Verb steht nur im Präsens.', 'Ein Passivsatz enthält kein Partizip.'], 'Die Handlung oder das Ergebnis steht im Vordergrund.', 'Im Passiv ist die handelnde Person oft weniger wichtig.', 'Das Passiv lenkt den Blick auf die Handlung oder das betroffene Objekt.'],
        ['passiv-26', 'Wie lautet das Passiv zu „Der Betrieb verschickt die Pakete“?', 'Wähle die passende Umformung.', ['Die Pakete werden vom Betrieb verschickt.', 'Der Betrieb wird die Pakete verschickt.', 'Die Pakete verschicken den Betrieb.', 'Die Pakete wurden vom Betrieb verschickt.'], 'Die Pakete werden vom Betrieb verschickt.', 'Behalte die Zeitform Präsens bei.', 'Das Objekt „die Pakete“ wird Subjekt; Präsenspassiv: „werden verschickt“.'],
        ['passiv-27', 'Welche Form passt? „Das Sportfest ___ von der Klasse organisiert.“', 'Ergänze das Passiv im Präsens.', ['wird', 'werden', 'wurde', 'ist'], 'wird', '„Das Sportfest“ steht im Singular.', 'Zum Subjekt im Singular passt die Passivform „wird organisiert“.'],
        ['passiv-28', 'Welche Form ist ein Passivsatz im Präteritum?', 'Wähle den richtigen Satz.', ['Die Plakate wurden aufgehängt.', 'Die Plakate werden aufgehängt.', 'Die Klasse hängt Plakate auf.', 'Die Klasse wird Plakate aufhängen.'], 'Die Plakate wurden aufgehängt.', 'Präteritum von „werden“: wurde/wurden.', '„Wurden aufgehängt“ ist Passiv im Präteritum.'],
        ['passiv-29', 'Wie lautet das Aktiv zu „Die Musik wird von der Band gespielt“?', 'Wähle die passende Umformung.', ['Die Band spielt die Musik.', 'Die Musik spielt die Band.', 'Die Band wird gespielt.', 'Die Musik ist gespielt.'], 'Die Band spielt die Musik.', '„Von der Band“ nennt die handelnde Person.', 'Im Aktiv wird die Band zum Subjekt: „Die Band spielt die Musik“.'],
        ['passiv-30', 'Welche Verbteile bilden das Vorgangspassiv?', 'Wähle die passende Kombination.', ['werden + Partizip II', 'haben + Infinitiv', 'sein + Präsensform', 'werden + Partizip I'], 'werden + Partizip II', 'Beispiel: „wird geöffnet“.', 'Das Vorgangspassiv wird mit einer Form von „werden“ und dem Partizip II gebildet.']
    ],
    wortarten: [
        ['wort-11', 'Welche Wortart hat „obwohl“ im Satz „Obwohl es spät ist, lernt Ali“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Präposition', 'Konjunktion'], 'Konjunktion', 'Das Wort verbindet Haupt- und Nebensatz.', '„Obwohl“ leitet einen Nebensatz ein und ist eine Konjunktion.'],
        ['wort-12', 'Welche Wortart hat „unter“ in „Der Ball liegt unter dem Tisch“?', 'Bestimme die Wortart.', ['Pronomen', 'Präposition', 'Adjektiv', 'Verb'], 'Präposition', 'Das Wort beschreibt die Lage.', '„Unter“ steht vor einer Nomengruppe und beschreibt ein Verhältnis: Es ist eine Präposition.'],
        ['wort-13', 'Welche Wortart hat „freundlich“ in „Die Kollegin begrüßt uns freundlich“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Adjektiv', 'Pronomen'], 'Adjektiv', 'Das Wort beschreibt, wie sie begrüßt.', '„Freundlich“ beschreibt die Art der Begrüßung und ist ein Adjektiv.'],
        ['wort-14', 'Welche Wortart hat „sie“ in „Sie bringt ihre Sportsachen mit“?', 'Bestimme die Wortart.', ['Nomen', 'Pronomen', 'Präposition', 'Konjunktion'], 'Pronomen', 'Das Wort kann einen Namen ersetzen.', '„Sie“ steht stellvertretend für eine Person und ist ein Pronomen.'],
        ['wort-15', 'Welche Wortart hat „schickt“ in „Ben schickt eine Bewerbung“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Adjektiv', 'Präposition'], 'Verb', 'Das Wort bezeichnet eine Handlung.', '„Schickt“ ist das Verb des Satzes und beschreibt, was Ben tut.'],
        ['wort-16', 'Welche Wortart hat „Erfahrung“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Adjektiv', 'Konjunktion'], 'Nomen', 'Das Wort bezeichnet etwas, das man sammeln kann.', '„Erfahrung“ ist ein abstraktes Nomen und wird großgeschrieben.'],
        ['wort-17', 'Welche Wortart hat „während“ in „Während des Trainings regnet es“?', 'Bestimme die Wortart.', ['Pronomen', 'Präposition', 'Adjektiv', 'Verb'], 'Präposition', 'Das Wort steht vor „des Trainings“ und beschreibt Zeit.', '„Während“ ist hier eine Präposition mit Genitiv.'],
        ['wort-18', 'Welche Wortart hat „aber“ in „Ich wollte kommen, aber der Bus war spät“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Konjunktion', 'Pronomen'], 'Konjunktion', 'Das Wort verbindet zwei Satzteile.', '„Aber“ verbindet zwei Hauptsätze und ist eine Konjunktion.'],
        ['wort-19', 'Welche Wortart hat „sorgfältig“ in „Sie arbeitet sorgfältig“?', 'Bestimme die Wortart.', ['Adjektiv', 'Nomen', 'Verb', 'Präposition'], 'Adjektiv', 'Das Wort beschreibt die Art der Arbeit.', '„Sorgfältig“ beschreibt, wie sie arbeitet, und ist ein Adjektiv.'],
        ['wort-20', 'Welche Wortart hat „wir“ im Satz „Wir lernen für die Prüfung“?', 'Bestimme die Wortart.', ['Nomen', 'Pronomen', 'Verb', 'Konjunktion'], 'Pronomen', 'Das Wort steht für eine Gruppe von Personen.', '„Wir“ ersetzt die Namen der Personen und ist ein Personalpronomen.'],
        ['wort-21', 'Welche Wortart hat „hilfreich“ in „Der Tipp war hilfreich“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Adjektiv', 'Präposition'], 'Adjektiv', 'Das Wort beschreibt den Tipp.', '„Hilfreich“ beschreibt eine Eigenschaft des Tipps und ist ein Adjektiv.'],
        ['wort-22', 'Welche Wortart hat „deshalb“ in „Es regnet, deshalb bleiben wir drinnen“?', 'Bestimme die Wortart.', ['Pronomen', 'Konjunktion', 'Nomen', 'Adjektiv'], 'Konjunktion', 'Das Wort verbindet zwei Aussagen.', '„Deshalb“ verbindet die Aussagen inhaltlich und wird hier als Konjunktionaladverb verwendet.'],
        ['wort-23', 'Welche Wortart hat „neben“ in „Neben dem Sportplatz steht ein Baum“?', 'Bestimme die Wortart.', ['Präposition', 'Verb', 'Pronomen', 'Nomen'], 'Präposition', 'Das Wort beschreibt einen Ort.', '„Neben“ steht vor einer Nomengruppe und beschreibt die Lage; es ist eine Präposition.'],
        ['wort-24', 'Welche Wortart hat „euer“ in „Euer Team spielt heute“?', 'Bestimme die Wortart.', ['Adjektiv', 'Pronomen', 'Verb', 'Konjunktion'], 'Pronomen', 'Das Wort begleitet das Nomen „Team“.', '„Euer“ ist ein Possessivpronomen und begleitet das Nomen „Team“.'],
        ['wort-25', 'Welche Wortart hat „planen“ in „Wir planen den Ausflug“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Adjektiv', 'Präposition'], 'Verb', 'Das Wort drückt eine Handlung aus.', '„Planen“ ist das Verb und beschreibt, was wir tun.'],
        ['wort-26', 'Welche Wortart hat „Geduld“?', 'Bestimme die Wortart.', ['Nomen', 'Verb', 'Adjektiv', 'Pronomen'], 'Nomen', 'Das Wort benennt eine Eigenschaft oder Fähigkeit.', '„Geduld“ ist ein abstraktes Nomen und wird großgeschrieben.'],
        ['wort-27', 'Welche Wortart hat „hell“ in „Der Raum ist hell“?', 'Bestimme die Wortart.', ['Verb', 'Nomen', 'Adjektiv', 'Konjunktion'], 'Adjektiv', 'Das Wort beschreibt den Raum.', '„Hell“ beschreibt den Zustand des Raums und ist ein Adjektiv.'],
        ['wort-28', 'Welche Wortart hat „damit“ in „Ich lerne, damit ich die Prüfung bestehe“?', 'Bestimme die Wortart.', ['Nomen', 'Konjunktion', 'Adjektiv', 'Verb'], 'Konjunktion', 'Das Wort leitet einen Nebensatz mit einem Zweck ein.', '„Damit“ leitet den Nebensatz ein und ist eine unterordnende Konjunktion.'],
        ['wort-29', 'Welche Wortart hat „zwischen“ in „Der Bus hält zwischen der Schule und dem Bahnhof“?', 'Bestimme die Wortart.', ['Pronomen', 'Präposition', 'Verb', 'Nomen'], 'Präposition', 'Das Wort stellt eine räumliche Beziehung her.', '„Zwischen“ beschreibt die Lage des Busses und ist eine Präposition.'],
        ['wort-30', 'Welche Wortart hat „ihnen“ in „Die Lehrerin erklärt ihnen die Aufgabe“?', 'Bestimme die Wortart.', ['Nomen', 'Pronomen', 'Adjektiv', 'Konjunktion'], 'Pronomen', 'Das Wort steht für mehrere Personen.', '„Ihnen“ ist ein Personalpronomen im Dativ und ersetzt eine Personengruppe.']
    ],
    rechtschreibung: [
        ['recht-11', 'Welche Schreibweise passt? „Ich hoffe, ___ du Zeit hast.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dasss'], 'dass', 'Das Wort leitet einen Nebensatz ein.', '„Dass“ ist die Konjunktion und leitet den Nebensatz „dass du Zeit hast“ ein.'],
        ['recht-12', 'Welche Schreibweise passt? „___ Buch auf dem Tisch gehört mir.“', 'Wähle das richtige Wort.', ['Das', 'Dass', 'Daß', 'Dahs'], 'Das', 'Vor „Buch“ steht ein Artikel.', '„Das“ ist der bestimmte Artikel vor dem Nomen „Buch“.'],
        ['recht-13', 'Welche Schreibweise ist richtig: „Der Hund ist sehr ___.“', 'Wähle die richtige Form.', ['groß', 'gross', 'großs', 'grohs'], 'groß', 'Nach dem langen Vokal steht hier ß.', '„Groß“ wird nach langem „o“ mit ß geschrieben.'],
        ['recht-14', 'Welche Schreibweise ist richtig: „Nach dem Regen ist die Straße ___.“', 'Wähle die richtige Form.', ['nass', 'naß', 'nas', 'naass'], 'nass', 'Vor „ss“ steht ein kurzer Vokal.', '„Nass“ hat einen kurzen Vokal und wird deshalb mit ss geschrieben.'],
        ['recht-15', 'Welche Schreibweise passt? „Das ist das Fahrrad, ___ ich gekauft habe.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dasss'], 'das', 'Das Wort kann durch „welches“ ersetzt werden.', '„Das“ ist ein Relativpronomen und kann durch „welches“ ersetzt werden.'],
        ['recht-16', 'Welche Schreibweise passt? „Sie sagt, ___ sie später kommt.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dasz'], 'dass', 'Nach „sagt“ folgt ein Nebensatz.', '„Dass“ leitet den Nebensatz ein und wird mit ss geschrieben.'],
        ['recht-17', 'Welche Schreibweise ist richtig: „Wir laufen über den ___.“', 'Wähle die richtige Form.', ['Fußweg', 'Fussweg', 'Fußsweg', 'Fuhsweg'], 'Fußweg', 'Der Vokal in „Fuß“ ist lang.', '„Fuß“ wird mit ß geschrieben; daher auch „Fußweg“.'],
        ['recht-18', 'Welche Schreibweise ist richtig: „Die ___ beginnt um neun Uhr.“', 'Wähle das richtige Wort.', ['Klasse', 'Klaße', 'Klase', 'Klaasse'], 'Klasse', 'Der Vokal vor dem s-Laut ist kurz.', '„Klasse“ wird nach kurzem a mit ss geschrieben.'],
        ['recht-19', 'Welche Schreibweise passt? „___ Handy, das dort liegt, ist meins.“', 'Wähle das richtige Wort.', ['Das', 'Dass', 'Daß', 'Dahs'], 'Das', 'Vor „Handy“ steht ein Artikel.', '„Das“ ist hier der Artikel zum Nomen „Handy“.'],
        ['recht-20', 'Welche Schreibweise passt? „Ich merke, ___ die Aufgabe schwierig ist.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dahs'], 'dass', '„Merke“ wird durch einen Nebensatz ergänzt.', '„Dass“ leitet den Nebensatz „dass die Aufgabe schwierig ist“ ein.'],
        ['recht-21', 'Welche Schreibweise ist richtig: „Der Weg war sehr ___.“', 'Wähle die richtige Form.', ['steil', 'steihl', 'steill', 'steyl'], 'steil', 'Der Doppellaut ei wird mit i geschrieben.', '„Steil“ enthält den Doppellaut ei und endet auf l.'],
        ['recht-22', 'Welche Schreibweise ist richtig: „Bitte ___ die Tür!“', 'Wähle die richtige Form.', ['schließ', 'schliess', 'schliß', 'schlies'], 'schließ', 'Nach dem langen ie steht ß.', '„Schließ“ wird mit ß geschrieben, weil der Vokal lang gesprochen wird.'],
        ['recht-23', 'Welche Schreibweise passt? „Das ist das Foto, ___ du gestern gemacht hast.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dahs'], 'das', 'Ersetze das Wort probeweise durch „welches“.', '„Das“ kann hier durch „welches“ ersetzt werden und ist ein Relativpronomen.'],
        ['recht-24', 'Welche Schreibweise passt? „Wir wissen, ___ der Zug Verspätung hat.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dasz'], 'dass', 'Nach „wissen“ steht ein Nebensatz.', 'Die Konjunktion „dass“ leitet den Nebensatz ein.'],
        ['recht-25', 'Welche Schreibweise ist richtig: „Nach dem Spiel tat mein ___ weh.“', 'Wähle die richtige Form.', ['Fuß', 'Fuss', 'Fuhs', 'Fußs'], 'Fuß', 'Der Vokal wird lang gesprochen.', '„Fuß“ wird nach langem u mit ß geschrieben.'],
        ['recht-26', 'Welche Schreibweise ist richtig: „Die Kinder essen draußen ___.“', 'Wähle das richtige Wort.', ['Eis', 'Eiß', 'Eiss', 'Eihs'], 'Eis', 'Hier steht nur ein s nach dem Doppellaut ei.', '„Eis“ wird mit einfachem s geschrieben.'],
        ['recht-27', 'Welche Schreibweise passt? „Ich glaube, ___ ist die richtige Lösung.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dasss'], 'das', 'Das Wort steht stellvertretend für „die Lösung“.', '„Das“ ist hier ein Pronomen und kann durch „dies“ ersetzt werden.'],
        ['recht-28', 'Welche Schreibweise ist richtig: „Die ___ findet morgen statt.“', 'Wähle das richtige Wort.', ['Abschlussfeier', 'Abschlußfeier', 'Abschlusfeier', 'Abschlussfeierh'], 'Abschlussfeier', 'Nach kurzem Vokal wird „Schluss“ mit ss geschrieben.', '„Abschluss“ folgt der Regel: kurzer Vokal vor ss.'],
        ['recht-29', 'Welche Schreibweise passt? „Es ärgert mich, ___ ich warten muss.“', 'Wähle das richtige Wort.', ['das', 'dass', 'daß', 'dasz'], 'dass', 'Das Wort verbindet Haupt- und Nebensatz.', '„Dass“ ist eine Konjunktion und leitet den Nebensatz ein.'],
        ['recht-30', 'Welche Schreibweise ist richtig: „Der See ist sehr ___.“', 'Wähle die richtige Form.', ['tief', 'tieff', 'tiefh', 'tiefß'], 'tief', 'Das Wort endet mit einem einfachen f.', '„Tief“ wird mit einfachem f geschrieben.']
    ],
    'gross-klein': [
        ['gross-11', 'Welche Schreibweise ist richtig? „Beim ___ höre ich Musik.“', 'Wähle die passende Form.', ['Joggen', 'joggen', 'JOGGEN', 'jogGen'], 'Joggen', 'Nach „beim“ folgt ein nominalisierter Infinitiv.', '„Joggen“ wird nach „beim“ als Nomen gebraucht und großgeschrieben.'],
        ['gross-12', 'Welche Schreibweise ist richtig? „Das ___ fällt ihm leicht.“', 'Wähle die passende Form.', ['zeichnen', 'Zeichnen', 'ZEICHNEN', 'zeichNen'], 'Zeichnen', 'Der Artikel „das“ weist auf ein Nomen hin.', '„Zeichnen“ ist ein nominalisierter Infinitiv und wird großgeschrieben.'],
        ['gross-13', 'Welche Schreibweise passt? „Sie hat etwas ___ erlebt.“', 'Wähle die richtige Form.', ['besonderes', 'Besonderes', 'BESONDERES', 'besondres'], 'Besonderes', 'Nach „etwas“ kann ein Adjektiv nominalisiert sein.', '„Besonderes“ wird ohne Bezugsnomen gebraucht und deshalb großgeschrieben.'],
        ['gross-14', 'Welche Schreibweise passt? „Wir wünschen dir alles ___.“', 'Wähle die richtige Form.', ['Gute', 'gute', 'GUTE', 'güte'], 'Gute', 'Nach „alles“ steht hier ein nominalisiertes Adjektiv.', '„Gute“ ist in „alles Gute“ substantiviert und wird großgeschrieben.'],
        ['gross-15', 'Welche Schreibweise ist richtig? „Vor dem ___ räumte Ben auf.“', 'Wähle die passende Form.', ['Essen', 'essen', 'ESSEN', 'EssEn'], 'Essen', 'Nach „dem“ wird der Infinitiv als Nomen verwendet.', '„Essen“ steht nach dem Artikel „dem“ als Nomen und wird großgeschrieben.'],
        ['gross-16', 'Welche Schreibweise ist richtig? „Das ___ der Bewerbung dauerte lange.“', 'Wähle die passende Form.', ['formulieren', 'Formulieren', 'FORMULIEREN', 'formuLieren'], 'Formulieren', '„Das“ steht vor einem nominalisierten Infinitiv.', 'Der Infinitiv wird durch den Artikel zum Nomen: das Formulieren.'],
        ['gross-17', 'Welche Schreibweise passt? „Ich wünsche dir alles ___.“', 'Wähle die passende Form.', ['Liebe', 'liebe', 'LIEBE', 'liebeS'], 'Liebe', 'Die Wendung lautet „alles Liebe“.', '„Liebe“ wird in „alles Liebe“ als Nomen gebraucht und großgeschrieben.'],
        ['gross-18', 'Welche Schreibweise ist richtig? „Beim ___ muss man auf die Straße achten.“', 'Wähle die passende Form.', ['Radfahren', 'radfahren', 'RADFAHREN', 'RadFahren'], 'Radfahren', 'Nach „beim“ wird das Tun nominalisiert.', '„Radfahren“ wird nach „beim“ substantiviert und großgeschrieben.'],
        ['gross-19', 'Welche Schreibweise passt? „Er hat nichts ___ gefunden.“', 'Wähle die passende Form.', ['passendes', 'Passendes', 'PASSENDES', 'passEnds'], 'Passendes', '„Nichts“ kann ein nominalisiertes Adjektiv nach sich ziehen.', '„Passendes“ steht ohne Nomen und wird großgeschrieben.'],
        ['gross-20', 'Welche Schreibweise ist richtig? „Nach dem ___ ging die Klasse nach Hause.“', 'Wähle die passende Form.', ['Lernen', 'lernen', 'LERNEN', 'lerNen'], 'Lernen', 'Der Artikel „dem“ zeigt die Nominalisierung an.', '„Lernen“ wird nach „dem“ als Nomen verwendet und großgeschrieben.'],
        ['gross-21', 'Welche Schreibweise ist richtig? „Sie hat nichts ___ gesagt.“', 'Wähle die passende Form.', ['Wichtiges', 'wichtiges', 'WICHTIGES', 'WichtigeS'], 'Wichtiges', 'Das Adjektiv steht ohne Nomen nach „nichts“.', '„Wichtiges“ ist substantiviert und wird großgeschrieben.'],
        ['gross-22', 'Welche Schreibweise passt? „Beim ___ treffe ich oft Freunde.“', 'Wähle die passende Form.', ['Spazierengehen', 'spazierengehen', 'SPAZIERENGEHEN', 'SpazierenGehen'], 'Spazierengehen', 'Die Verbindung wird als ein nominalisierter Infinitiv gebraucht.', '„Spazierengehen“ steht nach „beim“ als Nomen und wird zusammengeschrieben und großgeschrieben.'],
        ['gross-23', 'Welche Schreibweise passt? „Etwas ___ möchte ich noch ergänzen.“', 'Wähle die passende Form.', ['anderes', 'Anderes', 'ANDERES', 'anderesS'], 'Anderes', 'Nach „etwas“ folgt ein nominalisiertes Adjektiv.', '„Anderes“ wird ohne Bezugsnomen gebraucht und deshalb großgeschrieben.'],
        ['gross-24', 'Welche Schreibweise ist richtig? „Das ___ macht mir Freude.“', 'Wähle die passende Form.', ['Kochen', 'kochen', 'KOCHEN', 'KochEn'], 'Kochen', 'Ein Artikel steht vor dem Infinitiv.', '„Kochen“ wird mit Artikel als Nomen gebraucht und großgeschrieben.'],
        ['gross-25', 'Welche Schreibweise ist richtig? „Sie hat heute viel ___ gelernt.“', 'Wähle die passende Form.', ['Neues', 'neues', 'NEUES', 'neües'], 'Neues', 'Nach „viel“ kann ein Adjektiv nominalisiert sein.', '„Neues“ steht ohne Bezugsnomen und wird großgeschrieben.'],
        ['gross-26', 'Welche Schreibweise passt? „Vor dem ___ machte er seine Hausaufgaben.“', 'Wähle die passende Form.', ['Schlafen', 'schlafen', 'SCHLAFEN', 'SchlaFen'], 'Schlafen', '„Vor dem“ steht vor einem nominalisierten Infinitiv.', '„Schlafen“ wird nach „dem“ als Nomen verwendet und großgeschrieben.'],
        ['gross-27', 'Welche Schreibweise ist richtig? „Das ___ der Regeln ist wichtig.“', 'Wähle die passende Form.', ['Verstehen', 'verstehen', 'VERSTEHEN', 'VerStehen'], 'Verstehen', 'Der Artikel „das“ zeigt die Nominalisierung.', '„Verstehen“ wird mit Artikel als Nomen gebraucht und großgeschrieben.'],
        ['gross-28', 'Welche Schreibweise passt? „Die ___ war anstrengend.“', 'Wähle die passende Form.', ['Prüfung', 'prüfung', 'PRÜFUNG', 'PrüFung'], 'Prüfung', 'Gesucht ist ein Nomen.', '„Prüfung“ bezeichnet ein Ereignis und wird als Nomen großgeschrieben.'],
        ['gross-29', 'Welche Schreibweise ist richtig? „Er hat etwas ___ gebastelt.“', 'Wähle die passende Form.', ['Schönes', 'schönes', 'SCHÖNES', 'schönesS'], 'Schönes', 'Nach „etwas“ kann ein Adjektiv als Nomen stehen.', '„Schönes“ ist substantiviert und wird großgeschrieben.'],
        ['gross-30', 'Welche Schreibweise passt? „Beim ___ sollst du dich konzentrieren.“', 'Wähle die passende Form.', ['Lesen', 'lesen', 'LESEN', 'lesEn'], 'Lesen', 'Nach „beim“ wird ein Infinitiv nominalisiert.', '„Lesen“ wird nach „beim“ als Nomen gebraucht und großgeschrieben.']
    ],
    schreibwerkstatt: [
        ['schreib-11', 'Welche Formulierung ist für eine Bewerbung am besten?', 'Wähle die höfliche und sachliche Formulierung.', ['Ich will bei euch anfangen.', 'Ich interessiere mich für ein Praktikum in Ihrem Betrieb.', 'Euer Betrieb ist mega cool.', 'Nehmt mich bitte.'], 'Ich interessiere mich für ein Praktikum in Ihrem Betrieb.', 'Nutze eine höfliche Anrede und klare Worte.', 'Der Satz ist höflich, sachlich und nennt das Anliegen deutlich.'],
        ['schreib-12', 'Wo gehört das Komma hin? „Ich bleibe zu Hause weil ich krank bin.“', 'Wähle die richtige Zeichensetzung.', ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe, zu Hause weil ich krank bin.', 'Ich bleibe zu Hause weil, ich krank bin.', 'Ich, bleibe zu Hause weil ich krank bin.'], 'Ich bleibe zu Hause, weil ich krank bin.', 'Vor einem Nebensatz mit „weil“ steht ein Komma.', 'Der weil-Satz ist ein Nebensatz und wird durch ein Komma abgetrennt.'],
        ['schreib-13', 'Welche Formulierung ist Standardsprache statt „Ich hab keinen Plan“?', 'Wähle die passende Umformulierung.', ['Ich habe keine Ahnung.', 'Ich hab null Plan.', 'Keinen Plan hab ich.', 'Ich weiß nix.'], 'Ich habe keine Ahnung.', 'Schreibe das Verb vollständig und wähle eine neutrale Wendung.', '„Ich habe keine Ahnung“ ist vollständig und neutral formuliert.'],
        ['schreib-14', 'Wo gehört das Komma hin? „Sie sagt dass sie pünktlich kommt.“', 'Wähle die richtige Zeichensetzung.', ['Sie sagt, dass sie pünktlich kommt.', 'Sie, sagt dass sie pünktlich kommt.', 'Sie sagt dass, sie pünktlich kommt.', 'Sie sagt dass sie, pünktlich kommt.'], 'Sie sagt, dass sie pünktlich kommt.', 'Vor dem dass-Nebensatz steht ein Komma.', 'Der dass-Satz wird vom Hauptsatz durch ein Komma getrennt.'],
        ['schreib-15', 'Welche Formulierung passt in eine höfliche Nachricht an einen Betrieb?', 'Wähle den passenden Satz.', ['Schick mir sofort eine Antwort.', 'Könnten Sie mir bitte mitteilen, ob ein Praktikumsplatz frei ist?', 'Sag mal, habt ihr noch Platz?', 'Ich brauch die Antwort bald.'], 'Könnten Sie mir bitte mitteilen, ob ein Praktikumsplatz frei ist?', 'Formuliere als höfliche Bitte.', 'Die Formulierung verwendet die höfliche Anrede und eine klare Frage.'],
        ['schreib-16', 'Wo gehört das Komma hin? „Obwohl es regnete gingen wir zum Training.“', 'Wähle die richtige Zeichensetzung.', ['Obwohl es regnete, gingen wir zum Training.', 'Obwohl, es regnete gingen wir zum Training.', 'Obwohl es, regnete gingen wir zum Training.', 'Obwohl es regnete gingen, wir zum Training.'], 'Obwohl es regnete, gingen wir zum Training.', 'Der Nebensatz steht am Satzanfang und endet vor dem Komma.', 'Der obwohl-Nebensatz wird durch ein Komma vom Hauptsatz getrennt.'],
        ['schreib-17', 'Welche Standardsprache ersetzt „Der Test war voll easy“?', 'Wähle die passende Umformulierung.', ['Der Test war sehr einfach.', 'Der Test war mega easy.', 'Der Test war voll leicht halt.', 'Der Test war easy-peasy.'], 'Der Test war sehr einfach.', 'Ersetze „voll easy“ durch eine sachliche Wendung.', '„Sehr einfach“ ist eine klare und standardsprachliche Formulierung.'],
        ['schreib-18', 'Welche Formulierung nennt eine Stärke konkret?', 'Wähle den passenden Bewerbungssatz.', ['Ich bin ganz okay.', 'Ich arbeite zuverlässig und erledige Aufgaben sorgfältig.', 'Ich bin nett und so.', 'Ich kann eigentlich alles.'], 'Ich arbeite zuverlässig und erledige Aufgaben sorgfältig.', 'Beschreibe beobachtbares Verhalten statt allgemeiner Wertungen.', 'Zuverlässigkeit und sorgfältiges Arbeiten werden durch konkrete Tätigkeiten verständlich.'],
        ['schreib-19', 'Wo gehört das Komma hin? „Ich freue mich dass ich mitarbeiten darf.“', 'Wähle die richtige Zeichensetzung.', ['Ich freue mich, dass ich mitarbeiten darf.', 'Ich, freue mich dass ich mitarbeiten darf.', 'Ich freue mich dass, ich mitarbeiten darf.', 'Ich freue mich dass ich, mitarbeiten darf.'], 'Ich freue mich, dass ich mitarbeiten darf.', 'Der dass-Satz wird durch ein Komma eingeleitet.', 'Das Komma trennt den Hauptsatz vom dass-Nebensatz.'],
        ['schreib-20', 'Welche Anrede passt in ein formelles Bewerbungsschreiben?', 'Wähle die passende Anrede.', ['Hey Leute,', 'Sehr geehrte Damen und Herren,', 'Hallo zusammen,', 'Na, was geht?'], 'Sehr geehrte Damen und Herren,', 'Wähle eine höfliche, formelle Anrede.', '„Sehr geehrte Damen und Herren“ ist eine übliche formelle Anrede, wenn der Name unbekannt ist.'],
        ['schreib-21', 'Welche Formulierung ist sachlicher als „Der Kunde war mega sauer“?', 'Wähle die passende Umformulierung.', ['Der Kunde war sehr verärgert.', 'Der Kunde war total abgefuckt.', 'Der Kunde war ultra sauer.', 'Der Kunde hat voll ausgerastet.'], 'Der Kunde war sehr verärgert.', 'Ersetze die Umgangssprache durch ein neutrales Wort.', '„Sehr verärgert“ beschreibt die Situation sachlich und standardsprachlich.'],
        ['schreib-22', 'Wo gehört das Komma hin? „Wir trainieren weiter obwohl wir müde sind.“', 'Wähle die richtige Zeichensetzung.', ['Wir trainieren weiter, obwohl wir müde sind.', 'Wir, trainieren weiter obwohl wir müde sind.', 'Wir trainieren, weiter obwohl wir müde sind.', 'Wir trainieren weiter obwohl, wir müde sind.'], 'Wir trainieren weiter, obwohl wir müde sind.', 'Vor dem obwohl-Nebensatz steht ein Komma.', 'Der Nebensatz mit „obwohl“ wird mit Komma abgetrennt.'],
        ['schreib-23', 'Welche Formulierung passt als Begründung für ein Praktikum?', 'Wähle den vollständigen und sachlichen Satz.', ['Ich will halt mal schauen.', 'Ich interessiere mich für den Beruf und möchte praktische Erfahrungen sammeln.', 'Der Beruf sieht cool aus.', 'Ich brauche irgendwas für die Schule.'], 'Ich interessiere mich für den Beruf und möchte praktische Erfahrungen sammeln.', 'Nenne ein konkretes Interesse und ein Lernziel.', 'Der Satz erklärt das Interesse und nennt ein nachvollziehbares Ziel.'],
        ['schreib-24', 'Welche Formulierung ist eine vollständige Bitte?', 'Wähle die höfliche Form.', ['Antwort schnell!', 'Bitte geben Sie mir Bescheid, ob der Termin möglich ist.', 'Sag, ob das geht.', 'Ich will wissen, ob das klappt.'], 'Bitte geben Sie mir Bescheid, ob der Termin möglich ist.', 'Nutze eine vollständige Bitte und die Höflichkeitsform.', 'Die Formulierung enthält eine höfliche Bitte und eine klare indirekte Frage.'],
        ['schreib-25', 'Wo gehört das Komma hin? „Ich weiß dass du dein Bestes gibst.“', 'Wähle die richtige Zeichensetzung.', ['Ich weiß, dass du dein Bestes gibst.', 'Ich, weiß dass du dein Bestes gibst.', 'Ich weiß dass, du dein Bestes gibst.', 'Ich weiß dass du, dein Bestes gibst.'], 'Ich weiß, dass du dein Bestes gibst.', 'Vor dem dass-Nebensatz steht das Komma.', 'Der dass-Nebensatz wird durch ein Komma vom Hauptsatz getrennt.'],
        ['schreib-26', 'Welche Standardsprache ersetzt „Wir haben den Bus voll knapp geschafft“?', 'Wähle die passende Umformulierung.', ['Wir haben den Bus gerade noch erreicht.', 'Wir haben den Bus voll knapp gepackt.', 'Den Bus haben wir so knapp geschafft.', 'Wir sind fast nicht in den Bus gekommen, halt.'], 'Wir haben den Bus gerade noch erreicht.', 'Verwende ein passendes Verb statt „geschafft“ in dieser Bedeutung.', '„Gerade noch erreicht“ drückt klar aus, dass es knapp war.'],
        ['schreib-27', 'Welche Formulierung ist für einen Bericht am sachlichsten?', 'Wähle den passenden Satz.', ['Die Mannschaft hat richtig krass gewonnen.', 'Die Mannschaft gewann das Spiel deutlich.', 'Die Mannschaft hat voll abgeräumt.', 'Das Team war mega gut drauf.'], 'Die Mannschaft gewann das Spiel deutlich.', 'Ein Bericht soll informieren und nicht übertreiben.', '„Gewann das Spiel deutlich“ ist eine sachliche und genaue Aussage.'],
        ['schreib-28', 'Wo gehören die Kommas hin? „Ich denke dass wir wenn der Bus kommt pünktlich sind.“', 'Wähle die richtige Zeichensetzung.', ['Ich denke, dass wir, wenn der Bus kommt, pünktlich sind.', 'Ich denke dass, wir wenn der Bus kommt pünktlich sind.', 'Ich denke, dass wir wenn, der Bus kommt pünktlich sind.', 'Ich denke dass wir, wenn der Bus kommt pünktlich, sind.'], 'Ich denke, dass wir, wenn der Bus kommt, pünktlich sind.', 'Der dass-Satz und der eingeschobene wenn-Satz brauchen Kommas.', 'Das Komma trennt den dass-Satz ab; der eingeschobene Nebensatz wird vorn und hinten durch Kommas markiert.'],
        ['schreib-29', 'Welche Formulierung eignet sich für den Schluss einer Bewerbung?', 'Wähle den höflichen Satz.', ['Meldet euch schnell.', 'Über eine Einladung zu einem persönlichen Gespräch freue ich mich.', 'Sagt Bescheid, wenn ihr Bock habt.', 'Hoffe, ihr nehmt mich.'], 'Über eine Einladung zu einem persönlichen Gespräch freue ich mich.', 'Ein Bewerbungsschluss klingt höflich und selbstbewusst.', 'Der Satz formuliert den Wunsch nach einem Gespräch höflich und vollständig.'],
        ['schreib-30', 'Welche Standardsprache ersetzt „Ich hab Bock auf das Praktikum“?', 'Wähle die passende Umformulierung.', ['Ich interessiere mich sehr für das Praktikum.', 'Ich hab mega Lust auf das Praktikum.', 'Das Praktikum ist voll mein Ding.', 'Ich will das Praktikum unbedingt machen, ey.'], 'Ich interessiere mich sehr für das Praktikum.', 'Ersetze „Bock haben“ durch eine sachliche Wendung.', '„Ich interessiere mich sehr“ ist eine standardsprachliche und für Bewerbungen geeignete Formulierung.']
    ],
    satzbau: [
        ['satz-11', 'Welche Satzart ist „Wann beginnt der Film?“', 'Wähle die passende Satzart.', ['Aussagesatz', 'Ergänzungsfrage', 'Entscheidungsfrage', 'Aufforderung'], 'Ergänzungsfrage', 'Das Fragewort „wann“ verlangt eine genauere Antwort.', 'Die Frage beginnt mit dem Fragewort „wann“ und erwartet eine Ergänzung.'],
        ['satz-12', 'Welche Satzart ist „Räum bitte dein Zimmer auf!“', 'Bestimme die Satzart nach der Aussageabsicht.', ['Aussagesatz', 'Ergänzungsfrage', 'Entscheidungsfrage', 'Aufforderungssatz'], 'Aufforderungssatz', 'Der Satz fordert jemanden zu einer Handlung auf.', '„Räum … auf“ ist eine Aufforderung im Imperativ.'],
        ['satz-13', 'In welchem Satz steht das finite Verb an zweiter Stelle?', 'Wähle den Aussagesatz.', ['Heute fährt der Zug pünktlich ab.', 'Heute der Zug fährt pünktlich ab.', 'Fährt der Zug heute pünktlich ab?', 'Pünktlich heute abfahren der Zug.'], 'Heute fährt der Zug pünktlich ab.', 'Das erste Satzglied kann aus mehreren Wörtern bestehen.', '„Heute“ steht an erster Satzgliedstelle, „fährt“ als finites Verb an zweiter.'],
        ['satz-14', 'Wo steht das finite Verb im typischen eingeleiteten Nebensatz?', 'Wähle die passende Antwort.', ['Am Anfang', 'An zweiter Stelle', 'Am Ende', 'Es gibt kein Verb'], 'Am Ende', 'Prüfe die Wortstellung nach „weil“, „dass“ oder „obwohl“.', 'Im prototypischen eingeleiteten Nebensatz steht das finite Verb am Ende.'],
        ['satz-15', 'Welcher Satz ist ein Satzgefüge?', 'Wähle Hauptsatz plus Nebensatz.', ['Die Sonne scheint und die Vögel singen.', 'Die Vögel singen, weil die Sonne scheint.', 'Die Sonne scheint; die Vögel singen.', 'Die Vögel singen laut.'], 'Die Vögel singen, weil die Sonne scheint.', 'Suche nach einem untergeordneten Satzteil mit Verb am Ende.', 'Der weil-Satz ist dem Hauptsatz untergeordnet; zusammen bilden sie ein Satzgefüge.'],
        ['satz-16', 'Welcher Satz ist eine Satzreihe?', 'Wähle zwei gleichrangige Hauptsätze.', ['Ich gehe nach Hause, weil ich müde bin.', 'Obwohl es regnet, spielen wir.', 'Mila liest, und Noah zeichnet.', 'Wenn der Bus kommt, steigen wir ein.'], 'Mila liest, und Noah zeichnet.', 'Beide Teilsätze müssen selbstständig stehen können.', '„Mila liest“ und „Noah zeichnet“ sind zwei gleichrangige Hauptsätze.'],
        ['satz-17', 'Welches Wort leitet hier einen Nebensatz ein? „Ich rufe dich an, sobald ich angekommen bin.“', 'Wähle die unterordnende Konjunktion.', ['dich', 'sobald', 'angerufen', 'bin'], 'sobald', 'Das Wort stellt den zeitlichen Bezug her.', '„Sobald“ leitet den zeitlichen Nebensatz ein.'],
        ['satz-18', 'Welche Frage hilft dabei, das Subjekt zu finden?', 'Wähle die passende Satzgliedfrage.', ['Wen oder was?', 'Wem?', 'Wer oder was?', 'Wann?'], 'Wer oder was?', 'Das Subjekt steht im Nominativ.', 'Mit „Wer oder was?“ fragst du nach dem Subjekt im Nominativ.'],
        ['satz-19', 'Bestimme das Akkusativobjekt: „Der Hausmeister repariert das Fenster.“', 'Welcher Ausdruck antwortet auf „Wen oder was repariert der Hausmeister?“', ['Der Hausmeister', 'repariert', 'das Fenster', 'Der Hausmeister repariert'], 'das Fenster', 'Frage nach dem direkten Ziel der Handlung.', '„Das Fenster“ ist das Akkusativobjekt: Was repariert der Hausmeister?'],
        ['satz-20', 'Welche Wortstellung ist im Nebensatz richtig?', 'Wähle den Satz nach „obwohl“.', ['Obwohl ich bin müde, lerne ich.', 'Obwohl ich müde bin, lerne ich.', 'Obwohl bin ich müde, lerne ich.', 'Obwohl ich müde, bin lerne ich.'], 'Obwohl ich müde bin, lerne ich.', 'Das finite Verb des Nebensatzes steht hinten.', 'Im obwohl-Nebensatz steht „bin“ am Ende; danach beginnt der Hauptsatz.'],
        ['satz-21', 'Welcher Satz enthält eine unterordnende Konjunktion?', 'Wähle den Satz mit Nebensatz.', ['Ich lerne und du malst.', 'Wir gehen, obwohl es regnet.', 'Sie liest oder hört Musik.', 'Er kocht, aber sie deckt den Tisch.'], 'Wir gehen, obwohl es regnet.', 'Nach der Konjunktion steht das Verb am Ende des Nebensatzes.', '„Obwohl“ leitet einen Nebensatz ein: „obwohl es regnet“.'],
        ['satz-22', 'Welches Satzzeichen trennt einen vorangestellten Nebensatz vom Hauptsatz?', 'Wähle die richtige Antwort.', ['Komma', 'Doppelpunkt', 'Bindestrich', 'Anführungszeichen'], 'Komma', 'Zum Beispiel: „Wenn es dunkel wird, gehen wir nach Hause.“', 'Ein Nebensatz am Satzanfang wird mit einem Komma vom Hauptsatz getrennt.'],
        ['satz-23', 'Was ist das Prädikat in „Am Wochenende besucht uns meine Tante“?', 'Wähle das finite Verb.', ['Am Wochenende', 'besucht', 'uns', 'meine Tante'], 'besucht', 'Das Prädikat enthält das Verb.', '„Besucht“ ist das finite Verb und bildet hier das Prädikat.'],
        ['satz-24', 'Welche Aussage über das Vorfeld im Aussagesatz passt?', 'Wähle die beste Beschreibung.', ['Es enthält meist genau ein Wort.', 'Es steht vor dem finiten Verb.', 'Es steht immer am Satzende.', 'Es enthält nur das Subjekt.'], 'Es steht vor dem finiten Verb.', 'Im Satz „Heute fährt Lea“ steht „Heute“ im Vorfeld.', 'Das Vorfeld steht vor dem finiten Verb; es kann auch aus mehreren Wörtern bestehen.'],
        ['satz-25', 'Welcher Satz enthält einen Relativsatz?', 'Wähle den Satz, der ein Nomen näher beschreibt.', ['Das Buch, das du empfohlen hast, ist spannend.', 'Ich weiß, dass das Buch spannend ist.', 'Weil das Buch spannend ist, lese ich weiter.', 'Das Buch ist spannend und lustig.'], 'Das Buch, das du empfohlen hast, ist spannend.', 'Der Nebensatz bezieht sich auf ein Nomen.', '„Das du empfohlen hast“ beschreibt das Nomen „Buch“ und ist ein Relativsatz.'],
        ['satz-26', 'Welche Aussage zu „weil“ ist richtig?', 'Wähle die passende Regel.', ['„Weil“ verbindet immer zwei Hauptsätze.', 'Nach „weil“ steht das finite Verb typischerweise am Ende.', 'Nach „weil“ steht kein Komma.', '„Weil“ ist ein Nomen.'], 'Nach „weil“ steht das finite Verb typischerweise am Ende.', 'Prüfe: „…, weil der Bus zu spät kommt.“', '„Weil“ leitet einen Nebensatz ein, dessen finites Verb typischerweise am Ende steht.'],
        ['satz-27', 'Welcher Ausdruck ist ein Lokaladverbial und beantwortet „Wo?“', 'Wähle die Ortsangabe.', ['am Morgen', 'wegen des Regens', 'im Klassenzimmer', 'mit großer Freude'], 'im Klassenzimmer', 'Gesucht ist eine Angabe des Ortes.', '„Im Klassenzimmer“ beantwortet die Frage „Wo?“ und ist eine Ortsangabe.'],
        ['satz-28', 'Welche Satzverbindung enthält eine Begründung?', 'Wähle den passenden Konnektor.', ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, aber ich bin gesund.', 'Ich bleibe zu Hause oder gehe spazieren.', 'Ich bleibe zu Hause und lese.'], 'Ich bleibe zu Hause, weil ich krank bin.', 'Die Konjunktion soll einen Grund einleiten.', 'Der weil-Satz nennt den Grund dafür, dass die Person zu Hause bleibt.'],
        ['satz-29', 'Welche Form ist ein vollständiger Fragesatz?', 'Wähle den Satz mit passender Verbposition und Satzzeichen.', ['Wann du kommst.', 'Wann kommst du?', 'Du kommst wann.', 'Kommst du wann.'], 'Wann kommst du?', 'Ein Fragewort steht vor dem finiten Verb.', 'Bei der Ergänzungsfrage mit „wann“ folgt das finite Verb auf das Fragewort.'],
        ['satz-30', 'Welche Beschreibung trifft auf einen Hauptsatz zu?', 'Wähle die passende Erklärung.', ['Er kann grundsätzlich selbstständig stehen.', 'Das finite Verb steht immer am Ende.', 'Er beginnt zwingend mit „weil“.', 'Er enthält nie ein Subjekt.'], 'Er kann grundsätzlich selbstständig stehen.', 'Ein Hauptsatz ist keinem anderen Satz untergeordnet.', 'Ein Hauptsatz ist selbstständig; ein Nebensatz ist ihm untergeordnet.'],
        ['satz-31', 'Welcher Ausdruck bildet das Prädikat? „Mara räumt nach dem Essen ihr Zimmer auf.“', 'Wähle alle zusammengehörenden Verbteile.', ['räumt … auf', 'nach dem Essen', 'ihr Zimmer', 'Mara … Zimmer'], 'räumt … auf', 'Suche die Teile des trennbaren Verbs „aufräumen“.', 'Bei einem trennbaren Verb bilden „räumt“ und „auf“ gemeinsam das Prädikat.'],
        ['satz-32', 'Welche Wortstellung ist im Aussagesatz richtig?', 'Das Satzglied „Nach der Schule“ steht im Vorfeld.', ['Nach der Schule trifft Ben seine Freunde.', 'Nach der Schule Ben trifft seine Freunde.', 'Nach der Schule seine Freunde trifft Ben.', 'Trifft nach der Schule Ben seine Freunde.'], 'Nach der Schule trifft Ben seine Freunde.', 'Nach dem ersten Satzglied folgt das finite Verb.', 'Das Vorfeld ist mit „Nach der Schule“ besetzt; das finite Verb „trifft“ steht an zweiter Satzgliedstelle.'],
        ['satz-33', 'Welcher Satz hat die richtige Wortstellung nach „weil“?', 'Wähle den vollständigen Nebensatz.', ['Wir bleiben zu Hause, weil es stark regnet.', 'Wir bleiben zu Hause, weil regnet es stark.', 'Weil regnet es stark, bleiben wir zu Hause.', 'Weil es stark, regnet bleiben wir zu Hause.'], 'Wir bleiben zu Hause, weil es stark regnet.', 'Im eingeleiteten Nebensatz steht das finite Verb am Ende.', 'Im weil-Satz steht das finite Verb „regnet“ am Ende des Nebensatzes.'],
        ['satz-34', 'Welche Zeichensetzung ist richtig?', 'Der Relativsatz „die nebenan wohnt“ beschreibt die Nachbarin.', ['Meine Nachbarin, die nebenan wohnt, hilft uns.', 'Meine Nachbarin die, nebenan wohnt hilft uns.', 'Meine Nachbarin die nebenan, wohnt hilft uns.', 'Meine Nachbarin die nebenan wohnt hilft uns.'], 'Meine Nachbarin, die nebenan wohnt, hilft uns.', 'Ein eingeschobener Relativsatz wird vorn und hinten abgegrenzt.', 'Der eingeschobene Relativsatz wird durch zwei Kommas abgetrennt.'],
        ['satz-35', 'Welche Aussage beschreibt ein Satzgefüge?', 'Wähle Hauptsatz und Nebensatz.', ['Ich gehe früher, weil ich noch lernen muss.', 'Ich gehe früher und du bleibst länger.', 'Ich gehe früher; du bleibst länger.', 'Ich gehe früher. Danach lerne ich.'], 'Ich gehe früher, weil ich noch lernen muss.', 'Suche nach einem untergeordneten Satz mit Verb am Ende.', 'Der weil-Satz ist vom Hauptsatz abhängig. Beide zusammen bilden ein Satzgefüge.'],
        ['satz-36', 'Welcher Ausdruck ist das Subjekt? „Im Hof spielen die Kinder aus der Nachbarklasse.“', 'Frage: Wer oder was spielt?', ['Im Hof', 'spielen', 'die Kinder aus der Nachbarklasse', 'aus der Nachbarklasse'], 'die Kinder aus der Nachbarklasse', 'Das Subjekt kann eine ganze Wortgruppe sein.', 'Auf „Wer spielt?“ antwortet die gesamte Nomengruppe „die Kinder aus der Nachbarklasse“.'],
        ['satz-37', 'Welche Satzgliedfrage passt zu „mit großer Sorgfalt“?', 'Im Satz „Sie erledigt die Aufgabe mit großer Sorgfalt.“', ['Wie erledigt sie die Aufgabe?', 'Wo erledigt sie die Aufgabe?', 'Wann erledigt sie die Aufgabe?', 'Wer erledigt die Aufgabe?'], 'Wie erledigt sie die Aufgabe?', 'Die Wortgruppe beschreibt die Art und Weise.', '„Mit großer Sorgfalt“ ist eine Angabe der Art und Weise und beantwortet „Wie?“.'],
        ['satz-38', 'Welche Verbindung lässt die Verbposition des Hauptsatzes unverändert?', 'Wähle den Satz mit einer nebenordnenden Konjunktion.', ['Es regnet, aber wir gehen spazieren.', 'Wir bleiben drinnen, weil es regnet.', 'Wir bleiben drinnen, obwohl es regnet.', 'Wir warten, bis der Regen aufhört.'], 'Es regnet, aber wir gehen spazieren.', 'Nach „aber“ folgt ein gleichrangiger Hauptsatz.', '„Aber“ verbindet hier zwei Hauptsätze; im zweiten steht das finite Verb weiterhin an zweiter Satzgliedstelle.'],
        ['satz-39', 'Wo stehen die Kommas?', 'Der Nebensatz ist in den Hauptsatz eingeschoben: „Ich glaube dass der Zug wenn es schneit später kommt.“', ['Ich glaube, dass der Zug, wenn es schneit, später kommt.', 'Ich glaube dass, der Zug wenn es schneit später kommt.', 'Ich glaube, dass der Zug wenn, es schneit später kommt.', 'Ich glaube dass der Zug, wenn es schneit später, kommt.'], 'Ich glaube, dass der Zug, wenn es schneit, später kommt.', 'Der dass-Satz und der eingeschobene wenn-Satz brauchen Kommas.', 'Das Komma trennt den dass-Satz ab; der eingeschobene wenn-Satz wird beidseitig durch Kommas markiert.'],
        ['satz-40', 'Welche Aussage zur Umstellprobe stimmt?', 'Wähle die passende Erklärung.', ['Ein Satzglied kann als Einheit an eine andere Stelle verschoben werden.', 'Bei der Umstellprobe werden einzelne Buchstaben vertauscht.', 'Das Verb darf bei der Umstellprobe nicht mitverschoben werden.', 'Nur das Subjekt kann im Satz verschoben werden.'], 'Ein Satzglied kann als Einheit an eine andere Stelle verschoben werden.', 'Die Probe hilft, Satzglieder als zusammengehörige Wortgruppen zu erkennen.', 'Bei der Umstellprobe wird eine Wortgruppe als Einheit verschoben, zum Beispiel „Nach der Schule“ in „Ben trifft nach der Schule seine Freunde“.']
    ],
    'adjektiv-vergleich': [
        ['adj-11', 'Welche Form ist der Komparativ von „schnell“?', 'Wähle die richtige Steigerungsform.', ['schneller', 'am schnellsten', 'schnellste', 'mehr schnell'], 'schneller', 'Der Komparativ endet häufig auf „-er“.', 'Der Komparativ von „schnell“ lautet „schneller“.'],
        ['adj-12', 'Welche Form ist der Superlativ von „leicht“?', 'Wähle die passende Höchststufe.', ['leichter', 'am leichtesten', 'leichte', 'mehr leicht'], 'am leichtesten', 'Die Höchststufe ohne Nomen wird häufig mit „am“ gebildet.', '„Am leichtesten“ ist der Superlativ von „leicht“.'],
        ['adj-13', 'Welche Reihe ist richtig?', 'Steigere „viel“.', ['viel – mehr – am meisten', 'viel – vieler – am vielsten', 'viel – vielerer – am meisten', 'viel – mehr – am vielsten'], 'viel – mehr – am meisten', 'Die Steigerung von „viel“ ist unregelmäßig.', '„Viel“ wird unregelmäßig gesteigert: viel – mehr – am meisten.'],
        ['adj-14', 'Welches Wort passt? „Der Turm ist ___ als das Haus.“', 'Ergänze den Komparativ von „hoch“.', ['hoch', 'höher', 'am höchsten', 'hocher'], 'höher', 'Ein Vergleich mit „als“ verlangt hier die Vergleichsform.', 'Der Komparativ von „hoch“ lautet „höher“.'],
        ['adj-15', 'Welche Form passt? „Das ist ___ Idee von allen.“', 'Ergänze die passende Form von „gut“.', ['gut', 'besser', 'am besten', 'guter'], 'am besten', 'Gesucht ist die Höchststufe.', '„Am besten“ ist der unregelmäßige Superlativ von „gut“.'],
        ['adj-16', 'Welche Form passt? „Der rote Rucksack ist genauso ___ wie der blaue.“', 'Ergänze den Positiv.', ['groß', 'größer', 'am größten', 'größere'], 'groß', 'Bei Gleichheit mit „genauso … wie“ steht der Positiv.', 'Der Vergleich „genauso groß wie“ drückt Gleichheit aus.'],
        ['adj-17', 'Welche Form passt? „Von allen Wegen ist dieser ___.”', 'Ergänze die Höchststufe von „kurz“.', ['kurz', 'kürzer', 'am kürzesten', 'kurzer'], 'am kürzesten', 'Verglichen werden alle Wege; gesucht ist die Höchststufe.', '„Am kürzesten“ bezeichnet die Höchststufe von „kurz“.'],
        ['adj-18', 'Welcher Satz ist grammatisch passend?', 'Wähle den Vergleich mit „als“.', ['Der Zug ist schneller als der Bus.', 'Der Zug ist schnell als der Bus.', 'Der Zug ist am schneller wie der Bus.', 'Der Zug ist schnellsten als der Bus.'], 'Der Zug ist schneller als der Bus.', 'Unterschied: Komparativ + „als“.', 'Bei einem Unterschied steht der Komparativ „schneller“ mit „als“.'],
        ['adj-19', 'Welches Adjektiv ist in der Grundform?', 'Wähle den Positiv.', ['am lautesten', 'lauter', 'laut', 'mehr laut'], 'laut', 'Der Positiv ist die nicht gesteigerte Grundform.', '„Laut“ ist der Positiv; „lauter“ und „am lautesten“ sind Steigerungsformen.'],
        ['adj-20', 'Welche Form ist eine Höchststufe?', 'Wähle den Superlativ.', ['freundlich', 'freundlicher', 'am freundlichsten', 'so freundlich wie'], 'am freundlichsten', 'Der Superlativ markiert die stärkste Ausprägung.', '„Am freundlichsten“ ist die Höchststufe von „freundlich“.'],
        ['adj-21', 'Welche Steigerung von „nah“ ist richtig?', 'Wähle die korrekte Reihe.', ['nah – näher – am nächsten', 'nah – naher – am nahsten', 'nah – näher – am nähesten', 'nah – mehr nah – am meisten nah'], 'nah – näher – am nächsten', 'Die Formen sind teilweise unregelmäßig.', 'Die gebräuchliche Steigerung lautet nah – näher – am nächsten.'],
        ['adj-22', 'Welche Form passt? „Heute bin ich ___ als gestern.“', 'Ergänze „müde“ im Komparativ.', ['müde', 'müder', 'am müdesten', 'müdeste'], 'müder', '„Als“ vergleicht zwei Tage.', 'Der Komparativ von „müde“ lautet „müder“.'],
        ['adj-23', 'Welche Aussage ist richtig?', 'Wähle die passende Regel.', ['Alle Adjektive lassen sich steigern.', 'Einige Adjektive sind normalerweise nicht sinnvoll steigerbar.', 'Superlative enden immer auf „-er“.', 'Vor „als“ steht immer der Positiv.'], 'Einige Adjektive sind normalerweise nicht sinnvoll steigerbar.', 'Beispiele sind „einzig“ oder „tot“.', 'Nicht alle Eigenschaften haben sinnvoll abstufbare Grade.'],
        ['adj-24', 'Welche Form passt? „Mila singt ___ wie ihre Schwester.“', 'Drücke Gleichheit mit „laut“ aus.', ['lauter', 'am lautesten', 'so laut', 'lauteste'], 'so laut', 'Die feste Vergleichsform heißt „so … wie“.', '„So laut wie“ drückt aus, dass beide gleich laut singen.'],
        ['adj-25', 'Welche Form passt? „Der zweite Test war ___ als der erste.“', 'Ergänze „schwierig“ im Komparativ.', ['schwierig', 'schwieriger', 'am schwierigsten', 'schwierigste'], 'schwieriger', 'Verglichen werden zwei Tests.', 'Der Komparativ von „schwierig“ lautet „schwieriger“.'],
        ['adj-26', 'Welche Form passt? „Im Finale spielte die Mannschaft ___.”', 'Ergänze den Superlativ von „gut“.', ['gut', 'besser', 'am besten', 'guter'], 'am besten', 'Die Aussage vergleicht die Mannschaft mit allen anderen Spielen.', '„Am besten“ ist der Superlativ von „gut“.'],
        ['adj-27', 'Welches Paar zeigt einen Komparativ und das passende Signalwort?', 'Wähle die richtige Verbindung.', ['wärmer – als', 'am wärmsten – als', 'warm – als', 'wärmer – wie'], 'wärmer – als', 'Ein Unterschied wird mit dem Komparativ verglichen.', '„Wärmer als“ ist die übliche Form für einen Unterschied.'],
        ['adj-28', 'Welche Form passt? „Der Weg ist nicht ___, sondern länger.“', 'Wähle den Positiv.', ['kurz', 'kürzer', 'am kürzesten', 'kurzer'], 'kurz', 'Nach „nicht“ steht hier die Grundform im Gegensatz zu „länger“.', '„Nicht kurz, sondern länger“ stellt zwei Eigenschaften gegenüber.'],
        ['adj-29', 'Welche Form ist richtig? „Der Ball fliegt ___ als gestern.“', 'Steigere „weit“ passend.', ['weit', 'weiter', 'am weitesten', 'weiteste'], 'weiter', 'Es werden zwei Weiten verglichen.', '„Weiter als“ ist der Komparativvergleich.'],
        ['adj-30', 'Welche Form passt? „Das ist der ___ Baum im Park.“', 'Ergänze den Superlativ von „alt“ vor einem Nomen.', ['alte', 'ältere', 'älteste', 'am ältesten'], 'älteste', 'Vor einem Nomen steht die gebeugte Form des Superlativs.', 'Vor dem Nomen lautet die Form „der älteste Baum“; „am ältesten“ steht ohne folgendes Nomen.'],
        ['adj-31', 'Welche Form steht richtig vor dem Nomen?', '„Der ___ Zug erreicht zuerst den Bahnhof.“', ['schnellste', 'am schnellsten', 'schneller', 'schnell'], 'schnellste', 'Vor dem Nomen „Zug“ steht die gebeugte Form des Superlativs.', 'Richtig heißt es „der schnellste Zug“. „Am schnellsten“ steht typischerweise ohne folgendes Nomen.'],
        ['adj-32', 'Welcher Satz enthält ein prädikativ verwendetes Adjektiv?', 'Wähle die Form nach einem Verb wie „sein“.', ['Der Weg ist steil.', 'Der steile Weg ist lang.', 'Ein steiler Weg führt hinauf.', 'Die steilen Wege sind gesperrt.'], 'Der Weg ist steil.', 'Nach „ist“ steht das Adjektiv hier ohne Endung.', '„Steil“ steht nach dem Verb „ist“ prädikativ und erhält keine Adjektivendung.'],
        ['adj-33', 'Welche Form ist die richtige Steigerung von „dunkel“?', 'Wähle die passende Reihe.', ['dunkel – dunkler – am dunkelsten', 'dunkel – dunkeler – am dunkelesten', 'dunkel – mehr dunkel – am dunklisten', 'dunkel – dunkler – am dunkelstensten'], 'dunkel – dunkler – am dunkelsten', 'Bei „dunkel“ entfällt im Komparativ das e.', 'Die gebräuchliche Reihe lautet „dunkel – dunkler – am dunkelsten“.'],
        ['adj-34', 'Welcher Vergleich ist standardsprachlich richtig?', 'Wähle den Satz für einen Unterschied.', ['Der neue Rucksack ist leichter als der alte.', 'Der neue Rucksack ist leichter wie der alte.', 'Der neue Rucksack ist am leichter als der alte.', 'Der neue Rucksack ist leicht als der alte.'], 'Der neue Rucksack ist leichter als der alte.', 'Ein Unterschied wird mit Komparativ und „als“ ausgedrückt.', 'Der Komparativ „leichter“ wird bei einem Unterschied mit „als“ verbunden.'],
        ['adj-35', 'Welche Form ist ein unregelmäßiger Superlativ?', 'Wähle die richtige Steigerung von „gern“.', ['am liebsten', 'am gernsten', 'gerner', 'am mehrsten gern'], 'am liebsten', '„Gern“ wird unregelmäßig gesteigert.', 'Die Formen lauten „gern – lieber – am liebsten“.'],
        ['adj-36', 'Welcher Satz verwendet den Komparativ korrekt?', 'Wähle die grammatisch passende Form.', ['Heute ist es wärmer als gestern.', 'Heute ist es am wärmsten als gestern.', 'Heute ist es warm als gestern.', 'Heute ist es wärmer wie gestern.'], 'Heute ist es wärmer als gestern.', 'Verglichen werden zwei Tage.', 'Der Komparativ „wärmer“ steht bei diesem Unterschied mit „als“.'],
        ['adj-37', 'Welche Eigenschaft lässt sich im wörtlichen Sinn nicht sinnvoll steigern?', 'Wähle die passende Antwort.', ['tot', 'warm', 'schnell', 'laut'], 'tot', 'Eine Steigerung ist sinnvoll, wenn eine Eigenschaft abgestuft werden kann.', '„Tot“ bezeichnet im wörtlichen Sinn einen Zustand, der nicht in mehreren Abstufungen vorliegt.'],
        ['adj-38', 'Welche Adjektivendung passt?', '„Wir besichtigen ein ___ Museum.“', ['interessantes', 'interessant', 'interessanter', 'am interessantesten'], 'interessantes', 'Das Adjektiv steht vor einem sächlichen Nomen mit „ein“.', 'In „ein interessantes Museum“ erhält das attributive Adjektiv die Endung „-es“.'],
        ['adj-39', 'Welche Reihe enthält Positiv, Komparativ und Superlativ in der richtigen Reihenfolge?', 'Wähle die Formen von „kalt“.', ['kalt – kälter – am kältesten', 'kälter – kalt – am kältesten', 'kalt – am kältesten – kälter', 'kalt – kälter – kältersten'], 'kalt – kälter – am kältesten', 'Beginne mit der Grundform und ende mit der Höchststufe.', 'Die Reihe lautet Positiv „kalt“, Komparativ „kälter“, Superlativ „am kältesten“.'],
        ['adj-40', 'Welche Wendung drückt Gleichheit aus?', 'Wähle den Vergleich ohne Unterschied.', ['genauso sorgfältig wie', 'sorgfältiger als', 'am sorgfältigsten', 'sorgfältig als'], 'genauso sorgfältig wie', 'Bei Gleichheit steht der Positiv zwischen „so“ und „wie“.', '„Genauso sorgfältig wie“ vergleicht zwei Tätigkeiten als gleich sorgfältig.']
    ],
    gedichte: [
        ['gedicht-11', 'Welche Bezeichnung passt zu einer Gruppe von Versen?', 'Wähle den Fachbegriff.', ['Strophe', 'Reim', 'Metapher', 'Takt'], 'Strophe', 'Verse werden oft in größere Einheiten gegliedert.', 'Eine Gruppe von Versen heißt Strophe.'],
        ['gedicht-12', 'Welches Reimschema hat „Haus – Maus – Licht – Sicht“?', 'Ordne die Reime der Reihe nach zu.', ['aabb', 'abab', 'abba', 'abcd'], 'aabb', 'Vers 1 reimt sich auf 2, Vers 3 auf 4.', 'Haus/Maus und Licht/Sicht ergeben zwei Paarreime: aabb.'],
        ['gedicht-13', 'Welches Reimschema zeigt „Wind – Licht – Kind – Sicht“?', 'Ordne die Reime der Reihe nach zu.', ['aabb', 'abab', 'abba', 'abca'], 'abab', 'Vers 1 und 3 reimen sich, ebenso Vers 2 und 4.', 'Wind/Kind und Licht/Sicht bilden einen Kreuzreim: abab.'],
        ['gedicht-14', 'Welches Reimschema zeigt „Haus – Licht – Sicht – Maus“?', 'Ordne die Reime der Reihe nach zu.', ['aabb', 'abab', 'abba', 'abca'], 'abba', 'Der erste und vierte Vers umfassen die beiden mittleren.', 'Haus/Maus sowie Licht/Sicht ergeben den umarmenden Reim abba.'],
        ['gedicht-15', 'Was ist eine Metapher?', 'Wähle die passende Erklärung.', ['Ein bildlicher Ausdruck ohne ausdrückliches Vergleichswort', 'Eine Gruppe von vier Versen', 'Ein Reim am Ende zweier Zeilen', 'Eine Frage am Gedichtanfang'], 'Ein bildlicher Ausdruck ohne ausdrückliches Vergleichswort', 'Beispiel: „Ein Meer aus Lichtern“.', 'Eine Metapher überträgt Bedeutung bildlich, ohne „wie“ oder „als“ zu nennen.'],
        ['gedicht-16', 'Welche Zeile enthält einen Vergleich?', 'Wähle das Beispiel mit einem Vergleichswort.', ['Der Mond ist eine silberne Münze.', 'Der Mond wacht über die Dächer.', 'Der Mond leuchtet wie eine Lampe.', 'Der Mond steigt langsam.'], 'Der Mond leuchtet wie eine Lampe.', 'Ein Vergleich verwendet oft „wie“ oder „als“.', '„Wie eine Lampe“ stellt einen ausdrücklich markierten Vergleich her.'],
        ['gedicht-17', 'Welche Zeile enthält eine Personifikation?', 'Wähle eine menschliche Handlung, die einer Sache zugeschrieben wird.', ['Der Regen fällt auf das Dach.', 'Die Stadt schläft unter grauen Wolken.', 'Die Straße ist lang.', 'Der Himmel ist blau.'], 'Die Stadt schläft unter grauen Wolken.', 'Kann eine Stadt wirklich schlafen?', 'Die Stadt erhält die menschliche Handlung „schläft“; das ist eine Personifikation.'],
        ['gedicht-18', 'Was solltest du beim Deuten eines Gedichts tun?', 'Wähle die beste Vorgehensweise.', ['Deutungen mit Beobachtungen und Textstellen begründen.', 'Nur die Autorbiografie erzählen.', 'Eine Stimmung behaupten, ohne auf Wörter zu achten.', 'Alle Verse in Prosa umschreiben.'], 'Deutungen mit Beobachtungen und Textstellen begründen.', 'Eine Interpretation braucht Belege aus dem Text.', 'Textbelege machen die Deutung nachvollziehbar und überprüfbar.'],
        ['gedicht-19', 'Welche Aussage über das lyrische Ich stimmt?', 'Wähle die richtige Erklärung.', ['Es ist die sprechende Stimme im Gedicht.', 'Es ist zwingend die echte Autorin oder der Autor.', 'Es ist immer eine Figur mit Namen.', 'Es ist die Leserin oder der Leser.'], 'Es ist die sprechende Stimme im Gedicht.', 'Trenne Textstimme und reale Person.', 'Das lyrische Ich bezeichnet die Stimme des Gedichts, nicht automatisch die reale Autorperson.'],
        ['gedicht-20', 'Welcher Ausdruck ist ein Paarreim?', 'Wähle zwei passend reimende Versenden.', ['Tag – Klang', 'Sonne – Wonne', 'Wald – Wind', 'Brot – Stern'], 'Sonne – Wonne', 'Ein Reim beruht auf ähnlichem Klang ab dem betonten Vokal.', '„Sonne“ und „Wonne“ reimen sich aufeinander.'],
        ['gedicht-21', 'Welche Beobachtung beschreibt die Form, nicht schon eine Deutung?', 'Ein Gedicht hat drei Strophen mit je vier Versen.', ['Es hat drei vierzeilige Strophen.', 'Es handelt sicher von Einsamkeit.', 'Die Autorin war traurig.', 'Alle finden es schön.'], 'Es hat drei vierzeilige Strophen.', 'Eine Formangabe lässt sich direkt nachzählen.', 'Die Zahl der Strophen und Verse ist eine überprüfbare Beobachtung.'],
        ['gedicht-22', 'Welche Aussage ist eine mögliche, aber belegbedürftige Deutung?', 'Der erfundene Vers lautet: „Ein Fenster Licht bleibt wach im Haus.“', ['Das Licht könnte Hoffnung oder Geborgenheit andeuten.', 'Der Vers hat neun Wörter.', 'Das Wort „Fenster“ steht am Anfang.', 'Die Zeile endet mit „Haus“.'], 'Das Licht könnte Hoffnung oder Geborgenheit andeuten.', 'Eine Deutung schlägt eine Bedeutung vor und muss begründet werden.', 'Das Licht kann symbolisch gelesen werden; die Deutung sollte mit dem Gedichtzusammenhang begründet werden.'],
        ['gedicht-23', 'Welche Aussage passt zu einem Kreuzreim?', 'Wähle das Reimschema.', ['aabb', 'abab', 'abba', 'aaaa'], 'abab', 'Die Reime wechseln sich ab.', 'Beim Kreuzreim reimen sich Vers 1 und 3 sowie Vers 2 und 4: abab.'],
        ['gedicht-24', 'Welches Merkmal gehört eher zu einem Gedicht als zu einem normalen Fließtext?', 'Wähle ein typisches Formmerkmal.', ['Verse und Strophen', 'Kapitelnummern', 'Fußnoten auf jeder Seite', 'Tabellenüberschriften'], 'Verse und Strophen', 'Achte auf Zeilenumbrüche und Strophengliederung.', 'Gedichte sind häufig in Verse und Strophen gegliedert.'],
        ['gedicht-25', 'Welche Formulierung ist ein sinnvoller erster Schritt der Gedichtanalyse?', 'Wähle die sachliche Beschreibung.', ['Das Gedicht besteht aus vier Strophen.', 'Das Gedicht ist bestimmt über das Leben des Autors.', 'Das lyrische Ich ist sicher die Autorin.', 'Jede Zeile bedeutet dasselbe.'], 'Das Gedicht besteht aus vier Strophen.', 'Beginne mit sichtbaren Merkmalen, bevor du deutest.', 'Die Strophenzahl ist direkt feststellbar und eignet sich als Beobachtung.'],
        ['gedicht-26', 'Welche Zeile enthält eine Metapher?', 'Wähle den bildlichen Ausdruck.', ['Der Wind weht über das Feld.', 'Die Zeit ist ein Dieb.', 'Der Vogel fliegt nach Süden.', 'Die Tür ist offen.'], 'Die Zeit ist ein Dieb.', 'Zeit kann nicht wörtlich stehlen.', '„Die Zeit ist ein Dieb“ überträgt die Vorstellung des Stehlens auf Zeitverlust.'],
        ['gedicht-27', 'Welche Zeile enthält eine Personifikation?', 'Wähle die passende Aussage.', ['Die Sonne lacht durch die Wolken.', 'Die Sonne ist ein Stern.', 'Die Sonne scheint hell.', 'Die Sonne steht am Himmel.'], 'Die Sonne lacht durch die Wolken.', 'Ein Naturgegenstand erhält menschliches Verhalten.', '„Lacht“ ist eine menschliche Handlung, die der Sonne zugeschrieben wird.'],
        ['gedicht-28', 'Welche Bedeutung kann ein Symbol im Gedicht haben?', 'Wähle die passende Beschreibung.', ['Ein konkretes Zeichen kann für eine weiterführende Idee stehen.', 'Ein Symbol ist immer ein Reimwort.', 'Ein Symbol ersetzt die Strophe.', 'Ein Symbol ist nur die Überschrift.'], 'Ein konkretes Zeichen kann für eine weiterführende Idee stehen.', 'Zum Beispiel kann Licht für Hoffnung stehen.', 'Ein Symbol ist ein Zeichen, das über seine konkrete Bedeutung hinausweist.'],
        ['gedicht-29', 'Wodurch unterscheidet sich ein umarmender Reim?', 'Wähle die passende Reihenfolge.', ['Der erste und vierte Vers reimen sich, der zweite und dritte auch.', 'Jeweils zwei benachbarte Verse reimen sich.', 'Jeder zweite Vers reimt sich nie.', 'Alle Verse müssen gleich enden.'], 'Der erste und vierte Vers reimen sich, der zweite und dritte auch.', 'Das äußere Reimpaar schließt das innere ein.', 'Das Reimschema lautet abba: Vers 1 und 4 umrahmen Vers 2 und 3.'],
        ['gedicht-30', 'Welche Aussage über Stimmung ist fachlich vorsichtig formuliert?', 'Der erfundene Text enthält „leise“, „dunkel“ und „allein“.', ['Die Wortwahl kann eine ruhige oder einsame Stimmung erzeugen.', 'Das Gedicht ist für alle Menschen traurig.', 'Die Autorin war sicher allein.', 'Die Wörter beweisen eine wahre Geschichte.'], 'Die Wortwahl kann eine ruhige oder einsame Stimmung erzeugen.', 'Nutze „kann“ und nenne sprachliche Hinweise.', 'Die Wörter können eine bestimmte Wirkung nahelegen; die Deutung bleibt am Text zu begründen.'],
        ['gedicht-31', 'Was ist ein Stabreim?', 'Wähle das Beispiel, bei dem mehrere betonte Wörter mit demselben Laut beginnen.', ['Flinke Fische flitzen fort.', 'Die Sonne geht im Westen unter.', 'Der Mond leuchtet wie eine Lampe.', 'Ein Meer aus Lichtern.'], 'Flinke Fische flitzen fort.', 'Achte auf den gleichen Anfangslaut betonter Wörter.', '„Flinke“, „Fische“, „flitzen“ und „fort“ beginnen mit demselben Laut. Das ist eine Alliteration oder ein Stabreim.'],
        ['gedicht-32', 'Welche Aussage zu freien Versen ist richtig?', 'Wähle die passende Erklärung.', ['Sie müssen kein regelmäßiges Reimschema oder Metrum haben.', 'Sie dürfen keine sprachlichen Bilder enthalten.', 'Sie bestehen immer aus genau vier Versen.', 'Sie sind grundsätzlich Sachtexte.'], 'Sie müssen kein regelmäßiges Reimschema oder Metrum haben.', 'Gedichte können auch ohne regelmäßige Reime gestaltet sein.', 'Freie Verse folgen keinem festen Reimschema oder regelmäßigen Metrum; sie können trotzdem lyrische Texte sein.'],
        ['gedicht-33', 'Welche Wirkung kann eine Wiederholung haben?', 'Wähle die passende Möglichkeit.', ['Sie kann einen Gedanken oder Klang besonders hervorheben.', 'Sie beweist immer, dass das Gedicht traurig ist.', 'Sie ersetzt alle Reime.', 'Sie legt die Autorperson fest.'], 'Sie kann einen Gedanken oder Klang besonders hervorheben.', 'Überlege, was durch das wiederholte Wort stärker auffällt.', 'Wiederholungen lenken Aufmerksamkeit auf Wörter, Gedanken oder Klänge; ihre genaue Wirkung hängt vom Text ab.'],
        ['gedicht-34', 'Welche Aussage ist eine Beobachtung und noch keine Deutung?', 'Im Gedicht kommt das Wort „Regen“ viermal vor.', ['Das Wort „Regen“ wird viermal wiederholt.', 'Der Regen steht sicher für die Kindheit.', 'Die Autorin war beim Schreiben traurig.', 'Alle Lesenden empfinden Angst.'], 'Das Wort „Regen“ wird viermal wiederholt.', 'Eine Beobachtung lässt sich unmittelbar am Text nachprüfen.', 'Die Wiederholung ist eine zählbare Textbeobachtung; die anderen Aussagen wären Deutungen oder unbelegte Behauptungen.'],
        ['gedicht-35', 'Welche Interpretation ist am besten belegt?', 'Der Vers lautet: „Die Uhr frisst Stunde um Stunde.“', ['Die Uhr wird wie ein Lebewesen dargestellt; das Bild kann den schnellen Zeitverlust betonen.', 'Die Uhr ist bestimmt kaputt.', 'Die Autorin möchte, dass niemand Uhren benutzt.', 'Alle Menschen haben Angst vor der Zeit.'], 'Die Uhr wird wie ein Lebewesen dargestellt; das Bild kann den schnellen Zeitverlust betonen.', 'Nenne das sprachliche Bild und formuliere die Wirkung vorsichtig.', '„Frisst“ überträgt eine lebendige Handlung auf die Uhr. Die Deutung verbindet diese Beobachtung mit einer möglichen Wirkung.'],
        ['gedicht-36', 'Wie notierst du ein Reimschema korrekt?', 'Wähle die passende Vorgehensweise.', ['Versenden vergleichen und gleiche Reime mit demselben Buchstaben markieren.', 'Die Versanfänge alphabetisch sortieren.', 'Für jede Strophe immer aabb notieren.', 'Nur die Zahl der Wörter zählen.'], 'Versenden vergleichen und gleiche Reime mit demselben Buchstaben markieren.', 'Entscheidend sind die Klänge am Ende der Verse.', 'Reimschemata entstehen aus dem Vergleich der Versenden; gleiche Reime erhalten denselben Buchstaben.'],
        ['gedicht-37', 'Welche Aussage über das lyrische Ich ist zulässig?', 'Im Gedicht steht: „Ich gehe durch die Nacht.“', ['Im Text spricht ein lyrisches Ich; wer die reale Person ist, lässt sich daraus allein nicht bestimmen.', 'Die Autorin ist sicher allein nachts unterwegs.', 'Das lyrische Ich ist immer eine historische Person.', 'Die Lesenden sprechen selbst den Vers.'], 'Im Text spricht ein lyrisches Ich; wer die reale Person ist, lässt sich daraus allein nicht bestimmen.', 'Trenne Sprecherstimme und reale Autorperson.', 'Das Pronomen „ich“ kennzeichnet eine Sprecherstimme im Gedicht, aber nicht automatisch die Autorin oder den Autor.'],
        ['gedicht-38', 'Was ist ein sinnvolles Ziel beim Untersuchen des Rhythmus?', 'Wähle eine passende Frage.', ['Wie wirken Betonungen und Klang beim lauten Lesen?', 'Wie viele Sachinformationen enthält das Gedicht?', 'Wer hat das Buch gedruckt?', 'Welche Wörter sind im Wörterbuch am längsten?'], 'Wie wirken Betonungen und Klang beim lauten Lesen?', 'Rhythmus lässt sich durch lautes Lesen oft besser wahrnehmen.', 'Beim Lesen kannst du Betonungen, Pausen und Klang wahrnehmen und ihre mögliche Wirkung beschreiben.'],
        ['gedicht-39', 'Welche Formulierung verbindet Beobachtung und Wirkung?', 'Der Vers lautet: „Die kalte Stille füllt den Raum.“', ['Das Wort „Stille“ wird als etwas Füllendes dargestellt; das kann die bedrückende Wirkung verstärken.', 'Der Raum ist sicher leer und kalt.', 'Die Autorin beschreibt einen echten Raum.', 'Der Vers hat keine sprachlichen Bilder.'], 'Das Wort „Stille“ wird als etwas Füllendes dargestellt; das kann die bedrückende Wirkung verstärken.', 'Benenne erst das Bild und leite dann eine mögliche Wirkung ab.', 'Die Formulierung beschreibt das Bild und deutet seine mögliche Wirkung vorsichtig, statt eine Tatsache über die Autorperson zu behaupten.'],
        ['gedicht-40', 'Woran erkennst du eine Personifikation?', 'Wähle die passende Erklärung.', ['Ein Ding, Tier oder Naturphänomen erhält menschliche Eigenschaften oder Handlungen.', 'Zwei Versenden klingen ähnlich.', 'Ein Gedicht besteht aus mehreren Strophen.', 'Ein Wort steht am Zeilenende.'], 'Ein Ding, Tier oder Naturphänomen erhält menschliche Eigenschaften oder Handlungen.', 'Beispiel: „Der Wind flüstert.“', 'Beim „flüsternden Wind“ wird einem Naturphänomen eine menschliche Sprechhandlung zugeschrieben.']
    ],
    'sachtexte-diagramme': [
        ['diagramm-11', 'Was zeigt die horizontale Achse eines Diagramms häufig?', 'Wähle eine typische Möglichkeit.', ['Zeitpunkte oder Kategorien', 'Immer die Quelle', 'Nur Prozente', 'Die Erklärung der Ursache'], 'Zeitpunkte oder Kategorien', 'Lies die Achsenbeschriftung genau.', 'Die horizontale Achse kann zum Beispiel Monate oder Gruppen zeigen; entscheidend ist ihre Beschriftung.'],
        ['diagramm-12', 'Welche Diagrammart zeigt Anteile an einem Ganzen besonders anschaulich?', 'Wähle die passende Darstellungsform.', ['Kreisdiagramm', 'Liniendiagramm', 'Satzgefüge', 'Wortliste'], 'Kreisdiagramm', 'Die Teile ergeben zusammen das Ganze.', 'Ein Kreisdiagramm stellt Anteile eines Ganzen dar.'],
        ['diagramm-13', 'Welche Aussage über die Quelle eines Schaubilds ist richtig?', 'Wähle die beste Antwort.', ['Sie nennt, woher die Daten stammen.', 'Sie erklärt automatisch jede Ursache.', 'Sie ist immer die Legende.', 'Sie zeigt nur den höchsten Wert.'], 'Sie nennt, woher die Daten stammen.', 'Eine Quelle hilft, Herkunft und Kontext der Daten zu prüfen.', 'Die Quellenangabe nennt den Ursprung der dargestellten Daten.'],
        ['diagramm-14', 'Eine Tabelle zeigt: 12, 15 und 9 Teilnehmende. Wie viele sind es zusammen?', 'Addiere die drei Werte.', ['36', '27', '24', '39'], '36', 'Rechne 12 + 15 + 9.', '12 + 15 + 9 = 36 Teilnehmende insgesamt.'],
        ['diagramm-15', 'Die Werte steigen von 10 auf 14. Um wie viel ist der Wert gestiegen?', 'Vergleiche den Anfangs- und Endwert.', ['4', '10', '14', '24'], '4', 'Berechne Endwert minus Anfangswert.', '14 − 10 = 4. Der Wert ist um vier gestiegen.'],
        ['diagramm-16', 'Was solltest du prüfen, bevor du zwei Balken vergleichst?', 'Wähle die wichtigste Grundlage.', ['Ob beide Balken dieselbe Einheit und Skala verwenden.', 'Ob die Balken dieselbe Farbe haben.', 'Ob der Titel kurz ist.', 'Ob die Quelle ein Foto enthält.'], 'Ob beide Balken dieselbe Einheit und Skala verwenden.', 'Ein fairer Vergleich braucht eine gemeinsame Messgrundlage.', 'Einheit und Skala müssen bekannt sein, damit die Werte sinnvoll vergleichbar sind.'],
        ['diagramm-17', 'Welche Aussage unterscheidet Beobachtung und Ursache richtig?', 'Wähle die passende Aussage.', ['Die Zahl ist gestiegen; das Diagramm nennt keinen Grund dafür.', 'Die Zahl ist gestiegen, also war das Wetter schuld.', 'Die Balken sind blau, deshalb stiegen die Werte.', 'Der größte Wert beweist die Ursache.'], 'Die Zahl ist gestiegen; das Diagramm nennt keinen Grund dafür.', 'Daten zeigen oft Veränderungen, aber nicht automatisch deren Ursache.', 'Die Veränderung ist ablesbar; ohne zusätzliche Informationen lässt sich kein Grund behaupten.'],
        ['diagramm-18', 'Eine Tabelle enthält die Spalten „Monat“ und „Besuche“. Was ist „Monat“ wahrscheinlich?', 'Wähle die passende Antwort.', ['Eine Kategorie oder Zeitangabe', 'Eine Einheit', 'Der Quellenname', 'Der Höchstwert'], 'Eine Kategorie oder Zeitangabe', 'Die Monatsnamen ordnen die Beobachtungen zeitlich.', 'Die Monate bilden die Zeitkategorien der Tabelle.'],
        ['diagramm-19', 'Ein Diagramm zeigt „Anteil in Prozent“. Was bedeutet 100 %?', 'Wähle die passende Deutung.', ['Das ganze betrachtete Ganze', 'Genau 100 Personen', 'Immer ein Jahr', 'Den kleinsten Wert'], 'Das ganze betrachtete Ganze', 'Prozent bedeutet „von hundert“ und beschreibt einen Anteil.', '100 % stehen für das gesamte betrachtete Ganze, nicht automatisch für 100 Personen.'],
        ['diagramm-20', 'Welche Beschreibung ist am genauesten? Tabelle: Montag 8, Dienstag 11.', 'Wähle die sachliche Aussage.', ['Am Dienstag wurden 3 mehr gezählt als am Montag.', 'Am Dienstag waren alle besonders fleißig.', 'Montag war ein schlechter Tag.', 'Dienstag verursachte den Anstieg.'], 'Am Dienstag wurden 3 mehr gezählt als am Montag.', 'Subtrahiere die Werte und bleibe bei dem, was die Tabelle zeigt.', '11 − 8 = 3. Die Tabelle belegt den Unterschied, nicht dessen Ursache.'],
        ['diagramm-21', 'Wozu dient der Titel eines Diagramms?', 'Wähle die richtige Funktion.', ['Er nennt das dargestellte Thema oder die Fragestellung.', 'Er ersetzt die Datenquelle.', 'Er erklärt alle Zahlen einzeln.', 'Er zeigt die Achsenskalierung.'], 'Er nennt das dargestellte Thema oder die Fragestellung.', 'Der Titel gibt einen ersten Überblick.', 'Der Titel benennt das Thema des Schaubilds und hilft beim Einordnen.'],
        ['diagramm-22', 'Welche Information liefert eine Einheit wie „Kilometer“?', 'Wähle die passende Antwort.', ['In welcher Maßeinheit ein Wert angegeben ist.', 'Wie viele Gruppen es gibt.', 'Wer den Text geschrieben hat.', 'Wie alt die Grafik ist.'], 'In welcher Maßeinheit ein Wert angegeben ist.', 'Die Einheit gehört zum Messwert.', '„Kilometer“ sagt aus, in welcher Maßeinheit die gemessene Strecke dargestellt wird.'],
        ['diagramm-23', 'Ein Liniendiagramm fällt von 20 auf 12. Was lässt sich sicher sagen?', 'Wähle die direkte Beobachtung.', ['Der dargestellte Wert ist um 8 gesunken.', 'Die Ursache ist sicher ein Fehler.', 'Alle Personen fanden das Ergebnis schlecht.', 'Der Wert sinkt auch nächstes Jahr.'], 'Der dargestellte Wert ist um 8 gesunken.', 'Vergleiche nur die dargestellten Werte.', '20 − 12 = 8; über Ursache oder Zukunft sagt dieser Vergleich allein nichts aus.'],
        ['diagramm-24', 'Eine Legende ordnet Farben den Gruppen A und B zu. Was machst du damit?', 'Wähle die passende Vorgehensweise.', ['Vor dem Wertevergleich prüfen, welche Farbe zu welcher Gruppe gehört.', 'Die Legende ignorieren.', 'Die Farbe als Messwert lesen.', 'Nur die Legende abschreiben.'], 'Vor dem Wertevergleich prüfen, welche Farbe zu welcher Gruppe gehört.', 'Farben stehen oft für unterschiedliche Datenreihen.', 'Die Legende erklärt die Datenreihen, damit du Farben korrekt zuordnest.'],
        ['diagramm-25', 'Welche Aussage ist für einen Bericht über ein Diagramm geeignet?', 'Wähle die sachliche Formulierung.', ['Der Anteil stieg von 20 auf 25 Prozent.', 'Die Gruppe war eindeutig am besten.', 'Das Ergebnis ist super.', 'Der Anstieg kam ganz sicher durch Werbung.'], 'Der Anteil stieg von 20 auf 25 Prozent.', 'Berichte Werte und Einheiten präzise.', 'Die Aussage nennt Anfangs- und Endwert und bleibt bei den Daten.'],
        ['diagramm-26', 'Im Balkendiagramm ist die Säule für Gruppe B höher als für A. Was folgt daraus?', 'Wähle die passende Aussage.', ['Der dargestellte Wert für B ist größer als der für A.', 'Gruppe B ist in jeder Hinsicht besser.', 'Gruppe B hat den Wert verursacht.', 'Alle Personen gehören zu B.'], 'Der dargestellte Wert für B ist größer als der für A.', 'Beschreibe nur das dargestellte Merkmal.', 'Nur der dargestellte Messwert ist höher; weitergehende Wertungen sind daraus nicht abzuleiten.'],
        ['diagramm-27', 'Welche Reihenfolge ist beim Auswerten eines Schaubilds sinnvoll?', 'Wähle die beste Reihenfolge.', ['Titel und Quelle lesen, Legende/Einheit prüfen, Werte vergleichen.', 'Werte raten, dann den Titel überfliegen.', 'Zuerst die Ursache behaupten, dann Zahlen suchen.', 'Nur die größte Säule ansehen.'], 'Titel und Quelle lesen, Legende/Einheit prüfen, Werte vergleichen.', 'Erst den Rahmen verstehen, dann einzelne Werte deuten.', 'Titel und Quelle ordnen das Thema ein; Legende und Einheiten machen den anschließenden Vergleich verständlich.'],
        ['diagramm-28', 'Ein Kreisdiagramm hat die Anteile 40 %, 35 % und 25 %. Wie groß ist das Ganze?', 'Addiere die Anteile.', ['100 %', '90 %', '75 %', '110 %'], '100 %', 'Anteile eines vollständigen Kreisdiagramms ergeben zusammen 100 %.', '40 + 35 + 25 = 100. Die Anteile bilden das vollständige Ganze.'],
        ['diagramm-29', 'Welche Angabe macht eine Statistik besser überprüfbar?', 'Wähle eine wichtige Zusatzinformation.', ['Quelle und Erhebungszeitraum', 'Die Lieblingsfarbe des Lesers', 'Die Schriftgröße des Titels', 'Ein beliebiges Symbol'], 'Quelle und Erhebungszeitraum', 'Herkunft und Zeitpunkt helfen, Daten einzuordnen.', 'Quelle und Zeitraum zeigen, woher die Daten kommen und wann sie erhoben wurden.'],
        ['diagramm-30', 'Welche Formulierung vermeidet eine unbelegte Ursache?', 'Wähle den sachlichen Satz.', ['Die Zahl der Besuche sank; ein Grund ist in der Grafik nicht angegeben.', 'Die Besuche sanken, weil alle keine Zeit hatten.', 'Die Grafik beweist, dass der Ort unbeliebt ist.', 'Niemand ging mehr dorthin.'], 'Die Zahl der Besuche sank; ein Grund ist in der Grafik nicht angegeben.', 'Trenne sichtbare Daten von Vermutungen.', 'Die Aussage beschreibt den beobachteten Rückgang und macht transparent, dass keine Ursache genannt ist.'],
        ['diagramm-31', 'Eine Tabelle zeigt 2,4 Kilometer. Was bedeutet die Dezimalzahl?', 'Wähle die richtige Aussage.', ['Die Strecke beträgt zwei Kilometer und vier Zehntel Kilometer.', 'Die Strecke beträgt 24 Kilometer.', 'Die Strecke beträgt 2 Kilometer und 4 Meter.', 'Die Zahl nennt den Zeitraum.'], 'Die Strecke beträgt zwei Kilometer und vier Zehntel Kilometer.', 'Die Einheit gehört zum Zahlenwert.', '2,4 Kilometer sind 2 Kilometer und 0,4 Kilometer, also 400 Meter mehr als 2 Kilometer.'],
        ['diagramm-32', 'Warum solltest du den Achsenbeginn prüfen?', 'Wähle eine wichtige Begründung.', ['Ein abgeschnittener Achsenbeginn kann Unterschiede optisch größer erscheinen lassen.', 'Er nennt immer die Quelle der Daten.', 'Er zeigt stets die Prozentanteile.', 'Er beweist die Ursache eines Anstiegs.'], 'Ein abgeschnittener Achsenbeginn kann Unterschiede optisch größer erscheinen lassen.', 'Achte darauf, ob die Skala bei null beginnt.', 'Wenn eine Achse nicht bei null beginnt, können Balkenunterschiede optisch übertrieben wirken.'],
        ['diagramm-33', 'Ein Anteil steigt von 20 % auf 25 %. Um wie viele Prozentpunkte steigt er?', 'Wähle den Unterschied zwischen den Prozentangaben.', ['5 Prozentpunkte', '5 Prozent', '20 Prozentpunkte', '25 Prozentpunkte'], '5 Prozentpunkte', 'Subtrahiere die Prozentwerte: 25 minus 20.', '25 % − 20 % = 5 Prozentpunkte. Eine relative Veränderung wäre eine andere Berechnung.'],
        ['diagramm-34', 'Welche Information hilft, Daten zeitlich einzuordnen?', 'Wähle die passende Angabe.', ['Der Erhebungszeitraum', 'Die Hintergrundfarbe', 'Die Schriftart', 'Die Position der Überschrift'], 'Der Erhebungszeitraum', 'Prüfe, wann die Daten gesammelt wurden.', 'Der Erhebungszeitraum zeigt, für welche Zeit die Daten gelten und ob sie aktuell sind.'],
        ['diagramm-35', 'Welche Aussage vergleicht Werte korrekt? Montag: 12 Besuche; Dienstag: 9 Besuche.', 'Wähle den sachlichen Vergleich.', ['Am Dienstag gab es 3 Besuche weniger als am Montag.', 'Am Dienstag kamen 3 Prozent weniger Personen.', 'Montag war dreimal so beliebt.', 'Der Rückgang wurde durch das Wetter verursacht.'], 'Am Dienstag gab es 3 Besuche weniger als am Montag.', 'Berechne 12 minus 9 und nenne die Einheit.', '12 − 9 = 3 Besuche. Die Daten belegen den Unterschied, nicht dessen Ursache.'],
        ['diagramm-36', 'Welche Überschrift unterscheidet einen Sachbericht von einer Meinung?', 'Wähle die sachliche Formulierung.', ['Die Zahl der Busfahrten nahm im Frühjahr zu.', 'Die Busse sind endlich viel besser.', 'Der Fahrplan ist eine Katastrophe.', 'Alle sollten den Bus nehmen.'], 'Die Zahl der Busfahrten nahm im Frühjahr zu.', 'Ein Sachbericht beschreibt überprüfbare Veränderungen.', 'Die Aussage berichtet eine messbare Veränderung; die anderen Formulierungen enthalten Wertungen oder Aufforderungen.'],
        ['diagramm-37', 'Was gehört in den Hauptteil einer Schaubildbeschreibung?', 'Wähle den wichtigsten Inhalt.', ['Zentrale Werte und nachvollziehbare Vergleiche mit Einheiten.', 'Eine Vermutung über die Absicht der Personen.', 'Nur die persönliche Meinung.', 'Eine Liste aller Farben ohne Bezug zu Daten.'], 'Zentrale Werte und nachvollziehbare Vergleiche mit Einheiten.', 'Belege Aussagen mit den dargestellten Werten.', 'Der Hauptteil beschreibt wichtige Daten und vergleicht sie präzise mit den passenden Einheiten.'],
        ['diagramm-38', 'Eine Tabelle zeigt Werte 8, 14 und 11. Welcher Wert ist der höchste?', 'Lies alle drei Zahlen.', ['14', '8', '11', 'Die Werte sind gleich.'], '14', 'Vergleiche die drei Werte.', '14 ist größer als 11 und 8 und damit der höchste dargestellte Wert.'],
        ['diagramm-39', 'Eine Linie steigt in einem Diagramm. Was lässt sich daraus sicher schließen?', 'Wähle nur die unmittelbar belegbare Aussage.', ['Der dargestellte Wert nimmt im gezeigten Zeitraum zu.', 'Die Entwicklung wird sicher weitergehen.', 'Eine bestimmte Maßnahme hat den Anstieg verursacht.', 'Alle Gruppen profitieren davon.'], 'Der dargestellte Wert nimmt im gezeigten Zeitraum zu.', 'Beschreibe den Verlauf, nicht eine Ursache oder Zukunft.', 'Die Linie zeigt einen Anstieg der dargestellten Werte; Ursache und zukünftige Entwicklung sind damit nicht automatisch belegt.'],
        ['diagramm-40', 'Zwei Merkmale verändern sich im gleichen Zeitraum ähnlich. Was darfst du daraus allein schließen?', 'Wähle die fachlich vorsichtige Aussage.', ['Die Daten zeigen eine gemeinsame Entwicklung, aber nicht automatisch eine Ursache.', 'Das eine Merkmal verursacht sicher das andere.', 'Die Werte beweisen eine Absicht.', 'Die Entwicklung wird immer so weitergehen.'], 'Die Daten zeigen eine gemeinsame Entwicklung, aber nicht automatisch eine Ursache.', 'Ein Zusammenhang ist nicht automatisch ein Ursache-Wirkung-Beweis.', 'Ähnliche Verläufe können einen Zusammenhang nahelegen; für eine Ursache braucht man zusätzliche Belege.']
    ]
};

const makeChoiceExercise = ([id, prompt, question, options, answer, tip, explanation]) => ({
    id,
    type: 'multiple-choice',
    prompt,
    question,
    options,
    answer,
    tip,
    explanation
});

window.DeutschExercises.forEach(category => {
    const additions = additionalChoiceExercises[category.id] || [];
    category.exercises.push(...additions.map(makeChoiceExercise));
});

const classworkPoemAssignments = {
    'deutsch-klassenarbeit-poem-01': { poemId: 'wuenschelrute', displayPrompt: 'Welches Reimschema hat Eichendorffs „Wünschelrute“?' },
    'deutsch-klassenarbeit-poem-02': { poemId: 'wuenschelrute', displayPrompt: 'Welche Versenden bilden den zweiten Reim?' },
    'deutsch-klassenarbeit-poem-03': { poemId: 'wuenschelrute', displayPrompt: 'Was kann das „Zauberwort“ bedeuten?' },
    'deutsch-klassenarbeit-poem-04': { poemId: 'wuenschelrute', displayPrompt: 'An wen richtet sich das „du“?' },
    'deutsch-klassenarbeit-poem-05': { poemId: 'dieDreiSpatzen', displayPrompt: 'Bestimme das Reimschema der ersten Strophe.' },
    'deutsch-klassenarbeit-poem-06': { poemId: 'dieDreiSpatzen', displayPrompt: 'Welche Reimpaare hörst du in der ersten Strophe?' },
    'deutsch-klassenarbeit-poem-07': { poemId: 'dieDreiSpatzen', displayPrompt: 'Welche Stimmung entsteht in der ersten Strophe?' },
    'deutsch-klassenarbeit-poem-08': { poemId: 'dieDreiSpatzen', displayPrompt: 'Welches Stilmittel steht im Vers „So warm wie der Hans hats niemand nicht“?' },
    'deutsch-klassenarbeit-poem-09': { poemId: 'erlkönig', displayPrompt: 'Bestimme das Reimschema der ersten Strophe des „Erlkönigs“.' },
    'deutsch-klassenarbeit-poem-10': { poemId: 'erlkönig', displayPrompt: 'Wer nimmt den Erlkönig in den nächsten Versen wahr?' },
    'deutsch-klassenarbeit-poem-11': { poemId: 'erlkönig', displayPrompt: 'Welche Versenden reimen sich im ersten Vierzeiler?' },
    'deutsch-klassenarbeit-poem-12': { poemId: 'erlkönig', displayPrompt: 'Welche Wirkung hat der Wechsel der direkten Rede?' },
    'deutsch-klassenarbeit-poem-13': { poemId: 'dieBürgschaft', displayPrompt: 'Bestimme das Reimschema der ersten vier Verse aus Schillers „Die Bürgschaft“.' },
    'deutsch-klassenarbeit-poem-14': { poemId: 'dieBürgschaft', displayPrompt: 'Wie lautet das Reimschema der ersten sieben Verse?' },
    'deutsch-klassenarbeit-poem-15': { poemId: 'dieBürgschaft', displayPrompt: 'Was möchte Möros erreichen?' },
    'deutsch-klassenarbeit-poem-16': { poemId: 'dieBürgschaft', displayPrompt: 'Welche Wirkung hat der umarmende Reim am Anfang?' }
};

window.DeutschExercises.find(category => category.id === 'deutsch-klassenarbeit').exercises.forEach(exercise => {
    const assignment = classworkPoemAssignments[exercise.id];
    if (!assignment) return;
    exercise.poem = classworkPoems[assignment.poemId];
    exercise.displayPrompt = assignment.displayPrompt;
});
