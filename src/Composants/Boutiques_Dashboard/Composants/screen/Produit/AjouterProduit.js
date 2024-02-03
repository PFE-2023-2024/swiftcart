import React, { useState,useEffect } from 'react';
import MultiStep from 'react-multistep';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { IoIosClose } from "react-icons/io";
import Backdrop from '@mui/material/Backdrop';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {  ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

export default function AjouterProduit({close,data}) {
  // console.log(data.list.categorie)
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  
  const [categories, setCategories] = useState(null);

const categorySearch = async () => {
    try {            
        const response = await fetch('/categorie_produit/boutiques/' + encodeURIComponent(data.list.categorie));
        const test = await response.json();
        setCategories(test);
    } catch (err) {
        console.error(err.message);
    }
}

useEffect(() => {
    categorySearch(); 
}, []);

useEffect(() => {
    if (categories !== null) {
        console.log(categories);
    }
}, [categories]);
 
    const options = ['Composants informatiques', 'Ordinateurs','Accessoires','Stockage'];
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
      productName: '',
      price: '',
      description: '',
      category: '',
      quantity: '',
      deliveryCost: '',
      variants: ''
  });
   
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    };
  
    const handleDelete = (index) => {
      setSelectedFiles(selectedFiles.filter((file, i) => i !== index));
    };  
  
  
    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleOpen();
    const Data = new FormData();
    Data.append('path', '1/produit/'+data.list.idboutique);
    for (const file of selectedFiles) {
      Data.append('files', file);  
  }
    Data.append('nom', formData.productName);
    Data.append('description', formData.description);
    Data.append('prix', formData.price);
    Data.append('quantiteEnStock', formData.quantity);
    Data.append('idBoutique', data.list.idboutique);
    Data.append('categorie', formData.category);
    Data.append('deliveryCost', formData.deliveryCost);
    Data.append('variants', formData.variants);
    

    try {
      const reponse= await axios.post('/insert/produit', Data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setShow(true);
      handleClose();
    } catch (error) {
     
      setShow1(true);
      handleClose();
    }
  






};
  return (<>
 
  <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>


    <div className='AjouterProduit'>
   
    {show &&<div className='alert'>  <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                close();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
           <AlertTitle>Success</AlertTitle>
          Félicitations ! Le produit a été ajouté avec succès à notre catalogue en ligne. Merci pour votre contribution !
  
        </Alert>
     
      </div>}
    {show1 &&<div className='alert'>
      <Alert 
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          close();
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
    severity="warning">
       <AlertTitle>Error</AlertTitle>
    Une erreur inattendue s'est produite lors de l'ajout du produit. Veuillez réessayer plus tard.
</Alert>
      </div>}
      {!show && !show1 &&<Paper className='fromulerAjouterProduit'elevation={3}>
        <button onClick={close} className='close'><IoIosClose/></button>
        <form onSubmit={handleSubmit}>
        <div className='MultiStep'>
        <MultiStep
        
        stepCustomStyle={{width:'90%'}} 
        activeStep={activeStep} showNavigation={true}
        prevButton={{ title: 'Back', style: { backgroundColor: 'white',border:'1px solid rgba(0, 0, 0, 0.5)',borderRadius:'5px', padding:'10px',position: 'absolute', left: '10px', bottom: '10px' } }}
        nextButton={{ title: 'Next', style: { backgroundColor: '#008CBA',color:'white',padding:'10px', border:'1px solid rgba(0, 0, 0, 0.5)',borderRadius:'5px',position: 'absolute', left: '70px', bottom: '10px' } }}
   
          >
        
        <div title='Step 1' className='produitinfo'>
            
            <div className='produitname'>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <p>Entrez le nom du produit que vous souhaitez ajouter à la boutique en ligne.</p>
                    <TextField label='Titre du produit'placeholder=' Entrez le nom du produit  ' 
                    name='productName'
                    value={formData.productName}
                    onChange={handleFormChange}
                    required></TextField>
                    </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                  <p> Indiquez le prix du produit en devise locale ou toute autre unité de votre choix.</p>
                    
                  <TextField label='Prix' type='number' placeholder='Indiquez le prix '
                    name='price'
                    value={formData.price}
                    onChange={handleFormChange}
                  required></TextField>
                    
                 </FormControl>

            </div>
            <div className='produitdetails'>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <p> Décrivez le produit en détail, y compris ses caractéristiques, avantages et utilisations.</p>
                    <TextField
                         label="Description"
                         name='description'
                         value={formData.description}
                         onChange={handleFormChange}
                         placeholder='Décrivez le produit  '
                         multiline
                         rows={4}
                                    />
                    </FormControl>
            </div>
        </div>
        <div title='Step 2' className='stok_caregegory'>
            <div style={{display:'flex', marginTop:-15}}>
            <FormControl  fullWidth sx={{ m: 1 }}>
              <p>Sélectionnez la catégorie à laquelle appartient le produit pour faciliter la navigation des clients.</p>
                
                
      <Autocomplete
        id="free-solo-demo"
        value={formData.category}
        
        options={categories ? categories.map(category => category.categorie) : []} 
        renderInput={(params) => <TextField {...params} name='category'  onChange={handleFormChange}  label="Catégorie" />}
      />
     
                
            </FormControl>
            </div>
            <div className='ss'>
           
            <FormControl  sx={{ m: 1 }}>
              <p>Spécifiez le nombre d'unités disponibles pour ce produit.  </p>
                <TextField
                placeholder='Quantité disponible'
                label="Quantité disponible "
                name='quantity'
                value={formData.quantity}
                onChange={handleFormChange}
                type="number"
                required
                />  
            </FormControl>
            <FormControl  sx={{ m: 1 }}>
              <p>Indiquez les frais de livraison applicables pour ce produit, le cas échéant.</p>
                <TextField
                name='deliveryCost'
                value={formData.deliveryCost}
                onChange={handleFormChange}
                placeholder='Frais de livraison'
                label="Frais de livraison  "
                type="number"
                required
                />  
            </FormControl> 
            
            </div>
            <div style={{display:'flex'}}>
            
            <FormControl fullWidth sx={{ m: 1 }}>
                  <p> Si le produit est disponible en différentes tailles, couleurs, etc., veuillez les spécifier ici.</p>
                    <TextField
                         label="Variantes"
                         placeholder='Décrivez le produit  '
                         name='variants'
                         value={formData.variants}
                         onChange={handleFormChange}
                         multiline
                         rows={1}
                                    />
                    </FormControl>
            
                         
            </div>
            
        </div>
        <div title='Step 3' className='step3'> 
            <label className="input-files" htmlFor="input-files"><CloudUploadIcon/> upload Images</label>
            <p> Téléchargez des images du produit sous différents angles pour une meilleure visualisation par les clients.</p>
        
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
            
        </div>
        <div title='Step 4' className='validation'>

         <h5>Cliquez sur le bouton 'Enregistrer' ci-dessous pour confirmer et enregistrer les modifications. Une fois enregistré, le produit sera immédiatement disponible dans notre catalogue en ligne pour nos clients. Merci pour votre contribution à notre boutique en ligne !</h5>       
        <div className='button'>
        <Button variant="outlined" color="error">
        Annuler
      </Button>
        <Button type='submit' variant="contained" color="success">
        Enregistrer
      </Button>
     
        </div>
     
                

        </div>
        </MultiStep>
       

        </div>  
        </form>
      
      </Paper>}
    </div>
    </>
  );
}
