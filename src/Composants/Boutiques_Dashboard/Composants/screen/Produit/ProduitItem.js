import React from 'react'
import image from '../../../../../assets/images/cover.png';
import "../../../../../Styles/Boutiques_Dashboard/Compoants/screen/Produit.css";
import Button from '@mui/material/Button';

export default function ProduitItem({data}) {

    const handleImageError2 = (e) => {
        e.target.src = image; // Utilisation de l'image de remplacement
    };
   
   
    const  shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + ' ...';
      };
    
  return (
    <div className='ProduitItem'>
        <div className='image'>
            <img src={`${'http://localhost:4000/'+encodeURIComponent(data.images[0])}`}onError={handleImageError2}>
            </img>

        </div>
        <div className='detailes'>
        <h5>
            {shortenText(data.nom_produit,60)}
       
        </h5>
        <Button variant="contained">Open</Button>
        </div>
    </div>
  )
}
