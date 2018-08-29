import { AT } from './Constant';
type Actions<P> = {
    type: string,
    payload: P,

};
type RequestPayload = {
    type: string, payload: { userName: string, password: string }
};

export const loginAction: actionCreator<RequestPayload> = (payload) => {

    return ({ type: AT.Login_Act, payload });
};

export const sagasActions = {
    loginAction,
};

export default { sagasActions };
