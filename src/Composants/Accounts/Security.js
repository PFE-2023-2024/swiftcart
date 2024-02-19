import React,{useState} from 'react';
import './Style/Security.css';
import Devices from './Devices';
import EditPassword from './EditPassword';
import CreatePassword from './CreatePassword';
import {useUser} from '../../Context/UserProvider';
function Security() {
  const { userInfo, setUserInfo } = useUser(); 
  const [Password, setPassword] = useState(userInfo.password===null?true:false);
  const[open,setOpen]=useState(false);
  const[open2,setOpen2]=useState(false);
  return (
    <>

    {open &&<EditPassword open1={open} onClose={()=>{setOpen(false)}} ></EditPassword>}
    {open2 &&<CreatePassword open1={open2} onClose={()=>{setOpen2(false)}} ></CreatePassword>}
    <div className='Security'>
      <div className='Titel'><h1>Security</h1></div>
      <div className='ChangePassword'>
        <h1 > Password</h1>
       
       {Password?<div className='password'>
          <h1>
          You have not set a password on your account.
          </h1>
          <button onClick={()=>{setOpen2(true)}} >Create Password</button>

        </div>:
       <div className='password'>
           <h1>
           Change your password account.
          </h1>
          <button onClick={()=>{setOpen(true)}}>Change Password</button>
          </div>}
        
      </div>
      
        <div className='Devices'>
       
       <div className='Title'>
       <h1 > Devices </h1>   
       <p>You're currently logged in to Shopify on these devices. If you don't recognize a device, log out to keep your account secure.</p>
       </div>
       
       <div className='Loggedin'>
        <h2>Logged in</h2>
        <Devices></Devices>
        <Devices></Devices>
        <Devices></Devices>
        <Devices></Devices>
       </div>
        
        
        </div>
    
    </div>
    </>
  )
}

export default Security