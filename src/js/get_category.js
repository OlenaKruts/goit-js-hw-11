//import { page, perPage, data } from '../index.js';
import axios from 'axios';
export async function getCategory(name, page, perPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '36746040-cd18ae9043608bd5e4c67aa1b';
  const params = new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await axios.get(
      `${BASE_URL}?${params}&page=${page}&per_page=${perPage}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
