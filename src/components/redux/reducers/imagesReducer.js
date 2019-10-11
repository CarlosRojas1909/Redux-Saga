import TYPE_VAR from '../type-variables';

const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case TYPE_VAR.LOAD_SUCCESS:
            return [...state, ...action.images];
        default:
            return state;
    }
};

export default imagesReducer;
