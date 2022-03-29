const modal = document.getElementById(".modal");

var reservar = (evento) => {
  evento.preventDefault();
  modal.style.display = "block";
};

var concluir = () => {
  modal.style.display = "none";
};
