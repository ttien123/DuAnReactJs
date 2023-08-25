import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenSideMeu: false,
};

export const sideMenuSlice = createSlice({
    name: 'SideMenu',
    initialState,
    reducers: {
        setOpenSideMenu: (state, action) => {
            state.isOpenSideMeu = action.payload;
        },
    },
});

export const { setOpenSideMenu } = sideMenuSlice.actions;

const sideMenuReducer = sideMenuSlice.reducer;

export default sideMenuReducer;
