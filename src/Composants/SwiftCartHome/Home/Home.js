import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Scroll_Horizontal from '../Product-View/Scroll_Horizontal/Scroll_Horizontal'
import Promotion from '../Product-View/Promotion/Promotion'
import Result from '../Search/result/Result'
import Search from '../Search/Search'
import Navigate from '../NavBar/Navigate'


function Home() {
  return (
    <div className='Home'>
    <div className='nav84a984c'>
    <Navigate></Navigate>
    </div>
    <div className='home'>
    <Promotion></Promotion>
    <Scroll_Horizontal  name={'Popular products'}/>
    <Scroll_Horizontal  name={'Best sale'}/>
    <Scroll_Horizontal  name={'Popular products'}/>
    </div>
    
    </div>
  )
}

export default Home