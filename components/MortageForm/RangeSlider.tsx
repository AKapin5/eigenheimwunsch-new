import React from "react";
import { useFela } from "react-fela";
import { Range, getTrackBackground } from "react-range";
import {
  rangeInputContainer,
  rangeInputLabels,
  rangeSliderTooltip
} from "./styles";

interface Iprops {
  value: number[];
  onChange: (arg0: number) => void;
}

export const RangeSlider = React.memo((props: Iprops) => {
  const { css } = useFela();
  const [rangeValues, setRangeValues] = React.useState<number[]>(props.value || [0])

  const rangeLabels = [
    { value: 0, label: "0" },
    { value: 2000, label: "2 000" },
    { value: 4000, label: "4 000" },
    { value: 6000, label: "6 000" },
    { value: 8000, label: "8 000" },
    { value: 10000, label: "10 000" },
    { value: 12000, label: "12 000" },
    { value: 14000, label: "14 000" },
    { value: 16000, label: "16 000" },
    { value: 18000, label: "18 000" },
    { value: 20000, label: "20 000" },
  ];
  const rangeShortLabels = [
    { value: 0, label: "0" },
    { value: 5000, label: "5 000" },
    { value: 10000, label: "10 000" },
    { value: 15000, label: "15 000" },
    { value: 20000, label: "20 000" },
  ];

  const handleRangeInput = (values: number[]) => {
    setRangeValues(values);
    props.onChange(values[0]);
  };

  const renderRangeInputLabels = () => {
    const labels: JSX.Element[] = [];
    rangeLabels.forEach((option, i) => labels.push(<span key={i}>{option.label}</span>));
    return labels;
  };

  const renderShortInputLabels = () => {
    const labels: JSX.Element[] = [];
    rangeShortLabels.forEach((option, i) => labels.push(<span key={i}>{option.label}</span>));
    return labels;
  };

  React.useEffect(() => {
    setRangeValues(props.value);
  }, [props.value]);

  return (
    <div className={css(rangeInputContainer)}>
      <div className={`${css(rangeInputLabels)} labels`}>
        {renderRangeInputLabels()}
      </div>
      <div className={`${css(rangeInputLabels)} short-labels`}>
        {renderShortInputLabels()}
      </div>
      <Range
        values={rangeValues}
        step={500}
        min={0}
        max={20000}
        onChange={handleRangeInput}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              paddingLeft: ".25em",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: rangeValues,
                  colors: ["#548BF4", "#ccc"],
                  min: 0,
                  max: 20000,
                }),
                alignSelf: "center",
              }}
              className="track-background"
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              height: "26px",
              width: "26px",
              borderRadius: "50%",
              backgroundColor: "#265796",
              display: "flex",
              outline: "none",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            {
              isDragged ?
              <div className={css(rangeSliderTooltip)}>
                {rangeValues[0].toFixed(0)} EUR
              </div>
              : ""
            }
          </div>
        )}
      />
    </div>
  );
});
