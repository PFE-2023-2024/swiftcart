import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './Style/MyProduct.css';
import { Link, useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { API_BASE_URL } from '../../../../../../config';
import {useProductCategories} from '../../../../../../Context/product_categories';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import Snackbar from '@mui/material/Snackbar';
import Rating from '@mui/material/Rating';
const MyProduct = () => {
  const[products, setProducts] = useState([]);
  const navigate = useNavigate();
  const {productCategories} = useProductCategories();
  const[open, setOpen] = useState('');
  const[id,setID] = useState('');
  const handleEdit = (row) => {
     navigate(`../Product/edit/${row.id}`, { state: { products: row } });
  };

  const handleDelete = (id) => {
    setID(id);
   setOpen('delete');
 
  };
  useEffect(() => {
    const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products?store_id=${JSON.parse(localStorage.getItem('store')).id}`,
      {method: 'GET',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`,
          },
          });
      const data = await response.json();
      if(data.success){
      setProducts(data.products)}
     else{
     
      throw new Error(data.message);
     }
    } catch (error) {
     console.log( error.message);
     setProducts([]);
    }
    };
    fetchProducts();
    console.log('products', products);
  }, [products]);

  const columns = [
    {
      field: 'media',
      headerName: 'Image',
      width: 90,
      renderCell: (params) => (
        <img src={params.value[0]||'https://www.soon7.net/wp-content/uploads/2017/10/placeholder-1.png'} alt="product" style={{ height: 30, borderRadius: '5px' }} />
      ),
    },
    { field: 'name', headerName: 'Name', width: 90 },
    { field: 'rating', headerName: 'Rating', width: 130, renderCell: (params) => (
      <Rating name="read-only" style={{fontSize:'1.1em'}} value={params.value} readOnly />
    )}
    ,
    { field: 'stock', headerName: 'stock', width: 130 }, 
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'delivery_price', headerName: 'delivery_price', width: 130 },
    { field: 'subcategory', headerName: 'Category', width: 130, valueGetter: (params) => {
      return params.value.name;
    }},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <div className="edit">
          <button onClick={() => handleEdit(params.row)} className='edit-MyProduct-0'>
            <BiEdit />
          </button>
          <button onClick={() => handleDelete(params.row.id)} className='delete-MyProduct-1'>
            <AiFillDelete />
          </button>
        </div>
      ),
    },
  ];

 

  return (
    <>
      {open==='Snackbar'&&<Snackbar
        open={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={()=>{setOpen('')} }
        message="Product delete successfully."
      />}
    {open==='delete' && <DeleteProduct id={id} onClose={setOpen}></DeleteProduct>}
    <div className="MyProduct">
      <div className="header">
        <h2>My product</h2>
        <Link style={{ textDecoration: 'none' }} to={"../Product/new"}>
          <button>
            <MdAdd /> Add Product
          </button>
        </Link>
      </div>
      <div className="card" style={{ height: 500 }}>
        <DataGrid
          rows={products}
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

export default MyProduct;





