import { SearchParamsType } from 'api/types';

export const PACKS_PARAM_STATE: SearchParamsType = {
    min: 0,
    max: 120,
    packName: '',
    sortPacks: '0updated',
    page: 1,
    pageCount: 5,
    user_id: '',
};
