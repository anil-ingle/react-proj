import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { AT } from './Constant';
export class LoginSaga {
    // // watcher saga: watches for actions dispatched to the store, starts worker saga
    // * loginSaga() {
    //     yield takeLatest(AT.login, this.loginWorkerSaga);
    // }

    // function that makes the api request and returns a Promise for response

    login = () => {
        console.log('login...');
        let body = {
            un: '',
            password: '',

        };
        return axios({
            method: 'post',
            data: body,
            url: 'http:localhost:2020/onlineparking/mvc/login'
        });
    }

    // worker saga: makes the api call when watcher saga sees the action
    * loginWorkerSaga() {

        try {
            console.log('saga...');
            const token = yield call(() => {
                console.log('login...');
                let body = {
                    un: 'anilingle91@gmail.com',
                    password: '1234',

                };
                return axios({
                    method: 'POST',
                    data: body,
                    url: 'http://localhost:2020/onlineparking/layout/login/login.html'
                });
            });

            yield put({ type: AT.login, payload: token });

            // dispatch a success action to the store with the new dog

        } catch (error) {
            // 
        }
    }
    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [takeEvery(AT.login, this.loginWorkerSaga)];
}
export default LoginSaga;