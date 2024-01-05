import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App';
import './styles/styles.scss';
import { AuthContextProvider } from './contexts/authContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  </Router>
);
