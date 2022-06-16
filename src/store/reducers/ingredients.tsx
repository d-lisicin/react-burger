import * as Actions from '../actions'
import { IIngredient } from '../../utils/type'
import { TIngredientsActionTypes } from '../actions/ingredients'

const initialState: IIngredient = {
    loading: false,
    items: []
}

export const ingredientsReducer = (
    state = initialState,
    action: TIngredientsActionTypes
) => {
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

        case Actions.GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                loading: false
            }
        }

        default: {
            return state
        }
    }
}
