//questã0 01
//Crie uma arrow function chamada saudar que receba um nome como parâmetro e retorne a frase: "Olá, [nome]!"

const saudar = (nome) => `Olá, ${nome}!`
console.log(saudar("Juleika"))

//questão 02
//Crie uma função chamada executarOperacao que receba dois números e uma função de callback. A função executarOperacao deve executar o callback passando os dois números como argumentos e retornar o resultado. Em seguida, crie duas funções de callback usando arrow functions para:
// somar dois números e retornar o valor.
// multiplicar dois números e retornar o valor.

function executarOperacao(num1, num2, callback) {
    return callback(num1, num2);
}

let soma = (a, b) => a + b;
let mult = (a, b) => a * b

console.log('esta é a soma:', executarOperacao(5, 3, soma))
console.log('esta é a multiplicação:', executarOperacao(5, 3, mult))


//questão 03
//Crie uma função chamada exibirMensagem que receba dois parâmetros: nome e uma função de callback que gere a mensagem com base no nome. A função exibirMensagem deve apenas chamar o callback passando o nome, e retornar o resultado da execução. Em seguida, crie duas arrow functions como possíveis callbacks:
// mensagemDeBoasVindas: retorna "Seja bem-vindo, [nome]!"
// mensagemDeDespedida: retorna "Até logo, [nome]!"

function exibir(nome, callback) {
    return callback(nome)
}
const boasVindas = (nome) => `Seja bem-vinda, ${nome}!`
const despedida = (nome) => `Até logo, ${nome}!`

console.log(exibir('Juleika', boasVindas))
console.log(exibir('Sarah', despedida))

//questão 04
//Crie uma função chamada verificarNumero que receba um número como parâmetro e retorne uma Promise. A Promise deverá:
// Ser resolvida se o número for positivo, com a mensagem: "Número válido: [número]"
// Ser rejeitada se o número for negativo, com a mensagem: "Erro: número negativo não é permitido"
// Utilize o elementos .then() e .catch() para exibir o resultado da Promise no console.

function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero >= 0) {
            resolve(`Número válido: ${numero}`)
        } else {
            reject('Erro: número negativo não é permitido')
        }
    })
}

verificarNumero(10)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))
verificarNumero(-5)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))

//questão 05
//Crie uma função chamada consultarPaciente que receba um nome de paciente e retorne uma Promise. A Promise deverá:
// Resolver com a mensagem: "Consulta para [nome] agendada com sucesso."
// Rejeitar com a mensagem: "Erro: nome do paciente não pode ser vazio." se o nome for uma string vazia.
//Em seguida, lembre-se de usar o .then() e .catch() para exibir a mensagem no console.



//questão 06
//Reaproveite a função consultarPaciente da questão anterior que retornava uma Promise.
//Agora, crie uma função async chamada agendarConsulta que receba o nome do paciente, e chame a função consultarPaciente usando await e imprima a mensagem retornada no console. Uma observação importante é que para esse caso inclua um bloco try...catch para capturar e mostrar possíveis erros.

function consultarPaciente(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nome) {
                resolve(`Consulta para ${nome} agendada com sucesso!`)
            } else {
                reject("Erro: nome do paciente não foi fornecido.")
            }
        }, 1000)
    })
}

async function agendarConsulta(nome) {
    try {
        const mensagem = await consultarPaciente(nome)
        console.log(mensagem)
    } catch (error) {
        console.error("Falha ao agendar consulta:  \n", error)
    }
}

agendarConsulta("Marilia")
agendarConsulta("")

//questão 07
//Estarei agora passando para vocês uma função que já retorna uma Promise, para que na sequência vocês utilizem o Async e Await.
//Agora criem uma função async chamada checarAtendimento que receba a hora atual entre 0h e 23h, utilizem await para chamar a função verificarHorario e imprimam no console a mensagem recebida.
//Use um bloco try...catch para capturar e mostrar possíveis erros.

function verificarHorario(atualHora) {
    return new Promise((resolve, reject) => {
        if(typeof atualHora !== "number" || atualHora < 0 || atualHora > 23) {
            reject('Erro: hora inválida.')
        } else if(atualHora >= 8 && atualHora < 17){
            resolve('Estamos abertos para atendimento')
        } else{
            reject('Estamos fechados no momento.')
        }
    })
}

async function checarAtendimento(horaAtual) {
    try {
        const mensagem = await verificarHorario(horaAtual)
        console.log(mensagem)
    } catch (erro) {
        console.log(erro)
    }
}

checarAtendimento(15)
checarAtendimento(30)