import { AuthActionsType } from 'store/actions';
import { AppActionsType, PacksActionsType } from 'store/actions/types';

export type AppRootActionsType = AuthActionsType | AppActionsType | PacksActionsType;
