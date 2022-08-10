import { SET_CARDS_RANGE } from 'store/actions/constants';

export type SetCardsRangeType = {
    type: typeof SET_CARDS_RANGE;
    payload: { min: number; max: number };
};
