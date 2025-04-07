import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Theme } from "../../config/Themes/Theme";

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
      <Container sx={{ maxWidth: "100%", overflowX: "hidden", pt: 5, pb: 2 }}>
        {/* Chamada */}
        <Grid2 container alignItems="center">
          {/* Título */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "start",
              color: "#FF008E",
              ml: 6,
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontSize: "32px",
              fontWeight: "bold",
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
              ml: 3,
              mr: 6,
            }}
          />
        </Grid2>

        <Grid2
          container
          spacing={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
            alignItems: "stretch",
          }}
        >
          {training.map((training, index) => (
            <Grid2
              key={index}
              size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 450,
                  minHeight: 380,
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

                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {training.company}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    {training.date}
                  </Typography>

                  <Typography variant="body1">
                    {training.description}
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
