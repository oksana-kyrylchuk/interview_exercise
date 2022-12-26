import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {setupStore} from "./store";
import {App} from "./App";
import './index.scss';

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
