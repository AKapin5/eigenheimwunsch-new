import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FelaStyle, useFela } from "react-fela";

import { ReviewsSlider, HeaderVideo, MortageForm } from "../components";
import { setFormStep } from "redux/actions/setFormStage";

import handIcon from "../assets/images/dist/eigenheim_icons_hand.svg";
import compIcon from "../assets/images/dist/eigenheim_icons_comp.svg";
import presentIcon from "../assets/images/dist/eigenheim_icons_present.svg";
import keysIcon from "../assets/images/dist/eigenheim_icons_keys.svg";
import clockIcon from "../assets/images/dist/eigenheim_icons_clock.svg";
import moneyIcon from "../assets/images/dist/money.svg";
import medalsIcon from "../assets/images/dist/medals.svg";
import trustIcon from "../assets/images/dist/trustpilot-stars.svg";
import winnerIcon from "../assets/images/dist/winner.svg";
import workPlan1Icon from "../assets/images/dist/work-plan1.svg";
import workPlan2Icon from "../assets/images/dist/work-plan-2.svg";
import aboutUsSvg from "../assets/images/dist/about-us.svg";
import partner1Icon from "../assets/images/dist/partners/partner-1.jpg";
import partner2Icon from "../assets/images/dist/partners/partner-2.jpg";
import partner3Icon from "../assets/images/dist/partners/partner-3.jpg";
import partner4Icon from "../assets/images/dist/partners/partner-4.jpg";
import partner5Icon from "../assets/images/dist/partners/partner-5.jpg";
import partner6Icon from "../assets/images/dist/partners/partner-6.jpg";
import partner7Icon from "../assets/images/dist/partners/partner-7.jpg";
import partner8Icon from "../assets/images/dist/partners/partner-8.png";
import partner9Icon from "../assets/images/dist/partners/partner-9.jpg";
import partner10Icon from "../assets/images/dist/partners/partner-10.png";
import finalIllustration from "../assets/images/dist/illustration-final.jpg";

