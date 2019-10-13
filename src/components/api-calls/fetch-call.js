import { unsplash_key } from '../../unsplash-key';

const KEY = unsplash_key;
const URL = `https://api.unsplash.com/photos/`;

// Fetching images
const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

// Fetching Images States
const fetchImageStats = async id => {
    // throw new Error('something went wrong');
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();

    if (response.status >= 400) {
        throw Error(data.errors);
    }
    return data;
};
export { fetchImages, fetchImageStats };
