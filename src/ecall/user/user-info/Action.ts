import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { id: any, time: any }
};
export const setUserAreaIdTimeAction = (payload: RequestPayload): Action<RequestPayload> => {
    return ({ type: AT.user_info_act, payload });
};
export const sagasActions = {
    setUserAreaIdTimeAction
};

export default { sagasActions };
