import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;
const loginActReducerr: reducerFn = (loginInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.Login_Act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });

        default:
            return loginInfo;
    }
};

const loginReducerr: reducerFn = (loginInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.Loged:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return loginInfo;
    }
};
export const logineducer: reducerType = { Login_Act: loginActReducerr, Login: loginReducerr };
