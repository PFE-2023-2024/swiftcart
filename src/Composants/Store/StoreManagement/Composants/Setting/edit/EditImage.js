import { AiOutlineClose } from "react-icons/ai"; 
import React, { useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop';
import { CgClose } from "react-icons/cg";
import {  CircularProgress} from '@mui/material'; 
import profile from '../../../../../../assets/images/profile.png';
import { AiOutlineCamera } from "react-icons/ai"; 
import cover from '../../../../../../assets/images/cover.png';
import { MdReportGmailerrorred } from "react-icons/md";
import{API_BASE_URL}from '../../../../../../config'
import './Style/EditImage.css';
function EditImage({onClose,cover_image,profile_image}) {
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
const [open, setOpen] = React.useState(false);

useEffect(() => {
  if (image || image2) {
    setOpen(true);
  }
  else{
    setOpen(false);
  }
}, [image,image2]);

const  handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const reponce = await fetch(`${API_BASE_URL}/store`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          profile_image: image2,
          cover_image: image
        })
      });
      const reponceData = await reponce.json();
      if (reponceData.success) {
        setLoading(false);
        onClose();
      }
      else {
        setLoading(false);
        setError(reponce.message);
      }
     
    } catch (err) {
      setLoading(false);
      setError('Something went wrong');
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
          <button onClick={()=>setError('')}><AiOutlineClose /></button> 
            <p><MdReportGmailerrorred />{error}</p>
          </div> }
           <div className="image-container">
            <img src={image ||cover_image ||cover} alt="Profile" className='cover'/>
            <div className='Profile'>
            <img src={image2||profile_image || profile} alt="Profile" />
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
    
          <div className="button"> {open ? <button onClick={handleSave}>Save Changes</button>:<button style={{cursor:'not-allowed',background:'#d6d6d683',border:'none'}}>Save Changes</button>}</div>
       
        </div>
      </div>
    </Backdrop>
    </>
  )
}

export default EditImage;