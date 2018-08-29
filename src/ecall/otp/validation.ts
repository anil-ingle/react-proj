
export function validation(action: Action<RequestPayload>) {
    let isError = false, otp = '', msg = '';
    let res = {} as any;
    if (action.payload.data.otp && action.payload.data.otp > 0) {
        console.log('otp' + action.payload.data.otp);

        otp = action.payload.data.otp;
    } else {
        isError = true;
        msg = 'Error in otp. Please contact support team or Refresh once';
    }

    res.otp = otp;
    res.isError = isError;
    res.msg = msg;
    return res;
}
