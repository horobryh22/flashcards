import { instance } from 'api/config';
import {
    GetCardsResponseType,
    SearchParamsType,
    AddCardsPackType,
    CardType,
    UpdateCardsPackType,
} from 'api/types';

export const packsAPI = {
    fetchPacks: ({
        packName,
        min,
        max,
        sortPacks,
        page,
        pageCount,
        user_id,
    }: SearchParamsType) => {
        return instance.get<GetCardsResponseType>('cards/pack', {
            params: {
                packName,
                min,
                max,
                sortPacks,
                page,
                pageCount,
                user_id,
            },
        });
    },
    addCardsPack: (pack: AddCardsPackType) => {
        return instance.post<{ newCardsPack: CardType }>('cards/pack', pack);
    },
    removeCardsPack: (packId: string) => {
        return instance.delete<{ deletedCardsPack: CardType }>('cards/pack', {
            params: {
                id: packId,
            },
        });
    },
    updateCardsPack: (pack: UpdateCardsPackType) => {
        return instance.put<{ updatedCardsPack: CardType }>('cards/pack', pack);
    },
};
