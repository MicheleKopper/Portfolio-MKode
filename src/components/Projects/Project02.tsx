import { Button, Grid2, Stack, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Navbar } from "../Home/Navbar";
import { Footer } from "../Home/Footer";

export function Project02() {
  const projects = [
    {
      title: "Visão Geral",
      description:
        "O projeto Pokédex é uma aplicação web desenvolvida como atividade final do módulo React III da Growdev. A proposta foi construir uma interface interativa para listar e explorar personagens do universo Pokémon, consumindo dados em tempo real da PokeAPI. O objetivo principal foi aplicar na prática os conhecimentos adquiridos sobre React com Material UI (MUI), gerenciamento de estado global com Redux Toolkit e chamadas assíncronas com Async Thunk.",
    },
    {
      title: "Desafio",
      description:
        "O desafio foi desenvolver uma Pokédex interativa utilizando dados da PokeAPI, com listagem paginada, exibição de detalhes e adição de favoritos. A aplicação precisava ser responsiva, ter navegação fluida e uma boa experiência de uso. Além disso, foi necessário aplicar Redux Toolkit e Async Thunk para o gerenciamento de estado e requisições, organizando bem o código e publicando o projeto com deploy na Vercel e versionamento no GitHub.",
    },
    {
      title: "Solução",
      description:
        "Listagem de Pokémon: Com paginação, exibe nome, ID, altura e imagem de cada Pokémon, além de botão para adicioná-lo à Pokédex.\nPágina de Detalhes Dinâmica: Mostra informações detalhadas do Pokémon selecionado, como habilidades e stats (ataque, defesa etc.).\nPokedex Personalizada: Seção exclusiva onde o usuário vê sua coleção de favoritos com nome e imagem.\nEstilização com MUI: Interface moderna, responsiva e acessível.\nGerenciamento de Estado com Redux: Estados globais controlados com Redux Toolkit e chamadas assíncronas com AsyncThunk.\nDeploy e Versionamento: Projeto publicado na Vercel e com código-fonte disponível no GitHub.",
    },
    {
      title: "Resultados",
      description:
        "Interface responsiva, leve e intuitiva.\nIntegração eficiente com a API pública da PokeAPI.\nGerenciamento de estados fluido com Redux, garantindo consistência na Pokédex entre páginas.\nProjeto hospedado na Vercel com deploy contínuo.\nCódigo-fonte publicado no GitHub.",
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
            POKÉDEX
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
            "project02A.png",
            "project02B.png",
            "project02C.png",
            "project02D.png",
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
              href="https://pokedex-pqkncqwzl-michelekoppers-projects.vercel.app/home"
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
              Pokédex
            </Button>

            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              href="https://github.com/MicheleKopper/Pokedex"
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

      <Footer/>
      <Box sx={{ height: { xs: "56px", sm: "64px" } }} />
    </ThemeProvider>
  );
}
