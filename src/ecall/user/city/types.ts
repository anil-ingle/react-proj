export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { city: reducerFn, city_act: reducerFn };

export type storeObj = { city: SkPlainObj, city_act: SkPlainObj };