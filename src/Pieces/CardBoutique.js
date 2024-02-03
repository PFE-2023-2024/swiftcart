import React from 'react';
import '../Styles/BoutiqueStyles/CardBoutique.css';
import image from '../assets/images/cover.png';
import image2 from '../assets/images/profile.png';
import { FaInfoCircle } from "react-icons/fa";
import { MdMessage  } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function CardBoutique ({list}){
    const navigate = useNavigate();
    const dataFromHomeBoutique = {list };
    const handleImageError = (e) => {
        e.target.src = image; // Utilisation de l'image de remplacement
    };
    const handleImageError2 = (e) => {
        e.target.src = image2; // Utilisation de l'image de remplacement
    };
    const navTo=()=>{
        navigate('/Home', { state: { data: dataFromHomeBoutique } });
    }
    return(
  
    <div onClick={navTo} className='cardBoutique'>
        <img className='cardBoutiqueimage1' src={`${'http://localhost:4000/'+encodeURIComponent(list.imagecouverture)}`} onError={handleImageError}></img>
          
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
        <div className='footer'>  <h1 > {list.titre}</h1>  <button><FaInfoCircle size={20}/></button> </div>
    </div>
    )
   
}
export default CardBoutique