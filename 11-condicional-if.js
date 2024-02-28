var anonasc = 2002

if (anonasc > 2003)
console.log('a pessoa nasceu depois de 2003!');

if (anonasc < 2003)
console.log('a pessoa nasceu antes de 2003!');

else
console.log('a pessoa nasceu antes de 2003!')

console.log('')
console.log('')
console.log('')
function sinaleiro(cor)
{
    if (cor == 'vermelho')
    console.log('pare')

    if (cor == 'amarelo')
    console.log('preste atenção')

    if (cor == 'verde')
    console.log('siga')

    else
    console.log("quebrado")

}


sinaleiro("verde")

console.log('')
console.log('')

//escrito pelo user
const loguin = "admin"
var senha = "123456"

//banco de dados

const loguinUser = "admin" 
const senhaUser = "admin"

//inicio if
if (loguin == loguinUser && senha == senhaUser)
{
    console.log('Acesso permitido')

}
else
console.log('acesso negado')

//desvio Condicional if com bloco de comandos

console.log("__------------__")

var idade1 =18

if (idade1 <=18)
{

    console.log("entrou no if")
    idade1++
    console.log("incrementavel a idade...")
    console.log(`A nova idade é ${idade1}`)
    console.log('Agora estou saindo do bloco de codigos if')
}
console.log("terminei")

var preco = 500
var resultado = preco <= 100 ? "ta barato" : "vish ta caro"
console.log(resultado)

