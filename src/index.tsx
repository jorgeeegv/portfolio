import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Core/styles/index.css';
import App from './Core/components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
