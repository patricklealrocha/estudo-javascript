function media(){
    var n1 = window.document.getElementById('n1')
    var n2 = window.document.getElementById('n2')
    var nota1 = Number(n1.value)
    var nota2 = Number(n2.value)
    var media = (nota1 + nota2)/2
    var res = window.document.querySelector('div#res')

    // Aqui validamos as notas
    if(n1.value.length == '' || n2.value.length == ''){
        window.alert('Digite uma nota por favor')
        
    }else if(n1.value >= 11 || n2.value >= 11){
        window.alert('O valor deve ser entre 0 e 10')
    }else if(n1.value < 0 || n2.value < 0 ){
        window.alert('O valor deve ser entre 0 e 10')
    }else{
        //Aqui executamos os cálculos
        if(media >= 7 && media < 10){
            //window.alert(`Parabéns sua média é ${media} e você foi [APROVADO!!]`)
            res.innerHTML = `Parabéns sua média é ${media} e você foi [APROVADO!!]`
        }else if ( media == 10){
            //window.alert(`[SENSACIONAL] Você foi aprovado com honras. Sua média é ${media}`)
            res.innerHTML = `[SENSACIONAL] Você foi aprovado com honras. Sua média é ${media}`
        }else if(media < 7 ){
            //window.alert(`[QUE PENA] Precisa se esforçar mais. Sua média foi ${media}; você está reprovado`)
            res.innerHTML = `[QUE PENA] Precisa se esforçar mais. Sua média foi ${media}; você está reprovado`
        }
            
        }
    }
    //window.alert(`A primeira nota é ${nota1}`)
    //window.alert(`A segunda nota é ${nota2}`)
    //window.alert(`A média é ${media}`)

    


