import * as Actions from '../../../store/actions'
import { ingredientsReducer, initialState } from './ingredients'
import { IIngredientsItem } from '../../../utils/type'

describe('Тестируем редьюсер ingredients', () => {
    const ingredients: IIngredientsItem[] = [{
        _id: 'string',
        calories: 7,
        fat: 7,
        carbohydrates: 7,
        image: 'string',
        image_large: 'string',
        image_mobile: 'string',
        name: 'string',
        price: 7,
        allPrice: 7,
        proteins: 7,
        type: 'string',
        __v: 7,
        _idNew: 'string'
    }]

    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(ingredientsReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем запрос на получение списка ингредиентов GET_INGREDIENTS_REQUEST', () => {
        expect(
            ingredientsReducer(initialState, {
                type: Actions.GET_INGREDIENTS_REQUEST,
            }))
            .toEqual({...initialState})
    })

    it('Проверяем, что список ингредиентов получен GET_INGREDIENTS_SUCCESS', () => {
        expect(
            ingredientsReducer({
                ...initialState,
                loading: false
            }, {
                type: Actions.GET_INGREDIENTS_SUCCESS,
                payload: ingredients
            }))
            .toEqual({
                ...initialState,
                loading: true,
                items: ingredients
            })
    })

    it('Проверяем, что список ингредиентов получен с ошибкой GET_INGREDIENTS_ERROR', () => {
        expect(
            ingredientsReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.GET_INGREDIENTS_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })
})
