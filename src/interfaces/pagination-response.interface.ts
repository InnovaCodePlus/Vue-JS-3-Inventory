export interface Links {
    first: string;
    last:  null;
    prev:  null;
    next:  string;
}

export interface Meta {
    current_page: number;
    from:         number;
    path:         string;
    per_page:     number;
    to:           number;
}

export type PaginatedResponse<T, K extends string> = {
    links: Links;
    meta: Meta;   
} & {
    [P in K]: T[]
}