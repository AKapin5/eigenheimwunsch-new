import React from "react";
import { useFela, FelaStyle } from "react-fela";

import { ContactForm } from '../components/ContactForm';

import geoSvg from "../assets/images/dist/geo.svg";
import mailSvg from "../assets/images/dist/mail.svg";
import phoneSvg from "../assets/images/dist/phone.svg";

export const Contact: React.FC = () => {
  const { css } = useFela();

  return (
    <>
      <section className='be-partner-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                })}
              >
                <h3
                  className={`be-partner__title ${css({
                    textAlign: "center",
                  })}`}
                >
                  Kontakt
                </h3>
                <ul className={css(contactList)}>
                  <li>
                    <div className={css(contactsAddress)}>
                      <a href='https://goo.gl/maps/tf2TLBwPHKBgxYEX6'>
                        <img src={geoSvg} alt='geo icon' />
                        EigenheimWunsch GmbH <br /> Grabenstraße 10 <br /> 79539
                        Lörrach
                      </a>
                    </div>
                  </li>
                  <li>
                    <img src={mailSvg} alt='geo icon' />
                    <a href='mailto:verwaltung@eigenheimwunsch.de'>
                      verwaltung@eigenheimwunsch.de
                    </a>
                  </li>
                  <li>
                    <img src={phoneSvg} alt='geo icon' />
                    <a href='tel:+4976211694809'>+49 7621 1694 809</a>
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

const contactList: FelaStyle<{}> = () => ({
  margin: "0 auto 0 auto",
  padding: "0",
  listStyleType: "none",
  display: "inline-block",
  "> li": {
    marginBottom: "15px",
    position: "relative",
    "> img": {
      maxWidth: "20px",
      position: "absolute",
      top: "4px",
    },
    "> a": {
      paddingLeft: "35px",
      display: "block",
      fontWeight: "300",
      color: "#4F4F4F",
      fontSize: "18px",
      lineHeight: "32px",
      textDecoration: "none",
      transform: "color .25s ease-in",
      ":hover": {
        color: "#636262",
      },
      ":focus": {
        color: "#3C3C3C",
      },
    },
  },
});

const contactsAddress: FelaStyle<{}> = () => ({
  display: "flex",
  paddingLeft: "35px",
  alignItems: "center",
  "> a": {
    marginRight: "20px",
    fontWeight: "300",
    color: "#4F4F4F",
    fontSize: "18px",
    lineHeight: "32px",
    textDecoration: "none",
    transform: "color .25s ease-in",
    position: 'relative',
    ":last-child": {
      paddingLeft: '35px',
    },
    "> img": {
      maxWidth: '20px',
      position: 'absolute',
      top: '4px',
      left: '0px'
    },
    ":hover": {
      color: "#636262",
    },
    ":focus": {
      color: "#3C3C3C",
    },
  },

  "@media (max-width: 578px)" : {
    flexWrap: 'wrap',

    "> a:last-child": {
      paddingLeft: 0,
      marginTop: '10px',
      "> img": {
        left: '-35px',
      }
    }
  }
});
