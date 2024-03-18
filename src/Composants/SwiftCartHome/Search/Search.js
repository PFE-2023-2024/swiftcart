import React, { useEffect, useState } from 'react'
import Result from './result/Result'
import Nav from './nav/Nav'
import Filter from './filter/Filter'
import './Search.css'
import {API_BASE_URL} from '../../../config'
import{Search as ss} from '../../../Context/SerachBar'
function Search() {
  const [open, setOpen] = React.useState(false);
  const params = new URLSearchParams(window.location.search);
  const{search, setSearch} = ss();
  const [filters, setFilters] = useState({
    selectedMerchants: params.getAll('merchants'),
    selectedGenres: params.getAll('genres'),
    price: {
        min: params.get('min') ? Number(params.get('min')) : 0,
        max: params.get('max') ? Number(params.get('max')) : 99000,
    },});

// Mettre à jour l'URL à partir de l'état des filtres
useEffect(() => {
    const params = new URLSearchParams();
    filters.selectedMerchants.forEach(merchant => params.append('merchants', merchant));
    filters.selectedGenres.forEach(genre => params.append('genres', genre));
    if (filters.price.min !== 0) params.append('min', filters.price.min);
    if (filters.price.max !== 99000) params.append('max', filters.price.max);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
}, [filters]);

const handleDeleteFilter = (filterType, filterValue) => {
  setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (filterType === 'price') {
          newFilters.price = { min: 0, max: 99000 };
      } else {
          newFilters[filterType] = prevFilters[filterType].filter(value => value !== filterValue);
      }
      return newFilters;
  });
};
const handDeleteSearch = (filterType, filterValue) => {
  setSearch(prevSearch => {
      const newSearch = { ...prevSearch };
      newSearch[filterType] = prevSearch[filterType].filter(value => value !== filterValue);
      return newSearch;
  })};
const handleCancelFilter = () => {
  setFilters(prevFilters => ({
      ...prevFilters,
      selectedMerchants: [],
      selectedGenres: [],
      price: { min: 0, max: 99000 }
  }));
  setSearch(
    prevSearch => ({
      ...prevSearch,
      supcategories: [],
      selectedCategories: [],
  })
  )
};
const[Stores,setStores]=useState([])
const [products, setProducts] = React.useState([])
useEffect(() => {
  const  fetchData = async () => {
    try {
      const response = await fetch(API_BASE_URL+`/Search?${filters.price.min ? `min_price=${filters.price.min}` : ''}${filters.price.max ? `&max_price=${filters.price.max}` : ''}${search.selectedCategories.length ? `&subcategories=${search.selectedCategories.join(',')}` : ''}${filters.selectedMerchants.length ? `&store=${filters.selectedMerchants.join(',')}` : ''}${filters.selectedGenres.length ? `&genres=${filters.selectedGenres.join(',')}` : ''}${search.supcategories.length ? `&categories=${search.supcategories.join(',')}` : ''}${search.txt.length ? `&search=${search.txt.join(',')}` : ''}`)
         const data = await response.json()
    setProducts(data.products)
    setStores(data.stores)
    } catch (error) {
      console.log(error)
    }
    
  }
  fetchData()
  }, [filters,search])
  

  return (
   <>
   <div className='search'>
        <div className='navduhziu'>
        <Nav search={search} setSearch={setSearch}/>
        </div>
        <div className='filtersdcsd'>

        <Filter search={search} setSearch={setSearch} onClose={()=>{setOpen(false)}} filters={filters} setFilters={setFilters} open={open}/>
        </div> 
        <div className='result'>
          <Result Stores={Stores} search={search} products={products}handDeleteSearch={handDeleteSearch} handleCancelFilter={handleCancelFilter} onDeleteFilter={handleDeleteFilter}  filters={filters}   Open={()=>{setOpen(true)}}/>
         </div>      
   </div>
   </>
  )
}

export default Search