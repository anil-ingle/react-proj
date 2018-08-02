import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';

export class LoginSaga {

    // worker saga: makes the api call when watcher saga sees the action
    * loginWorkerSaga(action: Action<RequestPayload>) {

        try {

            const reponse = yield call(() => {
                return axios({
                    method: 'get',
                    url: 'http://localhost:2020/onlineparking/' + 'mvc/login?un=' +
                        action.payload.data.userName + '&password=' + action.payload.data.password
                });
            });

            yield put({ type: AT.loged, payload: reponse });
            if (reponse && reponse.roll === 1) {
                // default page rauting
                (window as any).route('component/User');
            }

        } catch (error) {
            // 
        }
    }
    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.login, this.loginWorkerSaga)];

}
export default LoginSaga;