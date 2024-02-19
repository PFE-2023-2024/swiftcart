import { MdAdd } from "react-icons/md"; 
import { AiFillDelete } from "react-icons/ai"; 
import { BiEdit } from "react-icons/bi"; 
import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './Style/MyProduct.css'
import { Link } from "react-router-dom";

const MyProduct = () => {
  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 90,
      renderCell: (params) => (
        <img src={params.value} alt="product" style={{ height: 30, borderRadius: '5px' }} />
      ),
    },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'stock', headerName: 'Stock', width: 90 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    { field: 'category', headerName: 'Category', width: 130 }, 
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <div className="edit">
        <button
        className='edit-MyProduct-0'
        >
          <BiEdit />
        </button>
        <button
        className='delete-MyProduct-1'
        >
         <AiFillDelete />
        </button></div>
        
        
      ),
    },
  ];
  
  return (
 
   <div className="MyProduct">
    <div className="header"> <h2>My product</h2>  <Link style={{textDecoration:'none'}}to={"../Product/new"} ><button > <MdAdd className="bshssuygzu" />add Product</button></Link></div>
      <div className="card" style={{ height: 500 }}>
        <DataGrid
          rows={products.map((product, index) => ({ ...product, id: index + 1 }))}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
  </div>
  );
};

export default MyProduct;

const columns = [
  {
    field: 'image',
    headerName: 'Image',
    width: 90,
    renderCell: (params) => (
      <img src={params.value} alt="product" style={{ height: 30, borderRadius: '5px' }} />
    ),
  },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 90 },
  { field: 'price', headerName: 'Price', type: 'number', width: 90 },
  { field: 'category', headerName: 'Category', width: 130 }, 
  {
    field: 'actions',
    headerName: 'Actions',
    width: 130,
    renderCell: (params) => (
      <button
      className='edit-MyProduct-0'
      >
        <BiEdit />
      </button>
    ),
  },
];

const products = [
  // Add an 'id' field for each product
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
  { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },

];


