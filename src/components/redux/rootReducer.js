import { combineReducers } from 'redux';

import errorReducer from './reducers/errorReducer';
import imagesReducer from './reducers/imagesReducer';
import loadingReducer from './reducers/loadingReducer';
import pageReducer from './reducers/pageReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootReducer;
