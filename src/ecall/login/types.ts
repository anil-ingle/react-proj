export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { Login: reducerFn, Login_Act: reducerFn };

export type storeObj = { Login: SkPlainObj, Login_Act: SkPlainObj };