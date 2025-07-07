

async function fuc () {
    setTimeout(()=>{
        console.log("Hello world.!");
    },1000);
}

async function foo () {
    console.log("check1");
    await fuc();
    console.log("check2");
}

const res = await foo();

console.log(res);