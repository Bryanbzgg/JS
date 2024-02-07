var nome = "cleito";
var banco = "96bank";
var agencia = 12;
var conta = 190;
var saldo = 1500;
console.log(
  "ola",
  nome,
  "aqui é do banco",
  banco,
  "agencia",
  agencia,
  "e aqui esta sua conta:"
);
console.log(
  "sua conta é o numero",
  conta,
  "e você tem",
  saldo,
  "de saldo restante."
);
console.log("--------------------");
console.log("extrato:");
console.log("supermercado furla, -R$190");
saldo = saldo - 190;
console.log("saldo restante:", saldo);
console.log("steam elden ring -R$230");
saldo = saldo - 230;
console.log("saldo restante:", saldo);
console.log("fifa mania -R$65");
saldo = saldo - 65;
console.log("saldo restante:", saldo);
console.log("gasto cartao credito -R$400");
saldo = saldo - 400;
console.log("saldo restante:", saldo);
console.log("petshop do Joe -R$120");
saldo = saldo - 120;
console.log("saldo restante:", saldo);
console.log("-----------------------------------");
console.log("Bem vindo de volta", nome, "seu saldo atual é de", saldo);
