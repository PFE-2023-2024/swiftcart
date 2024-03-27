import { Avatar } from 'antd'
import React from 'react'
import './Reviews.css'
function Reviews() {
  return (
    <div className='userReviews'>
        <div className='user'>
            <div className='userName'>
            <Avatar className='image' size={60} src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'/>
            <h1>John Doe</h1>
            </div>
            <div className='date'>
                14/10/2021
            </div>
          
        </div>
        <div className='Review'>
            <p>Very good product, I recommend it to everyone. It's very good quality and it's very easy to use.</p>
        </div>
        <div className='numbre_helpful'>19 people found this helpful</div>
        <div className='button'> 
            <button className='helpful'>Helpful</button>
            <button className='Report'>Report</button>
        </div>
        
    </div> 
  )
}

export default Reviews