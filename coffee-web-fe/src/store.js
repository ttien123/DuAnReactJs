import { configureStore } from '@reduxjs/toolkit';
import sideMenuReducer from './reducer/reducerSideMenu/SideMenu.reducer';
import authSliceReducer from './reducer/Auth/Auth';

export const store = configureStore({
    reducer: { sideMenu: sideMenuReducer, authState: authSliceReducer },
});
