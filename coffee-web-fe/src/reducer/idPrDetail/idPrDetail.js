import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idPrDetail: {},
};

export const idPrDetailSlice = createSlice({
    name: 'idPrDetail',
    initialState,
    reducers: {
        setIdPrDetail: (state, action) => {
            state.idPrDetail = { ...action.payload };
        },
    },
});

export const { setIdPrDetail } = idPrDetailSlice.actions;

const idPrDetailReducer = idPrDetailSlice.reducer;

export default idPrDetailReducer;
