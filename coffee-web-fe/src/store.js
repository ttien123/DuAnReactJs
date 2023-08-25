import { configureStore } from '@reduxjs/toolkit';
import sideMenuReducer from './reducer/reducerSideMenu/SideMenu.reducer';

export const store = configureStore({
    reducer: { sideMenu: sideMenuReducer },
});
