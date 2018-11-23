import "babel-polyfill";
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';


const store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
	<HashRouter>
        <Provider store={store} >
        <App />
        </Provider>
    </HashRouter>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
