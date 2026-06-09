import React from "react";
import DatePicker from "react-date-picker";
import axios from "axios";

import userIcon from "../../../assets/images/dist/rechner/user-icon.png";

import { IpersonInfo } from "../../../interfaces";

interface Props {
  hidden: boolean;

  personFamilyInfo: {
    marriaged: boolean;
    kids: number;
  };

  personSalary: number;
  personSource: string;

  finalMortage: number;
  tableData: any;
  mortageDuration: number;
  propertyValue: number;

  onNextStep: () => void;
  onPrevStep: () => void;
  setError: (msg: string) => void;
  setPersonData: (data: IpersonInfo) => void;
}

export const FifthStep = React.memo((props: Props) => {
  const {
    hidden,
    personFamilyInfo,
    personSalary,
    personSource,
    finalMortage,
    tableData,
    mortageDuration,
    propertyValue,
    onNextStep,
    onPrevStep,
    setError,
    setPersonData,
  } = props;

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

  const handleBack = () => {
    onPrevStep();
    scrollToForm();
  };

  const handleContinue = () => {
    const validateEmail = (email: string) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/.test(email);

    const validatePhone = (phone: string) =>
      /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(phone);

    if (mortageData.name.length < 2)
      return setError("„Vorname“ ausfüllen");

    if (mortageData.surname.length < 2)
      return setError("„Nachname“ ausfüllen");

    if (!validatePhone(mortageData.phone) || mortageData.phone.length < 7)
      return setError("„Telefon“ ausfüllen");

    if (!mortageData.birthday)
      return setError("„Geburtsdatum“ ausfüllen");

    if (!validateEmail(mortageData.email))
      return setError("„E-Mail“ ausfüllen");

    if (!isConf)
      return setError("Alle Felder sind erforderlich");

    const kids = personFamilyInfo?.kids || 0;

    const payload = {
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
              "Bearer YOUR_TOKEN_HERE",
          },
        }
      )
      .then(() => {
        onNextStep();
        scrollToForm();
      })
      .catch((err) => {
        console.error(err);
        setError("Serverfehler beim Senden");
      });
  };

  if (hidden) return null;

  return (
    <form className="mortgage-form">
      <div className="container">
        <h2 className="h2">Persönliche Angaben</h2>

        <div className="body-content">
          <img src={userIcon} alt="User icon" />

          {/* Gender */}
          <div className="radio-block">
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
            <input name="phone" placeholder="Telefon" onChange={handleInput} />
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

          <textarea
            name="additionalInfo"
            placeholder="Nachricht"
            onChange={handleInput}
          />

          <label className="consent">
            <input
              type="checkbox"
              checked={isConf}
              onChange={() => setIsConf(!isConf)}
            />
            Ich stimme der Verarbeitung meiner Daten zu
          </label>
        </div>

        <div className="buttons">
          <button type="button" onClick={handleBack}>
            Zurück
          </button>

          <button type="button" onClick={handleContinue}>
            Anfrage absenden
          </button>
        </div>
      </div>
    </form>
  );
});