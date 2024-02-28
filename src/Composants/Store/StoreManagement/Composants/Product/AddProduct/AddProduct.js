import { BiImageAdd } from "react-icons/bi"; 
  import { BiUpload } from "react-icons/bi"; 
  import { BiError } from "react-icons/bi"; 
  import { IoMdArrowRoundBack } from "react-icons/io"; 
  import React,{useEffect, useState} from 'react';
  import SunEditor from 'suneditor-react';
  import 'suneditor/dist/css/suneditor.min.css';
  import TextField from '@mui/material/TextField';
  import DeleteIcon from '@mui/icons-material/Delete';
  import './AddProduct.css';
  import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
  import InputAdornment from '@mui/material/InputAdornment';
  import { FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
  import Autocomplete from '@mui/material/Autocomplete';
  import { SortableContainer, SortableElement ,sortableHandle, } from 'react-sortable-hoc';
  import { CgArrowsExchangeAlt } from "react-icons/cg";
  import {API_BASE_URL} from '../../../../../../config';
  import MediaConverter from '../../../../../../function/Media';
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
        if ( title || stock || price || category || deliveryPrice || editorState.trim() || selectedFiles.length > 0) {
        setOpen(true);
        } else {
          setOpen(false);
        }
      }
    timeout();

        
      }, [title, stock, price, category, deliveryPrice, editorState, selectedFiles]);
      
      const handleEditorChange = (content) => {
        setEditorState(content);
      };
    
      const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files); 
        setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]); 
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
          console.log(title, category.title, stock, price, deliveryPrice, editorState);  
        //   fetch(`${API_BASE_URL}/products`, {
        //     method: 'POST',
        //     headers: {
        //       'Authorization': `${localStorage.getItem('token')}`
        //     },
        //     body: formData,
        //   })
        //   .then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));
         };
        
         const DragHandle = sortableHandle(() => <span><CgArrowsExchangeAlt /></span>);
         const SortableItem = SortableElement(({ value, itemIndex }) => (
          value.type.startsWith('video/') ? 
          (
            <ImageListItem key={itemIndex}  cols={itemIndex==0? 2:1} rows={itemIndex==0? 2:1}>
            <video controls width={'100%'} height={'100%'} src={URL.createObjectURL(value)} />
            <ImageListItemBar
            title={value.name}
            actionIcon={
              <div style={{display:'flex',flexDirection:'row'}}>
                <IconButton onClick={(event) => {
                event.stopPropagation();
                handleDelete(itemIndex);
              }} sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                <DeleteIcon />
              </IconButton>
              <IconButton  className="xciao9898" >
               <DragHandle />
              </IconButton>
              
              </div>
            }
                    />
          </ImageListItem>
          ):
          (
            <ImageListItem key={itemIndex}   cols={itemIndex==0? 2:1} rows={itemIndex==0? 2:1}>
            <img src={URL.createObjectURL(value)} alt={value.name} />
            <ImageListItemBar
            title={value.name}
            actionIcon={
              <div style={{display:'flex',flexDirection:'row'}}>
                <IconButton onClick={(event) => {
                event.stopPropagation();
                handleDelete(itemIndex);
              }} sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                <DeleteIcon />
              </IconButton>
              <IconButton  className="xciao9898" >
               <DragHandle />
              </IconButton>
              
              </div>
            }
                    />
                </ImageListItem>)

        
       ));
       
     const SortableGrid = SortableContainer(({ items }) => {
       return (
         <ImageList  cols={3}>
           {selectedFiles.map((value, index) => (
             <SortableItem key={`item-${index}`} itemIndex={index} index={index}  value={value} />
           ))}
         </ImageList>
       );
     });
     
     const onSortEnd = ({ oldIndex, newIndex }) => {
       
         setSelectedFiles(MediaConverter.arrayMoveImmutable(selectedFiles, oldIndex, newIndex));
        
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
                 
                      /> 
                      <p>Enter the name of the product you want to add to the online store.</p>             
              </div>        
              <div>
              <label htmlFor="description">Description</label>
                      <div className="SunEditor">
                      <SunEditor
                setOptions={{
                    buttonList: [
                        ['undo', 'redo'],
                        ['font', 'fontSize', 'formatBlock'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                        ['fontColor', 'hiliteColor', 'textStyle'],
                        ['removeFormat'],
                        ['align', 'horizontalRule', 'list', 'table','link'],
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print'],
                    ]
                }}
                
                onChange={handleEditorChange}
                setContents={editorState}
               
            />
                      </div>
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
                sx={{
                  '& .MuiInputBase-input': {
                    fontFamily: 'Franklin Gothic , Arial Narrow, Arial, sans-serif',
                    fontSize: '15px',
                    padding: '10px'
                  },
                }}
                value={category}
                 onChange={(event, newValue) => {
                setCategory(newValue);
                }}
              isOptionEqualToValue={(option, value) => option.title === value.title}
               
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
                       />
                        <p>Specify the number of units available for this product.</p>
              </div>
              </div> 
            <div className="price"> 
            <div className="Input input">
              <label htmlFor="price">Price</label>
              <TextField
                  type="number"  name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} 
                  placeholder=" Enter the Product price."
                 /> 
                  <p>Indicate the price of the product in local currency or any other unit of your choice.</p>     
              </div>
              <div className="Input input">
                  <label htmlFor="price">Delivery price</label>
                          <TextField
                          type="number"  name="price"  value={deliveryPrice} onChange={(e)=>{setDeliveryPrice(e.target.value)}}
                          placeholder="Enter the delivery price."
                         />
                          <p>Specify the delivery price of the product in local currency or any other unit of your choice.</p>
              </div>        
            </div>
          </div>
          <div className="card">
        
              <label htmlFor="image">Media</label>
              <div className="Uploadimages">
              {selectedFiles.length !== 0 &&   <div className="add"> <label  htmlFor="input-files"><BiImageAdd /> add</label></div>}
              <div className='images'>
              
              <SortableGrid axis="xy" useDragHandle items={selectedFiles} onSortEnd={onSortEnd}  />
                          </div>   
            {selectedFiles.length === 0 && <div className="input-files"><label  htmlFor="input-files"><BiUpload />  upload new</label>
            <p>
            Accept images, videos,</p></div>}
                      <FormControl  sx={{ m: 1 }}>
                              <TextField
                              style={{display: 'none'}} 
                              id='input-files'
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              InputProps={{ inputProps: { multiple: true ,accept:'image/*,video/*'} }}
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