var data1 = new Date();
console.log(data1);

var data2 = new Date("2005 05 12");
console.log(data2);

var data3 = new Date("2008 03 16");
console.log(`data: ${data3}`);
console.log(`ano: ${data3.getFullYear()}`);
console.log(`mes: ${data3.getMonth() + 1}`);
console.log(`dia: ${data3.getDate()}`);

var mes = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outobro",
  "novembro",
  "dezembro",
];
console.log(`retormando o mes por escrito`);
console.log(`mes: ${mes[data3.getMonth()]}`);

const diasemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
console.log(`dia: ${diasemana[data3.getDay()]}`);
console.log();

console.log(
  `a gabriela vai fazer ${data1.getFullYear() - data3.getFullYear()} anos`
);

const diferenca = data1.getTime() - data3.getTime();
console.log(`diferença: ${diferenca}`);

const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`idade: ${idade}`);

console.log("==============")

const diferencaAnos = data1.getFullYear() - data3.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


if(data1.getMonth() < data3.getMonth() || 
  (data1.getMonth() === data3.getMonth() && 
  data1.getDate() < data3.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
  }



