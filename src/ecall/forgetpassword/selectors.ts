import { EParkingStore } from '../types';
import { createSelector } from 'reselect';

const forgetpassFS = (store: EParkingStore) => store.getIn(['forgetpass']);

export const selForgetPass: selector<ForgetPassResponseImMap> = createSelector(
    [forgetpassFS], (retForgetPassFS) => {
        return retForgetPassFS;
    }
);
