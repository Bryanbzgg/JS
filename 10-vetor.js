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

