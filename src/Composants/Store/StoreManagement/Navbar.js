import React,{useContext} from "react";
import './Style/Navbar.css';
import { VscMenu } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import image2 from '../../../assets/images/swiftcart/swiftcart01.png'
import image from '../../../assets/images/profile.png'
function Navbar({setToggle}) {
 
    const handleImageError2 = (e) => {
        e.target.src = image; // Utilisation de l'image de remplacement
    };
    return(
        <>
        <div className="nav">
        <div className="navleft" > <button onClick={setToggle}><VscMenu/> </button>
        <img src={image2}></img>
        </div>
        <div className="navright" >
             <button> <IoIosNotificationsOutline/> </button>
             <button><MdOutlineMailOutline/></button>
             <div className="user"><p>My Store</p> <img src={image}  /> </div>

             </div>
        </div>
        
        </>
    )
}
export default Navbar;