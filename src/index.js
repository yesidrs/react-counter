import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import CounterApp from './CounterApp.jsx';
import './index.scss';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<App greeting='Hola' />, divRoot);

ReactDOM.render(<CounterApp value={0} />, divRoot);
