
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