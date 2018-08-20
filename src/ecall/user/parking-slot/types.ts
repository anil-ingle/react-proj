export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { parkingSlot: reducerFn, parkingSlotAction: reducerFn };

export type storeObj = { parkingSlot: SkPlainObj, parkingSlotAction: SkPlainObj };