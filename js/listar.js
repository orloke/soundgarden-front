let table = document.querySelector('#table')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
var estilo = document.getElementsByClassName('load');

var DataConvert = (x) =>{
  let data = x.split('T')[0]
  let hora = x.split('T')[1].slice(0,5)
  let ano = data.split('-')[0].slice(2,4)
  let mes = data.split('-')[1]
  let dia =data.split('-')[2]
  return dia+'/'+mes+'/'+ano+' '+hora;
}

var Listar = async () =>{
    const resposta = await fetch(BASE_URL, {method: 'GET'})
    const resJson = await resposta.json()
    estilo[0].style.display = 'none'
    resJson.forEach((item,index) => {
      if(item.scheduled.length == 0 || item.name.length == 0 || item.attractions[0] == ''){
        item.attractions ='sem atração'
      }
        table.innerHTML+=
        `<tr >
        <th scope="row">${index+1}</th>
        <td>${DataConvert(item.scheduled)}</td>
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