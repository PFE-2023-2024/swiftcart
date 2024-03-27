import { BiRightArrowAlt } from "react-icons/bi"; 
import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './Order.css';
import { API_BASE_URL } from '../../../../../config';
import OrderItem from "./OrderItem";
const Order = () => {
  const[orders, setOrders] = useState([]);
  const[open, setOpen] = useState(false);
  const[order, setOrder] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders?store_id=${JSON.parse(localStorage.getItem('store')).id}&status=pending`,
      {method: 'GET',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`,
          },
          });
       const response2 = await fetch(`${API_BASE_URL}/orders?store_id=${JSON.parse(localStorage.getItem('store')).id}&status=On delivery`,
      {method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`,
          },
          });

      const data = await response.json();
      if(data.success){
        const processedOrders = data.orders.map(order => ({
          ...order,
          total: order.quantity * order.product.price // Add a total field
        }));
        setOrders(processedOrders);}
     else{
     
      throw new Error(data.message);
     }
     const data2 = await response2.json();
      if(data2.success){
        const processedOrders = data2.orders.map(order => ({
          ...order,
          total: order.quantity * order.product.price // Add a total field
        }));
        setOrders(prevOrders => [...prevOrders, ...processedOrders]);}
      else{
                         
        throw new Error(data2.message);
       }  

    } catch (error) {
     console.log( error.message);
     setOrders([]);
    }
    };
    fetchProducts();
  }, [open]);

  const columns = [
    {
      field:'id',
      width:50,
      headerName:'Id',
      renderCell: (params) => (
        <p className='alinejjjsjjs777'>#{params.value}</p>
        )

    },
    {
      field: 'buyer',
      headerName: 'Customer',
      width:200,
      renderCell: (params) => (
       <div className='buyer'>
        <img src={params.value.image}></img>
        <p>{params.value.first_name +'  ' + params.value.last_name}</p>
       </div>   ),
    }, 
    {
      field:'phone_number',
      width:140,
      headerName:'Phone Number',
      renderCell: (params) => (
        <p className='alinejjjsjjs777'>{params.value}</p>
        )
    },  
    {
      field:"created_at",
      headerName:'Date',
      width:150,
      renderCell: (params) => {
        const date = new Date(params.value);
        const dateString = date.toLocaleString('fr-FR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC',
        });
        return (
        <p className='alinejjjsjjs777'>{dateString}</p>
        )}
           
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <p className='status8984984' style={{background:`${params.value==='pending'?' rgb(241, 83, 83)':'rgb(1, 71, 1)'}`}}>{params.value}</p>
      ),
    },
      {
        field: 'total',
        headerName: 'Total',
        width: 130,
        renderCell: (params) => (
          <p className='alinejjjsjjs777'>{params.value} TND</p>
        )
      },
  
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <div className="consuler888887-79">
          <button  className='edit-MyProduct-0489'
          onClick={(event) => {
            event.stopPropagation();
            setOpen(true);
            setOrder(params.row);
          }
          }
          >
            <BiRightArrowAlt />
          </button>
          
        </div>
      ),
    },
  ];

 

  return (
    <>
     {open && <OrderItem setOpen={setOpen} order={order}/>}
    <div className="MyProduct">
      <div className="header">
        <h2>My Orders</h2>
      </div>
      <div className="card" style={{ height: 500 }}>
        <DataGrid
          rows={orders}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div></>
  );
};

export default Order;





