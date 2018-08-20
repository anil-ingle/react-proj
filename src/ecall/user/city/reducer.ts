import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const cityActionReducerr: reducerFn = (cityInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.city_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });
        default:
            return cityInfo;
    }
};
const cityReducerr: reducerFn = (cityInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.city:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return cityInfo;
    }
};

export const cityReducer: reducerType = { city: cityReducerr, city_act: cityActionReducerr };
