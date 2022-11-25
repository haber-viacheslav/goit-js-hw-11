const BASE_URL = 'https://pixabay.com/api/?key=';
const PRIVATE_KEY = '29610060-546b0d52217012a7fbe24491a';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export function fetchPhoto(searchValue, pageNumber) {
  return fetch(
    `${BASE_URL}${PRIVATE_KEY}&q=${searchValue}&${searchParams}&page=${pageNumber}&per_page=40`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// https://pixabay.com/api/?key=29610060-546b0d52217012a7fbe24491a&q=boy&image_type=photo&orientation=horizontal&safesearch=true&page=2&per_page=40
