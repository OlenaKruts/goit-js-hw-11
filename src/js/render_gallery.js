import { messageEnd, galleryWrapper } from '../index.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightBox = new SimpleLightbox('.gallery a');

export function renderGallery(array) {
  messageEnd.classList.add('is-hidden');
  const markUp = array.hits
    .map(
      ({
        tags,
        likes,
        largeImageURL,
        webformatURL,
        comments,
        downloads,
        views,
      }) => {
        return `<div class="photo-card">
          <a class="gallery-item" href="${largeImageURL}">
      <img class="gallery-photo" src="${webformatURL}" alt="${tags}" width="320" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
          <b>Views: ${views}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${downloads}</b>
        </p>
      </div>
      </div>`;
      }
    )
    .join('');

  galleryWrapper.insertAdjacentHTML('beforeend', markUp);
  lightBox.refresh();
}
