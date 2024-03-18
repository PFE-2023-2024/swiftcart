import React, { useEffect, useState } from 'react'
import {ProductService} from '../../../../ProductService';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { Carousel } from 'primereact/carousel';
import ProductItem from '../Product-Card/ProductItem';
import './PopularProducts.css';
function Scroll_Horizontal({name,products}) {
    

    const productTemplate = (product) => {
        return (
          
            <ProductItem product={product}/>
           
           
        );
    };
  return (
    <div className='carddzcizjoijczjczp'>
        <h1>{name}</h1>
    <Carousel value={products} numVisible={5}   itemTemplate={productTemplate} />
    </div>
  )
}

export default Scroll_Horizontal