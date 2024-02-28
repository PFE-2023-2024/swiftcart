import React, { createContext, useState, useContext, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const UserContext = createContext();

export const StoreCategories = ({ children }) => {
  const [storeCategories, setStoreCategories] = useState([]);
  
  const fetchCategoriesData = async () => {
   
      try {
        const response = await fetch(API_BASE_URL + "/store_categories");
        const Categories = await response.json();
       
        if (Categories.success === true){
            setStoreCategories(Categories.store_categories);
        }
       
      } catch (err) {
        console.error(err.message);
   }
    
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);


  return (
    <UserContext.Provider value={{ storeCategories, setStoreCategories }}>
      {children}
    </UserContext.Provider>
  );
};

export const Categories = () => useContext(UserContext);
