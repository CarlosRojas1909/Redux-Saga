import TYPE_VAR from '../type-variables.js';

const loadImages = () => ({
    type: TYPE_VAR.LOAD,
});

const setImages = images => ({
    type: TYPE_VAR.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: TYPE_VAR.LOAD_FAIL,
    error,
});

export { loadImages, setImages, setError };
