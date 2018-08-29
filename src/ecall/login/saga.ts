import axios from 'axios';
import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as toastr from 'toastr';
import config from '../api/config';
import uri from '../api/uri';
import { AT } from './Constant';
import { validation } from './validation';

export class LoginSaga {

    // worker saga: makes the api call when watcher saga sees the action
    * loginWorkerSaga(action: Action<RequestPayload>) {
        console.log(action.payload);

        let res = validation(action);
        if (!res.isError) {
            let param = '?un=' + res.userName + '&password=' + res.password;
            try {
                const reponse = yield call(() => {
                    return axios({
                        method: 'GET',
                        url: config.host + uri.login + param,
                    });
                });
                yield put({ type: AT.Loged, payload: { data: reponse.data } });
                if (reponse.data.roll === 1) {
                    yield put(push('/User'));
                } else if (reponse.data.roll === 2) {
                    yield put(push('/Owner'));
                } else if (reponse.data.roll === 3) {
                    yield put(push('/Admin'));
                }

            } catch (error) {
                // error
                toastr.error('Username or Password Incorrect ...');
            }
        } else {
            toastr.warning(res.msg);
        }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.Login_Act, this.loginWorkerSaga)];
}

export default LoginSaga;
