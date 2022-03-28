let table = document.querySelector('#table')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
var Listar = async () =>{
    const resposta = await fetch(BASE_URL, {method: 'GET'})
    const resJson = await resposta.json()
    resJson.forEach((item,index) => {
        table.innerHTML+=
        `<tr >
        <th scope="row">${index+4}</th>
        <td>${item.scheduled}</td>
        <td>${item.name}</td>
        <td>${item.attractions}</td>
        <td>
          <a href="reservas.html?id=${item._id}" class="btn btn-dark"
            >ver reservas</a
          >
          <a href="editar-evento.html?id=${item._id}" class="btn btn-secondary">editar</a>
          <a href="excluir-evento.html?id=${item._id}" class="btn btn-danger">excluir</a>
        </td>
      </tr>`        
    });
    
}

Listar()