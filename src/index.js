import GalleryService from './js/get_category.js';
import { renderGallery } from './js/render_gallery';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');

const input = document.querySelector('input[name="searchQuery"]');
const searchBtn = input.nextElementSibling;

const fetchGalerryBtn = document.querySelector('.load-more');
const message = `<span class="message-end">
          We're sorry, but you've reached the end of search results.
        </span>`;
fetchGalerryBtn.insertAdjacentHTML('afterend', message);
fetchGalerryBtn.style.display = 'none';

export const messageEnd = document.querySelector('.message-end');
messageEnd.style.display = 'none';

export const galleryWrapper = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);
fetchGalerryBtn.addEventListener('click', loadMore);

//=============================================//
const imgGalleryService = new GalleryService();
//==============================================//
async function onSubmit(event) {
  try {
    event.preventDefault();
    galleryWrapper.innerHTML = '';
    const searchQuery = input.value.trim();

    if (!searchQuery) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      fetchGalerryBtn.style.display = 'none';
      messageEnd.style.display = 'none';

      return;
    }

    imgGalleryService.name = searchQuery;
    imgGalleryService.page = 1;
    imgGalleryService.hits = 0;
    //event.currentTarget.reset();

    const data = await imgGalleryService.getCategory();
    if (data.hits.length == 0) {
      fetchGalerryBtn.style.display = 'none';
      messageEnd.style.display = 'none';
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );

      return;
    }
    renderGallery(data);

    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

    fetchGalerryBtn.style.display = 'block';
    messageEnd.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}
//========================================//
async function loadMore() {
  try {
    const data = await imgGalleryService.getCategory();

    if (data.hits.length == 0) {
      console.log('data.hits.length', data.hits.length);
      fetchGalerryBtn.style.display = 'none';
      messageEnd.style.display = 'block';
      return;
    }
    renderGallery(data);

    imgGalleryService.hits += 40;

    if (imgGalleryService.hits + 40 > imgGalleryService.totalHits) {
      fetchGalerryBtn.style.display = 'none';
      messageEnd.style.display = 'block';
      return;
    }
    imgGalleryService.hits += 40;
  } catch (error) {
    console.log(error);
  }
}

//========================================//

// добавляю классы для стилей//
input.classList.add('field-search');
searchBtn.classList.add('button-search');
