import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Composants/SwiftCartHome/Home/Home';
import Search from '../Composants/SwiftCartHome/Search/Search';
import Swiftcart from '../Composants/SwiftCartHome/Swiftcart';

function SwiftCartHome() {
  return (
    <Routes>
      <Route path="/Swiftcart/" element={<Swiftcart />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Search" element={<Search />} />
      </Route>

    </Routes>
  )
}

export default SwiftCartHome