
const { exec, spawn, execFile, fork } = require("child_process");


// Explain difference ways in which child process can be created and difference b/w them.

//first way to create a child process... used to run commands.. it stores the result in a buffer and displays it after the execution ends..
exec('pwd', (err, stdout) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(stdout);
    }
})

/* 
Output

/home/muruga.r/muruga/muruga2106/Assignment8
 */


// ------------------------------------------------------------------------------------------


//second way to create child process... used to run commands.. instead of storing in buffer.. it streams data..
let p2 = spawn('ls', ['/usr', '-lh']);

p2.stdout.on('data', (data)=>{
    console.log("data:", data.toString());
});

p2.stderr.on('data', (err)=>{
    console.error('stderr:',err);
});

p2.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

p2.on('error', (err)=>{
    console.log('check');
})


/* Output

data: total 132K
drwxr-xr-x   2 root root  44K Jun 30 12:06 bin
drwxr-xr-x   2 root root 4.0K Sep 11  2024 games
drwxr-xr-x  44 root root  16K Jun  9 17:37 include
drwxr-xr-x 115 root root 4.0K Jun 10 10:41 lib
drwxr-xr-x   2 root root 4.0K Sep 11  2024 lib32
drwxr-xr-x   3 root root 4.0K Jun  9 17:47 lib64
drwxr-xr-x  23 root root  12K Jun  9 17:38 libexec
drwxr-xr-x   2 root root 4.0K Sep 11  2024 libx32
drwxr-xr-x  11 root root 4.0K Feb 26 09:38 local
drwxr-xr-x   2 root root  20K Jun 23 10:49 sbin
drwxr-xr-x 271 root root  12K Jun  9 17:45 share
drwxr-xr-x   7 root root 4.0K Jun 10 10:41 src */


// ------------------------------------------------------------------------------------------



//third way to create child proces.. used to run executable files..
execFile('./executable', (err, stdout, stderr)=>{
    if(err){
        console.error("error:", err);
        return;
    }
    if(stderr){
        console.error("error:", stderr);
        return;
    }
    console.log(stdout);
})

/* output

Hello world..! */


// ------------------------------------------------------------------------------------------


//fourth way to create child process.. using fork.. creates a Inter Process Communication channel

const child = fork('./child.js')


child.on('message', (message)=>{
    console.log("Message from client..", message);
})

child.send("Hello from parent");

setTimeout(()=>{
    process.exit(0);
}, 1000)

/* ouput

Message from client.. Hello from client..
Message from parent: Hello from parent */

// ------------------------------------------------------------------------------------------




// 3. Create a function which executes linux command (eg: ifconfig) from nodejs and prints the result in console..

exec('ifconfig', (err, stdout) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(stdout);
    }
})

