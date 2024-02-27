const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log(numeros[2]);

var dinos = ["tiranossauro rex", "estegossauro", "anquilossauro"];
console.log(dinos)
console.log(dinos[0])
console.log("")
console.table(dinos);

console.log("o vetor tem", dinos, " elementos");
dinos.push("brontossauro", "velociraptor");
console.table(dinos);

dinos.unshift("triceratops");
console.table(dinos);
dinos[3] = "titanosauro"

console.table(dinos);
console.log("")
console.log("")
console.log("------------------ cont aula --------------------------")
console.log("")

var dinos =[
    "cleito",
    "robsu",
    "jasmir",
    "josesvaldo",
    "frerencio"
]

var elementoprocurado = "cleito"
var posicao = dinos.indexOf(elementoprocurado);
console.log("o", elementoprocurado , "esta no indice", posicao)

var elementoprocurado = "frerencio"
var posicao = dinos.indexOf(elementoprocurado);
console.log("o", elementoprocurado , "esta no indice", posicao)

var elementoprocurado = "jasmir"
var posicao = dinos.indexOf(elementoprocurado);
console.log("o", elementoprocurado , "esta no indice", posicao)

var elementoprocurado = "robsu"
var posicao = dinos.indexOf(elementoprocurado);
console.log("o", elementoprocurado , "esta no indice", posicao)
