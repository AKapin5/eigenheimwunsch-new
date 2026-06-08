import React from "react";
import { useFela } from "react-fela";
import { useDispatch } from "react-redux";
import { setMortageDetails, setMortageDuration, setPropertyValue } from "../../../redux/actions/setMortage";
import { setFormStep } from "redux/actions/setFormStage";

import { Stepper } from "../Stepper";
import moneybagIcon from "../../../assets/images/dist/rechner/moneybag-icon.png";
import houseIcon from "../../../assets/images/dist/rechner/house-icon.png";
import documentIcon from "../../../assets/images/dist/rechner/document-icon.png";
import checkIcon from "../../../assets/images/dist/rechner/checkbox-check-icon.png";

import {
  bodyContent,
  inputsRow,
  inputWrapper,
  customInput,
  tableSection,
  tableWrapper,
} from "./styles";
import {
  firstStepForm,
  formHeading,
  formButton,
  radioGroup,
  radioButton,
  radioRatingLabel,
  dnone,
  dblock,
} from "../styles";
import axios from "axios";
import {sendMetrik} from "../../utils/GoogleAnalytics";

interface Iprops {
  hidden: boolean;
}

interface IjsonBody {
  darlehensbetrag: number | undefined,
  tilgung: number | undefined,
  immoCost: number | undefined
}

interface ITableData {
  "Jahre5": {
    "Zinsen": number,
    "Tilgung": number,
    "Annuitaet": number,
    "Darlehensrest": number
  },
  "Jahre10": {
    "Zinsen": number,
    "Tilgung": number,
    "Annuitaet": number,
    "Darlehensrest": number
  },
  "Jahre15": {
    "Zinsen": number,
    "Tilgung": number,
    "Annuitaet": number,
    "Darlehensrest": number
  }
}

