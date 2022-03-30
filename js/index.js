const abrirModal = document.querySelectorAll(".botao-reservar");
const modal = document.getElementById("modal");
const concluirReserva = document.querySelector(".concluir");
const cancelarReserva = document.querySelector(".fechar");
const descricao = document.querySelector(".qualquer");
let card = document.querySelector(".pagina_inicial");
let formodal = document.querySelector('.form-modal')
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";

var reservar = (a) =>{
  modal.style.display = "block"; 
}

concluirReserva.addEventListener("click", e => {
  modal.style.display = "none";
});

cancelarReserva.addEventListener("mousedown", e => {
  modal.style.display = "none";
});

var Listar = async () => {
  const resposta = await fetch(BASE_URL, { method: "GET" });
  const resJson = await resposta.json();
  resJson.forEach((item,index) => {
    if(index<4){
      card.innerHTML += `<article class="cards_index evento card p-5 m-3">
      <h2 id="evento1">${item.name} - ${item.scheduled}</h2>
      <h4>${item.attractions}</h4>
      <p class="p_card_index">${item.description}</p>
      <button onclick ="reservar('${item._id}')" class="btn btn-primary botao-reservar">
        reservar ingresso
      </button>
    </article>`;    
    }
  });
};

Listar()



