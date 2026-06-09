"use client";

import { useEffect, useState } from "react";

type MortgageOption = {
  Zinsen: number;
  Tilgung: number;
  Annuitaet: number;
  Darlehensrest: number;
};

type TableData = {
  Jahre5: MortgageOption;
  Jahre10: MortgageOption;
  Jahre15: MortgageOption;
};

type Props = {
  data: any;
  dispatch: React.Dispatch<any>;
  setError: (msg: string) => void;
};

export default function FourthStep({
  data,
  dispatch,
  setError,
}: Props) {
  const [creditAmount, setCreditAmount] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [repayment, setRepayment] = useState(2);

  const [selectedYears, setSelectedYears] = useState(5);

  const [results, setResults] = useState<TableData | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!creditAmount || !propertyPrice) return;

    calculate();
  }, [creditAmount, propertyPrice, repayment]);

  async function calculate() {
    try {
      setLoading(true);

      const response = await fetch("/api/mortgage/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          darlehensbetrag: Number(creditAmount),
          tilgung: repayment,
          immoCost: Number(propertyPrice),
        }),
      });

      if (!response.ok) {
        throw new Error("Calculation failed");
      }

      const json = await response.json();

      setResults(json);
    } catch {
      setError("Berechnung fehlgeschlagen");
    } finally {
      setLoading(false);
    }
  }

  function handleNext() {
    if (!results) {
      setError("Bitte Berechnung durchführen");
      return;
    }

    dispatch({
      type: "SET_FIELD",
      field: "mortgageDuration",
      value: selectedYears,
    });

    dispatch({
      type: "SET_FIELD",
      field: "mortgageResult",
      value: results[`Jahre${selectedYears}` as keyof TableData],
    });

    dispatch({ type: "NEXT_STEP" });
  }

  function handleBack() {
    dispatch({ type: "PREV_STEP" });
  }

  return (
    <div className="mortgage-step">
      <h2>Finanzierungsberechnung</h2>

      <div className="grid">
        <div>
          <label>Darlehen</label>
          <input
            type="number"
            value={creditAmount}
            onChange={(e) => setCreditAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Immobilienwert</label>
          <input
            type="number"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(e.target.value)}
          />
        </div>

        <div>
          <label>Tilgung</label>

          {[1, 2, 3].map((value) => (
            <label key={value}>
              <input
                type="radio"
                checked={repayment === value}
                onChange={() => setRepayment(value)}
              />
              {value}%
            </label>
          ))}
        </div>
      </div>

      {loading && <p>Berechnung läuft...</p>}

      {results && (
        <>
          <h3>Ihr Ergebnis</h3>

          <div className="year-picker">
            {[5, 10, 15].map((years) => (
              <label key={years}>
                <input
                  type="radio"
                  checked={selectedYears === years}
                  onChange={() => setSelectedYears(years)}
                />
                {years} Jahre
              </label>
            ))}
          </div>

          <table>
            <thead>
              <tr>
                <th>Festschreibung</th>
                <th>Zins</th>
                <th>Tilgung</th>
                <th>Rate</th>
                <th>Restschuld</th>
              </tr>
            </thead>

            <tbody>
              {[5, 10, 15].map((years) => {
                const row =
                  results[`Jahre${years}` as keyof TableData];

                return (
                  <tr key={years}>
                    <td>{years} Jahre</td>
                    <td>{row.Zinsen}%</td>
                    <td>{row.Tilgung}%</td>
                    <td>
                      {row.Annuitaet.toLocaleString("de-DE")} €
                    </td>
                    <td>
                      {row.Darlehensrest.toLocaleString("de-DE")} €
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      <div className="actions">
        <button onClick={handleBack}>
          Zurück
        </button>

        <button onClick={handleNext}>
          Weiter
        </button>
      </div>
    </div>
  );
}