import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: false,
    fetched: false,
} as SkPlainObj) as SkObj;

const forgetpassReducerr: reducerFn = (emailInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.forgetpass:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });
            case AT.forgetpass_act:
            return INITIAL_STATE.merge({
                fetching: true,
                fetched: false,
            });
        default:
            return emailInfo;
    }
};
export const forgetpassReducer: reducerType = {  forgetpass: forgetpassReducerr };
