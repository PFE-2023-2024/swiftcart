import { MdModeEdit } from "react-icons/md"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BsTelephone } from "react-icons/bs";  
import { MdOutlineStorefront } from "react-icons/md"; 
import React from 'react';
import './Setting.css';
import profile from '../../../../../assets/images/profile.png';
import cover from '../../../../../assets/images/cover.png';
import EditProfile from "./edit/EditProfile";
import EditImage from "./edit/EditImage";
const Setting = () => {
    const[EditProfileOpen,setEditProfileOpen]=React.useState(false);
    const[EditImageOpen,setEditImageOpen]=React.useState(false);
    return (
        <>
        {EditImageOpen && <EditImage onClose={()=>{setEditImageOpen(false)}}/>}
        {EditProfileOpen && <EditProfile onClose={()=>{setEditProfileOpen(false)}}/>}
        <div className='setting'>
            <div className='setting-title '><h2>Store details</h2></div>
            <div className='setting-content'>
            <div className='ProfileImages'>
                        <button className="changephoto" onClick={()=>{setEditImageOpen(true)}}> <MdModeEdit /> </button>
                        <img src={cover} alt="profile" className="cover"/>
                        <img src={profile} alt="profile" className="profileImage" />
                    </div>
                <div className='Profile'>
                    <div className="ProfileHeader"><h2>Profile</h2><button onClick={()=>{setEditProfileOpen(true)}}><MdModeEdit /></button></div>
                    <div className="storename">
                       <MdOutlineStorefront className="uhucuchzeiuceiu"/>
                        <div>
                            <h1>
                            Store name
                            </h1>
                            <h1>My store</h1>
                        </div>
                    </div>
                    <div className="storename">
                        <BsTelephone className="uhucuchzeiuceiu" />
                        <div>
                            <h1>
                            Store phone
                            </h1>
                            <h1>20 522 255 </h1>
                        </div>
                    </div>
                    <div style={{border:'none'}} className="storename">
                        <AiOutlineMail className="uhucuchzeiuceiu" /> 
                        <div>
                            <h1>
                            Store Email
                            </h1>
                            <h1>Montassartayachi2002@gmail.com </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Setting;
