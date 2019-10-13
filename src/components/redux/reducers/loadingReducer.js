import { IMAGE_VAR } from '../type-variables';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGE_VAR.LOAD:
            return true;
        case IMAGE_VAR.LOAD_SUCCESS:
            return false;
        case IMAGE_VAR.FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
