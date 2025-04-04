import { Grid2, ThemeProvider } from "@mui/material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Theme } from "../../config/Themes/Theme";

export function Experience() {
  const experiences = [
    {
      position: "Desenvolvedora Full Stack | Designer",
      company: "Autônoma",
      date: "2023 - Presente",
      description:
        "Criação e desenvolvimento de sites, incluindo ajustes em plataformas existentes para otimização e melhor experiência do usuário. Desenvolvimento de layouts responsivos para websites, aplicativos e outras plataformas digitais. Criação de identidade visual para marcas, incluindo logomarcas, paleta de cores e tipografia. Produção de peças gráficas para redes sociais (banners, posts, infográficos) e materiais impressos (cartões de visita, folhetos, embalagens).",
    },
    {
      position: "Gerente de Marketing",
      company: "Agência Oriup (Grupo Jornal O Diário)",
      date: "2020 - 2023",
      description:
        "Liderança da equipe de marketing, designers, analistas de tráfego, atendimento, audiovisual e programadores. Criação de identidade visual para eventos, incluindo layout de sites, logomarcas e materiais gráficos. Definição de planejamento estratégico de marketing e gestão de campanhas. Distribuição de orçamento para tráfego pago e publicidade. Aprovação de criativos e materiais de marketing.",
    },
    {
      position: "Coordenadora de Marketing",
      company: "Sigma Comércio e Serviços",
      date: "2016 - 2019",
      description:
        "Criação de campanhas de marketing digital, incluindo artes, vídeos e conteúdos publicitários. Coordenação da equipe e SAC – Serviço de Atendimento ao Consumidor. Controle de indicadores de desempenho e planejamento estratégico.",
    },
    {
      position: "Auxiliar Administrativo",
      company: "Terraplanagem Irmãos Kopper",
      date: "2013 - 2016",
      description:
        "Contas a pagar e receber, controle de caixa, efetuar/atender telefonemas, cobranças, serviços bancários, orçamentos e contratos, entrega de folha de pagamento, e emissão de notas fiscais, MTR e boletos.",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <Container sx={{ py: 5, maxWidth: "100%", overflowX: "hidden" }}>
        {/* Título */}
        <Grid2 container alignItems="center">
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
            EXPERIÊNCIA
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

        {/* Cards de experiência */}
        <Grid2
          container
          spacing={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
            alignItems: "center",
          }}
        >
          {experiences.map((experience, index) => (
            <Grid2
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 450,
                  height: 380,
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
                    }}
                  >
                    {experience.position}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {experience.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    {experience.date}
                  </Typography>
                  <Typography variant="body1">
                    {experience.description}
                  </Typography>
                </CardContent>

                {/* Linha abaixo do conteúdo */}
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
      </Container>
    </ThemeProvider>
  );
}
