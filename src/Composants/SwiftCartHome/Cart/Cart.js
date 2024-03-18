import React, { useEffect, useState } from 'react'
import { AiOutlineRight, AiOutlineHome } from "react-icons/ai"; 
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import CartItem from './CartItem';
import { API_BASE_URL } from '../../../config';
import { Alert, Snackbar } from '@mui/material';
function Cart() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const productsIds = JSON.parse(localStorage.getItem('cart')) || [];
    const[open,setOpen]=useState('')
    useEffect(() => {
      const fetchProducts = async () => {
          const ids = productsIds.map(item => item.id);
          if (ids.length === 0) {
             setProducts([]);
              return;
          }
          try {
              const res = await fetch(`${API_BASE_URL}/search?id=${ids.join(',')}`);
              
              if (!res.ok) {
                  throw new Error(`Failed to fetch products: ${res.statusText}`);
              }
              
              const data = await res.json();
              setProducts(data.products);
              console.log('Products:', data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };
    
      fetchProducts();
  }, [productsIds,products]); 
  const deslectAll=()=>{
    localStorage.removeItem('cart')
    window.dispatchEvent(new Event('storageChange'));
  }
 const[Total,setTotal]=useState(0)
 const CalculeTotal=()=>{
    let total=0
    products.map((product) => (
      total+=product.price*productsIds.find(item => item.id === product.id)?.Qty
    ))
    setTotal(total)
  }
 const totalItemss = productsIds.reduce((acc, item) => acc + item?.Qty, 0);
 const [totalItems, setTotalItems] = useState(totalItemss);
   useEffect(() => {
    setTotalItems(totalItemss);
    CalculeTotal()
   }, [productsIds,products]) 
  return (
    <> {(open === 'wishlist' || open === 'compare' || open === 'cart') &&
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
    {(open === 'Wish' || open === 'Compare') &&
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
            {`Product already existed in the ${open} List  .`} 
           </Alert>
    </Snackbar>}
    <div className='Carte5498289'>
    <div className='navsksisi55'>
                <AiOutlineHome style={{ cursor: 'pointer', fontSize: '1.8em', marginRight: '0.2em' }} onClick={() => navigate('/Swiftcart')} />
                <AiOutlineRight style={{ fontSize: '1.5em' }} />
                Shopping Cart
            </div>
        <div className='main' >
        <div className='ShoppingCart'>
            <h1>Shopping Cart</h1>
           <button onClick={deslectAll}>Deselect all items</button>
           <div className='price'><p>Price</p></div>
           {products.length>0 &&
              products.map((product) => (
                <CartItem key={product.id} setOpen={setOpen} product={product} quantity={productsIds.find(item => item.id === product.id)?.Qty} />
              ))
           }
           <div className='totale'><h1>Subtotal ({totalItems} items): {Total.toFixed(3)} TND</h1></div>
        </div>
        <div  className='checkout'>
          <h1>Subtotal ({totalItems} items): {Total.toFixed(3)} TND</h1>
          <button>Proceed to checkout</button>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default Cart