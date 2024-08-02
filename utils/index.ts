import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { make, year, model, limit, fuel } = filters;

  const headers = {
    'x-rapidapi-key': '64cadd98e2msh4dbf562a4bbc531p1443ffjsne0932b548394',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehical age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // API Key here from imagin.studio
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  // url.searchParams.append('customer', '<key here>');
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angel', `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
