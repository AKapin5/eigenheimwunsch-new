export const stepper = () => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    position: "relative",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    "> .dismiss-btn": {
      position: "absolute",
      top: "-4em",
      right: "0",
    },
  },
  "@media (max-width: 992px)": {
    "> .steps-container > span.step": {
      width: "3em",
      minHeight: "3em",
      marginBottom: ".5em",
      "> .step-circle": {
        width: "3em",
        minHeight: "3em",
      }
    }
  },
  "> .steps-container": {
    width: "31em",
    display: "flex",
  },
  "> .steps-container > span.step": {
    display: "inline-flex",
    flexBasis: "20%",
    position: "relative",
    cursor: "default",
    ":after": {
      content: "''",
      width: "45%",
      height: ".35em",
      display: "inline-block",
      position: "absolute",
      right: "0",
      top: "50%",
      backgroundColor: "#fff",
      "@media (max-width: 992px)": {
        display: "none"
      }
    },
    ":last-of-type:after": {
      content: "",
      display: "none"
    },
    "> .step-circle": {
      width: "3.5em",
      minHeight: "3.5em",
      border: ".35em solid #fff",
      borderRadius: "50%",
      textAlign: "center",
      "> .step-text": {
        fontSize: "36px",
        fontWeight: "600",
        color: "#265796",
        position: "relative",
        top: "25%",
        "@media (max-width: 576px)": {
          fontSize: "26px",
        }
      },
    },
  },
  "> .steps-container > span.step.step-current > span.step-circle": {
    backgroundColor: "#fff",
  },
  "> .steps-container > span.step.step-past": {
    cursor: "pointer",
    ":after": {
      backgroundColor: "#265796",
    },
    "> .step-circle": {
      backgroundColor: "#265796",
      borderColor: "#265796",
      "> .step-text": {
        color: "#e3ecdc",
      },
    },
  },
  "> .dismiss-btn": {
    border: "none",
    background: "transparent",
  },
});

export const firstStepForm = () => ({
  minHeight: "55em",
  backgroundColor: "#eef4ff",
  padding: "120px 0px",
  marginBottom: "80px",
  "@media (max-width: 576px)": {
    minHeight: "45em",
    paddingBottom: "30px",
    "> .container": {
      paddingRight: "1em !important",
      paddingLeft: "1em !important",
      "&.p-9": {
        paddingRight: ".5em !important",
        paddingLeft: ".5em !important",
      },
      "> .form-wrapper": {
        minHeight: "25em",
      }
    },
  },
  "> .container": {
    height: "100%",
  },
  "> .container > .form-wrapper": {
    minHeight: "30em",
    paddingTop: "3em",
    "&.ml-9": {
      marginLeft: "1em",
      "@media (max-width: 576px)": {
        marginLeft: ".25em",
      }
    }
  },
});

export const formHeading = () => ({
  textAlign: "start",
  marginBottom: ".75em",
  fontSize: '36px',

  "@media (max-width: 768px)": {
    fontSize: "26px",
  },

  "@media (max-width: 576px)": {
    fontSize: "18px",
  },

  "&.mb-54": {
    marginBottom: "1.5em",
  },
  "&.mb-108": {
    marginBottom: "3em",
  }
});

export const formLabel = () => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "> .DatePicker": {
    width: "100%",
  },
});

export const formLabelText = () => ({
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "5px",
  display: "block",
});

export const formInput = () => ({
  width: "100%",
  display: "block",
  border: "none",
  borderBottom: "1px solid #bebebe",
  padding: "10px",
  fontSize: "16px",
  "::-webkit-outer-spin-button, ::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: "0",
  },
  "[type=number]": {
    "-moz-appearance": "textfield",
  },
});

export const formButton = () => ({
  marginTop: "5em",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  "@media (max-width: 576px)": {
    marginTop: "3em",
    justifyContent: "center",
    "> .button": {
      fontSize: "13px",
      height: "fit-content",
      padding: "12px !important",
      "> .arrow-icon": {
        marginTop: 'unset',
        fontSize: "1.25em",
      },
      "&.button-big": {
        flex: "2 0 auto",
      }
    }
  },
  "> .button": {
    minWidth: "10em",
    minHeight: "3em",
    fontSize: "14px",
    lineHeight: "1.5em",
    fontWeight: "600",
    padding: "12px 30px !important",
    borderRadius: "12px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#265796",
    "&:disabled": {
      color: "#2657968c",
    },
    "> .arrow-icon": {
      fontSize: "1.5em",
      minHeight: "unset",
      minWidth: "unset",
      marginTop: 'unset',
      paddingTop: ".1em",
      border: "none",
      marginLeft: ".25em",
    },
  },
  "> .empty": {
    backgroundColor: "transparent !important",
    color: "#265796",
    border: "1px solid #8ea5ca",
    marginRight: "10px",
    justifyContent: "center",
    "@media (max-width: 576px)": {
      marginBottom: "10px",
    },
  },
});

