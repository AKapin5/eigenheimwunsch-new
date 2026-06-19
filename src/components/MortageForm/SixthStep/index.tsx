import React from "react";
import { useFela } from "react-fela";

import { Stepper } from "../Stepper";
import doneIcon from "../../../assets/images/dist/rechner/done-icon.png";

import {
  lastStep,
  bodyContent,
  finalInfoContainer
} from "./styles";
import {
  firstStepForm,
  dnone,
  dblock
} from "../styles";

interface Iprops {
  hidden: boolean;
}

export const SixthStep = React.memo((props: Iprops) => {
  const { css } = useFela();

  return (
    <form
      className={css(firstStepForm, lastStep, props.hidden ? dnone : dblock)}
      id='formHeading'
    >
      <div className='container'>
        <Stepper />
        <div className='form-wrapper ml-9'>
          <div className={css(bodyContent)}>
            <div className="image-wrapper">
              <img src={doneIcon} alt="Check icon" />
            </div>
            <div className={`${css(finalInfoContainer)}`}>
              <div className='heading-wrapper'>
                <h2 className="h2">
                  VIELEN DANK!
                </h2>
              </div>
              <div className="text-wrapper">
                <p>
                  Unser Berater wird sich in Kürze mit Ihnen in Verbindung setzen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
});
