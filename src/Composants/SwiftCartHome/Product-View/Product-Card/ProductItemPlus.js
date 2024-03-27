import { GrClose } from "react-icons/gr"; 
import React, { useEffect } from 'react'
import './ProductItemPlus.css'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import hors_stock from '../../../../assets/images/hors stock.png'
import { API_BASE_URL } from '../../../../config'

function ProductItemPlus({product,setOpen}) {
  const[storeName,setStoreName]=React.useState('')

  const getStoredList = async () => { 
    try {
        const response = await fetch(`${API_BASE_URL}/stores/all?id=${product.store_id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setStoreName(data.stores[0].name)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
 getStoredList()
  
}, [])
const addToList = () => {
   const list = JSON.parse(localStorage.getItem('cart')) || [];
  if (!list.some((item) => item.id === product.id)) {
      list.push({ id: product.id,Qty:1 });
      localStorage.setItem('cart', JSON.stringify(list));
      setOpen('cart');  
      window.dispatchEvent(new Event('storageChange'));
  }
  else{
    setOpen('existe')
  }

};

  return (
    <div className='productnezijeiz5qqqq87ezp'>
        <img src={`${product&&product.media ? product.media[0]:hors_stock}`}  alt="table" className="img"/>
        <Link to="/product/1" className="">
        <p className="title">{product.name}</p>
        </Link>
        <Rate disabled defaultValue={4} value={product.rating} className="rate"/>
        <p className="price">{product.price} TND</p>
        <p className="delevery price">{product.delivery_price} TND</p>
        <p className="store">{storeName}</p>
        <button className="add" onClick={(event)=>{  event.stopPropagation();addToList();}}>Add to cart</button>
    </div>
  )
}

export default ProductItemPlus