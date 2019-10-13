import { IMAGE_VAR } from '../type-variables';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGE_VAR.LOAD_FAIL:
            return action.error;
        case IMAGE_VAR.LOAD:
        case IMAGE_VAR.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
