import { UpdatedGradeType } from 'api/types/cards/GetCardType/GetCardsType';
import { SET_UPDATED_GRADE } from 'store/actions/constants';

export type SetUpdatedGradeType = {
    type: typeof SET_UPDATED_GRADE;
    payload: { updatedCard: UpdatedGradeType };
};
