import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';
import config from '../api/config';
import { validation } from './validation';
import * as toastr from 'toastr';
import uri from '../api/uri';
import { push } from 'connected-react-router';

export class OtpSaga {

    // worker saga: makes the api call when watcher saga sees the action
    * otpWorkerSaga(action: Action<RequestPayload>) {
        let res = validation(action);
        if (!res.isError) {
            let param = '?otp=' + res.otp;
            try {
                const response = yield call(() => {
                    return axios({
                        method: 'GET',
                        headers: { fToken: action.payload.data.key },
                        url: config.host + uri.validateOtp + param,
                    });
                });
                yield put({ type: AT.otp, payload: response });
                if (response.data === true) {
                    if (window.resetPage) {
                        yield put(push('/PasswordResetPage'));
                        window.resetPage = false;
                    }
                } else {
                    toastr.error('OTP not matched please Try again.');
                }
            } catch (error) {
                toastr.error('Errorin Otp');
            }
        } else {
            toastr.warning(res.msg);
        }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.otp_act, this.otpWorkerSaga)];
}

export default OtpSaga;
