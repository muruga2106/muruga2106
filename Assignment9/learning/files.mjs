// import fs from 'fs'

import fs from 'fs/promises'
// import { pipeline, Readable } from 'stream'


// fs.readFile("./text.txt", 'utf8', (err, data) => {
//   if (err) {
//     console.log("Got this error...!", err.message);
//   }
//   else {
//     console.log(data);
//   }
// })

// fs.readFile('./batman.jpg', (err, data) => {
//   if (err) {
//     console.log("Got this error...!", err.message);
//   }
//   else {
//     console.log("file size..", data.length, "bytes");
//   }
// })


// fs.writeFile('text.txt', "Hello world files.mjs", (err) => {
//   if (err) {
//     console.log("Err:", err);
//     return;
//   }
//   console.log("File written successfully..");
// });

// fs.readFile("./text.txt", 'utf8', (err, data) => {
//   if (err) {
//     console.log("Got this error...!", err.message);
//   }
//   else {
//     console.log(data);
//   }
// })

// let data = `\n ${new Date().toISOString()} Application Started ! \n`

// fs.appendFile('./text.txt', data, 'utf8', (err) => {
//   if (err) {
//     console.log("err :", err.message);
//     return;
//   }
//   console.log("Data appended successfully..");
// })

// let fileHandle;

// try {
//   fileHandle = await fs.open('./text.txt', 'w');
//   await fileHandle.write('First line\n');
//   await fileHandle.write('Second line\n');
//   await fileHandle.write('Third line\n');

//   console.log('Content written successfully');
// }
// catch (err) {
//   console.log("err:", err);
// }


// const data = Array(1000).fill().map((_, i) => {
//   `Line ${i + 1} hello world..! : ${'x'.repeat(100)}\n`
// })

// const readable = Readable.from(data);


// const writable = fs.createWriteStream('large-file.txt');

// try {
//   await pipeline(readable, writable);
//   console.log('Large file written successfully');
// } catch (err) {
//   console.error('Error writing file:', err);
// }


// const fs = require('fs');
// const { pipeline } = require('stream/promises');
// const { Readable } = require('stream');

// async function writeLargeFile() {
//   // Create a readable stream (could be from HTTP request, etc.)
//   const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`);
//   const readable = Readable.from(data);

//   // Create a writable stream to a file
//   const writable = fs.createWriteStream('large-file.txt');

//   try {
//     // Pipe the data from readable to writable
//     await pipeline(readable, writable);
//     console.log('Large file written successfully');
//   } catch (err) {
//     console.error('Error writing file:', err);
//   }
// }

// writeLargeFile();



// async function DeleteFile (path) {
//   try{
//     fs.access(path).catch((err)=>{
//       throw err;
//     })
//     fs.unlink(path).then(()=>{
//       console.log("File unlinked successfully..");
//     }).catch((err)=>{
//       console.log("Err:", err)
//     })
//   }
//   catch(err){
//     console.log(err?.message);
//   }
// }

// DeleteFile('./large-file.txt');

// let paths = ['./text1.txt', './text2.txt', './text3.txt'];

// async function DeleteMultipleFiles (paths) {
//     const response = await Promise.all(paths.map((path)=>
//       {
//         fs.unlink(path).then(()=>{
//           return "file deleted...";
//         }).catch((err)=>{
//           console.log("Err :", err);
//         })
//       })
//     )
//     console.log(response)
// }

// DeleteMultipleFiles(paths)


// async function DeleteDir(path) {
//   try{
//     const stat = await fs.stat(path);
//     if (!stat.isDirectory()) {
//       console.log('Path is not a directory');
//       return;
//     }

//     await fs.rm(path, {recursive : true, force: true});

//     console.log('Directory deleted successfully');
//   }
//   catch(err){
//     console.log(err);
//   }
// }

// DeleteDir('./test');


// async function EmptyDir (path) {

//   try{
//     const stats = await fs.stat(path);
//     if(!stats.isDirectory()){
//       console.log("The path is not a directory...");
//       return;
//     }

//     const elements = await fs.readdir(path, {withFileTypes : true});
    
//     await Promise.all(
//       elements.map((element)=>{
//         element.isDirectory() ? fs.rm(element.path, {recursive : true, force: true}) : fs.unlink(element.path);
//       })
//     )

//     console.log("folder items removed successfully..!")
//   }
//   catch(err){
//     console.log("err:", err);
//   }

// }

// EmptyDir('./test');