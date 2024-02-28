import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './Context/UserProvider';
import {StoreCategories} from './Context/StoreCategories';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreCategories>
    <UserProvider>
      <App />
    </UserProvider>
    </StoreCategories>
  </React.StrictMode>
);
reportWebVitals();
