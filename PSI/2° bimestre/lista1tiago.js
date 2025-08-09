// questão 01
//Para iniciar de maneira simples, vamos começar apenas com uma impressão na tela. Utilizando o console.log exiba alguma mensagem no console.
console.log('Olá mundo!')

//questão 02
//Crie uma variável chamada nome e armazene o seu nome. Em seguida exiba a mensagem "Olá, [nome]" no console. Realize a criação com variável let e const.

let nome = 'Marilia'
console.log(`Olá, ${nome}`);

const name = 'Gomes'
console.log(`Olá, ${name}`);

//questão 03
//Elabore um algoritmo para realizar as seguintes operações matemáticas: Soma, subtração, multiplicação, divisão, resto da divisão
//Busque mais informações sobre a biblioteca Math para realizar outras 3 operações.

const num1 = 25
const num2 = 10

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let potencia = Math.pow(num1, num2);
let raiz = Math.sqrt(num1);
let valorAbsoluto = Math.abs(num1 - num2);


console.log(`soma = ${soma}`)
console.log(`subtração = ${sub}`)
console.log(`multiplicação = ${mult}`)
console.log(`divisão = ${div}`)
console.log(`potencia(num1^num2) = ${potencia}`)
console.log(`raiz quadrada de num1 = ${raiz}`)
console.log(`valor absoluto da subtração = ${valorAbsoluto}`)

//questão 04
//Utilize if e else para declarar se um número é ímpar ou é par.
let numero = 7
console.log(numero)
if(numero % 2 === 0){
    console.log('O número é par')
}else{
    console.log('O número é ímpar')
}

//questão 05
//Utilize if/ else if e else para receber um horário do dia e informar “bom dia”, “boa tarde”, “boa noite” ou “boa madrugada”.
let hora = 20

if(hora >= 0 && hora < 6){
    console.log('Boa madrugada');
}else if(hora >= 6 && hora < 12){
    console.log('Bom dia');
}else if(hora >= 12 && hora < 18){
    console.log('Boa tarde');
}else if(hora >= 18 && hora <=24){
    console.log('Boa noite');
}else{
    console.log('Hora inválida')
}

//questão 06
//Crie uma lista com 10 números, e em seguida, crie um laço de repetição para varrer todos os elementos da lista e armazenar os valores pares e os impares em uma nova lista separada.

const numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
    } else {
        impares.push(numeros[i])
    }
}
console.log("Números pares:", pares)
console.log("Números ímpares:", impares)

//questão 07
//Crie uma função que receba um número como parâmetro e retorne o seu quadrado.

function quadrado(numero) {
    return numero * numero
}
console.log(quadrado(5))

//questão 08
//Crie uma função que recebe um array de números e retorne um novo array contendo apenas os números maiores que 10.

function maiorQueDez(numeros) {
    const resultado = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            resultado.push(numeros[i])
        }
    }
    return resultado;
}
const arrayOriginal = [3, 12, 5, 18, 7, 25, 1, 11]
const filtrados = maiorQueDez(arrayOriginal)
console.log(`estes são os números maiores que dez: ${filtrados}`)

//questão 09
//Faça um algoritmo que receba a idade do usuário e informe se ele é criança (0-12), adolescente (13-17), adulto (18-59) ou idoso (60+).

function FaixaEtaria(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Você é uma criança"
    } else if (idade >= 13 && idade <= 17) {
        return "Você é um adolescente"
    } else if (idade >= 18 && idade <= 59) {
        return "Você é um adulto"
    } else if (idade >= 60) {
        return "Você é um idoso"
    } else {
        return "Idade inválida"
    }
}
console.log(FaixaEtaria(25))

//questão 10
//Implemente uma função que recebe um callback e executa esse callback após 3 segundos, imprimindo uma mensagem antes e depois da execução.

function atrasado(callback) {
    console.log("Iniciando... Aguarde 3 segundos.");
    setTimeout(() => {
        callback()
        console.log("Parabéns! Você foi paciente e esperou 3 segundos <3 ")
    }, 3000)
}
atrasado(() => {
    console.log("Não sei, apenas é")
})