import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Navigate.css'
function Navigate() {
  return (
    <div className='Navigate'>
        <Link>Home</Link>
        <Link>All stores</Link>
        <Link>Flash deals</Link>
        <Link>All brands</Link>
    </div>
  )
}

export default Navigate