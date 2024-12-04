import { GlobalStyles } from "@mui/material";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

const styles = {
  "*": {
    margin: 0,
    padding: 0,
    background: "blue",
    fontFamily: "Lato, sans-serif",
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
