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
