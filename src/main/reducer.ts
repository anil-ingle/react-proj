import { combineReducers } from 'redux-immutable';

import { logineducer } from '../ecall/login';
import { cityReducer } from '../ecall/user/city';
import { cityAreaReducer } from '../ecall/user/city-area';
import { parkingSlotReducer } from '../ecall/user/parking-slot';
import { bookSlotAction, bookSlotReducer } from '../ecall/user/book-slot';
import { walletMoneyReducer } from '../ecall/user/wallet-money';
import { setUserTimeReducer } from '../ecall/user/user-time-info';
import { setUserCityIdActionReducer } from '../ecall/user/user-city-info';
import { ownerAddressReducer } from '../ecall/owner/own-address';
import { forgetpassReducer } from '../ecall/forgetpassword';
import { otpReducer } from '../ecall/otp';
import { resetPassReducer } from '../ecall/reset-password';
import { registerReducer } from '../ecall/register';

export default combineReducers({
    ...logineducer,
    ...cityReducer,
    ...cityAreaReducer,
    ...parkingSlotReducer,
    ...bookSlotAction,
    ...walletMoneyReducer,
    ...setUserTimeReducer,
    ...bookSlotReducer,
    ...setUserCityIdActionReducer,
    ...ownerAddressReducer,
    ...forgetpassReducer,
    ...otpReducer,
    ...resetPassReducer,
    ...registerReducer,

});