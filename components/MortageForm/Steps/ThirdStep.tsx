import React, {
  useMemo,
} from "react";

import type {
  MortgageData,
  Action,
} from "../types";

type Props = {
  hidden: boolean;
  data: MortgageData;
  dispatch: React.Dispatch<Action>;
};

export function ThirdStep({
  hidden,
  data,
  dispatch,
}: Props) {
  if (hidden) return null;

  const finalMortgage =
    useMemo(() => {
      const BASE = 1200;
      const PERCENT = 0.06;

      const marriedCost =
        data.isMarried ? 300 : 0;

      const childrenCost =
        data.kidsCount * 50;

      const monthlyCosts =
        BASE +
        marriedCost +
        childrenCost;

      const yearlyIncome =
        data.income * 12;

      const yearlyCosts =
        monthlyCosts * 12;

      const net =
        yearlyIncome - yearlyCosts;

      return Math.max(
        net / PERCENT,
        0
      );
    }, [data]);

  return (
    <form className="mortgage-form">
      <div className="container">
        <h2 className="h2">
          Finanzierungsvolumen
        </h2>

        <p>
          Die Erstschätzung ergibt,
          dass Sie eine Finanzierung
          in folgender Höhe erhalten
          können:
        </p>

        <div className="result">
          {Math.round(
            finalMortgage
          ).toLocaleString("de-DE")}{" "}
          EUR
        </div>

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
            onClick={() =>
              dispatch({
                type: "NEXT_STEP",
              })
            }
          >
            Angebot erhalten
          </button>
        </div>
      </div>
    </form>
  );
}