console.log("Start: common js")

export default function sayHello (msg) {
    setTimeout(()=>{
        console.log(msg);
    }, 1000)
}

export function SayHello (msg) {
    setTimeout(()=>{
        console.log(msg);
    }, 1000)
}

// sayHello("loading..")

console.log("End: common js")