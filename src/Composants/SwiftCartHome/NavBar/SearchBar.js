import React from 'react'
import './Style/Navbar.css'
import { CiSearch } from "react-icons/ci";

function SearchBar() {
    const [open, setOpen] = React.useState(false);
return (
    <>
       { open&& <div className='hverksj' onClick={()=>{setOpen(false)}}></div>}
        <div className='SearchBar'>
        <form className={`${open ? 'style1':''}`}>
        <select>
        <option placeholder="category">All</option>
        <option placeholder="category">Alimentation</option>
        <option placeholder="category">Vêtements et Mode</option>
        <option placeholder="category">Électronique</option>
        <option placeholder="category">Magasin de meubles</option>
        <option placeholder="category">Parfumerie</option>
        <option placeholder="category">Librairie</option>
        <option placeholder="category">Sport et Loisirs</option>
        <option placeholder="category">Automobile</option>
        <option placeholder="category">Animaux de compagnie</option>
        <option placeholder="category">Autre</option>
        </select>
        <input type="text"  onFocus={()=>{setOpen(true)}} placeholder="Search SwiftCart"></input> 
        <button> <CiSearch /></button>
        </form> 
      
    </div>
    </>
  )
}

export default SearchBar