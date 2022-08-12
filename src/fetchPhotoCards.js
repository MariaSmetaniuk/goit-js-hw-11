import axios from 'axios';

export const fetchPhotoCards = async (searchQuery, page, per_page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const MY_KEY = '29177679-7b93f1d48a8f761360b3dae43';

  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: `${MY_KEY}`,
        q: `${searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${page}`,
        per_page: `${per_page}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
