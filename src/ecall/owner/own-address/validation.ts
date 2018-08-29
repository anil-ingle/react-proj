
export function validation(action: Action<RequestPayload>) {
    let isError = false, msg = '', cityId = 0;
    let res = {} as any;
    if (action.payload.data.id && action.payload.data.id > 0) {
        cityId = action.payload.data.id;
        
    } else {
        isError = true;
        msg = 'Error in City Area. Please contact support team or Refresh once';
    }
    
    res.cityId = cityId;
    res.isError = isError;
    res.msg = msg;

    return res;
}
