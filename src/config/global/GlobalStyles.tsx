import { GlobalStyles } from "@mui/material";
import { CSSObject } from "@emotion/react";
import "@fontsource/anonymous-pro/400.css";
import "@fontsource/anonymous-pro/700.css";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/big-shoulders-display/100.css";
import "@fontsource/big-shoulders-display/200.css";
import "@fontsource/big-shoulders-display/300.css";
import "@fontsource/big-shoulders-display/400.css";
import "@fontsource/big-shoulders-display/500.css";
import "@fontsource/big-shoulders-display/600.css";
import "@fontsource/big-shoulders-display/700.css";
import "@fontsource/big-shoulders-display/800.css";
import "@fontsource/big-shoulders-display/400.css";



const styles: Record<string, CSSObject> = {
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: "#000000",
    height: "100vh",
    fontFamily: '"Lato", sans-serif',
  },

  h1: {
    fontFamily: '"Big Shoulders Display", sans-serif',
  },

  h2: {
    fontFamily: '"Big Shoulders Display", sans-serif',
  },

  h3: {
    fontFamily: '"Big Shoulders Display", sans-serif',
  },

  h4: {
    fontFamily: '"Big Shoulders Display", sans-serif',
  },

  h5: {
    fontFamily: '"Big Shoulders Display", sans-serif',
  },

};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
