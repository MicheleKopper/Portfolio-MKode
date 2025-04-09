import { Grid2, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";

export function Project05() {
  const projects = [
    {
      title: "Visão Geral",
      description:
        "Esta página reúne uma seleção de logomarcas desenvolvidas para diferentes nichos e finalidades, com foco em transmitir a identidade visual de cada marca de forma única, memorável e alinhada com os seus valores. Cada logo foi criada com base em estudo de público, mercado e estilo, explorando elementos como tipografia, cor, forma e simplicidade.",
    },
    {
      title: "Desafio",
      description:
        "O principal desafio ao criar logomarcas para clientes distintos está em traduzir ideias abstratas em formas visuais claras, garantindo que o resultado seja original, escalável e funcional em diferentes aplicações - do digital ao impresso.",
    },
    {
      title: "Solução",
      description:
        "A abordagem foi sempre centrada no cliente: entender o posicionamento da marca, pesquisar referências visuais estratégicas e aplicar técnicas de design gráfico para criar logomarcas estéticas, versáteis e com forte presença visual. O uso de mockups ajudou a apresentar o resultado de forma profissional e contextualizada.",
    },
    {
      title: "Resultados",
      description:
        "As logomarcas apresentadas nesta página representam não apenas o resultado visual, mas também o processo criativo e colaborativo por trás de cada entrega. Foram aplicadas em sites, redes sociais, materiais impressos e outros suportes, com feedbacks positivos dos clientes e reforço da identidade das marcas.",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
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
            LOGOMARCAS
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
            "project06.png",
            "project06B.png",
            "project06C.png",
            "project06D.png",
            "project06E.png",
            "project06F.gif",
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
    </ThemeProvider>
  );
}