export const formErrorAlert = () => ({
  backgroundColor: "#cfe2ff",
  color: "#084298",
  padding: "12px 30px",
  position: "fixed",
  bottom: "30px",
  left: "50%",
  zIndex: "-1",
  maxWidth: "700px",
  transform: "translateX(-50%)",
  borderRadius: "6px",
  marginTop: "10px",
  textAlign: "center",
  opacity: "0",
  transition: "all .25s ease-in",
  width: "100%",
  "> img": {
    maxWidth: "20px",
    marginRight: "5px",
  },
  "&.active": {
    opacity: "1",
    bottom: "50px",
    zIndex: "100",
  },
  "@media (max-width: 992px)": {
    maxWidth: "500px",
  },
  "@media (max-width: 768px)": {
    maxWidth: "380px !important",
  },
  "@media (max-width: 576px)": {
    maxWidth: "280px !important",
    fontSize: "14px",
    padding: "8px 20px",
  },
});

export const formErrorAlertNoFixed = () => ({
  position: 'static',
  left: '0',
  display: 'block',
  marginBottom: '30px',
  transform: 'translateX(0)',
  marginLeft: 'auto',
  marginRight: 'auto'
});

export const buttonBack = () => ({
  marginRight: "30px",
  backgroundColor: "transparent !important",
  border: "1px solid #779eed",
  color: "#779eed",
  ":hover": {
    color: "#779eed",
  },
});

export const radioField = () => ({
  display: "flex",
});

export const radioInput = () => ({
  marginRight: "20px",
  marginBottom: "30px",
  "> input": {
    display: "none",
    ":checked + label": {
      borderColor: "#779eed",
    },
  },
  "> label": {
    fontSize: "16px",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #bebebe",
    minWidth: "65px",
    cursor: "pointer",
  },
});

export const formSubHeading = () => ({
  textAlign: "center",
  fontSize: "24px",
  marginBottom: "50px",
  marginTop: "20px",
  fontWeight: "500",
  color: "#155797",
});

export const formDescription = () => ({
  color: "#265796",
  fontSize: "18px",
  fontWeight: "300",
  marginBottom: "1.5em",
  "@media (max-width: 576px)": {
    fontSize: "14px",
  },
});

export const finalMortageNumber = () => ({
  maxWidth: "14.25em",
  height: "2.75em",
  marginBottom: "50px",
  padding: ".5em 0 0 .75em",
  color: "#265796",
  backgroundColor: "#fff",
  fontSize: "24px",
  fontWeight: 300,
  display: "block",
  textAlign: "start",
  borderRadius: "8px",
  "@media (max-width: 576px)": {
    marginBottom: "1em",
  },
});

export const fieldsHeading = () => ({
  fontSize: "18px",
  color: "#343347",
  marginBottom: "10px",
  fontWeight: "500",
  textAlign: "center",
});

export const formStepInfo = () => ({
  textAlign: "center",
  color: "#155797",
  fontSize: "22px",
  "> span": {
    fontWeight: "600",
  },

  "@media (max-width: 576px)": {
    fontSize: "18px",
    marginBottom: "25px",
  },
});

export const customInput = () => ({
  fontSize: "14px",
  marginTop: "2.5em",
  minWidth: "17em",
  minHeight: "2.5em",
  padding: "0 .75em",
  border: "1px solid #8ea5ca",
  borderRadius: "8px !important",
  color: "#265796",
  "&.has-error": {
    backgroundColor: "#fff6f6",
    border: "1px solid #df6969",
  },
});

