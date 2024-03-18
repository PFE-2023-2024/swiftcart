import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';
import MyMegaMenu from './Category';
import { Search } from '../../../Context/SerachBar'; // Fix typo in import
import { API_BASE_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const { search, setSearch } = Search();
  const [options, setOptions] = useState([]);
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_BASE_URL + '/Search?search=' + txt);
        if (res.ok) {
          const datas = await res.json();
          setData(datas);
        } else {
          console.error('Failed to fetch search results:', res.statusText);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchData();
  }, [txt]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult() : []);
  };

  const onSelect = (value) => {
    setTxt(value);
  };

  const searchResult = () =>
  
  data.keywords.product_keywords.slice(0,7).map((product) => ({
    value: product, 
    label: (
      <div key={product}>
        <span>
           {product} 
        </span>
        
      </div>
    ),
  }))
  ;
  const navigate =useNavigate()
  const handClik = () => {
   
    if(window.location.pathname === '/search'){
    setSearch({
      ...search,
      txt: [txt],
    });
  }
    else{
      setSearch({
        ...search,
        txt: [txt],
      });
      navigate('/Swiftcart/search?txt='+txt)
    }
  }

  return (
    <div className='SearchBarixzjokzp'>
      <MyMegaMenu />
      <AutoComplete
        popupMatchSelectWidth={300}
        style={{ width: 350 }}
        onChange={(value) => setTxt(value)
        }
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        size='large'
      >
        <Input.Search
          size='large'
          placeholder='input here'
          enterButton
          onPressEnter={() => {
            handClik();
          }}
        />
      </AutoComplete>
    </div>
  );
}

export default SearchBar;
