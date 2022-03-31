const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'
let id = window.location.href.split('=')[1]
let edit_nome = document.querySelector('#edit_nome')
let edit_banner = document.querySelector('#edit_banner')
let edit_atracoes = document.querySelector('#edit_atracoes')
let edit_descricao = document.querySelector('#edit_descricao')
let edit_data = document.querySelector('#edit_data')
let edit_lotacao = document.querySelector('#edit_lotacao')
let form = document.querySelector('form')

//data_t[0].split('-').slice(1,3).reverse().join('/')+'/' + data_t[0].split('-')[0].slice(2,4) +' '+ data_t[1].split(':').slice(0,2).join(':')

var DataConvert = (x) =>{
    let data = x.split('T')[0]
    let hora = x.split('T')[1].slice(0,5)
    let ano = data.split('-')[0].slice(2,4)
    let mes = data.split('-')[1]
    let dia =data.split('-')[2]
    return dia+'/'+mes+'/'+ano+' '+hora;
}

var Recebendo = async() =>{
    try{
        const resposta = await fetch(`${BASE_URL}/${id}`, {method: 'GET'})
        const resJson = await resposta.json()
        edit_nome.value = resJson.name    
        edit_banner.value = resJson.banner    
        edit_atracoes.value = resJson.attractions    
        edit_descricao.value = resJson.description    
        edit_data.value = DataConvert(resJson.scheduled)
        edit_lotacao.value = resJson.number_tickets
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
        
        if(resposta2.status != '200'){
            return alert('Ocorreu um erro. Verifique se todos os dados estão corretos!')
        }
    
        alert('Dados alterados!')
        return window.location.href = 'admin.html'
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    }

}
