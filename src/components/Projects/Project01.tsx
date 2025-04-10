import { Button, Grid2, Stack, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Navbar } from "../Home/Navbar";
import { Footer } from "../Home/Footer";

export function Project01() {
  const projects = [
    {
      title: "Visão Geral",
      description:
        "O cliente Limpa Tubo, especializado em dedetização e desentupimento, precisava de uma landing page estratégica para rodar campanhas no Google Ads. Como todos os contatos vinham dos anúncios, cada detalhe foi planejado para atrair, engajar e converter visitantes em clientes.",
    },
    {
      title: "Desafio",
      description:
        "O principal desafio foi desenvolver uma landing page altamente persuasiva e responsiva, que estimulasse os visitantes a clicarem no botão de WhatsApp para solicitar orçamentos. Além disso, era essencial otimizar o site para garantir alta velocidade de carregamento e bom desempenho nas campanhas de Google Ads, com foco em SEO.",
    },
    {
      title: "Solução",
      description:
        "Design intuitivo e persuasivo, garantindo fácil navegação\nFront-end em React, para velocidade e interatividade\nBack-end em Node.js, eficiente na gestão de leads\nCTAs estratégicas para aumentar a conversão\nResponsividade para funcionar em qualquer dispositivo",
    },
    {
      title: "Resultados",
      description:
        "Aumento na taxa de conversão dos visitantes para clientes\nRedução do tempo de carregamento da página\nMelhor desempenho nas campanhas pagas no Google Ads",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Box sx={{ height: { xs: "56px", sm: "64px" } }} />
      
      <Container
        sx={{
          maxWidth: "100%",
          overflowX: "hidden",
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {/* Título */}
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mt: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FF008E",
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: "bold",
            }}
          >
            LANDING PAGE OTIMIZADA PARA CONVERSÃO
          </Typography>
        </Grid2>

        {/* Cards */}
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
          {projects.map((project, index) => (
            <Grid2
              key={index}
              size={{ xs: 12, sm: 10, md: 6, lg: 4 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  maxWidth: 450,
                  height: "100%",
                  bgcolor: "#000000",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "white",
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  {["Solução", "Resultados"].includes(project.title) ? (
                    project.description.split("\n").map((item, index) => (
                      <Box
                        key={index}
                        component="div"
                        sx={{
                          display: "flex",
                          alignItems: "start",
                          "&::before": {
                            content: '"•"',
                            marginRight: "8px",
                            fontSize: "15px",
                            color: "#FF008E",
                            lineHeight: 1.5,
                          },
                        }}
                      >
                        <Typography variant="body1" color="white">
                          {item}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body1" color="white">
                      {project.description}
                    </Typography>
                  )}
                </CardContent>

                {index < 2 && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#121212",
                      mt: "auto",
                    }}
                  />
                )}
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Imagens do projeto */}
        <Grid2 container spacing={4} justifyContent="center" mt={6}>
          {["mockup 01.png", "mockup 02.png"].map((src, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 8 }}>
              <Box display="flex" justifyContent="center">
                <img
                  src={src}
                  alt={`Mockup ${index + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>

        {/* Link do Projeto */}
        <Box sx={{ textAlign: "center", mt: 6, mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "20px", md: "25px" },
              fontWeight: 600,
              color: "white",
              fontFamily: '"Big Shoulders Display", sans-serif',
            }}
          >
            ACESSE O PROJETO
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              mt: 2,
              display: "flex",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              endIcon={<LanguageIcon />}
              href="https://limpatubo.com.br/dedetizadora/"
              target="_blank"
              aria-label="Ver projeto da landing page"
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: "14px",
                fontWeight: "500",
                backgroundColor: "#FF008E",
                color: "white",
                px: 3,
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#D00070" },
              }}
            >
              Landing Page
            </Button>

            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              href="https://github.com/MicheleKopper/LP-Limpa-Tubo"
              target="_blank"
              aria-label="Ver repositório no GitHub"
              sx={{
                fontFamily: '"Lato", sans-serif',
                fontSize: "14px",
                fontWeight: "500",
                backgroundColor: "#FF008E",
                color: "white",
                px: 3,
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "#D00070" },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
