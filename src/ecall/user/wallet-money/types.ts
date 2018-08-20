export interface SkPlainObj {
    data: any;
    fetching: boolean;
    fetched: boolean;
}

export type SkObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<SkObj>;

export type reducerType = { wallet_money_act: reducerFn, wallet_money: reducerFn };

export type storeObj = { wallet_money_act: SkPlainObj, wallet_money: SkPlainObj };