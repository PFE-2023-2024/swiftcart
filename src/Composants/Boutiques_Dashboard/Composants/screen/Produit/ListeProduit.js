import React from 'react'
import ProduitItem from './ProduitItem'

export default function ListeProduit({data}) {
  return (
    <div className='ListeProduit'>

{data && data.map((menuItem, key) => {
    return (
      <ProduitItem
      key={key}
      data={menuItem} ></ProduitItem>
       
    );
})}
    </div>
  )
}
