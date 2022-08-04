import { SET_PACKS_TOTAL_COUNT } from 'store/actions/constants';

export type SetPacksTotalCount = {
    type: typeof SET_PACKS_TOTAL_COUNT;
    payload: { packsTotalCount: number };
};
