import {
  Box,
  Container,
  Grid2,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Theme } from "../../config/Themes/Theme";

export function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Container
        sx={{
          paddingY: 8,
          color: "white",
        }}
      >
        <Grid2
          container
          spacing={4}
          sx={{ marginLeft: "50px" , marginRight:"50px", display: "flex", alignItems: "center" , justifyContent: "space-between"}}
          
        >
          {/* Coluna de Texto */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: "Lato, sans-serif",
                fontSize: {
                  xs: "24px",
                  md: "35px",
                },
                fontWeight: "700",
              }}
            >
              Olá, sou a Michele Kopper
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginTop: "20px",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
              }}
            >
              De designer e marketeira a Desenvolvedora Full Stack! <br />
              Minha paixão vai além do design - combino criatividade e
              tecnologia para construir soluções digitais inovadoras.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
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
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
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
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
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

          {/* Coluna da Imagem */}
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
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
