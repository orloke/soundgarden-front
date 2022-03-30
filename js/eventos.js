const abrirModal = document.querySelectorAll(".botao-reservar");
const modal = document.getElementById("modal");
const concluirReserva = document.querySelector(".concluir");
const cancelarReserva = document.querySelector(".fechar");
let nomeEvento = document.getElementById("nome-evento");
let dataEvento = document.getElementById("data-evento");
let idEvento = "";
let atracoesEvento = document.getElementById("atracoes-evento");
let ingressos = document.getElementById("ingressos");
var estilo = document.getElementsByClassName('load');

let card = document.querySelector(".pagina_inicial");

let form = document.querySelector('form');
let nome = document.querySelector('#nome');
let sexo = document.querySelector('#sexo');
let email = document.querySelector('#email');
let rg = document.querySelector('#rg');
let qtde = document.querySelector('#quantidade');

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const BASE_FAZER_RESERVA = "https://xp41-soundgarden-api.herokuapp.com/bookings";


var reservar = async (id, nome, data, atracoes, disponivel) =>{
  modal.style.display = "block";
  nomeEvento.innerHTML = nome;
  dataEvento.innerHTML = data;
  atracoesEvento.innerHTML = atracoes;
  ingressos.innerHTML = 'Disponivel: '+disponivel
  idEvento = id;
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
  estilo[0].style.display = 'none'
  resJson.forEach((item,index) => {
    if(item.scheduled.length == 0 || item.name.length == 0 || item.attractions[0] == ''){
      item.attractions ='sem atração'
    }
    card.innerHTML += `<article class="cards_index evento card p-5 m-3">
      <h2 id="evento${index+1}">${item.name} - ${item.scheduled}</h2>
      <h4>${item.attractions}</h4>
      <p class="p_card_index">${item.description}</p>
      ${item.number_tickets!=0?
        `<button onclick ="reservar('${item._id}','${item.name}','${item.scheduled}','${item.attractions}','${item.number_tickets}')" class="btn btn-primary botao-reservar">
        reservar ingresso
        </button>`
      :
        `<button style = "cursor: auto;" class="btn btn-dark botao-reservar">
        Esgotado
        </button>`
      }

    </article>`;
    });
}
Listar();


form.onsubmit = async (e)=>{
  e.preventDefault();
  let para_comprar = Number(ingressos.innerHTML.split(': ')[1]);
  if(Number(qtde.value)>para_comprar){
    return alert('Quantidade de ingressos maior que o disponível!')
  }  
  let dataraw = {
    "owner_name": nome.value,
    "owner_email": email.value,
    "number_tickets": qtde.value,
    "event_id": idEvento
  }
 
  
  const option = {
      method: 'POST',
      body: JSON.stringify(dataraw),
      headers:{
        "Content-Type": "application/json",
      },
      redirect: 'follow'
  }
  
  const resposta = await fetch(BASE_FAZER_RESERVA, option);

  
  if(resposta.status != '201'){
      return alert('Ocorreu um erro. Verifique se todos os dados estão corretos!')
  }

  alert('Reserva feita com sucesso!')
  return window.location.reload()
  
}

