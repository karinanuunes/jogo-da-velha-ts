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
  const vitoria = sequenciaVitoria.some((casasCorretas) =>
    casasCorretas.every((casa) => casas[casa as number] === currentPlayer)
  );
  if (vitoria) {
    mostrarMensagem(`Parabéns, Jogador ${currentPlayer} venceu!`, true);
    // setTimeout(() => {
    //   reiniciarJogo();
    // }, 3000);

    for (let i = 0; i < 9; i++) {
      const inputElement = document.getElementById(
        `input${i}`
      ) as HTMLInputElement | null;

      if (inputElement) {
        inputElement.classList.add("win");
      }
    }
  }
  return vitoria;
}

// Reiniciar o jogo
function reiniciarJogo(): void {
  for (let i = 0; i < 9; i++) {
    const inputElement = document.getElementById(
      `input${i}`
    ) as HTMLInputElement | null;

    if (inputElement) {
      inputElement.value = "";
      inputElement.classList.remove("win");
    }
  }
}

// Mensagem da vitória do jogador
function mostrarMensagem(mensagem: string, seGanha: boolean): void {
  const mensagemElement = document.getElementById(
    "mensagem"
  ) as HTMLDivElement | null;

  if (mensagemElement) {
    mensagemElement.innerText = mensagem;
    if (seGanha) {
      mensagemElement.classList.add(".win");
    } else {
      mensagemElement.classList.remove(".win");
    }
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

      verificarVitoria(valores);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  }
}
