import { BiStore } from "react-icons/bi"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useUser } from '../../../Context/UserProvider';
import './Style/Navbar.css'
export default function AccountMenu() {
  const { userInfo, setUserInfo } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout =()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          <div className='homeMenu'>  <Avatar sx={{ width: 40, height: 40 }}src= {userInfo.image}></Avatar> <h1>{userInfo.first_name}</h1></div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
        <Avatar /><Link  style={{textDecoration:'none',color:'#818181'}} >Profile</Link>
       
        </MenuItem>
        <Link  style={{textDecoration:'none',color:'#818181'}} to="/Swiftcart/MyStores">
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <StorefrontOutlinedIcon fontSize="small"  />
        </ListItemIcon>
         
          <span> My stores</span>
        </MenuItem>
      
        </Link>
        <Divider />
      
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddShoppingCartIcon fontSize="small" />
          </ListItemIcon>
          <Link style={{textDecoration:'none',color:'#818181'}}>Orders</Link>
        </MenuItem>

        <Link  style={{textDecoration:'none',color:'#818181'}} to="/Swiftcart/Accounts"> 
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>
        <MenuItem onClick={() => { handleClose(); logout(); }}>
        <ListItemIcon>
            <Logout fontSize="small" />
        </ListItemIcon>
        <span style={{ textDecoration: 'none', color: '#818181', cursor: 'pointer' }}>Disconnect</span>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}