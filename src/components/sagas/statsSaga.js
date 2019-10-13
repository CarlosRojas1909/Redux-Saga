import { take, fork, call, put } from 'redux-saga/effects';
import { IMAGE_VAR } from '../redux/type-variables';
import { fetchImageStats } from '../api-calls/fetch-call';
import {
    loadImageStats,
    setImageStats,
    setImageStatsError,
} from '../redux/actions/actions';

export function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGE_VAR.LOAD_SUCCESS);
        //use for loop only, it doesnt work with forEach() the same way
        for (let i = 0; i < images.length; i++) {
            //fork is similar to call but fork doesn't stop the executons of the next lines
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}

export default watchStatsRequest;
