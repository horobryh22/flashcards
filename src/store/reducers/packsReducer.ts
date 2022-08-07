import { PacksStateType } from './types';

import {
    SET_CURRENT_PAGE,
    SET_PACK_NAME,
    SET_PACKS_TOTAL_COUNT,
    SET_PAGE_COUNT,
    SET_CARD_PACKS,
    SET_SLIDER,
    SET_SORT_PACKS,
    SET_IS_MY_CARDS,
} from 'store/actions/constants';
import { PacksActionsType } from 'store/actions/types';

const initialState: PacksStateType = {
    cardPacks: [],
    searchParams: {
        packName: '',
        min: 0,
        max: 4,
        sortPacks: '0updated',
        page: 1,
        pageCount: 8,
        user_id: '',
    },
    isMyPack: false,
    cardPacksTotalCount: 0,
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
        case SET_PACKS_TOTAL_COUNT:
            return { ...state, cardPacksTotalCount: action.payload.packsTotalCount };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                searchParams: { ...state.searchParams, page: action.payload.page },
            };
        case SET_CARD_PACKS:
            return { ...state, cardPacks: action.payload.cardPacks };
        case SET_IS_MY_CARDS:
            return { ...state, isMyPack: action.payload.isMyPack };
        case SET_SORT_PACKS:
            return {
                ...state,
                searchParams: { ...state.searchParams, sortPacks: action.payload.sort },
            };
        case SET_SLIDER:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    min: action.payload.min,
                    max: action.payload.max,
                },
            };
        default:
            return state;
    }
};
