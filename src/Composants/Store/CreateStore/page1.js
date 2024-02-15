import { GrFormNext } from "react-icons/gr"; 
import { GrFormNextLink } from "react-icons/gr"; 
import React, { useState } from 'react';
import './Style/one.css';
import Radio from '@mui/joy/Radio'; // Correction: '@mui/joy/Radio' à '@mui/material/Radio'
import RadioGroup from '@mui/joy/RadioGroup'; // Correction: '@mui/joy/RadioGroup' à '@mui/material/RadioGroup'
import List from '@mui/joy/List'; // Correction: '@mui/joy/List' à '@mui/material/List'
import ListItem from '@mui/joy/ListItem'; // Correction: '@mui/joy/ListItem' à '@mui/material/ListItem'

function Stepone({openPage2}) {
  const [businesneeds, setBusinesneeds] = useState('');

  const handlebusinesneedslChange = (e) => {
    setBusinesneeds(e.target.value);
  };

  return (
    <div className='one'>
      <div className='header'>
        <h1>Let’s get started. Which of these best describes you?</h1>
        <h2>We’ll help you get set up based on your business needs.</h2>
      </div>
      <div className='main'>
        <RadioGroup sx={{ width: '100%' }} value={businesneeds} onChange={handlebusinesneedslChange}>
          <List
            className='list-group'
            sx={{
              minWidth: 240,
              '--ListItem-paddingY': '1rem',
              '--ListItem-radius': '8px',
              '--ListItemDecorator-size': '32px',
            }}
          >
            <ListItem className='item' variant='outlined' sx={{ boxShadow: 'sm' }}>
              <Radio
                overlay
                value='starting' 
                label={`I'm just starting`}
                sx={{ flexGrow: 1 }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: (theme) => ({
                      ...(checked && {
                        border: '2px solid',
                        borderColor: theme.vars.palette.primary[500],
                      }),
                    }),
                  }),
                }}
              />
            </ListItem>

            <ListItem className='item' variant='outlined' sx={{ boxShadow: 'sm' }}>
              <Radio
                overlay
                value='selling' // Correction: Définir la valeur pour cet élément Radio
                label={`I’m already selling online or in person`}
                sx={{ flexGrow: 1 }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: (theme) => ({
                      ...(checked && {
                        border: '2px solid',
                        borderColor: theme.vars.palette.primary[500],
                      }),
                    }),
                  }),
                }}
              />
            </ListItem>
          </List>
        </RadioGroup>
      </div>
      <div className='footer'>
        <button onClick={openPage2} className='skip'>  
            Skip
        </button>
        <button onClick={openPage2} className='next'>  
            Next<GrFormNext className="GrFormNext" />
        </button>
      </div>
    </div>
  );
}

export default Stepone;
