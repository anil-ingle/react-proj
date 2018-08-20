import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const cityAreaActionReducerr: reducerFn = (cityAreaInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.city_area_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });

        default:
            return cityAreaInfo;
    }
};
const cityAreaReducerr: reducerFn = (cityAreaInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.city_area:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return cityAreaInfo;
    }
};

export const cityAreaReducer: reducerType = { cityArea_act: cityAreaActionReducerr, cityArea: cityAreaReducerr };
