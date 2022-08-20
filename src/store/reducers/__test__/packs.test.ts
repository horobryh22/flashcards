import { PackType } from 'api/types';
import {
    setCardPacksAC,
    setCurrentPageAC,
    setPackNameAC,
    setPageCountAC,
    setSortPacksAC,
} from 'store/actions';
import { packsReducer } from 'store/reducers';
import { PacksStateType } from 'store/reducers/types';

let startState: PacksStateType;
const pageCount = 10;
const defaultPacksCount = 100500;
const defaultPage = 50;

beforeEach(() => {
    startState = {
        isPacksFetched: false,
        cardPacks: [{} as PackType],
        cardPacksTotalCount: 100,
        searchParams: {
            packName: 'english',
            page: 1,
            pageCount: 4,
            sortPacks: '0updated',
            max: 10,
            min: 5,
            user_id: 'userId',
        },
        isInitialized: false,
    };
});

describe('packs reducer', () => {
    test('correct name of pack should be set in the state', () => {
        const endState = packsReducer(startState, setPackNameAC('JavaScript'));

        expect(endState.searchParams.packName).toBe('JavaScript');
    });

    test('correct count of page should be set in the state', () => {
        const endState = packsReducer(startState, setPageCountAC(pageCount));

        expect(endState.searchParams.pageCount).toBe(pageCount);
    });

    test('current page should be correct set in the state', () => {
        const endState = packsReducer(startState, setCurrentPageAC(defaultPage));

        expect(endState.searchParams.page).toBe(defaultPage);
    });

    test('correct sort of packs should be set in the state', () => {
        const endState = packsReducer(startState, setSortPacksAC('0cardsCount'));

        expect(endState.searchParams.sortPacks).toBe('0cardsCount');
    });

    test('card packs should be set in the state', () => {
        const cardPacks = [
            {
                _id: 'cardId',
                user_id: 'userId',
                cardsCount: 50,
                name: 'English',
                created: 'some date',
                deckCover: 'img',
                grade: 5,
                more_id: 'sdasd',
                path: 'asdasd',
                private: false,
                rating: 4,
                shots: 3,
                type: 'asdasdasd',
                updated: 'asdasdasdsa',
                user_name: 'Valera',
            },
        ];

        const endState = packsReducer(
            startState,
            setCardPacksAC(cardPacks, defaultPacksCount),
        );

        expect(endState.cardPacks).not.toEqual([{}]);
        expect(endState.cardPacks.length).toBe(1);
        expect(endState.cardPacks[0]._id).toBe('cardId');
        expect(endState.cardPacksTotalCount).toBe(defaultPacksCount);
    });
});
