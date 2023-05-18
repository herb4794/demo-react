import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { StateProvider } from './context/StateProvider';
import { initalState } from './context/initalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StateProvider initalState={initalState}>
      <App />
    </StateProvider>
  </Router>
);

