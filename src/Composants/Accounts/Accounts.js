import { HiOutlineLockClosed } from "react-icons/hi"; 
import { BiUserCircle } from "react-icons/bi"; 
import React from 'react';
import './Style/Accounts.css';
import image from '../../assets/images/swiftcart/swiftcart2.png';
import image2 from '../../assets/images/Boutique.jpg'
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import {useUser} from '../../Context/UserProvider';
function Accounts() {
  const { userInfo, setUserInfo } = useUser(); 
  return (
    <div className='Accounts'>
        <div className='nav'>
            <img src={image}></img>
            <div className='nav-text'>
                <img src={userInfo.image}></img>  
            <h1>{userInfo.first_name}</h1>
            </div>
        </div>
        <div className='sidbar'>
            <NavLink className={'Link'} to={'General'} activeClassName='active' ><BiUserCircle  className="icon" />General</NavLink>
            <NavLink className={'Link'} to={'Security'} activeClassName='active'><HiOutlineLockClosed className="icon"/>Security</NavLink>
        </div>
        <div className='body'>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Accounts