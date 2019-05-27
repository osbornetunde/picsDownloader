import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './Component/App/App';
import store from "./store";
import * as serviceWorker from './serviceWorker';


    
    ReactDOM.render((
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>), document.getElementById('root'));




serviceWorker.unregister();
