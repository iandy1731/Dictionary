import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.querySelector(".app__body")
);

