// const initialState = { search: '' };
//
// export const SearchReducer = (state = initialState, action: GeneralType): any => {
//     switch (action.type) {
//         case 'SET-SEARCH-VALUE': {
//             return { ...state, search: action.value };
//         }
//         default:
//             return state;
//     }
// };
//
// type GeneralType = setSearchValueACType;
//
// export type setSearchValueACType = ReturnType<typeof setSearchValueAC>;
//
// export const setSearchValueAC = (value: string) => {
//     return {
//         type: 'SET-SEARCH-VALUE',
//         value,
//     };
// };
