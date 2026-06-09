import React, { useState } from "react";
import Select from "react-select";

import { sendMetrik } from "../../utils/GoogleAnalytics";

type Option = { value: number; label: string };

type MortgageData = {
  hasKids: boolean;
  kidsCount: number;
  source?: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof MortgageData; value: any }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_ERROR"; payload: string | null };

type Props = {
  hidden: boolean;
  data: MortgageData;
  dispatch: React.Dispatch<Action>;
  setError: (msg: string) => void;
};

export function SecondStep({ hidden, data, dispatch, setError }: Props) {
  const [isMarried, setIsMarried] = useState<boolean | undefined>(undefined);
  const [hasKidsLocal, setHasKidsLocal] = useState<boolean | undefined>(
    undefined
  );
  const [kidsCountLocal, setKidsCountLocal] = useState<number>(0);

  if (hidden) return null;

  const marriageOptions: Option[] = [
    { value: 1, label: "Verheiratet" },
    { value: 0, label: "Nicht verheiratet" },
  ];

  const kidsOptions: Option[] = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: String(i + 1),
  }));

  const handleKidsToggle = (value: number) => {
    const hasKids = Boolean(value);

    setHasKidsLocal(hasKids);

    dispatch({
      type: "SET_FIELD",
      field: "hasKids",
      value: hasKids,
    });

    if (hasKids) {
      dispatch({
        type: "SET_FIELD",
        field: "kidsCount",
        value: 1,
      });
    } else {
      dispatch({
        type: "SET_FIELD",
        field: "kidsCount",
        value: 0,
      });
    }
  };

  const handleMarriageSelect = (option: Option | null) => {
    setIsMarried(option?.value === 1);
  };

  const handleKidsSelect = (option: Option | null) => {
    if (!option) return;

    setKidsCountLocal(option.value);

    dispatch({
      type: "SET_FIELD",
      field: "kidsCount",
      value: option.value,
    });
  };

  const handleBack = () => {
    sendMetrik("BackToFirstStep", "MortageForm", "BackButtonPressed", "");

    dispatch({ type: "PREV_STEP" });
  };

  const handleContinue = () => {
    if (isMarried === undefined) {
      setError("Bitte Familienstand auswählen");
      return;
    }

    if (hasKidsLocal === undefined) {
      setError("Bitte Kinderangabe ausfüllen");
      return;
    }

    if (hasKidsLocal && kidsCountLocal === 0) {
      setError("Bitte Anzahl der Kinder auswählen");
      return;
    }

    sendMetrik(
      "SecondStepPassed",
      "MortageForm",
      "NextButtonPressed",
      ""
    );

    dispatch({
      type: "NEXT_STEP",
    });
  };

  return (
    <form className="mortgage-form">
      <div className="container">
        <h2 className="h2">Familienverhältnisse</h2>

        <div className="body-content">
          <div className="field">
            <Select
              options={marriageOptions}
              placeholder="Familienstand"
              onChange={handleMarriageSelect}
            />
          </div>

          <div className="field">
            <span>Minderjährige Kinder</span>

            <button
              type="button"
              onClick={() => handleKidsToggle(1)}
            >
              Ja
            </button>

            <button
              type="button"
              onClick={() => handleKidsToggle(0)}
            >
              Nein
            </button>
          </div>

          {hasKidsLocal && (
            <div className="field">
              <Select
                options={kidsOptions}
                placeholder="Anzahl Kinder"
                onChange={handleKidsSelect}
              />
            </div>
          )}
        </div>

        <div className="buttons">
          <button
            type="button"
            onClick={handleBack}
          >
            Zurück
          </button>

          <button
            type="button"
            onClick={handleContinue}
          >
            Weiter
          </button>
        </div>
      </div>
    </form>
  );
}