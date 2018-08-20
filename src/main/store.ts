import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { History } from 'history';
import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { rootSaga } from './sagas';

// tslint:disable-next-line
export default function configureStore(history: History, initialState = {}): Store<any> {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const sagaMiddleware = createSagaMiddleware();
    const middlewares: Middleware[] = [
        routerMiddleware(history),
        sagaMiddleware];

    if (history) { middlewares.push(routerMiddleware(history)); }

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    // If Redux DevTools Extension is installed use it
    // otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? // tslint:disable-line no-any
            (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; // tslint:disable-line no-any
    /* eslint-enable */

    const store = createStore(
        connectRouter(history)(rootReducer),
        fromJS(initialState),
        composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);

    return store;
}