const modal = document.getElementById("modal");
let card = document.querySelector('.pagina_inicial')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
var reservar = () => {
  modal.style.display = "block";
};

var concluir = () => {
  modal.style.display = "none";
};

var Listar = async () =>{
    const resposta = await fetch(BASE_URL, {method: 'GET'})
    const resJson = await resposta.json()
    resJson.forEach((item) => {
        card.innerHTML+=
        `<article class="cards_index evento card p-5 m-3">
        <h2 id="evento1">${item.name} - ${item.scheduled}</h2>
        <h4>${item.attractions}</h4>
        <p class="p_card_index">${item.description}</p>
        <button onclick="reservar()" class="btn btn-primary botao-reservar">
          reservar ingresso
        </button>
      </article>`        
    });
    
}

Listar()

