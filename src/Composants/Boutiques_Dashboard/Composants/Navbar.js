import React from "react";
import '../../../Styles/Boutiques_Dashboard/Compoants/Navbar.css'
import { VscMenu } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from 'react-bootstrap/Image';
import image from '../../../assets/images/profile.png'

function Navbar({setToggle,data}) {
    

    const handleImageError2 = (e) => {
        e.target.src = image; // Utilisation de l'image de remplacement
    };
    return(
        <>
        <div className="nav">
        <div className="navleft" > <button onClick={setToggle}><VscMenu/> </button>
        <NavLink to='/Home/Dashboard'  className="link" >Dashboard</NavLink>
        <NavLink to='/Home/Dashboard'  className="link" >Setting</NavLink>
        </div>
        <div className="navright" >
             <button> <IoIosNotificationsOutline/> </button>
             <button><MdOutlineMailOutline/></button>
             <Image width={40} src={`${'/'+encodeURIComponent(data.imagemagazine)}`}onError={handleImageError2} roundedCircle /> 

             </div>
        </div>
        
        </>
    )
}
export default Navbar;