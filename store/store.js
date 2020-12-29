import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axiosMiddleware from 'redux-axios-middleware';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import axios from 'axios';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const persistConfig = {
    key: 'metyl',
    storage,
    whitelist: ['cart', 'auth', 'shipping', 'order'],
};

const client = axios.create({
    baseURL: process.env.server,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware, axiosMiddleware(client)])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
