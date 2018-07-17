import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const MOUNT_NODE = document.getElementById('react-app')

const render = () => {
	ReactDOM.render(
		<App />,
		MOUNT_NODE,
	)
}

render()

if (module.hot) {
	module.hot.dispose(function () {
		// module is about to be replaced
	});
	module.hot.accept(function () {
		// module or one of its dependencies was just updated
	});
}