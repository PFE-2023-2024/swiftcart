import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style/Navigate.css';

function Navigate({number}) {
  return (
    <div className='Navigate'>
        <NavLink className={`asdzdc ${number==1? 'active':''}`}   to='/Swiftcart/Home'>Home</NavLink>
        <NavLink  className={`asdzdc ${number==2? 'active':''}`}  to='/Swiftcart/All-Stores'>All stores</NavLink>
        {/* Assuming you'll add these paths later */}
        <NavLink className={`asdzdc ${number==3? 'active':''}`}  to='/Swiftcart/Flash-Deals'>Flash deals</NavLink>
        <NavLink  className={`asdzdc ${number==4? 'active':''}`}  to='/Swiftcart/All-Brands'>All brands</NavLink>
    </div>
  );
}

export default Navigate;
