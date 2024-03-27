import React, { useEffect, useState } from 'react'
import{API_BASE_URL}from'../../../config'
import Scroll_Horizontal from '../Product-View/Scroll_Horizontal/Scroll_Horizontal'
function RecentlyViewedArticles() {
    const [product,setProduct]=useState([])
    const Recently_viewed_articles=JSON.parse(localStorage.getItem('Recently_viewed_articles'))||[]
    useEffect(() => {
        const fetchProduct = async () => {
       try {
        const response = await fetch(API_BASE_URL+`/Search?id=${Recently_viewed_articles.join(',')}`)
        const data = await response.json()
        setProduct(data.products)
       } catch (error) {
        
       }
        }
        fetchProduct()
      }, [Recently_viewed_articles])

  return (
    <>
      {product.length>0&&
      <div style={{background:'white',padding:'1em',margin:"1em",marginTop:'0'}}> <Scroll_Horizontal   products={product} card={true} name={' Recently viewed articles'}/></div>}
    </>
  
  )
}

export default RecentlyViewedArticles