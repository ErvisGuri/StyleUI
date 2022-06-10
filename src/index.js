import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Exc 1
// var n = parseInt(prompt());

// var list = [];
// var i;
// for (i = 0; i < n - 1; i++) {
//   var num = parseInt(prompt());
//   list.push(num);
// }

// var total = (n * (n + 1)) / 2;

// for (i = 0; i < n - 1; i++) {
//   total = total - list[i];
// }

// console.log(total);



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
