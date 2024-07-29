'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car; // destructure car props

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end font-medium text-[14px]'>/day</span>
      </p>
    </div>
  );
};

export default CarCard;
