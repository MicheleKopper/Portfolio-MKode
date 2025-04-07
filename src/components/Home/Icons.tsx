import {
  Box,
  Container,
  Grid2,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Theme } from "../../config/Themes/Theme";

export function Icons() {
  const icons = [
    // Lista completa dos ícones
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/html-5--v1.png"
          alt="html-5"
        />
      ),
      title: "HTML",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/css3.png"
          alt="css3"
        />
      ),
      title: "CSS",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/javascript--v1.png"
          alt="javascript"
        />
      ),
      title: "JavaScript",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/fluency/48/typescript--v2.png"
          alt="typescript"
        />
      ),
      title: "TypeScript",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png"
          alt="redux"
        />
      ),
      title: "Redux",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
          alt="react"
        />
      ),
      title: "React",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/fluency/48/node-js.png"
          alt="node-js"
        />
      ),
      title: "Node.js",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/fluency/48/prisma-orm.png"
          alt="prisma-orm"
        />
      ),
      title: "Prisma ORM",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/github--v1.png"
          alt="github"
        />
      ),
      title: "GitHub",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-shadow-tal-revivo.png"
          alt="jest"
        />
      ),
      title: "Jest",
    },
    { icon: <img width="48" src="axios.png" alt="axios" />, title: "Axios" },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/dusk/64/postman-api.png"
          alt="postman"
        />
      ),
      title: "Postman",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/visual-studio-code-2019.png"
          alt="visual-studio-code"
        />
      ),
      title: "VS Code",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/adobe-illustrator--v1.png"
          alt="illustrator"
        />
      ),
      title: "Illustrator",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/fluency/48/adobe-photoshop.png"
          alt="photoshop"
        />
      ),
      title: "Photoshop",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/adobe-xd--v1.png"
          alt="adobe-xd"
        />
      ),
      title: "Adobe XD",
    },
    {
      icon: (
        <img
          width="48"
          src="https://img.icons8.com/color/48/google-ads.png"
          alt="google-ads"
        />
      ),
      title: "Google Ads",
    },
    {
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/meta.png"
          alt="meta"
        />
      ),
      title: "Facebook Ads",
      description: "Publicidade paga no Facebook e Instagram",
    },
  ];

  // Dividindo em duas linhas
  const firstRow = icons.slice(0, 9);
  const secondRow = icons.slice(9, 18);

  return (
    <ThemeProvider theme={Theme}>
      <Container sx={{ py: 5, maxWidth: "100%", overflowX: "hidden" }}>
        {/* Título */}
        <Grid2 container alignItems="center" sx={{ mb: 3 }}>
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
            TECNOLOGIAS E FERRAMENTAS
          </Typography>
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

        {/* Grid de Ícones */}
        <Grid2 container spacing={1} sx={{ justifyContent: "center" }}>
          {[firstRow, secondRow].map((row, rowIndex) => (
            <Grid2
              container
              key={rowIndex}
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              {row.map((item, index) => (
                <Grid2
                  key={index}
                  size={{ xs: 4, sm: 4, md: 1.33, lg: 1.33 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      width: "120px",
                      p: 1,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    {item.icon}
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </ThemeProvider>
  );
}
