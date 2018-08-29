import { createSelector } from 'reselect';
import { EParkingStore } from '../types';

const selectorFS = (store: EParkingStore) => store.getIn(['Register']);

export const selRegister: selector<any> = createSelector(
    [selectorFS], (retSelectorFS) => {
        return retSelectorFS;
    }
);
