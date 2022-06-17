import * as Actions from './index'
import { IIngredientsItem, IDragHoverIndex } from '../../utils/type'

export interface IAddIngredient {
    readonly type: typeof Actions.ADD_INGREDIENT
    readonly payload: IIngredientsItem
}

export interface IAddBun {
    readonly type: typeof Actions.ADD_BUN
    readonly payload: IIngredientsItem
}

export interface IRemoveIngredient {
    readonly type: typeof Actions.REMOVE_INGREDIENT
    readonly payload: IIngredientsItem
}

export interface IChangeIngredientPosition {
    readonly type: typeof Actions.CHANGE_INGREDIENT_POSITION
    readonly payload: IDragHoverIndex
}

export interface IClearIngredientPosition {
    readonly type: typeof Actions.CLEAR_INGREDIENT_POSITION
}

export type TIngredientsConstructorActionTypes =
    | IAddIngredient | IAddBun
    | IRemoveIngredient | IChangeIngredientPosition
    | IClearIngredientPosition
