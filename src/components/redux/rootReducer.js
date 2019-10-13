import { combineReducers } from 'redux';

import errorReducer from './reducers/errorReducer';
import imagesReducer from './reducers/imagesReducer';
import loadingReducer from './reducers/loadingReducer';
import pageReducer from './reducers/pageReducer';
import statsReducer from './reducers/statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
