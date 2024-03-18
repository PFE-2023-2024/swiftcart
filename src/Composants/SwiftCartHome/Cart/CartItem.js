import React, { useEffect } from 'react';
import { InputNumber } from 'antd';
import './CartItem.css';

function CartItem({product, quantity, setOpen}) {
  const [Qty, setQty] = React.useState(quantity);
  const [SubTotal, setSubTotal] = React.useState(product.price * quantity);

  const updateQtyInLocalStorage = (productId, newQty) => {
    const list = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedList = list.map(item => {
      if (item.id === productId) {
        return { ...item, Qty: newQty };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedList));
    window.dispatchEvent(new Event('storageChange'));
  };

  useEffect(() => {
    updateQtyInLocalStorage(product.id, Qty);
    setSubTotal(product.price * Qty);
  }, [Qty, product.id, product.price]);

  const removeFromCart = () => {
    const list = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedList = list.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedList));
    window.dispatchEvent(new Event('storageChange'));
  };
 const addToWishlist = () => {
    const list = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!list.some((item) => item.id === product.id)) {
      list.push({ id: product.id });
      localStorage.setItem('wishlist', JSON.stringify(list));
      window.dispatchEvent(new Event('storageChange'));
      setOpen('wishlist');
    }
    else{
      setOpen('Wish');
    }
  };
 const  addToCompare = () => {
    const list = JSON.parse(localStorage.getItem('compare')) || [];
    if (!list.some((item) => item.id === product.id)) {
      list.push({ id: product.id });
      localStorage.setItem('compare', JSON.stringify(list));
      window.dispatchEvent(new Event('storageChange'));
      setOpen('compare');
    }
    else{
      setOpen('Compare');
    }
  };


  // Ensure other functions like addToWishlist, addToCompare are implemented as needed

  return (
    <div className='CartItem56888'>
      <img src={product.media ?product.media[0] :'https://m.media-amazon.com/images/I/71SHhAkNLgL._AC_SX569_PIbundle-8,TopRight,0,0_SH20_.jpg' || 'default_image_url'} alt='product' />
      <div className='detalis'>
        <div className='price'> 
          <h3>{product.name}</h3>
          <p>Price: {product.price.toFixed(3)} TND</p>
        </div>       
        <p>Subtotal: {SubTotal.toFixed(3)} TND</p>
        {product.stock > 0 ? <p className='inStoke'>In Stock</p> : <p className='outStock'>Out of Stock</p>}
        <div className='quantity'>
          <p className='qtyLabel'>Qty</p> 
          <InputNumber min={1} max={product.stock} value={Qty} onChange={setQty} />
        </div>
        <div className='djiiejzoij'>
          <button onClick={removeFromCart}>Remove</button> 
          <button onClick={addToWishlist}>Add to Wishlist</button> 
          <button onClick={addToCompare}>Add to Compare</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
