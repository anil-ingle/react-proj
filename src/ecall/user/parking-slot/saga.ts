import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';
import config from '../../api/config';
import uri from '../../api/uri';
import { validation } from './validation';

export class ParkingAreaSlotSaga {
    // worker saga: makes the api call when watcher saga sees the action
    * parkingSlotSaga(action: Action<RequestPayload>) {
        let res = validation(action);
        if (!res.isError) {
            try {
                const reponse = yield call(() => {
                    return axios({
                        method: 'GET',
                        url: config.host + uri.areaSlot + '?areaId=' + res.areaId,

                    });
                });

                yield put({ type: AT.parking_slot, payload: reponse });

            } catch (error) {
                // error 
            }
        } else {
            toastr.warning(res.msg);
        }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [
        takeEvery(AT.parking_slot_act, this.parkingSlotSaga)
    ]
}
