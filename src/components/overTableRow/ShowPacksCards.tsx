// import React, { useEffect } from 'react';
//
// import { Button } from '@mui/material';
//
// import { useAppDispatch, useTypedSelector } from 'hooks';
// import { fetchPacks, initializedApp } from 'store/middlewares';
// import { selectIsUserAuth } from 'store/selectors';
// import { ReturnComponentType } from 'types';
//
// export const ShowPacksCards = (): ReturnComponentType => {
//     const dispatch = useAppDispatch();
//
//     const status = useTypedSelector(selectAppStatus);
//     const isUserAuth = useTypedSelector(selectIsUserAuth);
//     const isInitialized = useTypedSelector(selectIsInitialized);
//
//     const sortPacks = useTypedSelector(state => state.packs.searchParams.sortPacks);
//
//     useEffect(() => {
//     dispatch(initializedApp());
//      }, []);
//
//      useEffect(() => {
//         if (isUserAuth) {
//             dispatch(fetchPacks());
//         }
//      }, [isUserAuth, sortPacks]);
//
//     const allHandler = () => {
//         dispatch(fetchPacks());
//     };
//
//     const myHandler = () => {
//         dispatch(fetchPacks());
//     };
//
//     return (
//         <div>
//             <Button onClick={allHandler} variant="outlined">
//                 All
//             </Button>
//             <Button onClick={myHandler} variant="outlined">
//                 My
//             </Button>
//         </div>
//     );
// };
export {};
