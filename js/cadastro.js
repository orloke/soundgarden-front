let nome = document.querySelector('#nome')
let atracao = document.querySelector('#atracoes')
let descricao = document.querySelector('#descricao')
let data = document.querySelector('#data')
let lotacao = document.querySelector('#lotacao')
let form = document.querySelector('form')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

form.onsubmit = async (e)=>{
    const data_t = data.value.split(' ')
    e.preventDefault();
    try{
        dataraw = {
            "name": nome.value,
            "poster": "link da imagem",
            "attractions": atracao.value.split(','),
            "description": descricao.value,
            "scheduled": '20'+data_t[0].split('/').reverse().join('-')+'T'+data_t[1]+':00.000Z',
            "number_tickets": parseInt(lotacao.value)
        }
        
        const option = {
            method: 'POST',
            body: JSON.stringify(dataraw),
            headers:{
                "Content-Type": "application/json",
            },
        }
        
        const resposta = await fetch(BASE_URL, option)   
        
        if(resposta.status != '201'){
            return alert('Ocorreu um erro. Verifique se todos os dados estão corretos!')
        }
    
        console.log(await resposta.json());
        alert('Evento cadastrado!')
        return window.location.href = 'admin.html'
    }
    catch(e){
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+e)
        window.location.reload()   
    }    
}