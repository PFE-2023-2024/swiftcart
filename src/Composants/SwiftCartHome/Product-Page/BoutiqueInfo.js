import { CiPhone } from "react-icons/ci"; 
import { Rate } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function BoutiqueInfo({store}) {
  return (
    <div className='BoutiqueInfo984965'>
       <img src={store.profile_image} alt="Banpresto" />
        <div className="displayMedia">
        <div className="BoutiqueName"><Link><h1> {store.name}</h1></Link></div>
        <Rate disabled defaultValue={4} value={store.rating} className="rate"/>
        <div className='boutique78'>
        <div className="BoutiqueReviews"><h3>  Reviews(2500)</h3> </div>
        </div>
        <div className='info'>
           <CiPhone className="phone" /> <h3>{store.phone}</h3>
        </div>

        </div>
    </div>
  )
}

export default BoutiqueInfo