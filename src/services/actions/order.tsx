import Actions from './index'
import { apiURL } from '../../utils/constants'
import { checkResponse } from '../../helpers/api'


export const postOrder = (ingredients: string[]) => (dispatch: (arg0: { type: string; payload?: number }) => void) => {
    dispatch({
        type: Actions.POST_ORDER_REQUEST
    })

    fetch(`${apiURL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients })
    })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: Actions.POST_ORDER_SUCCESS,
                    payload: res.order.number
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
