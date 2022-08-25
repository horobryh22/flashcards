import { SET_IS_PACKS_FETCHED } from 'store/actions/constants';

export type SetIsPacksFetched = {
    type: typeof SET_IS_PACKS_FETCHED;
    payload: { isPacksFetched: boolean };
};
