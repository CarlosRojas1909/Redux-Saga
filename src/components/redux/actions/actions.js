import { IMAGE_VAR, STATS_VAR } from '../type-variables.js';

//Images Actions!
const loadImages = () => ({
    type: IMAGE_VAR.LOAD,
});

const setImages = images => ({
    type: IMAGE_VAR.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGE_VAR.LOAD_FAIL,
    error,
});

// Stats Actions
const loadImageStats = id => ({
    type: STATS_VAR.LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: STATS_VAR.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: STATS_VAR.LOAD_FAIL,
    id,
});
export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
