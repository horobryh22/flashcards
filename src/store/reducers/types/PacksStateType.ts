import { PackType, SearchParamsType } from 'api/types';

export type PacksStateType = {
    packCover: string;
    isPacksFetched: boolean;
    cardPacks: PackType[];
    searchParams: SearchParamsType;
    cardPacksTotalCount: number;
    isInitialized: boolean;
};
