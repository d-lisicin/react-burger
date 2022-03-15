import Actions from './index'
import { apiURL } from '../../utils/constants'
import { IIngredientsItem } from '../../utils/types'

export const getIngredients = () => (dispatch: (arg0: { type: string, value?: IIngredientsItem }) => void) => {
    dispatch({
        type: Actions.GET_INGREDIENTS_REQUEST
    })

    fetch(`${apiURL}/api/ingredients`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then((res) => {
            dispatch({
                type: Actions.GET_INGREDIENTS_SUCCESS,
                value: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: Actions.POST_ORDER_ERROR,
                value: err
            })
        })
}
