import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listProducts: [],
};

const findIndexPr = (state, action) => {
    if (!action.payload.id) {
        const index = state.listProducts.findIndex(
            (product) => product.id === action.payload || product.id === action.payload.id,
        );
        return index;
    } else {
        const index = state.listProducts.findIndex((product) => product.id === action.payload.id);
        console.log(index);
        return index;
    }
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
            const index = findIndexPr(state, action);
            state.listProducts.splice(index, 1);
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },
        setDeleteAllProductsAdd: (state) => {
            state.listProducts = [];
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },

        setChangeQtyProductAdd: (state, action) => {
            const index = findIndexPr(state, action);
            if (parseFloat(action.payload.value) <= 0) {
                state.listProducts.splice(index, 1);
            } else {
                state.listProducts[index].qty = parseFloat(action.payload.value);
            }
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },

        setUpQtyProduct: (state, action) => {
            const index = findIndexPr(state, action);

            state.listProducts[index].qty += 1;
            localStorage.setItem('List_Products_Added', JSON.stringify(state.listProducts));
        },

        setDownQtyProduct: (state, action) => {
            const index = findIndexPr(state, action);
            state.listProducts[index].qty -= 1;
            if (state.listProducts[index].qty <= 0) {
                state.listProducts.splice(index, 1);
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
