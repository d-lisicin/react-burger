import * as Actions from '../actions'
import { IIngredientsItem } from '../../utils/type'

export interface ISetIngredientView {
    readonly type: typeof Actions.SET_INGREDIENT_VIEW
    readonly payload: IIngredientsItem
}

export interface IDeleteIngredientView {
    readonly type: typeof Actions.DELETE_INGREDIENT_VIEW
}

export type TIngredientViewActionTypes = | ISetIngredientView | IDeleteIngredientView
