import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
// This will make each grid item sortable
const SortableItem = SortableElement(({ value }) => (
  <div style={gridStyle}><img src={value.thumbnail}></img></div>
));

// This will define the container that holds all sortable items
const SortableGrid = SortableContainer(({ items }) => {
  return (
    <div style={gridContainerStyle}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '10px',
  padding: '10px', // Added padding for better spacing around the grid
  border: '1px solid #ccc', // Optional border for better visual enclosure
};

const gridStyle = {
  padding: '20px', // Add padding for each item for spacing
  textAlign: 'center', // Center text inside each grid item
  backgroundColor: '#f0f0f0', // Light background color for each item
  border: '1px solid #ddd', // Subtle border for each item
  borderRadius: '4px', // Rounded corners for a modern look
  cursor: 'grab', // Change cursor to indicate the item can be dragged
};

function MySortableGrid() {
  const [images, setImages] = useState([
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
    }
  ]); // Initialize with more items as needed
  function arrayMoveImmutable(array, fromIndex, toIndex) {
    const arrayCopy = [...array]; // Create a copy of the array to avoid mutation
    const startIndex = fromIndex < 0 ? arrayCopy.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arrayCopy.length) {
      const endIndex = toIndex < 0 ? arrayCopy.length + toIndex : toIndex;
      const [item] = arrayCopy.splice(startIndex, 1);
      arrayCopy.splice(endIndex, 0, item);
    }
    return arrayCopy;
  }
  const onSortEnd = ({ oldIndex, newIndex }) => {
  
    setImages(arrayMoveImmutable(images, oldIndex, newIndex));
   
  };

  return <SortableGrid axis="xy" items={images} onSortEnd={onSortEnd} />;
}

export default MySortableGrid;
