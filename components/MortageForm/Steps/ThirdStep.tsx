import React, { useEffect, useMemo } from "react";

type MortgageData = {
  income: number;
  hasKids: boolean;
  kidsCount: number;
};

type Action =
  | { type: "SET_FINAL"; value: number }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" };

type Props = {
  hidden: boolean;
  data: MortgageData;
  dispatch: React.Dispatch<Action>;
};

export function ThirdStep({ hidden, data, dispatch }: Props) {
  if (hidden) return null;

  const finalMortgage = useMemo(() => {
    const BASE = 1200;
    const PERCENT = 0.06;
    const marriedBonus = 0;

    const childrenCost = data.hasKids ? data.kidsCount * 50 : 0;

    const monthlyLiabilities = BASE + childrenCost;
    const yearlyLiabilities = monthlyLiabilities * 12;

    const yearlyIncome = data.income * 12;

    const net = yearlyIncome - yearlyLiabilities;

    const result = net / PERCENT;

    return result > 0 ? result : 0;
  }, [data]);

  useEffect(() => {
    dispatch({
      type: "SET_FINAL",
      value: finalMortgage,
    });
  }, [finalMortgage, dispatch]);

  const handleBack = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const handleContinue = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <form className="mortgage-form">
      <div className="container">
        <h2 className="h2">Finanzierungsvolumen</h2>

        <div className="body-content">
          <p>
            Die Erstschätzung ergibt, dass Sie eine Finanzierung in folgender Höhe erhalten können:
          </p>

          <div className="result">
            {Math.round(finalMortgage).toLocaleString("de-DE")} EUR
          </div>

          <p>
            Nur noch ein Schritt zu den besten Konditionen für Ihre Finanzierung
          </p>
        </div>

        <div className="buttons">
          <button type="button" onClick={handleBack}>
            Zurück
          </button>

          <button type="button" onClick={handleContinue}>
            Angebot erhalten
          </button>
        </div>
      </div>
    </form>
  );
}