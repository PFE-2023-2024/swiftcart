import React ,{useState,useEffect}from 'react';
import '../../../../../Styles/Boutiques_Dashboard/Compoants/screen/Produit.css'
import AjouterProduit from './AjouterProduit';
import ListeProduit from './ListeProduit';
import { API_BASE_URL } from '../../../../../config';

function Produit(props) {
  const [menuList, setmenuList] = useState([]);

  const relodedata = async () =>{
    let test=null
    try {            
      const response = await fetch( API_BASE_URL+"/produit/boutiques/"+props.data.list.idboutique);
      test = await response.json();
    } catch (err) {
      console.error(err.message);
      test = []; // Set a default value (empty array) in case of an error
    }
    setmenuList(prevState => test);
  }
  
  useEffect(() => {
    relodedata(); 
  }, [menuList]);
  

  const [toggle, setToggle] = useState(false);

  function open(){
    setToggle(true);
  }
  
  function close(){
    setToggle(false);
  }

  return (
   <>
    <div className='Produit'>
        <div className='Produitnav'>
          <div className='left'> Home / Produit</div>
          <div className='right'> 
             <div className='addProduit'> 
                <button onClick={open}>Add Produit</button>
            </div>
         </div>
      </div>
    <main className='main'>
    <ListeProduit data={menuList}></ListeProduit>
   

    
    </main>
     
    </div>
    {toggle&&<AjouterProduit data={props.data} close={close}/>}
   </>
  
  );
}

export default Produit;
