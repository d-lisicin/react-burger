import * as Actions from '../../actions'
import { TOrderViewActionTypes } from '../../actions/order-view'
import { TOrderView } from '../../../utils/type'

export const initialState: TOrderView = {
    createdAt: '',
    ingredients: [],
    name: '',
    number: 0,
    status: '',
    updatedAt: '',
    _id: ''
}

export const orderViewReducer = (
    state = initialState,
    action: TOrderViewActionTypes
): TOrderView => {
    switch (action.type) {
        case Actions.SET_ORDER_VIEW:
            return action.payload
        case Actions.DELETE_ORDER_VIEW:
            return {
                ...state
            }
        default:
            return state
    }
}
