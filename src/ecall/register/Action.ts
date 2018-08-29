import { AT } from './Constant';
type Actions<P> = {
    type: string,
    payload: P,

};
type RequestPayload = {
    type: string, payload: { registerForm: any}
};

export const registerAction: actionCreator<RequestPayload> = (payload) => {

    return ({ type: AT.Register_Act, payload });
};

export const sagasActions = {
    registerAction,
};

export default { sagasActions };
