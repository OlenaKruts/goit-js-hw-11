import { fetchGalerryBtn, galleryWrapper, input, perPage } from '../index.js';
import { getCategory } from './get_category.js';
import { renderGallery } from './render_gallery';
import Notiflix from 'notiflix';

export function onSubmit(event) {
  event.preventDefault();
  galleryWrapper.innerHTML = '';

  fetchGalerryBtn.style.display = 'none';
  const page = 1;

  const data = input.value.trim();

  if (data.length > 0) {
    getCategory(data, page, perPage)
      .then(data => {
        // if (data.hits.length > 0) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        renderGallery(data);
        fetchGalerryBtn.style.display = 'block';
        //     } else {
        //       Notiflix.Notify.failure(
        //         'Sorry, there are no images matching your search query. Please try again.'
        //       );
        //       galleryWrapper.innerHTML = '';
        //     }
      })
      .catch(err => console.log('Error', err));
  } else {
    {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      galleryWrapper.innerHTML = '';
    }
  }
}
