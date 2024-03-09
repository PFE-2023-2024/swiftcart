import { HiOutlinePencil } from "react-icons/hi"; 
import { MdModeEdit } from "react-icons/md"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BsTelephone } from "react-icons/bs";  
import { MdOutlineStorefront } from "react-icons/md";
import Rating from '@mui/material/Rating'; 
import React from 'react';
import './Setting.css';
import EditProfile from "./edit/EditProfile";
import EditImage from "./edit/EditImage";
const Setting = () => {
    const store=JSON.parse(localStorage.getItem('store'));
    const[EditProfileOpen,setEditProfileOpen]=React.useState(false);
    const[EditImageOpen,setEditImageOpen]=React.useState(false);
    return (
        <>
        {EditImageOpen && <EditImage profile_image={store.profile_image}  onClose={()=>{setEditImageOpen(false)}}/>}
        {EditProfileOpen && <EditProfile store={store} onClose={()=>{setEditProfileOpen(false)}}/>}
        
        <div className='setting'>
            <div className='setting-title '><h2>Store details</h2></div>
            <div className='setting-content'>
            <div className="settingimage">
                <div className="storeimage"> <img  src={store.profile_image} alt="Store image"></img> <button onClick={()=>{setEditImageOpen(true)}}><HiOutlinePencil /></button></div> 
                <div className="titre"><h1>{store.name}</h1> <Rating name="read-only" style={{fontSize:'1em'}} value={store.rating} readOnly /></div>
            </div>
                <div className='Profile'>
                    <div className="ProfileHeader"><h2>Profile</h2><button onClick={()=>{setEditProfileOpen(true)}}><MdModeEdit /></button></div>
                    <div className="storename">
                     <div>  <MdOutlineStorefront className="uhucuchzeiuceiu"/></div>
                        <div>
                            <h2>
                            Store name
                            </h2>
                            <h1>{store.name}</h1>
                        </div>
                    </div>
                    <div className="storename">
                       <div> <BsTelephone className="uhucuchzeiuceiu" /></div>
                        <div>
                            <h2>
                            Store phone
                            </h2>
                            <h1>{store.phone || 'no phone'} </h1>
                        </div>
                    </div>
                    <div style={{border:'none'}} className="storename">
                        <div><AiOutlineMail className="uhucuchzeiuceiu" /> </div>
                        <div>
                            <h2>
                            Store Email
                            </h2>
                            <h1>{store.email} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Setting;
