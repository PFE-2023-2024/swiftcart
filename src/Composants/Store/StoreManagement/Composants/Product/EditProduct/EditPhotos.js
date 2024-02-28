import { CgArrowsExchangeAlt } from "react-icons/cg"; 
import React, { useState, useRef } from 'react';
import Backdrop from '@mui/material/Backdrop';
import './style/EditPhotos.css';
import { CgClose } from 'react-icons/cg';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormControl, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { SortableContainer, SortableElement ,sortableHandle, } from 'react-sortable-hoc';
import MediaConverter from '../../../../../../function/Media';
function EditPhotos({ onClose }) {
  const DragHandle = sortableHandle(() => <span><CgArrowsExchangeAlt /></span>);
  const [images, setImages] = useState([
    {
      original: "blob:https://www.youtube.com/e763eedc-5b5e-4e94-bc53-86b7d79a970b",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      type: 'video'
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      type: 'image'
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      type: 'image'
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      type: 'image'
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      type: 'image'
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      type: 'image'
    }
  ]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;

    const newImages = Array.from(files).map(file => ({
      original: URL.createObjectURL(file),
      thumbnail: URL.createObjectURL(file),
      type:file.type 
    }));

    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleDelete = (indexToDelete) => {
    console.log(indexToDelete);
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  const SortableItem = SortableElement(({ value, itemIndex }) => (
    <ImageListItem style={{ zIndex: '1000000000' }} cols={itemIndex === 0 ? 2 : 1} rows={itemIndex === 0 ? 2 : 1}>
      {value.type==='video' || value.type==='video/mp4' ? (
        <video controls width={'100%'} height={'100%'} src={value.original} alt={`img-${itemIndex}`} />
      ) : (
        <img src={value.original} alt={`img-${itemIndex}`} />
      )}
      <ImageListItemBar
        title={value.original.substring(value.original.lastIndexOf('/') + 1)}
        actionIcon={
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton onClick={(event) => {
              event.stopPropagation();
              handleDelete(itemIndex);
            }} sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>
              <DeleteIcon />
            </IconButton>
            <IconButton className="xciao9898">
              <DragHandle />
            </IconButton>
          </div>
        }
      />
    </ImageListItem>
  ));
  
  
const SortableGrid = SortableContainer(({ items }) => {
  return (
    <ImageList  cols={3}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} itemIndex={index} index={index}  value={value} />
      ))}
    </ImageList>
  );
});

const onSortEnd = ({ oldIndex, newIndex }) => {
  
    setImages(MediaConverter.arrayMoveImmutable(images, oldIndex, newIndex));
    console.log(images);
  };
  

  return (
    <>  
      <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div className='EditPhotos'>
          <div className='header'>
            <h1>Edit your Product Photos</h1>
            <button onClick={onClose}><CgClose /></button>
          </div>
          <div className='UploadPhotos'>
            <button onClick={handleButtonClick}>add File Media</button>
            <input  type="file" id="file" name="file" accept="image/*,video/*" multiple style={{display:'none'}} onChange={handleFileChange}  ref={fileInputRef}/>
          </div>
          <div className='images'>
          <SortableGrid axis="xy" useDragHandle items={images} onSortEnd={onSortEnd}  />
          </div>  
          <div className="button"><button onClick={handleButtonClick}>Add Photos</button></div>
        </div>
      </Backdrop>
    </>
  );
}

export default EditPhotos;
