import { createTheme } from "@mui/material";

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    fontFamily: '"Lato", sans-serif',

    body1: {
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "25px",
      color: "white",
    },
    subtitle1: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#505050",
    },
  },
});
