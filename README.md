# Socket.IO Workshop

### Goals:

1. When a message is sent, it gets emitted to all client.
2. The message should only be sent to the socket in the same room as the sender.
3. When a user is typing it should appear in all clients in the same room. After one second of not typing it should stop appearing.

### Cheatsheet:

```js 
io.on('connection', socket => {

	// joining a room
	socket.join(name, callback);

	// leaving a room
	socket.leave(name, callback);

	// sending to the same client
	socket.emit('hello', 'can you hear me?', 1, 2, 'abc');

	// sending to all clients except sender
	socket.broadcast.emit('broadcast', 'hello friends!');

	// sending to all clients in 'game' room except sender
	socket.to('game').emit('nice game', "let's play a game");

	// sending to all clients in 'game1' and/or in 'game2' room, except sender
	socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");

	// sending to all clients in 'game' room, including sender
	io.in('game').emit('big-announcement', 'the game will start soon');

	// sending to individual socketid (private message)
	io.to(socketId).emit('hey', 'I just met you');

	// sending with acknowledgement
	socket.emit('question', 'do you think so?', function (answer) { });

	// sending to all connected clients
	io.emit('an event sent to all connected clients');
});
```