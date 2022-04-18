import Actions from './index'
import { apiURL } from '../../utils/constants'
import { checkResponse } from '../../helpers/api'
import { IIngredientsItem } from '../../utils/types'

export const getIngredients = () => (dispatch: (arg0: { type: string, payload?: IIngredientsItem }) => void) => {
    dispatch({
        type: Actions.GET_INGREDIENTS_REQUEST
    })

    fetch(`${apiURL}/api/ingredients`)
        .then(checkResponse)
        .then((res) => {
            dispatch({
                type: Actions.GET_INGREDIENTS_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: Actions.POST_ORDER_ERROR,
                payload: err
            })
        })
}
