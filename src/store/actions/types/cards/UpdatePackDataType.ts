import { UPDATE_PACK_DATA } from 'store/actions/constants';

export type UpdatePackDataType = {
    type: typeof UPDATE_PACK_DATA;
    payload: {
        name: string;
        packPrivate: boolean;
        deckCover: string;
    };
};
