import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import '../../Styles/BoutiqueSideBar.css';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import CardBoutique2 from "../../Pieces/CardBoutique2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
function BoutiqueSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='sidebarleft'>
        <button className="aaww" onClick={toggleSidebar}><h5><SiHomeassistantcommunitystore/> Account</h5> <h5>{isSidebarOpen && <SlArrowRight/> } { !isSidebarOpen &&<SlArrowDown/>}</h5></button>
        {isSidebarOpen && (
          <div >
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
            <Nav.Link className="link" href="/link"><CardBoutique2/></Nav.Link>
          </div>
        )}
      </div>
    </>
  );
}

export default BoutiqueSideBar;
