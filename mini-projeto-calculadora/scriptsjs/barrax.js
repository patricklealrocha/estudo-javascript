function porx(){
    
    let numero1 = window.document.querySelector('input#n1');

    let num1 = Number(numero1.value);

    let resultado = document.querySelector('p#res');

    res = 1 / num1;
    
    resultado.innerHTML +=`O resultado é <strong>${res}</strong>`;
}