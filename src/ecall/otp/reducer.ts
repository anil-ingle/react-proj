import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: false,
    fetched: false,
} as SkPlainObj) as SkObj;

const otpReducerr: reducerFn = (otpInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.otp:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });
        case AT.otp_act:
            return INITIAL_STATE.merge({
                fetching: true,
                fetched: false,
            });

        default:
            return otpInfo;
    }
};
export const otpReducer: reducerType = { otp: otpReducerr };
