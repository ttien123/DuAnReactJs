import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenSignIn: false,
    isOpenSignUp: false,
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setOpenSignIn: (state) => {
            state.isOpenSignIn = true;
        },
        setOpenSignUp: (state) => {
            state.isOpenSignUp = true;
        },
        setCloseSignIn: (state) => {
            state.isOpenSignIn = false;
        },
        setCloseSignUp: (state) => {
            state.isOpenSignUp = false;
        },
    },
});

export const { setOpenSignIn, setOpenSignUp, setCloseSignIn, setCloseSignUp } = AuthSlice.actions;

const authSliceReducer = AuthSlice.reducer;

export default authSliceReducer;
