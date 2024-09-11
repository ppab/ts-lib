export type UrlBuilderQueryParameters = {
    relations?: string[];
    filters?: { [key: string]: string };
    search?: { [key: string]: string };
    jsonSearch?: { [key: string]: { [key: string]: string } };
};