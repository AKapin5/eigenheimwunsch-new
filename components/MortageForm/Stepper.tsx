import React from "react";

type Props = {
  step: number;
  numOfSteps: number;
  dispatch: React.Dispatch<any>;
};

export const Stepper = React.memo(({ step, numOfSteps, dispatch }: Props) => {
  const onStepChange = (i: number) => {
    if (i < step) {
      dispatch({ type: "SET_STEP", payload: i });
    }
  };

  const onDismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };

  const steps = [];

  for (let i = 1; i <= numOfSteps; i++) {
    steps.push(
      <span
        key={i}
        className={`step ${
          i < step ? "step-past" : i === step ? "step-current" : ""
        }`}
        onClick={() => onStepChange(i)}
      >
        <span className="step-circle">
          <span className="step-text">{i <= step ? i : ""}</span>
        </span>
      </span>
    );
  }

  return (
    <div className="stepper">
      <span className="steps-container">{steps}</span>

      <button type="button" onClick={onDismiss}>
        ✕
      </button>
    </div>
  );
});