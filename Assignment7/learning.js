const util = require('util');

function add (a, b, multiply){
    const sum = a+b;
    multiply(sum, (err, res)=>{
        if(err){
            throw err;
        }
        console.log(res)
    })
}

function multiply(sum, callback){
    if(sum%2 === 0){
        const err = new Error("The sum is even..!");
        callback(err, null);
        return;
    }
    callback(null, sum*10);
}

try{
    add(4,5, multiply);
}
catch(err){
    console.log(err);
}

const AddPromisify = util.promisify(add);

// function promisify (func) {
//     return function internalFunc(...args) {
//         return new Promise((res, rej) => {
//             try {
//                 res(func(args));
//             } catch (e) {
//                 rej(e);
//             }
//         });
//     }
// };


//custom promisify..

function add1 (a, b){
    const sum = a+b;
    // callback(sum, (err, res)=>{
    //     if(err){
    //         throw err;
    //     }
    //     console.log(res)
    // })
}

function customPromisify (func) {
    return function PromisifiedFunction(...args){
        console.log(args);
    } 
}

// const test = customPromisify(add1);
// test(5,2);

AddPromisify(5,2, multiply).then((val)=>{console.log(val)}).catch((e)=>{console.log(e)});

// const timerPromisify = util.promisify(
//     setTimeout(() => {
//         console.log("Hello world")
//     }, 100));

// timerPromisify().then(()=>{console.log("check")})



///trying custom promisify

// const { util } = require("undici-types");
const { promisify } = require("util");

function mul(err, sum){
    console.log(null, sum*10)
}

function add(a, b, mul, cb) {
    const sum = a + b;
    cb("hllo", sum);
    mul( new Error("hello"), sum)
}

//add a callback function
// function AddCallback(func){
//     return function(...args){
//         return func(...args, ()=>{
//             console.log("callback added..!");
//         })
//     }
// }

// function hello(name, callback){
//     console.log("hello", name);
//     callback();
// }

// const helper = AddCallback(hello);

// helper("muruga");

// function promisify(func){
//     return function(...args){
//         return new Promise(()=>{
//             func(...args, ()=>{

//             })
//         })
//     }
// }

const promisead =  promisify(add);
const promisemul =  promisify(mul);
// promisead(2,3, mul).then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log("err:", err)
// })

// fu(obj)

function hello(name, callback){
    console.log("Hello", name);
    callback();
}

function AddCallback(func){
    return function(...args){
        return func(...args, ()=>{
            console.log("Hello from callback");
        })
    }
}

const newHello = AddCallback(hello);

// newHello("muruga");


const mytimeout = promisify(setTimeout);

async function test() {
    console.log(await mytimeout(1000, 'one'));
    await mytimeout(1000, 'two');
    await mytimeout(1000, 'three');
}

test();
console.log('exit');