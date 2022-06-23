import * as Actions from '../../../store/actions'
import { activeTabReducer, initialState } from './tabs'

describe('Тестируем редьюсер tabs', () => {
    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(activeTabReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем смену активного таба ACTIVE_TAB', () => {
        expect(
            activeTabReducer(initialState, {
                type: Actions.ACTIVE_TAB,
                payload: 'main'
            }))
            .toEqual('main')
    })
})
