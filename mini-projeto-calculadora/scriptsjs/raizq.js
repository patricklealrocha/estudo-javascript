function raiz(){
    
    let numero1 = window.document.querySelector('input#n1');
    let num1 = Number(numero1.value);

    let resultado = document.querySelector('p#res');

    var x = num1;
    // console.log("Valor do quadro " + num1);   
    // subtração até resultado for zero
    for(var i = 1; i <= num1; i++){

       // console.log(i);
        var x = x - i;
        i++;
      //  console.log("valor de x" + x);
        if(x - i <= 0){
        break;
        }
    }
        
   
    // com base no valor de x , identificar quantos números ímpares existem.
    var contador = i - 1;
    //console.log("Valor do contador" + contador);
    var impar = 0;

    for (var l = 0 ; l <= contador ; l++){
    
        if(l % 2 == 0){
            impar += 1;
        }
    }
    //console.log("valor de ímpar" + impar);
    /* Aqui deve ser feito um laço, onde o valor (num1) subtrai dos números ímpares em sequencia
    se o resultado for 0 então o laço para, caso contrário, pega o próximo número ímpar e subtrai do resultado.
    Se mantém o registro de quantas vezes o loop foi feito. A soma dos loops é o resultado final*/
    
    if(x !== 0 ){
        
        //console.log("O valor não é um quadrado perfeito.");
        resultado.innerHTML += `O valor ${num1} não é um quadrado perfeito.`;
        var c = impar.toString() + '.' + x.toString();
        var aprox = Number(c)
        //console.log(`A raiz é aproximadamente ${aprox}`);
        resultado.innerHTML += `A raiz de ${num1} é aproximadamente ${aprox}.<br>`;
    }else{
        resultado.innerHTML +=`A raiz quadrada de ${num1} é <strong>${impar}</strong><br>`;
    }
    

}
/*
a = 34;
x = a;

for(var i = 1; i <= a; i++){

console.log(i);
var x = x - i;
i++;
console.log("valor de x" + x);
if(x - i <= 0){
break;
}
}
var contador = i-1;
console.log(`Valor final de i ${contador}`);

var impar = 0
for (var l = 0 ; l <= contador ; l++){
    
    if(l % 2 == 0){
        impar += 1;
    }
}
if(x !== 0 ){
    console.log("O valor não é um quadrado perfeito.");

    var c = impar.toString() + '.' + x.toString();
    var aprox = Number(c)
    console.log(`A raiz é aproximadamente ${aprox}`);
}else{
    console.log(`A raiz quadrada de a é ${impar}`);
}*/
