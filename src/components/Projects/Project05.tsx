import { Grid2, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";
import { Footer } from "../Home/Footer";
import { Navbar } from "../Home/Navbar";

export function Project05() {
  const projects = [
    {
      title: "Visão Geral",
      description:
        "Esta página reúne uma seleção de projetos desenvolvidos para eventos culturais e aplicações digitais. Estes trabalhos incluem desde a criação de identidades visuais até a produção de materiais promocionais e interfaces intuitivas para apps. Cada peça foi pensada para comunicar com clareza, reforçar a marca e engajar o público-alvo, sempre com foco numa estética moderna e adaptável a diferentes contextos e plataformas.",
    },
    {
      title: "Desafio",
      description:
        "Durante o desenvolvimento dos projetos para eventos e aplicações digitais, enfrentei diversos desafios, como a necessidade de representar visualmente a essência de cada iniciativa de forma clara e impactante. Foi essencial garantir que os materiais gráficos se destacassem tanto em ambientes físicos, quanto em plataformas digitais, mantendo uma comunicação eficaz e atrativa. ",
    },
    {
      title: "Solução",
      description:
        "Para superar esses desafios, adotei uma abordagem centrada no cliente e orientada para o design estratégico. Realizei reuniões de briefing para compreender profundamente os objetivos de cada projeto, o perfil do público-alvo e a mensagem central a ser transmitida. A partir daí, desenvolvi sistemas visuais versáteis, com identidades gráficas sólidas e componentes adaptáveis a diferentes meios.",
    },
    {
      title: "Resultados",
      description:
        "Os projetos entregues geraram uma presença visual marcante e coesa para os eventos e aplicações. Houve um claro aumento no reconhecimento das marcas envolvidas e uma resposta positiva do público, que destacou a qualidade e a atratividade dos materiais. A versatilidade dos sistemas criados também permitiu a reutilização e expansão dos elementos gráficos em futuras edições ou atualizações.",
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
          mb: 10,
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
            EVENTOS E APLICAÇÕES
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

                  <Typography variant="body1" color="white">
                    {project.description}
                  </Typography>
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
            "project05A.png",
            "project05B.png",
            "project05C.png",
            "project05D.png",
            "project05E.png",
            "project05F.png",
            "project05G.png",
            "project05H.png",
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
      </Container>

      <Footer />
      <Box sx={{ height: { xs: "56px", sm: "64px" } }} />
    </ThemeProvider>
  );
}
