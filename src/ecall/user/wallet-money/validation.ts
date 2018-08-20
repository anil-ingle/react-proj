
export function validation(action: Action<RequestPayload>) {
    let isError = false, msg = '';
    let res = {} as any;
    let userId;
    if (action.payload && action.payload > 0) {
        userId = action.payload;
    } else {
        isError = true;
        msg = 'Error in getting Wallet money. Please contact support team or Refresh once';
    }

    res.userId = userId;
    res.isError = isError;
    res.msg = msg;

    return res;
}
