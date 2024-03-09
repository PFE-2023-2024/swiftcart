import { HiOutlineSwitchHorizontal } from "react-icons/hi"; 
import { BiMenu } from "react-icons/bi"; 
import { AiFillHeart } from "react-icons/ai"; 
import { IoMdNotifications } from "react-icons/io"; 
import { FaOpencart } from "react-icons/fa"; 
import React,{useEffect,useState} from 'react';
import swiftcart from '../../../assets/images/swiftcart/swiftcart01.png';
import './Style/Navbar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Sidebar from './SidBar/SidBar';
import AccountMenu from './AccountMenu';
import { useUser } from '../../../Context/UserProvider';
import Badge from '@mui/material/Badge';
import Navigate from "./Navigate";
import MyMegaMenu from "./Category";
import Tooltip from '@mui/material/Tooltip';
function NavBar() {
  const { userInfo } = useUser();
  const [logIn, setLogIn] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("token")){
      setLogIn(true);
    }
    else{
      setLogIn(false);
    }
 }, []);
  const [open, setopen] = React.useState(true);
  const [openSidbar, setopenSidbar] = React.useState(false);
  const handleWindowResize = () => {
    if (window.innerWidth < 800) {
      setopen(false);
    } else {
      setopen(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <>
    <Backdrop
        onClick={()=>{
        setopenSidbar(false)
        }}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSidbar}
      >
      <Sidebar onClose={()=>{setopenSidbar(false)}}></Sidebar>
    </Backdrop>
    {open ?
    <>
    <div className='Navbar'>
        <div className='left'>
            <div className='logo'><img src={swiftcart}></img> 
            </div>
        </div>
        <div className='body'>
        <SearchBar/>   
        </div>
        <div className='right'>
           {!logIn ?  <>
            <Link className='Connexion' to={'/Swiftcart/logIn'}>Connexion</Link>
            <Link className='Commencer' to ={'/Swiftcart/SignUp'}>Commencer</Link>
            </>:
            <div className='cybxzbxzb'>
            <Tooltip placement="bottom"  title="Compare" arrow>  <div className='cart'> <Badge badgeContent={0} color="primary"><HiOutlineSwitchHorizontal /></Badge></div></Tooltip>
           <Tooltip placement="bottom"  title="Wishlist" arrow> <div className='cart'> <Badge badgeContent={0} color="primary"><AiFillHeart /></Badge></div></Tooltip>
           <Tooltip placement="bottom"  title="Notification" arrow>    <div className='cart'> <Badge badgeContent={0} color="primary"><IoMdNotifications /></Badge></div>   </Tooltip>   
           <Tooltip placement="bottom"  title="Cart" arrow>  <div className='cart'> <Badge badgeContent={10} color="primary"><FaOpencart /></Badge></div></Tooltip>
           
              <AccountMenu  userInfo={userInfo}></AccountMenu> 
            </div>}
              
        </div>
    </div>
   
    
    </>:
   <div className='Navbar'>
   <div className='left'>
       <div className='logo'><img src={swiftcart}></img> </div>
  
   </div>
   <div className='body'>
   <SearchBar/>   
   </div>
   <div className='right'>
      {!logIn ?  <>
       <Link className='Connexion' to={'/Swiftcart/logIn'}>Connexion</Link>
       <Link className='Commencer' to ={'/Swiftcart/SignUp'}>Commencer</Link>
       </>:
       <div className="menu">
        <button onClick={()=>{setopenSidbar(true)}}><BiMenu /></button>
       </div>
       }
         
   </div>
</div>
    }
    </>
  )
}

export default NavBar