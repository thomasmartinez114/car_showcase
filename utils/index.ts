export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': '64cadd98e2msh4dbf562a4bbc531p1443ffjsne0932b548394',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
