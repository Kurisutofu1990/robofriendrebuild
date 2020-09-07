import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Cardlist from './Cardlist';
// import App from './App'; (./App.js funktioniert auch -> ohne Angabe automatische js)
import * as serviceWorker from './serviceWorker';  
// serviceworker sorgt für schnellere Apps
import 'tachyons';
// render heißt ausführen
ReactDOM.render(
	<App />,
	// <Cardlist robots={robots}/>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
