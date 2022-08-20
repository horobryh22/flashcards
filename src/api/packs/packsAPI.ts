import { instance } from 'api/config';
import {
    GetPacksResponseType,
    SearchParamsType,
    AddCardsPackType,
    PackType,
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
        return instance.get<GetPacksResponseType>('cards/pack', {
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
        return instance.post<{ newCardsPack: PackType }>('cards/pack', pack);
    },
    removeCardsPack: (packId: string) => {
        return instance.delete<{ deletedCardsPack: PackType }>('cards/pack', {
            params: {
                id: packId,
            },
        });
    },
    updateCardsPack: (pack: UpdateCardsPackType) => {
        return instance.put<{ updatedCardsPack: PackType }>('cards/pack', pack);
    },
};
