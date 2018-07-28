import { OrderedMap } from 'immutable';

export type SkPlainObj = { locale: string };

export type skObj = ImMap<SkPlainObj>;

export type reducerFn = baseReducerFn<skObj>;

export type reducerType = { language: reducerFn };

export type storeObj = { language: SkPlainObj };
