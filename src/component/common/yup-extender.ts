export type YupObj<T> = {
    [P in keyof T]?: any;
};