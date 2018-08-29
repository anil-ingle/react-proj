import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { time: number }
};
export const setUserTimeAction: actionCreator<RequestPayload> = (payload) => {
    return ({ type: AT.user_time_act, payload });
};
export const sagasActions = {
    setUserTimeAction
};

export default { sagasActions };
