//Create two functions add (a,b) and multiply (a,b). 
//Call add, then use the result of add function to calculate product with 10. 
//Using all four ways: callback, promise, async-await and convert callback to promise using promisify.

const util = require('util')

const multiplyByTen = ( val) => {
    setTimeout(()=>{
        console.log (val*10);
    }, 10, val);
}

const add = (a,b, mulFunction) => {
    setTimeout((a,b, mulFunction)=>{
        const sum = a+b;
        mulFunction(sum);
    }, 10, a, b, mulFunction);
}

function addforpromisify(a, b, callback){
    setTimeout(()=>{
        const sum = a+b;
        callback(null, sum);
    }, 10);
}

add(5,4, multiplyByTen);

// //using callback (callback hell)
// const myFun  = (a, b, multFun) => {
//     setTimeout((a, b, multFun)=>{
//         const sum = add(a, b);
//         setTimeout((sum, callback)=>{
//             const result = callback(sum); // multiply buy 10
//             setTimeout((result)=>{
//                 console.log(result);
//             },10, result)
//         }, 10, sum, multFun);
//     },10, a, b, multFun)
// }


//based on promises
const newAdd = (a, b) => {
    return new Promise((resolve, reject)=>{
        resolve(a+b);
    })
}

const newMul = (val) => {
    return new Promise((resolve, reject)=>{
        resolve(val*10);
    })
}

newAdd(1,4).then((sum)=>{
    newMul(sum).then((result)=>{
        console.log(result);
    })
})

//based on async-await
const myfun = async () => {
    const sum = await newAdd(4,2);
    const mul = await newMul(sum);
    console.log(mul)
}

myfun();


// based on promisify

const AddPromisify = util.promisify(addforpromisify);

AddPromisify(2,1).then((result)=>{
    multiplyByTen(result);
})
