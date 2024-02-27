console.log("------------------------------------------------");
console.log("------------------ATIVIDADE 03------------------");
console.log("------------------------------------------------");
console.log("");

var fruta = [
    "banana",
    "maçã",
    "pera",
    "uva",
    "morango"
    
]
console.table(fruta)


fruta.push ("tangerina")
console.table(fruta)

fruta.unshift("goiaba")
console.table(fruta)

console.log("no indice 5 ta a fruta:", fruta[5])

fruta.splice(4,1)
console.table(fruta)
 var copiafru = fruta.slice(2,5);
 console.table(copiafru);

 //nova atv
 console.log("------------------------------------------------");
 console.log("");

 var numero = [1,2,3,4,5,]
 console.table(numero)
 console.log("o 3° elemento do vetor é o ", numero[2])
 var copianumero = numero.slice();
 console.log("copia:")
 console.table(copianumero);

// var dobro = copianumero.map(valor => valor * 2);
copianumero[0] = numero[0] *2
copianumero[1] = numero[1] *2
copianumero[2] = numero[2] *2
copianumero[3] = numero[3] *2
copianumero[4] = numero[4] *2
 console.table(copianumero);
 
 var matrizz =
[ 
    [9, 0, 1], 
    [7, 1, 2],  
    [6, 2, 8],  
]; 
