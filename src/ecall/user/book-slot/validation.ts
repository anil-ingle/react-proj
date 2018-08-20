
export function validation(action: Action<RequestPayload>) {
    let data = {} as any;
    let isError = false;
    let msg = '';
    let res = {} as any;
    if (action.payload.data.wTotal && action.payload.data.wTotal > 0) {
        data.wTotal = action.payload.data.wTotal;
    } else {
        isError = true;
        msg = 'Error in wallet amount. Please contact support team or Refresh once';
    }
    if (action.payload.data.wBill && action.payload.data.wBill > 0) {
        data.wBill = action.payload.data.wBill;
    } else {
        isError = true;
        msg = 'Error in wallet amount. Please contact support team  or Refresh once.';
    }
    if (action.payload.data.bookedSlots && action.payload.data.bookedSlots.length > 0) {
        data.bookedSlots = action.payload.data.bookedSlots;
    } else {
        isError = true;
        msg = 'Error in selecting slot. Please contact support team  or Refresh once.';
    }
    if (action.payload.data.timeTaken && action.payload.data.timeTaken.length > 0) {
        data.timeTaken = action.payload.data.timeTaken;
    } else {
        isError = true;
        msg = 'Error in selecting Time. Please contact support team  or Refresh once.';
    }
    if (action.payload.data.userId && action.payload.data.userId > 0) {
        data.userId = action.payload.data.userId;
    } else {
        isError = true;
        msg = 'Error in selecting User. Please contact support team  or Refresh once.';
    }
    if (action.payload.data.areaId && action.payload.data.areaId > 0) {
        data.areaId = action.payload.data.areaId;
    } else {
        isError = true;
        msg = 'Error in selecting Area. Please contact support team  or Refresh once.';
    }
    res.data = data;
    res.isError = isError;
    res.msg = msg;

    return res;
}
