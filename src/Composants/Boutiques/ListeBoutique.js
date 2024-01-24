import CardBoutique from "../../Pieces/CardBoutique";
import React from 'react';
import '../../Styles/ListeBoutique.css'
import { IoAddOutline } from "react-icons/io5";
<IoAddOutline />
function ListeBoutique({function1 }){
    
    return(
    <>
   <div className="ListBoutique">
    <div className="add" onClick={function1}>
    <IoAddOutline/>
    </div>    
    
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   <CardBoutique className='listeitem'></CardBoutique>
   
   </div>
    </>)
}
export default ListeBoutique;