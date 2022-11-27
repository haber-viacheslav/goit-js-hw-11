import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=';
const PRIVATE_KEY = '29610060-546b0d52217012a7fbe24491a';
export const PER_PAGE = 40;

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export function fetchPhotoApi(searchValue, pageNumber = 1) {
  return fetch(
    `${BASE_URL}${PRIVATE_KEY}&q=${searchValue}&${searchParams}&page=${pageNumber}&per_page=${PER_PAGE}`
  ).then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

axios
  .get(
    `${BASE_URL}${PRIVATE_KEY}&q=cats&${searchParams}&page=2&per_page=${PER_PAGE}`
  )
  .then(response => console.log(response));
