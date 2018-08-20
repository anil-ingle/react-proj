export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { cityArea: reducerFn, cityArea_act: reducerFn };

export type storeObj = { cityArea: SkPlainObj, cityArea_act: SkPlainObj };