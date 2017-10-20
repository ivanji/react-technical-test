import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import {fetchCelebrities} from './actions/searchAction'

const store = configureStore();
store.dispatch(fetchCelebrities());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);