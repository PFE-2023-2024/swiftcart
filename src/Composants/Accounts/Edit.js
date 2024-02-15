import { AiOutlineCamera } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import Backdrop from '@mui/material/Backdrop';
import { Input, TextField } from '@mui/material';
import './Style/EditName.css';

function Edit({ open1,open2,open3,onClose,Email,LastName,FirstName,open4,image }) {
  const [firstNameChange, setFirstNameChange] = useState(FirstName);
  const [lastNameChange, setLastNameChange] = useState(LastName);
  const [emailChange, setEmailChange] = useState(Email);
  const [imageChange,setImageChange] = useState(null);
  const [imageper,setimageper] = useState(null);
  const[error,setError] = useState('');
  
   
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  const handFirstNameChange = (e) => {setFirstNameChange(e.target.value);};
  const handLastNameChange = (e) => {setLastNameChange(e.target.value);};
  const handEmailChange = (e) => {setEmailChange(e.target.value);};
 
  const[openbutton,setOpenButton]=useState(false);

  const handleImageChange = (e) => {
  
    const file = e.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImageChange(file);
      setimageper(newImageURL); 

    }
  };
 
  const controleButton = () => {
    const changesMade = firstNameChange !== FirstName || lastNameChange !== LastName || emailChange !== Email || imageChange !== null;
    setOpenButton(changesMade);
  };
  useEffect(()=>{
    setFirstNameChange(FirstName);
    setLastNameChange(LastName);
    setEmailChange(Email);
  },[FirstName,LastName,Email])

  useEffect(()=>{
   
    controleButton(); 
    },[firstNameChange,lastNameChange,emailChange,imageChange] );


  const handleSaveFirstName = () => {
    if (!firstNameChange.trim()) {
      setError("The first name cannot be empty.");
      return;
    }
    console.log("Sauvegarde du prénom:", firstNameChange);
    setError('');
    onClose();
  };
  const handleSaveLastName = () => {
    if (!lastNameChange.trim()) {
      setError("The Last name cannot be empty.");
      return;
    }
    console.log("Sauvegarde du prénom:", lastNameChange);
    setError('');
    onClose();
  };
  const handleSaveEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailChange)) {
      setError("Email is invalid.");}
      
    else{
        console.log("Sauvegarde du prénom:", emailChange);
        setError('');
        onClose();
      }
    }
  return (
  <>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open1}>
      <div className='EditName'>
        <div className='header'>
          <h1>Edit your First Name</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        <div className="body">
          <h5>Changes made to your profile First Name here, will be shown anywhere your profile is used.</h5>
          <TextField
            className="input"
            value={firstNameChange}
            onChange={handFirstNameChange}
            error={!!error} // Afficher l'état d'erreur visuellement
            helperText={error} // Afficher le message d'erreur
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                fontSize: '15px',
                padding: '10px'
              },
            }}
          ></TextField>
          {openbutton && <div className="button"><button onClick={handleSaveFirstName}>Save Changes</button></div>}
        </div>
      </div>
    </Backdrop>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open2}>
      <div className='EditName'>
        <div className='header'>
          <h1>Edit your Last Name</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        <div className="body">
          <h5>Changes made to your profile Last Name here, will be shown anywhere your profile is used.</h5>
          <TextField
            className="input"
            value={lastNameChange}
            onChange={handLastNameChange}
            error={!!error} // Afficher l'état d'erreur visuellement
            helperText={error} // Afficher le message d'erreur
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                fontSize: '15px',
                padding: '10px'
              },
            }}
          ></TextField>
          {openbutton && <div className="button"><button onClick={handleSaveLastName}>Save Changes</button></div>}
       
        </div>
      </div>
    </Backdrop>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open3}>
      <div className='EditName'>
        <div className='header'>
          <h1>Edit your Email</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        <div className="body">
          <h5>Changes made to your profile Email here, will be shown anywhere your profile is used.</h5>
          <TextField
            className="input"
            value={emailChange}
            onChange={handEmailChange}
            error={!!error} // Afficher l'état d'erreur visuellement
            helperText={error} // Afficher le message d'erreur
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                fontSize: '15px',
                padding: '10px'
              },
            }}
          ></TextField>
          {openbutton && <div className="button"><button onClick={handleSaveEmail}>Save Changes</button></div>}
       
        </div>
      </div>
    </Backdrop>
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open4}>
      <div className='EditName'>
        <div className='header'>
          <h1>Edit your Image</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        <div className="body">
          <h5>Changes made to your profile Image here, will be shown anywhere your profile is used.</h5>
          <div className="image-container">
            <img src={imageper || image} alt="Profile" />
            <button onClick={handleButtonClick}><AiOutlineCamera/></button>
            <input
              id="jnxjsnjxn"
              accept="image/*"
              type="file"
              ref={fileInputRef}
              style={{display:'none'}}
              onChange={handleImageChange}
            />
          </div>
          {openbutton && <div className="button"><button>Save Changes</button></div>}
       
        </div>
      </div>
    </Backdrop>
    </>
  );
}

export default Edit;
