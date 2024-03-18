import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function Swiftcart() {
  return (
   <>
   <NavBar/>
   <div style={{background:'whitesmoke'}}>
   <Outlet></Outlet>
   </div>
   
   </>
  )
}

export default Swiftcart