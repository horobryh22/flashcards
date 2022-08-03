import React from 'react';

import { CardsTopContent, TableComponent } from 'components';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    return (
        <>
            <CardsTopContent title="Packs list" buttonName="Add new pack" isButtonNeed />
            <TableComponent />
        </>
    );
};
