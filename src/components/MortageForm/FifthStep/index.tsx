import React from "react";
import DatePicker from "react-date-picker";
import { useFela } from "react-fela";
import { useSelector, useDispatch } from "react-redux";
import { setPersonData } from "../../../redux/actions/setPersonData";
import axios from "axios";

import { IpersonInfo } from "../../../interfaces";
import { setFormStep } from "redux/actions/setFormStage";
import { setError } from "..";

import { Stepper } from "../Stepper";
import userIcon from "../../../assets/images/dist/rechner/user-icon.png";
import checkIcon from "../../../assets/images/dist/rechner/checkbox-check-icon.png";

import {
  bodyContent,
  formInfoContainer,
  inputsContainer,
  inputsRow,
  textAreaWrapper,
  customInput,
  formLabel,
  radioButtonContainer,
  formDate,
  customDatepicker,
  cbx,
  conf
} from "./styles";
import {
  firstStepForm,
  formHeading,
  formLabelText,
  formButton,
  radioGroup,
  radioButton,
  radioRatingLabel,
  dnone,
  dblock,
} from "../styles";
import {sendMetrik} from "../../utils/GoogleAnalytics";

interface Iprops {
  hidden: boolean;
}

interface IjsonBody {
  anrede: string,
  name: string;
  lastname: string;
  birthday: string;
  email: string;
  phone: string;
  streetAndHouseNumber: string;
  plz: number;
  city: string;
  work: string;
  message: string;
  married: boolean;
  children: boolean;
  childrenCount: number;
  foundUs: string;
  income: number;
  calculated: number;
  tableData: {
    Jahren: number;
    Zinsen: number;
    Tilgung: number;
    Annuitaet: number;
    Darlehensrest: number;
  };
  immoCost: number;
}

