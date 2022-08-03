import { OrderDirectionType } from 'components/mainTableRow/types';
import { AppDispatch } from 'store';
import { setSortPacksAC } from 'store/actions';
import { ColumnSortType } from 'types';

export const handleSortType = (
    setDirection: (direction: OrderDirectionType) => void,
    directionName: OrderDirectionType,
    sort: ColumnSortType,
    dispatch: AppDispatch,
): void => {
    setDirection(directionName === 'asc' ? 'desc' : 'asc');
    const sortDirection = directionName === 'asc' ? '1' : '0';

    if (sort) {
        dispatch(setSortPacksAC(`${sortDirection}${sort}`));
    }
};
