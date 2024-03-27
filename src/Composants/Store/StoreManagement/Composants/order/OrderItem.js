import { AiOutlineHome } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { CgClose } from "react-icons/cg"; 
import { Backdrop} from '@mui/material'
import React from 'react'
import './OrderItem.css'
import ValidateurChaine from '../../../../../function/ValiderChaine';
import { Link } from "react-router-dom";
import { API_BASE_URL } from '../../../../../config';
function OrderItem({order, setOpen}) {
    const date = new Date(order.created_at);
        const dateString = date.toLocaleString('fr-FR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC',
        });



        const handConfirm=async (status)=>{
            try {
              const reapance =await fetch(`${API_BASE_URL}/orders?id=${order.id}`,
              {method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `${localStorage.getItem('token')}`,
                  },
               body: JSON.stringify({status:status})    
                  });
               const rep=await reapance.json();
               if(rep.success){
                setOpen(false);
               }   
            } catch (error) {
              
            }
        
        
        
          }     
  return (
    <Backdrop  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <div className='OrderItem878777'>
           <div className="order">
                <div className='OrderItemHeader'>
                    <p> </p>
                    <p>Order #{order.id}</p>
                    <button onClick={() => setOpen(false)}><CgClose /></button>
                </div>
                <div className="info">
                  
                    <div className="OrderInfo">
                        <h2>Status</h2>
                        <p>{dateString}</p>
                        <p>{order.status}</p>
                    </div>
                    <div className="CustomerInfo">
                        <h2>Customer Info</h2>
                        <h3>{order.buyer.first_name} {order.buyer.last_name}</h3>
                        <p><AiOutlineMail />  {order.buyer.email}</p>
                        <p><AiOutlinePhone /> {order.phone_number}</p>
                        <p><AiOutlineHome />  {order.address}</p>

                    </div>
                </div>
                
           </div>
           <div className="userMessage">
                <h2>Customer message</h2>
                <p>{ValidateurChaine.reduireEtValiderChaine(order.message,1000)}</p>
           </div>
           <div className="OrderItems">
            <h2>{order.quantity} Items in order</h2>
            <h2>  Total: {order.total} TND</h2>
            </div>
            <div className="productsInfo">
                    <div className="img"><img src={order.product.media[0]}></img></div>
                    <div className="productInfo">
                        <h3>{order.product.name} <Link to={'/Swiftcart/Dashboard/Product/edit/'+order.product.id} className="viewproduct">view Product</Link></h3>
                        <p>{order.product.price} TND</p>
                        <p>Quantity: {order.quantity}</p>
                     </div>
            </div> 
            <div className="OrderActions">
                <button className="cancel" onClick={()=>handConfirm('Rejected')}>Delete Order</button>
                <button className="confirm"onClick={()=>handConfirm('On delivery')}>Confirm Order</button>
            </div>          
                    
        </div>
    </Backdrop>
   
  )
}

export default OrderItem