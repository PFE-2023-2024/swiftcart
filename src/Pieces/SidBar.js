import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'; // Pour un bouton de fermeture, par exemple
import  Image  from '../assets/images/Montassar Tayachi.png';
const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
      <IoClose className="close-btn" onClick={onClose} />
      <Nav defaultActiveKey="/home" className="flex-column">
        <div className='tetesidbar'>
			<img className="imageuser" src={Image}></img>
			<h1 className='nameuser'>Montassar Tayachi </h1>
		</div>
        <Nav.Link href="/link">Account</Nav.Link>
		<Link to="/HomeBoutique">Orders</Link>
		
		<Nav.Link href="/link">Recommendations</Nav.Link>
		<Nav.Link href="/link">Browsing History</Nav.Link>
		<Nav.Link href="/link">Video Purchases & Rentals</Nav.Link>
		<Nav.Link href="/link">Memberships & Subscriptions</Nav.Link>
		<Nav.Link href="/link">My Boutique</Nav.Link>
		<Nav.Link href="/link">Watchlist</Nav.Link>
		<Nav.Link href="/link">Subscribe & Save Items</Nav.Link>




        {/* Ajoutez d'autres éléments de la barre latérale selon vos besoins */}
      </Nav>
    </div>
  );
};

export default Sidebar;
