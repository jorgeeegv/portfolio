import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Core/styles/index.css';
import App from './Core/components/App/App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { i18n_config } from './i18n.config';

i18next.init(i18n_config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);
reportWebVitals();
