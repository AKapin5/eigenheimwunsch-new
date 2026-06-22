import React from "react";
import { useFela, FelaStyle } from "react-fela";

export const Datenschutz: React.FC = () => {
  const { css } = useFela();

  return (
    <section className='be-partner-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8'>
            <h1
              className={`be-partner__title ${css({
                textAlign: "center",
                marginBottom: "40px",
              })}`}
            >
              Datenschutzerklärung
            </h1>

            <div className={css(contentBlock)}>
              <p className={css(paragraph)}>
                Herzlich willkommen auf unserer Plattform, welche unter Eigenheimwunsch.de zu
                erreichen ist. Wir freuen uns über Ihren Besuch. Datenschutz hat für uns und unsere
                Plattform einen hohen Stellenwert und wir möchten, dass Sie sich während des
                Besuchs unserer Website sicher fühlen. Nachstehend informieren wir Sie ausführlich
                über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten
                personenbezogenen Daten und klären Sie über die Ihnen als betroffene Person
                zustehenden Rechte auf. Wir behalten uns das Recht vor, die Datenschutzerklärung
                jederzeit mit Wirkung für die Zukunft zu ändern. Die jeweils aktuelle Version der
                Datenschutzerklärung kann jederzeit auf unserer Website abgerufen, abgespeichert
                und ausgedruckt werden.
              </p>

              <h2 className={css(sectionHeading)}>
                1. Name und Anschrift des Verantwortlichen
              </h2>
              <p className={css(paragraph)}>
                Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
                nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger
                datenschutzrechtlicher Bestimmungen ist:
              </p>
              <p className={css(paragraph)}>
                Herr Slawik Neumann<br />
                EigenheimWunsch GmbH, Hauptstraße 28, 15806 Zossen<br />
                E-Mail:{" "}
                <a href='mailto:info@eigenheimwunsch.de' className={css(link)}>
                  info@eigenheimwunsch.de
                </a>
                <br />
                Tel.:{" "}
                <a href='tel:+4976211569111' className={css(link)}>+49 7621 15 69 111</a>,{" "}
                <a href='tel:+4976211569777' className={css(link)}>+49 7621 15 69 777</a>
              </p>

              <h2 className={css(sectionHeading)}>2. Zugriffsdaten in Server-Logfiles</h2>
              <p className={css(paragraph)}>
                Wir speichern bei jedem Aufruf unserer Website automatisiert Zugriffsdaten in
                sogenannten Server-Logfiles. Dies umfasst Datum und Uhrzeit des Abrufs, übertragene
                Datenmenge und ggf. Namen der angeforderten Datei, verwendeter Browser und dessen
                Version, verwendetes Betriebssystem, IP-Adresse und Referrer URL (URL, die Sie
                unmittelbar zuvor besucht haben).
              </p>
              <p className={css(paragraph)}>
                Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um
                eine Auslieferung der Website an Ihr Endgerät zu ermöglichen. Hierfür muss Ihre
                IP-Adresse für die Dauer der Sitzung gespeichert bleiben.
              </p>
              <p className={css(paragraph)}>
                Rechtsgrundlage für die vorübergehende Speicherung Ihrer Daten und der
                beschriebenen Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className={css(paragraph)}>
                Diese Daten werden ausschließlich zur Sicherstellung eines dauerhaften und
                störungsfreien Betriebs der Website und zur Verbesserung der Inhalte unserer
                Website sowie zur Übermittlung an Strafverfolgungsbehörden im Falle eines
                Cyberangriffs und Sicherstellung der Sicherheit unserer informationstechnischen
                Systeme ausgewertet. Eine Auswertung Ihrer Daten zu Marketingzwecken findet in
                diesem Zusammenhang nicht statt. In diesen Zwecken liegt auch unser berechtigtes
                Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className={css(paragraph)}>
                Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der
                Daten in Logfiles ist für den Betrieb unserer Website zwingend erforderlich. Es
                besteht folglich keine Widerspruchsmöglichkeit.
              </p>

              <h2 className={css(sectionHeading)}>3. Verwendung von Cookies</h2>
              <p className={css(paragraph)}>
                Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter
                Funktionen zu ermöglichen, verwenden wir auf unserer Website sogenannte „Cookies".
                Dabei handelt es sich um kleine Textdateien, welche über einen Browser auf Ihrem
                Endgerät abgelegt und gespeichert werden.
              </p>
              <p className={css(paragraph)}>
                Viele Cookies enthalten eine sogenannte Cookie-ID. Sie besteht aus einer
                Zeichenfolge, durch welche Websites und Server einem konkreten Browser zugeordnet
                werden können, in dem das jeweilige Cookie gespeichert wurde. Nach dem Ende der
                Browser-Sitzung werden die meisten der von uns verwendeten Cookies wieder gelöscht
                („Sitzungs-Cookies"). Die dauerhaften Cookies („persistente Cookies") verbleiben
                dagegen auf Ihrem Endgerät.
              </p>
              <p className={css(paragraph)}>
                In den Cookies werden dabei folgende Daten gespeichert und übermittelt:
                Spracheinstellungen, eingegebene Suchbegriffe, Häufigkeit von Seitenaufrufen,
                Inanspruchnahme von Website-Funktionen, Herkunft des Nutzers, verwendetes
                Betriebssystem, verwendetes Endgerät, verwendeter Browser, Bildschirmauflösung des
                Endgerätes.
              </p>
              <p className={css(paragraph)}>
                Ihre auf unserer Website erhobenen Daten werden durch technische Vorkehrungen
                pseudonymisiert. Daher ist eine Zuordnung der Daten zu Ihnen nicht mehr möglich.
                Die Daten werden nicht gemeinsam mit sonstigen Ihrer personenbezogenen Daten
                gespeichert.
              </p>
              <p className={css(paragraph)}>
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung
                von Cookies ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className={css(paragraph)}>
                Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung unserer
                Plattform für Sie zu vereinfachen (z.B. werden Ihre Einstellungen gespeichert).
                Einige Funktionen unserer Website können ohne den Einsatz von Cookies nicht
                angeboten werden. Für diese ist es erforderlich, dass Ihr Browser auch nach einem
                Seitenwechsel wiedererkannt wird. Bei der Nichtannahme oder Deaktivierung von
                Cookies kann die Funktionalität unserer Website eingeschränkt sein.
              </p>
              <p className={css(paragraph)}>
                Wir verwenden auf unserer Website darüber hinaus Cookies, die eine Analyse Ihres
                Surfverhaltens ermöglichen. Auf diese Weise können folgende Daten übermittelt
                werden: Nutzungsdaten der Website, Eintragung zum Newsletter und Besucherquellen.
              </p>
              <p className={css(paragraph)}>
                Die Verwendung von Analyse-Cookies erfolgt zu dem Zweck, die Qualität unserer
                Website und deren Inhalte zu verbessern. Durch die Analyse-Cookies erfahren wir,
                wie die Website von Ihnen genutzt wird und können so unser Angebot stetig
                optimieren. Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter
                Verwendung von Cookies zu Analysezwecken ist bei Vorliegen Ihrer diesbezüglichen
                Einwilligung Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p className={css(paragraph)}>
                Cookies werden auf Ihrem Endgerät gespeichert und an unserer Website übermittelt.
                Sie haben daher die Kontrolle über die Verwendung von Cookies. Sie können Ihren
                Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte
                Fälle oder generell ausschließen. Zudem können Sie bereits gesetzte Cookies
                jederzeit über Ihren Browser löschen. Ein umfassender Widerspruch gegen
                Onlinemarketing-Cookies kann unter anderem auch über{" "}
                <a
                  href='http://www.youronlinechoices.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={css(link)}
                >
                  www.youronlinechoices.com
                </a>{" "}
                erklärt werden.
              </p>

              <h2 className={css(sectionHeading)}>
                4. Datenverarbeitung bei Nutzung des Kalkulations-Tools
              </h2>
              <p className={css(paragraph)}>
                Verwenden Sie das auf unserer Website angebotene Kalkulations-Tool zur
                Wertermittlung von Immobilien, so verarbeiten wir die hierbei von Ihnen
                eingegebenen Daten, insbesondere die Objektbezogenen Daten sowie die übermittelten
                Kontaktdaten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p className={css(paragraph)}>
                Der Zweck dieser Datenverarbeitung ist die Bereitstellung des unverbindlichen
                Kalkulations-Tools zur Wertermittlung.
              </p>
              <p className={css(paragraph)}>
                Die so verarbeiteten Daten werden auf einem unserer sicheren Server an einem
                Standort in der EU gespeichert und dort verarbeitet. Eine Weitergabe an Dritte
                findet nicht statt, es sei denn, Sie haben in eine Weitergabe eingewilligt. Wir
                speichern diese Daten bis zum Zweckfortfall.
              </p>

              <h2 className={css(sectionHeading)}>
                5. Datenverarbeitung zur telefonischen Beratung
              </h2>
              <p className={css(paragraph)}>
                Sofern Sie im Wege der Kalkulation Ihre Kontaktdaten (Telefonnummer und/oder
                E-Mail-Adresse) angeben und per Klick bestätigen, dass diese sowie die sonst
                eingegebenen Daten zur Kontaktaufnahme verwendet werden können, so verarbeiten wir
                diese Daten, um mit Ihnen in Kontakt zu treten. Die Rechtsgrundlage ist Art. 6
                Abs. 1 lit. a DSGVO.
              </p>
              <p className={css(paragraph)}>
                Die so erhobenen Daten können an unsere spezialisierten Berater weitergegeben
                werden, um Ihnen das bestmögliche Beratungserlebnis bieten zu können. Eine
                Weitergabe an anderen Stellen oder Dritte findet nicht statt.
              </p>
              <p className={css(paragraph)}>
                Wir speichern die so verarbeiteten Daten entsprechend der gesetzlichen
                Speicherfristen, bis zum Zweckfortfall oder bis Sie Ihre Einwilligung widerrufen
                haben.
              </p>
              <p className={css(paragraph)}>
                Die so erteilte Einwilligung in die Kontaktaufnahme ist freiwillig. Sie können
                diese Einwilligung jederzeit und ohne Angabe von Gründen mit Wirkung für die
                Zukunft widerrufen, indem Sie uns über Ihren Entschluss informieren (mündlich,
                schriftlich oder per Mail), ohne dass Ihnen dadurch Nachteile entstehen. Ihre
                personenbeziehbaren Daten werden in diesem Fall gelöscht. Durch den Widerruf der
                Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum
                Widerruf erfolgten Verarbeitung nicht berührt.
              </p>

              <h2 className={css(sectionHeading)}>6. Google Analytics</h2>
              <p className={css(paragraph)}>
                Wir benutzen auf unserer Website Google Analytics, einen Webanalysedienst der
                Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA („Google
                Analytics"). Die erzeugten Informationen über Ihre Benutzung dieser Website werden
                in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                Bei den USA handelt es sich um ein unsicheres Drittland.
              </p>
              <p className={css(paragraph)}>
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1
                lit. a DSGVO.
              </p>
              <p className={css(paragraph)}>
                Google Analytics verwendet Methoden, die eine Analyse der Benutzung der Website
                durch Sie ermöglichen, insbesondere von welcher Internetseite Sie auf unsere
                Website gekommen sind (sogenannte Referrer), auf welche Unterseite Sie zugreifen
                oder wie oft und für welche Verweildauer Sie eine Unterseite betrachten.
              </p>
              <p className={css(paragraph)}>
                Wir haben mit Google einen Vertrag zur Auftragsverarbeitung entsprechend der
                EU-Standardvertragsklauseln nach Maßgabe von Art. 28 DSGVO abgeschlossen, um die
                Sicherheit dieser Datenverarbeitung zu gewährleisten.
              </p>
              <p className={css(paragraph)}>
                Durch die Aktivierung der IP-Anonymisierung auf unserer Website wird dabei die
                IP-Adresse vor der Übermittlung innerhalb der Mitgliedstaaten der Europäischen
                Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen
                Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google
                Analytics von Ihrem Browser übermittelte anonymisierte IP-Adresse wird nicht mit
                anderen Daten von Google zusammengeführt.
              </p>
              <p className={css(paragraph)}>
                Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung
                unserer Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
                Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter diesem Link{" "}
                <a
                  href='http://tools.google.com/dlpage/gaoptout?hl=de'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={css(link)}
                >
                  http://tools.google.com/dlpage/gaoptout?hl=de
                </a>{" "}
                verfügbare Browser-Add-On herunterladen und installieren.
              </p>
              <p className={css(paragraph)}>
                Die Nutzungsbedingungen und Datenschutzerklärung von Google und Google Analytics
                finden Sie hier{" "}
                <a
                  href='https://www.google.de/intl/de/policies/privacy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={css(link)}
                >
                  https://www.google.de/intl/de/policies/privacy/
                </a>{" "}
                beziehungsweise hier{" "}
                <a
                  href='http://www.google.com/analytics/terms/de.html'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={css(link)}
                >
                  http://www.google.com/analytics/terms/de.html
                </a>
                .
              </p>

              <h2 className={css(sectionHeading)}>
                7. Datenverarbeitung bei Nutzung von Facebook Messenger
              </h2>
              <p className={css(paragraph)}>
                Auf unserer Website bieten wir Ihnen die Möglichkeit, über das Facebook Messenger
                Chat Plugin, einen Service der Facebook Ireland Limited, Hanover Reach, 5–7 Hanover
                Quay, Dublin 2 Ireland (nachfolgend: „Facebook"), direkt mit uns in Kontakt zu
                treten. Die Rechtsgrundlage dafür ist Art. 6 Abs. 1 Satz 1 lit. b DSGVO.
              </p>
              <p className={css(paragraph)}>
                Wir erhalten keine Zugangsdaten für Ihr Facebook-Konto. Nehmen Sie auf diesem Weg
                Kontakt zu uns auf, so verarbeiten wir die von Ihnen hierbei übermittelten Daten
                sowie ggf. alle Informationen von Ihrem Facebook-Konto, die Sie auf Facebook
                öffentlich zugänglich gemacht haben. „Öffentlich zugänglich" bedeutet, dass jeder
                diese Informationen sehen kann, unabhängig von seiner Registrierung bei Facebook.
                Zu diesen Daten gehören: Ihr Name, Ihr Profilbild, Ihr Titelbild, Ihr Geschlecht,
                Ihr Benutzername (Facebook-URL), Ihre Benutzer-ID (Facebook-ID). Sie können die
                Datenschutzeinstellungen für Ihr Facebook-Konto direkt auf Facebook ändern.
              </p>
              <p className={css(paragraph)}>
                Während der Nutzung unseres Messaging-Service baut Ihr Gerät automatisch eine
                direkte Verbindung zu einem Facebook-Server in den USA auf.
              </p>
              <p className={css(paragraph)}>
                Weitere Informationen zur Datenverarbeitung durch Facebook finden Sie auf der Seite
                des Anbieters.
              </p>

              <h2 className={css(sectionHeading)}>8. E-Mail und Kontaktformular</h2>
              <p className={css(paragraph)}>
                Auf unserer Website halten wir aufgrund von gesetzlichen Vorschriften unter
                „Impressum" Angaben bereit, die eine schnelle elektronische Kontaktaufnahme zu uns
                sowie eine unmittelbare Kommunikation per E-Mail mit uns ermöglichen. Soweit Sie
                uns per E-Mail kontaktieren, werden die von Ihnen übermittelten personenbezogenen
                Daten automatisch gespeichert.
              </p>
              <p className={css(paragraph)}>
                Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung
                einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. b DSGVO. Wir verwenden die
                von Ihnen übermittelten personenbezogenen Daten ausschließlich für die Bearbeitung
                Ihrer konkreten Anfrage. Die angegebenen Daten werden stets vertraulich behandelt.
              </p>
              <p className={css(paragraph)}>
                Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung
                nicht mehr erforderlich sind. Nehmen Sie Kontakt mit uns auf, so können Sie der
                Speicherung Ihrer personenbezogenen Daten jederzeit widersprechen. In einem solchen
                Fall kann die Konversation nicht fortgeführt werden.
              </p>

              <h2 className={css(sectionHeading)}>9. Datensicherheit</h2>
              <p className={css(paragraph)}>
                Wir sichern unsere Website und sonstigen Systeme durch zahlreiche technische und
                organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder
                Verbreitung Ihrer Daten durch unbefugte Personen. Trotz regelmäßiger Kontrollen
                ist ein vollständiger Schutz gegen alle Gefahren jedoch nicht möglich und kann
                nicht von uns gewährt werden. Aus diesem Grund steht es Ihnen jederzeit frei, Ihre
                personenbezogenen Daten auch auf anderen Wegen an uns zu übermitteln.
              </p>

              <h2 className={css(sectionHeading)}>10. Datenlöschung und Speicherdauer</h2>
              <p className={css(paragraph)}>
                Ihre personenbezogenen Daten werden – sofern in dieser Datenschutzerklärung nicht
                abweichend bestimmt – gelöscht oder gesperrt, sobald der Zweck der Speicherung
                entfällt oder Sie Ihre Einwilligung widerrufen. Eine Speicherung kann darüber
                hinaus dann erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber
                in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
                Verantwortliche unterliegt, vorgesehen wurde. Entfällt der Speicherungszweck,
                widerrufen Sie Ihre Einwilligung oder läuft eine vom Europäischen Richtlinien- und
                Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene
                Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend
                den gesetzlichen Vorschriften gesperrt oder gelöscht, es sei denn, dass eine
                Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss
                oder eine Vertragserfüllung besteht.
              </p>

              <h2 className={css(sectionHeading)}>11. Recht auf Auskunft</h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, jederzeit von uns unentgeltliche Auskunft über die zu Ihrer
                Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu
                erhalten. Sie haben zudem ein Auskunftsrecht bezüglich der folgenden Informationen:
              </p>
              <ul className={css(list)}>
                <li>die Verarbeitungszwecke,</li>
                <li>die Kategorien personenbezogener Daten, die verarbeitet werden,</li>
                <li>
                  die Empfänger oder Kategorien von Empfängern, gegenüber denen die
                  personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden,
                  insbesondere bei Empfängern in Drittländern oder bei internationalen
                  Organisationen,
                </li>
                <li>
                  falls möglich die geplante Dauer, für die die personenbezogenen Daten
                  gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die
                  Festlegung dieser Dauer,
                </li>
                <li>
                  das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden
                  personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den
                  Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung,
                </li>
                <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde,</li>
                <li>
                  wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben
                  werden: alle verfügbaren Informationen über die Herkunft der Daten,
                </li>
                <li>
                  das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling
                  gemäß Artikel 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen –
                  aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und
                  die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene
                  Person.
                </li>
              </ul>
              <p className={css(paragraph)}>
                Ferner steht Ihnen ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein
                Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies
                der Fall ist, so steht Ihnen im Übrigen das Recht zu, Auskunft über die geeigneten
                Garantien im Zusammenhang mit der Übermittlung zu erhalten.
              </p>

              <h2 className={css(sectionHeading)}>12. Recht auf Berichtigung</h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, die unverzügliche Berichtigung und/oder Vervollständigung Sie
                betreffender unrichtiger oder unvollständiger personenbezogener Daten zu verlangen.
                Wir haben die Berichtigung unverzüglich vorzunehmen.
              </p>

              <h2 className={css(sectionHeading)}>
                13. Recht auf Einschränkung der Verarbeitung
              </h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen, wenn
                eine der folgenden Voraussetzungen gegeben ist:
              </p>
              <ul className={css(list)}>
                <li>
                  Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person
                  bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die
                  Richtigkeit der personenbezogenen Daten zu überprüfen.
                </li>
                <li>
                  Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der
                  personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung
                  der personenbezogenen Daten.
                </li>
                <li>
                  Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der
                  Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur
                  Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                </li>
                <li>
                  Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1
                  DSGVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des
                  Verantwortlichen gegenüber denen der betroffenen Person überwiegen.
                </li>
              </ul>
              <p className={css(paragraph)}>
                Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt,
                dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung
                oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum
                Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus
                Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats
                verarbeitet werden.
              </p>
              <p className={css(paragraph)}>
                Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen
                eingeschränkt, werden Sie von uns unterrichtet, bevor die Einschränkung aufgehoben
                wird.
              </p>

              <h2 className={css(sectionHeading)}>14. Recht auf Löschung</h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, von uns zu verlangen, dass die Sie betreffenden
                personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden
                Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:
              </p>
              <ul className={css(list)}>
                <li>
                  Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige
                  Weise verarbeitet, für welche sie nicht mehr notwendig sind.
                </li>
                <li>
                  Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung
                  gemäß Art. 6 Abs. 1 Buchstabe a DSGVO oder Art. 9 Abs. 2 Buchstabe a DSGVO
                  stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.
                </li>
                <li>
                  Die betroffene Person legt gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen die
                  Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die
                  Verarbeitung vor oder die betroffene Person legt gemäß Art. 21 Abs. 2 DSGVO
                  Widerspruch gegen die Verarbeitung ein.
                </li>
                <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                <li>
                  Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen
                  Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                  erforderlich, dem der Verantwortliche unterliegt.
                </li>
                <li>
                  Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
                  Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
                </li>
              </ul>
              <p className={css(paragraph)}>
                Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist zur
                Ausübung des Rechts auf freie Meinungsäußerung und Information; zur Erfüllung einer
                rechtlichen Verpflichtung; aus Gründen des öffentlichen Interesses im Bereich der
                öffentlichen Gesundheit; für im öffentlichen Interesse liegende Archivzwecke,
                wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke;
                oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
              </p>

              <h2 className={css(sectionHeading)}>15. Recht auf Unterrichtung</h2>
              <p className={css(paragraph)}>
                Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
                gegenüber uns geltend gemacht, sind wir verpflichtet, allen Empfängern, denen die
                Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung
                oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei
                denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen
                Aufwand verbunden.
              </p>
              <p className={css(paragraph)}>
                Ihnen steht gegenüber uns das Recht zu, über diese Empfänger unterrichtet zu
                werden.
              </p>

              <h2 className={css(sectionHeading)}>16. Recht auf Datenübertragbarkeit</h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, welche Sie uns
                bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format
                zu erhalten. Sie haben außerdem das Recht, diese Daten einem anderen
                Verantwortlichen ohne Behinderung durch uns zu übermitteln, sofern die Verarbeitung
                auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DSGVO oder Art. 9 Abs. 2
                Buchstabe a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DSGVO
                beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt.
              </p>
              <p className={css(paragraph)}>
                Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung
                personenbezogener Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist,
                die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt,
                die dem Verantwortlichen übertragen wurde.
              </p>

              <h2 className={css(sectionHeading)}>17. Recht auf Widerspruch</h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die
                aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch
                einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
              </p>
              <p className={css(paragraph)}>
                Wir verarbeiten die personenbezogenen Daten im Falle des Widerspruchs nicht mehr,
                es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
                nachweisen, die Ihren Interessen, Rechten und Freiheiten überwiegen, oder die
                Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen.
              </p>
              <p className={css(paragraph)}>
                Sofern wir Ihre personenbezogenen Daten verarbeiten, um Direktwerbung zu betreiben,
                haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Ihrer
                personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Widersprechen Sie
                uns gegenüber der Verarbeitung für Zwecke der Direktwerbung, so werden wir Ihre
                personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.
              </p>
              <p className={css(paragraph)}>
                Zur Ausübung des Rechts auf Widerspruch können Sie sich jederzeit an uns wenden.
              </p>

              <h2 className={css(sectionHeading)}>
                18. Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
              </h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, Ihre Einwilligung zur Verarbeitung personenbezogener Daten
                jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die
                Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
                Verarbeitung nicht berührt.
              </p>

              <h2 className={css(sectionHeading)}>
                19. Recht auf automatisierte Entscheidungen im Einzelfall einschließlich Profiling
              </h2>
              <p className={css(paragraph)}>
                Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten
                Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu
                werden, die Ihnen gegenüber rechtlicher Wirkung entfaltet oder Sie in ähnlicher
                Weise erheblich beeinträchtigt, sofern die Entscheidung nicht für den Abschluss
                oder die Erfüllung eines Vertrags zwischen Ihnen und uns erforderlich ist, nicht
                aufgrund von Rechtsvorschriften zulässig ist oder nicht mit Ihrer ausdrücklichen
                Einwilligung erfolgt.
              </p>

              <h2 className={css(sectionHeading)}>
                20. Bestehen einer automatisierten Entscheidungsfindung
              </h2>
              <p className={css(paragraph)}>
                Wir führen keine automatische Entscheidungsfindung oder ein Profiling durch.
              </p>

              <h2 className={css(sectionHeading)}>
                21. Recht auf Beschwerde bei einer Aufsichtsbehörde
              </h2>
              <p className={css(paragraph)}>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde,
                insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder
                des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
              <p className={css(paragraph)}>
                Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
                Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich
                der Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
              </p>

              <h2 className={css(sectionHeading)}>
                22. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der
                personenbezogenen Daten
              </h2>
              <p className={css(paragraph)}>
                Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum
                Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus
                vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter
                kann es zu einem Vertragsschluss erforderlich sein, dass Sie uns personenbezogene
                Daten zur Verfügung stellen, die in der Folge durch uns verarbeitet werden müssen.
                Sie sind beispielsweise verpflichtet, uns Ihre personenbezogenen Daten
                bereitzustellen, wenn Sie mit uns einen Vertrag abschließen. Eine
                Nichtbereitstellung Ihrer personenbezogenen Daten hätte zur Folge, dass der Vertrag
                mit Ihnen nicht geschlossen werden könnte.
              </p>

              <p className={css(standNote)}>
                Stand: April 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const contentBlock: FelaStyle<{}> = () => ({
  color: "#4F4F4F",
  lineHeight: "1.8",
});

const sectionHeading: FelaStyle<{}> = () => ({
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
  marginTop: "32px",
  marginBottom: "10px",
});

const paragraph: FelaStyle<{}> = () => ({
  fontSize: "16px",
  fontWeight: "300",
  color: "#4F4F4F",
  marginBottom: "12px",
});

const list: FelaStyle<{}> = () => ({
  paddingLeft: "24px",
  marginBottom: "12px",
  "> li": {
    fontSize: "16px",
    fontWeight: "300",
    color: "#4F4F4F",
    marginBottom: "8px",
  },
});

const link: FelaStyle<{}> = () => ({
  color: "#4F4F4F",
  textDecoration: "underline",
  ":hover": {
    color: "#333",
  },
});

const standNote: FelaStyle<{}> = () => ({
  fontSize: "16px",
  fontWeight: "300",
  color: "#4F4F4F",
  marginBottom: "12px",
  marginTop: "40px",
  fontStyle: "italic",
});
