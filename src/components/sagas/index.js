import { all, call } from 'redux-saga/effects';
import imagesSaga from './imageSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([call(imagesSaga), call(statsSaga)]);
}
