

const numeros = [1,2,3,4,5,6]

let soma = 0
const pares = numeros.filter(numeros => numeros % 2 === 0)
pares.forEach(pares => soma+=pares )
console.log(soma)