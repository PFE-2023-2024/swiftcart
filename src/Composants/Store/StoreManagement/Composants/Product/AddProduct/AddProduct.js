  import { BiUpload } from "react-icons/bi"; 
  import { BiError } from "react-icons/bi"; 
  import { IoMdArrowRoundBack } from "react-icons/io"; 
  import React,{useEffect, useState} from 'react';
  import { CKEditor } from '@ckeditor/ckeditor5-react';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import TextField from '@mui/material/TextField';
  import DeleteIcon from '@mui/icons-material/Delete';
  import './AddProduct.css';
  import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
  import InputAdornment from '@mui/material/InputAdornment';
  import { FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
  import Autocomplete from '@mui/material/Autocomplete';
  import {API_BASE_URL} from '../../../../../../config';
import { Link } from "react-router-dom";
  function AddProduct() {
    const categories = [
      { title: 'Électronique' },
      { title: 'Livres' },
      { title: 'Vêtements' },
      { title: 'Nourriture' },
    ];
    const [open, setOpen] = useState(false);

  
      const [title, setTitle] = useState('');
      const [stock, setStock] = useState('');
      const [price, setPrice] = useState('');
      const [category, setCategory] = useState(null);
      const [deliveryPrice, setDeliveryPrice] = useState('');
      const [editorState, setEditorState] = useState('');
      const [selectedFiles, setSelectedFiles] = useState([]);
      const [titleError, setTitleError] = useState(false);
      const [categoryError, setCategoryError] = useState(false);
    

      useEffect(() => { 
        
      const timeout =() => {
        if ( title || stock || price || category || deliveryPrice || editorState || selectedFiles.length > 0) {
        setOpen(true);
        } else {
          setOpen(false);
        }
      }
    timeout();

        
      }, [title, stock, price, category, deliveryPrice, editorState, selectedFiles]);
      
      const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorState(data);
      };
    
      const handleFileChange = (e) => {
          const files = Array.from(e.target.files);
          setSelectedFiles(files);
        };
      
      const handleDelete = (index) => {
          setSelectedFiles(selectedFiles.filter((file, i) => i !== index));
        };  
      
        const validateForm = () => {
          let isValid = true;
        
          if (!title.trim()) { // Checks if title is empty or only whitespace
            setTitleError(true);
            isValid = false;
          } else {
            setTitleError(false);
          }
        
          if (!category) { // Checks if category is null or undefined
            setCategoryError(true);
            isValid = false;
          } else {
            setCategoryError(false);
          }
        
          return isValid;
        };
        
      
        const handleSubmit = (e) => {
          e.preventDefault(); // Prevent default form submission behavior
        
          // Validate the form before proceeding
          if (!validateForm()) { 
            return; // Stop form submission if validation fails
          }
        
        
         
          const formData = new FormData();
          formData.append('title', title);
          formData.append('category', category.title);
          formData.append('stock', stock);
          formData.append('price', price);
          formData.append('deliveryPrice', deliveryPrice);
          formData.append('description', editorState);
         
          selectedFiles.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
          });

          fetch(`${API_BASE_URL}/products`, {
            method: 'POST',
            headers: {
              'Authorization': `${localStorage.getItem('token')}`
            },
            body: formData,
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        };
        
      
      return (
      <>
        <div className='AddProduct'>
        <div className="header"><Link to={'../Product'}><button> <IoMdArrowRoundBack /></button> </Link> <h2>Add product</h2></div>
          <form>
          <div className="card">
              <div  className='Input'>
              <label htmlFor="name">Title</label>
              <TextField
                  type="text"  name="name" value={title}   onChange={(e)=>{setTitle(e.target.value)}}
                  error={titleError}
                  helperText={titleError ? "Title is required." : ""}
                  FormHelperTextProps={{ style: { color: 'red'}}}
                  placeholder="Enter the Product Title"
                  InputProps={{
                    endAdornment: titleError && (
                      <InputAdornment position='end'>
                        <IconButton aria-label='error' edge='end'>
                          <ErrorOutlineIcon color='error' />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                      '& .MuiInputBase-input': {
                          fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                          fontSize: '15px',
                          padding: '10px'
                        },
                      }} 
                      /> 
                      <p>Enter the name of the product you want to add to the online store.</p>             
              </div>        
              <div>
              <label htmlFor="description">Description</label>
              <CKEditor
                  editor={ ClassicEditor }
                  data={editorState}
                  onChange={handleEditorChange}       
              />
              <p>Describe the product in detail, including its features, benefits and uses.</p>
              </div>
          </div>   
          <div className="card">
            <div className="Input input">
            <label htmlFor="category">Category</label>

              <Autocomplete
                id="category"
                options={categories}
                getOptionLabel={(option) => option.title}
                
                renderInput={(params) => <TextField {...params}error={categoryError}  
                helperText={categoryError ? "Category is required." : ""}
                FormHelperTextProps={{ style: { color: 'red'}}}
                placeholder="Choose a Category"/>}
                freeSolo
                value={category}
                 onChange={(event, newValue) => {
                setCategory(newValue);
                }}
              isOptionEqualToValue={(option, value) => option.title === value.title}
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                    fontSize: '15px',
                    padding: '10px'
                  },
                }}
              />
              <p>Select the category that best fits your product.</p>
        </div>  
          </div>     
          <div className="card ">
    

              <div className="price">
              <div className="Input input">
                  <label htmlFor="stock">Stock</label>
                  <TextField
                        type="number" name="stock"  value={stock} onChange={(e)=>{setStock(e.target.value)}}
                        placeholder="Quantity available"
                        sx={{
                          '& .MuiInputBase-input': {
                            fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                            fontSize: '15px',
                            padding: '10px'
                          },
                        }}/>
                        <p>Specify the number of units available for this product.</p>
              </div>
              </div> 
            <div className="price"> 
            <div className="Input input">
              <label htmlFor="price">Price</label>
              <TextField
                  type="number"  name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} 
                  placeholder=" Enter the Product price."
                  sx={{
                    '& .MuiInputBase-input': {
                      fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                      fontSize: '15px',
                      padding: '10px'
                    },
                  }}/> 
                  <p>Indicate the price of the product in local currency or any other unit of your choice.</p>     
              </div>
              <div className="Input input">
                  <label htmlFor="price">Delivery price</label>
                          <TextField
                          type="number"  name="price"  value={deliveryPrice} onChange={(e)=>{setDeliveryPrice(e.target.value)}}
                          placeholder="Enter the delivery price."
                          sx={{
                              '& .MuiInputBase-input': {
                              fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                              fontSize: '15px',
                              padding: '10px'
                              },
                          }} />
                          <p>Specify the delivery price of the product in local currency or any other unit of your choice.</p>
              </div>        
            </div>
          </div>
          <div className="card">
        
              <label htmlFor="image">Media</label>
              <div className="Uploadimages">
              <div className='images'>
                      <ImageList cols={3}>
                      {selectedFiles.map((file, index) => (
                      <ImageListItem key={index}>
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                      <ImageListItemBar
                      title={file.name}
                      actionIcon={
                      <IconButton onClick={() => handleDelete(index)} sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                      <DeleteIcon />
                      </IconButton>
                      }
                              />
                          </ImageListItem>
                          ))}
                          </ImageList>
                          </div>   
            {selectedFiles.length === 0 && <label className="input-files" htmlFor="input-files"><BiUpload />  upload Images</label>}
                      <FormControl  sx={{ m: 1 }}>
                              <TextField
                              style={{display: 'none'}} 
                              id='input-files'
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              InputProps={{ inputProps: { multiple: true } }}
                          /> 
                      </FormControl>
                    
                          

          </div>
          <p>Upload images of the product to give customers a clear view of what they are buying.</p>
          </div>       
        {open && <div className="Save">
          <h1> <BiError /> Unsaved Product</h1>
            <div className="button">
              <button type="submit" >Discard</button>
              <button  onClick={handleSubmit} className="Saveb">Save</button>      
            </div>
          </div> }     
          </form>
          </div>
      </>
    )
  }

  export default AddProduct