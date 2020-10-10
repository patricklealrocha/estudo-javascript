/*
// Declaração de arrays e um laço para percorrer o vetor e mostrar o que há em cada índice
let vetor = ['palio','toro','uno',3,true,new Date(),function(){}];

vetor.forEach(function(valor, indice){
    console.log(indice, valor);
});
*/

// Orientação à objeto
let celular = function () {
    this.cor = 'prata';

    this.ligar = function () {
        console.log('uma ligação');
        return 'ligando';
    }   
}

let objeto = new celular();

console.log(objeto.ligar());