import { AxiosResponse } from 'axios';
import { storeObj as storeForgetPass } from '../forgetpassword';
import { storeObj as storeLogin } from '../login';
import { storeObj as storeOtp } from '../otp';
import { storeObj as storeregister } from '../register';
import { storeObj as storeReset } from '../reset-password';
import { storeObj as storeCity } from '../user/city';
import { storeObj as storeCityArea } from '../user/city-area';
import { storeObj as storeParkingSlot } from '../user/parking-slot';
import { storeObj as storeUserTime } from '../user/user-time-info';
import { storeObj as storeWalletMoney } from '../user/wallet-money';


export interface ParkingResponse<T> extends AxiosResponse {
    data: T
}

export type EParkingStore = ImMap<
    storeLogin &
    storeCity &
    storeCityArea &
    storeParkingSlot &
    storeWalletMoney &
    storeUserTime &
    storeForgetPass &
    storeOtp &
    storeReset &
    storeregister
    >;

type MSTP<SP> = (store: EParkingStore) => SP;

