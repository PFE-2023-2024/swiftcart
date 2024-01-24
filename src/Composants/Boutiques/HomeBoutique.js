import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React,{useState,useEffect } from 'react';
import { IoAddOutline } from "react-icons/io5";
import ListeBoutique from './ListeBoutique';
import '../../Styles/HomeBoutique.css'
import  Image  from '../../assets/images/Montassar Tayachi.png';
import BoutiqueSideBar from './BoutiqueSideBar';
import Formuler from './CreeBoutique/Formuler';
import { FiMenu } from "react-icons/fi";
function HomeBoutique(){
  const handleWindowResize = () => {
    if (window.innerWidth < 1014) {
      setIsSideleftbarOpen(false);
    } else {
      setIsSideleftbarOpen(true);
    }
  };
  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Initial check for window width on component mount
    handleWindowResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isSidebarleftOpen, setIsSideleftbarOpen] = useState(true);

  const toggleSideleftbar = () => {
    setIsSideleftbarOpen(!isSidebarleftOpen);
  };

  const toggleClose = () => {
    setIsSidebarOpen(false);
  };
  const toggleopen = () => {
    setIsSidebarOpen(true);
  };


    return(
        <>
        <Navbar expand="sm" className={` bg-white borderbuttom fixed-top ${isSidebarOpen ? 'falowpage' : ''  } `} >
      <Container>
        <div className='titrenavbarboutique'>
        <Navbar.Brand ><button className='addbutton2' onClick={toggleSideleftbar}><FiMenu /></button>  </Navbar.Brand>
        <Navbar.Brand href="#home"> Mes Boutiques </Navbar.Brand>
        </div>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            <button onClick={toggleSidebar} className='addbutton'><IoAddOutline size={30}></IoAddOutline></button>
           
			<img className="yy" src={Image}></img>
			
		
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <Navbar.Toggle className='navbarboggle'/>
    </Navbar>
    <div className='coco' >
   {isSidebarleftOpen && <div className={`si ${isSidebarOpen ? 'falowpage2' : ''  }`}><BoutiqueSideBar></BoutiqueSideBar></div>}
    <div className={`${isSidebarleftOpen ? 'se' :'se2'} ${isSidebarOpen ? 'falowpage2' : ''  }`}><ListeBoutique function1 ={toggleopen} ></ListeBoutique></div>
    {isSidebarOpen &&<Formuler function1 ={toggleClose}  ></Formuler>}
    </div>
        </>
    )
}
export default HomeBoutique