import React from "react";
import { useFela, FelaStyle } from "react-fela";

export const Impressum: React.FC = () => {
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
              Impressum
            </h1>

            <div className={css(contentBlock)}>
              <p className={css(paragraph)}>
                <strong>EigenheimWunsch GmbH</strong><br />
                Grabenstr. 10<br />
                79539 Lörrach<br />
                Deutschland
              </p>

              <h2 className={css(sectionHeading)}>Kontakt</h2>
              <p className={css(paragraph)}>
                Telefon: <a href='tel:+49776211694809' className={css(link)}>+49 7621 1694 809</a><br />
                E-Mail: <a href='mailto:info@eigenheimwunsch.de' className={css(link)}>info@eigenheimwunsch.de</a>
              </p>

              <h2 className={css(sectionHeading)}>Vertreten durch</h2>
              <p className={css(paragraph)}>Geschäftsführung: Slawik Neumann, Vitali Schell</p>

              <h2 className={css(sectionHeading)}>Registereintrag</h2>
              <p className={css(paragraph)}>
                Registergericht: Amtsgericht Potsdam<br />
                Registernummer: HRB 35146 P
              </p>

              <h2 className={css(sectionHeading)}>Umsatzsteuer-ID</h2>
              <p className={css(paragraph)}>
                DE346776182
              </p>

              <h2 className={css(sectionHeading)}>Steuernummer</h2>
              <p className={css(paragraph)}>
                05010808865
              </p>

              <h2 className={css(sectionHeading)}>Erlaubnis</h2>
              <p className={css(paragraph)}>
                Erlaubnis nach § 34i GewO (Immobiliardarlehensvermittler).<br />
                Erteilt durch: Industrie- und Handelskammer (IHK) Hochrhein-Bodensee
              </p>

              <h2 className={css(sectionHeading)}>Zuständige Aufsichtsbehörde:</h2>
              <p className={css(paragraph)}>
                Industrie- und Handelskammer (IHK) Hochrhein-Bodensee<br />
                Reichenaustraße 21<br />
                78467 Konstanz<br />
                Deutschland
              </p>
              
              <h2 className={css(sectionHeading)}>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className={css(paragraph)}>
                Slawik Neumann, Vitali Schell<br />
                Eigenheimwunsch GmbH<br />
                Grabenstr. 10<br />
                79539 Lörrach
              </p>

              <h2 className={css(sectionHeading)}>
                EU-Streitschlichtung
              </h2>
              <p className={css(paragraph)}>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                <a href='https://ec.europa.eu/consumers/odr' target='_blank' rel='noopener noreferrer' className={css(link)}>https://ec.europa.eu/consumers/odr</a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className={css(sectionHeading)}>
                Verbraucherstreitbeilegung
              </h2>
              <p className={css(paragraph)}>
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
  marginTop: "28px",
  marginBottom: "8px",
});

const paragraph: FelaStyle<{}> = () => ({
  fontSize: "16px",
  fontWeight: "300",
  color: "#4F4F4F",
  marginBottom: "12px",
});

const link: FelaStyle<{}> = () => ({
  color: "#4F4F4F",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