export const rangeInputContainer = () => ({
  width: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  flexBasis: "65%",
  "@media screen and (max-width: 576px)": {
    "> div > .track-background": {
      width: "90% !important",
    },
  },
  "@media screen and (max-width: 767px)": {
    "> div:nth-child(3)": {
      width: "94% !important",
      paddingLeft: "0 !important",
    },
    "> div > .track-background": {
      width: "92% !important",
      "&:before": {
        width: "115%",
        left: "-1em",
      },
    }
  },
  "@media screen and (max-width: 410px)": {
    width: "97%",
  },
  "> div > .track-background": {
    width: "80% !important",
    marginLeft: "1em",
    "&:before": {
      content: "''",
      width: "109%",
      height: "5px",
      display: "flex",
      position: "relative",
      left: "-1.5em",
      backgroundColor: "#8ea5ca !important",
      borderRadius: "4px",
    },
    "> div": {
      position: "relative",
      top: "-.25em",
    },
  },
  "> span.range-input-text": {
    fontSize: "14px",
    lineHeight: "1.5em",
    fontWeight: "400",
    color: "#265796",
  },
});

export const rangeInputLabels = () => ({
  fontSize: "12px",
  width: "87%",
  marginBottom: "1em",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  fontWeight: "400",
  color: "#265796",
  "@media screen and (max-width: 576px)": {
    width: "unset",
  },
  "@media screen and (max-width: 767px)": {
    marginTop: "2em",
    width: "100%",
    "&.labels": {
      display: "none"
    },
    "&.short-labels": {
      width: "95%",
      display: "flex",
      alignSelf: "flex-end",
      "> span": {
        flex: "unset",
        "&:first-of-type": {
          paddingRight: "1em",
        }
      }
    }
  },
  "&.short-labels": {
    display: "none",
    "> span": {
      width: "15%",
    }
  },
  "> span": {
    width: "10%",
    flex: "1 1 auto",
    textAlign: "center",
    "&:first-of-type": {
      width: "9%",
      "@media screen and (max-width: 410px)": {
        width: "7%",
      },
    }
  }
});

export const rangeSliderTooltip = () => ({
  fontSize: '14px',
  width: "8em",
  position: 'absolute',
  top: '3em',
  color: '#265796',
  padding: '4px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  textAlign: "center",
  "&:before": {
    height: "1em",
    width: "1em",
    content: "''",
    position: "absolute",
    top: "-.5em",
    left: "3.5em",
    backgroundColor: "#fff",
    transform: "rotate(45deg)",
  }
});

export const rangeNumbers = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "12px",
  marginBottom: "20px",
  marginRight: "-4%",

  "> span": {
    padding: "0",
    textAlign: "center",
    flexBasis: "8%",

    "@media (max-width: 1024px)": {
      fontSize: "16px",
    },
  },

  "> span:first-child": {
    flexBasis: "4%",
    textAlign: "left",
  },


  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const radioGroup = () => ({
  minWidth: "7em",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-around",
  flex: "1 0 auto",
  "@media (max-width: 768px)": {
    width: "80%",
    marginLeft: "unset",
    justifyContent: "space-between",
  },
  "&.vertical": {
    flexFlow: "column nowrap",
  },
  "&.ml-36": {
    marginLeft: "2em",
  },
  "&.initial-height": {
    flex: "unset",
    marginTop: "1.5em",
  },
  "> div > input": {
    ":checked + label": {
      "> .label-text": {
        color: "#265796",
      },
      "> .label-dot": {
        border: "3px solid #fff",
        backgroundColor: "#265796",
        cursor: "default"
      },
    },
  }
});

export const radioButton = () => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
});

export const radioRatingLabel = () => ({
  fontSize: "12px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  minWidth: "6em",
  "@media screen and (max-width: 576px)": {
    fontSize: "10px",
  },
  "> .label-text": {
    fontSize: "inherit",
    marginLeft: "1em",
    fontWeight: "600",
    color: "#8ea5ca",
    "@media screen and (max-width: 576px)": {
      fontSize: "10px",
    },
    "@media screen and (max-width: 991px)": {
      position: "unset !important",
      display: "inline-block !important",
    },
    "@media screen and (min-width: 991px)": {
      "&.visible": {
        color: "#265796 !important",
      },
    },
  },
  "> .label-dot": {
    height: "32px",
    width: "32px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "#fff",
    cursor: "pointer"
  },
});

export const dnone = () => ({
  display: "none",
});

export const dblock = () => ({
  display: "block",
});

export const blueArrowSection = () => ({
  display: "flex",
})
