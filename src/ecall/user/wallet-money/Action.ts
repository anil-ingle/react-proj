import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { id: any }
};
export const walletMoneyAction = (payload: RequestPayload): Action<RequestPayload> => {
    return ({ type: AT.wallet_mony_act, payload });
};
export const sagasActions = {
    walletMoneyAction
};

export default { sagasActions };
