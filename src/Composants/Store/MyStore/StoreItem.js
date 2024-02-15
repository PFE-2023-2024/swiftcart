import React from 'react'
import image from '../../../assets/images/Boutique.jpg';
import Rating from '@mui/material/Rating';
import { SlArrowRight } from "react-icons/sl";
import './Style/StoreItem.css'
function StoreItem() {
  return (
    <div className='StoreItem'>
        <img src={image}>
        </img>
        <div className='detailes'>
           
            <div>
                 <h1>My Store</h1>
                <Rating className='Rating' name="disabled" value={4} disabled />            
            </div>
            <SlArrowRight className='sl1'/>
            
        </div>
    </div>
  )
}

export default StoreItem