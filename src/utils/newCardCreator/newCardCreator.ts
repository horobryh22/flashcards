import { CardsType } from 'api/types/cards/GetCardType/GetCardsType';

export function NewCard(): CardsType {
    return {
        answer: '',
        question: '',
        cardsPack_id: '',
        grade: 0,
        shots: 0,
        user_id: '',
        created: '',
        updated: '',
        _id: '',
        comments: '',
        type: '',
        rating: 0,
        more_id: '',
        __v: 0,
    };
}
