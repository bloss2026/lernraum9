Englisch-Vokabeltrainer · Lernraum 9
====================================

Dateien und Einbindung
----------------------
vokabel.html ist die eigene Trainerseite im Fach Englisch. Sie lädt zuerst
das vorhandene Lernraum-Design, die Portalnavigation und die vorhandene
Lernkonto-Verbindung und danach die mit „vocab-“ gekapselten Trainerstile
und JavaScript-Module.

vocabulary-data.js enthält die bereitgestellten Vokabeln aus „Unit 1: Life
down under“, sortiert nach Grundwortschatz, Theme 1–3, Focus on language,
Text & Weitere Vokabeln und Speaking course. Weitere Units werden dort mit
einem eigenen unit-Wert ergänzt. vocabulary.js gruppiert die Liste
automatisch nach Unit und Abschnitt und bietet passende Filter.
Die Module vocabulary.js, vocabulary-supabase.js,
vocabulary-spaced-repetition.js, vocabulary-quiz.js und
vocabulary-dashboard.js teilen sich diese Daten und ergänzen keine Wörter.
Der Einstieg zum Trainer befindet sich in der Englisch-Übersicht.

Supabase einrichten
-------------------
Im Supabase-Projekt die Migration
supabase/migrations/20261107100000_vocabulary_trainer.sql ausführen. Sie
erstellt nutzergebundene Tabellen für Lernstände, Tagesziele, Aktivitäten
und Quiz-Ergebnisse, aktiviert Row Level Security und richtet die Funktion
zum sicheren Hochzählen täglicher Übungseinheiten ein.

Der Trainer verwendet die bestehende Lernraum-9-Supabase-Konfiguration und
Anmeldung. Nutzer müssen über „Lernkonto“ auf dem Dashboard angemeldet sein.
Alle Datenbankzugriffe erfolgen mit dem angemeldeten Zugriffstoken und
werden durch die Tabellenrichtlinien auf das eigene Konto begrenzt. Es gibt
keinen lokalen Ersatzspeicher für den Lernfortschritt.

Trainer starten
---------------
Das Projekt über einen lokalen Webserver öffnen, zum Beispiel mit der
VS-Code-Erweiterung „Live Server“, und dann vokabel.html beziehungsweise
Englisch → Vokabeltrainer öffnen. Für Anmeldung, Sprachausgabe und die
Supabase-Verbindung nicht direkt file:// verwenden.

Vokabeln ergänzen
-----------------
Später weitere bereitgestellte Einträge im Array in vocabulary-data.js
ergänzen. Unterstützt werden die Felder id, english, german, alternatives,
unit, category, level, example und pronunciation. alternatives ist eine Liste
erlaubter Schreibweisen. Jede Vokabel braucht eine eindeutige id sowie
englischen und deutschen Text. Für eine neue Unit denselben Unit-Namen bei
ihren Einträgen setzen und category auf den jeweiligen Abschnitt setzen.
Die Anwendung erzeugt oder ergänzt keine Wörter selbst.

Weitere Themen
--------------
Für ein weiteres Vokabelthema category bei den betreffenden bereitgestellten
Einträgen setzen. Die Vokabelliste erstellt daraus automatisch einen
Themenfilter. Für weitere feste Filter oder Übungsbereiche können die
bestehenden vocab-prefixed Komponenten und die Vokabelmodule erweitert
werden, ohne globale Stile des übrigen Lernraums zu verändern.

Automatische Synchronisierung
-----------------------------
Der Fortschritt wird beim Öffnen, nach der Anmeldung, beim Zurückkehren zur
Seite und nach jeder Lernaktion automatisch mit Supabase synchronisiert.
Vokabel-Lernstände, Quiz-Ergebnisse, Tagesziele und Lernaktivitäten werden
pro Lernkonto gespeichert und beim nächsten Öffnen wieder geladen. Die
anderen Lernbereiche verwenden dieselbe automatische Synchronisierung über
das gemeinsame Lernkonto. Manuelle Export- und Import-Schaltflächen sind
nicht erforderlich.
