var anonasc = class Aluno {
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
      `olá, meu nome é ${this.nome} e eu tenho ${this.idademais} anos.Meu RA do meu curso de ${this.curso} é ${this.ra}`
    );
  }
};

var aluno1 = new Aluno("zezao", 16, 1243785343, "TI", 2007);

var aluno2 = new Aluno("robsu", 22, 83572384993, "mecanica automotiva", 2002);

aluno1.apresentarSe();
aluno1.idademais();

aluno2.apresentarSe();
aluno2.idademais();
