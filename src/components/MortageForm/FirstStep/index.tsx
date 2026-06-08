import React from "react";
import { useFela } from "react-fela";
import { useSelector, useDispatch } from "react-redux";
import { setPersonSalary } from "../../../redux/actions/setPersonData";
import { setPersonSource } from "../../../redux/actions/setPersonData";
import { setFormStep } from "redux/actions/setFormStage";
import { IdoubleRadio } from "../../../interfaces";
import { sendMetrik } from "../../utils/GoogleAnalytics";
import { Stepper } from "../Stepper";
import { RangeSlider } from "../RangeSlider";
import euroIcon from "../../../assets/images/dist/rechner/euro-icon.png";

import {
  bodyContent,
  inputContainer,
  rangeSliderContainer,
  nextStepButton
} from "./styles";
import {
  firstStepForm,
  formHeading,
  formButton,
  formLabel,
  customInput,
  dnone,
  dblock,
} from "../styles";
import { setError } from "..";

interface Iprops {
  hidden: boolean;
}

export const FirstStep = React.memo((props: Iprops) => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const [salary, setSalary] = React.useState<number[]>([0]);
  const [salaryInput, setSalaryInput] = React.useState<number|undefined>(undefined);
  const [userSource, setUserSource] = React.useState<IdoubleRadio>({
    active: "google",
  });

  const { activeStep } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );

  const handleRange = (value: number) => {
    setSalaryInput(value);
  };

  const handleSalaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const rangeValue = value <= 20000 ? value : 20000;
    setSalary([rangeValue]);
    setSalaryInput(value);
  };

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  };

  const handleContinueBtn = () => {
    if (!salaryInput) {
      setError(dispatch, "„Gehalt“ ausfüllen");
      return;
    }
    sendMetrik("FirstStepPassed", "MortageForm", "NextButtonPressed", "");
    dispatch(setPersonSource(userSource.active));
    dispatch(setPersonSalary(salaryInput));
    dispatch(setFormStep(2));
    scrollToForm();
  };

  return (
    <form className={css(firstStepForm, props.hidden ? dnone : dblock)}>
      <div className='container'>
        <Stepper />
        <div className='form-wrapper'>
          <div>
            <h2 className={`h2 ${css(formHeading)} mb-108`}>
              Monatliches Haushaltsnettoeinkommen
            </h2>
          </div>
          <div className={css(bodyContent)}>
            <div className={css(inputContainer)}>
              <label htmlFor='salaryNumber' className={css(formLabel)}>
                <img src={euroIcon} alt="Euro icon" />
                <input
                  type='text'
                  value={salaryInput === undefined ? '' : salaryInput}
                  onChange={handleSalaryInput}
                  placeholder="Euro"
                  id='salaryNumber'
                  name='name'
                  className={css(customInput)}
                />
              </label>
            </div>
            <div className={css(rangeSliderContainer)}>
              <RangeSlider
                value={salary}
                onChange={handleRange}
              />
            </div>
          </div>
        </div>
        <div className={css(formButton, nextStepButton)}>
          <button
            type='button'
            className='button'
            onClick={handleContinueBtn}
          >
            <span>Weiter</span>
            <span className="arrow-icon">&gt;</span>
          </button>
        </div>
      </div>
    </form>
  );
});
