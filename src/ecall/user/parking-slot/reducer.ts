import { fromJS } from 'immutable';
import { AT } from './Constant';
import { reducerFn, reducerType, SkObj, SkPlainObj } from './types';

const INITIAL_STATE = fromJS({
    data: [],
    fetching: true,
    fetched: false,
} as SkPlainObj) as SkObj;

const parkingSlotActReducerr: reducerFn = (parkingSlotInfo = INITIAL_STATE, action) => {
    switch (action.type) {
        case AT.parking_slot_act:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: true,
                fetched: false,
            });

        default:
            return parkingSlotInfo;
    }
};
const parkingSlotReducerr: reducerFn = (parkingSlotInfo = INITIAL_STATE, action) => {
    switch (action.type) {

        case AT.parking_slot:
            return INITIAL_STATE.merge({
                ...action.payload,
                fetching: false,
                fetched: true,
            });

        default:
            return parkingSlotInfo;
    }
};

export const parkingSlotReducer: reducerType = { parkingSlot: parkingSlotReducerr,
     parkingSlotAction: parkingSlotActReducerr };
