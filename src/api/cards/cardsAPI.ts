import { instance } from 'api/config';
import {
    AddCardType,
    CardsSearchParams,
    CardType,
    GetCardsResponseType,
    UpdateCardType,
} from 'api/types';

export const cardsAPI = {
    fetchCards: (params: CardsSearchParams) => {
        return instance.get<GetCardsResponseType>('cards/card', {
            params,
        });
    },
    addCard: (data: AddCardType) => {
        return instance.post<{ newCard: CardType }>('cards/card', data);
    },
    removeCard: (cardId: string) => {
        return instance.delete<{ deletedCard: CardType }>('cards/pack', {
            params: {
                id: cardId,
            },
        });
    },
    updateCard: (card: UpdateCardType) => {
        return instance.put<{ updatedCard: CardType }>('cards/pack', card);
    },
};
