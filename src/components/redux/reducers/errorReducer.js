import TYPE_VAR from '../type-variables';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case TYPE_VAR.LOAD_FAIL:
            return action.error;
        case TYPE_VAR.LOAD:
        case TYPE_VAR.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
