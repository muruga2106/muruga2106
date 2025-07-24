
//database write operation..
const writeDB = (tableName, cb) => {
    console.log("write:" , tableName);
    cb();
}

const verifyWrite = () => {
    console.log("verified..");
}

function q1a () {
    writeDB("user1", verifyWrite);
    writeDB("user2", verifyWrite);
}

// q1a();

function q1b () {
    writeDB("user", ()=>{
        verifyWrite();
        writeDB("updateProfile", ()=>{
            verifyWrite();
        })
    })
}

// q1b();


const writeDBPromise = (tableName, cb) => {
    console.log("write:" , tableName);
    return new Promise((resolve, reject)=> {
        resolve("Success");
    })
}

const verifyWritePromise = (result) => {
    console.log(result);
}

function q2a () {
    writeDBPromise("user1").then(res => verifyWritePromise(res));
    writeDBPromise("updateProfile").then(res => verifyWritePromise(res));
}

// q2a();

function q2b () {
    writeDBPromise("user1")
    .then((res)=>{
        verifyWritePromise(res);
        writeDBPromise("updateProfile")
        .then((res)=>{
            verifyWritePromise(res);
        });
    })
}

// q2b();

async function q3 () {
    const res1 = await writeDBPromise("user1");
    verifyWritePromise(res1);
    const res2 = await writeDBPromise("updateProfile");
    verifyWritePromise(res2);
}

// q3();


