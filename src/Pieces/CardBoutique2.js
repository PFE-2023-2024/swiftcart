import React from 'react';
import '../Styles/BoutiqueStyles/CardBoutique.css';
import image from '../assets/images/Boutique.jpg';
import Rating from '@mui/material/Rating';
import { FaStar } from 'react-icons/fa';
import image2 from '../assets/images/profile.png';
function CardBoutique2({list}) {
  const handleImageError2 = (e) => {
    e.target.src = image2; // Utilisation de l'image de remplacement
};
  return (
    <section className='cardBoutique2'>
      <div className='flex-container'>
      <div>
          <img className='cardBoutiqueimage2' src={`${'http://localhost:4000/'+encodeURIComponent(list.imagemagazine)}`}onError={handleImageError2}/>
        </div>
        <div className='vgvgvg'>
            
          <div className='starsnumber'>
          <Rating name="read-only" value={list.nombre_etoile} readOnly />
          </div>
          <h1 className='cardBoutiquename2'>{list.nom_admin}  {list.prenom_admin}</h1>
        </div>
        
      </div>
    </section>
  );
}

export default CardBoutique2;
