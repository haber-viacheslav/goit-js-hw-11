import { renderGallery } from './render-module';
import { fetchPhotoApi } from './fetch-data';
import { refs } from './refs';
import { searchQuery } from './search-module';
let pageNumber = 1;
const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pageNumber += 1;
      fetchPhotoApi(searchQuery, pageNumber)
        .then(gallery => {
          console.log(searchQuery);
          console.log(gallery);

          refs.galleryRef.insertAdjacentHTML(
            'beforeend',
            renderGallery(gallery.hits)
          );
        })
        .catch(error => {
          console.log(error);
          pageNumber = 1;
          observer.unobserve(refs.guardRef);
        });
    }
  });
}
