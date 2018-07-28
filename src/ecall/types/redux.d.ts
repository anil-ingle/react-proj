type QueryParam = {
    include?: string[] | string,
    sort?: string,
    limit?: string,
    offset?: string,
    filter?: string,
};

type RequestPayload = {
    body?: any,
    id?: string,
    params?: QueryParam,
    cart_reference?: string,
    path?: string,
    token?: string,
    data?: any
};

// action object
type Action<P> = {
    type: string,
    payload: P,
    errors?: EComError
};

type ActionCreator<P> = (payload?: P) => { type: string, payload?: P };

// generic reducer function
type baseReducerFn<T, A={}> = (storeKey: T, action: Action<A>) => T

interface FetchingInterface {
    fetching: boolean,
    fetched: boolean,
}
