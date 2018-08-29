import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: false,
    fetched: false,
} as SkPlainObj) as SkObj;

const resetPassReducerr: reducerFn = (resetPassInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.resetpass:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });
        case AT.resetpass_act:
            return INITIAL_STATE.merge({
                fetching: true,
                fetched: false,
            });

        default:
            return resetPassInfo;
    }
};
export const resetPassReducer: reducerType = {  resetpass: resetPassReducerr };
