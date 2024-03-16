import React from 'react'
import ReactDOM from 'react-dom/client';
import './Estilos.css';
import { CounterApp } from './CounterApp';
import { CounterApp3 } from './CounterApp3';
// import { FirstApp } from './FirstApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        <CounterApp value={20} />
        {/* <CounterApp3 string={'Esto es un ejercicio'} /> */}
    </React.StrictMode>
);