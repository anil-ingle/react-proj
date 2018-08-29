import { AT } from './Constant';

type Actions<P> = {
    type: string,
    payload: P,

};
type RequestPayload = {
    type: string, payload: { email: string }
};

export const forgetPassEmailAction: actionCreator<RequestPayload> = (payload) => {

    return ({ type: AT.forgetpass_act, payload });
};

export const sagasActions = {
    forgetPassEmailAction,
};

export default { sagasActions };
