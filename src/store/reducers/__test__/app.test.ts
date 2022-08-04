import { REQUEST_STATUS } from 'enums';
import { setAppStatusAC, setIsInitializedAC } from 'store/actions/app';
import { appReducer } from 'store/reducers/index';
import { AppStateType } from 'store/reducers/types';

let startState: AppStateType;

beforeEach(() => {
    startState = {
        error: null,
        status: REQUEST_STATUS.IDLE,
        isInitialized: false,
    };
});

describe('app reducer', () => {
    test('correct app status should be set', () => {
        const endState = appReducer(startState, setAppStatusAC(REQUEST_STATUS.LOADING));

        expect(endState.status).toBe(REQUEST_STATUS.LOADING);
        expect(endState.error).toBeNull();
    });

    test('app should be initialized', () => {
        const endState = appReducer(startState, setIsInitializedAC(true));

        expect(endState.isInitialized).toBeTruthy();
        expect(endState.error).toBeNull();
    });
});
