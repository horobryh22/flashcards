import { AuthUserDataType } from 'api/types/auth/AuthUserDataType/AuthUserDataType';
import {
    setAuthErrorAC,
    setAuthInfoAC,
    setGoToLoginAC,
    setIsEmailSentAC,
    setIsUserAuthAC,
} from 'store/actions/auth';
import { authReducer } from 'store/reducers';
import { AuthStateType } from 'store/reducers/types';

let startState: AuthStateType;

beforeEach(() => {
    startState = {
        error: null,
        goToLogin: false,
        info: null,
        isEmailSent: false,
        isUserAuth: false,
        authUserData: {} as AuthUserDataType,
    };
});

describe('auth reducer', () => {
    test('error should be set in the state', () => {
        const endState = authReducer(startState, setAuthErrorAC('Some error'));

        expect(endState.error).toBe('Some error');
    });

    test('info should be set in the state', () => {
        const endState = authReducer(startState, setAuthInfoAC('Some info'));

        expect(endState.info).toBe('Some info');
    });

    test('isUserAuth should be changed in the state', () => {
        const endState = authReducer(startState, setIsUserAuthAC(true));

        expect(endState.isUserAuth).toBeTruthy();
    });

    test('isEmailSent should be changed in the state', () => {
        const endState = authReducer(startState, setIsEmailSentAC(true));

        expect(endState.isEmailSent).toBeTruthy();
    });

    test('goToLogin should be changed in the state', () => {
        const endState = authReducer(startState, setGoToLoginAC(true));

        expect(endState.goToLogin).toBeTruthy();
    });
});
