import React, { useState, useEffect } from "react";
import '../../Styles/Boutiques_Dashboard/Home.css';
import Navbar from "./Composants/Navbar";
import Sidbar from "./Composants/SidBar";
import { useLocation } from 'react-router-dom';

function Home({ children }) {
    const location = useLocation();

    
    const [staticVariable, setStaticVariable] = useState(() => {
        const storedValue = localStorage.getItem('staticVariable');
        return storedValue ? JSON.parse(storedValue) : null;
    });

    useEffect(() => {
        if (location.state && location.state.data && location.state.data !== staticVariable) {
            setStaticVariable(location.state.data);
           
            localStorage.setItem('staticVariable', JSON.stringify(location.state.data));
        }
    }, [location.state, staticVariable]);

    const [toggle, setToggle] = useState(true);

    const toggleValue = () => {
        setToggle(prevToggle => !prevToggle);
    };

    const handleWindowResize = () => {
        setToggle(window.innerWidth >= 800);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement(child, { data: staticVariable });
    });

    return (
        <div className={`HomeAdmin_Dashborad ${toggle ? '' : 'close'}`}>
            <div className="navbar">
                <Navbar data={staticVariable?.list || location.state.data.list} setToggle={toggleValue} />
            </div>
            <div className={`sidbar `}>
                <Sidbar setToggle={toggleValue} />
            </div>
            <div className="body">
                <main>{childrenWithProps}</main>
            </div>
        </div>
    );
}

export default Home;
