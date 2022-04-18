import Actions from '../actions'
import { IIngredientsItem } from '../../utils/types'

const initialState = {
    loading: false,
    items: []
}

export const ingredientsReducer = (state = initialState, action: { type: string, payload: IIngredientsItem }) => {
    switch (action.type) {
        case Actions.GET_INGREDIENTS_REQUEST: {
            return {
                ...state
            }
        }

        case Actions.GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                loading: true,
                items: action.payload
            }
        }

        case Actions.POST_ORDER_ERROR: {
            return {
                ...state,
                loading: false
            }
        }

        default:
            return state
    }
}
