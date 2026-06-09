import React from "react";

import { ContactForm } from '../components/ContactForm';

import geoSvg from "../assets/images/dist/geo.svg";
import mailSvg from "../assets/images/dist/mail.svg";
import phoneSvg from "../assets/images/dist/phone.svg";

export const Contact: React.FC = () => {

  return (
    <>
      <section className='be-partner-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div className="contact-center-wrapper">
                <h3 className="be-partner__title contact-title-center">
                  Kontakt
                </h3>
                <ul className="contact-list">
                  <li>
                    <img src={geoSvg} alt='geo icon' />
                    <div className="contacts-address">
                      <a href='https://goo.gl/maps/tf2TLBwPHKBgxYEX6'>
                        EigenheimWunsch GmbH <br /> Hauptstraße 28 <br /> 15806
                        Zossen
                      </a>
                      <a href='https://goo.gl/maps/tf2TLBwPHKBgxYEX6'>
                        <img src={geoSvg} alt='geo icon' />
                        EigenheimWunsch GmbH <br /> Hauptstraße 196 <br /> 79576
                        Weil am Rhein
                      </a>
                    </div>
                  </li>
                  <li>
                    <img src={mailSvg} alt='geo icon' />
                    <a href='mailto:info@eigenheimwunsch.de'>
                      info@eigenheimwunsch.de
                    </a>
                  </li>
                  <li>
                    <img src={phoneSvg} alt='geo icon' />
                    <a href='tel:+4976211569111'>+49 7621 1569 111</a>
                    <a href='tel:+4976211569777'>+49 7621 1569 777</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>
    </>
  );
};
