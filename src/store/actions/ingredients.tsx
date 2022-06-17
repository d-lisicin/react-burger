import * as Actions from './index'
import { apiURL } from '../../utils/constants'
import { checkResponse } from '../../helpers/api'
import { TAppDispatch, IIngredientsItem } from '../../utils/type'

export interface IGetIngredientsRequest {
    readonly type: typeof Actions.GET_INGREDIENTS_REQUEST
}

export interface IGetIngredientsSuccess {
    readonly type: typeof Actions.GET_INGREDIENTS_SUCCESS
    readonly payload: IIngredientsItem[]
}

export interface IGetIngredientsError {
    readonly type: typeof Actions.GET_INGREDIENTS_ERROR
}

export type TIngredientsActionTypes =
    | IGetIngredientsRequest | IGetIngredientsSuccess
    | IGetIngredientsError

export const getIngredients = () => (dispatch: TAppDispatch) => {
    dispatch({ type: Actions.GET_INGREDIENTS_REQUEST })

    fetch(`${apiURL}/api/ingredients`)
        .then(checkResponse)
        .then((res) => {
            dispatch({
                type: Actions.GET_INGREDIENTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(() => {
            dispatch({
                type: Actions.GET_INGREDIENTS_ERROR
            })
        })
}
