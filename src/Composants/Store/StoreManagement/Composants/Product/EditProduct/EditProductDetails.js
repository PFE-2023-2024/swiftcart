import { MdReportGmailerrorred } from "react-icons/md"; 
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { CgClose } from "react-icons/cg";
import { TextField } from '@mui/material'; 
import './style/EditProductDetails.css';
import Autocomplete from '@mui/material/Autocomplete';
function EditProductDetails({onClose}) {
    const categories = [
        { title: 'Électronique' },
        { title: 'Livres' },
        { title: 'Vêtements' },
        { title: 'Nourriture' },
      ];
    const[title, setTitle] = React.useState('');
    const[titleError, setTitleError] = React.useState('');
    const[stock, setStock] = React.useState('');
    const[stockError, setStockError] = React.useState('');
    const[category, setCategory] = React.useState(null);
    const[categoryError, setCategoryError] = React.useState('');
    const[deliveryPrice, setDeliveryPrice] = React.useState('');
    const[deliveryPriceError, setDeliveryPriceError] = React.useState('');
    const[price, setPrice] = React.useState('');
    const[priceError, setPriceError] = React.useState('');
    const [error, setError] = React.useState('');

    const Valide=()=>{
        const isvalid= title.trim() !== '' && stock.trim() !== '' && category !== null && deliveryPrice.trim() !== '' && price.trim() !== '';
        if(title.trim() === ''){
            setTitleError('Title is required');}
        else if(title.length < 3){
            setTitleError('Title must be at least 3 characters');}
        else if(title.length > 20){
            setTitleError('Title must be at most 20 characters');}

        else{
            setTitleError('');
        }
        if(stock.trim() === ''){
            setStockError('Stock is required');
        }else{
            setStockError('');
        }
        if(category==''|| category==null){
            setCategoryError('Category is required');
        }else{
            setCategoryError('');
        }
        if(deliveryPrice.trim() === ''){
            setDeliveryPriceError('Delivery price is required');
        }else{
            setDeliveryPriceError('');
        }
        if(price.trim() === ''){
            setPriceError('Price is required');
        }else{
            setPriceError('');
        }
        return isvalid;
    }

    const handelSave=(e)=>{
        e.preventDefault();
        if(!Valide())  {return;
        }
        else{
            console.log(title, stock, category, deliveryPrice, price);
            setError('');
        }
    }
    return (
    <>
    <Backdrop open={true}sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div className='EditProductDetails'>
        <div className='header'>
          <h1>Edit your Product details</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        {error.trim() && <div className="erreur">
            <p> <MdReportGmailerrorred size={25}/>{error}</p>
          </div> } 
        <div className="body">
        
          <div className='input'>
          <label>Product title</label>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter the product title'
            error={titleError.trim() !== ''}
            helperText={titleError}
            type='text'
          ></TextField>
          </div>
          <div className='input'>
          <label>Product stock</label>
          <TextField
          error={stockError.trim() !== ''}
            helperText={stockError}
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder='Enter the product stock'
          
            type='number'
          ></TextField>
          </div>
          <div className='input'>
          <label>Product category</label>
          <Autocomplete
                id="category"
                error={categoryError.trim() !== ''}
                options={categories}
                getOptionLabel={(option) => option.title}
                value={category}
                onChange={(e, value) => setCategory(value)}

                renderInput={(params) => <TextField {...params} helperText={categoryError} placeholder="Enter the product category"/>}
                freeSolo
               
              isOptionEqualToValue={(option, value) => option.title === value.title}
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                    fontSize: '15px',
                    padding: '10px'
                  },
                }}
              />
          </div>
          <div className='input'>
          <label>Product delivery price</label>
          <TextField
            error={deliveryPriceError.trim() !== ''}
            helperText={deliveryPriceError}
            value={deliveryPrice}
            onChange={(e) => setDeliveryPrice(e.target.value)}
            placeholder='Enter the product delivery price'
            type='number'
          ></TextField>
          </div>
          <div className='input'>
          <label>Product price</label>
          <TextField
            error={priceError.trim() !== ''}
            helperText={priceError}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Enter the product price'
            type='number'
          ></TextField>
          </div>
       
            
            
       
        </div>
        <div className="button"><button onClick={handelSave}>Save Changes</button></div>

      </div>
    </Backdrop>
    </>
  )
}

export default EditProductDetails