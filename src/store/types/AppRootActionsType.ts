import { AuthActionsType } from 'store/actions';
import { AppActionsType, CardsActionsType, PacksActionsType } from 'store/actions/types';

export type AppRootActionsType =
    | AuthActionsType
    | AppActionsType
    | PacksActionsType
    | CardsActionsType;
