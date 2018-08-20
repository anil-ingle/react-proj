import { AT } from './Constant';

export const getCityAction: ActionCreator<RequestPayload> = () => {
    return ({ type: AT.city_act, payload: {} });
};

export const sagasActions = {
    getCityAction, 
};

export default { sagasActions };
