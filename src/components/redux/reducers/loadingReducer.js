import TYPE_VAR from '../type-variables';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case TYPE_VAR.LOAD:
            return true;
        case TYPE_VAR.LOAD_SUCCESS:
            return false;
        case TYPE_VAR.FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
