import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [
        {
            id: 1,
            title: 'Nike Shoes 01',
            category: 'shoes',
        }
    ],

}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}