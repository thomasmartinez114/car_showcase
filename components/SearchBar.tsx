'use client';

import React, { useState } from 'react';
import { SearchMake } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifying class'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({ setMake, setModel }) => {
  const [searchMake, setSearchMake] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchMake === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }

    setModel(searchModel);
    setMake(searchMake);
  };

  return (
    <form onSubmit={handleSearch} className='searchbar'>
      <div className='searchbar__item'>
        <SearchMake selected={searchMake} setSelected={setSearchMake} />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={e => setSearchModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
