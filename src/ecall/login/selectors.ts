import { EParkingStore } from '../types';
import { createSelector } from 'reselect';

const loginFS = (store: EParkingStore) => store.getIn(['Login']);

export const selLogin: selector<LoginDataResponseImMap> = createSelector(
    [loginFS], (retLoginFS) => {
        return retLoginFS;
    }
);
