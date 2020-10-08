function verificar() {
    
    var letra = window.document.getElementById('letra')
    var res = window.document.querySelector('div#resultado')
    //window.alert(`A letra digitada foi ${letra.value}`)
    if(letra.value.length > 1 || letra.value == '' || letra.value == Number(letra.value))
    {
        window.alert(`[ERRO] Digite apenas uma letra por favor`)
    }
    else{

        if(letra.value === 'a' || letra.value === 'A'){
          //  window.alert(`A letra digitada foi:  ${letra.value} . Ela é uma vogal.`)
            res.innerHTML = `Você digitou a letra:  <strong>${letra.value}</strong> . Ela é uma vogal.`

        }else if(letra.value === 'e' || letra.value === 'E'){
            // window.alert(`Você digitou a letra:  ${letra.value} . Ela é uma vogal.`)
            res.innerHTML = `Você digitou a letra:  <strong>${letra.value}</strong> . Ela é uma vogal.`

        }else if (letra.value === 'i' || letra.value === 'I'){
            //window.alert(`Você digitou a letra: ${letra.value}. Ela é uma vogal.`)
            res.innerHTML = `Você digitou a letra:  <strong>${letra.value}</strong> . Ela é uma vogal.`

        }else if (letra.value === 'o' || letra.value === 'O'){
            //window.alert(`Você digitou a letra: ${letra.value}. Ela é uma vogal.`)
            res.innerHTML = `Você digitou a letra:  <strong>${letra.value}</strong> . Ela é uma vogal.`

        }else if(letra.value === 'u' || letra.value === 'U'){
            //window.alert(`Você digitou a letra: ${letra.value}. Elaé uma vogal.`)
            res.innerHTML = `Você digitou a letra:  <strong>${letra.value} </strong>. Ela é uma vogal.`

        }else{
            //window.alert(`Você digitou a letra: ${letra.value}. Ela é uma consoante.`)
            res.innerHTML = `Você digitou a letra:  <strong>${letra.value}</strong> . Ela é uma consoante.`
        }
    }
}
