import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { KeycloakProvider } from './application/contexts/KeycloakContext';
import { ToastContainer } from 'react-toastify';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KeycloakProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </KeycloakProvider>
  </React.StrictMode>,
);
