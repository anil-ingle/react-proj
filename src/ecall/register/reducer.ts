import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const registerReducerr: reducerFn = (registerInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.Register:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });
        case AT.Register_Act:
            return INITIAL_STATE.merge({
                fetching: true,
                fetched: false,
            });

        default:
            return registerInfo;
    }
};
export const registerReducer: reducerType = { Register: registerReducerr };
