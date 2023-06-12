import { createSlice } from "@reduxjs/toolkit";


export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})



export const selectProductSlice = createSlice({
    name: 'productSeen',
    initialState: {
        selectedProduct: {},
    },
    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },

        removeSelectedProduct: (state, action) => {
            state.selectedProduct = {};
        }
    }
})

export const { selectProduct, removeSelectedProduct } = selectProductSlice.actions;
export const selectProductReducer = selectProductSlice.reducer;
export const { setProducts } = allProductsSlice.actions;
export const allProductsReducer = allProductsSlice.reducer;