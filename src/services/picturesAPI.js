import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '21995215-4b2bd56d90e02eb349280c83a';

export async function fetchImages(inputValue, pageNr) {
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: inputValue,
        per_page: 12,
        pageNr,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits.map(image => {
      return {
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
