import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Editor from './editor';
import  '../index.html';

ReactDOM.render(
  <Editor />,
  document.getElementById('root')
);
