import { Button, Grid2, Stack, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export function Project04() {
  const projects = [
    {
      title: "Visão Geral",
      description:
        "Este projeto tem objetivo de consumir e exibir dados da API pública de Rick and Morty. A aplicação apresenta os personagens da série de forma dinâmica e interativa, utilizando tecnologias como HTML, CSS, Bootstrap e JavaScript com Axios para requisições HTTP.",
    },
    {
      title: "Desafio",
      description:
        "O principal desafio foi consumir a API de Rick and Morty de forma eficiente e exibir os dados de maneira organizada e interativa. Além disso, implementar a paginação e os modais responsivos exigiu atenção especial ao tratamento do DOM e à separação adequada entre estrutura, estilo e lógica.",
    },
    {
      title: "Solução",
      description:
        "Cards de personagens que exibem imagem, nome, espécie, status e localização.\nNavegação funcional entre as páginas da API.\nModal interativo, que mostra mais detalhes do personagem.\nOrganização dos arquivos em index.html, style.css e script.js, utilizando boas práticas de separação de responsabilidades.",
    },
    {
      title: "Resultados",
      description:
        "Entendimento sólido de como integrar APIs REST com JavaScript puro.\nInterface funcional e responsiva, com interação fluida e visual agradável.\nFortalecimento das habilidades de manipulação do DOM e requisições assíncronas com Axios.",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
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
            RICK AND MORTY API
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
              size={{ xs: 12, sm: 6, md: 6, lg: 6 }}
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
          {[
            "project04.png",
            "project04B.png",
            "project04C.png",
            "project04D.png",
          ].map((src, index) => (
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
              href="https://api-rick-and-morty-silk.vercel.app/"
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
              Rick and Morty API
            </Button>

            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              href="https://github.com/MicheleKopper/API-Rick-and-Morty"
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
    </ThemeProvider>
  );
}
