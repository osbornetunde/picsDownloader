import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Component/App/App';
import store from "./store";
import * as serviceWorker from './serviceWorker';

const render = () => {
    
    log()
    ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
}
const log = () => {
    console.log(store.getState());
}

render();
store.subscribe(render);
serviceWorker.unregister();
