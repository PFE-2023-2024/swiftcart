import { RiFilter3Line } from "react-icons/ri"; 
import React from 'react'
import Grid_Product from '../../Product-View/Grid/Grid'
import { Dropdown } from 'react-bootstrap'
import './Result.css'
import Chip from '@mui/material/Chip';
function Result({Open}) {
    const handleDelete = (chipToDeleteKey) => {
        setFilter((chips) => chips.filter(chip => chip.key !== chipToDeleteKey));
    };

    const [filter, setFilter] = React.useState([
        { key: 0, name: 'Filter 1', value: 'Filter 1' },
        { key: 1, name: 'Filter 2', value: 'Filter 2' },
        { key: 2, name: 'Filter 3', value: 'Filter 3' },
    ]);   
  return (

    <div className='Result'>
        <div className='ResultNav'>
           <div className='navaa'>
           <p>25 - 48 of 1092 results</p>
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
            {filter.map((filterItem) => (
                    <Chip 
                        style={{margin:'0.5em'}}
                        key={filterItem.key} // ensure each Chip has a unique key prop
                        label={filterItem.name} 
                        onDelete={() => handleDelete(filterItem.key)} // pass the chip's key to handleDelete
                    />
                ))}
        </div>
        <div> 
       
             </div>
              
        <div className='ResultFilter'></div>
        <Grid_Product/>
    </div>
  )
}

export default Result