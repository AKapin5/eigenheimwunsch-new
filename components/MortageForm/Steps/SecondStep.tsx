import React from "react";
import Select from "react-select";

import type {
  MortgageData,
  Action,
} from "../types";

type Props = {
  hidden: boolean;
  data: MortgageData;
  dispatch: React.Dispatch<Action>;
  setError: (msg: string) => void;
};

type Option = {
  value: number;
  label: string;
};

export function SecondStep({
  hidden,
  data,
  dispatch,
  setError,
}: Props) {
  if (hidden) return null;

  const marriedOptions: Option[] = [
    {
      value: 1,
      label: "Verheiratet",
    },
    {
      value: 0,
      label: "Nicht verheiratet",
    },
  ];

  const kidsOptions: Option[] =
    Array.from({ length: 10 }).map(
      (_, i) => ({
        value: i + 1,
        label: String(i + 1),
      })
    );

  const handleContinue = () => {
    if (
      data.hasKids &&
      data.kidsCount === 0
    ) {
      setError(
        "Nicht alle Felder sind ausgefüllt"
      );
      return;
    }

    dispatch({
      type: "NEXT_STEP",
    });
  };

  return (
    <form className="mortgage-form">
      <div className="container">
        <h2 className="h2">
          Familienverhältnisse
        </h2>

        <Select
          options={marriedOptions}
          placeholder="Familienstand"
          onChange={(option) =>
            dispatch({
              type: "SET_FIELD",
              field: "isMarried",
              value: !!option?.value,
            })
          }
        />

        <div>
          <label>
            <input
              type="radio"
              checked={data.hasKids}
              onChange={() =>
                dispatch({
                  type: "SET_FIELD",
                  field: "hasKids",
                  value: true,
                })
              }
            />
            Ja
          </label>

          <label>
            <input
              type="radio"
              checked={!data.hasKids}
              onChange={() =>
                dispatch({
                  type: "SET_FIELD",
                  field: "hasKids",
                  value: false,
                })
              }
            />
            Nein
          </label>
        </div>

        {data.hasKids && (
          <Select
            options={kidsOptions}
            placeholder="Anzahl Kinder"
            onChange={(option) =>
              dispatch({
                type: "SET_FIELD",
                field: "kidsCount",
                value:
                  option?.value ?? 0,
              })
            }
          />
        )}

        <div className="buttons">
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "PREV_STEP",
              })
            }
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