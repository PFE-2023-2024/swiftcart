import React, { useState, useEffect, createContext, useContext } from "react";
import '../../Styles/Boutiques_Dashboard/Home.css';
import Navbar from "./Composants/Navbar";
import Sidbar from "./Composants/SidBar";
import { Outlet, useLocation } from 'react-router-dom';


export const DataContext = createContext();


function Home() {
    const location = useLocation();
    const [dataList, setDataList] = useState(() => {
        const storedValue = localStorage.getItem("dataList");
        return storedValue ? JSON.parse(storedValue) : location.state?.data?.list;
    });
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

    useEffect(() => {
        if (location.state?.data?.list) {
            setDataList(location.state.data.list);
            localStorage.setItem("dataList", JSON.stringify(location.state.data.list));
        }
    }, [location.state]);
    return (
        <DataContext.Provider value={dataList}>
            <div className={`HomeAdmin_Dashborad ${toggle ? '' : 'close'}`}>
                <div className="navbar">
                    <Navbar setToggle={toggleValue} />
                </div>
                <div className={`sidbar `}>
                    <Sidbar setToggle={toggleValue} />
                </div>
                <div className="body">
                    <Outlet />
                </div>
            </div>
        </DataContext.Provider>
    );
}

export default Home;
