import React, { useState, useEffect, createContext, useContext } from 'react';
import '../../../../../Styles/Boutiques_Dashboard/Compoants/screen/Produit.css';
import AjouterProduit from './AjouterProduit';
import ListeProduit from './ListeProduit';
import { API_BASE_URL } from '../../../../../config';
import { DataContext } from '../../../Home';
function Produit() {
  const [menuList, setmenuList] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Récupération de la valeur dataList à partir du contexte
  const dataList = useContext(DataContext);
  console.log(dataList);
  const relodedata = async () => {
    let test = null;
    try {            
      const response = await fetch(API_BASE_URL + "/produit/boutiques/" + dataList.idboutique);
      test = await response.json();
      console.log(test);
    } catch (err) {
      console.error(err.message);
      test = [];
    }
    setmenuList(prevState => test);
  }
  
  useEffect(() => {
    relodedata(); 
  }, [menuList]);
  

  function open() {
    setToggle(true);
  }
  
  function close() {
    setToggle(false);
  }

  return (
    // Envelopper les enfants avec le DataProvider
    <DataContext.Provider value={dataList}>
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
      {toggle && <AjouterProduit data={dataList} close={close}/>}
    </DataContext.Provider>
  );
}

export default Produit;
