import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Theme } from "../../config/Themes/Theme";

export function Projects() {
  const projects = [
    {
      image: "01.png",
      title: "Landing Page",
      categories: ["React", "Node.js", "UI/UX Design", "Web Performance"],
      description:
        "Landing page estratégica e responsiva, criada para maximizar conversões e atrair leads qualificados através de campanhas no Google Ads.",
      link: "/project01",
    },
    {
      image: "project02.png",
      title: "Pokédex",
      categories: ["React", "Redux Toolkit", "API REST", "Material UI"],
      description:
        "App que consome a PokéAPI para listar e favoritar Pokémons, com interface responsiva e gerenciamento de estado com Redux Toolkit.",
      link: "/project02",
    },
    {
      image: "mockup 01.png",
      title: "Projeto 3",
      categories: ["Next.js", "Tailwind"],
      description:
        "Uma plataforma de recompensas de anúncios de realidade aumentada.",
      link: "#",
    },
    {
      image: "mockup 02.png",
      title: "Projeto 4",
      categories: ["Node.js", "Express"],
      description:
        "AUma plataforma de recompensas de anúncios de realidade aumentada.",
      link: "#",
    },
    {
      image: "mockup 01.png",
      title: "Projeto 3",
      categories: ["Next.js", "Tailwind"],
      description:
        "Uma plataforma de recompensas de anúncios de realidade aumentada.",
      link: "#",
    },
    {
      image: "mockup 02.png",
      title: "Projeto 4",
      categories: ["Node.js", "Express"],
      description:
        "Uma plataforma de recompensas de anúncios de realidade aumentada.",
      link: "#",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <Container sx={{ py: 5, maxWidth: "100%", overflowX: "hidden" }}>
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
            PROJETOS
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
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          {projects.map((project, index) => (
            <Grid2
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 500,
                  height: 550,
                  bgcolor: "#121212",
                  color: "white",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  paddingTop: "20px",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 450,
                    height: 280,
                    bgcolor: "#141414",
                    color: "white",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>

                <CardContent
                  sx={{ textAlign: "left", width: "100%", padding: "30px" }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
                    {project.categories.join(", ")}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#ffffff",
                      borderColor: "#ffffff",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "12px",
                      fontFamily: '"Lato", sans-serif',
                      borderRadius: 5,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: "#FF008E",
                        color: "#FF008E",
                      },
                      marginTop: "20px",
                      width: "150px",
                    }}
                    href={project.link}
                  >
                    Ver Projeto
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
