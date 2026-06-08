import { FelaStyle } from "react-fela";

export const bodyContent: FelaStyle<{}> = () => ({
  marginLeft: "1em",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "@media (max-width: 768px)": {
    marginLeft: "unset",
    flexDirection: "column",
    "> img": {
      marginLeft: "1em",
    }
  },
});

export const formInfoContainer: FelaStyle<{}> = () => ({
  marginLeft: "3em",
  width: "100%",
  "@media (max-width: 768px)": {
    marginTop: "1em",
    marginLeft: "unset",
  },
});

export const inputsContainer: FelaStyle<{}> = () => ({
  width: "80%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  "@media (max-width: 992px)": {
    width: "unset",
    flexDirection: "column",
  },
});

export const inputsRow: FelaStyle<{}> = () => ({
  width: "50%",
  marginTop: "1em",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  "@media (max-width: 992px)": {
    width: "unset",
    marginTop: "unset",
    "&:first-of-type": {
      marginTop: "1em",
    },
  },
  "@media (max-width: 768px)": {
    marginTop: "0",
    flexDirection: "column",
  },
});

export const textAreaWrapper: FelaStyle<{}> = () => ({
  width: "70%",
  display: "flex",
  flexFlow: "column nowrap",
  "> span": {
    fontSize: "14px",
    color: "#265796",
  },
  "> textarea": {
    marginTop: "unset"
  }
});

export const customInput: FelaStyle<{}> = () => ({
  fontSize: "14px",
  minWidth: "75%",
  minHeight: "2.5em",
  marginTop: "1.5em",
  padding: "0 .75em",
  border: "1px solid #8ea5ca",
  borderRadius: "8px !important",
  color: "#265796",
  "&::-webkit-input-placeholder": {
    color: "#8ea5ca",
  },
  "@media (max-width: 768px)": {
    width: "100%",
  }
});

export const formLabel: FelaStyle<{}> = () => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  "> .DatePicker": {
    width: "100%",
  },
});

export const formDate: FelaStyle<{}> = () => ({
  display: "block",
  textAlign: "left",
  backgroundColor: '#fff',
  "> span > div": {
    bottom: 'unset !important'
  },
  "> .react-date-picker__wrapper": {
    border: 'none'
  },
});

export const conf: FelaStyle<{}> = () => ({
  display: "flex",
  marginTop: "1em",
  "> .conf-check": {
    flexBasis: "5%",
    "@media screen and (max-width: 768px)": {
      flexBasis: "10%",
    },
    "@media screen and (max-width: 480px)": {
      flexBasis: "12% !important",
      marginTop: ".25em"
    },
    "> input": {
      display: "none",
      ":checked + label > span:first-child": {
        background: "#155797",
        borderColor: "#155797",
        "> svg": {
          strokeDashoffset: 0,
        },
      },
    },
    "> label > .label-dot": {
      height: "24px",
      width: "24px",
      position: "relative",
      border: "none",
      borderRadius: "50%",
      backgroundColor: "#fff",
      cursor: "pointer",
      "> .check-icon": {
        position: "absolute",
        left: ".15em",
      }
    },
  },

  "> label > .conf-text": {
    fontSize: "14px",
    marginLeft: ".5em",
    color: "#265796",
    fontWeight: "300",
    "@media screen and (max-width: 480px)": {
      fontSize: "12px",
    },
  },

  "@media (max-width: 576px)": {
    "> .conf-check": {
      flexBasis: '6% !important'
    },
    "> label > .conf-text": {
      fontSize: '12px !important'
    }
  }
});

export const radioButtonContainer: FelaStyle<{}> = () => ({
  marginLeft: ".25em",
  display: "flex",
  flexFlow: "row nowrap",
  color: "#265796",
  "@media (max-width: 768px)": {
    width: "80%",
    margin: "1em 0",
    flexDirection: "column",
  },
  "&.gender-radio": {
    width: "30%",
    "@media (max-width: 992px)": {
      width: "50%",
    },
    "@media (max-width: 768px)": {
      width: "60%",
    }
  },
  "&.employment-radio": {
    "> div": {
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      "@media (max-width: 768px)": {
        flexFlow: "column nowrap",
      },
      "> div": {
        "&:first-of-type": {
          width: "40%"
        },
        width: "30%",
        "@media (max-width: 768px)": {
          marginBottom: ".25em",
          width: "100% !important"
        }
      },
    },
    "@media (max-width: 768px)": {
      width: "60%",
    }
  },
  "&.mb-72": {
    marginBottom: "4em",
  }
});

export const customDatepicker: FelaStyle<{}> = () => ({
  fontSize: "14px",
  marginTop: "1.5em !important",
  "&.valid": {
    "> .react-date-picker__wrapper": {
      padding: ".25em 0 0 0",
      "&::before": {
        content: "''",
      },
    },
  },
  "&.react-date-picker--open > .react-date-picker__wrapper": {
    "&::before": {
      content: "''",
    },
  },
  "> .react-date-picker__wrapper": {
    "&::before": {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: ".5em",
      left: ".75em",
      content: "'Geburtsdatum'",
      pointerEvents: "none",
    },
    "&::after": {
      fontSize: "20px",
      width: "10px",
      height: "10px",
      position: "absolute",
      top: ".15em",
      right: ".75em",
      content: "'⌄'",
      pointerEvents: "none",
    },
    width: "100%",
    fontSize: "14px",
    lineHeight: "21px",
    padding: "0 0 0 1em",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "inherit",
    "> .react-date-picker__inputGroup": {
      "> input": {
        color: "#265796",
      },
      "> .react-date-picker__inputGroup__leadingZero": {
        color: "#265796",
      },
    },
    "> .react-date-picker__button": {
      height: "100%",
      width: "20%",
      fontSize: "2em",
      marginTop: "-.15em",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      color: "#265796",
    },
  },
});

export const cbx: FelaStyle<{}> = () => ({
  margin: "auto",
  userSelect: "none",
  cursor: "pointer",
  "> span": {
    display: "inline-block",
    verticalAlign: "middle",
    transform: "translate3d(0, 0, 0)",
    ":first-child": {
      position: "relative",
      width: "18px",
      height: "18px",
      borderRadius: "3px",
      transform: "scale(1)",
      verticalAlign: "middle",
      border: "1px solid #9098a9",
      transition: "all 0.2s ease",
      boxShadow: "0px 1px 15px 1px rgba(34, 60, 80, 0.2)",
      "> svg": {
        position: "absolute",
        top: "3px",
        left: "2px",
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "16px",
        strokeDashoffset: "16px",
        transition: "all 0.3s ease",
        transitionDelay: "0.1s",
        transform: "translate3d(0, 0, 0)",
      },
      ":before": {
        content: '""',
        width: "100%",
        height: "100%",
        background: "#155797",
        display: "block",
        transform: "scale(0)",
        opacity: "1",
        borderRadius: "50%",
      },
    },
    ":last-child": {
      paddingLeft: "8px",
    },
  },
  ":hover > span:first-child": {
    borderColor: "#155797",
  },
});
