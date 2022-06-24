import * as Actions from '../../../store/actions'
import { websocketsReducer, initialState } from './ws'

describe('Тестируем редьюсер auth', () => {
    const messagesInfo = {
        orders: [
            {
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
                updatedAt: '2022-06-23T18:47:52.993Z'}
        ],
        success: true,
        total: 18295,
        totalToday: 67
    }

    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(websocketsReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем запрос на подключение к ws WS_CONNECTION_REQUEST', () => {
        expect(
            websocketsReducer(initialState, {
                type: Actions.WS_CONNECTION_REQUEST
            }))
            .toEqual({ ...initialState })
    })

    it('Проверяем успешное подключение к ws WS_CONNECTION_SUCCESS', () => {
        expect(
            websocketsReducer(initialState, {
                type: Actions.WS_CONNECTION_SUCCESS
            }))
            .toEqual({
                ...initialState,
                wsConnected: true
            })
    })

    it('Проверяем подключение к ws с ошибкой WS_CONNECTION_ERROR', () => {
        expect(
            websocketsReducer({
                ...initialState,
                wsConnected: true
            },{
                type: Actions.WS_CONNECTION_ERROR,
                payload: 'Error'
            }))
            .toEqual({
                ...initialState,
                wsConnected: false,
                error: 'Error'
            })
    })

    it('Проверяем закрытие соединения с ws WS_CONNECTION_CLOSED', () => {
        expect(
            websocketsReducer({
                ...initialState,
                wsConnected: true
            },{
                type: Actions.WS_CONNECTION_CLOSED
            }))
            .toEqual({
                ...initialState,
                wsConnected: false,
                messages: []
            })
    })

    it('Проверяем получение данных с ws WS_GET_MESSAGE', () => {
        expect(
            websocketsReducer({
                ...initialState
            },{
                type: Actions.WS_GET_MESSAGE,
                payload: messagesInfo
            }))
            .toEqual({
                ...initialState,
                messages: [...initialState.messages, messagesInfo]
            })
    })
})
