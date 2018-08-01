import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { AT } from './Constant';
type RequestPayload = {
    type: string, payload: { userName: string, password: string }
};
export class LoginSaga {
    // // watcher saga: watches for actions dispatched to the store, starts worker saga
    // * loginSaga() {
    //     yield takeLatest(AT.login, this.loginWorkerSaga);
    // }

    // function that makes the api request and returns a Promise for response


    // worker saga: makes the api call when watcher saga sees the action
    * loginWorkerSaga(action: Action<RequestPayload>) {

        try {
            console.log('saga...' + action.payload.payload.userName);
            const token = yield call(() => {
                console.log('login...');
                debugger;
                // let dem = action.payload ;
                // let email = dem.payload.userName;
                // let pass=dem.payload.password;
                return axios({
                    method: 'get',

                    url: 'http://localhost:2020/onlineparking/' + 'mvc/login?un=' + 'email'  + '&password=' +  'pass' 
                });
            });

            yield put({ type: AT.loged, payload: token });

        } catch (error) {
            // 
        }
    }
    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.login, this.loginWorkerSaga)];

}
export default LoginSaga;