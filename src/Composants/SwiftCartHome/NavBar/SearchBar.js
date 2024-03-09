import React, { useState } from 'react'
import './Style/Navbar.css'
import { AutoComplete, Input } from 'antd';
import MyMegaMenu from './Category';
import './Style/SearchBar.css'
const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
function SearchBar() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = useState([]);
    const handleSearch = (value) => {
      setOptions(value ? searchResult(value) : []);
    };
    const onSelect = (value) => {
      console.log('onSelect', value);
    };
return (
    <>

    <div className='SearchBarixzjokzp'>
    <MyMegaMenu/>
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large"  placeholder="input here" enterButton />
    </AutoComplete>

    
    </div>
      
    </>
  )
}

export default SearchBar