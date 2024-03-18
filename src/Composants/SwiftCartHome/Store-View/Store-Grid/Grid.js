import React, { useEffect, useState } from 'react'
import './Grid.css';
import{API_BASE_URL} from '../../../../config';
import StoreItem from '../Store-item/StoreItem';
function Grid_store() {
    const [stores, setStores] = useState([]);
   
    useEffect(() => {
       const fetchStores = async () => {
         const response = await fetch(`${API_BASE_URL}/stores/all`);
         const data = await response.json();
         setStores(data.stores);
       };
         fetchStores();
    }, []);

   
  return (
    <div className='Grid_Store'>
    {stores.map((store) => (
        <StoreItem  className='card' store={store}/>
    ))}
    
    </div>
  )
}

export default Grid_store