import React from "react";
import { IoIosClose } from "react-icons/io";
import '../../../Styles/Boutiques_Dashboard/Compoants/Sidbar.css';
import SwiftCart from '../../../assets/images/SwiftCart.png';
import { FaShoppingBag}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
function Sidbar({setToggle}){
    
    const menuItem=[
        {
            path:"/MALL-SHOPPING/Home/Dashboard",
            name:"Dashboard",
            icon:<AiOutlineDashboard/>
        },
      
        {
            path:"/MALL-SHOPPING/Home/Produit",
            name:"Product",
            icon:<FaShoppingBag/>
        },
       
    ]
    return(<>
    <div className="SidbarAdmin">
        <div className="header">
           
       <img src={SwiftCart}></img>
       <button className="close" onClick={setToggle}><IoIosClose size={25}/></button>
        </div>
        <div className="body">
           {
                   menuItem.map((item, index)=>(
                    <NavLink activeClassName="active"to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }


        </div>
        <div className="footer">

        </div>

    </div>
    </>)
}
export default Sidbar;