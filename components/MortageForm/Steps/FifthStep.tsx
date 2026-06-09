import React from "react";
import DatePicker from "react-date-picker";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { IpersonInfo } from "../../../interfaces";
import { setPersonData } from "../../../redux/actions/setPersonData";
import { setFormStep } from "redux/actions/setFormStage";
import { setError } from "..";

import { Stepper } from "../Stepper";

import userIcon from "../../../assets/images/dist/rechner/user-icon.png";
import checkIcon from "../../../assets/images/dist/rechner/checkbox-check-icon.png";

import { sendMetrik } from "../../utils/GoogleAnalytics";

interface Iprops {
  hidden: boolean;
}

interface IjsonBody {
  anrede: string;
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

export const FifthStep = React.memo(({ hidden }: Iprops) => {
  const dispatch = useDispatch();

  const initialDate = new Date().setFullYear(
    new Date().getFullYear() - 18
  );

  const [isConf, setIsConf] = React.useState(false);

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
    additionalInfo: "",
  });

  const {
    personFamilyInfo,
    personSalary,
    personSource,
  } = useSelector((state: any) => state.personDateReducer);

  const {
    finalMortage,
    tableData,
    mortageDuration,
    propertyValue,
  } = useSelector((state: any) => state.mortageInfoReducer);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    const el = document.getElementById("MortageForm");
    if (el) window.scrollTo(0, el.offsetTop);
  };

  const handleBackBtn = () => {
    sendMetrik("BackToThirdStep", "MortageForm", "BackButtonPressed", "");
    dispatch(setFormStep(4));
    scrollToForm();
  };

  const handleContinueBtn = () => {
    const validateEmail = (email: string) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/.test(email);

    const validatePhone = (phone: string) =>
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(phone);

    if (mortageData.name.length < 2)
      return setError(dispatch, "„Vorname“ ausfüllen");

    if (mortageData.surname.length < 2)
      return setError(dispatch, "„Nachname“ ausfüllen");

    if (!validatePhone(mortageData.phone) || mortageData.phone.length < 7)
      return setError(dispatch, "„Telefon“ ausfüllen");

    if (!mortageData.birthday)
      return setError(dispatch, "„Geburtsdatum“ ausfüllen");

    if (!validateEmail(mortageData.email))
      return setError(dispatch, "„E-Mail“ ausfüllen");

    if (!isConf)
      return setError(dispatch, "Alle Felder sind erforderlich");

    sendMetrik("LastStepPassed", "MortageForm", "SendButtonPressed", "");

    const kids = personFamilyInfo?.kids || 0;

    const payload: IjsonBody = {
      anrede: mortageData.gender,
      name: mortageData.name,
      lastname: mortageData.surname,
      birthday: String(mortageData.birthday).slice(4, 15),
      email: mortageData.email,
      phone: mortageData.phone,
      streetAndHouseNumber: mortageData.strasse,
      plz: parseInt(mortageData.postalCode || "0"),
      city: mortageData.ort,
      work: mortageData.employment,
      message: mortageData.additionalInfo,
      married: personFamilyInfo?.marriaged,
      children: kids > 0,
      childrenCount: kids,
      foundUs: personSource,
      income: personSalary,
      calculated: finalMortage,
      tableData: {
        Jahren: mortageDuration,
        Zinsen: tableData?.Zinsen,
        Tilgung: tableData?.Tilgung,
        Annuitaet: tableData?.Annuitaet,
        Darlehensrest: tableData?.Darlehensrest,
      },
      immoCost: propertyValue,
    };

    axios
      .post(
        "https://us-central1-eigenheimwunsch-de.cloudfunctions.net/addFullClientInfo",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer e8956e92833ec3a9a9a8283797ed3390c37971f809b914ca01beeca682f275edb262a1baab7ad77fb332a81a4b2efcfd62016d65ef66da06642cb71775562594",
          },
        }
      )
      .then(() => {
        dispatch(setFormStep(6));
        scrollToForm();
      })
      .catch((err) => {
        console.error(err);
        setError(dispatch, "Auf der Serverseite ist ein Fehler aufgetreten");
      });
  };

  if (hidden) return null;

  return (
    <form className="mortgage-form" id="formHeading">
      <div className="container">
        <Stepper />

        <div className="form-wrapper ml-9">
          <h2 className="h2">Persönliche Angaben</h2>

          <div className="body-content">
            <img src={userIcon} alt="User icon" />

            <div className="form-info-container">
              {/* Gender */}
              <div className="radio-block">
                <span>Anrede</span>

                <label>
                  <input
                    type="radio"
                    value="Herr"
                    checked={mortageData.gender === "Herr"}
                    onChange={handleGender}
                  />
                  Herr
                </label>

                <label>
                  <input
                    type="radio"
                    value="Frau"
                    checked={mortageData.gender === "Frau"}
                    onChange={handleGender}
                  />
                  Frau
                </label>
              </div>

              {/* Inputs */}
              <div className="inputs">
                <input name="name" placeholder="Vorname" onChange={handleInput} />
                <input name="surname" placeholder="Nachname" onChange={handleInput} />
                <input name="phone" placeholder="Telefonnummer" onChange={handleInput} />
                <input name="email" placeholder="E-Mail" onChange={handleInput} />

                <input name="strasse" placeholder="Straße" onChange={handleInput} />
                <input name="postalCode" placeholder="PLZ" onChange={handleInput} />
                <input name="ort" placeholder="Ort" onChange={handleInput} />

                <DatePicker
                  value={mortageData.birthday}
                  maxDate={new Date(initialDate)}
                  onChange={handleDateInput}
                />
              </div>

              {/* Employment */}
              <div className="radio-block">
                <label>
                  <input
                    type="radio"
                    value="Angestellter"
                    checked={mortageData.employment === "Angestellter"}
                    onChange={handleEmployment}
                  />
                  Angestellter
                </label>

                <label>
                  <input
                    type="radio"
                    value="Selbständiger"
                    checked={mortageData.employment === "Selbständiger"}
                    onChange={handleEmployment}
                  />
                  Selbständiger
                </label>
              </div>

              {/* Message */}
              <textarea
                name="additionalInfo"
                placeholder="Nachricht"
                onChange={handleInput}
              />

              {/* Consent */}
              <label className="consent">
                <input
                  type="checkbox"
                  checked={isConf}
                  onChange={() => setIsConf(!isConf)}
                />
                Ich stimme der Verarbeitung zu
              </label>
            </div>
          </div>

          <div className="form-buttons">
            <button type="button" onClick={handleBackBtn}>
              Zurück
            </button>

            <button type="button" onClick={handleContinueBtn}>
              Anfrage absenden
            </button>
          </div>
        </div>
      </div>
    </form>
  );
});