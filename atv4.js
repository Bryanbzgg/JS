console.log("------------------------------------------------");
console.log("------------------ATIVIDADE 04------------------");
console.log("------------------------------------------------");
console.log("");

var matrizz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
];

console.table(matrizz);

console.log("primeira diagonal: ", matrizz[0][0], matrizz[1][1], matrizz[2][2]);
console.log("segunda diagonal: ", matrizz[2][2], matrizz[1][1], matrizz[0][0]);
console.log("------------------------------------------------");
console.log("terceira diagonal: ", matrizz[2][0], matrizz[1][1], matrizz[0][2]);
console.log("quarta diagonal: ", matrizz[0][2], matrizz[1][1], matrizz[2][0]);

console.log("");
console.log("");
console.log("");

var cadastro = [
  "matias",
  20,
  "azul",
  "melancia",
  "avenida paulista 234",
  "bonelso",
];
console.log("olá", cadastro[0], "!", "Seja bem vindo ao nosso sistema!");
console.log(
  "você mora no endereço",
  cadastro[4],
  ", e tem um pet chamado",
  cadastro[5]
);
console.log("sua idade é", cadastro[1], "e gosta muito da fruta", cadastro[3]);
console.log("sua cor favorita é", cadastro[2]);
