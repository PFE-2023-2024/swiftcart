import React, { createContext, useState, useContext, useEffect } from 'react';
import  {API_BASE_URL} from '../config';
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});



  useEffect(() => {
    const decodePayload = (token) => {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    };
    

    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const payload = decodePayload(token);
        setUserInfo(payload.user);
        try {
          const response = await fetch(API_BASE_URL + "/users/" + payload.user.id);
          const userData = await response.json();
         console.log(userData);
         
         setUserInfo(prevState => ({ ...prevState, ...userData.user }));
        } catch (err) {
          console.error(err.message);
        }
      }
    };
  
    fetchUserData();
    
  }, []);
  console.log(userInfo);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
