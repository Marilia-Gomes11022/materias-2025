// // 17/07/2025

// //FUNÇÕES DE ARRAYS

// //filter --> array tam <=
// //map --> array tam =
// //reduce --> entrega um único valor 
// //for each --> laço for

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// //filter
// const numerosFiltrados = numeros.filter((valor, indice, array)=>{
//     if(valor > 10){
//         return true
//     }
//     else{
//         return false
//     }
// })
// //recebe função de callback// 
// console.log(numerosFiltrados)

// const numerosPares = numeros.filter((valor)=>{
//     if(valor % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// })

// const numerosPares = numeros.filter((valor)=>{
//     if(valor % 2 === 0){
//         return valor
//     }
// })



// As pessoas que tem o nome com 5 letras ou mais(lenght)
// As pessoas com mais de 50 anos
// As pessoas que o nome termina com 'a' (endWith('a'))
const pessoas = [
    {nome: 'Tiago', idade: 29},
    {nome: 'João', idade: 19},
    {nome: 'Maria', idade: 43},
    {nome: 'Joana', idade: 63},
    {nome: 'Wallace', idade: 67}

]

let pessoas5let = pessoas.length(5)
console.log(pessoas5let)
// let pessoasmais50 = pessoas.filter((valor)=>{
//     if(valor > 50){
//         return 
//     }
// })