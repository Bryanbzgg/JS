function ano(anonasc, anoatual) {
  return anonasc - anoatual;
}
var nasc = [24, 1, 2000];

console.log(
  `a pessoa que nasceu em 23/1/2000 , atualmente em 28/2/2024 tem ${ano(
    2024,
    nasc[2]
  )} anos`
);

var desempenho = 12;
function mediacomb(combustivel, kml) {
  return combustivel * kml;
}

console.log(`carro 1: 20L -> Percorre ${mediacomb(20, 12)}kms`);
console.log(`carro 1: 8L -> Percorre ${mediacomb(8, 12)}kms`);
console.log(`carro 1: 2L -> Percorre ${mediacomb(2, 12)}kms`);

console.log("");
console.log("");

// {
//     console.log("você pode votar")
// }
// else
// console.log('você não pode vota')
var idade = 17;
function idade2(idade) {
  if (idade >= 16) console.log("Pode votar");
  else console.log("não pode votar");
}
idade2(idade);

var idade3 = 40;
function votacao(idade9) {
  switch (true) {
    case idade3 < 16:
      console.log("você não pode votar");
      break;

    case idade3 >= 16 && 18 && 17:
      console.log("pode votar mas não é obrigatorio");
      break;

    default:
      console.log("você pode votar");
      break;
  }
}
votacao(idade);
