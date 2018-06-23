import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Routes from './Routes/Routes'

window.papa = {
    title: "ReacTron",
    home: "http://www.google.com/ncr"
}
ReactDOM.render(<Routes />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
