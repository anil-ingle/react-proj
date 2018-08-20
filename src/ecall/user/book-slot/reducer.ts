import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const bookSlotActionReducerr: reducerFn = (bookSlotInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.book_slot_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });

        default:
            return bookSlotInfo;
    }
};
const bookSlotReducerr: reducerFn = (bookSlotInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.booked_slot:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return bookSlotInfo;
    }
};

export const bookSlotReducer: reducerType = { bookSlot: bookSlotReducerr, bookSlot_act: bookSlotActionReducerr };
