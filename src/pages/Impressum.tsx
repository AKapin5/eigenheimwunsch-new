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
                Hauptstraße 28<br />
                15806 Zossen
              </p>

              <h2 className={css(sectionHeading)}>Kontakt</h2>
              <p className={css(paragraph)}>
                Telefon: <a href='tel:+4976211569111' className={css(link)}>+49 7621 15 69 111</a>,{" "}
                <a href='tel:+4976211569777' className={css(link)}>+49 7621 15 69 777</a><br />
                E-Mail: <a href='mailto:info@eigenheimwunsch.de' className={css(link)}>info@eigenheimwunsch.de</a>
              </p>

              <h2 className={css(sectionHeading)}>Vertretungsberechtigter Geschäftsführer</h2>
              <p className={css(paragraph)}>Slawik Neumann</p>

              <h2 className={css(sectionHeading)}>Registereintrag</h2>
              <p className={css(paragraph)}>
                Registergericht: Amtsgericht Potsdam<br />
                Registernummer: HRB 35146 P
              </p>

              <h2 className={css(sectionHeading)}>Erlaubnis</h2>
              <p className={css(paragraph)}>
                Erlaubnis gemäß § 34 i Gewerbeordnung (Immobiliardarlehensvermittler).<br />
                Aufsichtsbehörde: Industrie und Handelskammer (IHK) Hochrhein–Bodensee,
                Reichenaustraße 21, 78467 Konstanz<br />
                Registrierungsnummer: D-W-143-PGMR-89
              </p>

              <h2 className={css(sectionHeading)}>
                Verantwortlicher für den Inhalt i.S.d. § 55 Abs. 2 RStV
              </h2>
              <p className={css(paragraph)}>
                Herr Slawik Neumann<br />
                c/o EigenheimWunsch GmbH, Hauptstraße 28, 15806 Zossen
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
