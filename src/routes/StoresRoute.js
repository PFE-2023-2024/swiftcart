import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MyStore from '../Composants/Store/MyStore/MyStore';
import CreateStore from '../Composants/Store/CreateStore/CreateStore';
function StoresRoute() {
  return (
    <Routes>
      <Route path="/Swiftcart/MyStores" element={<MyStore />} />
      <Route path="/Swiftcart/CreateStore" element={<CreateStore />} />
    </Routes>
  )
}

export default StoresRoute