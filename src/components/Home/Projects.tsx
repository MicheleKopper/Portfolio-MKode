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
      image: "project03.png",
      title: "GrowTwitter API",
      categories: [
        "Node.js",
        "Express",
        "Prisma",
        "JWT",
        "API REST",
        "Back-End",
        "PostMan",
      ],
      description:
        "API para autenticação de usuários, criação e interação com tweets, replies e sistema de seguidores. Inclui testes automatizados e documentação via Swagger.",
      link: "/project03",
    },
    {
      image: "project04.png",
      title: "Rick and Morty API",
      categories: ["Front-end", "Bootstrap", "JavaScript (Axios)"],
      description:
        "Aplicação web que consome a API de Rick and Morty para exibir personagens com cards interativos, modais de detalhes e paginação.",
      link: "/project04",
    },
    {
      image: "project05.png",
      title: "Eventos e Aplicações",
      categories: ["Design Gráfico", "UI Design", "Identidade Visual"],
      description:
        "Projetos criados para eventos e aplicações digitais, incluindo identidade visual, folders, materiais promocionais e telas de apps. Foco em comunicação clara, estética moderna e adaptação.",
      link: "/project05",
    },
    {
      image: "project06.png",
      title: "Logomarcas",
      categories: ["Illustrator", "Photoshop", "Design Gráfico"],
      description:
        "Coleção de logomarcas criadas para diferentes marcas e segmentos, com foco em identidade visual forte, originalidade e aplicação versátil.",
      link: "/project06",
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
