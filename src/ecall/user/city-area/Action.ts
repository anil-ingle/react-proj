import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { id: any }
};
export const cityAreaAction: actionCreator<RequestPayload> = (payload) => {
    return ({ type: AT.city_area_act, payload });
};
export const sagasActions = {
    cityAreaAction
};

export default { sagasActions };
