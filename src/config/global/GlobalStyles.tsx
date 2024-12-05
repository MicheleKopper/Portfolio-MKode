import { GlobalStyles } from "@mui/material";
import { CSSObject } from "@emotion/react";
import "@fontsource/anonymous-pro/400.css";
import "@fontsource/anonymous-pro/700.css";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

const styles: Record<string, CSSObject> = {
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Anonymous Pro, monospace, Lato, sans-serif",
  },

  body: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
