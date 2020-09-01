
//function > Quando você define uma função com parâmetros
function calc( n1 , n2, operador)
{
      return eval(`${n1} ${operador} ${n2}`);
}
// Declaração de função anonima > precisa declarar como valor, por isso dos parenteses e para chamá-la ou usá-la é logo após a construção da função como exemplificado 
(function( n1 , n2, operador)
{
      return eval(`${n1} ${operador} ${n2}`);
})(4,5,'*'); 

// arrow function
let clc = (n1, n2, operador) => {
    return eval(`${n1} ${operador} ${n2}`);
}
let resultado = calc(1,2,'+');
let resposta = clc(3,4,'*');

console.log(resultado);
console.log(resposta);
