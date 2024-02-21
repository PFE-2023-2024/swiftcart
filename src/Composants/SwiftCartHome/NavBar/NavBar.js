import React,{useEffect,useState} from 'react';
import swiftcart from '../../../assets/images/swiftcart/swiftcart01.png';
import './Style/Navbar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Sidebar from '../SidBar/SidBar';
import AccountMenu from './AccountMenu';
import { useUser } from '../../../Context/UserProvider';
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
    if (window.innerWidth < 1014) {
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
            <div className='cybxzbxzb'>
           <AccountMenu userInfo={userInfo}></AccountMenu> 
            </div>}
              
        </div>
    </div>:
    <div className='Navbar2'>
        <div className='top'>
        <div className='left'>
            <div className='logo'><img width={136} src={swiftcart}></img> </div>
       
        </div>
        <div className='right'>
           {!logIn ?  <>
            <Link className='Connexion' to={'/Swiftcart/logIn'}>Connexion</Link>
            <Link className='Commencer' to ={'/Swiftcart/SignUp'}>Commencer</Link>
            </>:
            <div className='cybxzbxzb'>
           <AccountMenu userInfo={userInfo}></AccountMenu>
            </div>}
             
        </div>
        </div>
        <div className='body'>
        <SearchBar/>   
        </div>
    </div>
    }
    </>
  )
}

export default NavBar