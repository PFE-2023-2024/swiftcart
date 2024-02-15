import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeBoutique from './Composants/Boutiques/HomeBoutique';
import Home from './Composants/Boutiques_Dashboard/Home';
import Dashboard from './Composants/Boutiques_Dashboard/Composants/screen/Dashboard';
import Produit from './Composants/Boutiques_Dashboard/Composants/screen/Produit/Produit';
import NavBar from './Composants/SwiftCartHome/NavBar/NavBar';
import AuthenticationRoute from './routes/AuthenticationRoute';
import StoresRoute from './routes/StoresRoute';
import AccountsRoute from './routes/AccountsRoute';

function App() {

  return (
    <BrowserRouter>
      <AuthenticationRoute/>
      <StoresRoute/>
      <AccountsRoute/>
      <Routes >
        <Route path="/Swiftcart/" element={<NavBar />} /> 
        <Route path="/Swiftcart/Home" element={<Home />}>
        <Route index element={<Produit />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Produit" element={<Produit/>} />   
        </Route>           
        <Route path="/Swiftcart/HomeBoutique" element={<HomeBoutique />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
