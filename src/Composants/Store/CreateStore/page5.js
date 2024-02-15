import React from 'react';
import './Style/Five.css';
import { IoIosArrowBack } from "react-icons/io"; 
import { GrFormNext } from 'react-icons/gr'
function Stepfive({openPage4,Storecategory,Storename,paymentMethod}) {
  console.log((paymentMethod));
  return (
    <div className='five'>
    <div className='header'>    
      <h1>Confirmation of the creation of your store:</h1>
      <h2>These details may be changed later after confirmation. Once your store is created, you will be able to update this information at any time from your dashboard.</h2>
    </div>
    <div className='main'>
             
    </div>
    <div className='footer'>
      <button onClick={openPage4} className="back"><IoIosArrowBack className="IoIosArrowBack"/>Back</button>
      <div className='ss'>
      
      <button className='next'>  
          Save<GrFormNext className="GrFormNext" />
      </button>
      </div>
    </div>
  </div>
  )
}

export default Stepfive