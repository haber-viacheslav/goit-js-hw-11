import { fetchPhoto } from './fetch-data';
import { notifyInfoMessage, notifyFailureMessage } from './notify-msg';
import { renderGallery } from './render-module';
import { refs } from './refs';

const gallery = [
  {
    id: 4541106,
    pageURL: 'https://pixabay.com/photos/bmw-2000cs-antique-car-coupe-4541106/',
    type: 'photo',
    tags: 'bmw, 2000cs, antique car',
    previewURL:
      'https://cdn.pixabay.com/photo/2019/10/11/04/46/bmw-4541106_150.jpg',
  },
  {
    id: 4663164,
    pageURL:
      'https://pixabay.com/photos/bmw-3200cs-antique-car-classic-4663164/',
    type: 'photo',
    tags: 'bmw 3200cs, antique car, classic',
    previewURL:
      'https://cdn.pixabay.com/photo/2019/11/30/12/44/bmw-3200cs-4663164_150.jpg',
  },
  {
    id: 1517834,
    pageURL:
      'https://pixabay.com/photos/mere-christianity-cs-lewis-author-1517834/',
    type: 'photo',
    tags: 'mere christianity, cs lewis, author',
    previewURL:
      'https://cdn.pixabay.com/photo/2016/07/14/22/22/mere-christianity-1517834_150.jpg',
  },
  {
    id: 1679201,
    pageURL:
      'https://pixabay.com/photos/bombardier-cs100-swiss-airlines-1679201/',
    type: 'photo',
    tags: 'bombardier cs100, swiss airlines, plane',
    previewURL:
      'https://cdn.pixabay.com/photo/2016/09/18/22/43/aircraft-1679201_150.jpg',
  },
  {
    id: 1679197,
    pageURL:
      'https://pixabay.com/photos/bombardier-cs100-swiss-airlines-1679197/',
    type: 'photo',
    tags: 'bombardier cs100, swiss airlines, plane',
    previewURL:
      'https://cdn.pixabay.com/photo/2016/09/18/22/43/aircraft-1679197_150.jpg',
  },
  {
    id: 3699336,
    pageURL:
      'https://pixabay.com/photos/knife-without-background-handle-3699336/',
    type: 'photo',
    tags: 'knife, without background, handle',
    previewURL:
      'https://cdn.pixabay.com/photo/2018/09/24/08/33/knife-3699336_150.png',
  },
];

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.searchQuery.value.trim();
  const pageCount = 1;
  console.log(searchQuery);
  console.log(renderGallery(gallery));

  refs.galleryRef.innerHTML = '';

  if (!searchQuery) {
    return;
  }

  fetchPhoto(searchQuery, pageCount).then(gallery => {
    // if (country.length === 0) {
    //   return notifyInfoMessage();
    // }
    console.log(gallery);

    console.log(renderGallery(gallery));

    refs.galleryRef.insertAdjacentHTML('beforeend', renderGallery(gallery));
  });
}

export { onSearch };
