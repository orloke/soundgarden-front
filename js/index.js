const modal = document.getElementById("modal");

reservar = evento => {
  evento.preventDefault();
  modal.style.display = "block";
};

concluir = () => {
  modal.style.display = "none";
};
