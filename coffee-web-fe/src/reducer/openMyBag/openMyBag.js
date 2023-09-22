import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenBag: false,
};

export const myBagSlice = createSlice({
    name: 'MyBag',
    initialState,
    reducers: {
        setIsOpenBag: (state) => {
            state.isOpenBag = true;
        },
        setIsCloseBag: (state) => {
            state.isOpenBag = false;
        },
    },
});

export const { setIsOpenBag, setIsCloseBag } = myBagSlice.actions;

const openMyBagReducer = myBagSlice.reducer;

export default openMyBagReducer;
