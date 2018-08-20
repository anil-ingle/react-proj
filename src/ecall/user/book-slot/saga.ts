import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AT } from './Constant';
import config from '../../api/config';
import * as toastr from 'toastr';
import { validation } from './validation';
import uri from '../../api/uri';

export class BookSlotSaga {
    // worker saga: makes the api call when watcher saga sees the action
    * bookSlotSaga(action: Action<RequestPayload>) {
        let res = validation(action);
        if (!res.isError) {
            try {
                const reponse = yield call(() => {
                    return axios({
                        method: 'POST',
                        data: (res.data),
                        url: config.host + uri.slotBookingUsingWallet,
                    });
                });

                yield put({ type: AT.booked_slot, payload: reponse });

            } catch (error) {
                // error 
            }
        } else {
            toastr.warning(res.msg);

        }
    }

    // watcher saga: watches for actions dispatched to the store, starts worker saga
    public getSagaWatchers = () => [
        takeEvery(AT.book_slot_act, this.bookSlotSaga)
    ]
}
