// questão 01
//Para iniciar de maneira simples, vamos começar apenas com uma impressão na tela. Utilizando o console.log exiba alguma mensagem no console.
console.log('Olá mundo!')

//questão 02
//Crie uma variável chamada nome e armazene o seu nome. Em seguida exiba a mensagem "Olá, [nome]" no console. Realize a criação com variável let e const.

let nome = 'Marilia'
console.log('Olá,', nome)

const name = 'Gomes'
console.log('Olá,', nome)

//questao 03
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

//questao 04
//Utilize if e else para declarar se um número é ímpar ou é par.
let numero = 7
console.log(numero)
if(numero % 2 === 0){
    console.log('O número é par')
}else{
    console.log('O número é ímpar')
}

//questao 05
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

