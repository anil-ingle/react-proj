import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { AT } from './Constant';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* loginSaga() {
    yield takeLatest(AT.login, workerSaga);
}

// function that makes the api request and returns a Promise for response

function login() {
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
function* workerSaga() {
    try {
        const token = yield call(login);
       
        yield put({ type: AT.login, payload: login });

        // dispatch a success action to the store with the new dog

    } catch (error) {
        // dispatch a failure action to the store with the error
        // yield put({ type: "API_CALL_FAILURE", error });
    }
}