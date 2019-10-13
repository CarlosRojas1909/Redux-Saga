import { STATS_VAR } from '../type-variables';

const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case STATS_VAR.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false,
                },
            };
        case STATS_VAR.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false,
                },
            };
        case STATS_VAR.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true,
                },
            };
        default:
            return state;
    }
};

export default statsReducer;
