var anonasc;
class Aluno {
  constructor(Pnome, Pidade, Pra, Pcurso, Pnasc) {
    this.nome = Pnome;

    this.idade = Pidade;
    this.ra = Pra;
    this.curso = Pcurso;
    this.nascimento = Pnasc;
  }

  idademais() {
    return 2024 - this.nascimento;
  }

  apresentarSe() {
    console.log(
      `olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.Meu RA do meu curso de ${this.curso} é ${this.ra}`
    );
  }
}

const aluno1 = new Aluno("zezao", 16, 1243785343, "TI", 2007);

var aluno2 = new Aluno("robsu", 22, 83572384993, "mecanica automotiva", 2002);

aluno1.apresentarSe();

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  tipo() {
    console.log(
      `você pediu um sorvete ${this.tamanho}, de ${this.sabor} por R$${this.preco}`
    );
  }
  setpreco(novopreco) {
    this.preco = novopreco;
  }
}
var sorvetemorang = new sorvete("morango", 7, "grande");
var sorvchoc = new sorvete("chocolate", 5, "medio");
var sorvmelan = new sorvete("melancia", 5, "medio");
sorvetemorang.tipo();
sorvchoc.tipo();
sorvmelan.tipo();
sorvetemorang.setpreco(10.51);
sorvetemorang.tipo();

function versenha(t1, t2) {
  var senha = t1.toLowerCase();
  var testesenha = t2.toLowerCase();

  return senha === testesenha;
}

var senha = "eae mano";
var testesenha = "Eae mano";
var teste2 = versenha(senha, testesenha);
console.log(teste2);

console.log("-------------------------------");

function estrairnumero(str) {
  const regex = /\d+/g;
  return str.match(regex);
}

const numero = " 0 4 9 5865 asrhgfdsfgh 34";
const numerosep = estrairnumero(numero);
console.log(numerosep);

function inverterfrase(frase){
  var palavras = frase.split("")
  return palavras.reverse().join("")

}

var frase= "essa frase esta invertida"
var fraseinv = inverterfrase(frase)
console.log(fraseinv)