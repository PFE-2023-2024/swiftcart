import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function Swiftcart() {
  return (
   <>
   <NavBar/>
   <Outlet></Outlet>
   </>
  )
}

export default Swiftcart