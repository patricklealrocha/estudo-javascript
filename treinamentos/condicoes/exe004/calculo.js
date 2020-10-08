let a = 10;
let b = 5;
let c = 0;

console.log(`A variável a vale ${a}`);
console.log(`A variável b vale ${b}`);

c = a ;
a = b;
b = c;
console.log("Não é necessário um if para trocar valores de duas variáveis")
console.log(`Agora a vale ${a}`);
console.log(`Agora b vale ${b}`);
