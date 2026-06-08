import React from "react";
import Select from 'react-select';
import { useFela } from "react-fela";
import { useSelector, useDispatch } from "react-redux";
import { setHaveKids } from "../../../redux/actions/setKidsInfo";
import { setKidsCount } from "../../../redux/actions/setKidsInfo";
import { setPersonFamilyData } from "../../../redux/actions/setPersonData";
import { setFormStep } from "redux/actions/setFormStage";
import { Stepper } from "../Stepper";
import { RadioGroup } from "../RadioGroup";
import familyIcon from "../../../assets/images/dist/rechner/family-icon.png";

import {
  bodyContent,
  inputsContainer,
  selectContainer,
  customSelect,
  radioButtonContainer,
} from "./styles";
import {
  firstStepForm,
  formHeading,
  formButton,
  formLabelText,
  dnone,
  dblock,
} from "../styles";
import { setError } from "..";
import {sendMetrik} from "../../utils/GoogleAnalytics";

interface Iprops {
  hidden: boolean;
}

export const SecondStep = React.memo((props: Iprops) => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const verheiratetSelectOptions = [
    { value: 1, label: 'Verheiratet' },
    { value: 0, label: 'Nicht verheiratet' }
  ];

  const kidsSelectOptions = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ];

  const { haveKids, kidsMoreThree, kidsCount } = useSelector(
    (kidsInfoObj) => kidsInfoObj.kidsInfoReducer
  );
  const { activeStep } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );

  const [isMarried, setIsMarried] = React.useState<boolean | undefined>(undefined);
  const [isKids, setIsKids] = React.useState<boolean | undefined>(undefined);
  const [numOfKids, setNumOfKids] = React.useState<number>(0);

  const handleIsKids = (e: number) => {
    setIsKids(!!e);

    if (!!e) {
      dispatch(setHaveKids(true));
      dispatch(setKidsCount(1));
    } else {
      dispatch(setKidsCount(0));
      dispatch(setHaveKids(false));
    }
  };

  const handleIsMarriedSelect = (obj: {value: number, label: string}) => {
    setIsMarried(!!obj.value);
  };

  const handleKidsSelectInput = (obj: {value: number, label: string}) => {
    setNumOfKids(obj.value);
    dispatch(setKidsCount(obj.value));
  };

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  };

  const handleBackBtn = () => {
    sendMetrik("BackToFirstStep", "MortageForm", "BackButtonPressed", "");
    dispatch(setFormStep(1));
    scrollToForm();
  };

  const handleContinueBtn = () => {
    if (isMarried === undefined || haveKids === undefined || (haveKids && kidsMoreThree && kidsCount === 0) || (haveKids && !numOfKids)) {
      // setError(dispatch, "„Kinder“ ausfüllen");
      setError(dispatch, "Nicht alle Felder sind ausgefüllt");
      return;
    }
    sendMetrik("SecondStepPassed", "MortageForm", "NextButtonPressed", "");
    dispatch(
      setPersonFamilyData({
        marriaged: isMarried,
        kids: kidsCount,
      })
    );
    dispatch(setFormStep(3));
    scrollToForm();
  };

  return (
    <form className={css(firstStepForm, props.hidden ? dnone : dblock)}>
      <div className='container'>
        <Stepper />
        <div className='form-wrapper ml-9'>
          <div>
            <h2 className={`h2 ${css(formHeading)}`}>Familienverhältnisse</h2>
          </div>
          <div className={css(bodyContent)}>
            <img src={familyIcon} alt="Family icon" />
            <div className={css(inputsContainer)}>
              <div className={css(selectContainer)}>
                <Select
                  classNamePrefix='customSelect'
                  options={verheiratetSelectOptions}
                  placeholder='Familienstand'
                  name='familienstand'
                  id='familienstand'
                  className={css(customSelect)}
                  onChange={handleIsMarriedSelect} />
              </div>
              <div className={`${css(radioButtonContainer)} ${!isKids ? 'mb-72' : '' }`}>
                <span className={css(formLabelText)}>
                  Minderjährige Kinder
                </span>
                <RadioGroup onSubmit={handleIsKids} />
              </div>
              {isKids ? 
                <div className={css(selectContainer)}>
                  <Select
                    classNamePrefix='customSelect'
                    options={kidsSelectOptions}
                    placeholder='Anzahl Kinder'
                    name='anzahlKinder'
                    id='anzahlKinder'
                    className={css(customSelect)}
                    onChange={handleKidsSelectInput} />
                </div> : ''}
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
