import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Image  from '../../assets/images/Montassar Tayachi.png';
import SearchBar from '../../Pieces/search_bar';
import Button from 'react-bootstrap/Button';
import React,{ useState } from "react";
import "../../Styles/NavBar.css";import "../../Styles/SidBar.css"
import { IoPersonCircleSharp } from "react-icons/io5";
import SidBar from '../../Pieces/SidBar';
function Navbar1() {
  const Autentifier=true;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}>
    <Navbar  expand="lg" bg="dark" data-bs-theme="dark">
      <Container className='Navbar'>
        <Navbar.Brand >SwiftCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <SearchBar></SearchBar>
            
           { Autentifier &&  <button className='pp'  onClick={toggleSidebar}>
			<img className="imauser" src={Image}></img>
			<h1 className='nauser'>Montassar Tayachi </h1>
		</button>}
            {! Autentifier &&
            
            <Button className='pp' variant="warning" ><IoPersonCircleSharp size={30}/>Connection</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    {isSidebarOpen && (
        <div className="sidebar-container">
          <SidBar onClose={toggleSidebar} />
        </div>)}
    </>
  );
}

export default Navbar1;