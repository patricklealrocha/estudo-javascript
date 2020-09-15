function contar() {
   // pega a string inicio e converte para numero
    let inicio = window.document.getElementById('txti')
    let ini = Number(inicio.value)
    // pega a string fim e converte para numero
    let fim = window.document.getElementById('txtf')
    let final = Number(fim.value)
    // pega a string passo e converte para numero
    let passo = window.document.getElementById('txtp')
    let pas = Number(passo.value)
    // onde será impressa a resposta
    let res = window.document.querySelector('div#res')
    // verifica se está pegando os valores
    //alert(`Você que iniciar em ${ini} até ${final} pulando de ${pas} em ${pas}`)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
       // window.alert('[ERRO]  Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        if(pas <= 0){
            window.alert('Considerando passo = 1')
            pas = 1
        }
        if(ini < final){
            //contagem crescente
            for(let c = ini; c <= final; c += pas ){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{
            for(let c = ini ; c >= final ; c -= pas){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
    
           
    
}