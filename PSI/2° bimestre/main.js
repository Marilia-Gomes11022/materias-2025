// //fracamente tipada --> permite juntar coisas de tipos diferentes
// // booleando só vale minúsculo( true false
// //  &&(and)   ||(or)



// console.log("Olá mundo!") //printa as coisas com console.log
// //strings de três formas diferentes --> "" ''
// //  `${variavel}`  --> equivalente ao fstring


// const idade = 10

// console.log(typeof(idade))
// console.log(idade==10)
// console.log(idade===10)

// //a identação se faz com o uso de {} ao invés do tab

// if(idade < 18){
//     console.log('Você não pode ter acesso')
// }else if(idade >=18 && idade<25){
//     console.log('Você pode entrar com ressalvas...')
// }else{
//     console.log('Você pode entrar')
// }


// for(let i=0; i<10; i++){
//     console.log(i)
// }
// // i++ faz a incrementação / a cada repetição incrementa 1
// // i+=2 incrementa 2


// while(i<10){

// }

// //tipos de dados 
// // array = listas em python
// //objetos = dicionário em python

// array = [10, 'Tiago', true, 'Barreto'] //listas em python
// console.log(array)

// objetos = {nome:'Tiago', idade: 29, sexo: 'M'} //dicionários em python
// console.log(objetos['nome'])
// console.log(pbjetos.nome)

// const pessoas = [{
//     nome: 'Tiago',
//     idade: 29,
//     sexo: 'M',
//     endereco: {
//         rua: 'Rua lalala',
//         cidade: 'Natal',
//         numero: 20
//     }},{
//     nome: 'Marilia',
//     idade: 17,
//     sexo: 'F',
//     endereco: {
//         rua: 'Rua lelele',
//         cidade: 'Natal',
//         numero: 21
//     }},{
//     nome: 'Barreto',
//     idade: 29,
//     sexo: 'M',
//     endereco: {
//         rua: 'Rua lalala',
//         cidade: 'Natal',
//         numero: 20
//     }}
// ]
// console.log(pessoas.endereco)


// console.log('Tiago' && true && 'barreto')
// console.log('Tiago' || true || 'barreto')
// // se colocar && vai retornar o último
// // se colocar || vai retornar o primeiro

// console.log('Tiago' && false && 'barreto')
// console.log('Tiago' || false || 'barreto')
// // 


// const corUsuario = null
// const corPadrao = corUsuario || 'Padrão'

//Se o usuário nao tiver colocado nome, o nome padrão dele será user111
//se ele colocar o nome, apresenta o nome 

// const nome = null
// const nomePadrao = "user111"

// console.log(nome || nomePadrao)

// function soma(valor1, valor2){
//     return valor1 + valor2
// }

// console.log(soma(10,15))

function somaTodosValores(...valores){
let soma=0
    for(let i=0; i<valores.length; i++){
        soma +=valores[i]
        console.log(typeof(valore[i]))
    }
    return soma
}

console.log(somaTodosValores(10,20,30,40, 'texto'))
// ero function | função flash 
// n tem nome da função , nem função, usa apenas:  =>

