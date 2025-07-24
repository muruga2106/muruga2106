// const { spawn } = require("child_process");

// const child = spawn('ls', ['-lh']);

// child.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });

// const { fork } = require('child_process');

// const child = fork('child.js');

// child.on('message', (message) => {
//   console.log(`Message from child: ${message}`);
// });

child.send('Hello from parent');

// const { exec } = require('child_process');
// exec('ls -lh /usr', (err, stdout, stderr) => {
//   console.log(stdout);
// });

