import { AT } from './Constant';

type Actions<P> = {
    type: string,
    payload: P,

};
type RequestPayload = {
    type: string, payload: { key: string, otp: string }
};

export const otpAction: actionCreator<RequestPayload> = (payload) => {

    return ({ type: AT.otp_act, payload });
};

export const sagasActions = {
    otpAction,
};

export default { sagasActions };