export const Homepage: React.FC = () => {
  const dispatch = useDispatch();
  const { css } = useFela();
  const location = useLocation();
  const state = location.state as { openRechner: boolean };
  const mortageRef = React.useRef<any>(null);
  const { activeStep } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  }

  const handleMortageLink = () => {
    dispatch(setFormStep(1));
    scrollToForm();
  };

  React.useEffect(() => {
    if (state && state.openRechner && activeStep > 0) {
      handleMortageLink();
    }
  }, []);

  return (
    <>
      <section className={`homepage-section ${css(homepageSection)}`}>
        <div className='homepage-section__container'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <h1 className={`h1 homepage-section__heading ${css(mainHeading)}`}>
                Finanzieren Sie Ihr Eigenheim <br />
                schnell und&nbsp;unkompliziert!
              </h1>
              <div className={css(homepageSectionText)}>
                <p className={`homepage-section__descr ${css(homepageDescr)}`}>
                  Was kann ich mir leisten?<br />
                  Diese Frage können wir Ihnen gleich beantworten
                </p>
                <a onClick={handleMortageLink} className='button StartButton'>
                  Zum&nbsp;Rechner
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-5 col-md-7'>
              <HeaderVideo />
              <h5 className='homepage-section__video-title'>
                Finanzierung einfach erklärt
              </h5>
              <div ref={mortageRef}></div>
            </div>
          </div>
        </div>
      </section>
      <section id='MortageForm'>
        <MortageForm />
      </section>
      <section className='advantages-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='h2'>
                Warum mit EigenheimWunsch <br />
                finanzieren
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='advantages-item'>
                <div className='advantages-item__img'>
                  <img src={handIcon} alt='icon hand' />
                </div>
                <h4 className='advantages-item__title'>
                  Umfassende Serviceleistung
                </h4>
                <p className='advantages-item__descr'>
                  Wir stehen Ihnen bei jedem Schritt zur Seite: von
                  der&nbsp;Analyse Ihrer Ist-Situation bis zur Kreditauszahlung
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='advantages-item'>
                <div className='advantages-item__img'>
                  <img src={compIcon} alt='icon comp' />
                </div>
                <h4 className='advantages-item__title'>
                  Alles Digital und&nbsp;von Zuhause
                </h4>
                <p className='advantages-item__descr'>
                  Dank unseren modernen Tools kann der&nbsp;gesamte Ablauf
                  stressfrei von Zuhause abgewickelt werden
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='advantages-item'>
                <div className='advantages-item__img'>
                  <img src={presentIcon} alt='icon present' />
                </div>
                <h4 className='advantages-item__title'>
                  Kostenfreie und&nbsp;Unverbindliche Betreuung
                </h4>
                <p className='advantages-item__descr'>
                  Für unsere Kunden sind unsere Dienstleistungen unverbindlich
                  und&nbsp;kostenfrei
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='advantages-item'>
                <div className='advantages-item__img'>
                  <img src={keysIcon} alt='icon keys' />
                </div>
                <h4 className='advantages-item__title'>
                  Bestmögliche Konditionen
                </h4>
                <p className='advantages-item__descr'>
                  Unsere breite Palette von Partnerbanken ermöglicht es, Ihnen
                  eine optimale Lösung mit den besten Konditionen anbieten
                  zu&nbsp;können
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='advantages-item'>
                <div className='advantages-item__img'>
                  <img src={clockIcon} alt='icon clock' />
                </div>
                <h4 className='advantages-item__title'>
                  Kurze Bearbeitungszeiten
                </h4>
                <p className='advantages-item__descr'>
                  Die gesamte Bearbeitungszeit bis zur Vergabe
                  der&nbsp;Finanzierung wird dank unserem Service und&nbsp;dem
                  ständigen Kontakt mit Banken beträchtlich verkürzt
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='advantages-item'>
                <div className='advantages-item__img'>
                  <img src={moneyIcon} alt='icon money' />
                </div>
                <h4 className='advantages-item__title'>Staatliche Zuschüsse</h4>
                <p className='advantages-item__descr'>
                  Einbindung aller Fördermöglichkeiten durch die KfW
                  und&nbsp;BAFA (neue Bundesförderung von der Regierung im
                  Rahmen des Klima­schutz­programms 2030)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='reviews-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='h3'>Das sagen unsere Kunden</h3>
            </div>
          </div>

          <div className='row'>
            <div className='offset-xl-1 col-xl-11'>
              <ReviewsSlider />
            </div>
          </div>

          <div className='row'>
            <div className='offset-xl-1 col-xl-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='review-advantage'>
                    <div className='review-advantage__img'>
                      <img src={medalsIcon} alt='medals icon' />
                    </div>
                    <div className='review-advantage__text'>
                      Ausgezeichneter Service und&nbsp;erstklassige Beratung
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='review-advantage'>
                    <div className='review-advantage__img'>
                      <img src={trustIcon} alt='trustpilot-stars icon' />
                    </div>
                    <div className='review-advantage__text'>
                      <div
                        className='trustpilot-widget'
                        data-locale='de-DE'
                        data-template-id='5419b6a8b0d04a076446a9ad'
                        data-businessunit-id='6036424421527000016d757c'
                        data-style-height='60px'
                        data-style-width='100%'
                        data-theme='light'
                      >
                        <a
                          href='https://de.trustpilot.com/review/eigenheimwunsch.de'
                          target='_blank'
                          rel="noopener noreferrer"
                        >
                          Trustpilot
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='review-advantage'>
                    <div className='review-advantage__img'>
                      <img src={winnerIcon} alt='winner icon' />
                    </div>
                    <div className='review-advantage__text'>
                      Absoluter Datenschutz und&nbsp;höchste Qualität
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='work-plan-section'>
        <div className='container'>
          <div className='row work-plan-item align-items-center'>
            <div className='col-xl-5 col-lg-6'>
              <div className='work-plan-item__img'>
                <img src={workPlan1Icon} alt='work plan icon' />
              </div>
            </div>
            <div className='col-xl-6 offset-xl-1 col-lg-6'>
              <h4 className='work-plan-item__title'>
                Wie funktioniert EigenheimWunsch
              </h4>
              <ul className='work-plan-item__list'>
                <li>
                  <div className='work-plan-item__list__num'>1</div>
                  <h5 className='work-plan-item__list__title'>
                    Online-Rechner
                  </h5>
                  <p className='work-plan-item__list__descr'>
                    Mit Hilfe unseres Online-Rechners ermitteln Sie Ihr
                    Finanzierungspotential
                  </p>
                </li>
                <li>
                  <div className='work-plan-item__list__num'>2</div>
                  <h5 className='work-plan-item__list__title'>
                    Analysegespräch
                  </h5>
                  <p className='work-plan-item__list__descr'>
                    Es erfolgt eine individuelle Analyse Ihrer persönlichen
                    Situation durch unser Team, dabei werden Ihre Ziele
                    und&nbsp;Wünsche festgehalten
                  </p>
                </li>
                <li>
                  <div className='work-plan-item__list__num'>3</div>
                  <h5 className='work-plan-item__list__title'>
                    Angebotsvergleich
                  </h5>
                  <p className='work-plan-item__list__descr'>
                    Wir prüfen die Finanzierungsmöglichkeiten mit mehreren
                    Partnerbanken
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='row work-plan-item align-items-center'>
            <div className='col-xl-6 offset-xl-1 col-lg-6'>
              <ul className='work-plan-item__list'>
                <li>
                  <div className='work-plan-item__list__num'>4</div>
                  <h5 className='work-plan-item__list__title'>
                    Finanzierungsbestätigung
                  </h5>
                  <p className='work-plan-item__list__descr'>
                    Unser Mitarbeiter kommt mit einem persönlichen Angebot auf
                    Sie zu
                  </p>
                </li>
                <li>
                  <div className='work-plan-item__list__num'>5</div>
                  <h5 className='work-plan-item__list__title'>
                    Notartermin und Schlüsselübergabe
                  </h5>
                  <p className='work-plan-item__list__descr'>
                    Wir begleiten Sie durch den gesamten Finanzierungsprozess
                    bis zur Kaufpreiszahlung
                  </p>
                </li>
              </ul>
              <a
                onClick={handleMortageLink}
                className={`button ${css({
                  "@media (max-width: 578px)": { marginLeft: "10px" },
                })}`}
              >
                Zum&nbsp;Rechner
              </a>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <div className='work-plan-item__img ml-lg-5 pt-md-0 pt-4'>
                <img src={workPlan2Icon} alt='work plan icon' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-us-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-5 col-lg-5 order-last order-lg-first'>
              <div className='about-us__img'>
                <img src={aboutUsSvg} alt='about us icon' />
              </div>
            </div>
            <div className='col-xl-6 offset-xl-1 col-lg-7 order-first order-lg-last'>
              <h2 className='h2'>Wer wir sind</h2>
              <p className='about-us__descr'>
                Wir sind unabhängige Finanzierungspezialisten für Bau
                und&nbsp;Immobilien mit mehrjähriger Erfahrung. Wir analysieren
                Ihre persönliche Situation und&nbsp;die Ihres Objekts,
                und&nbsp;erstellen darauf die passende Lösung. Diese liegt nicht
                immer im günstigsten Zins, sondern Bedarf auch einer besseren
                steuerlichen Optimierung, die wir in Absprache mit Ihrem
                Steuerberater für Sie erarbeiten
              </p>
              <p className='about-us__descr'>
                Wir stehen Ihnen während des gesamten Ablaufes, sowie auch nach
                dem erfolgreichen Finanzierungsabschluss jederzeit zur Verfügung
              </p>
              <p className='about-us__descr'>
                Unser Ziel ist es, den Finanzierungsprozess für Sie
                transparenter zu&nbsp;gestalten, indem wir Ihnen schnell
                und&nbsp;effektiv maßgeschneiderte Lösungen bieten können
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='partners-section'>
        <h2 className='h2'>Unsere Partner</h2>
        <div className={`partners-logos ${css(partnersLogo)}`}>
          <img src={partner1Icon} alt='partner-icon' />
          <img src={partner2Icon} alt='partner-icon' />
          <img src={partner3Icon} alt='partner-icon' />
          <img src={partner4Icon} alt='partner-icon' />
          <img src={partner5Icon} alt='partner-icon' />
          <img src={partner6Icon} alt='partner-icon' />
          <img src={partner7Icon} alt='partner-icon' />
          <img src={partner8Icon} alt='partner-icon' />
          <img src={partner9Icon} alt='partner-icon' />
          <img src={partner10Icon} alt='partner-icon' />
        </div>

        <div className='partners-image-big'>
          <img src={finalIllustration} alt='final illustration' />
        </div>
      </section>
    </>
  );
};

