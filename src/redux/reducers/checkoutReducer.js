import { CREATE_ORDER_CASH } from '../type'

const inital = {
    createOrderCash: [],
}
const checkoutReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_ORDER_CASH:
            return {
                ...state,
                createOrderCash: action.payload,
            }
        default:
            return state;
    }
}
export default checkoutReducer