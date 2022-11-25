import { renderGallery } from './render-module';
import { fetchPhotoApi } from './fetch-data';
import { refs } from './refs';
import { searchQuery } from './search-module';
import { PER_PAGE } from './fetch-data';
const TOTAL_HITS = 500;
const MAX_PAGES = TOTAL_HITS / PER_PAGE;
// Page counter
let pageNumber = 1;
// Observer Options
const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

// Observer
export const observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pageNumber += 1;
      fetchPhotoApi(searchQuery, pageNumber)
        .then(gallery => {
          //   console.log(searchQuery);
          //   console.log(gallery);
          refs.galleryRef.insertAdjacentHTML(
            'beforeend',
            renderGallery(gallery.hits)
          );
        })
        .catch(error => {
          console.log(error);
        });

      if (pageNumber === Math.round(MAX_PAGES)) {
        observer.unobserve(refs.guardRef);
        return (pageNumber = 1);
      }
    }
  });
}
