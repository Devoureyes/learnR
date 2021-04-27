import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, post: 'Now look at this'},
    {id: 2, post: 'Today, i\'m went to the park and ate a hamburger'},
    {id: 3, post: 'Hello! It\'s my first post'},
]

let names = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Andy'},
    {id: 3, name: 'Andrew_bot'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'lol'},
    {id: 3, message: 'Yo'},
]


ReactDOM.render(
  <React.StrictMode>
    <App names={names} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
