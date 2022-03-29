const abrirModal = document.querySelectorAll(".botao-reservar");
const modal = document.getElementById("modal");
const concluirReserva = document.querySelector(".concluir");

abrirModal.forEach(btn => {
  btn.addEventListener("mousedown", e => {
    modal.style.display = "block";
  });
});

concluirReserva.addEventListener("mousedown", e => {
  modal.style.display = "none";
});
