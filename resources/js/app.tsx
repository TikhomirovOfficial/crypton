import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../../crypton_front/src/styles/index.css';
import '../../../crypton_front/src/styles/freedom.css';
import App from './AppMain';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
