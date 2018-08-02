import { AT } from './Constant';
type Actions<P> = {
    type: string,
    payload: P,

};
type RequestPayload = {
    type: string, payload: { userName: string, password: string }
};
export const loginAction = (payload: RequestPayload): Actions<RequestPayload> => {
   
    return ({ type: AT.login, payload });
};

export const sagasActions = {
    loginAction,
};

export default { sagasActions };
