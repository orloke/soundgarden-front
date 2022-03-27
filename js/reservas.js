// let id = window.location.href.split("=")[1];
const BASE_URL_RESERVA = "https://xp41-soundgarden-api.herokuapp.com/bookings/event/";
const BASE_URL_EVENTO = "https://xp41-soundgarden-api.herokuapp.com/events/";

let table = document.querySelector("#table");
let nomeEvento = document.getElementById("nome-evento");
let lotacaoEvento = document.getElementById("lotacao-evento");
let reservasEvento = document.getElementById("reservas-evento");

async function LotacaoMax() {
    const respostaLotacao = await fetch(`${BASE_URL_EVENTO}${idEvento}`, { method: "GET", redirect: "follow" });
    const maxJson = await respostaLotacao.json();
    
    console.log(maxJson);
    // nomeEvento.innerHTML = resJson.name;
    // lotacaoEvento.innerHTML = resJson.number_tickets;
}
LotacaoMax()


async function Reservas() {
    const respostaReserva = await fetch(`${BASE_URL_RESERVA}${idReserva}`, { method: "GET", redirect: "follow" });
    const resJson = await respostaReserva.json();
    var contador = 0;

    resJson.forEach((item, index) => {
        contador += item.number_tickets;

        table.innerHTML +=
            `<tr >
            <th scope="row">${index + 1}</th>
            <td>${item.owner_name}</td>
            <td>${item.owner_email}</td>
            <td>${item.number_tickets}</td>
            </tr>`;

    });
    reservasEvento.innerHTML = contador;
}
Reservas()