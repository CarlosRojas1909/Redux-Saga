import { runSaga } from 'redux-saga';
import * as api from '../api-calls/fetch-call';
import { setImages, setError } from '../redux/actions/actions';
import { getPage, handleImagesLoad } from '../sagas/imageSaga';

test('selector should return the desired page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
});

test('should load images and handle them in case of success', async () => {
    const dispatchedActions = [];

    // mokiing function
    // we don't want to perform an actual api call in our tests
    // so we will mock the fetchImages api with jest
    // this will mutate the dependency which we may reset if other tests
    // are dependent on it
    const mockedImages = ['image-1', 'image-2', 'image-3'];
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

    //writing a feke Store
    const fakeStore = {
        dispatch: action => dispatchedActions.push(action),
        getState: () => ({
            nextPage: 1,
        }),
    };

    await runSaga(fakeStore, handleImagesLoad).done;
    expect(api.fetchImages.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(setImages(mockedImages));
});

test('should handle errors in case of success', async () => {
    const dispatchedActions = [];

    // mokiing function
    // we simulate an error by rejecting the promise
    // then we assert if our saga dispatched the action(s) correctly
    const error = 'API server is down';
    const mockedError = 'something went wrong';
    api.fetchImages = jest.fn(() => Promise.reject(mockedError));

    //writing a feke Store
    const fakeStore = {
        dispatch: action => dispatchedActions.push(action),
        getState: () => ({
            nextPage: 1,
        }),
    };
    await runSaga(fakeStore, handleImagesLoad).done;
    expect(api.fetchImages.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(setError(mockedError));
});
