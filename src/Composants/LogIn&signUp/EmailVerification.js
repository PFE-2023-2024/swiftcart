import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {API_BASE_URL} from '../../config';
import axios from 'axios'; 
function EmailVerification() {
    let { token } = useParams();
    let navigate = useNavigate();
      
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(API_BASE_URL + '/authentication/verify_email', { token });
                localStorage.setItem("token", response.data.token);
                console.log(response);
                navigate('/Swiftcart/');
            } catch (error) {
                if(error.response.status === 401){
                    const data ={
                        data1:`Your account activation code has expired.`,
                        data2:`Please register again to create a new account.`
                    }
                 navigate('/Swiftcart/SignUp',{ state: { data:data } });
                }
                else if( error.response.status === 400){
                    const data ={
                        data1:` Your account has been successfully activated.`,
                        data2:` Please log in to access your account`
                    }
                 navigate('/Swiftcart/logIn',{ state: { data: data } });
                }
                else{
                    const data ={
                        data1:`A server problem has occurred.`,
                        data2:`Please retry later."`
                    }  
                 navigate('/Swiftcart/logIn',{ state: { data: data } });

                }
            }
        };
        fetchData();      
    }, [token, navigate]);
    
    return null;
}

export default EmailVerification;
