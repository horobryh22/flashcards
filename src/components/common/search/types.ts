import { CSSProperties } from 'react';

export type SearchType = {
    isDataFetched: boolean;
    uriParam: string;
    fullWidth: boolean;
    style: CSSProperties;
    defaultValue: string;
    onChangeValue: (value: string) => void;
};
