import React, { useEffect, useState } from 'react'
import {ProductService} from '../../../../ProductService';
import ProductItem from '../Product-Card/ProductItem';
import './Grid.css';
function Grid_Product() {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

   
  return (
    <div className='Grid_Product'>
    {products.map((product) => (
        <ProductItem  className='card' product={product}/>
    ))}
    
    </div>
  )
}

export default Grid_Product