{
  /* Ícones */
}
<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: 2 }}>
  {[
    "Design de UX",
    "Estratégia Digital",
    "Pesquisa",
    "Marca",
    "Estratégia de produto",
    "Marketing",
  ].map((text) => (
    <Button
      key={text}
      variant="contained"
      sx={{
        backgroundColor: "#222",
        color: "white",
        borderRadius: 3,
        textTransform: "none",
        "&:hover": { backgroundColor: "#333" },
      }}
    >
      {text}
    </Button>
  ))}
</Box>;
