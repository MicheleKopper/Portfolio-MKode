import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Theme } from "../config/Themes/Theme";

export function Training() {
  const training = [
    {
      position: "Full Stack Developer",
      company: "Growdev | EAD",
      date: "2025",
      description:
        "Formação intensiva em desenvolvimento Full Stack, abordando desde os fundamentos da programação até a construção de aplicações completas. O programa inclui front-end, back-end, banco de dados, cache, testes automatizados e deploy. Participação em projetos reais na fábrica de software da Growdev, adquirindo experiência prática em soluções contratadas por empresas.",
    },
    {
      position: "Tecnólogo em Marketing",
      company: "Universidade LaSalle | EAD",
      date: "2023",
      description:
        "Formação focada na aplicação estratégica do marketing, combinando teoria e prática em gestão, comunicação, vendas e integração de canais. O curso desenvolve habilidades para antecipação de tendências, inovação no mercado e construção de marcas de forma responsável e orientada para resultados.",
    },
  ];
  return (
    <ThemeProvider theme={Theme}>
      <Container sx={{ maxWidth: "100%", overflowX: "hidden" }}>
        {/* Chamada */}
        <Grid2 container alignItems="center">
          {/* Título */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "start",
              color: "#FF008E",
              marginLeft: "50px",
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontSize: "32px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            FORMAÇÃO
          </Typography>

          {/* Linha ao lado do título */}
          <Box
            sx={{
              flexGrow: 1,
              height: "3px",
              backgroundColor: "#121212",
              marginLeft: "25px",
              marginRight: "50px",
            }}
          />
        </Grid2>

        <Grid2
          container
          spacing={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          {training.map((training, index) => (
            <Grid2
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 450,
                  height: 380,
                  bgcolor: "#000000",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Lato", sans-serif',
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    {training.position}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    {training.company}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginBottom: "15px",
                    }}
                  >
                    {training.date}{" "}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      marginBottom: "10px",
                    }}
                  >
                    {training.description}{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
