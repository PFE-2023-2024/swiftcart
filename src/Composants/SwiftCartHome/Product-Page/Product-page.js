import React, { useEffect, useState } from 'react'
import Navigate from '../NavBar/Navigate'

import './Product_page.css'
import ProductInfo from "./ProductInfo";
import BoutiqueInfo from "./BoutiqueInfo";
import Product_Details from "./Product_Details";
import { useLocation, useParams } from 'react-router-dom';
import{API_BASE_URL}from '../../../config'
import ProduitImages from './ProduitImages';
import RecentlyViewedArticles from '../Recently_viewed_articles/Recently_viewed_articles';
import Customer_Reviews from './Customer_Reviews';
function Product_page() {
    const Recently_viewed_articles=JSON.parse(localStorage.getItem('Recently_viewed_articles'))||[]

      const id=useParams()
      const[product,setProduct]=useState({})

      const[store,setStore]=useState({})
  useEffect(() => {
    const fetchProduct = async () => {
   try {
    const response = await fetch(API_BASE_URL+`/Search?id=${id.id}`)
    const data = await response.json()
    setProduct(data.products[0])
    if(!Recently_viewed_articles.includes(data.products[0].id)){
        Recently_viewed_articles.push(data.products[0].id)
    }
    localStorage.setItem('Recently_viewed_articles',JSON.stringify(Recently_viewed_articles))
    const response2 = await fetch(API_BASE_URL+`/Stores/All?id=${data.products[0].store_id}`)
    const data2 = await response2.json()
    setStore(data2.stores[0])
   } catch (error) {
    
   }
    }
    fetchProduct()
  }, [id])
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
     <Navigate number={1}></Navigate>
     <div  className="kkskskks">
     <div className='Product_page_658589'>
     <ProduitImages product={product}/>
        <ProductInfo  store={store} product={product}/>
        
    </div>
    <BoutiqueInfo store={store}/>
   </div>
   <Product_Details product={product}/>
   <Customer_Reviews/>
   <RecentlyViewedArticles/>
    </>
  )
}

export default Product_page