console.log("Start: common js")

function sayHello (msg) {
    setTimeout(()=>{
        console.log(msg);
    }, 1000)
}

setTimeout(()=>{
    console.log("timeout")
},0);

Promise.resolve((resolve, reject)=>{
    console.log("promise");
    resolve();
}).then(()=>{
    console.log("then");
})

console.log("end");
sayHello("loading..")

module.exports = sayHello;

console.log("End: common js")