export const FifthStep = React.memo((props: Iprops) => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const initialDate = new Date().setFullYear(new Date().getFullYear() - 18);
  const [isConf, setIsConf] = React.useState<boolean>(false);
  const [mortageData, setMortageDate] = React.useState<IpersonInfo>({
    name: "",
    surname: "",
    gender: "Herr",
    employment: "Angestellter",
    birthday: undefined,
    phone: "",
    email: "",
    strasse: "",
    postalCode: "",
    ort: "",
    additionalInfo: ""
  });

  const {
    personFamilyInfo,
    personSalary,
    personSource
  } = useSelector((personDataObj) => personDataObj.personDateReducer);
  const {
    finalMortage,
    tableData,
    mortageDuration,
    propertyValue
  } = useSelector((mortageInfoObj) => mortageInfoObj.mortageInfoReducer);
  const { activeStep } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMortageDate({
      ...mortageData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateInput = (date: any) => {
    setMortageDate({
      ...mortageData,
      birthday: new Date(date),
    });
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMortageDate({
      ...mortageData,
      gender: e.target.value,
    });
  };

  const handleEmployment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMortageDate({
      ...mortageData,
      employment: e.target.value,
    });
  };

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  };

  const handleBackBtn = () => {
    sendMetrik("BackToThirdStep", "MortageForm", "BackButtonPressed", "");
    dispatch(setFormStep(4));
    scrollToForm();
  };

  const handleContinueBtn = () => {
    function validateEmail(email: string) {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    function validatePhone(phone: string) {
      const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      return re.test(phone);      
    }

    if (mortageData.name.length < 2) {
      setError(dispatch, "„Vorname“ ausfüllen");
      return;
    }

    if (mortageData.surname.length < 2) {
      setError(dispatch, "„Nachname“ ausfüllen");
      return;
    }

    if (!validatePhone(mortageData.phone) || mortageData.phone.length < 7){
      setError(dispatch, '„Telefon“ ausfüllen');
      return;
    }

    if (mortageData.birthday === undefined) {
      setError(dispatch, '„Geburtsdatum“ ausfüllen');
      return ;
    }

    if (!validateEmail(mortageData.email)) {
      setError(dispatch, "„E-Mail“ ausfüllen");
      return;
    }

    if (!isConf) {
      setError(dispatch, "Alle Felder sind erforderlich");
      return;
    }

    sendMetrik("LastStepPassed", "MortageForm", "SendButtonPressed", "");

    const { additionalInfo, ...rest } = mortageData;
    const mortageDateArray = Object.values(rest);
    const empty = mortageDateArray.find((el) => !el);

    if (empty === undefined) {
      dispatch(setPersonData(mortageData));
  
      const birthdayStr = String(mortageData.birthday).slice(4, 15);
      const plz = parseInt(mortageData.postalCode);
      const kids = personFamilyInfo["kids"];
      const calculatedMortageData = {
        Jahren: mortageDuration,
        Zinsen: tableData["Zinsen"],
        Tilgung: tableData["Tilgung"],
        Annuitaet: tableData["Annuitaet"],
        Darlehensrest: tableData["Darlehensrest"],
      };

      const jsonBody: IjsonBody = {
        anrede: mortageData.gender,
        name: mortageData.name,
        lastname: mortageData.surname,
        birthday: birthdayStr,
        email: mortageData.email,
        phone: mortageData.phone,
        streetAndHouseNumber: mortageData.strasse,
        plz: plz,
        city: mortageData.ort,
        work: mortageData.employment,
        message: mortageData.additionalInfo,
        married: personFamilyInfo["marriaged"],
        children: kids > 0 ? true : false,
        childrenCount: kids,
        foundUs: personSource,
        income: personSalary,
        calculated: finalMortage,
        tableData: calculatedMortageData,
        immoCost: propertyValue
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer e8956e92833ec3a9a9a8283797ed3390c37971f809b914ca01beeca682f275edb262a1baab7ad77fb332a81a4b2efcfd62016d65ef66da06642cb71775562594",
      };
      const data = jsonBody;
      const url =
        "https://us-central1-eigenheimwunsch-de.cloudfunctions.net/addFullClientInfo";
      axios({
        method: "POST",
        url,
        data,
        headers,
      })
        .then((response) => {
          dispatch(setFormStep(6));
          scrollToForm();
        })
        .catch((error) => {
          console.error(error);

          setError(dispatch, "Auf der Serverseite ist ein Fehler aufgetreten");
        });

      return;
    }
    setError(dispatch, 'Alle Felder sind erforderlich!');
  };

  return (
    <form
      className={css(firstStepForm, props.hidden ? dnone : dblock)}
      id='formHeading'
    >
      <div className='container'>
        <Stepper />
        <div className='form-wrapper ml-9'>
          <div>
            <h2 className={`h2 ${css(formHeading)}`}>Persönliche Angaben</h2>
          </div>
          <div className={css(bodyContent)}>
            <img src={userIcon} alt="User icon" />
            <div className={css(formInfoContainer)}>
              <div className={`${css(radioButtonContainer)} gender-radio`}>
                <span className={css(formLabelText)}>
                  Anrede
                </span>
                <div className={css(radioGroup)}>
                  <div className={css(radioButton)}>
                    <input
                      type="radio"
                      id="gender-herr"
                      name="gender-herr"
                      value="Herr"
                      checked={mortageData.gender === 'Herr'}
                      className={css(dnone)}
                      onChange={handleGender}>
                    </input>
                    <label
                      htmlFor="gender-herr"
                      className={css(radioRatingLabel)}>
                      <div className="label-dot"></div>
                      <span className="label-text">
                        Herr
                      </span>
                    </label>
                  </div>
                  <div className={css(radioButton)}>
                    <input
                      type="radio"
                      id="gender-frau"
                      name="gender-frau"
                      value="Frau"
                      checked={mortageData.gender === 'Frau'}
                      className={css(dnone)}
                      onChange={handleGender}>
                    </input>
                    <label
                      htmlFor="gender-frau"
                      className={css(radioRatingLabel)}>
                      <div className="label-dot"></div>
                      <span className="label-text">
                        Frau
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={css(inputsContainer)}>
                <div className={css(inputsRow)}>
                  <label htmlFor='mortageName' className={css(formLabel)}>
                    <input
                      type='text'
                      id='mortageName'
                      name='name'
                      placeholder="Vorname"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                  <label htmlFor='mortageSurname' className={css(formLabel)}>
                    <input
                      type='text'
                      id='mortageSurname'
                      name='surname'
                      placeholder="Nachname"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                  <label className={css(formLabel)}>
                    <input
                      type='text'
                      id='mortagePhone'
                      name='phone'
                      placeholder="Telefonnummer"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                  <label className={css(formLabel)}>
                    <input
                      type='email'
                      id='mortageEmail'
                      name='email'
                      placeholder="E-Mail"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                </div>
                <div className={css(inputsRow)}>
                  <label htmlFor='strasse' className={css(formLabel)}>
                    <input
                      type='text'
                      id='strasse'
                      name='strasse'
                      placeholder="Straße und Hausnummer"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                  <label htmlFor='postalCode' className={css(formLabel)}>
                    <input
                      type='text'
                      id='postalCode'
                      name='postalCode'
                      placeholder="Postleitzahl"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                  <label className={css(formLabel)}>
                    <input
                      type='text'
                      id='ort'
                      name='ort'
                      placeholder="Ort"
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  </label>
                  <label className={css(formLabel)}>
                    <DatePicker
                      value={mortageData.birthday}
                      dayPlaceholder=''
                      monthPlaceholder=''
                      yearPlaceholder=''
                      showLeadingZeros={true}
                      maxDate={new Date(initialDate)}
                      className={`${css(customInput, formDate, customDatepicker)} ${
                        mortageData.birthday ? "valid" : ""
                      }`}
                      clearIcon={null}
                      calendarIcon={null}
                      locale='de'
                      onChange={(date: any) => handleDateInput(date)}
                    />
                  </label>
                </div>
              </div>
              <div className={`${css(radioButtonContainer)} employment-radio`}>
                <div className={css(radioGroup, inputsRow)}>
                  <div className={css(radioButton)}>
                    <input
                      type="radio"
                      id="employment-hired"
                      name="employment-hired"
                      value="Angestellter"
                      checked={mortageData.employment === 'Angestellter'}
                      className={css(dnone)}
                      onChange={handleEmployment}>
                    </input>
                    <label
                      htmlFor="employment-hired"
                      className={css(radioRatingLabel)}>
                      <div className="label-dot"></div>
                      <span className="label-text">
                        Angestellter
                      </span>
                    </label>
                  </div>
                  <div className={css(radioButton)}>
                    <input
                      type="radio"
                      id="employment-self"
                      name="employment-self"
                      value="Selbständiger"
                      checked={mortageData.employment === 'Selbständiger'}
                      className={css(dnone)}
                      onChange={handleEmployment}>
                    </input>
                    <label
                      htmlFor="employment-self"
                      className={css(radioRatingLabel)}>
                      <div className="label-dot"></div>
                      <span className="label-text">
                        Selbständiger
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={css(inputsRow, textAreaWrapper)}>
                <span>Möchten Sie uns noch etwas mitteilen?</span>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  className={css(customInput)}
                  onChange={handleInput}></textarea>
              </div>
              <div className={css(conf)}>
                <div className='conf-check'>
                  <input
                    name='conf'
                    id='cbx'
                    type='checkbox'
                    required
                    onChange={() => setIsConf((prev) => !prev)}
                  />
                  <label className={css(cbx)} htmlFor='cbx'>
                    <div className="label-dot">
                      {
                        isConf ? <img src={checkIcon} alt="Check icon" className="check-icon" /> : ""
                      }
                    </div>
                  </label>
                </div>
                <label htmlFor='cbx'>
                  <p className='conf-text'>
                    Ich bin mit der Verarbeitung meiner Daten zur Kontaktaufnahme
                    einverstanden
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={css(formButton)}>
          <button
              type='button'
              className='button empty'
              onClick={handleBackBtn}
          >
            Zurück
          </button>
          <button
            type='button'
            className='button'
            disabled={!isConf}
            onClick={handleContinueBtn}
          >
            Anfrage absenden
          </button>
        </div>
      </div>
    </form>
  );
});
