import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from '../sagas/index';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(rootSaga);

    return store;
};

const url = 'http://url';
const result = await runSaga(
    {
        dispatch: action => dispatched.push(action),
        getState: () => ({ state: 'test' }),
    },
    callApi,
    url,
).toPromise();

export default configureStore;
