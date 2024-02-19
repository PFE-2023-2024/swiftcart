import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Composants/SwiftCartHome/NavBar/NavBar';
import AuthenticationRoute from './routes/AuthenticationRoute';
import StoresRoute from './routes/StoresRoute';
import AccountsRoute from './routes/AccountsRoute';
import DataTable from './test';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationRoute/>
      <StoresRoute/>
      <AccountsRoute/>
      <Routes >
        <Route path="/Swiftcart/" element={<NavBar />} /> 
        <Route path="/Swiftcart/test" element={<DataTable></DataTable>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