export const FourthStep = React.memo((props: Iprops) => {
  const { css } = useFela();
  const dispatch = useDispatch();
  const isFirstRender = React.useRef(true);
  const [creditInput, setCreditInput] = React.useState<number | undefined>(undefined);
  const [propertyPrice, setPropertyPrice] = React.useState<number | undefined>(undefined);
  const [repaymentValue, setRepaymentValue] = React.useState<number>(2);
  const [yearsValue, setYearsValue] = React.useState<number>(5);
  const [tableData, setTableData] = React.useState<ITableData | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const handleCreditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseFloat(e.target.value);
    setCreditInput(number);
  };

  const handlePropertyPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseFloat(e.target.value);
    setPropertyPrice(number);
    dispatch(setPropertyValue(number));
  };

  const handleRepaymentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value);
    setRepaymentValue(number);
  };

  const handleYearsRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value);
    setYearsValue(number);
  };

  const renderPercentSelection = () => {
    const options: JSX.Element[] = [];
    for (let i = 1; i <= 3; i++) {
      options.push(
        <div className={css(radioButton)} key={i}>
          <input
            type="radio"
            id={`percents-${i}`}
            name={`percents-${i}`}
            value={i}
            checked={repaymentValue === i}
            className={css(dnone)}
            onChange={handleRepaymentValue}>
          </input>
          <label
            htmlFor={`percents-${i}`}
            className={css(radioRatingLabel)}>
            <span className="label-text">
              {`${i}%`}
            </span>
            <div className="label-dot"></div>
          </label>
        </div>
      );
    }
    return options;
  }

  const renderYearsSelection = () => {
    const options: JSX.Element[] = [];
    for (let i = 5; i <= 15; i=i+5) {
      options.push(
        <div className={css(radioButton)} key={i}>
          <input
            type="radio"
            id={`years-${i}`}
            name={`years-${i}`}
            value={i}
            checked={yearsValue === i}
            className={css(dnone)}
            onChange={handleYearsRadio}>
          </input>
          <label
            htmlFor={`years-${i}`}
            className={css(radioRatingLabel)}>
            <div className="label-dot">
              {
                yearsValue === i ?
                <img src={checkIcon} alt="Check icon" className="check-icon" /> : ""
              }
            </div>
            <span className="label-text">
              {i} Jahre
            </span>
          </label>
        </div>
      );
    }
    return options;
  }

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!creditInput || !propertyPrice || !repaymentValue) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      getTableData();
    }, 2000);
  }, [
    creditInput,
    propertyPrice,
    repaymentValue
  ]);

  const getTableData = () => {
    const jsonBody: IjsonBody = {
      darlehensbetrag: creditInput,
      tilgung: repaymentValue,
      immoCost: propertyPrice
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 34d8ed0ddb7e9c4c805e5fd71e7d65473372167ecd2589e79304a818b3637c198f088d527d47dc6b39245de9a8fe043f29e11e4e0905e253faad109371bac279",
    };
    const data = jsonBody;
    const url =
      "https://europe-west3-eigenheimwunsch-de.cloudfunctions.net/calculateTable";

    axios({
      method: "POST",
      url,
      data,
      headers,
    })
      .then((response) => {
        setTableData(response.data);
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
      });
  };

  const scrollToForm = () => {
    let scroll_to = (document.getElementById("MortageForm") as HTMLElement).offsetTop;
    window.scrollTo(0, scroll_to);
  };

  const handleBackBtn = () => {
    sendMetrik("BackToThirdStep", "MortageForm", "BackButtonPressed", "");
    dispatch(setFormStep(3));
    scrollToForm();
  };

  const handleContinueBtn = () => {
    if (!tableData) return;
    const mortageData = tableData[`Jahre${yearsValue}`];
    sendMetrik("FourthStepPassed", "MortageForm", "NextButtonPressed", "");
    dispatch(setMortageDuration(yearsValue));
    dispatch(setMortageDetails(mortageData));
    dispatch(setFormStep(5));
  };

  return (
    <form className={css(firstStepForm, props.hidden ? dnone : dblock)}>
      <div className='container p-9'>
        <Stepper />
        <div className='form-wrapper ml-9'>
          <div>
            <h2 className={`h2 ${css(formHeading)}`}>
              Finanzierungsberechnung
            </h2>
          </div>
          <div className={css(bodyContent)}>
            <div className={css(inputsRow)}>
              <div className={css(inputWrapper)}>
                <img src={moneybagIcon} alt="Moneybag icon" />
                <span>Wie hoch soll Ihr Darlehen (Nettodarlehen) sein?</span>
                <input
                  type='number'
                  min="0"
                  value={creditInput === undefined ? '' : creditInput}
                  onChange={handleCreditInput}
                  placeholder="Euro"
                  id='creditInput'
                  name='creditInput'
                  className={css(customInput)}
                />
              </div>
              <div className={css(inputWrapper)}>
                <img src={houseIcon} alt="House icon" />
                <span>Was kostet die Immobilie?</span>
                <input
                  type='number'
                  min="0"
                  value={propertyPrice === undefined ? '' : propertyPrice}
                  onChange={handlePropertyPrice}
                  placeholder="Euro"
                  id='propertyPrice'
                  name='propertyPrice'
                  className={css(customInput)}
                />
              </div>
              <div className={css(inputWrapper)}>
                <img src={documentIcon} alt="Document icon" />
                <span>Wie hoch soll die Tilgung sein?</span>
                <div className={`${css(radioGroup)} percentage-selection`}>
                  {renderPercentSelection()}
                </div>
              </div>
            </div>
            {
              !isLoading ?
              <div className={css(tableSection)}>
                <p className="heading">Ihr Ergebnis</p>
                <p className="subheading">Wählen Sie die von Ihnen bevorzugte Variante aus:</p>
                <div className={css(tableWrapper)}>
                  <div className={`${css(radioGroup)} vertical year-selection`}>
                    {renderYearsSelection()}
                  </div>
                  <table>
                    <tbody>
                      <tr className="headings-row">
                        <td>
                          <span className="long-name">Festschreibung</span>
                          <span className="short-name"></span>
                        </td>
                        <td>Zins</td>
                        <td>Tilgung</td>
                        <td>Monatliche Rate</td>
                        <td>Restschuld</td>
                      </tr>
                      <tr className="bg-white">
                        <td>
                          <span className="long-name">5 Jahre</span>
                          <span className="short-name">5J</span>
                        </td>
                        <td>{tableData?.Jahre5.Zinsen}%</td>
                        <td>{tableData?.Jahre5.Tilgung}%</td>
                        <td>{tableData?.Jahre5.Annuitaet.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} EUR</td>
                        <td>{tableData?.Jahre5.Darlehensrest.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="long-name">10 Jahre</span>
                          <span className="short-name">10J</span>
                        </td>
                        <td>{tableData?.Jahre10.Zinsen}%</td>
                        <td>{tableData?.Jahre10.Tilgung}%</td>
                        <td>{tableData?.Jahre10.Annuitaet.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} EUR</td>
                        <td>{tableData?.Jahre10.Darlehensrest.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                      </tr>
                      <tr className="bg-white">
                        <td>
                          <span className="long-name">15 Jahre</span>
                          <span className="short-name">15J</span>
                        </td>
                        <td>{tableData?.Jahre15.Zinsen}%</td>
                        <td>{tableData?.Jahre15.Tilgung}%</td>
                        <td>{tableData?.Jahre15.Annuitaet.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} EUR</td>
                        <td>{tableData?.Jahre15.Darlehensrest.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              : ''
            }
          </div>
        </div>
        <div className={css(formButton)}>
          <button
              type='button'
              className='button empty'
              onClick={handleBackBtn}
          >
            Zurück
          </button>
          <button
            type='button'
            className='button'
            onClick={handleContinueBtn}
          >
            <span>Weiter</span>
            <span className="arrow-icon">&gt;</span>
          </button>
        </div>
      </div>
    </form>
  );
});
