import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Web3Provider } from './store/auth';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3Provider>
        <App />
      </Web3Provider>
    </BrowserRouter>
  </React.StrictMode>
);
