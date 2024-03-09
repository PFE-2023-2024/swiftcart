import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationRoute from './routes/AuthenticationRoute';
import StoresRoute from './routes/StoresRoute';
import AccountsRoute from './routes/AccountsRoute';
import MyMegaMenu from './test';
import SwiftCartHome from './routes/SwiftCartHome';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
function App() {
  return (
    <BrowserRouter>
      <AuthenticationRoute/>
      <StoresRoute/>
      <AccountsRoute/>
      <SwiftCartHome/>
      <Routes >

        <Route path="/Swiftcart/test" element={<MyMegaMenu></MyMegaMenu>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
