import React from 'react';
import { Link } from 'react-router-dom';

const chats = ['my-chat', 'yeet'];

const ChatList = () => {
	return (
		<div className="chat">
			<div className="chatHeader">
				<span className="chatName">Chat List</span>
			</div>
			<div className="chatList">
				{chats.map(chatName => (
					<Link to={`/${chatName}`}>
						<button>{chatName}</button>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ChatList;