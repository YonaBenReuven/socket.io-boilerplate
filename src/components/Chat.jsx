import React, { useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Chat = () => {
	const [messageText, setMessageText] = useState('');
	const [name, setName] = useState('');
	const [messages, setMessages] = useState([]);
	const [typingName, setTypingName] = useState('');

	const boxTarget = useRef(null);

	const { goBack } = useHistory();
	const { chatName } = useParams();

	const addMessage = message => {
		setMessages(messages => [...messages, message]);
		boxTarget.current.scrollTop = boxTarget.current.scrollHeight
	}

	const onSend = event => {
		event.preventDefault();
	}

	const handleChange = setState => event => {
		setState(event.target.value);
	}

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
