import { CgClose } from "react-icons/cg"; 
import React, { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber';
import './Filter.css'
import { Backdrop } from '@mui/material';
function Filter({open,onClose}) {
    const [max, setMax] = useState(99000);
    const [min, setMin] = useState(0);
    const [categories, setCategories] = useState([
      { 
        id: 1, 
        name: "Computing",
        fils: [
          { name: 'Printers & Scanners' },
          { name: 'Server' },
          { name: 'Laptops' },
          { name: 'Desktops' },
          { name: 'Monitors' },
          { name: 'Tablets' },
          { name: 'Routers' },
          { name: 'Network Switches' },
          { name: 'Data Storage' },
          { name: 'Software' },
          { name: 'Accessories' }
        ]
      },
      { 
        id: 2, 
        name: "Electronics",
        fils: [
          { name: 'Smartphones' },
          { name: 'TVs' },
          { name: 'Cameras' },
          { name: 'Headphones' },
          { name: 'Speakers' },
          { name: 'Smartwatches' },
          { name: 'Drones' },
          { name: 'Gaming Consoles' },
          { name: 'Smart Home' },
          { name: 'Accessories' }
        ]
      },
      { 
        id: 3, 
        name: "Appliances",
        fils: [
          { name: 'Refrigerators' },
          { name: 'Washers' },
          { name: 'Dryers' },
          { name: 'Ranges' },
          { name: 'Dishwashers' },
          { name: 'Microwaves' },
          { name: 'Small Appliances' },
          { name: 'Vacuums' },
          { name: 'Air Purifiers' },
          { name: 'Heaters' },
          { name: 'Accessories' }
        ]
      },
    ]);
    const[Marchands,setMarchands]=useState([
      {name:'Marchand1'},
      {name:'Marchand2'},
      {name:'Marchand3'},
      {name:'Marchand4'},
      {name:'Marchand5'},
      {name:'Marchand6'},
      {name:'Marchand7'},
      {name:'Marchand8'},
      {name:'Marchand9'},
      {name:'Marchand10'},
      {name:'Marchand11'},
      {name:'Marchand12'},
      {name:'Marchand13'},
      {name:'Marchand14'},
      {name:'Marchand15'},
      {name:'Marchand16'},
      {name:'Marchand17'},
      {name:'Marchand18'},
      {name:'Marchand19'},
      {name:'Marchand20'},
    ])
    const Filtre = () => {
      return (
          <div className="country-item">
              <div className='filter'>
        <div className='Categories'>
            <h1>Categories</h1>
            <div className='CategoriesForm'>
              {categories.map((category) => (
                <div key={category.id}>
                  <h2>{category.name}</h2>
                  <div className='fils'>
                    {category.fils.map((fil) => (
                      <div key={fil.name}>
                        <input type="checkbox" id={fil.name} name={fil.name} value={fil.name} />
                        <label htmlFor={fil.name}>{fil.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className='price'>
            <h1>Price</h1>   
          <div className='PriceForm'>
          <div className="flex-auto">
                <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Max Price</label>
                <InputNumber  style={{ height: "3rem" }}inputId="horizontal-buttons" value={max} onValueChange={(e) => setMax(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                    mode="currency" currency="TND" />
            </div>
            <div className="flex-auto">
                <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Min Price</label>
                <InputNumber style={{height:"3rem"}} inputId="horizontal-buttons" value={min} onValueChange={(e) => setMin(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                    mode="currency" currency="TND" />
            </div>
            <div className='button'>
               <button className='xoia'>Filter</button> 
               <button className='zoi'>Cancel</button> 
            </div>
          </div>
        </div>
        <div className='Merchants'>
          <h1>Merchants</h1>
          <div className='MarchandsForm'>
            {Marchands.map((marchand) => (
              <div key={marchand.name}>
                <input type="checkbox" id={marchand.name} name={marchand.name} value={marchand.name} />
                <label htmlFor={marchand.name}>{marchand.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className='Genres'>
              <h1>Genres</h1>
              <div className='GenresForm'>
                <div>
                  <input type="checkbox" id="Homme" name="Homme" value="Homme" />
                  <label htmlFor="Homme">Homme</label>
                </div>
                <div>
                  <input type="checkbox" id="Femme" name="Femme" value="Femme" />
                  <label htmlFor="Femme">Femme</label>
                </div>
               
                  <div>
                  <input type="checkbox" id="Girl" name="Girl" value="Girl" />
                  <label htmlFor="Girl">Girl</label>
                  </div>
                  <div> <input type="checkbox" id="Boy" name="Boy" value="Boy" />
                  <label htmlFor="Boy">Boy</label></div>
                 <div>
                  <input type="checkbox" id="Baby" name="Baby" value="Baby" />
                  <label htmlFor="Baby">Baby</label></div>
                  <div>
                  <input type="checkbox" id="Other" name="Other" value="Other" />
                  <label htmlFor="Other">Other</label>

                </div>

        </div>
        </div>
    </div>
          </div>
      );
    }
  return (
   <>
    <div className="aguixjzhzujp">
    <Filtre/>
    </div>
    <Backdrop open={open}sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <div className='dkdks468zzoedk'>
      <div className='uidehz'>
      <h1>Filter</h1>
      <button onClick={onClose}><CgClose /></button>
      </div>
      <Filtre/>
      <div className="button" onClick={onClose}><button className="close">Close</button></div>
   
    </div>

    </Backdrop>

   </>
  )
}

export default Filter