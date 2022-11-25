import { fetchPhotoApi } from './fetch-data';
import { notifySuccessMessage, notifyFailureMessage } from './notify-msg';
import { renderGallery } from './render-module';
import { refs } from './refs';
import { observer } from './intersec-observer-api';

let searchQuery = '';

function onSearch(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.searchQuery.value.trim();
  refs.galleryRef.innerHTML = '';

  if (!searchQuery) {
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
      observer.observe(refs.guardRef);
    })
    .catch(error => console.log(error));
}

export { onSearch, searchQuery };
