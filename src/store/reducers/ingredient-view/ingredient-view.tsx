import * as Actions from '../../actions'
import { TIngredientViewActionTypes } from '../../actions/ingredient-view'

export const initialState = {}

export const ingredientViewReducer = (
    state = initialState,
    action: TIngredientViewActionTypes
) => {
    switch (action.type) {
        case Actions.SET_INGREDIENT_VIEW:
            return {
                ...state,
                ingredientView: action.payload
            }
        case Actions.DELETE_INGREDIENT_VIEW:
            return {
                ...state,
                ingredientView: null
            }
        default:
            return state
    }
}
