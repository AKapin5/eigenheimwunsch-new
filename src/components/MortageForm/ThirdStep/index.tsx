import React from "react";
import { useFela } from "react-fela";
import { useSelector, useDispatch } from "react-redux";
import { setFinalMortage } from "../../../redux/actions/setMortage";
import { setFormStep } from "redux/actions/setFormStage";

import { Stepper } from "../Stepper";
import moneyIcon from "../../../assets/images/dist/rechner/money-icon.png";
import arrowBlue from "../../../assets/images/dist/rechner/arrow_blue.png";

import {
  bodyContent,
  formInfoContainer
} from "./styles";
import {
  firstStepForm,
  formHeading,
  formButton,
  formDescription,
  finalMortageNumber,
  dnone,
  dblock,
  blueArrowSection
} from "../styles";
import {sendMetrik} from "../../utils/GoogleAnalytics";

interface Iprops {
  hidden: boolean;
}

export const ThirdStep = React.memo((props: Iprops) => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const { activeStep } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );
  const {
    personFamilyInfo,
    personSalary,
    personSource,
  } = useSelector((personDataObj) => personDataObj.personDateReducer);
  const { finalMortage } = useSelector(
    (mortageInfoObj) => mortageInfoObj.mortageInfoReducer
  );

  const finalCalc = () => {
    const PERSENT = 0.06;
    let baseConstant = {
      human: 1200,
      married: 0,
      children: 0,
    };
    let monthLiability = 0;
    let yearLiability = 0;
    let yearAssets = 0;
    let netto = 0;
    let finalValue = 0;

    baseConstant.married = personFamilyInfo["marriaged"] ? 300 : 0;
    baseConstant.children = personFamilyInfo["kids"] !== 0 ? personFamilyInfo["kids"] * 50 : 0;

    monthLiability = baseConstant.human + baseConstant.married + baseConstant.children;
    yearLiability = monthLiability * 12;
    yearAssets = personSalary * 12;
    netto = yearAssets - yearLiability;

    const preFinalValue = netto / PERSENT;
    finalValue = preFinalValue > 0 ? preFinalValue : 0;
    dispatch(setFinalMortage(finalValue));
  };

  React.useEffect(() => finalCalc(), [
    personFamilyInfo,
    personSalary,
    personSource,
  ]);

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  };

  const handleBackBtn = () => {
    sendMetrik("BackToSecondStep", "MortageForm", "BackButtonPressed", "");
    dispatch(setFormStep(2));
    scrollToForm();
  };

  const handleContinueBtn = () => {
    sendMetrik("ThirdStepPassed", "MortageForm", "NextButtonPressed", "");
    dispatch(setFormStep(4));
  };

  return (
    <form className={css(firstStepForm, props.hidden ? dnone : dblock)}>
      <div className='container'>
        <Stepper />
        <div className='form-wrapper ml-9'>
          <div>
            <h2 className={`h2 ${css(formHeading)} mb-54`}>
              Finanzierungsvolumen
            </h2>
          </div>
          <div className={css(bodyContent)}>
            <img src={moneyIcon} alt="Money icon" />
            <div className={css(formInfoContainer)}>
              <p className={css(formDescription)}>
                Die Erstschätzung ergibt, dass Sie eine Finanzierung in folgender Höhe erhalten können:
              </p>
              <span className={css(finalMortageNumber)}>
                {String(Math.round(finalMortage)).replace(
                  /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                  "$1 "
                )}{" "}
                EUR
              </span>
              <div className={css(blueArrowSection)}>
                <p className={css(formDescription)}>
                  Nur noch ein Schritt zu den besten Konditionen<br/> für Ihre Finanzierung
                </p>
                <img src={arrowBlue} width="150" height="150" alt='arrow to the fourth step' />
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
            className='button button-big'
            onClick={handleContinueBtn}
          >
            <span>Angebot erhalten</span>
            <span className="arrow-icon">&gt;</span>
          </button>
        </div>
      </div>
    </form>
  );
});
