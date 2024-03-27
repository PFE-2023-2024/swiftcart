import React, { useEffect } from 'react'
import Promotion from '../Product-View/Promotion/Promotion'
import Scroll_Horizontal from '../Product-View/Scroll_Horizontal/Scroll_Horizontal'
import Navigate from '../NavBar/Navigate'
import {API_BASE_URL} from '../../../config'

function Homeproduct() {
  const [products, setProducts] = React.useState([])
  const [loaded,setLoaded]=React.useState(false)
  useEffect(() => {
  const  fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL+'/Search?product_from_index=1&product_to_index=50')
    const data = await response.json()
    setProducts(data.products)
    setLoaded(true)
    } catch (error) {
      console.log(error)
    }
    
  }
  fetchData()
  }, [])
  
  return (
    <>
    <Navigate number={1} ></Navigate>
    <Promotion loaded={loaded} product={products}></Promotion>
    <Scroll_Horizontal products={products}  name={'Popular products'}/>
    <Scroll_Horizontal products={products}  name={'Best sale'}/>
    <Scroll_Horizontal products={products} name={'Popular products'}/>
    </>
  )
}

export default Homeproduct