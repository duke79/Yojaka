import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes/Routes'




import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)


window.papa = {
    title: "ReacTron",
    home: "http://www.google.com/ncr"
}

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
