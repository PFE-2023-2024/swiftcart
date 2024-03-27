import React, { useEffect, useState } from 'react';
import Grid_Product from '../../Product-View/Grid/Grid';
import { Dropdown } from 'react-bootstrap';
import './Result.css';
import Chip from '@mui/material/Chip';
import { RiFilter3Line } from "react-icons/ri";
import Scroll_Horizontal from '../../Store-View/Scroll_Horizontal/Scroll_Horizontal';

import { Pagination } from 'antd';
function Result({stores_count,Stores,filters, Open,onDeleteFilter,handleCancelFilter,products,search,handDeleteSearch,products_count,index,indexTo,setIndex,setIndexTo}) {
    const [defaultCurrent, setDefaultCurrent] = useState(1);
    useEffect(() => {
        setDefaultCurrent(1);
    }, [products_count]);
    
    
    return (
        <div className='Result'>
            <div className='ResultNav'>
                <div className='navaa'>
                    <p>{products_count>15  && <>{index} - {indexTo} of</>} {products_count} results of Products</p>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Sort by
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{padding:'1em'}}>
                            <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Popularity</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Ascending price</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Descending price</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Recent update</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Biggest saving</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Biggest savings %</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <button className="button" onClick={Open}><RiFilter3Line />Filter</button>
                {search.selectedCategories.length > 0 || filters.selectedMerchants.length > 0 || filters.selectedGenres.length > 0 || filters.price.min !== 0 || filters.price.max !== 99000 ? <Chip color='secondary' variant='outlined' onDelete={handleCancelFilter} label={'Clear all'}/>: null}
                {filters && Object.keys(filters).map(key => {
                    if (key === 'price') {
                        if (filters[key].min === 0 && filters[key].max === 99000) {
                            return null;
                        }
                        return <Chip key={key} onDelete={() => onDeleteFilter(key)} label={`Price: ${filters[key].min} - ${filters[key].max}`} />;
                    }
                    
                    return filters[key].map((value, index) => (
                        <Chip 
                            key={`${key}-${value}-${index}`}
                            label={`${value}`}
                            onDelete={() => onDeleteFilter(key, value)}
                        />
                    ));
                })}
                {search && Object.keys(search).map(key => {
                    if (key === 'selectedCategories'||key === 'supcategories') {
                        return search[key].map((value, index) => (
                            <Chip 
                                key={`${key}-${value}-${index}`}
                                label={`${value}`}
                                onDelete={() => handDeleteSearch(key, value)}
                            />
                        ));
                    }
                    else
                    return null;


                })}

            </div>
            <div className='ResultFilter'></div>
            <div style={{width:'100%'}}>
                {
                    Stores.length>0 ?  <Scroll_Horizontal stores={Stores} name={`Stores (${stores_count})`}/>:
                    <h1 style={{fontSize:'1.1em',fontWeight:'500',color:'rgb(26, 25, 25)',marginBottom:'1em'}}>No stores found</h1>
                }
          
            </div>
          
             {products.length>0?    <div style={{padding:'0.2em'}}> <h1 style={{fontSize:'1.1em',fontWeight:'500',color:'rgb(26, 25, 25)',marginBottom:'1em'}}>Products</h1>
       <Grid_Product products={products}/>  </div>: <h1 style={{fontSize:'1.1em',fontWeight:'500',color:'rgb(26, 25, 25)',marginBottom:'1em'}}>No products found</h1>}
                <div style={{display:'flex',justifyContent:'center',width:'100%'}}>  <Pagination 
                defaultCurrent={defaultCurrent} showSizeChanger={false} 
                pageSize={15} total={products_count} 
                onChange={(page, pageSize) => {
                    setIndex((page-1)*pageSize+1)
                    setIndexTo(page*pageSize)
                    window.scrollTo(0, 0);
                }
                }
                /></div>
          
          
        </div>
    );
}

export default Result;
