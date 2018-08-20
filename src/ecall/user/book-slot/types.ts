export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { bookSlot: reducerFn, bookSlot_act: reducerFn };

export type storeObj = { bookSlot: SkPlainObj, bookSlot_act: SkPlainObj };