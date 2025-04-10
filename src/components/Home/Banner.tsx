import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
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
        overflow: "hidden", // Evita scroll vertical local
      }}
    >
      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Big Shoulders Display", sans-serif',
            fontWeight: "600",
            fontSize: { xs: "28px", md: "45px" },
            color: "#ffffff",
            textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
            lineHeight: "1.2",
          }}
        >
          DESIGN E CÓDIGO
          <br />
          EM PERFEITA HARMONIA
        </Typography>
      </motion.div>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9))",
          backdropFilter: "blur(2px)",
          zIndex: 1,
        }}
      />

      {/* Imagem de fundo */}
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
