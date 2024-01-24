import React from 'react';
import '../Styles/CardBoutique.css';
import image from '../assets/images/Boutique.jpg';
import image2 from '../assets/images/couvertureBoutique.jpg';
import { FaInfoCircle } from "react-icons/fa";
import { MdMessage  } from "react-icons/md";
function CardBoutique (){


    return(
  
    <div className='cardBoutique'>
        <img className='cardBoutiqueimage1' src={image2}></img>
        <div className='cardBoutiquename'>
          <h1 >Nom de Boutique </h1> 
          <h2 >Admin de Boutique </h2> 
          <h3 >Catégory Boutique </h3> 
        </div>  
        <img className='cardBoutiqueimage22' src={image}></img>
        <div className='notification'><ul>
        <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li><li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li><li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>
            <li><MdMessage /> notification1</li>            
            </ul></div>
        <div className='footer'><button><FaInfoCircle size={20}/></button> </div>
    </div>
    )
   
}
export default CardBoutique