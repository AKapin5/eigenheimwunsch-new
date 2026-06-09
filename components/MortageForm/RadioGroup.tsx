import React from "react";
import { useFela } from "react-fela";
import { radioGroup, radioButton, radioRatingLabel, dnone } from "./styles";

interface Iprops {
  options?: { value: number, label: string },
  onSubmit: (arg0: number) => void;
}

export const RadioGroup = React.memo((props: Iprops) => {
  const { css } = useFela();
  const [currentRating, setCurrentRating] = React.useState<Number | undefined>(undefined);

  const onRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = parseInt(e.target.value);
    setCurrentRating(rating);
    props.onSubmit(rating);
  };

  const renderOptions = () => {
    const options: JSX.Element[] = [];
    for (let i = 1; i >= 0; i--) {
      options.push(
        <div className={css(radioButton)} key={i}>
          <input
            type="radio"
            id={`rating-${i}`}
            name={`rating-${i}`}
            value={i}
            checked={currentRating === i}
            className={css(dnone)}
            onChange={onRatingChange}>
          </input>
          <label
            htmlFor={`rating-${i}`}
            className={css(radioRatingLabel)}>
            <div className="label-dot"></div>
            <span className="label-text">
              { i ? "Ja" : "Nein" }
            </span>
          </label>
        </div>
      );
    }
    return options;
  }

  return (
    <div className={`${css(radioGroup)} ml-36`}>
      {renderOptions()}
    </div>
  );
});
