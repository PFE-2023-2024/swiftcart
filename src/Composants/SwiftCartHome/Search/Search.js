import React from 'react'
import Result from './result/Result'
import Nav from './nav/Nav'
import Filter from './filter/Filter'
import './Search.css'
function Search() {
  const [open, setOpen] = React.useState(false);
  return (
   <>
   <div className='search'>
        <div className='navduhziu'>
        <Nav/>
        </div>
        <div className='filtersdcsd'>
        <Filter onClose={()=>{setOpen(false)}} open={open}/>
        </div> 
        <div className='result'>
          <Result Open={()=>{setOpen(true)}}/>
         </div>      
   </div>
   </>
  )
}

export default Search