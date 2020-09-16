/*let num = [5,6,7,8]

console.log(`Nosso vetor é o ${num}`)
num[4] = 3
num.push(7)
console.log(num) 
num.length // largura do vetor

num.sort() // coloca os elementos em ordem crescente
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/

let valores = [8,7,6,5,4,7,8,9,12]

//percurso natural dos vetores
/*for(let pos = 0 ; pos < valores.length; pos++ ){
    console.log(valores[pos])
}*/

for(let pos in valores){
    console.log(valores[pos])
}