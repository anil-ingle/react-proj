
export function validation(action: Action<RequestPayload>) {
    let isError = false, msg = '', userName = '', password = '';
    let res = {} as any;
    if (action.payload.data.userName && action.payload.data.userName.length > 0) {
        userName = action.payload.data.userName;
    } else {
        isError = true;
        msg = 'Error in Username. Please contact support team or Refresh once';
    }
    if (action.payload.data.password && action.payload.data.password.length > 0) {
        password = action.payload.data.password;
    } else {
        isError = true;
        msg = 'Error in Password. Please contact support team  or Refresh once.';
    }
    res.userName = userName;
    res.password = password;
    res.isError = isError;
    res.msg = msg;

    return res;
}
