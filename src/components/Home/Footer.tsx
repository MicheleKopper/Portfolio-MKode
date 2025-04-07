import { Box, Typography, ThemeProvider, Grid2 } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CoffeeIcon from "@mui/icons-material/Coffee";
import PetsIcon from "@mui/icons-material/Pets";
import { Theme } from "../../config/Themes/Theme";

export function Footer() {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        component="footer"
        sx={{
          bgcolor: "#0a0a0a",
          pt: 4,
          pb: 4,
          px: { xs: 2, sm: 4, md: 8 }, // Padding horizontal responsivo
        }}
      >
        <Grid2 container spacing={2} justifyContent="center" textAlign="center">
          <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 6 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              © {new Date().getFullYear()} Todos os direitos reservados ·
              Desenvolvido por{" "}
              <Box
                component="a"
                href="https://wa.me/5551997997621"
                target="_blank"
                rel="noopener"
                sx={{
                  color: "#FF008E",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#fff",
                    textDecoration: "underline",
                  },
                }}
              >
                MKode
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              Projetado com carinho{" "}
              <FavoriteIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
              , testado com café{" "}
              <CoffeeIcon fontSize="small" sx={{ verticalAlign: "middle" }} />,
              aprovado por um pug{" "}
              <PetsIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
}
