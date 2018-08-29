interface TransformRequestOrTransformResponseOrRequest { }

interface Headers {
    Accept?: string;
    Authorization?: string;
    "X-MOLTIN-CURRENCY"?: string;
    "content-type"?: string;
}

interface Config {
    transformRequest: TransformRequestOrTransformResponseOrRequest;
    transformResponse: TransformRequestOrTransformResponseOrRequest;
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    headers: Headers;
    method: string;
    url: string;
    baseURL: string;
}

interface APIResponse<D> {
    config: Config;
    data: D & APIError;
    readonly headers: Headers;
    request: XMLHttpRequest;
    readonly status: number;
    readonly statusText: string;
}

//FIXME: added this
interface Links {
    current?: string;
    first?: string;
    last?: string | null
}

interface DataResponse<D, I={}, M={}> {
    data?: D;
    included?: {};
    links?: Links;
    meta?: M;
    errors?: APIError //FIXME: added this
}
interface SlotResponse<D> {
    data?: D;
}
interface ParkingSlot<> {
}
interface APIError {
    error?: any[];
    message?: string;
    name?: string;
}

type AppError = any;

type EComError = APIError | AppError;
