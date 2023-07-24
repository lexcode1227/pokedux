import React from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux';
import { setSearchText } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const text = event.target.value;
    dispatch(setSearchText(text));
  };

  return (
    <Input.Search placeholder='Buscar...' onChange={handleSearch} style={{marginBottom: "10px"}} />
  )
};

export default Searcher