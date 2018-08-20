import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { AT } from './Constant';
import config from '../api/config';
import { validation } from './validation';
import * as toastr from 'toastr';
import uri from '../api/uri';

export class LoginSaga {

    // worker saga: makes the api call when watcher saga sees the action
    * loginWorkerSaga(action: Action<RequestPayload>) {
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
                yield put({ type: AT.Loged, payload: reponse });
                if (reponse.data.roll === 1) {
                    yield put(push('/User'));
                }

            } catch (error) {
                // error 
            }
        } else {
            toastr.warning(res.msg);
        }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.Login_Act, this.loginWorkerSaga)];
}

export default LoginSaga;
