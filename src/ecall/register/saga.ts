import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as toastr from 'toastr';
import config from '../api/config';
import uri from '../api/uri';
import { AT } from './Constant';

export class RegisterSaga {

    // worker saga: makes the api call when watcher saga sees the action
    * registerWorkerSaga(action: Action<RequestPayload>) {
        console.log(action.payload.data.registerForm);
        try {
            const response = yield call(() => {
                return axios({
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: JSON.stringify(action.payload.data.registerForm),
                    url: config.host + uri.register,
                });
            });
            yield put({ type: AT.Register, payload: { data: response.data } });
            if (response) {
                toastr.success('Registration done..!!!');
            }

        } catch (error) {
            toastr.error('Please try again ');
        }

    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.Register_Act, this.registerWorkerSaga)];
}

export default RegisterSaga;
