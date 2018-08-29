import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';
import config from '../api/config';
import { validation } from './validation';
import * as toastr from 'toastr';
import uri from '../api/uri';
import { push } from 'connected-react-router';

export class ResetPasswordSaga {

    // worker saga: makes the api call when watcher saga sees the action
    * resetPassWorkerSaga(action: Action<RequestPayload>) {
        let res = validation(action);
        if (!res.isError) {
            let param = '?newPass=' + res.newPass;
            try {
                const response = yield call(() => {
                    return axios({
                        method: 'GET',
                        headers: { fToken: action.payload.data.key },
                        url: config.host + uri.resetPass + param,
                    });
                });
                yield put({ type: AT.resetpass, payload: response });
                if (response.data === true) {
                    toastr.success('Password Reset successfully');
                    yield put(push('/'));
                }
            } catch (error) {
                toastr.error('Errorin Resetpass');
            }
        } else {
            toastr.warning(res.msg);
        }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.resetpass_act, this.resetPassWorkerSaga)];
}

export default ResetPasswordSaga;
