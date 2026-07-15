import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomComponent from './CustomComponent.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <CustomComponent ppp="haha"/>
    </React.StrictMode>
);