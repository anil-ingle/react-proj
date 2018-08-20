import { combineReducers } from 'redux-immutable';

import { logineducer } from '../ecall/login';
import { cityReducer } from '../ecall/user/city';
import { cityAreaReducer } from '../ecall/user/city-area';
import { parkingSlotReducer } from '../ecall/user/parking-slot';
import { bookSlotAction, bookSlotReducer } from '../ecall/user/book-slot';
import { walletMoneyReducer } from '../ecall/user/wallet-money';
import { userIdTimeReducer } from '../ecall/user/user-info';

export default combineReducers({
    ...logineducer,
    ...cityReducer,
    ...cityAreaReducer,
    ...parkingSlotReducer,
    ...bookSlotAction,
    ...walletMoneyReducer,
    ...userIdTimeReducer,
    ...bookSlotReducer,
});