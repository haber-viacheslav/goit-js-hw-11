import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=';
const PRIVATE_KEY = '29610060-546b0d52217012a7fbe24491a';
export const PER_PAGE = 40;

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export async function fetchPhotoApi(searchValue, pageNumber = 1) {
  const response = await axios.get(
    `${BASE_URL}${PRIVATE_KEY}&q=${searchValue}&${searchParams}&page=${pageNumber}&per_page=${PER_PAGE}`
  );
  return response;
}
