import { IMAGE_VAR } from '../type-variables';

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case IMAGE_VAR.LOAD_SUCCESS:
            return state + 1;
        default:
            return state;
    }
};

export default pageReducer;
