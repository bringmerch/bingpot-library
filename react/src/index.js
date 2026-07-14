/**
 * 입구임.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // js가 생략됨.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // id가 root인 애는 public 폴더에 있음.
root.render(
  <React.StrictMode>
    <App />
  {/*  App은 ui 전체임   */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
