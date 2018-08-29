import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';
import config from '../../api/config';
import uri from '../../api/uri';
import { validation } from './validation';
export class OwnerAddressSaga {
    // worker saga: makes the api call when watcher saga sees the action
    * ownerAddressSaga(action: Action<RequestPayload>) {
        // let res = validation(action);
        // if (!res.isError) {
            try {
                const reponse = yield call(() => {
                    return axios({
                        method: 'GET',
                        url: config.host + uri.cityArea + '?cityId=' + 5,

                    });
                });

                yield put({ type: AT.own_adr, payload: reponse });

            } catch (error) {
                // error 
            }
        // } else {
        //     toastr.warning(res.msg);
        // }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [
        takeEvery(AT.own_adr_act, this.ownerAddressSaga)
    ]
}
