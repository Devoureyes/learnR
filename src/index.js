import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
    rerenderEntireTree(store.getState());
})

reportWebVitals();