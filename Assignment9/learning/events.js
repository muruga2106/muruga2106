const EventEmitter = require('events')

const MyEmitter = new EventEmitter({ captureRejections: true });

const Event1 = () => {
    console.log("This is event 1");
    // throw new Error("Error from sync function..");
}

const Event2 = async function () {
    throw new Error("Error from async function...");
}

const Event3 = function () {
    console.log("This is event 3");
}

MyEmitter.on('error', function(err){
    console.error('Handled error:', err.message);
})

// MyEmitter.on('newListener', (...args) => {
//     console.log("New lister is being added...",args)
// })

// MyEmitter.on('removeListener', (...args) => {
//     console.log("Listener is getting removed.." , args);
// })

MyEmitter.on('event1', Event1);
MyEmitter.once('event1', Event1);
// MyEmitter.once('event1', Event1);
MyEmitter.once('event1', Event3);
// MyEmitter.on('event2', Event1);

// MyEmitter.removeListener('event1', Event3);

MyEmitter.emit('event1');
MyEmitter.emit('event1');
console.log("End...")
// console.log(MyEmitter);1', Event1);
// MyEmitter.once('event1', Event3);