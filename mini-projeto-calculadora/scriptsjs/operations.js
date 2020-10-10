
function somar(){
    let numero1 = window.document.querySelector('input#n1');
    let num1 = Number(numero1.value);

    let numero2 = window.document.querySelector('input#n2');
    let num2 = Number(numero2.value);

    let resultado = document.querySelector('p#res');

    let res = num1 + num2;

    resultado.innerHTML +=`A soma é <strong>${res}</strong>`;

}

function subtrair(){
    let numero1 = window.document.querySelector('input#n1');
    let num1 = Number(numero1.value);

    let numero2 = window.document.querySelector('input#n2');
    let num2 = Number(numero2.value);

    let resultado = document.querySelector('p#res');

    let res = num1 - num2;

    resultado.innerHTML +=`A subtração é <strong>${res}</strong>`;

}

function multiplicar(){
    
    let numero1 = window.document.querySelector('input#n1');
    let num1 = Number(numero1.value);

    let numero2 = window.document.querySelector('input#n2');
    let num2 = Number(numero2.value);

    let resultado = document.querySelector('p#res');

    let res = num1 * num2;

    resultado.innerHTML +=`A multiplicação é <strong>${res}</strong>`;
}

function dividir(){

    let numero1 = window.document.querySelector('input#n1');
    let num1 = Number(numero1.value);

    let numero2 = window.document.querySelector('input#n2');
    let num2 = Number(numero2.value);

    let resultado = document.querySelector('p#res');

    let res = num1 / num2;

    resultado.innerHTML +=`A divisão é <strong>${res}</strong>`

}

