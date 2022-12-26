import React from 'react';
// main React module
import ReactDOM from 'react-dom/client';
// here is DOM, but it could be any module, for VR for example, as React can be used for anything. THis means where we are going to use React
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// because we are not exporting default, we need to use curly braces 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
