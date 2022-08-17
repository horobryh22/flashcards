import { CardType, SearchParamsType } from 'api/types';
import { PACKS_STATUS } from 'enums';

export type PacksStateType = {
    status: PACKS_STATUS;
    cardPacks: CardType[];
    searchParams: SearchParamsType;
    cardPacksTotalCount: number;
    isInitialized: boolean;
    isMyPack: boolean;
    selectedCardsPack: CardType;
};
