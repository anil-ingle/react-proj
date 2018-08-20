import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const walletMoneyActionReducerr: reducerFn = (walletMoneyInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.wallet_mony_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });

        default:
            return walletMoneyInfo;
    }
};
const walletMoneyReducerr: reducerFn = (walletMoneyInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.wallet_money:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return walletMoneyInfo;
    }
};

export const walletMoneyReducer: reducerType = {
    wallet_money_act: walletMoneyActionReducerr,
    wallet_money: walletMoneyReducerr
};
