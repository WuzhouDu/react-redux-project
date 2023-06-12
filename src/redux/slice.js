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

export const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState: {
        cartProducts: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.cartProducts.push(action.payload);
        },

        removeProductFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload);
        },

        clearCart: (state, action) => {
            state.cartProducts = [];
        }
    }
})

export const pathSlice = createSlice({
    name: 'path',
    initialState: {
        path: '/',
    },
    reducers: {
        setPath: (state, action) => {
            state.path = action.payload;
        }
    }
})

export const { setPath } = pathSlice.actions;
export const pathReducer = pathSlice.reducer;

export const { addProductToCart, removeProductFromCart, clearCart } = cartProductsSlice.actions;
export const cartProductsReducer = cartProductsSlice.reducer;

export const { selectProduct, removeSelectedProduct } = selectProductSlice.actions;
export const selectProductReducer = selectProductSlice.reducer;
export const { setProducts } = allProductsSlice.actions;
export const allProductsReducer = allProductsSlice.reducer;