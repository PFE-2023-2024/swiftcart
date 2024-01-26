import React from 'react';
import '../Styles/CardBoutique.css';
import image from '../assets/images/cover.png';
import image2 from '../assets/images/profile.png';
import { FaInfoCircle } from "react-icons/fa";
import { MdMessage  } from "react-icons/md";
function CardBoutique ({list}){

    const handleImageError = (e) => {
        e.target.src = image; // Utilisation de l'image de remplacement
    };
    const handleImageError2 = (e) => {
        e.target.src = image2; // Utilisation de l'image de remplacement
    };
    return(
  
    <div className='cardBoutique'>
        <img className='cardBoutiqueimage1' src={`${'http://localhost:4000/'+encodeURIComponent(list.imagecouverture)}`} onError={handleImageError}></img>
        <div className='cardBoutiquename'>
          <h1 > {list.titre}</h1> 
          <h2 >{list.nom_admin} </h2> 
          <h3 >{list.categorie} </h3> 
        </div>  
        <img className='cardBoutiqueimage22'  src={`${'http://localhost:4000/'+encodeURIComponent(list.imagemagazine)}`}onError={handleImageError2}></img>
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