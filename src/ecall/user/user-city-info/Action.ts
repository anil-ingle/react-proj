import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: { cityId: any }
};
export const setUserCityIdAction: actionCreator<RequestPayload> = (payload) => {
    return ({ type: AT.user_cityId_act, payload });
};
export const sagasActions = {
    setUserCityIdAction
};

export default { sagasActions };
