import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';
import config from '../../api/config';
import uri from '../../api/uri';

export class CitySaga {

    // worker saga: makes the api call when watcher saga sees the action
    * citySaga() {
        try {
            const reponse = yield call(() => {
                return axios({
                    method: 'GET',
                    url: config.host + uri.city,

                });
            });
            yield put({ type: AT.city, payload: reponse });

        } catch (error) {
            // error 
        }
    }
    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [
        takeEvery(AT.city_act, this.citySaga),
    ]
}

export default CitySaga;
