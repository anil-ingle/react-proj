
export function validation(action: Action<RequestPayload>) {
    let isError = false, newPass = '', msg = '';
    let res = {} as any;
    if (action.payload.data.newPass && action.payload.data.newPass > 0) {
        newPass = action.payload.data.newPass;
    } else {
        isError = true;
        msg = 'Error in NewPassord. Please contact support team or Refresh once';
    }

    res.newPass = newPass;
    res.isError = isError;
    res.msg = msg;
    return res;
}
