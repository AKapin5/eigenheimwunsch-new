import React from "react";
import { useFela } from "react-fela";
import { useSelector, useDispatch } from "react-redux";
import { setFormStep } from "redux/actions/setFormStage";
import { stepper } from "./styles";
import closeIcon from "../../assets/images/dist/rechner/stepper-close-icon.svg";

export const Stepper = React.memo(() => {
  const { css } = useFela();
  const dispatch = useDispatch();

  const { activeStep, numOfSteps } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );

  const onStepChange = (i: number) => {
    if (i && i < activeStep) {
      dispatch(setFormStep(i));
    }
    return;
  };

  const onDismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setFormStep(0));
  };

  const steps: JSX.Element[] = [];
  for (let i = 1; i <= numOfSteps; i++) {
    steps.push(
      <span
        className={`step step-${i} ${i < activeStep ? 'step-past' : (i === activeStep ? 'step-current' : '')}`}
        onClick={() => onStepChange(i)}
        id={`${i}`}
        key={`${i}`}>
          <span className="step-circle">
            <span className="step-text">
              {i <= activeStep ? i : ''}
            </span>
          </span>
      </span>
    );
  }

  return (
    <div className={css(stepper)}>
      <span className="steps-container">
        {steps}
      </span>
      <button
        type="button"
        className="dismiss-btn"
        onClick={onDismiss}
        id="dismiss-btn">
        <img
          src={closeIcon}
          alt='Close icon'
        />
      </button>
    </div>
  );
});
