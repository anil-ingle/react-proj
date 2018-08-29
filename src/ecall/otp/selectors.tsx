import { EParkingStore } from '../types';
import { createSelector } from 'reselect';

const otpFS = (store: EParkingStore) => store.getIn(['forgetpass']);

export const selOtp: selector<any> = createSelector(
    [otpFS], (retOtpFS) => {
        return retOtpFS;
    }
);
