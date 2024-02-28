function saudacao(nome) 
{
    console.log(`Olá ${nome}, seja bem-vindo!`);
}
saudacao('aspas');
saudacao('cauanzin');
saudacao('less');
saudacao('sadhack');
saudacao('tuyz');


 function somar (valor1,valor2)
 {
    return valor1 + valor2

 }
 console.log(`5 + 3 = ${somar(5,3)}`)
 console.log(`5 + 3 = ${somar(3,9)}`)

 function desconto (valorvenda , valordesc)
 {
    return valorvenda * valordesc / 100
 }

 var valor= 300
 var desc = desconto(valor,5)

console.log('------------------------------------')
console.log(`total do pedido: R$ ${valor}`)
console.log(`total dos descontos (5%): R$ ${desc}`)
console.log(`valor final da venda: R$ ${valor-desc}`)
console.log('--------------------------------------')

function apresentacao (nome , idade , cidade)
{
    console.log(`apresento a vocês: ${nome}, que tem ${idade} e mora em ${cidade}!`)
}

apresentacao("manito", 35, "itaquera-sp")
