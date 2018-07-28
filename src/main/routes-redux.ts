import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

type Payload = {
    token?: string,
    body?: any, // tslint:disable-line no-any
    includes?: any, // tslint:disable-line no-any
};

// Selector function to access the historystate
export const makeSelectLocationState = () => {
    // TODO: type of prevRoutingState and prevRoutingStateJS
    let prevRoutingState: Object;
    let prevRoutingStateJS: JSON;

    return (state: any) => { // tslint:disable-line no-any
        const routingState = state.get('route'); // or state.route
        if (!routingState.equals(prevRoutingState)) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }

        return prevRoutingStateJS;
    };
};

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
export const syncHistoryWithStoreOption = () => ({
    selectLocationState: makeSelectLocationState()
});

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
    locationBeforeTransitions: null,
});

// tslint:disable-next-line
export function routerReducer(state = routeInitialState, action: { type: string, payload?: Payload }) {
    switch (action.type) {
        /* istanbul ignore next */
        case LOCATION_CHANGE:
            return state.merge({
                locationBeforeTransitions: action.payload,
            });
        default:
            return state;
    }
}