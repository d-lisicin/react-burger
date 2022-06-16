import * as Actions from '../actions'
import { IOrder } from '../../utils/type'
import { TOrderActionTypes } from '../actions/order'

const initialState: IOrder = {
    post: false,
    error: null,
    number: null
}

export const orderReducer = (
    state = initialState,
    action: TOrderActionTypes
) => {
    switch (action.type) {
        case Actions.POST_ORDER_REQUEST:
            return {
                ...state,
                post: true
            }
        case Actions.POST_ORDER_SUCCESS: {
            return {
                ...state,
                post: false,
                error: null,
                number: action.payload
            }
        }
        case Actions.POST_ORDER_ERROR:
            return {
                ...state,
                post: false,
                number: null,
                error: action.payload
            }
        case Actions.DELETE_ORDER_NUMBER:
            return {
                ...state,
                number: null
            }
        default:
            return state
    }
}

