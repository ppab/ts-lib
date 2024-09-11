export type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;
export type ExclusiveRequired<T, P extends keyof T> = {
    [K in P]: T[K];
} & Partial<Record<Exclude<keyof T, P>, never>>;

export type EmptyObject=Record<string, never>


export type CreatePropertyOptional<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;
