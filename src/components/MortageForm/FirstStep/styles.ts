import { FelaStyle } from 'react-fela';

export const mortageMessage: FelaStyle<{}> = () => ({
  fontWeight: '500',
  marginBottom: '5px',
  "> p": {
    marginBottom: '10px'
  },
  "> span": {
    color: '#779eed',
    textAlign: 'center',
    display: 'block',
    fontSize: '30px',
    textTransform: 'uppercase'
  }
});

export const bodyContent: FelaStyle<{}> = () => ({
  marginLeft: "1em",
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "flex-end",
  "@media (max-width: 992px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "@media (max-width: 767px)": {
    marginLeft: "unset",
  }
});

export const inputContainer: FelaStyle<{}> = () => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  "> label": {
    "@media (max-width: 992px)": {
      alignItems: "flex-start",
      "> img": {
        marginLeft: ".5em",
      }
    }
  }
});

export const rangeSliderContainer: FelaStyle<{}> = () => ({
  width: "65%",
  marginBottom: ".75em",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  "@media (max-width: 992px)": {
    marginTop: "2em",
    width: "100%",
  }
});

export const nextStepButton: FelaStyle<{}> = () => ({
  "@media (max-width: 576px)": {
    justifyContent: "flex-end"
  }
});
