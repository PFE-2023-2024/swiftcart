import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React,{useState,useEffect } from 'react';
import { IoAddOutline } from "react-icons/io5";
import ListeBoutique from './ListeBoutique';
import '../../Styles/BoutiqueStyles/HomeBoutique.css'
import  Image  from '../../assets/images/Montassar Tayachi.png';
import BoutiqueSideBar from './BoutiqueSideBar';
import Formuler from './CreeBoutique/Formuler';
import { FiMenu } from "react-icons/fi";
import MobileForme from './CreeBoutique/MobileForme';
function HomeBoutique(){

  const [menuList, setmenuList] = useState([]);

  ///////////////////////////////////////////////////////////////
       const relodedata = async () =>{
              let test=null
              try {            
                const response = await fetch("http://localhost:4000/boutiques/1");
                test = await response.json();
                
              } catch (err) {
                console.error(err.message);
                test = []; // Set a default value (empty array) in case of an error
              }
              setmenuList(prevState => test);
            }

////////////////////////////////////////////////////////////            
          
  const handleWindowResize = () => {
    if (window.innerWidth < 1014) {
      setIsSideleftbarOpen(false);
    } else {
      setIsSideleftbarOpen(true);
    }
  };
  useEffect(() => {
    relodedata(); 
  }, [menuList]);
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [FormMobile, setFormMobile] = useState(false);
  
  const [isSidebarleftOpen, setIsSideleftbarOpen] = useState(true);

  const toggleSideleftbar = () => {
    setIsSideleftbarOpen(!isSidebarleftOpen);
  };

  const toggleClose = () => {
    setFormMobile(false);
    setIsSidebarOpen(false);
  };
  const toggleopen = () => {
    if (window.innerWidth < 1300) {
    setFormMobile(true);}
    else{
      setIsSidebarOpen(true)
    }
  };


    return(
        <>
        {!FormMobile &&  <div>
       <Navbar id='yy' className={` bg-white borderbuttom fixed-top ${isSidebarOpen ? 'falowpage' : ''  } `} >
      <Container>
        <div className='titrenavbarboutique'>
        <Navbar.Brand ><button className='addbutton2' onClick={toggleSideleftbar}><FiMenu /></button>  </Navbar.Brand>
        <Navbar.Brand href="#home"> Mes Boutiques </Navbar.Brand>
        </div>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            <button onClick={toggleopen} className='addbutton'><IoAddOutline size={30}></IoAddOutline></button>
           
			<img className="yy" src={Image}></img>
			
		
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <div className='coco' >
   {!FormMobile&&isSidebarleftOpen && <div className={`si ${isSidebarOpen ? 'falowpage2' : ''  }`}><BoutiqueSideBar menuList={menuList}></BoutiqueSideBar></div>}
    <div className={`${isSidebarleftOpen ? 'se' :'se2'} ${isSidebarOpen ? 'falowpage2' : ''  }`}><ListeBoutique function1 ={toggleopen} menuList={menuList}></ListeBoutique></div>
    </div>
   
        
        </div>}
        <div className='CarouselMobile'>  {FormMobile &&<MobileForme function1 ={toggleClose}  ></MobileForme>}</div>
        {isSidebarOpen &&<Formuler function1 ={toggleClose}  ></Formuler>}
   
        </>
    )
}
export default HomeBoutique