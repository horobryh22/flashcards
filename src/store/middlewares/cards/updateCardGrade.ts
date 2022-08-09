import { AxiosError } from 'axios';

import { cardsApi } from 'api/cards/cardsApi';
import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC } from 'store/actions';
import { setUpdatedGradeAC } from 'store/actions/cards';
import { AppThunkType } from 'store/types';
import { errorHandler } from 'utils';

export const updateCardGrade =
    (grade: number, card_id: string): AppThunkType =>
    async dispatch => {
        try {
            dispatch(setAppStatusAC(REQUEST_STATUS.LOADING));

            const response = await cardsApi.updateGrade(grade, card_id);

            dispatch(setUpdatedGradeAC(response.data));
        } catch (e) {
            errorHandler(e as Error | AxiosError, dispatch);
        } finally {
            dispatch(setAppStatusAC(REQUEST_STATUS.IDLE));
        }
    };
