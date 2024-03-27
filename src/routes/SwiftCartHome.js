import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Search from '../Composants/SwiftCartHome/Search/Search';
import Swiftcart from '../Composants/SwiftCartHome/Swiftcart';
import Homeproduct from '../Composants/SwiftCartHome/Home-product/Home';
import All_Stores from '../Composants/SwiftCartHome/All-Stores/All_Stores';
import Wishlist from '../Composants/SwiftCartHome/wishlist/Wishlist';
import Compare from '../Composants/SwiftCartHome/Compare/Compare';
import Cart from '../Composants/SwiftCartHome/Cart/Cart';
import Product_page from '../Composants/SwiftCartHome/Product-Page/Product-page';
function SwiftCartHome() {
  return (
    <Routes>
      <Route path="/Swiftcart/" element={<Swiftcart />}>       
      <Route index element={<Homeproduct />} />
      <Route path="Home" element={<Homeproduct/>} ></Route>
      <Route path="All-Stores" element={<All_Stores/>} />
      <Route path="Wishlist" element={<Wishlist />} />
      <Route path="Compare" element={<Compare />} />
      <Route path="Search" element={<Search />} />
      <Route path='Cart' element={<Cart />} />
      <Route path="product/:id" element={<Product_page/>}/>
      </Route>
    </Routes>
  )
}

export default SwiftCartHome