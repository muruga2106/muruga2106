const { fork } = require("child_process");

const child = fork('./child.js');

child.on('message', (message)=>{
    console.log("Message from client..", message);
})

child.send("Hello from parent");