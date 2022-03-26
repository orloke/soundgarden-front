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
    // dataraw = {
    //     "name": nome.value,
    //     "poster": "link da imagem",
    //     "attractions": atracao.value.split(','),
    //     "description": descricao.value,
    //     "scheduled": data.value,
    //     "number_tickets": parseInt(lotacao.value)
    // }

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
    console.log(await resposta.json());
    
    
    
}


//.split('/').reverse().join('-')
