import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listProducts: [],
};

export const listProductsSlice = createSlice({
    name: 'listProducts',
    initialState,
    reducers: {
        setAddProducts: (state, action) => {
            state.listProducts.push(action.payload);
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
        setListProductsAdded: (state, action) => {
            state.listProducts = action.payload;
        },
        setDeleteProductAdded: (state, action) => {
            state.listProducts.splice(action.payload, 1);
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
        setDeleteAllProductsAdd: (state) => {
            state.listProducts = [];
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
        setChangeQtyProductAdd: (state, action) => {
            if (parseFloat(action.payload.value) <= 0) {
                state.listProducts.splice(action.payload.index, 1);
            } else {
                state.listProducts[action.payload.index].qty = parseFloat(action.payload.value);
            }
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
        setUpQtyProduct: (state, action) => {
            state.listProducts[action.payload].qty += 1;
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
        setDownQtyProduct: (state, action) => {
            state.listProducts[action.payload].qty -= 1;
            if (state.listProducts[action.payload].qty <= 0) {
                state.listProducts.splice(action.payload, 1);
            }
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
    },
});

export const {
    setAddProducts,
    setListProductsAdded,
    setDeleteProductAdded,
    setDeleteAllProductsAdd,
    setChangeQtyProductAdd,
    setDownQtyProduct,
    setUpQtyProduct,
} = listProductsSlice.actions;

const listProductsReducer = listProductsSlice.reducer;

export default listProductsReducer;
