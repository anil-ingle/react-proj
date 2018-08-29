import { EParkingStore } from '../../types';
import { createSelector } from 'reselect';

const parkingSlotFS = (store: EParkingStore) => store.getIn(['parkingSlot']);

export const selParkingSlot: selector<ParkingSlotResponseImMap> = createSelector(
    [parkingSlotFS], (retparkingSlotFS) => {
        return retparkingSlotFS;
    }
);
