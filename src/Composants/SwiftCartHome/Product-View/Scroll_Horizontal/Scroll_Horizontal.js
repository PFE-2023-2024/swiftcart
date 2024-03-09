import React, { useEffect, useState } from 'react'
import {ProductService} from '../../../../ProductService';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { Carousel } from 'primereact/carousel';
import ProductItem from '../Product-Card/ProductItem';
import './PopularProducts.css';
function Scroll_Horizontal({name}) {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <>
            <ProductItem product={product}/>
            <div style={{height:'1rem'}}></div>
            </>
        );
    };
  return (
    <div className='carddzcizjoijczjczp'>
        <h1>{name}</h1>
    <Carousel value={products} numVisible={5}  responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
    </div>
  )
}

export default Scroll_Horizontal