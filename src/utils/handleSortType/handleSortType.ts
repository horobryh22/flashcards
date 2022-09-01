import { CardsSortType } from 'api/types';
import { OrderDirectionType } from 'components/common/mainTableRow/types';
import { AppDispatch } from 'store';
import { setSortCardsAC, setSortPacksAC } from 'store/actions';
import { ColumnSortType } from 'types';

export const handleSortType = (
    setDirection: (direction: OrderDirectionType) => void,
    directionName: OrderDirectionType,
    sort: ColumnSortType | CardsSortType,
    dispatch: AppDispatch,
    searchParams: URLSearchParams,
    isPacksFetched: boolean,
): void => {
    setDirection(directionName === 'asc' ? 'desc' : 'asc');
    const sortDirection = directionName === 'asc' ? '0' : '1';

    if (
        (sort === 'name' || sort === 'updated' || sort === 'cardsCount') &&
        isPacksFetched
    ) {
        dispatch(setSortPacksAC(`${sortDirection}${sort}`));
        searchParams.set('sortPacks', `${sortDirection}${sort}`);
    }

    if (
        (sort === 'question' ||
            sort === 'answer' ||
            sort === 'grade' ||
            sort === 'updated') &&
        !isPacksFetched
    ) {
        dispatch(setSortCardsAC(`${sortDirection}${sort}`));
        searchParams.set('sortCards', `${sortDirection}${sort}`);
    }
};
