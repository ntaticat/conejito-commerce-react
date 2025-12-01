import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './store';
import { conejitoCommerceApi } from './store/apis/conejitoCommerceApi';
import { KeycloakProvider } from './contexts/KeycloakContext';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KeycloakProvider>
      <ApiProvider api={conejitoCommerceApi}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </Provider>
      </ApiProvider>
    </KeycloakProvider>
  </React.StrictMode>,
);
