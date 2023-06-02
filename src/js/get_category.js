//import { page, perPage, data } from '../index.js';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36746040-cd18ae9043608bd5e4c67aa1b';

export default class GalleryService {
  constructor() {
    this.name = '';
    this.page = 1;
    this.hits = 0;
    this.totalHits = 0;
    this.perPage = 40;
  }

  async getCategory() {
    try {
      const params = new URLSearchParams({
        key: API_KEY,
        q: this.name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: this.page,
        per_page: 40,
      });

      const response = await axios.get(`${BASE_URL}?${params}`);

      const data = await response.data;

      this.page += 1;
      this.totalHits = response.data.totalHits;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  //   set nameCategory(newName) {
  //     this.name = newName;
  //   }
}
