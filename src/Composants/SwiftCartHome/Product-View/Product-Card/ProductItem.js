import { TbShoppingCart } from "react-icons/tb"; 
import { HiOutlineSwitchHorizontal } from "react-icons/hi"; 
import { AiFillHeart } from "react-icons/ai"; 
import React, { useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import hors_stock from '../../../../assets/images/hors stock.png'
import './ProductItem.css'
import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";
function ProductItem({product}) {
    const token = localStorage.getItem('token')||null
    const [open, setOpen] = React.useState('');
    const isInlist = (listName) => {
        const list = JSON.parse(localStorage.getItem(listName)) || [];
        return list.some(item => item.id === product.id);
    };
    const[inWishlist,setInWishlist]=React.useState(isInlist('wishlist'))
    const[inCompare,setInCompare]=React.useState(isInlist('compare'))
    const[inCart,setInCart]=React.useState(isInlist('cart'))
    const addToList = (listName) => {
        const list = JSON.parse(localStorage.getItem(listName)) || [];
        if (!list.some((item) => item.id === product.id)) {
            if(listName==='cart'){
                list.push({ id: product.id,Qty:1 });
            }
            else{
            list.push({ id: product.id });}
            localStorage.setItem(listName, JSON.stringify(list));
            window.dispatchEvent(new Event('storageChange'));
            setOpen(listName);
        }
       
        if(listName==='wishlist'){
            setInWishlist(true)
        }
        if(listName==='compare'){
            setInCompare(true)
        }
        if(listName==='cart'){
            setInCart(true)
        }
    };
    
   
  

    
    const addToWishlist = () => addToList('wishlist');
    const addToCompare = () => addToList('compare');
    const addToCart = () => addToList('cart');

    const removeFromWishlist = (listName) => {
        const list = JSON.parse(localStorage.getItem(listName)) || [];
        const updatedlist = list.filter(item => item.id !== product.id);
        localStorage.setItem(listName, JSON.stringify(updatedlist));
        window.dispatchEvent(new Event('storageChange'));

        if(listName==='wishlist'){
            setOpen('Wish')
        }
        if(listName==='compare'){
            setOpen('Compare')
        }
        if(listName==='cart'){
         
            setOpen('Cart')
        }
      
    };
    useEffect(() => {
        
        setInWishlist(isInlist('wishlist'))
        setInCompare(isInlist('compare'))
        setInCart(isInlist('cart'));
        },[open]
    );
  return (
   <>
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
         {(open === 'Wish' || open === 'Compare' || open === 'Cart') &&
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
                 {`The item has been removed from ${open} List .`} 
                </Alert>
         </Snackbar>}


    <div className="ProductItem draw-border">
        <div className="cart1"> 
      
           {product?.stoke==0&&  <img src={hors_stock} alt="hors stock" className="hors_stock"/>} 
           <img src={`${product.media ? product.media[0]:hors_stock}`} alt="image" style={{ width: '100%',maxHeight:'400px' }} />
          { token && <div className="azsd894dez98">
          <Tooltip placement="left" title="Add to wishlist" arrow>
                           {!inWishlist
                           ?
                            <button type="button" onClick={addToWishlist}>< AiFillHeart /></button>:
                            <button type="button" onClick={()=>removeFromWishlist('wishlist')}>< AiFillHeart style={{color:'#e31b23'}}/></button>}
                        </Tooltip>
                        <Tooltip placement="left" title="Add to compare" arrow>
                            {!inCompare?
                            <button type="button" onClick={addToCompare}><HiOutlineSwitchHorizontal /></button>:
                            <button type="button" onClick={()=>removeFromWishlist('compare')}><HiOutlineSwitchHorizontal style={{color:'blue'}}/></button>}
                        </Tooltip>
            </div>}
           {token &&<button className="panier" onClick={addToCart}><span className="text1"> <TbShoppingCart className="dzijzio" /></span><span className="text2">Put in Basket</span></button>
     }    </div>
        <div className="cart2">
            <h1>{product.name}</h1>
            <h2>{product.price} TND</h2>
        </div>
    </div></>
  )
}

export default ProductItem