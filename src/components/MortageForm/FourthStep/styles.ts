import { FelaStyle } from "react-fela";

export const bodyContent: FelaStyle<{}> = () => ({
  marginLeft: "1em",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "@media (max-width: 768px)": {
    marginLeft: "unset",
    flexDirection: "column",
  },
});

export const inputsRow: FelaStyle<{}> = () => ({
  width: "93%",
  marginTop: "1em",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    marginTop: "0",
    flexDirection: "column",
  },
});

export const inputWrapper: FelaStyle<{}> = () => ({
  width: "20em",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: "#265796",
  "&:last-of-type": {
    width: "unset",
  },
  "@media (max-width: 768px)": {
    width: "100%",
    marginTop: "2em",
    "&:first-child": {
      marginTop: "0",
    },
    "> img": {
      height: "4em",
      margin: "1em",
    },
  },
  "> img": {
    height: "5.5em",
    marginBottom: "1em",
  },
  "> span": {
    fontSize: "14px",
  },
  "> .percentage-selection": {
    fontSize: "14px",
    height: "0",
    marginTop: "4em",
    "> div": {
      marginLeft: ".5em",
      "> label": {
        flexFlow: "column nowrap",
        alignItems: "flex-start",
        "> .label-text": {
          marginBottom: "1em",
          marginLeft: ".65em",
        },
      }
    }
  }
});

export const customInput: FelaStyle<{}> = () => ({
  fontSize: "14px",
  minWidth: "82%",
  minHeight: "2.5em",
  marginTop: "1.5em",
  padding: "0 .75em",
  border: "1px solid #8ea5ca",
  borderRadius: "8px !important",
  color: "#265796",
});

export const tableSection: FelaStyle<{}> = () => ({
  fontSize: "14px",
  width: "100%",
  marginTop: "3em",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "flex-start",
  color: "#265796",
  "@media (max-width: 768px)": {
    marginTop: "5em",
  },
  "> .heading": {
    fontWeight: "500"
  },
});

export const tableWrapper: FelaStyle<{}> = () => ({
  display: "flex",
  flexFlow: "row nowrap",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    "> .year-selection": {
      width: "90%",
      marginTop: "1em",
      marginLeft: "1em",
      alignItems: "baseline",
      "> div": {
        width: "100%",
        borderRadius: "8px",
        "> label": {
          "> .label-text": {
            width: "75%",
            marginLeft: "2em",
            padding: "0 2em",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }
        }
      }
    }
  },
  "> .year-selection": {
    minWidth: "unset",
    marginTop: "2em",
    justifyContent: "flex-start",
    alignItems: "center",
    "> div": {
      marginTop: ".25em",
      "> input:checked + label": {
        "> .label-dot": {
          position: "relative",
          border: "3px solid #fff",
          backgroundColor: "#fff",
          cursor: "default",
          "> img": {
            position: "absolute",
            top: "-.5em",
            display: "flex",
          }
        },
      },
      "> label": {
        minWidth: "4em",
        "> .label-dot": {
          height: "24px",
          width: "24px",
        },
        "> .label-text": {
          display: "none !important",
          "@media (max-width: 768px)": {
            display: "inline-block !important"
          }
        },
      },
    },
  },
  "> table": {
    width: "100%",
    "@media (max-width: 768px)": {
      fontSize: "12px",
      marginTop: "2em",
    },
    "> tbody > tr:first-of-type > td": {
      fontSize: "11px",
      lineHeight: "1.5em",
    },
    "> tbody > tr": {
      "&.headings-row > td": {
        "@media (max-width: 768px)": {
          verticalAlign: "baseline",
        }
      },
      "> td": {
        width: "15%",
        "> span.short-name": {
          display: "none",
          fontWeight: "500",
        },
        "> span.long-name": {
          display: "inline",
        },
        "@media (max-width: 768px)": {
          // width: "12%",
          "> span.short-name": {
            display: "inline",
          },
          "> span.long-name": {
            display: "none",
          },
        },
      },
    },
    "> tbody > tr > td:first-child": {
      width: "20%",
      paddingLeft: "3em",
      borderRadius: "8px 0 0 8px",
      "@media (max-width: 768px)": {
        width: "12%",
        paddingLeft: ".5em",
      }
    },
    "> tbody > tr > td:last-child": {
      borderRadius: "0 8px 8px 0",
    },
    "> tbody > .bg-white": {
      backgroundColor: "#fff",

    }
  },
});
