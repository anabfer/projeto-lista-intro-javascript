// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = prompt("Qual é a altura?")
 const largura = prompt ("Qual é a largura?")
 console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Qual o ano atual?")
const anoNascimento = prompt("Qual o ano do seu nascimento?")
console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura*altura)
return imc
}
calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual o seu email?")
  const imprimeInformacoesUsuario = "Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " +  email + "."
  console.log(imprimeInformacoesUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite sua cor favorita:")
const cor2 = prompt("Digite sua segunda cor favorita:")
const cor3 = prompt("Digite mais uma cor:")

const arrayCor = [cor1, cor2, cor3]
console.log(arrayCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const stringMaiuscula = string.toUpperCase()
return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const vender = custo / valorIngresso
return vender
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1>string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0]
  return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoItem = array[array.length - 1]
return ultimoItem

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  let ultimo = array[array.length -1]
  array[0] = ultimo
  array[array.length  -1 ] = primeiro

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const comparar = string1.toUpperCase() === string2.toUpperCase()
return comparar
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual:"))
const dataNascimento = Number(prompt("Digite sua data de nascimento:"))
const anoRg = Number(prompt("Digite o ano em que sua identidade foi emitida:"))

const idade = anoAtual - dataNascimento
const idadeRg = anoAtual - anoRg

const renovaAte20Anos = (idade<= 20) && (idadeRg >= 5)
const renovaAte50anos = (idade > 20) && (idade <= 50) && (idadeRg >= 10)
const renovaAcima50Anos = (idade >50) && (idadeRg >=15)

console.log(renovaAte20Anos || renovaAte50anos || renovaAcima50Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const multiplo400 = ano % 400 === 0
const multiplo100 = ano % 100 === 0
const multiplo4 = ano % 4 === 0

return multiplo400 || (multiplo4 && !multiplo100)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("Tem mais de 18?")
const escolaridade = prompt("Tem ensino médio completo?")
const disponibilidade = prompt("Tem disponibilidade de horários?")

const resultado = idade === 'sim' && escolaridade === 'sim' && disponibilidade === 'sim'

console.log(resultado)




}