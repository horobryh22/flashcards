import { instance } from 'api/config';
import {
    AddCardType,
    CardsSearchParams,
    CardType,
    GetCardsResponseType,
    UpdateCardType,
    UpdatedGradeType,
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
        return instance.delete<{ deletedCard: CardType }>('cards/card', {
            params: {
                id: cardId,
            },
        });
    },
    updateCard: (card: UpdateCardType) => {
        return instance.put<{ updatedCard: CardType }>('cards/card', card);
    },
    updateCardGrade: (grade: number, card_id: string) => {
        return instance.put<{ updatedGrade: UpdatedGradeType }>('cards/grade', {
            grade,
            card_id,
        });
    },
};
