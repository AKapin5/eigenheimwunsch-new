import { FelaStyle } from "react-fela";

export const bodyContent: FelaStyle<{}> = () => ({
  marginLeft: "1em",
  width: "80%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "@media (max-width: 768px)": {
    width: "85%",
    marginLeft: "unset",
    flexDirection: "column",
  },
});

export const inputsContainer: FelaStyle<{}> = () => ({
  width: "50%",
  marginLeft: "3em",
  "@media (max-width: 768px)": {
    width: "100%",
    marginLeft: "unset"
  },
});

export const selectContainer: FelaStyle<{}> = () => ({
  height: "2em",
  width: "60%",
  margin: "1em 0 2.5em 0",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  "&:last-of-type": {
    marginTop: "2em",
    "@media (max-width: 768px)": {
      marginBottom: "unset",
    }
  },
  "@media (max-width: 768px)": {
    width: "unset",
    marginTop: "2em",
  },
});

export const customSelect: FelaStyle<{}> = () => ({
  "&.has-error": {
    backgroundColor: "#fff6f6",
    border: "1px solid #df6969",
    borderRadius: "8px"
  },
  "> .customSelect__control": {
    fontSize: "14px",
    height: "2em",
    lineHeight: "21px",
    borderRadius: "9px",
    "&.customSelect__control--menu-is-open": {
      borderRadius: "9px 9px 0 0",
      border: "1px solid #8ea5ca",
      borderBottom: "none",  
    },
    "> .customSelect__value-container > .customSelect__placeholder": {
      color: "#265796",
    },
  },
  "> .customSelect__menu": {
    height: "5em",
    marginTop: "0",
    boxShadow: "none !important",
    border: "1px solid #8ea5ca",
    borderTop: "none",
    borderRadius: "0 0 9px 9px",
    "> .customSelect__menu-list": {
      fontSize: "14px",
      lineHeight: "1.5em",
      height: "inherit",
    }
  },
});

export const radioButtonContainer: FelaStyle<{}> = () => ({
  marginLeft: ".25em",
  display: "flex",
  flexFlow: "row nowrap",
  color: "#265796",
  "@media (max-width: 768px)": {
    width: "80%",
    flexDirection: "column",
  },
  "&.mb-72": {
    marginBottom: "4em",
  }
});
