import { BiMobileAlt } from "react-icons/bi"; 
import { BiLaptop } from "react-icons/bi"; 
import React from 'react'
import Chip from '@mui/material/Chip';
import'./Style/Devices.css'
import { Link } from "react-router-dom";

function Devices() {
    const [Devices, setOpen] = React.useState(false);
   
  return (
    <div className="Devices44">
       <div style={{width:'100%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
       <div  className="Details">
       <h1 className="Laptop"> {Devices? <BiMobileAlt size={30} /> :<BiLaptop size={30}/>}
          Chrome on Windows</h1>
         <Chip label="This device" color="success" />
        </div>
        <div className="Details2" >
            <h1>Time</h1>
            <h1>Region</h1>
        </div>

       </div>


        <div className="LogOut">
            <button >LogOut</button>
        </div>
    </div>
  )
}

export default Devices