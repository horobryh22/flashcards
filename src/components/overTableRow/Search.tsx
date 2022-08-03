// import React, { ChangeEvent, useEffect, useState } from 'react';
//
// import { useDispatch } from 'react-redux';
//
// import { useTypedSelector } from 'hooks';
// import { setSearchValueAC } from 'store/reducers/searchReducer';
// import { ReturnComponentType } from 'types';
//
// export const Search = (): ReturnComponentType => {
//     const dispatch = useDispatch();
//     const searchSelector = useTypedSelector(state => state.packs.searchParams);
//     const [searchValue, setSearchValue] = useState('');
//
//     // eslint-disable-next-line no-undef
//     useEffect(() => {
//         dispatch(setSearchValueAC(searchValue));
//     }, [searchValue]);
//     const onInputChange = (
//         event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
//     ) => {
//         setSearchValue(event.currentTarget.value);
//     };
//
//     return (
//         <input value={searchSelector} placeholder="Search..." onChange={onInputChange} />
//     );
// };
export {};
