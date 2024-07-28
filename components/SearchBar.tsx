'use client';

import { useState } from 'react';
import { SearchMake } from './';

const SearchBar = () => {
  const [make, setMake] = useState('');
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className='searchbar'>
      <div className='searchbar__item'>
        <SearchMake make={make} setMake={setMake} />
      </div>
    </form>
  );
};

export default SearchBar;
