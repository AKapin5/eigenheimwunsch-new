import React from "react";
import { useFela } from "react-fela";
import { FirstStep } from "./FirstStep";
import { useSelector } from "react-redux";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { FifthStep } from "./FifthStep";
import { SixthStep } from "./SixthStep";
import { setFormError } from "../../redux/actions/setFormError";
import warningSvg from "../../assets/images/dist/warning.svg";

import { formErrorAlert } from "./styles";

export const MortageForm: React.FC = () => {
  const { css } = useFela();

  const { activeStep } = useSelector(
    (formStageObj) => formStageObj.formStageReducer
  );
  const { isError, text } = useSelector(
    (isErrorObj) => isErrorObj.formErrorReducer
  );

  return (
    <>
      <FirstStep hidden={activeStep !== 1} />
      <SecondStep hidden={activeStep !== 2} />
      <ThirdStep hidden={activeStep !== 3} />
      <FourthStep hidden={activeStep !== 4} />
      <FifthStep hidden={activeStep !== 5} />
      <SixthStep hidden={activeStep !== 6} />
      <div className={`${isError ? "active" : ""} ${css(formErrorAlert)}`}>
        <img src={warningSvg} alt='warning icon' /> {text}
      </div>
    </>
  );
};

export const setError = (dispatch: any, textOfError: string) => {
  const errObj = {
    isError: true,
    text: textOfError,
  };

  const noErroObj = {
    isError: false,
    text: textOfError,
  };

  dispatch(setFormError(errObj));

  setTimeout(() => {
    dispatch(setFormError(noErroObj));
  }, 2000);
};
