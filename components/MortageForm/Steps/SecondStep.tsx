import React from "react";
import Select from "react-select";

const familyIcon = "/images/dist/rechner/family-icon.png";

type MortgageData = {
  income: number;
  hasKids: boolean;
  kidsCount: number;
};

type Action =
  | { type: "SET_FIELD"; field: keyof MortgageData; value: any }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" };

interface Props {
  hidden: boolean;
  data: MortgageData;
  dispatch: React.Dispatch<Action>;
  setError: (msg: string) => void;
}

export const SecondStep = React.memo((props: Props) => {
  const {
    hidden,
    haveKids,
    kidsMoreThree,
    kidsCount,
    setHaveKids,
    setKidsCount,
    setPersonFamilyData,
    setStep,
    setError,
  } = props;

  const [isMarried, setIsMarried] = React.useState<boolean | undefined>();
  const [isKids, setIsKids] = React.useState<boolean | undefined>(undefined);
  const [numOfKids, setNumOfKids] = React.useState<number>(0);

  const marriedOptions: Option[] = [
    { value: 1, label: "Verheiratet" },
    { value: 0, label: "Nicht verheiratet" },
  ];

  const kidsOptions: Option[] = Array.from({ length: 10 }).map((_, i) => ({
    value: i + 1,
    label: String(i + 1),
  }));

  const handleIsKids = (value: number) => {
    const hasKids = Boolean(value);

    setIsKids(hasKids);
    setHaveKids(hasKids);

    if (hasKids) {
      setKidsCount(1);
    } else {
      setKidsCount(0);
    }
  };

  const handleMarried = (option: Option | null) => {
    if (!option) return;
    setIsMarried(Boolean(option.value));
  };

  const handleKidsSelect = (option: Option | null) => {
    if (!option) return;
    setNumOfKids(option.value);
    setKidsCount(option.value);
  };

  const scrollToForm = () => {
    const el = document.getElementById("MortageForm");
    if (el) window.scrollTo(0, el.offsetTop);
  };

  const handleBack = () => {
    setStep(1);
    scrollToForm();
  };

  const handleContinue = () => {
    if (
      isMarried === undefined ||
      haveKids === undefined ||
      (haveKids && kidsMoreThree && kidsCount === 0) ||
      (haveKids && !numOfKids)
    ) {
      setError("Nicht alle Felder sind ausgefüllt");
      return;
    }

    setPersonFamilyData({
      marriaged: Boolean(isMarried),
      kids: kidsCount,
    });

    setStep(3);
    scrollToForm();
  };

  if (hidden) return null;

  return (
    <form className="mortgage-form">
      <div className="container">
        <h2 className="h2">Familienverhältnisse</h2>

        <div className="body-content">
          <img src={familyIcon} alt="Family icon" />

          {/* Marital status */}
          <div className="field">
            <Select
              options={marriedOptions}
              placeholder="Familienstand"
              onChange={handleMarried}
            />
          </div>

          {/* Kids yes/no */}
          <div className="field">
            <span>Minderjährige Kinder</span>

            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  checked={isKids === true}
                  onChange={() => handleIsKids(1)}
                />
                Ja
              </label>

              <label>
                <input
                  type="radio"
                  checked={isKids === false}
                  onChange={() => handleIsKids(0)}
                />
                Nein
              </label>
            </div>
          </div>

          {/* Kids count */}
          {isKids && (
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
          <button type="button" onClick={handleBack}>
            Zurück
          </button>

          <button type="button" onClick={handleContinue}>
            Weiter
          </button>
        </div>
      </div>
    </form>
  );
});