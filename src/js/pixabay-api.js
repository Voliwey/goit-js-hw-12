import axios from 'axios';
import iziToast from 'izitoast';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '43082908-d5bb253eb19cb17ad501330a7';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page, perPage) {
    try {
        const response = await axios.get(baseURL, {
            params: {
                key: API_KEY,
                q: searchQuery,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage,
            },
        });

        return response.data;
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
            position: 'topCenter',
        });
        throw error;
    }
}