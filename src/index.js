import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './Context/UserProvider';
import {StoreCategories} from './Context/StoreCategories';
import {ProductCategoriesProvider}from './Context/product_categories';
import {SerachBar} from './Context/SerachBar';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreCategories>
    <ProductCategoriesProvider>
    <UserProvider>
    <SerachBar>
      <App />
    </SerachBar>
    </UserProvider>
    </ProductCategoriesProvider>
    </StoreCategories>
  </React.StrictMode>
);
reportWebVitals();
