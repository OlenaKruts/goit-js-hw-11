//import axios from 'axios';
//import Notiflix from 'notiflix';
//import SimpleLightbox from 'simplelightbox';
//import 'simplelightbox/dist/simple-lightbox.min.css';
//import { renderGallery } from './js/render_gallery.js';
//import { getCategory } from './js/get_category.js';
import { loadMore } from './js/load_more_images.js';
import { onSubmit } from './js/onSubmit.js';

//const lightBox = new SimpleLightbox('.gallery a');

const form = document.querySelector('#search-form');

export const input = form.firstElementChild;
const searchBtn = input.nextElementSibling;

export const fetchGalerryBtn = document.querySelector('.load-more');

const message = `<span class="message-end is-hidden">
          We're sorry, but you've reached the end of search results.
        </span>`;
fetchGalerryBtn.insertAdjacentHTML('afterend', message);
fetchGalerryBtn.style.display = 'none';

export const messageEnd = document.querySelector('.message-end');
//const messageEnd = document.querySelector('.message-end');
//console.log(messageEnd);

// export const perPage = 5;
// export let page = 0;
// export let data = input.value.trim();

export const galleryWrapper = document.querySelector('.gallery');

export const perPage = 40;

export let data = input.value.trim();

//const galleryWrapper = document.querySelector('.gallery');
form.addEventListener('submit', onSubmit);

fetchGalerryBtn.addEventListener('click', loadMore);
// function loadMore() {
//   let data = input.value.trim();
//   page += 1;
//   getCategory(data, page, perPage).then(data => {
//     const totalPages = Math.floor(data.totalHits / perPage) + 1;
//     if (page < totalPages) {
//       renderGallery(data);
//     } else if (page > totalPages) {
//       //renderGallery(data);
//       fetchGalerryBtn.style.display = 'none';
//       messageEnd.classList.remove('is-hidden');
//     } else {
//       renderGallery(data);
//       fetchGalerryBtn.style.display = 'none';
//       messageEnd.classList.remove('is-hidden');
//     }
//   });
// }

// function onSubmit(event) {
//   event.preventDefault();
//   galleryWrapper.innerHTML = '';

//   fetchGalerryBtn.style.display = 'none';
//   const page = 1;

//   data = input.value.trim();

//   getCategory(data, page, perPage)
//     .then(data => {
//       if (data.hits.length > 0) {
//         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//         renderGallery(data);
//         fetchGalerryBtn.style.display = 'block';
//       } else {
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         galleryWrapper.innerHTML = '';
//       }
//     })
//     .catch(err => console.log('Error', err));
// }

// async function getCategory(data, page, perPage) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '36746040-cd18ae9043608bd5e4c67aa1b';
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: data,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });

//   try {
//     const response = await axios.get(
//       `${BASE_URL}?${params}&page=${page}&per_page=${perPage}`
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// добавляю классы для стилей//
input.classList.add('field-search');
searchBtn.classList.add('button-search');

// function renderGallery(array) {
//   messageEnd.classList.add('is-hidden');
//   const markUp = array.hits
//     .map(
//       ({
//         tags,
//         likes,
//         largeImageURL,
//         webformatURL,
//         comments,
//         downloads,
//         views,
//       }) => {
//         return `<div class="photo-card">
//           <a class="gallery-item" href="${largeImageURL}">
//       <img class="gallery-photo" src="${webformatURL}" alt="${tags}" width="320" loading="lazy" />
//       </a>
//       <div class="info">
//         <p class="info-item">
//           <b>Likes: ${likes}</b>
//         </p>
//         <p class="info-item">
//           <b>Views: ${views}</b>
//         </p>
//         <p class="info-item">
//           <b>Comments: ${comments}</b>
//         </p>
//         <p class="info-item">
//           <b>Downloads: ${downloads}</b>
//         </p>
//       </div>
//       </div>`;
//       }
//     )
//     .join('');

//   galleryWrapper.insertAdjacentHTML('beforeend', markUp);
//   lightBox.refresh();
// }
