let id = window.location.href.split("=")[1];
const BASE_URL_RESERVA = "https://xp41-soundgarden-api.herokuapp.com/bookings/event/";
const BASE_URL_EVENTO = "https://xp41-soundgarden-api.herokuapp.com/events/";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let table = document.querySelector("#table");
let nomeEvento = document.getElementById("nome-evento");
let lotacaoEvento = document.getElementById("lotacao-evento");
let reservasEvento = document.getElementById("reservas-evento");


async function LotacaoMax() {
    try{
        const respostaLotacao = await fetch(`${BASE_URL_EVENTO}${id}`, { method: "GET", redirect: "follow" });
        const maxJson = await respostaLotacao.json();
        nomeEvento.innerHTML = maxJson.name;
        lotacaoEvento.innerHTML = maxJson.number_tickets;
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    }

}
LotacaoMax()


async function Reservas() {
    try{
        const respostaReserva = await fetch(`${BASE_URL_RESERVA}${id}`, { method: "GET",
        headers: myHeaders,
        redirect: "follow" });
        const resJson = await respostaReserva.json();
        var contador = 0;
        
        resJson.forEach((item, index) => {
            contador += item.number_tickets;
    
            table.innerHTML +=
                `<tr>
                <th scope="row">${index + 1}</th>
                <td>${item.owner_name}</td>
                <td>${item.owner_email}</td>
                <td>${item.number_tickets}</td>
                <td>
                    <a onclick="excluir('${item._id}')" class="btn btn-danger">excluir</a>
                </td>
                </tr>`;
    
        });
        reservasEvento.innerHTML = contador;
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    }


}
Reservas()

const excluir = async (a)=>{
    try{
        let url_excluir = `https://xp41-soundgarden-api.herokuapp.com/bookings/${a}`
        confirm('Deseja realmente excluir? Essa operação não pode ser desfeita!')
        const resposta = await fetch(url_excluir, {method:'DELETE'});
        return window.location.reload()
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    }

}