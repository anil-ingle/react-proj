import { all, spawn, fork, ForkEffect, } from 'redux-saga/effects';
import { LoginSaga } from '../ecall/login';
import { CitySaga } from '../ecall/user/city/saga';
import { CityAreaSaga } from '../ecall/user/city-area';
import { ParkingAreaSlotSaga } from '../ecall/user/parking-slot';
import { BookSlotSaga } from '../ecall/user/book-slot';
import { WalletMoneySaga } from '../ecall/user/wallet-money';
import { OwnerAddressSaga } from '../ecall/owner/own-address';
import { ForgetPasswordSaga } from '../ecall/forgetpassword';
import { OtpSaga } from '../ecall/otp';
import { ResetPasswordSaga } from '../ecall/reset-password';
import { RegisterSaga } from '../ecall/register';

export function* rootSaga() {

    yield all([
        ...(new LoginSaga()).getSagaWatchers(),
        ...(new CitySaga()).getSagaWatchers(),
        ...(new CityAreaSaga()).getSagaWatchers(),
        ...(new ParkingAreaSlotSaga()).getSagaWatchers(),
        ...(new BookSlotSaga()).getSagaWatchers(),
        ...(new WalletMoneySaga()).getSagaWatchers(),
        ...(new BookSlotSaga()).getSagaWatchers(),
        ...(new OwnerAddressSaga()).getSagaWatchers(),
         ...(new ForgetPasswordSaga()).getSagaWatchers(),
         ...(new OtpSaga()).getSagaWatchers(),
         ...(new ResetPasswordSaga()).getSagaWatchers(),
         ...(new RegisterSaga()).getSagaWatchers(),
    ]);
}