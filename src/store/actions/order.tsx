import * as Actions from './index'
import { apiURL } from '../../utils/constants'
import { checkResponse } from '../../helpers/api'
import { TAppDispatch } from '../../utils/type'
import {getTokens} from "../../helpers/auth";

export interface IPostOrderRequest {
    readonly type: typeof Actions.POST_ORDER_REQUEST
}

export interface IPostOrderSuccess {
    readonly type: typeof Actions.POST_ORDER_SUCCESS
    readonly payload: number
}

export interface IPostOrderError {
    readonly type: typeof Actions.POST_ORDER_ERROR
    readonly payload: null | string
}

export interface IDeleteOrderNumber {
    readonly type: typeof Actions.DELETE_ORDER_NUMBER
}

export type TOrderActionTypes =
    | IPostOrderRequest | IPostOrderSuccess
    | IPostOrderError | IDeleteOrderNumber

export const postOrder = (ingredients: string[]) => (dispatch: TAppDispatch) => {
    dispatch({ type: Actions.POST_ORDER_REQUEST })
    const { accessToken } = getTokens()

    fetch(`${apiURL}/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        body: JSON.stringify({ ingredients })
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: Actions.CLEAR_INGREDIENT_POSITION,
                })
                dispatch({
                    type: Actions.POST_ORDER_SUCCESS,
                    payload: res.order.number
                })
            } else {
                throw new Error('Something went wrong')
            }
        })
        .catch((err) => {
            dispatch({
                type: Actions.POST_ORDER_ERROR,
                payload: err
            })
        })
}
