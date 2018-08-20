import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const userTimeActionReducerr: reducerFn = (userInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.user_info_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return userInfo;
    }
};

export const userIdTimeReducer: reducerType = { userIdTimeAct: userTimeActionReducerr, };
