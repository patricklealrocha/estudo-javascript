console.log('Olá Mundo!');
console.log("Olá Mundo!");
//Declaração de variável
var olaMundo = "Olá Mundo! Hello World!";
console.log(olaMundo);
// usando let; variáveis e constantes
let   a = 0;
const b = 20;

console.log(a === b);// Operador de comparação
console.log(a == b); // Não leva em conta o tipo de dados

console.log(a == b || typeof a == 'string'); /*se uma das condições for verdadeira retorna true... só retorna false se as duas condições forem falsas */ 
console.log (a == b && typeof a == 'string');/*só retorna true se as duas condições forem verdadeiras ou se as duas condições forem falsas */

/*let cor = "vermelho";

if(cor === "verde")
{
    console.log("siga");
}else if(cor === "amarelo")
{
    console.log("atenção");
}else
{
    console.log("pare");
}*/
// usando o switch -> estrutura de controles com opções pré-definidas.
let cor = "azul";

switch(cor)
{
    case "verde" :
        console.log("siga em frente");
        break;
        
    case "amarelo" :
        console.log("cuidado! Atenção!");
        break;
        
    case "vermelho":
        console.log("Pare");
        break;

    default:
        console.log("não sei");
}

let n = 5;

for (let i = 0 ; i <= 10; i++){

    console.log(`${i} X ${n} = ${i*n}`);
}