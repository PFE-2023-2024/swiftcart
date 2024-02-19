import { MdModeEdit } from "react-icons/md"; 
import { FiEdit2 } from "react-icons/fi"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BsTelephone } from "react-icons/bs"; 
import { BsTelephoneFill } from "react-icons/bs"; 
import { MdOutlineStorefront } from "react-icons/md"; 
import { MdStore } from "react-icons/md"; 
import React from 'react';
import './Setting.css';
const Setting = () => {
    return (
        <>
        <div className='setting'>
            <div className='setting-title '><h2>Store details</h2></div>
            <div className='setting-content'>
                <div className='Profile'>
                    <div className="ProfileHeader"><h2>Profile</h2><button><MdModeEdit /></button></div>
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
