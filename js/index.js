const abrirModal = document.querySelector("#botao-reservar");
const modal = document.getElementById("modal");
const concluirReserva = document.querySelector(".concluir");

abrirModal.addEventListener("mousedown", e => {
  modal.style.display = "block";
});

concluirReserva.addEventListener("mousedown", e => {
  modal.style.display = "none";
});
