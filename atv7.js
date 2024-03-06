// var pa = 100003;
// var pb = 300004;
// var anos = 0;

// while (pa < pb) {
//   anos++;
//   pa *= 1.03;
//   pb *= 1.015;
// }
// console.log(
//   `A população A (${Math.round(pa)}) irá passar a população B ${Math.round(
//     pb
//   )} em ${anos} anos!)`
// );

console.log(`___|___|___`);
console.log(`___|___|___`);
console.log(`   |   |   `);

var x = 0;
var o = 0;
var rodada = 0;

// while (rodada <= 3) {
//   rodada++;
//   coluna = Math.random() >= 0.5 ? "x" : "o";
//   linha = Math.random() >= 0.5 ? "x" : "o";
//   console.table(jogo);
// }
// console.log(jogo);

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}

jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);

console.table(tabuleiro);

switch (true) {
  case tabuleiro[0][2] === tabuleiro[1][2] &&
    tabuleiro[1][2] === tabuleiro[2][2]:
    if (tabuleiro[0][2] == "X") {
      console.log('o "X" ganhou!');
    } else {
      console.log('o "O" ganhou!');
    }

    break;

  case tabuleiro[1][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][1]:
    if (tabuleiro[2][1] == "X") {
      console.log('o "X" ganhou!');
    } else {
      console.log('o "O" ganhou!');
    }
  default:
    console.log("deu velha!");
    break;
}


