import { AT } from './Constant';

type Actions<P> = {
    type: string,
    payload: P,

};
type RequestPayload = {
    type: string, payload: { key: string, newPass: string }
};

export const resetPassAction: actionCreator<RequestPayload> = (payload) => {

    return ({ type: AT.resetpass_act, payload });
};

export const sagasActions = {
    resetPassAction,
};

export default { sagasActions };
