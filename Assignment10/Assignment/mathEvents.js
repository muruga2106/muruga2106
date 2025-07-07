const { EventEmitter } = require('events');

const emitter = new EventEmitter();

function addFunction(a, b) {
    return a + b;
}

module.exports = {
    emitter,
    addFunction
};

emitter.on('add', addFunction);
