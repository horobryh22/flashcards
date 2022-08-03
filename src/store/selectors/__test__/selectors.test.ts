import { AuthUserDataType } from 'api/types';
import { REQUEST_STATUS } from 'enums';
import {
    selectAppStatus,
    selectAuthError,
    selectAuthInfo,
    selectCardPacks,
    selectGoToLogin,
    selectIsEmailSent,
    selectIsInitialized,
    selectIsUserAuth,
} from 'store/selectors';
import { AppRootState } from 'store/types';

let state: AppRootState;

beforeEach(() => {
    state = {
        app: {
            status: REQUEST_STATUS.IDLE,
            isInitialized: false,
            error: null,
        },
        auth: {
            error: 'some error',
            info: null,
            isUserAuth: false,
            goToLogin: false,
            isEmailSent: false,
            authUserData: {} as AuthUserDataType,
        },
        packs: {
            cardPacks: [],
            searchParams: {
                packName: '',
                min: 1,
                max: 4,
                sortPacks: '',
                page: 1,
                pageCount: 4,
                user_id: '',
            },
        },
    };
});

describe('select', () => {
    test('AuthError', () => {
        const error = selectAuthError(state);

        expect(error).toBe('some error');
    });

    test('AuthInfo', () => {
        const info = selectAuthInfo(state);

        expect(info).toBeNull();
    });

    test('GoToLogin', () => {
        const goToLogin = selectGoToLogin(state);

        expect(goToLogin).toBeFalsy();
    });

    test('IsEmailSent', () => {
        const isEmailSent = selectIsEmailSent(state);

        expect(isEmailSent).toBeFalsy();
    });

    test('AppStatus', () => {
        const status = selectAppStatus(state);

        expect(status).toBe(REQUEST_STATUS.IDLE);
    });

    test('isUserAuth', () => {
        const isUserAuth = selectIsUserAuth(state);

        expect(isUserAuth).toBeFalsy();
    });

    test('isInitialized', () => {
        const isInitialized = selectIsInitialized(state);

        expect(isInitialized).toBeFalsy();
    });

    test('cardPacks', () => {
        const cardPacks = selectCardPacks(state);

        expect(cardPacks).toEqual([]);
    });
});

export {};
