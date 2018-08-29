import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { id: string }
};
export const ownerAdrsAction: actionCreator<RequestPayload> = (payload) => {
    return ({ type: AT.own_adr_act, payload });
};
export const sagasActions = {
    ownerAdrsAction
};

export default { sagasActions };
