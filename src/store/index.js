import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
// import rootSaga  from '../sagas';
// import customMiddleware from '../middleware';

// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);

// sagaMiddleware.run(rootSaga);

export default store;