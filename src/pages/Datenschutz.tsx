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
                1. Allgemeine Hinweise
              </h2>
              <p className={css(paragraph)}>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten 
                ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG).
              </p>

              <h2 className={css(sectionHeading)}>2. Verantwortliche Stelle</h2>

              <p className={css(paragraph)}>
                Eigenheimwunsch GmbH<br />
                Grabenstr. 10<br />
                79539 Lörrach<br />
                Deutschland<br />
                E-Mail:{" "}
                <a href='mailto:info@eigenheimwunsch.de' className={css(link)}>
                  info@eigenheimwunsch.de
                </a>
                <br />
                Telefon: {" "}
                <a href='tel:+4976211694809' className={css(link)}>+49 (0)7621 1694809</a>
              </p>

              <p className={css(paragraph)}>
              Vertreten durch die Geschäftsführer:<br />
              Slawik Neumann, Vitali Schell
              </p>
              
              <h2 className={css(sectionHeading)}>3. Zwecke der Datenverarbeitung</h2>
              <p className={css(paragraph)}>
                Wir verarbeiten personenbezogene Daten zu folgenden Zwecken:
              </p>
              <p className={css(paragraph)}>
                - Bearbeitung von Kontaktanfragen<br />
                - Kommunikation mit Interessenten und Kunden<br />
                - Durchführung vorvertraglicher Maßnahmen<br />
                - Vertragsabwicklung im Bereich Immobilien und Immobilienfinanzierung
              </p>
              
              <h2 className={css(sectionHeading)}>4. Rechtsgrundlagen der Verarbeitung</h2>
              <p className={css(paragraph)}>
                Die Verarbeitung erfolgt auf Grundlage von:
              </p>
              <p className={css(paragraph)}>
                - Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen)<br />
                - Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                - Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, sofern erteilt)
              </p>

              <h2 className={css(sectionHeading)}>5. Server-Logfiles</h2>
              <p className={css(paragraph)}>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind:
              </p>
              <p className={css(paragraph)}>
                - Browsertyp und Browserversion<br />
                - verwendetes Betriebssystem<br />
                - Referrer URL<br />
                - Hostname des zugreifenden Rechners<br />
                - Uhrzeit der Serveranfrage<br />
                - IP-Adresse
              </p>
              <p className={css(paragraph)}>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
              </p>

              <h2 className={css(sectionHeading)}>6. Hosting</h2>
              <p className={css(paragraph)}>
                Unsere Website wird bei folgendem Anbieter gehostet:
              </p>

              <p className={css(paragraph)}>
                IONOS SE<br />
                Elgendorfer Straße 57<br />
                56410 Montabaur<br />
                Deutschland
              </p>

              <p className={css(paragraph)}>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className={css(paragraph)}>
                Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
              </p>

              <h2 className={css(sectionHeading)}>7. Google Analytics</h2>
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

              <h2 className={css(sectionHeading)}>8. Google Maps</h2>
                            
              <p className={css(paragraph)}>
                Diese Website verwendet Google Maps, einen Kartendienst von Google Inc. („Google").
                Durch die Nutzung dieser Website erklären Sie sich mit der Erfassung, Bearbeitung und Nutzung der automatisch erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
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

              <h2 className={css(sectionHeading)}>9. Kontaktaufnahme</h2>

              <p className={css(paragraph)}>
                Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
              </p>

              <p className={css(paragraph)}>
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h2 className={css(sectionHeading)}>10. Cookies</h2>
              <p className={css(paragraph)}>
                Unsere Website verwendet ausschließlich technisch notwendige Cookies.<br />
                Diese Cookies sind erforderlich, um die Funktionalität der Website sicherzustellen.<br />
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h1 className={css(sectionHeading)}>11. Weitergabe von Daten</h1>
              <p className={css(paragraph)}>
                Eine Weitergabe Ihrer Daten erfolgt nur:
              </p>

              <p className={css(paragraph)}>
                - wenn dies zur Vertragserfüllung erforderlich ist<br />
                - wenn eine gesetzliche Verpflichtung besteht<br />
                - oder wenn Sie ausdrücklich eingewilligt haben
              </p>

              <h2 className={css(sectionHeading)}>12. Speicherdauer</h2>
              <p className={css(paragraph)}>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen 
                Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>

              <h2 className={css(sectionHeading)}>13. Ihre Rechte</h2>
              <p className={css(paragraph)}>
                Sie haben das Recht auf:
              </p>

              <p className={css(paragraph)}>
                - Auskunft gemäß Art. 15 DSGVO<br />
                - Berichtigung gemäß Art. 16 DSGVO<br />
                - Löschung gemäß Art. 17 DSGVO<br />
                - Einschränkung der Verarbeitung gemäß Art. 18 DSGVO<br />
                - Datenübertragbarkeit gemäß Art. 20 DSGVO<br />
                - Widerspruch gemäß Art. 21 DSGVO  
              </p>

              <h2 className={css(sectionHeading)}>14. Beschwerderecht</h2>

              <p className={css(paragraph)}>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
              </p>
              <p className={css(paragraph)}>
                Zuständige Aufsichtsbehörde:
              </p>

              <p className={css(paragraph)}>
                Die Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg<br />
                Stahnsdorfer Damm 77<br />
                14532 Kleinmachnow<br />
                Deutschland  
              </p>

              <h2 className={css(sectionHeading)}>15. Datensicherheit</h2>

              <p className={css(paragraph)}>
              Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, 
              Missbrauch oder unbefugten Zugriff zu schützen.
              </p>

              <h2 className={css(sectionHeading)}>16. Änderungen dieser Datenschutzerklärung</h2>

              <p className={css(paragraph)}>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen unserer Leistungen anzupassen.
              </p>
             
              <p className={css(standNote)}>
                Stand: Juni 2026
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
