import { AT } from './Constant';

type RequestPayload = {
    type: string, payload: {
        areaId: string, timeTaken: string, bookedSlots: string
        wBill: number, wTotal: number, userId: number
    }
};
export const bookSlotAction = (payload: RequestPayload): Action<RequestPayload> => {
    return ({ type: AT.book_slot_act, payload });
};
export const sagasActions = {
    bookSlotAction
};

export default { sagasActions };
