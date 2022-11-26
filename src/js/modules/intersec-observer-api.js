import { renderGallery } from './render-module';
import { fetchPhotoApi } from './fetch-data';
import { refs } from './refs';
import { searchQuery } from './search-module';
import { PER_PAGE } from './fetch-data';
import { notifyInfoMessage } from './notify-msg';
import { gallery } from './simple-lightbox';
const TOTAL_HITS = 500;
const MAX_PAGES = TOTAL_HITS / PER_PAGE;
// Page counter
let pageNumber = 1;
// Observer Options
const options = {
  root: null,
  rootMargin: '1000px',
  threshold: 1.0,
};

// Observer
export const observer = new IntersectionObserver(onLoad, options);

// infinite scroll
function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pageNumber += 1;
      fetchPhotoApi(searchQuery, pageNumber)
        .then(gallery => {
          refs.galleryRef.insertAdjacentHTML(
            'beforeend',
            renderGallery(gallery.hits)
          );
          gallery.refresh();
        })
        .catch(error => {
          console.log(error);
        });

      if (pageNumber === Math.round(MAX_PAGES)) {
        observer.unobserve(refs.guardRef);
        observerBottom.observe(refs.guardRef);
        pageNumber = 1;
      }
    }
  });
}

const optionsBottom = {
  root: null,
  rootMargin: '1px',
  threshold: 1.0,
};
// Observer message
export const observerBottom = new IntersectionObserver(
  OnBottomMessage,
  optionsBottom
);

function OnBottomMessage(entries, observerBottom) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      notifyInfoMessage();
    }
  });
}