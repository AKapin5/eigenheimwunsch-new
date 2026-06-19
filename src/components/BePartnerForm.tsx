import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFela } from "react-fela";
import axios from "axios";

import { setFormError } from "../redux/actions/setFormError";
import { IContactData } from "../interfaces";
import { formErrorAlert, formErrorAlertNoFixed } from "./MortageForm/styles";
import warningSvg from "../assets/images/dist/warning.svg";

export const BePartnerForm = React.memo(() => {
  const dispatch = useDispatch();
  const { css } = useFela();

  const [contactData, setContactData] = React.useState<IContactData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccess, setSuccess] = React.useState<boolean>(false);
  const [isFirebaseError, setIsFirebaseError] = React.useState<boolean>(false);

  const { isError, text } = useSelector((isErrorObj) => isErrorObj.formErrorReducer);

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSendButton = () => {
    const contactDataArr = Object.values(contactData);
    const emptyEl = contactDataArr.find((el) => !el);

    if (!validateEmail(contactData.email)) {
      const errorObj = {
        isError: true,
        text: '„E-Mail“ ausfüllen'
      }

      const noErrorObj = {
        isError: false,
        text: '„E-Mail“ ausfüllen'
      }
      dispatch(setFormError(errorObj));
      setTimeout(() => {
        dispatch(setFormError(noErrorObj));
      }, 2000);
      return ;
    } else if (emptyEl === undefined) {
      if (contactData.name.length < 2) {
        const errorObj = {
          isError: true,
          text: 'Alle Felder sind erforderlich!'
        }
        const noErrorObj = {
          isError: false,
          text: ''
        }
        dispatch(setFormError(errorObj));
        setTimeout(() => {
          dispatch(setFormError(noErrorObj));
        }, 2000);
        return;
      }

      const headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 34d8ed0ddb7e9c4c805e5fd71e7d65473372167ecd2589e79304a818b3637c198f088d527d47dc6b39245de9a8fe043f29e11e4e0905e253faad109371bac279",
      };
      const data = contactData;
      const url =
        "https://europe-west3-eigenheimwunsch-de.cloudfunctions.net/addPartner";
      axios({
        method: "POST",
        url,
        data,
        headers,
      })
        .then((response) => {
          console.log(response.status, response.data);
        })
        .catch((error) => {
          console.error(error);
          setIsFirebaseError(true);
          setTimeout(() => {
            setIsFirebaseError(false);
          }, 2000);
        });

      setSuccess(true);
      return;
    }

    const errorObj = {
      isError: true,
      text: 'Alle Felder sind erforderlich!'
    }
    const noErrorObj = {
      isError: false,
      text: ''
    }
    dispatch(setFormError(errorObj));
    setTimeout(() => {
      dispatch(setFormError(noErrorObj));
    }, 2000);
  };

  return (
    <>
      {isSuccess ? (
        <div className={`active ${css(formErrorAlert, formErrorAlertNoFixed)}`}>
          Vielen Dank für Ihre Anfrage!
          <br /> Wir werden uns schnellstmöglich bei Ihnen melden
        </div>
      ) : (
        <form id='contact-form'>
          <div className='container'>
            <div className='row blue-form'>
              <div className='col-12'>
                <h3 className='blue-form__title'>Kontakt</h3>
              </div>
              <div className='offset-xl-1 col-xl-10'>
                <div className='blue-form__fields'>
                  <label
                    htmlFor='contact-form-name'
                    className='blue-form__input'
                  >
                    <span>Name</span>
                    <input
                      name='name'
                      type='text'
                      id='contact-form-name'
                      required
                      onChange={handleInput}
                    />
                  </label>
                  <label
                    htmlFor='contact-form-email'
                    className='blue-form__input'
                  >
                    <span>E-Mail</span>
                    <input
                      name='email'
                      type='email'
                      id='contact-form-email'
                      required
                      onChange={handleInput}
                    />
                  </label>
                  <label
                    htmlFor='contact-form-message'
                    className='blue-form__input blue-form__textarea'
                  >
                    <span>Nachricht</span>
                    <textarea
                      name='message'
                      id='contact-form-message'
                      onChange={handleInput}
                      required
                    ></textarea>
                  </label>
                </div>
              </div>
              <div className='col-12'>
                <div className='blue-form__button'>
                  <button
                    type='button'
                    className='button'
                    onClick={handleSendButton}
                  >
                    Senden
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${isError ? "active" : ""} ${css(formErrorAlert)}`}>
            <img src={warningSvg} alt='warning icon' /> {text}
          </div>
          <div
            className={`${isFirebaseError ? "active" : ""} ${css(
              formErrorAlert
            )}`}
          >
            Ein Fehler ist aufgetreten. Bitte aktualisieren Sie die Seite und
            versuchen Sie es erneut
          </div>
        </form>
      )}
    </>
  );
});
