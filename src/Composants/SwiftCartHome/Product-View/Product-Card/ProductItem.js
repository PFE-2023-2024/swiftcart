import { TbShoppingCart } from "react-icons/tb"; 
import { BsCart3 } from "react-icons/bs"; 
import { HiOutlineSwitchHorizontal } from "react-icons/hi"; 
import { AiFillHeart } from "react-icons/ai"; 
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import hors_stock from '../../../../assets/images/hors stock.png'
import './ProductItem.css'
function ProductItem({product}) {
    const token = localStorage.getItem('token')||null
  return (
    <div className="ProductItem">
        <div className="cart1"> 
      
           {product?.stoke==0&&  <img src={hors_stock} alt="hors stock" className="hors_stock"/>} 
           <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} style={{ width: '100%',maxHeight:'400px' }} />
          { token && <div className="azsd894dez98">
                <Tooltip placement="left" title="Add to wishlist" arrow>
                    <button><AiFillHeart /></button>
                </Tooltip>
                <Tooltip placement="left" title="Add to compare" arrow>
                    <button><HiOutlineSwitchHorizontal /></button>
                </Tooltip>
               
            </div>}
           {token &&<button className="panier"><span className="text1"> <TbShoppingCart className="dzijzio" /></span><span className="text2">Put in Basket</span></button>
     }    </div>
        <div className="cart2">
            <h1>{product.name}</h1>
            <h2>{product.price} TND</h2>
        </div>
    </div>
  )
}

export default ProductItem