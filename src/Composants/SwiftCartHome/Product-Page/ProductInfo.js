import React, { useEffect, useState } from 'react'
import { TbBrand4Chan } from "react-icons/tb"; 
import { AiFillTag } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { InputNumber, Rate } from 'antd'
import { Link } from 'react-router-dom'
import { AiFillHeart } from "react-icons/ai"; 
import {API_BASE_URL}from '../../../config'
import { Alert, Snackbar } from '@mui/material';
import Pay from '../Cart/Pay';
function ProductInfo({product,store}) {
  const[qty,setQty]=useState(1)
  const[category,setCategory]=useState()
  const getCategory = async () => {
  try {
    const repance= await fetch(API_BASE_URL+`/store_categories?id=${store.category_id}`)
    const data=await repance.json()
    console.log(data)
    setCategory(data.store_categories[0].name)
  } catch (error) {
    
  }
 
  }
  const addToList = (listName) => {
    const list = JSON.parse(localStorage.getItem(listName)) || [];
    if (!list.some((item) => item.id === product.id)) {
        if(listName==='cart'){
            list.push({ id: product.id,Qty:qty });
            setOpen(listName);
        }
        else{
          setOpen(listName);
        list.push({ id: product.id });}
        localStorage.setItem(listName, JSON.stringify(list));
        window.dispatchEvent(new Event('storageChange'));

    }
    else{
      setOpen(listName+'exist')
    }
};
  const putinCart=()=>{
    addToList('cart')
  }
  const addWishlist=()=>{
    addToList('wishlist')
  }
  const addCompare=()=>{
    addToList('compare')
  }
const[open, setOpen] = React.useState('');
  const isInlist = (listName) => {
    const list = JSON.parse(localStorage.getItem(listName)) || [];
    return list.some(item => item.id === product.id);
};

const[inWishlist,setInWishlist]=React.useState(isInlist('wishlist'))
  useEffect(() => {
    getCategory()
  }
  , [store,product])

  const remove = (listName) => {
    const list = JSON.parse(localStorage.getItem(listName)) || [];
    const updatedlist = list.filter(item => item.id !== product.id);
    localStorage.setItem(listName, JSON.stringify(updatedlist));
    window.dispatchEvent(new Event('storageChange'));
    setOpen('ssskkk')
};
const removeFromWishlist = () => {
    remove('wishlist')
}
 useEffect(() => {
    const checkInList = (listName) => {
      const list = JSON.parse(localStorage.getItem(listName)) || [];
      return list.some(item => item.id === product.id);
    };

    setInWishlist(checkInList('wishlist'));
  }, [product.id, open]);
  
  return (
    <>
    {(open === 'Pay') && <Pay setOpen={setOpen}
    Products={[{ id: product.id,Qty:qty }]}
    
    /> }
    {(open === 'wishlist' || open === 'compare' || open === 'cart') &&
         <Snackbar
                open={true}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                autoHideDuration={2000}
                onClose={() => setOpen('')}
            >
                 <Alert
                    onClose={() => setOpen('')}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                 {`Product added to ${open} successfully.`} 
                </Alert>
         </Snackbar>}
         {(open === 'wishlistexist' || open === 'compareexist' || open === 'cartexist') &&
         <Snackbar
                
                open={true}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                autoHideDuration={2000}
                onClose={() => setOpen('')}
            >
                 <Alert
                    onClose={() => setOpen('')}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                 {`The item has been exist in the  List .`} 
                </Alert>
         </Snackbar>}
    <div className='cioezj4956'>
            <div className="nkjsq125"><h1> {product.name}</h1> 
            {inWishlist ? 
                <AiFillHeart className="ixozj" onClick={removeFromWishlist}/> :
                <AiOutlineHeart className="ixozj" onClick={addWishlist}/>
            }
            </div>
            {product.stock > 0?<h5 className="InStoke">In Stoke</h5>:<h5 className="OutStoke">Out Stoke</h5>}
           <Link className="iiodaji"><h2>Visit the {store.name} Store</h2></Link> 
           <h3>{product.price} TND</h3>
           <div style={{display:'flex',alignItems:'center',padding:'0.5em 0'}}> <div className="category"><AiFillTag /> {category}</div> <div className="Brand"><TbBrand4Chan />Infinix</div> </div>
           <div className="uuhzuxhuhhuzpzo"> <Rate disabled defaultValue={4} value={product.rating} className="rate"/> <h3> (Reviews)  </h3></div>
           <div className="oksaozk">
            <div className='djiiejzoij'>
          <button onClick={addWishlist}>Add to Wishlist</button>  
          <button onClick={addCompare} >Add to Compare</button>
        </div>
        <p>{product.stock} Articles</p>
            <p>Delivery Price {product.delivery_price} TND</p>
            </div>
           
            <div className="Quantity">
                <h2> Quantity</h2>
                <div className="sss">
                <InputNumber min={1} value={qty}  onChange={setQty} max={product.stock} />
               </div>
            </div>
            <div className="buy">
                <button onClick={putinCart}>put in cart</button>
                <button className='naw'
                onClick={
              ()=>setOpen('Pay')  }
                >pay now</button>
            </div>
            
        </div>
        </>
  )
}

export default ProductInfo