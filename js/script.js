const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
let id = window.location.href.split('=')[1]
let edit_nome = document.querySelector('#edit_nome')
let edit_banner = document.querySelector('#edit_banner')
let edit_atracoes = document.querySelector('#edit_atracoes')
let edit_descricao = document.querySelector('#edit_descricao')
let edit_data = document.querySelector('#edit_data')
let edit_lotacao = document.querySelector('#edit_lotacao')
let form = document.querySelector('form')

var Recebendo = async() =>{
    const resposta = await fetch(`${BASE_URL}/${id}`, {method: 'GET'})
    const resJson = await resposta.json()
    edit_nome.value = resJson.name    
    edit_banner.value = resJson.banner    
    edit_atracoes.value = resJson.attractions    
    edit_descricao.value = resJson.description    
    edit_data.value = '' 
    edit_lotacao.value = resJson.number_tickets  
}

Recebendo()

form.onsubmit = async (e) =>{
    e.preventDefault()
    const data_t = edit_data.value.split(' ')
    dataraw = {
        "name": edit_nome.value,
        "poster": "link da imagem",
        "attractions": edit_atracoes.value.split(','),
        "description": edit_descricao.value,
        "scheduled": '20'+data_t[0].split('/').reverse().join('-')+'T'+data_t[1]+':00.000Z',
        "number_tickets": parseInt(edit_lotacao.value)
    }
    
    const option = {
        method: 'PUT',
        body: JSON.stringify(dataraw),
        headers:{
            "Content-Type": "application/json",
        },

    } 

    const resposta2 =  await fetch(`${BASE_URL}/${id}`, option)
    
    console.log(await resposta2.json());
}




