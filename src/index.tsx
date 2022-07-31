import React from 'react';

import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/order
import { Provider } from 'react-redux';

import './index.css';

import { HashRouter } from 'react-router-dom';

import App from 'App';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
        ,
    </HashRouter>,
);
