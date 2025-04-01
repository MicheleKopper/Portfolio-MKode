import {
  Box,
  Container,
  Grid2,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Theme } from "../config/Themes/Theme";

export function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 8,
          color: "white",
        }}
      >
        <Grid2
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Texto */}
          <Grid2 sx={{ flex: 1, maxWidth: "500px" }}>
            <Typography
              sx={{
                fontFamily: "Lato, sans-serif",
                fontSize: "35px",
                fontWeight: "700",
              }}
            >
              Olá, sou a Michele Kopper
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginTop: "20px",
              }}
            >
              De designer e marketeira a Desenvolvedora Full Stack! <br></br>{" "}
              Minha paixão vai além do design - combino criatividade e
              tecnologia para construir soluções digitais inovadoras.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                "&::before": {
                  content: '"•"',
                  marginRight: "8px",
                  fontSize: "15px",
                  color: "#FF008E",
                },
              }}
            >
              Focada em React.js, Node.js e arquitetura de software
            </Typography>

            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                "&::before": {
                  content: '"•"',
                  marginRight: "8px",
                  fontSize: "15px",
                  color: "#FF008E",
                },
              }}
            >
              Em busca de desafios para crescer como desenvolvedora
            </Typography>

            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                "&::before": {
                  content: '"•"',
                  marginRight: "8px",
                  fontSize: "15px",
                  color: "#FF008E",
                },
              }}
            >
              Criando interfaces intuitivas e estratégicas
            </Typography>
          </Grid2>

          {/* Imagem */}
          <Grid2 sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Box
              sx={{
                position: "relative",
                width: "500px",
                height: "300px",
                borderRadius: "150px 0 0 150px",
                background: "linear-gradient(90deg, #FF008E, #ffe600)",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end", 
                
              }}
            >
              <img
                src="img.png"
                alt="Ilustração de design"
                style={{
                  position: "absolute",
                  bottom: 0, 
                  width: "100%",
                  height: "auto",
                  
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
