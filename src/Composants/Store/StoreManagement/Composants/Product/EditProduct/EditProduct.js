import { MdModeEditOutline } from "react-icons/md"; 
import { IoMdArrowRoundBack } from "react-icons/io"; 
import React,{useEffect, useState} from 'react';
import './style/EditProduct.css';

import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import EditProductDetails from "./EditProductDetails";
import Editdescription from "./Editdescription";
import EditPhotos from "./EditPhotos";
function EditProduct() { 
  const title='product';
  const stock=40;
  const price=260;
  const category=null;
  const deliveryPrice=10;
  const editorState= `<div class="product-container" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h1 class="product-title" style="color: #111; font-size: 24px; margin-bottom: 10px;">Nom du Produit</h1>
  <p class="product-price" style="color: #388e3c; font-size: 20px; margin-bottom: 20px;">Prix: $XX.XX</p>
  <div class="product-description" style="margin-bottom: 20px;">
      Description détaillée du produit. Ce texte peut inclure des informations sur ce qui rend votre produit unique, les avantages qu'il offre, et pourquoi les clients devraient être intéressés par l'achat de ce produit.
  </div>
  <div class="product-specifications">
      <strong style="font-weight: bold; margin-top: 10px;">Spécifications:</strong>
      <ul style="font-size: 16px;">
          <li>Spécification 1</li>
          <li>Spécification 2</li>
          <li>Spécification 3</li>
      </ul>
  </div>
</div>
`;
  const [open, setOpen] = useState(false);
  const [editorStatechange, setEditorStatechange] = useState(false);
  const[editImage, setEditImage]=useState(false);
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  
 

    return (
    <>

     {editImage && <EditPhotos onClose={()=>{setEditImage(false)}}/>} 
    {editorStatechange && <Editdescription editorState={editorState} onClose={()=>{setEditorStatechange(false)}}/>}
    {open && <EditProductDetails onClose={()=>{setOpen(false)}}/>}
      <div className='EditProduct'>
      <div className="header"><Link to={'../Product'}><button> <IoMdArrowRoundBack /></button> </Link> <h2>Edit product</h2></div>

        <div className="card">
        <div className="imagechange" >
            <label>Product details</label><button onClick={()=>{setOpen(true)}}> <MdModeEditOutline/></button> </div>

              <div className="detailsProduct">
                <div className="item">
                  <label htmlFor="title">Title</label>
                   <h2>{title}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">stock</label>
                   <h2>{stock}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">price</label>
                   <h2>{price}</h2> 
                </div>
                <div className="item">
                  <label htmlFor="title">category</label>
                   <h2>{category}</h2>
                </div>
                <div className="item">
                  <label htmlFor="title">delivery price</label>
                   <h2>{deliveryPrice}</h2>
                   </div>

              </div>
        </div>
    
        <div className="card">
        <div className="imagechange" >
            <label>Product description</label><button  onClick={()=>{setEditorStatechange(true)}}> <MdModeEditOutline/></button> </div>
            <div className="editorState" dangerouslySetInnerHTML={{ __html: editorState }} />
          </div>
        <div className="card">
        <div className="imagechange" >
            <label htmlFor="image">Media</label><button onClick={()=>{setEditImage(true)}}> <MdModeEditOutline/></button> </div>
            <div className="Uploadimages">
                  
            <ImageGallery 
    thumbnailPosition='left'
    items={images} />

        </div>
      
        </div>          

        </div>
    </>
  )
}

export default EditProduct;