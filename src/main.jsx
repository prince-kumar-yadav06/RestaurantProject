import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './App.jsx'; // or MultiCounter if exported as default

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
);
