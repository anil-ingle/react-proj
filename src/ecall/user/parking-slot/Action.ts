import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { id: any }
};
export const parkingAreaAction = (payload: RequestPayload): Action<RequestPayload> => {
    return ({ type: AT.parking_slot_act, payload });
};
export const sagasActions = {
    parkingAreaAction
};

export default { sagasActions };
