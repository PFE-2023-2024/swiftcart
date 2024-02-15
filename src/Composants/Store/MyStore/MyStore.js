import React from 'react';
import './Style/MyStore.css'
import image from '../../../assets/images/swiftcart/swiftcart2.png';
import image2 from '../../../assets/images/Montassar Tayachi.png';
import { TiPlus } from "react-icons/ti";

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import StoreItem from './StoreItem';
import { Link } from 'react-router-dom';
function MyStore() {
  return (
    <div className='MyStore'>
      <div className='card'>
          <div className='header'>
          <img className='a1' src={image}></img>
          <img className='a2' src={image2}></img>
          </div>
          <div className='WelcomeUser'>
            <h1>Welcome back, Montassar</h1>
            <Link to={'/Swiftcart/CreateStore'} style={{textDecoration:"none"}}><button><TiPlus className='re1'/> Create store</button></Link>
          </div>
          <div className='MyStores'>
            <Tabs  style={{background:'transparent', color: 'white'}} defaultValue={0}>
              <TabList>
                <Tab><b style={{fontSize:'0.8rem',fontWeight:'600'}}>Active</b></Tab>
                <Tab><b style={{fontSize:'0.8rem',fontWeight:'600'}}>Inactive</b></Tab>
              </TabList>
              <TabPanel className='ActiveStores' value={0}>
                <div >
                  <StoreItem></StoreItem>
                </div>
              </TabPanel>
              <TabPanel className='ActiveStores' value={1}>
                  <div >
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  <StoreItem></StoreItem>
                  </div>
              </TabPanel>
            </Tabs>

          </div>
      </div>
    </div>
  )
}

export default MyStore