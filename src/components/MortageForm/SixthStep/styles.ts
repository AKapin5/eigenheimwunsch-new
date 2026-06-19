import { FelaStyle } from "react-fela";

export const lastStep: FelaStyle<{}> = () => ({
  "> .container > .form-wrapper": {
    marginTop: "5em",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      marginTop: "unset"
    }
  }
});

export const bodyContent: FelaStyle<{}> = () => ({
  marginLeft: "1em",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "@media (max-width: 768px)": {
    marginLeft: "unset",
    flexDirection: "column",
    alignItems: "center",
    "> .image-wrapper > img": {
      width: "5.5em",
    }
  },
});

export const finalInfoContainer: FelaStyle<{}> = () => ({
  fontSize: "14px",
  margin: "2em 3em",
  maxWidth: "45em",
  position: "relative",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
  color: "#265796",
  "@media screen and (max-width: 768px)": {
    alignItems: "center",
    margin: "2em .5em",
    textAlign: "center",
  },
  "> .heading-wrapper": {
    fontSize: "36px",
    "@media screen and (max-width: 768px)": {
      fontSize: "24px",
      lineHeight: "1.5em",
      textAlign: "center",
    },
    "> .h2": {
      fontWeight: "600",
      lineHeight: "1.75em",
    },
  },
  "> .text-wrapper": {
    "@media screen and (max-width: 768px)": {
      marginTop: "1em",
    },
    "> p": {
      fontWeight: "400",
      lineHeight: "1.5em",
      "> span": {
        fontWeight: "600",
      },
    }
  },

  "> .info-wrapper": {
    width: "75%",
    marginTop: "2em",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    "@media screen and (max-width: 576px)": {
      alignSelf: "flex-start",
      "> .info-text-wrapper": {
        maxHeight: "unset !important",
        "> .info-cell": {
          marginTop: "2.5em",
          "&:first-of-type": {
            marginTop: "unset !important",
          },
        },
      }
    },
    "> .info-heading": {
      margin: "2em 0",
      fontWeight: "400",
      lineHeight: "1.5em",
    },
    "> .info-text-wrapper": {
      width: "100%",
      maxHeight: "15em",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      lineHeight: "1.5em",
      "> .info-cell": {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        "&:nth-of-type(2n)": {
          marginTop: "2.5em",
        },
        "> strong": {
          marginBottom: ".5em",
        }
      }
    }
  },
});
