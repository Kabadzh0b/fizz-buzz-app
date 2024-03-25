export interface ToType<T, U> {
    serialize(data: T): U;
}

export interface ConditionalFunc<T, U> {
    work(data: T): U | null;
}

export interface InConditionalFunc<T, U> {
    work(data: T): U;
}