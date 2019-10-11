import { takeEvery, select, call, put } from 'redux-saga/effects';
import TYPE_VAR from '../redux/type-variables';
import { fetchImages } from '../api-calls/fetch-call';
import { setImages, setError } from '../redux/actions/actions';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(TYPE_VAR.LOAD, handleImagesLoad);
}
