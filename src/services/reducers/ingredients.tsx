import Actions from '../actions'
import { IIngredientsItem } from '../../utils/types'

export const ingredientsReducer = (state = {}, action: { type: string, value: IIngredientsItem }) => {
    switch (action.type) {
        case Actions.GET_INGREDIENTS_SUCCESS: {
            return action.value
        }

        default:
            return state
    }
};
