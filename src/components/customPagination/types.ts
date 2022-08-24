export type CustomPaginationType = {
    page: number;
    pageCount: number;
    totalCount: number;
    isItemsFetched: boolean;
    setPage: (page: number) => void;
    setPageCount: (pageCount: string) => void;
    pageCountValues: number[];
};
