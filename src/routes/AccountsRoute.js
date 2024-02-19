import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Accounts from '../Composants/Accounts/Accounts';
import General from '../Composants/Accounts/General';
import Security from '../Composants/Accounts/Security';
import EmailModification from '../Composants/Accounts/EmailVerification';
function AccountsRoute() {
  return (
   <Routes>
    
     <Route path="/Swiftcart/EmailChange" element={<EmailModification/>} ></Route> 
      <Route path="/Swiftcart/Accounts" element={<Accounts />} >
      <Route index element={<General />}/>
      <Route path="General" element={<General />}/>
      <Route path="Security" element={<Security />}/>
      </Route>
   </Routes>
  )
}

export default AccountsRoute