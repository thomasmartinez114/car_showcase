'use client';

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10; // change limit to 10, 20, 30 etc by page
    setLimit(newLimit);
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {/* check if there is a next page */}
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
