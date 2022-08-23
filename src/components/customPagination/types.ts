export type CustomPaginationType = {
    page: number;
    pageCount: number;
    totalCount: number;
    isItemsFetched: boolean;
    setPage: (page: number) => void;
};
