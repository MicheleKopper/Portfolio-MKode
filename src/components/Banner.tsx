import { Box, Typography } from "@mui/material";
import banner from "../assets/banner.jpg";

export function Banner() {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        position={"absolute"}
        fontFamily={"Anonymous Pro"}
        fontWeight={"800"}
        fontSize={"45px"}
        color={"#ffffff"}
        zIndex={"2"}
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
        lineHeight={"1.2"}
      >
        Design e código<br></br> em perfeita harmonia
      </Typography>

      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "400px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: "1",
        }}
      />

      <img
        alt="banner"
        src={banner}
        style={{
          width: "100vw",
          height: "100%",
          objectFit: "cover",
        }}
      ></img>
    </Box>
  );
}
