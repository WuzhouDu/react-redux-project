import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { allProductsReducer, selectProductReducer } from './slice';

// console.log("allProductsReducer: ", allProductsReducer);
// console.log("selectProductReducer: ", selectProductReducer);
const rootReducer = combineReducers({
    allProducts: allProductsReducer,
    productSeen: selectProductReducer,
});


// const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore({
    reducer: rootReducer
})


export default store;