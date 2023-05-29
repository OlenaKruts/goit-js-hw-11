import { perPage, fetchGalerryBtn, messageEnd, input, data } from '../index.js';
import { getCategory } from './get_category.js';
//import { totalPages } from './get_category.js';
import { renderGallery } from './render_gallery';
let page = 1;
//const perPage = 40;
export function loadMore() {
  const data = input.value.trim();
  page += 1;

  //   if (page < totalPages) {
  //     renderGallery(data);
  //   } else if (page > totalPages) {
  //     //renderGallery(data);
  //     fetchGalerryBtn.style.display = 'none';
  //     messageEnd.classList.remove('is-hidden');
  //   } else {
  //     renderGallery(data);
  //     fetchGalerryBtn.style.display = 'none';
  //     messageEnd.classList.remove('is-hidden');
  //   }

  getCategory(data, page, perPage).then(data => {
    const totalPages = data.totalHits / perPage;
    if (page < totalPages + 1) {
      renderGallery(data);
    } else if (page > totalPages + 1) {
      //renderGallery(data);
      fetchGalerryBtn.style.display = 'none';
      messageEnd.classList.remove('is-hidden');
    } else {
      renderGallery(data);
      fetchGalerryBtn.style.display = 'none';
      messageEnd.classList.remove('is-hidden');
    }
  });
}
