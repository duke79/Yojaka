import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MainRouter from './MainRouter.js'

ReactDOM.render(<MainRouter />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
