import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
// import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";


export function Navbar() {

 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("open", open);
  };

  const typographyStyles = {
    letterSpacing: "12px",
    color: "#ffffff",
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
    fontSize: "30px",
    textAlign: "center",
    textDecoration: "none",
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      transform: "scale(1.1) rotateY(10deg) rotateX(5deg)",
      color: "#8b8b8b",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <IconButton // MENU
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClickOpen}
          >
            <DragHandleIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: "4px" }}
            fontFamily={"Anonymous Pro"}
            fontWeight={"900"}
            fontSize={"16px"}
          >
            MENU
          </Typography>

          {/* ICONES*/}
          <IconButton // LINKEDIN
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="https://www.linkedin.com/in/michele-kopper/"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton // GITHUB
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="https://github.com/MicheleKopper"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton // WHATSAPP
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="https://wa.me/5551997997621"
          >
            <WhatsAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MODAL */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#000000" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Typography
              sx={{ ml: 2, flex: 1, letterSpacing: "4px" }}
              variant="h6"
              component="div"
              fontFamily={"Anonymous Pro"}
              fontWeight={"900"}
              fontSize={"16px"}
            >
              FECHAR
            </Typography>
            {/* ICONES*/}
            <IconButton // LINKEDIN
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to="https://www.linkedin.com/in/michele-kopper/"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton // GITHUB
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to="https://github.com/MicheleKopper"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton // WHATSAPP
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to="https://wa.me/5551997997621"
            >
              <WhatsAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <List
          sx={{
            backgroundColor: "#000000",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            width: "100%",
          }}
        >
          <Typography sx={typographyStyles} component={Link} to="/">
            SOBRE MIM
          </Typography>

          <Typography sx={typographyStyles} component={Link} to="/">
            PROJETOS
          </Typography>

          <Typography sx={typographyStyles} component={Link} to="/">
            CONTATO
          </Typography>
        </List>
      </Dialog>
    </Box>
  );
}
