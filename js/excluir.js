let form = document.querySelector('form')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
let id = window.location.href.split('=')[1]
let nome = document.querySelector('#nome')
let banner = document.querySelector('#banner')
let atracoes = document.querySelector('#atracoes')
let descricao = document.querySelector('#descricao')
let data = document.querySelector('#data')
let lotacao = document.querySelector('#lotacao')

var Recebendo = async() =>{
    try{
        const resposta = await fetch(`${BASE_URL}/${id}`, {method: 'GET'})
        const resJson = await resposta.json()
        nome.value = resJson.name    
        banner.value = resJson.banner    
        atracoes.value = resJson.attractions    
        descricao.value = resJson.description    
        data.value = data.value 
        lotacao.value = resJson.number_tickets 
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    } 
 
}

Recebendo()

form.onsubmit = async (e) =>{
    e.preventDefault()
    try{
        const option = {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
            },
        }
        const resposta = await fetch(`${BASE_URL}/${id}`, option)
        if(resposta.status != '204'){
            return alert('Ocorreu um erro. Verifique se todos os dados estão corretos!')
        }
    
        alert('Dados excluidos!')
        return window.location.href = 'admin.html'
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    }      
}
