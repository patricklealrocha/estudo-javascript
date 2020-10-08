var altura = window.document.getElementById('txtalt')
    var fsex = window.document.getElementsByName('radsex')
    var res = window.document.querySelector('div#res')
    var genero = ''
    var homem = []
    var mulher = []
    
function adicionar(){
    if(altura.value <= 0 || altura.value >= 3)
    {
        window.alert('[ERRO] Altura não informada ou maior que 3 metros de altura. Verifique por favor.')
    }
    else{
        if (homem.length + mulher.length < 15) {
            if(fsex[0].checked){
                genero = 'masculino'
                homem.push(Number(altura.value))
                window.alert('Homem adicionado')
            }else if(fsex[1].checked){
                genero = 'feminino'
                mulher.push(Number(altura.value))
                window.alert('Mulher adicionada')
            }    
        }else{
            window.alert('Impossível adicionar mais pessoas')
        }
    }

}
function finalizar() {
    let total  = homem.length + mulher.length
    let totalmulher = mulher.length
    let maiorm = mulher[0]
    let maiorh = homem[0]
    let menorm = mulher[0]
    let menorh = homem[0]
    let soma = 0
    let media = 0
    
    for (let pos in mulher) {
        soma+= mulher[pos]
        if(mulher[pos] > maiorm){
            maiorm = mulher[pos]
        }
        if(mulher[pos] < menorm){
            menorm = mulher[pos]
        }         
    }
    for (let pos in homem) {
        
        if(homem[pos] > maiorh){
            maiorh = homem[pos]
        }
        if(homem[pos] < menorh){
            menorh = homem[pos]
        }         
    }
    if(maiorh > maiorm){
        res.innerHTML = `<p>O maior do grupo é um homem de ${maiorh} metros de altura.</p>`
    }else{
        res.innerHTML = `<p>O maior do grupo é uma mulher de ${maiorm} metros de altura.</p>`
    }
    if (menorh < menorm) {
        res.innerHTML += `<p>O menor do grupo é um homem de ${menorh} metros de altura</p>`
    }else{
        res.innerHTML += `<p>O menor do grupo é uma mulher de ${menorm} metros de altura.</p>`
    }
    media = soma/totalmulher
        res.innerHTML += `<p>A média da altura das mulheres é de ${media} metros</p>`
        res.innerHTML += `<p>O grupo tem ${homem.length} homens de um total de ${total} de pessoas.</p>`
        
}

