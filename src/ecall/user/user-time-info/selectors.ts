import { EParkingStore } from '../../types';
import { createSelector } from 'reselect';

const userTimeFS = (store: EParkingStore) => store.getIn(['setUserTimeAct', 'data']);

export const selUserTime: selector<UserTimeImMap> = createSelector(
    [userTimeFS], (retuserTimeFS) => {
        console.log('retuserTimeFS' + retuserTimeFS);
        return retuserTimeFS;
    }
);
