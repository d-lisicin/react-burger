import * as Actions from '../../../store/actions'
import { orderViewReducer, initialState } from './order-view'
import { TOrderView } from "../../../utils/type";

describe('Тестируем редьюсер order-view', () => {
    const OrderInfo: TOrderView = {
        ingredients: [
            '60d3b41abdacab0026a733c7',
            '60d3b41abdacab0026a733cd',
            '60d3b41abdacab0026a733cc',
            '60d3b41abdacab0026a733cf',
            '60d3b41abdacab0026a733ce'
        ],
        name: "Space флюоресцентный бургер",
        number: 18381,
        status: 'done',
        createdAt: "2022-06-23T18:45:52.993Z",
        _id: "62b4b4e042d34a001c26ef94",
        updatedAt: '2022-06-23T18:47:52.993Z'
    }

    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(orderViewReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем запись в стейт данных о заказе SET_ORDER_VIEW', () => {
        expect(
            orderViewReducer(initialState, {
                type: Actions.SET_ORDER_VIEW,
                payload: OrderInfo
            }))
            .toEqual(OrderInfo)
    })

    it('Проверяем удаление данных о заказе из стейта DELETE_ORDER_VIEW', () => {
        expect(
            orderViewReducer(initialState, {
                type: Actions.DELETE_ORDER_VIEW
            }))
            .toEqual({
                ...initialState
            })
    })
})
