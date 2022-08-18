import { SET_SEARCH_USER_ID } from 'store/actions/constants';

export type SetSearchUserId = {
    type: typeof SET_SEARCH_USER_ID;
    payload: {
        id: string;
    };
};
