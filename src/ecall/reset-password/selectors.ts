import { EParkingStore } from '../types';
import { createSelector } from 'reselect';

const resetFS = (store: EParkingStore) => store.getIn(['forgetpass']);

export const selReset: selector<any> = createSelector(
    [resetFS], (retResetFS) => {
        return retResetFS;
    }
);
