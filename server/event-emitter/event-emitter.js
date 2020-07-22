const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('message', () => {
	console.log('message was recieved');
});

setTimeout(() => {
	myEmitter.emit('message');
}, 2000);
