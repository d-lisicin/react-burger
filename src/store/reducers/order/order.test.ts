import * as Actions from '../../../store/actions'
import { orderReducer, initialState } from './order'

describe('Тестируем редьюсер auth', () => {
    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(orderReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем запрос на отправку заказа POST_ORDER_REQUEST', () => {
        expect(
            orderReducer(initialState, {
                type: Actions.POST_ORDER_REQUEST
            }))
            .toEqual({
                ...initialState,
                post: true
            })
    })

    it('Проверяем запрос на отправку заказа POST_ORDER_SUCCESS', () => {
        expect(
            orderReducer({
                ...initialState,
                post: true
            }, {
                type: Actions.POST_ORDER_SUCCESS,
                payload: 75674567
            }))
            .toEqual({
                ...initialState,
                post: false,
                number: 75674567
            })
    })

    it('Проверяем запрос на отправку заказа c ошибкой POST_ORDER_ERROR', () => {
        expect(
            orderReducer({
                ...initialState,
                post: true
            }, {
                type: Actions.POST_ORDER_ERROR,
                payload: 'Error'
            }))
            .toEqual({
                ...initialState,
                post: false,
                error: 'Error'
            })
    })

    it('Проверяем удаление номера заказа из стейта DELETE_ORDER_NUMBER', () => {
        expect(
            orderReducer({
                ...initialState
            }, {
                type: Actions.DELETE_ORDER_NUMBER
            }))
            .toEqual({
                ...initialState,
                number: null
            })
    })
})
