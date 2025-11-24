let tabuleiro = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let jogador = "X";
let jogoAtivo = true;

function mostrarTabuleiro() {
  console.clear();
  console.log(`
   ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
  ---+---+---
   ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
  ---+---+---
   ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
  `);
}

function jogar(pos) {
  if (!jogoAtivo) {
    console.log("O jogo já acabou!");
    return;
  }

  if (tabuleiro[pos] !== " ") {
    console.log("Essa posição já está ocupada!");
    return;
  }
 
  tabuleiro[pos] = jogador;
  mostrarTabuleiro();

  if (verificarVitoria()) {
    console.log(`Jogador  {jogador} venceu!`);
    jogoAtivo = false;
    return;
  }

  if (!tabuleiro.includes(" ")) {
    console.log("Empate!");
    jogoAtivo = false;
    return;
  }

  jogador = jogador === "X" ? "O" : "X";
  console.log(`Agora é a vez do jogador: ${jogador}`);
}

function verificarVitoria() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return combos.some(([a,b,c]) =>
    tabuleiro[a] === jogador &&
    tabuleiro[b] === jogador &&
    tabuleiro[c] === jogador
  );
}

// Inicia o jogo
mostrarTabuleiro();
console.log("Use: jogar(posicao)  // posições de 0 a 8");
console.log("Exemplo: jogar(0)");
