import { SearchParamsType } from 'api/types';
import { SET_SEARCH_PARAMS } from 'store/actions/constants';

export type SetSearchParamsType = {
    type: typeof SET_SEARCH_PARAMS;
    payload: { params: SearchParamsType };
};
