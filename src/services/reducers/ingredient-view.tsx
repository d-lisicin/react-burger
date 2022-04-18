import Actions from '../actions'
import { IIngredientsItem } from '../../utils/types'

const initialState = {}

export const ingredientViewReducer = (state = initialState, action: { type: string, payload: IIngredientsItem }) => {
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
