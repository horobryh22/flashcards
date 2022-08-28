import { UpdatedGradeType } from 'api/types';
import { SET_UPDATED_CARD_GRADE } from 'store/actions/constants';

export type SetUpdatedCardGrade = {
    type: typeof SET_UPDATED_CARD_GRADE;
    payload: { updatedGrade: UpdatedGradeType };
};
