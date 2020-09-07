var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12 && hora > 5){
    console.log('Bom dia!')
}else if(hora <= 18 && hora >= 12){
    console.log('Boa Tarde!')
}else if(hora > 00 && hora <= 4){
    console.log('Já passou da hora de dormir')
}else{
    console.log('Boa noite!')
}