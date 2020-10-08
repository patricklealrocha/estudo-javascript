function resultado(){
    var n1 = window.document.getElementById('n1')
    var n2 = window.document.getElementById('n2')
    var n3 = window.document.getElementById('n3')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var num3 = Number(n3.value)
    
    var res = window.document.querySelector('div#res')

   // window.alert(`Os números escolhidos foram ${num1} ; ${num2} ; ${num3} `)

    if(num1 > num2 && num1 > num3){
        
        res.innerHTML = `O maior é ${num1}`
    }else if (num2 > num1 && num2 > num3){
        res.innerHTML = `O maior é ${num2}`
    }else if (num3 > num2 && num3 > num1){
        res.innerHTML = `O maior é ${num3}`
    }
}