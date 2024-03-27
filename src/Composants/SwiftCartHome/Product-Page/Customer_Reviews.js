import { Rate } from 'antd'
import React from 'react'
import './Customer_Reviews.css'
import { LinearProgress } from '@mui/material'
import Reviews from './Reviews'
function Customer_Reviews() {
  return (
    <div className='Customer_Reviews'>
        <div className='Customer_Reviews__Title'>Customer Reviews (2093)</div>
        <div className='Customer_Reviews__Valus'>
            <div className='etoile'>
                <h1>4.5</h1>
               <Rate className='etoiles' defaultValue={4.5} allowHalf={true} disabled></Rate>
                <h4>Based on 2093 reviews</h4>
            </div>
            <div className='Customer_Reviews__Valus__Bar'>
                <div className='soso'>
                    <h1>5 stars</h1><LinearProgress className='LinearProgress' variant="determinate" color='inherit' value={60} /><h1>15000</h1>
                </div>
                <div className='soso'>
                    <h1>4 stars</h1><LinearProgress className='LinearProgress' variant="determinate" color='inherit' value={20} /><h1>1000</h1>
                </div>
                <div className='soso'>
                    <h1>3 stars</h1><LinearProgress className='LinearProgress' variant="determinate" color='inherit' value={15} /><h1>600</h1>
                </div>
                <div className='soso'>
                    <h1>2 stars</h1><LinearProgress className='LinearProgress' variant="determinate" color='inherit' value={4} /><h1>250</h1>
                </div>
                <div className='soso'>
                    <h1>1 stars</h1><LinearProgress className='LinearProgress' variant="determinate" color='inherit' value={1} /><h1>10</h1>
                </div>
            </div>

        </div>
        <Reviews/>
        <Reviews/>
        <Reviews/>
        <Reviews/>
        <Reviews/>
        <Reviews/>
        <Reviews/>
        <Reviews/>
    </div>
  )
}

export default Customer_Reviews