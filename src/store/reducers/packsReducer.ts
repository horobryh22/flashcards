import { PacksStateType } from './types';

import {
    SET_CARD_PACKS,
    SET_CARDS_RANGE,
    SET_CURRENT_PAGE,
    SET_IS_PACKS_FETCHED,
    SET_PACK_NAME,
    SET_PAGE_COUNT,
    SET_SEARCH_PARAMS,
    SET_SEARCH_USER_ID,
    SET_SORT_PACKS,
} from 'store/actions/constants';
import { PacksActionsType } from 'store/actions/types';

const initialState: PacksStateType = {
    cardPacks: [],
    isPacksFetched: false,
    searchParams: {
        packName: '',
        min: 0,
        max: 120,
        sortPacks: '0updated',
        page: 1,
        pageCount: 6,
        user_id: '',
    },
    cardPacksTotalCount: 0,
    isInitialized: false,
};

export const packsReducer = (
    state = initialState,
    action: PacksActionsType,
): PacksStateType => {
    switch (action.type) {
        case SET_PACK_NAME: {
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    packName: action.payload.packName,
                },
            };
        }
        case SET_PAGE_COUNT:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    pageCount: action.payload.pageCount,
                },
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                searchParams: { ...state.searchParams, page: action.payload.page },
            };
        case SET_CARD_PACKS:
            return {
                ...state,
                cardPacks: action.payload.cardPacks,
                cardPacksTotalCount: action.payload.packsTotalCount,
                isPacksFetched: true,
            };
        case SET_SORT_PACKS:
            return {
                ...state,
                searchParams: { ...state.searchParams, sortPacks: action.payload.sort },
            };
        case SET_CARDS_RANGE:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    min: action.payload.min,
                    max: action.payload.max,
                },
            };
        case SET_SEARCH_USER_ID:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    user_id: action.payload.id,
                },
            };
        case SET_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: { ...state.searchParams, ...action.payload.params },
                isInitialized: true,
            };
        case SET_IS_PACKS_FETCHED:
            return { ...state, isPacksFetched: action.payload.isPacksFetched };
        default:
            return state;
    }
};
