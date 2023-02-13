import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export let simpleGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  loop: true,
  captionDelay: 300,
  animationSpeed: 300,
  animationSlide: true,
});


async function fetchGallery() {
  try {
    const data = await imagesApiService.fetchGallery();
    // console.log(imagesApiService.page);
    getRefs().loadBtn.classList.remove('is-hidden');
    imagesApiService.incrementPage();
    countImages += data.hits.length;
    // console.log(countImages);
    if (!data.hits.length) {
      getRefs().loadBtn.classList.add('is-hidden');
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    renderGalery(data.hits);
    gallery.refresh();
    if (
      imagesApiService.page ===
      Math.ceil(data.totalHits / imagesApiService.per_page)
    ) {
      Notify.info(
        `We are sorry, but you have reached the end of search results.`
      );
      getRefs().loadBtn.classList.add('is-hidden');
    }

    if (countImages === data.hits.length) {
      Notify.success(`"Hooray! We found ${data.totalHits} images."`);
    }
    if (countImages > data.hits.length) {
      smoothScroll();
    }
  } catch (error) {
    console.log('Error');
  }
}
