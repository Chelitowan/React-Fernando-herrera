import React from 'react'
import ReactDOM from 'react-dom/client';
import './Estilos.css';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        <CounterApp value={10} />
    </React.StrictMode>
);