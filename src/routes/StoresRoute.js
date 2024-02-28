import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MyStore from '../Composants/Store/MyStore/MyStore';
import CreateStore from '../Composants/Store/CreateStore/CreateStore';
import Dashboard from '../Composants/Store/StoreManagement/Dashboard';
import AddProduct from '../Composants/Store/StoreManagement/Composants/Product/AddProduct/AddProduct';
import MyProduct from '../Composants/Store/StoreManagement/Composants/Product/MyProduct/MyProduct';
import Setting from '../Composants/Store/StoreManagement/Composants/Setting/Setting';
import EditProduct from '../Composants/Store/StoreManagement/Composants/Product/EditProduct/EditProduct';
function StoresRoute() {
  return (
    <Routes>
      <Route path="/Swiftcart/MyStores" element={<MyStore />} />
      <Route path="/Swiftcart/CreateStore" element={<CreateStore />} />
      <Route path="/Swiftcart/Dashboard/" element={<Dashboard />}>
        <Route index element={<MyProduct/>} /> 
        <Route path="Product/new" element={<AddProduct/>} />
        <Route path="Product/edit/:id" element={<EditProduct/>} />
        <Route path="Product" element={<MyProduct/>} />
        <Route path="Setting" element={<Setting/>} />

      </Route>

    </Routes>
  )
}

export default StoresRoute