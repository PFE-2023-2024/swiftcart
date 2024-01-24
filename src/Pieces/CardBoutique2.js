import React from 'react';
import '../Styles/CardBoutique.css';
import image from '../assets/images/Boutique.jpg';
import { FaStar } from 'react-icons/fa';

function CardBoutique2() {
  return (
    <section className='cardBoutique2'>
      <div className='flex-container'>
      <div>
          <img className='cardBoutiqueimage2' src={image} alt='Boutique Image' />
        </div>
        <div className='vgvgvg'>
            
          <div className='starsnumber'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1 className='cardBoutiquename2'>Boulangerie Houssem</h1>
        </div>
        
      </div>
    </section>
  );
}

export default CardBoutique2;
