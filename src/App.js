import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeBoutique from './Composants/Boutiques/HomeBoutique';
import Navbar1 from './Composants/Navbar/Navbar1';
import Home from './Composants/Boutiques_Dashboard/Home';
import Dashboard from './Composants/Boutiques_Dashboard/Composants/screen/Dashboard';
import Produit from './Composants/Boutiques_Dashboard/Composants/screen/Produit/Produit';
import LogIn from './Composants/LogIn&signUp/LogIn';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MALL-SHOPPING/logIn" element={<LogIn />}/>
        <Route path="/MALL-SHOPPING/" element={<Navbar1 />} /> 
        <Route path="/MALL-SHOPPING/Home" element={<Home />}>
        <Route index element={<Produit />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Produit" element={<Produit/>} /> 
        </Route>
        
        <Route path="/MALL-SHOPPING/HomeBoutique" element={<HomeBoutique />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
