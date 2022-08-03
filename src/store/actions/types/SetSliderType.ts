import { SET_SLIDER } from 'store/actions/constants';

export type SetSliderType = {
    type: typeof SET_SLIDER;
    payload: { min: number; max: number };
};
