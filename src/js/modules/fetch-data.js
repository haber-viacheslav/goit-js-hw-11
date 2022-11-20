const BASE_URL = 'https://restcountries.com/v3.1/name/';
export function fetchCountries(searchValue) {
  return fetch(
    `${BASE_URL}${searchValue}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
