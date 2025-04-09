import { Button, Grid2, Stack, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export function Project03() {
  const projects = [
    {
      title: "Visão Geral",
      description:
        "O GrowTwitter é uma API REST inspirada no Twitter, desenvolvida com Node.js, Express e Prisma ORM, com o objetivo de praticar e aplicar conceitos avançados de back-end. A aplicação permite autenticação via JWT, criação e interação com tweets, replies, seguidores e exibição de feed personalizado. O projeto simula as principais funcionalidades de uma rede social, com foco em escalabilidade, segurança e testes automatizados.",
    },
    {
      title: "Desafio",
      description:
        "Durante o desenvolvimento do GrowTwitter, os principais desafios incluíram a implementação de autenticação segura com JWT, o mapeamento correto das relações entre usuários, tweets e seguidores com Prisma, e a manutenção de uma estrutura de código limpa e escalável. Além disso, foi necessário garantir uma boa cobertura de testes unitários e integrados, bem como documentar toda a API com Swagger para facilitar o uso e compreensão por outros desenvolvedores.",
    },
    {
      title: "Solução",
      description:
        "Express para estruturar as rotas da aplicação de forma modular.\nPrisma ORM para modelagem e acesso eficiente ao banco de dados.\nJWT para autenticação e controle de acesso às rotas.\nCriação de endpoints robustos para tweets, replies, seguidores e feed.\nTestes unitários e integrados utilizando mocks e asserções com mais de 85% de cobertura.\nSwagger para documentação clara de rotas principais.",
    },
    {
      title: "Resultados",
      description:
        "Navegação fluida entre funcionalidades como seguir usuários, responder e curtir tweets.\nFeed de usuário dinâmico, exibindo tweets próprios e de seguidores.\nEstrutura de código clara, modular e com cobertura de testes satisfatória.\nDocumentação acessível e atualizada via Swagger.\nRepositório organizado, pronto para uso em projetos reais ou como base para evolução futura.",
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
            GROWTWITTER API
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
            "project03A.png",
            "project03B.jpg",
            "project03C.jpg",
            "project03D.jpg",
            "project03E.jpg",
            "project03F.jpg",
            "project03G.jpg",
            "project03H.jpg",
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
              href="https://growtwitter-back-end.onrender.com/"
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
              GrowTwitter API
            </Button>

            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              href="https://github.com/MicheleKopper/GrowTwitter-Back-end"
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
