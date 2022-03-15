import Actions from './index'
import { apiURL } from '../../utils/constants'


export const postOrder = (ingredients: string[]) => (dispatch: (arg0: { type: string; payload?: number }) => void) => {
    dispatch({
        type: Actions.POST_ORDER_REQUEST
    })


    fetch(`${apiURL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients })
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then((res) => {
            if (res.success) {
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
