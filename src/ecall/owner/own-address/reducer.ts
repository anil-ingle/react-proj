import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const ownerAddressActionReducerr: reducerFn = (ownerAddressInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.own_adr_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });

        default:
            return ownerAddressInfo;
    }
};
const ownerAddressReducerr: reducerFn = (ownerAddressInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.own_adr:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return ownerAddressInfo;
    }
};

export const ownerAddressReducer: reducerType = { own_adr_act: ownerAddressActionReducerr, own_adr: ownerAddressReducerr };
