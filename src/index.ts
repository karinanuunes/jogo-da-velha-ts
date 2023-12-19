const sequenciaVitoria: number[][] = [
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
let currentPlayer: "X" | "O";

// Verificar se a sequência esta correta para vitória
function verificarVitoria(casas: Array<string>): boolean {
  return sequenciaVitoria.some((casasCorretas) =>
    casasCorretas.every((casa) => casas[casa as number] === currentPlayer)
  );
}

// Reiniciar o jogo
function reiniciarJogo(): void {
  for (let i = 0; i < 9; i++) {
    const inputElement = document.getElementById(
      `input${i}`
    ) as HTMLInputElement | null;

    if (inputElement) {
      inputElement.value = "";
    }
  }
  // currentPlayer = "X" || "O";
  // mostrarMensagem("Jogo reiniciado");
}

// Mensagem da vitória do jogador
function mostrarMensagem(mensagem: string): void {
  const mensagemElement = document.getElementById(
    "mensagem"
  ) as HTMLDivElement | null;

  if (mensagemElement) {
    mensagemElement.innerText = mensagem;
  }
}

document.getElementById("reset")?.addEventListener("click", reiniciarJogo);

// Verificar cada input do jogo
for (let i = 0; i < 9; i++) {
  const inputElement = document.getElementById(
    `input${i}`
  ) as HTMLInputElement | null;

  if (inputElement) {
    inputElement.addEventListener("input", () => {
      const valores: Array<string> = [];
      for (let j = 0; j < 9; j++) {
        const inputValue = (
          document.getElementById(`input${j}`) as HTMLInputElement
        )?.value;
        valores.push(inputValue);
      }

      if (verificarVitoria(valores)) {
        mostrarMensagem(`Parabéns, Jogador ${currentPlayer} venceu!`);
        reiniciarJogo();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  }
}
