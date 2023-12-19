"use strict";
const sequenciaVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// Variável para controlar qual jogador está jogando
let currentPlayer;
// Verificar se a sequência esta correta para vitória
function verificarVitoria(casas) {
    return sequenciaVitoria.some((casasCorretas) => casasCorretas.every((casa) => casas[casa] === currentPlayer));
}
// Reiniciar o jogo
function reiniciarJogo() {
    for (let i = 0; i < 9; i++) {
        const inputElement = document.getElementById(`input${i}`);
        if (inputElement) {
            inputElement.value = "";
        }
    }
    // currentPlayer = "X" || "O";
    // mostrarMensagem("Jogo reiniciado");
}
// Mensagem da vitória do jogador
function mostrarMensagem(mensagem) {
    const mensagemElement = document.getElementById("mensagem");
    if (mensagemElement) {
        mensagemElement.innerText = mensagem;
    }
}
document.getElementById("reset")?.addEventListener("click", reiniciarJogo);
// Verificar cada input do jogo
for (let i = 0; i < 9; i++) {
    const inputElement = document.getElementById(`input${i}`);
    if (inputElement) {
        inputElement.addEventListener("input", () => {
            const valores = [];
            for (let j = 0; j < 9; j++) {
                const inputValue = document.getElementById(`input${j}`)?.value;
                valores.push(inputValue);
            }
            if (verificarVitoria(valores)) {
                mostrarMensagem(`Parabéns, Jogador ${currentPlayer} venceu!`);
                reiniciarJogo();
            }
            else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    }
}
