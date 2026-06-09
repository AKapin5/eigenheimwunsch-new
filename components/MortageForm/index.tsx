import React, { useReducer } from "react";

import { Stepper } from "./Stepper";

import FirstStep from "./Steps/FirstStep";
import { SecondStep } from "./Steps/SecondStep";
import { ThirdStep } from "./Steps/ThirdStep";
import FourthStep from "./Steps/FourthStep";
import { FifthStep } from "./Steps/FifthStep";
import SixthStep from "./Steps/SixthStep";

export type MortgageData = {
  source: string;
  income: number;
  propertyPrice: number;
  duration: number;
  hasKids: boolean;
  kidsCount: number;
  name: string;
  email: string;
  phone: string;
  message: string;
};

/* -------------------------
   STATE
--------------------------*/

type State = {
  step: number;
  numOfSteps: number;
  data: MortgageData;
  error: string | null;
};

/* -------------------------
   ACTIONS
--------------------------*/

export type Action =
  | { type: "SET_FIELD"; field: keyof MortgageData; value: any }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };

/* -------------------------
   INITIAL STATE
--------------------------*/

const initialState: State = {
  step: 1,
  numOfSteps: 6,
  error: null,

  data: {
    name: "",
    email: "",
    phone: "",

    source: "google",

    hasKids: false,
    kidsCount: 0,

    propertyPrice: 0,
    income: 0,
    duration: 0,

    message: "",
  },
};

/* -------------------------
   REDUCER
--------------------------*/

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, state.numOfSteps),
      };

    case "PREV_STEP":
      return {
        ...state,
        step: Math.max(state.step - 1, 1),
      };

    case "SET_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

/* -------------------------
   COMPONENT
--------------------------*/

export const MortageForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setError = (msg: string) => {
    dispatch({
      type: "SET_ERROR",
      payload: msg,
    });

    setTimeout(() => {
      dispatch({
        type: "SET_ERROR",
        payload: null,
      });
    }, 2000);
  };

  const stepProps = {
    hidden: false,
    step: state.step,
    numOfSteps: state.numOfSteps,
    data: state.data,
    dispatch,
    setError,
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <FirstStep {...stepProps} />;

      case 2:
        return <SecondStep {...stepProps} />;

      case 3:
        return <ThirdStep {...stepProps} />;

      case 4:
        return <FourthStep {...stepProps} />;

      case 5:
        return <FifthStep {...stepProps} />;

      case 6:
        return <SixthStep />;

      default:
        return null;
    }
  };

  return (
    <>
      {state.step < state.numOfSteps && (
        <Stepper
          step={state.step}
          numOfSteps={state.numOfSteps}
          dispatch={dispatch}
        />
      )}

      {renderStep()}

      {state.error && (
        <div className="error-banner">
          {state.error}
        </div>
      )}
    </>
  );
};