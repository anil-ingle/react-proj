import { EParkingStore } from '../../types';
import { createSelector } from 'reselect';

const walletMoneyFS = (store: EParkingStore) => store.getIn(['wallet_money']);

export const selWalletMoney: selector<WalletMoneyResponseImMap> = createSelector(
    [walletMoneyFS], (retwalletMoneyF) => {
        return retwalletMoneyF;
    }
);
