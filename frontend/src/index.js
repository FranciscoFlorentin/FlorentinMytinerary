import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";


const myStore=createStore(mainReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


