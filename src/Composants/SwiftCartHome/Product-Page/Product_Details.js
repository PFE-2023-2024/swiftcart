import React from 'react'

function Product_Details({product}) {
  return (
    <div className='Product_Details875'>
        <h2>Details</h2>
        <div className="editorState" dangerouslySetInnerHTML={{ __html: product.description }} />
        <div>
            
        </div>
    </div>
  )
}

export default Product_Details