let contador = 0;
while (contador < 9) 
{
  contador++;
  console.log(contador);
}
console.log("---------------------------------------");
var x = 20;

while (x > 10) 
{
  console.log("entrei no laço while...");
  x--;
}
console.log("terminei");
console.log("---------------------------------------");

var countdown = 20;

while (countdown > 0) 
{
  console.log(countdown);
  countdown--;
}
console.log("lançamento");
console.log("---------------------------------------");

var limite = 500
var fatura = 0
while (fatura<=limite)
{
    var gasto = Math.random() *100
    fatura += gasto
    console.log(`gastei R$ ${gasto.toFixed(2)} --------- fatura: R$ ${fatura.toFixed(2)}`);
    fatura>limite 
    && console.log('estourou limite do cartão')

}

do {
    
} while (condition);