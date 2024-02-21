import { HiOutlineLockClosed } from "react-icons/hi"; 
import { BiUserCircle } from "react-icons/bi"; 
import React from 'react';
import './Style/Accounts.css';
import image from '../../assets/images/swiftcart/swiftcart2.png';
import Profile from '../../assets/images/profile.png'; 
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import {useUser} from '../../Context/UserProvider';
import Dropdown from 'react-bootstrap/Dropdown';
function Accounts() {
  const { userInfo, setUserInfo } = useUser();
  const navigate = useNavigate(); 
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href='/swiftcart/login'; // Navigate to login or home page after logout
  };
  return (
    <div className='Accounts'>
        <div className='nav'>
            <img src={image}></img>
            <Dropdown className='Dropdown'>
              <Dropdown.Toggle className='nav-text' >
              
                <img src={userInfo.image||Profile}></img>  
            <h1>{userInfo.first_name}</h1>
           
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>{navigate('/Swiftcart/MyStores')}}>My stores</Dropdown.Item>
                <Dropdown.Item onClick={()=>{navigate('/Swiftcart/')}} >Home</Dropdown.Item>
                <Dropdown.Item onClick={logout}> Disconnect</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
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