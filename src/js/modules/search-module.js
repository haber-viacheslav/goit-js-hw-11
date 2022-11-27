import { fetchPhotoApi } from './fetch-data';
import {
  notifySuccessMessage,
  notifyFailureMessage,
  notifyInfoSearchMessage,
} from './notify-msg';
import { renderGallery } from './render-module';
import { refs } from './refs';
import { observer } from './intersec-observer-api';
import { simpleGallery } from './simple-lightbox';

let searchQuery = '';

function onSearch(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.searchQuery.value.trim();
  refs.galleryRef.innerHTML = '';
  refs.guardRef.textContent = '';

  if (!searchQuery) {
    notifyInfoSearchMessage();
    return;
  }

  fetchPhotoApi(searchQuery)
    .then(gallery => {
      console.log(gallery);
      if (!gallery.total) {
        return notifyFailureMessage();
      }
      notifySuccessMessage(gallery.totalHits);
      refs.galleryRef.insertAdjacentHTML(
        'beforeend',
        renderGallery(gallery.hits)
      );
      simpleGallery.refresh();
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });

      observer.observe(refs.guardRef);
    })
    .catch(error => console.log(error));
}

export { onSearch, searchQuery };
