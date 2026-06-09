import React from "react";
import PartnerForm from "@/components/PartnerForm";

const partnerSvg = "/images/dist/partner-werden.svg";

export const Partner: React.FC = () => {
  return (
    <>
      <section className='be-partner-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-7'>
              <h3 className='be-partner__title'>Partner werden</h3>
              <p className='be-partner__descr'>
                EigenheimWunsch bietet professionellen und privaten
                Finanzierungsexperten verschiedene Möglichkeiten zur
                Zusammenarbeit. Durch unsere Online-Plattform erhalten Sie als
                Partner direkten Kundenkontakt und können somit die Anfragen
                selbständig übernehmen. Wir übernehmen die gesamten technischen
                sowie administrativen Aufgaben, so dass Sie sich als Experte
                komplett auf die Kunden konzentrieren können
              </p>
              <h5 className='be-partner__list__title'>Ihre Vorteile</h5>
              <ul className='be-partner__list'>
                <li>Direkter Zugang zu neuen Kunden</li>
                <li>Administrative Hürden fallen weg</li>
                <li>Selbständige Zeitplanung</li>
                <li>Professionelles Team</li>
                <li>Höhere Abschlussquote durch digitalisierte Plattform</li>
                <li>Arbeitsplatz im Büro</li>
              </ul>
            </div>
            <div className='col-xl-5 offset-xl-1 col-lg-5'>
              <div className='be-partner__img'>
                <img src={partnerSvg} alt='parner werden icon' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerForm />
    </>
  );
};
