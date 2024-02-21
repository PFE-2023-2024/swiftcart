import { MdModeEditOutline } from "react-icons/md"; 
import { IoMdArrowRoundBack } from "react-icons/io"; 
import React,{useEffect, useState} from 'react';
import './EditProduct.css';

import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import EditProductDetails from "./EditProductDetails";
function EditProduct() { 
  const title='product';
  const stock=40;
  const price=260;
  const category='Phone';
  const deliveryPrice=10;
  const editorState= '<p>description</p>';
  const [open, setOpen] = useState(false);
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
  
  let idproduit = window.location.pathname.split('/').pop();  

    return (
    <>
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
            <label>Product description</label><button> <MdModeEditOutline/></button> </div>
            <div className="editorState" dangerouslySetInnerHTML={{ __html: editorState }} />
          </div>
        <div className="card">
        <div className="imagechange" >
            <label htmlFor="image">Media</label><button> <MdModeEditOutline/></button> </div>
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