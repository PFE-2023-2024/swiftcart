import React from 'react'
import './ProduitItem3.css'
import ValidateurChaine from "../../../../function/ValiderChaine";
import { useNavigate } from 'react-router-dom';
function ProduitItem3({product}) {
    const navigate=useNavigate();
  return (
   
   <div className='productItem23235' onClick={()=>{navigate(`/Swiftcart/product/${product.id}`)}}>
           <img src={`${product.media && product.media[0]}`} alt="image" />
           <div className="product-name">{ValidateurChaine.reduireEtValiderChaine( product.name,20)}</div>
            <div className="product-price">{product.price} DT</div>
        

    </div>
 
  )
}

export default ProduitItem3