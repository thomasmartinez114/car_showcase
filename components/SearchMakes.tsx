'use client';
import { useState, Fragment } from 'react';
import { SearchMakesProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';

const SearchMakes = ({
  makes,
  setMakes,
}: SearchMakesProps) => {
  const [query, setQuery] = useState('');
  return (
    <div className='search-makes'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-makes__input'
            placeholder='Volkswagen'
            displayValue={(makes: string) => makes}
            onChange={e => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
                  >
                      <Combobox.Options>

                      </Combobox.Options>     
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMakes;
