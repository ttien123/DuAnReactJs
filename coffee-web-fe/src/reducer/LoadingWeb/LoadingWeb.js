import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoadingWeb: false,
};

const loadingWeb = createSlice({
    name: 'loadingWeb',
    initialState,
    reducers: {
        setRunLoadingWeb: (state) => {
            state.isLoadingWeb = true;
        },
        setCloseLoadingWeb: (state) => {
            state.isLoadingWeb = false;
        },
    },
});

export const { setCloseLoadingWeb, setRunLoadingWeb } = loadingWeb.actions;

const loadingWebReducer = loadingWeb.reducer;

export default loadingWebReducer;
