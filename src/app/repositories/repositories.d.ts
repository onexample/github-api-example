export interface Repository {
    id?: number;
    name?: string;
    description?: string;
    html_url?: string;
    fork?: boolean;
    parent?: {
        html_url?: string
    };
}


