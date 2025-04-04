import { Box, Typography } from "@mui/material";
import banner from "../../../public/banner.jpg";

export function Banner() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%", 
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", 
        overflowX: "hidden", 
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "absolute",
          fontFamily: "Anonymous Pro",
          fontWeight: "800",
          fontSize: "45px",
          color: "#ffffff",
          zIndex: "2",
          textAlign: "center",
          lineHeight: "1.2",
        }}
      >
        Design e código<br></br> em perfeita harmonia
      </Typography>

      <Box
        sx={{
          position: "absolute",
          width: "100%", 
          height: "400px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: "1",
        }}
      />

      <img
        alt="banner"
        src={banner}
        style={{
          width: "100%", 
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}

