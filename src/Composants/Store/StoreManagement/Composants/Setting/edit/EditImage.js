import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import { CgClose } from "react-icons/cg";
import {  CircularProgress} from '@mui/material'; 
import profile from '../../../../../../assets/images/profile.png';
import { AiOutlineCamera } from "react-icons/ai"; 
import cover from '../../../../../../assets/images/cover.png';
import { MdReportGmailerrorred } from "react-icons/md";
import{API_BASE_URL}from '../../../../../../config'
import './Style/EditImage.css';
function EditImage({onClose}) {
    const fileInputRef = React.useRef(null);
    const fileInputRef2 = React.useRef(null);
    const [image, setImage] = React.useState(null);
    const [image2, setImage2] = React.useState(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
      };
      const handleButtonClick2 = () => {
        fileInputRef2.current.click();
      };
   
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState('');
const  handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // await dispatch(updateProfile({ image, image2 }));
      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
    }
  return (
    <>
     {loading && <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
        <CircularProgress color="inherit" />
      </Backdrop>}
    <Backdrop open={true}sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div className='EditImage'>
        <div className='header'>
          <h1>Edit your image store</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        <div className="body">
        {error.trim() && <div className="erreur">
            <p><MdReportGmailerrorred />{error}</p>
          </div> }
           <div className="image-container">
            <img src={image||cover} alt="Profile" className='cover'/>
            <div className='Profile'>
            <img src={image2|| profile} alt="Profile" />
            </div>
            <div className='Profile uuu'>
            <label onClick={handleButtonClick2}><AiOutlineCamera/></label>
            </div>
            
            <button onClick={handleButtonClick}><AiOutlineCamera/></button>
            <input
              id="jnxjsnjxn"
              accept="image/*"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                  setImage(e.target.result);
                };
                reader.readAsDataURL(file);
              }}
              ref={fileInputRef}
              style={{display:'none'}}
            />
              <input
              id="jnxjsnjxn"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                  setImage2(e.target.result);
                };
                reader.readAsDataURL(file);
              }}
              type="file"
              ref={fileInputRef2}
              style={{display:'none'}}
            />
          </div>   
    
          <div className="button"><button onClick={handleSave}>Save Changes</button></div>
       
        </div>
      </div>
    </Backdrop>
    </>
  )
}

export default EditImage;