class pessoa {
  constructor(Pnome, Pidade) {
    this.nome = Pnome;
    this.idade = Pidade;
  }
  apresentarSe() {
    console.log(`olá, meu nome é ${this.nome} e eu tenho ${this.idade} ano.`);
  }
  envelhecer() {
    this.idade++;
  }
}

var p1 = new pessoa("zezao", 49);
var p2 = new pessoa("aspass", 90);

p1.apresentarSe();
p2.apresentarSe();

p1.envelhecer();
p2.envelhecer();

p1.apresentarSe();
p2.apresentarSe();
console.log("------------------------------------------------");
console.log("------------------abstração------------------");
console.log("------------------------------------------------");
console.log("");

class Pet {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  alimentar() {
    console.log(`${this.nome} foi alimentado`);
  }
}

const meupet = new Pet(`rex`, 3, `cachorro`);

console.log(
  `meu pet é um ${meupet.tipo}, chamado ${meupet.nome} e tem ${meupet.idade} anos!`
);

meupet.alimentar();

console.log("------------------------------------------------");
console.log("------------------abstração------------------");
console.log("------------------------------------------------");
console.log("");

class animal {
  constructor(nome, idade, alimentação) {
    this.nome = nome;
    this.idade = idade;
    this.alimentação = alimentação;
  }

  Alimentar() {
    console.log(`o animal ${this.nome} foi alimentado`);
  }

  emitirsom() {
    console.log(`som animal`);
  }
}

class catioro extends animal {
  alimentação() {
    console.log(`o catioro ${this.nome} foi alimentado`);
  }

  emitirsom() {
    console.log("au au au au");
  }
}

const pet = new animal("robin", 10, "Comida espacial");
const meuCachorro = new catioro("cleito", 6, "Ração");

console.log("");

meuCachorro.Alimentar()
meuCachorro.emitirsom()

console.log("");
console.log("------------------------------------------------");
console.log("------------------emcapsulamento------------------");
console.log("------------------------------------------------");
console.log("");

class Petzinho{
constructor (nome, idade, tipo) {

this.nome = nome;
this.idade = idade;
this.tipo = tipo;
}


getNome() {

return this.nome;
}

setNome (novoNome) {
this.nome = novoNome;
}
}
const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

console.log(novoPetzinho.getNome()); // "Bob"

novoPetzinho.setNome("Rex");

console.log(novoPetzinho.getNome()); // "Rex

console.log("");
console.log("------------------------------------------------");
console.log("------------------polimorfismo------------------");
console.log("------------------------------------------------");
console.log("");

class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}

// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}