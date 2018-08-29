import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { id: any }
};

export const parkingAreaAction: actionCreator<RequestPayload> = (payload) => {
    return ({ type: AT.parking_slot_act, payload });
};
export const sagasActions = {
    parkingAreaAction
};

export default { sagasActions };
