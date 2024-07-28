'use client';
import { useState, Fragment } from 'react';
import { SearchMakeProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { makes } from '@/constants'; // import make

const SearchMake = ({ make, setMake }: SearchMakeProps) => {
  const [query, setQuery] = useState('');

  // set users search to lowercase and remove any blank spaces, remove blank spaces from the search as well
  const filteredMake =
    query === ''
      ? makes
      : makes.filter(item =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='search-make'>
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
            className='search-make__input'
            placeholder='Volkswagen'
            displayValue={(make: string) => make}
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
              {filteredMake.map(item => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-make__option ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }
                    `
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMake;
