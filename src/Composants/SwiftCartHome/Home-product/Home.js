import React, { useEffect } from 'react'
import Promotion from '../Product-View/Promotion/Promotion'
import Scroll_Horizontal from '../Product-View/Scroll_Horizontal/Scroll_Horizontal'
import Navigate from '../NavBar/Navigate'
import {API_BASE_URL} from '../../../config'

function Homeproduct() {
  const [products, setProducts] = React.useState([])
  useEffect(() => {
  const  fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL+'/products/all')
    const data = await response.json()
    setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
    
  }
  fetchData()
  }, [])
  
  return (
    <>
    <Navigate number={1}></Navigate>
    <Promotion></Promotion>
    <Scroll_Horizontal products={products}  name={'Popular products'}/>
    <Scroll_Horizontal products={products}  name={'Best sale'}/>
    <Scroll_Horizontal products={products} name={'Popular products'}/>
    </>
  )
}

export default Homeproduct