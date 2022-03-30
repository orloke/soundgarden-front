const abrirModal = document.querySelectorAll(".botao-reservar");
const modal = document.getElementById("modal");
const concluirReserva = document.querySelector(".concluir");
const cancelarReserva = document.querySelector(".fechar");
let card = document.querySelector(".pagina_inicial");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";


var reservar = () =>{
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
      <h2 id="evento${index+1}">${item.name} - ${item.scheduled}</h2>
      <h4>${item.attractions}</h4>
      <p class="p_card_index">${item.description}</p>
      <button onclick ="reservar()" class="btn btn-primary botao-reservar">
        reservar ingresso
      </button>
    </article>`;
    }

  });
  function imgBanner1(){
    let img1 = document.getElementById("section-banner");
    img1.style.background = "url('../img/rock-nacional.jpg') no-repeat center";
    img1.style.backgroundSize = "cover";

    let tituloEvento1 = document.getElementById("evento1").innerHTML;
    tituloBanner.innerHTML = tituloEvento1;

    setTimeout("imgBanner2()", 5000);
}
    
  function imgBanner2(){
    let img2 = document.getElementById("section-banner");
    img2.style.background = "url('../img/samba.jpg') no-repeat center";
    img2.style.backgroundSize = "cover";
    
    let tituloEvento2 = document.getElementById("evento2").innerHTML;
    tituloBanner.innerHTML = tituloEvento2;
    
    setTimeout("imgBanner3()", 5000);
}
    
  function imgBanner3(){
    let img3 = document.getElementById("section-banner");
    img3.style.background = "url('../img/festa.jpg') no-repeat center";
    img3.style.backgroundSize = "cover";

    let tituloEvento3 = document.getElementById("evento3").innerHTML;
    tituloBanner.innerHTML = tituloEvento3;

    setTimeout("imgBanner1()", 5000)
}
imgBanner1();
};

Listar();
