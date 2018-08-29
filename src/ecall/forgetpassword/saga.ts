import axios from 'axios';
import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as toastr from 'toastr';
import config from '../api/config';
import uri from '../api/uri';
import { AT } from './Constant';

export class ForgetPasswordSaga {

    // worker saga: makes the api call when watcher saga sees the action
    *forgetPasswordWorkerSaga(action: Action<RequestPayload>) {

        try {
            let param = '?email=' + action.payload.data.email;
            const response = yield call(() => {
                return axios({
                    method: 'GET',
                    url: config.host + uri.sendMail + param,
                });
            });
            if (window.otp) {
                yield put({ type: AT.forgetpass, payload: response });
                if (response.data.code === 1111) {
                    yield put(push('/Otp'));
                } else if (response.data.code === 1112) {
                    yield put(push('/'));
                    toastr.error('Email Address Not Found');
                } else if (response.data.code === 1113) {
                    yield put(push('/'));
                    toastr.error('Error while sending mail plz try again');
                }
                window.otp = false;
            } else {
                yield put(push('/'));

            }
        } catch (error) {
            toastr.error('Something went Wrong Plz try Again');
        }

    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.forgetpass_act, this.forgetPasswordWorkerSaga)];
}

export default ForgetPasswordSaga;
