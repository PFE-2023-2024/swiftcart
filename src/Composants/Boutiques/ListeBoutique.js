import CardBoutique from "../../Pieces/CardBoutique";
import React,{useEffect,useState} from 'react';
import '../../Styles/BoutiqueStyles/ListeBoutique.css'
import { IoAddOutline } from "react-icons/io5";
<IoAddOutline />
function ListeBoutique({function1,menuList }){

   
  
  /////////////////////////////////////////////////////////////////
   
    
    return(
    <>
   <div className="ListBoutique">
    <div className="add" onClick={function1}>
    <IoAddOutline/>
    </div>    

  
   {menuList && menuList.map((menuItem, key) => {
    return (
        <CardBoutique
            key={key}
            className='listeitem'
            list={menuItem}
        />
    );
})}

   </div>
    </>)
}
export default ListeBoutique;