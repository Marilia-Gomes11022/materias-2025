// promyses async e await 

//o que tinhamos antes com callbacks 

// function rand(min, max){
//     return Math.floor(Math.random() * (min-max) + min)
// }

// function esperaAi(msg, tempo, callback){
//     setTimeout(()=>{
//         console.log(msg)
//         if(callback){
//             callback()
//         }
//     }, tempo)
// }

// esperaAi()

//agora com as PROMISES 

// function rand(min, max){
//     return Math.floor(Math.random() * (max-min) + min)
// }

// function esperaAi(msg, tempo){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             //console.log(msg)
//             resolve(msg)
//         }, tempo)
//     })
// }

// esperaAi('Frase 1', rand(1000, 5000))
// .then((msg)=>{
//     console.log(msg)
//     return esperaAi('Frase 2', rand(1000, 5000))})
// .then((msg)=>{
//         console.log(msg)
//         return esperaAi('Frase 3', rand(1000, 5000))})
// .then((msg)=>{
//             console.log(msg)
//         })

// .catch((err)=>{
//     console.log(err)
// })



// DON'T ASK FOR HELP AGAIN 



// agora com assync e await

function rand(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject('Valor inválido!!')
        }
        setTimeout(()=>{
            //console.log(msg)
            resolve(msg)
        }, tempo)
    })
}

async function executa(){

    try{
        const fase1 = await esperaAi('Fase 1', rand(1000,5000))
        console.log(fase1)
        const fase2 = await esperaAi(222, rand(1000,5000))
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand(1000,5000))
        console.log(fase3)
    }catch(err){
        console.log(err)
    }
}

executa()
// prox aula é a dominação do domo 