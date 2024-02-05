import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { API_BASE_URL } from '../../config';
import '../../Styles/LogIn&signUp/login.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios'; // Importer axios
import { useNavigate } from 'react-router-dom';
function LogIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_BASE_URL+'/users', { email, password }); // Envoyer les informations d'identification à l'API
      console.log('Login successful:', response.data);
      navigate('/MALL-SHOPPING');
    } catch (error) {
      setError(error.response.data.error);
      console.error('Login error:', error.response.data.error);
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <Paper className='page' elevation={3}>
          <h1>LogIn</h1>
          <div className='input'>
            <FormControl sx={{ width: '35ch' }}>
              <TextField
                className='TextField'
                id='input-with-icon-textfield'
                label='Email'
                value={email}
                onChange={handleEmailChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ marginRight: '10px' }}>
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                type={showPassword ? 'text' : 'password'}
                id='outlined-multiline-flexible'
                label='Password'
                value={password}
                onChange={handlePasswordChange}
                className='TextField'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton aria-label='toggle password visibility' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <button type='submit' className='button'>
            LogIn
          </button>
          <p className='text'>Or login with</p>
          <div className='reseauxsociaux'>
            <button className='facebook'>
              <FaFacebookSquare size={30} /> Facebook
            </button>
            <button className='google'>
              <FcGoogle size={30} /> Google
            </button>
          </div>

          <div className='Signuip'>
            <p>Not a member?</p>
            <Link className='link'>Sign up now</Link>
          </div>
          {error && <p className='error'>{error}</p>}
        </Paper>
      </form>
    </div>
  );
}

export default LogIn;
