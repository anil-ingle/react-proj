export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { own_adr_act: reducerFn, own_adr: reducerFn };

export type storeObj = { own_adr_act: SkPlainObj, own_adr: SkPlainObj };