console.log(module?.loaded)

exports.a = 1;

exports.b = 2;
exports.c = 3;

setTimeout(()=>{
    console.log("check");
}, 1000)

setImmediate(()=>{
    console.log(module?.loaded)
})