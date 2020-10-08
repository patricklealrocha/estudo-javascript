function multiplicar() {
    var num = window.document.getElementById('n1')
    var mult = window.document.getElementById('n2')
    var res = window.document.querySelector('div#res')

    res.innerHTML = `O resultado da multiplicação ${num.value} x ${mult.value} é ${num.value * mult.value}`
    
}