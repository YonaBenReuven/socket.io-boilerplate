import React, { useState, useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const Chat = () => {
	// the messages array is made up of objects that have 3 values: 
	// messageText: the content of the message,
	// name: the name of the sender,
	// recieved: if true, the message was sent to the client, if false it wat sent by the client
	const [messages, setMessages] = useState([]);
	const [messageText, setMessageText] = useState('');
	const [name, setName] = useState('');
	const [typingName, setTypingName] = useState('');

	const boxTarget = useRef(null);

	const { goBack } = useHistory();
	const { chatName } = useParams();


	const handleChange = setState => event => {
		setState(event.target.value);
	}

	const addMessage = message => {
		setMessages(messages => [...messages, message]);
	}

	useEffect(() => {
		boxTarget.current.scrollTop = boxTarget.current.scrollHeight;
	}, [messages]);

	const onSend = event => {
		event.preventDefault();
		// emit to the the server the message
	}

	useEffect(() => {
		// join the chat name room and start listening to events;

		return () => {
			// leave chat name room and stop listening to events;
		}
	}, []);

	useEffect(() => {
		// emit typing with name;
		// after 1 second emit stopped typing;
	}, [messageText]);

	return (
		<div className="chat">
			<div className="chatHeader">
				<button onClick={goBack}>back</button>
				<span className="chatName">{chatName}</span>
				{typingName && (
					<span className="isTyping">
						<i>{typingName} is typing...</i>
					</span>
				)}
			</div>
			<input
				className="nameInput"
				value={name}
				placeholder="name"
				onChange={handleChange(setName)}
				spellCheck="false"
			/>
			<div className="messagesBox" ref={boxTarget}>
				{messages.map(({ name, messageText, recieved }, index) => (
					<div
						key={index}
						className={`messageBox ${recieved ? "r" : "notR"}ecieved`}
					>
						<span className="name">{name}</span>
						<span className="messageText">{messageText}</span>
					</div>
				))}
			</div>
			<form
				onSubmit={onSend}
				className="messageForm"
			>
				<input
					value={messageText}
					placeholder="message"
					onChange={handleChange(setMessageText)}
					spellCheck="false"
				/>
				<button type="submit">send</button>
			</form>
		</div>
	);
}

export default Chat;
