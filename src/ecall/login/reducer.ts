import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const loginReducerr: reducerFn = (loginInfo = INITIAL_STATE, action) => {
    switch (action.type) {

        case AT.login:
            return INITIAL_STATE.merge({
            
                fetching: true,
                fetched: false,
            });
            case AT.loged:
            return INITIAL_STATE.merge({
            
                fetching: true,
                fetched: false,
            });

        default:
            return loginInfo;
    }
};

export const logineducer: reducerType = { login: loginReducerr };