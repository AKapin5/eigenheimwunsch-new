import React, { useState } from "react";

import { Stepper } from "../Stepper";
import { RangeSlider } from "../RangeSlider";

import euroIcon from "../../../assets/images/dist/rechner/euro-icon.png";

import type { MortgageData, Action } from "../types";

type Props = {
  hidden: boolean;
  step: number;
  numOfSteps: number;
  data: MortgageData;
  dispatch: React.Dispatch<Action>;
  setError: (message: string) => void;
};

export default function FirstStep({
  hidden,
  step,
  numOfSteps,
  data,
  dispatch,
  setError,
}: Props) {
  const [salaryRange, setSalaryRange] = useState<number[]>([
    data.income || 0,
  ]);

  if (hidden) return null;

  const handleRange = (value: number) => {
    setSalaryRange([value]);

    dispatch({
      type: "SET_FIELD",
      field: "income",
      value,
    });
  };

  const handleSalaryInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);

    const cappedValue = Math.min(value, 20000);

    setSalaryRange([cappedValue]);

    dispatch({
      type: "SET_FIELD",
      field: "income",
      value: cappedValue,
    });
  };

  const scrollToForm = () => {
    const element = document.getElementById("MortageForm");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleContinue = () => {
    if (!data.income) {
      setError("„Gehalt“ ausfüllen");
      return;
    }

    dispatch({
      type: "SET_FIELD",
      field: "source",
      value: "google",
    });

    dispatch({
      type: "NEXT_STEP",
    });

    scrollToForm();
  };

  return (
    <form className="mortgage-form">
      <div className="container">
        <Stepper
          step={step}
          numOfSteps={numOfSteps}
          dispatch={dispatch}
        />

        <div className="form-wrapper">
          <h2 className="h2 mb-108">
            Monatliches Haushaltsnettoeinkommen
          </h2>

          <div className="body-content">
            <div className="input-container">
              <label htmlFor="salaryNumber">
                <img
                  src={euroIcon}
                  alt="Euro"
                />

                <input
                  id="salaryNumber"
                  type="number"
                  min="0"
                  max="20000"
                  placeholder="Euro"
                  value={data.income || ""}
                  onChange={handleSalaryInput}
                />
              </label>
            </div>

            <div className="range-slider-container">
              <RangeSlider
                value={salaryRange}
                onChange={handleRange}
              />
            </div>
          </div>
        </div>

        <div className="next-step-button">
          <button
            type="button"
            className="button"
            onClick={handleContinue}
          >
            <span>Weiter</span>
            <span className="arrow-icon">&gt;</span>
          </button>
        </div>
      </div>
    </form>
  );
}