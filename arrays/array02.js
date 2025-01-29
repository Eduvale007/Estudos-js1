
<<<<<<< HEAD
const arr1 = [1,2,3]
const arr2 = [5,6,7]

console.log(typeof  arr1.toString())
console.log(  arr1.join(" - "))
let arr3 = arr1.concat(arr2, 4,89,9,10)
console.log(arr3)
=======
let player = prompt("Escolha: pedra, papel ou tesoura")

let answers = ["pedra", "papel", "tesoura"]


let  computadorPlayer = Math.floor(Math.random() * 3)

let computadorJogada = answers[computadorPlayer]

if (player === computadorJogada) {
    console.log("Empate!");
} else if (
    (player === "pedra" && computadorJogada === "tesoura") ||
    (player === "papel" && computadorJogada === "pedra") ||
    (player === "tesoura" && computadorJogada === "papel")
) {
    console.log("Você ganhou!");
} else {
    console.log("Você perdeu!");
}
>>>>>>> c8c8cc57ed2e32737a7c1791ca9c8fc85cc7dcec
