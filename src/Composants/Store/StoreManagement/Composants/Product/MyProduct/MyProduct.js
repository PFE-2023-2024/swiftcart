import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './Style/MyProduct.css';
import { Link, useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const MyProduct = () => {
  
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`../Product/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log('Deleting product with id:', id);
 
  };

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
          <button onClick={() => handleEdit(params.id)} className='edit-MyProduct-0'>
            <BiEdit />
          </button>
          <button onClick={() => handleDelete(params.id)} className='delete-MyProduct-1'>
            <AiFillDelete />
          </button>
        </div>
      ),
    },
  ];

  const products = [
    // Add an 'id' field for each product
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLknoxxFsch2hjVt-9ttNIkpCpsvK__aNUUg&usqp=CAU', title: 'Phone', stock: '40', price: '260 TND', category: 'Phone' },
  
  ];

  return (
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
    </div>
  );
};

export default MyProduct;





