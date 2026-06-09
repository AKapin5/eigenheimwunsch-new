import React from "react";
import DatePicker from "react-date-picker";
import { useFela } from "react-fela";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setPersonData } from "../../../redux/actions/setPersonData";
import { setFormStep } from "redux/actions/setFormStage";

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
  conf,
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

import { sendMetrik } from "../../utils/GoogleAnalytics";

interface Props {
  hidden: boolean;
}

interface JsonBody {
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

export const FifthStep = React.memo(({ hidden }: Props) => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const initialDate = new Date();
  initialDate.setFullYear(initialDate.getFullYear() - 18);

  const [isConf, setIsConf] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    surname: "",
    gender: "Herr",
    employment: "Angestellter",
    birthday: null as Date | null,
    phone: "",
    email: "",
    strasse: "",
    postalCode: "",
    ort: "",
    additionalInfo: "",
  });

  const personState = useSelector((state: any) => state.personDateReducer);
  const mortageState = useSelector((state: any) => state.mortageInfoReducer);
  const formStepState = useSelector((state: any) => state.formStageReducer);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateInput = (date: any) => {
    setForm((prev) => ({
      ...prev,
      birthday: date ? new Date(date) : null,
    }));
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleEmployment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      employment: e.target.value,
    }));
  };

  const scrollToForm = () => {
    const el = document.getElementById("MortageForm");
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const handleBackBtn = () => {
    sendMetrik("BackToThirdStep", "MortageForm", "BackButtonPressed", "");
    dispatch(setFormStep(4));
    scrollToForm();
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(phone);

  const handleContinueBtn = async () => {
    if (form.name.length < 2) return;
    if (form.surname.length < 2) return;
    if (!validatePhone(form.phone)) return;
    if (!form.birthday) return;
    if (!validateEmail(form.email)) return;
    if (!isConf) return;

    sendMetrik("LastStepPassed", "MortageForm", "SendButtonPressed", "");

    dispatch(setPersonData(form));

    const birthdayStr = form.birthday.toDateString();
    const plz = parseInt(form.postalCode || "0");

    const jsonBody: JsonBody = {
      anrede: form.gender,
      name: form.name,
      lastname: form.surname,
      birthday: birthdayStr,
      email: form.email,
      phone: form.phone,
      streetAndHouseNumber: form.strasse,
      plz,
      city: form.ort,
      work: form.employment,
      message: form.additionalInfo,
      married: personState.personFamilyInfo?.marriaged || false,
      children: (personState.personFamilyInfo?.kids || 0) > 0,
      childrenCount: personState.personFamilyInfo?.kids || 0,
      foundUs: personState.personSource,
      income: personState.personSalary,
      calculated: mortageState.finalMortage,
      tableData: mortageState.tableData || {},
      immoCost: mortageState.propertyValue,
    };

    try {
      await axios.post(
        "https://us-central1-eigenheimwunsch-de.cloudfunctions.net/addFullClientInfo",
        jsonBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer XXX_REDACTED",
          },
        }
      );

      dispatch(setFormStep(6));
      scrollToForm();
    } catch (err) {
      console.error(err);
    }
  };

  if (hidden) return null;

  return (
    <form className={css(firstStepForm, dblock)} id="formHeading">
      <div className="container">
        <Stepper />

        <div className="form-wrapper ml-9">
          <h2 className={`h2 ${css(formHeading)}`}>Persönliche Angaben</h2>

          <div className={css(bodyContent)}>
            <img src={userIcon} alt="User icon" />

            <div className={css(formInfoContainer)}>
              {/* Gender */}
              <div className={css(radioButtonContainer)}>
                <span className={css(formLabelText)}>Anrede</span>

                <div className={css(radioGroup)}>
                  {["Herr", "Frau"].map((g) => (
                    <div key={g} className={css(radioButton)}>
                      <input
                        type="radio"
                        value={g}
                        checked={form.gender === g}
                        onChange={handleGender}
                        className={css(dnone)}
                      />
                      <label className={css(radioRatingLabel)}>
                        <div className="label-dot" />
                        <span>{g}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className={css(inputsContainer)}>
                <div className={css(inputsRow)}>
                  {["name", "surname", "phone", "email"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      placeholder={field}
                      className={css(customInput)}
                      onChange={handleInput}
                    />
                  ))}
                </div>

                <div className={css(inputsRow)}>
                  <input
                    name="strasse"
                    placeholder="Straße"
                    className={css(customInput)}
                    onChange={handleInput}
                  />
                  <input
                    name="postalCode"
                    placeholder="PLZ"
                    className={css(customInput)}
                    onChange={handleInput}
                  />
                  <input
                    name="ort"
                    placeholder="Ort"
                    className={css(customInput)}
                    onChange={handleInput}
                  />

                  <DatePicker
                    value={form.birthday}
                    onChange={handleDateInput}
                    maxDate={initialDate}
                    className={css(customInput, formDate, customDatepicker)}
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className={css(conf)}>
                <input
                  type="checkbox"
                  checked={isConf}
                  onChange={() => setIsConf((p) => !p)}
                />
                <label>
                  Ich bin einverstanden
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={css(formButton)}>
          <button type="button" onClick={handleBackBtn}>
            Zurück
          </button>

          <button type="button" onClick={handleContinueBtn}>
            Anfrage absenden
          </button>
        </div>
      </div>
    </form>
  );
});