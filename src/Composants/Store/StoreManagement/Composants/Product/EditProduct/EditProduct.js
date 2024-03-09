import { MdModeEditOutline } from "react-icons/md"; 
import { IoMdArrowRoundBack } from "react-icons/io"; 
import React,{useEffect, useState} from 'react';
import './style/EditProduct.css';
import Snackbar from '@mui/material/Snackbar';
import { Link, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import EditProductDetails from "./EditProductDetails";
import Editdescription from "./Editdescription";
import EditPhotos from "./EditPhotos";
import {API_BASE_URL} from '../../../../../../config';
import {useProductCategories} from '../../../../../../Context/product_categories';
function EditProduct() { 

  let {id}=useParams();
  const[product, setProduct] = useState([]);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const[updated, setUpdated] = React.useState('');
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeId = JSON.parse(localStorage.getItem('store')).id;
        const response = await fetch(`${API_BASE_URL}/products?store_id=${storeId}&id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
          },
        });
        const data = await response.json();
        if (data.success) {
          setProduct(data.products[0]);
          const newMedia = data.products[0].media.map((url) => {
            const extension = url.split('.').pop(); // Obtient l'extension du fichier
            if (['mp4', 'webm', 'ogg'].includes(extension)) { // Vérifie si l'URL est pour une vidéo
              return {
                thumbnail: 'https://kohantextilejournal.com/wp-content/uploads/2018/04/video-poster-600x330.jpg', 
                embedUrl:url,// Vous pouvez vouloir utiliser une vignette spécifique pour les vidéos
                renderItem: () => (
                  <div className='video-wrapper'>
                    <video controls src={url} type={`video/${extension}`} poster={'https://kohantextilejournal.com/wp-content/uploads/2018/04/video-poster-600x330.jpg'} style={{width: "95%",paddingBottom:'2em'}}>
                    
                    </video>
                  </div>
                )
              };
            } else {
              // C'est une image
              return {
                original: url,
                thumbnail: url,
                
                renderItem: () => (
                  <div className='video-wrapper'>
                    <img controls src={url}   style={{width: "95%",maxHeight:'400px',paddingBottom:'2em'}}>
                     
                    </img>
                  </div>
                )
              };
            }
          });
          setImages(newMedia);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
        // Afficher un message d'erreur à l'utilisateur
      }
    };
  
    fetchData();
  }, [updated]); // Dépend uniquement de l'ID du produit
  const {productCategories} = useProductCategories();
  

  const [open, setOpen] = useState(false);
  const [editorStatechange, setEditorStatechange] = useState(false);
  const[editImage, setEditImage]=useState(false);
 
 

    return (
    <>
  {openSnackbar&&<Snackbar
        open={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={()=>{setOpenSnackbar(false)} }
        message="Product update successfully."
      />}
     {editImage && <EditPhotos onClose={()=>{setEditImage(false);}} product={product} setUpdated={(valeur)=>{setUpdated(valeur)}}  setOpenSnackbar={setOpenSnackbar}/>} 
    {editorStatechange && <Editdescription  setUpdated={(valeur)=>{setUpdated(valeur)}}  setOpenSnackbar={setOpenSnackbar} product={product}  editorState={product.description} onClose={()=>{setEditorStatechange(false)}}/>}
    {open && <EditProductDetails setUpdated={(valeur)=>{setUpdated(valeur)}} openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} product={product} onClose={()=>{setOpen(false)}}/>}
      <div className='EditProduct'>
      <div className="header"><Link to={'../Product'}><button> <IoMdArrowRoundBack /></button> </Link> <h2>Edit product</h2></div>

        <div className="card">
        <div className="imagechange" >
            <label>Product details</label><button onClick={()=>{setOpen(true)}}> <MdModeEditOutline/></button> </div>

              <div className="detailsProduct">
                <div className="item">
                  <label htmlFor="title">Title</label>
                   <h2>{product.name}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">stock</label>
                   <h2>{product.stock}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">price</label>
                   <h2>{product.price}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">category</label>
                 <h2>{product.subcategory?.name}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">delivery price</label>
                   <h2>{product.delivery_price}</h2>
                   </div>

              </div>
        </div>
    
        <div className="card">
        <div className="imagechange" >
            <label>Product description</label><button  onClick={()=>{setEditorStatechange(true)}}> <MdModeEditOutline/></button> </div>
            <div className="editorState" dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        <div className="card">
        <div className="imagechange" >
            <label htmlFor="image">Media</label><button onClick={()=>{setEditImage(true)}}> <MdModeEditOutline/></button> </div>
            <div className="Uploadimages">
                  
            <ImageGallery 
    thumbnailPosition='bottom'
    showBullets={true}
    items={images} />

        </div>
      
        </div>          

        </div>
    </>
  )
}

export default EditProduct;