const homepageSection: FelaStyle<{}> = () => ({
  "@media (min-width: 1920px)": {
    minHeight: '850px'
  },

  backgroundPosition: "top",
  padding: "145px 0 0",

  "@media (max-width: 1400px)": {
    padding: "50px 0 0",
    minHeight: "600px",
  },

  "@media (max-width: 992px)": {
    backgroundPosition: "center right",
    minHeight: "0",
    backgroundSize: "cover",
  },
});

const mainHeading: FelaStyle<{}> = () => ({

  "@media (max-width: 1400px)": {
    fontSize: "38px",
    lineHeight: "1.5",
    marginBottom: "15px !important",
  },

  "@media (max-width: 992px)": {
    fontSize: "32px !important",
    lineHeight: "45px",
  },

  "@media (max-width: 768px)": {
    fontSize: "28px !important",
    lineHeight: "40px",
  },

  "@media (max-width: 576px)": {
    fontSize: "22px !important",
    lineHeight: "1.5",
  },
});

const homepageSectionText: FelaStyle<{}> = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1100px",

  "@media (max-width: 1400px)": {
    maxWidth: '800px',
    alignItems: 'flex-start'
  },

  "@media (max-width: 1200px)": {
    display: 'block'
  }
});

const homepageDescr: FelaStyle<{}> = () => ({
  fontSize: "32px",
  "@media (max-width: 1400px)": {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "15px !important",
  },

  "@media (max-width: 992px)": {
    fontSize: "20px !important",
    lineHeight: "24px",
  },

  "@media (max-width: 768px)": {
    fontSize: "18px !important",
    lineHeight: "24px",
  },

  "@media (max-width: 576px)": {
    fontSize: "16px !important",
    lineHeight: "24px",
  },
});

const partnersLogo: FelaStyle<{}> = () => ({
  "> img": {
    maxWidth: "300px",
  },
});
