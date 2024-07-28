'use client';

import { useState } from 'react';
import { SearchMakes } from './';

const SearchBar = () => {
  const [makes, setMakes] = useState('');
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className='searchbar'>
      <div className='searchbar__item'>
        <SearchMakes makes={makes} setMakes={setMakes} />
      </div>
    </form>
  );
};

export default SearchBar;
