import React from 'react';

import Chat from './components/Chat';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ChatList from './components/ChatList';

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={ChatList} />
			<Route path="/:chatName" component={Chat} />
		</Switch>
	);
}

export default App;
