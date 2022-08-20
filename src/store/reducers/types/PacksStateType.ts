import { PackType, SearchParamsType } from 'api/types';

export type PacksStateType = {
    isPacksFetched: boolean;
    cardPacks: PackType[];
    searchParams: SearchParamsType;
    cardPacksTotalCount: number;
    isInitialized: boolean;
};
