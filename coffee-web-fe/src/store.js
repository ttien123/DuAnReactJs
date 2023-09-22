import { configureStore } from '@reduxjs/toolkit';
import sideMenuReducer from './reducer/reducerSideMenu/SideMenu.reducer';
import listProductsReducer from './reducer/ListProductsAddRedux/ListProductsAddRedux';
import openMyBagReducer from './reducer/openMyBag/openMyBag';

export const store = configureStore({
    reducer: { sideMenu: sideMenuReducer, listProductsRedux: listProductsReducer, IsOpenBag: openMyBagReducer },
});
