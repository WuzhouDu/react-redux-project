import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    somethingTest: function() {
        // console.log("test reducer");
        return 123;
    },
    product: selectedProductReducer,
});

export default reducers;