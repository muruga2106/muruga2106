
/* console.log("INDEX:", module)

const util = require("./lib/util.js")
console.log(util)

setImmediate(() => {
    console.log('The index.js module object is now loaded!', module)
    });
    
    console.log(arguments) */
    
    // module.exports = {
        //     asdfuisd
        // }
        
     
// console.log(module.exports);
// exports.id = 'index';

// console.log(module.exports);
// module.exports = "muruga";

// console.log(exports);
// console.log(module.exports);


// let obj = {
//     name: {
//         fname: "muruga"
//     }
// };

// const name = obj.name; // reference or new variable..

// name.lname = "perumal";

// console.log(obj.name);

// function sayThis(){
//     console.log(this);
// }

// sayThis();


let d1 = new Date();
let d2 = new Date('2004-6-21');
let d3 = new Date(2004, 5, 21);

// console.log(d3.toLocaleString());

// console.log(d3.getFullYear())
// console.log(d3.getDate())
// console.log(d3.getDay())
// console.log()
d3.setDate(d3.getDate()+10);
// console.log(d3.getTime());


const original = { a: 1, b: { c: 2 } };
// const clone = JSON.parse(JSON.stringify(original));

const clone = Object.assign({}, original);

clone.b.c = 99;
// console.log(original.b.c); 



//deep freeze function

function deepFreeze(obj){
    Object.freeze(obj);
    for(let key in obj){
        if(typeof obj[key] === 'object' && !Object.isFrozen(obj[key])){
            deepFreeze(obj[key]);
        }
    }
}

const obj = { a: 1, b: 2, c: {d: { e : 1}} };

// Object.freeze(obj);
// deepFreeze(obj)

let {c} = obj;
const newObj = { ...obj, c:{d:{f:5}}}

obj.c.d.e = 4;

const derivedObj = Object.create(obj);

for (const key in derivedObj) {
  if(derivedObj.hasOwnProperty(key)) console.log(key, derivedObj[key]);
}
console.log(newObj)
