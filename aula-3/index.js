window.addEventListener('focus', event => {

    console.log('focus')

});

document.addEventListener('click', event => {

    console.log('click');

});
// datas

let agora =  new Date();

console.log(agora.toLocaleDateString('pt-br')); // retornará um timestamp