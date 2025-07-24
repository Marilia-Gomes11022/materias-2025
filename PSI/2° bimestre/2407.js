// let valor1 = 10
// let valor2 = 20
// valor1 = 100

// let soma = valor1 + valor2
// console.log(soma)

//realizar soma com funções


// function soma(valor1, valor2){
//     if(valor1 < 0 || valor2 < 0){
//         return 'Informações inválidas.'
//     }else{
//         const soma = valor1 + valor2
//         return soma
//     }
    

// }

// const receberResultado = soma(100, 200)
// console.log(receberResultado)

//se soma n retorna nada, vai sempre aparecer "undefined"


//      quando usar return e quando usar console.log
// return --> utilizar a informação em outro local(vai se encontrar com o usuário)
// console.log --> quando você precisa APENAS imprimir naquele momento/local(serve para debugar código)

function soma(valor1, valor2){
    if(typeof(valor1)==='number' && typeof(valor2) === 'number'){
        const soma = valor1 + valor2
        if(valor1 < 0 || valor2 < 0){
            return 'Informações inválidas.'
        }
        else{
            const soma = valor1 + valor2
            return soma
        }
    }
}

const receberResultado = soma('tiago', 200)
console.log(receberResultado)
