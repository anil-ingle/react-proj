interface Constructable<T> {
    new(...args: any[]): T;
}

interface ImMap<T> {
    get<K extends keyof T>(key: K): any;
    getIn<K1 extends keyof T>(keys: [K1]): any;
    getIn<K1 extends keyof T, K2 extends keyof T[K1]>(keys: [K1, K2]): any;
    set<K extends keyof T, V extends T[K]>(key: K, value: V): this;
    withMutations(cb: (r: ImMap<T>) => ImMap<T>): this;
    setIn<K1 extends keyof T, V extends T[K1]>(keys: [K1], val: V): this;
    setIn<K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2]>(keys: [K1, K2], val: V): this;
    setIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], V extends T[K1][K2][K3]>(
        keys: [K1, K2, K3],
        val: V
    ): this;
    toJS(): T;
    merge(value: Partial<T>): ImMap<T>;
    update: any;
    isEmpty(): boolean;
}
