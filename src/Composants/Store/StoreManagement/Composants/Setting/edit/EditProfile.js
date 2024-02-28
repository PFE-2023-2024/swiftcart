import React,{useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop';
import { CgClose } from "react-icons/cg";
import { MdReportGmailerrorred } from "react-icons/md";
import {  CircularProgress, TextField } from '@mui/material'; 
import { AiOutlineClose } from "react-icons/ai"; 
import { MuiTelInput } from 'mui-tel-input';
import { isValidPhoneNumber } from 'libphonenumber-js';
import {API_BASE_URL} from '../../../../../../config';

import './Style/EditProfile.css'
function EditProfile({onClose,name}) {

    const [storeName, setStoreName] = React.useState(name);
    const [storePhone, setStorePhone] = React.useState('');
    const [storeEmail, setStoreEmail] = React.useState('');
    const [storeNameError, setStoreNameError] = React.useState('');
    const [storePhoneError, setStorePhoneError] = React.useState('');
    const [storeEmailError, setStoreEmailError] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    
    const validate = () => {
        let isValid = true;
        if (!storeName) {
            setStoreNameError('Store name is required');
            isValid = false;
        } else {
            setStoreNameError('');
        }
        if (!storePhone) {
          setStorePhoneError('Store phone is required');
          isValid = false;
      } else if (!isValidPhoneNumber(storePhone)) {
          setStorePhoneError('Invalid phone number');
          isValid = false;
      } else {
          setStorePhoneError('');
      }
        if (!storeEmail) {
            setStoreEmailError('Store email is required');
            isValid = false;
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(storeEmail)) {
            setStoreEmailError('Invalid email format');
            isValid = false;
        } else {
            setStoreEmailError('');
        }
        return isValid;
    }
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
      if (storeName !== name) {
        setOpen(true);
      }
      else{
        setOpen(false);
      }
    }, [storeName]);
    const saveChanges = async () => {
        if (!validate()) {
          return; 
          }
          setLoading(true);
        try {
          const reponce = await fetch(`${API_BASE_URL}/stores`, {

            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              name: storeName,
              id:JSON.parse(localStorage.getItem('store')).id,
            })
          });
         const res= await reponce.json();
          if (res.success) {
            setLoading(false);
            localStorage.setItem('store',JSON.stringify(res.updated_stores[0]));
            onClose();
          }
          else {
            setLoading(false);
            setError(res.message);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
    }
  return (
    <>
     {loading && <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}>
        <CircularProgress color="inherit" />
      </Backdrop>}
    <Backdrop open={true}sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div className='EditProfile'>
        <div className='header'>
          <h1>Edit your Profile</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        <div className="body">
        {error.trim() && <div className="erreur">
        <button onClick={()=>setError('')}><AiOutlineClose /></button> 
            <p><MdReportGmailerrorred />{error}</p>
          </div> }
          <h5>These details could be publicly available. Do not use your personal information.</h5>
          <label>Store name</label>
          <TextField
            value={storeName} 
            helperText={storeNameError.trim() ? storeNameError : ''}
            onChange={(e) => setStoreName(e.target.value)}
            error={storeNameError.trim()}
            className="input"
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                fontSize: '15px',
                padding: '10px'
              },
            }}
            type='text'
          ></TextField>
            <label>Store phone</label>
            <MuiTelInput
                            defaultCountry='TN'
                            value={storePhone}
                            onChange={setStorePhone}
                            error={storePhoneError.trim()}
                            helperText={storePhoneError}
                            fullWidth
                            inputProps={{
                                required: true,
                                autoFocus: true,
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                                    fontSize: '15px',
                                    padding: '12px'
                                },
                            }}
                        />
            <label>Store Email</label>
            <TextField
            value={storeEmail}
            onChange={(e) => setStoreEmail(e.target.value)}
            error={storeEmailError.trim()}
            type='email'
            className="input"
            helperText={storeEmailError.trim() ? storeEmailError : ''}
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                fontSize: '15px',
                padding: '10px'
              },
            }}
          ></TextField>
         <div className="button"> {open ? <button onClick={saveChanges}>Save Changes</button>:<button style={{cursor:'not-allowed',background:'#d6d6d683',border:'none'}}>Save Changes</button>}</div>
       
        </div>
      </div>
    </Backdrop>
    </>
  )
}

export default EditProfile