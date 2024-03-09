import React from 'react'
import { Galleria } from 'primereact/galleria';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import image from '../../../../assets/images/Promation/1.png'
import image2 from '../../../../assets/images/Promation/2.png'
import image3 from '../../../../assets/images/Promation/3.png'
import image4 from '../../../../assets/images/Promation/4.png'
import './Promotion.css';
function Promotion() {
    const products = [
        { name: 'Promotion 1', description: 'Description for Promotion 1', image: image },
        { name: 'Promotion 2', description: 'Description for Promotion 2', image: image2 },
        { name: 'Promotion 3', description: 'Description for Promotion 3', image: image3 },
        { name: 'Promotion 4', description: 'Description for Promotion 4', image: image4 }
    ];
    const itemTemplate = (item) => {
        return <img src={item.image} alt={item.alt} style={{ width: '100%',maxHeight:'400px' }}/>;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.image} alt={item.alt} style={{ width: '100%',maxHeight:'400px' }} />;
    }
    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={product.image} alt={product.name}  />
                    </div>
                    <div style={{height:'1rem'}}></div>
                </div>
            </div>
        );
    }
  return (
   <div className='xzihedpiu9858949848'>
     <Galleria value={products}  circular
     autoPlay transitionInterval={2000}
                showThumbnails={false} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
       
   </div>
   
    
  )
}

export default Promotion