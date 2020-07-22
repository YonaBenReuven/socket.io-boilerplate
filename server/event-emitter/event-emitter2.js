const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

const messageListener = content => {
	console.log(`message was recieved: ${content}`);
}

myEmitter.on('message', messageListener);
myEmitter.once('message', messageListener);

setTimeout(() => myEmitter.emit('message', '#1'), 1000);
setTimeout(() => myEmitter.emit('message', '#2'), 2000);
setTimeout(() => myEmitter.emit('message', '#3'), 3000);

setTimeout(() => myEmitter.off('message', messageListener), 4000);

setTimeout(() => myEmitter.emit('message', '#4'), 5000);
