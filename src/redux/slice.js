import { createSlice } from "@reduxjs/toolkit";


export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            sessionStorage.getItem('allProducts') === null && sessionStorage.setItem('allProducts', JSON.stringify(action.payload));
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
            sessionStorage.setItem('productSeen', JSON.stringify(action.payload));
        },

        removeSelectedProduct: (state, action) => {
            state.selectedProduct = {};
            sessionStorage.removeItem('productSeen');
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
            // test if payload is array
            if (Array.isArray(action.payload)) {
                state.cartProducts.push(...action.payload);
            }
            else {
                state.cartProducts.push(action.payload);
            }
            sessionStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },

        removeProductFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload.id);
            sessionStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },

        clearCart: (state, action) => {
            state.cartProducts = [];
            sessionStorage.removeItem('cartProducts');
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
            sessionStorage.setItem('path', action.payload);
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