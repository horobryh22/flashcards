import React from 'react';

import { CardsTopContent, TableComponent } from 'components';
import { NumberOfCards } from 'components/overTableRow/NumberOfCards';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    return (
        <>
            <NumberOfCards />
            <CardsTopContent title="Packs list" buttonName="Add new pack" isButtonNeed />
            <TableComponent />
        </>
    );
};
