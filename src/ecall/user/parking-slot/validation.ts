
export function validation(action: Action<RequestPayload>) {
    let isError = false, msg = '', areaId = 0;
    let res = {} as any;
    if (action.payload.data.id && action.payload.data.id > 0) {
        areaId = action.payload.data.id;
    } else {
        isError = true;
        msg = 'Error in getting Slot. Please contact support team or Refresh once';
    }
    
    res.areaId = areaId;
    res.isError = isError;
    res.msg = msg;

    return res;
}
