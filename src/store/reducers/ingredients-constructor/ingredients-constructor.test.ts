import * as Actions from '../../../store/actions'
import { ingredientsConstructorReducer, initialState } from './ingredients-constructor'
import { IIngredientsItem } from '../../../utils/type'

describe('Тестируем редьюсер ingredients-constructor', () => {
    const ingredient: IIngredientsItem = {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        name: 'Не краторная булка N-200i',
        price: 1255,
        proteins: 80,
        type: 'main',
        __v: 0,
        _id: '60d3b41abdacab0026a733c6',
        allPrice: 75737,
        _idNew: '60d3b41abdacab0026a733c6967896789678989'
    }

    const bun: IIngredientsItem = {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        name: 'Не краторная булка N-200i',
        price: 1255,
        proteins: 80,
        type: 'main',
        __v: 0,
        _id: '60d3b41abdacab0026a733c6',
        allPrice: 75737,
        _idNew: '60d3b41abdacab0026a733c6967896789678989'
    }

    const souce: IIngredientsItem = {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        name: 'Не краторная булка N-200i',
        price: 1255,
        proteins: 80,
        type: 'main',
        __v: 0,
        _id: '60d3b41abdacab0026a733c6',
        allPrice: 75737,
        _idNew: '60d3b41abdacab0026a733c6967896789678989'
    }

    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(ingredientsConstructorReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем добавление ингредиентов ADD_INGREDIENT', () => {
        expect(
            ingredientsConstructorReducer(initialState, {
                type: Actions.ADD_INGREDIENT,
                payload: ingredient
            }))
            .toEqual({
                ...initialState,
                newBurger: [...initialState.newBurger, ingredient]
            })
    })

    it('Проверяем добавление булок ADD_BUN', () => {
        expect(
            ingredientsConstructorReducer(initialState, {
                type: Actions.ADD_BUN,
                payload: ingredient
            }))
            .toEqual({
                ...initialState,
                newBurger: [ingredient]
            })
    })

    it('Проверяем удаление ингредиента REMOVE_INGREDIENT', () => {
        expect(
            ingredientsConstructorReducer({
                ...initialState,
                newBurger: [
                    bun,
                    ingredient,
                    souce
                ]
            }, {
                type: Actions.REMOVE_INGREDIENT,
                payload: ingredient
            }))
            .toEqual({
                ...initialState,
                newBurger: [
                    bun,
                    ingredient
                ]
            })
    })

    it('Проверяем изменение позиции ингредиента CHANGE_INGREDIENT_POSITION', () => {
        expect(
            ingredientsConstructorReducer({
                ...initialState,
                newBurger: [
                    bun,
                    ingredient,
                    souce
                ]
            },{
                type: Actions.CHANGE_INGREDIENT_POSITION,
                payload: {
                    dragIndex: '51da4660-f32d-11ec-99c3-21b9ef226df2',
                    hoverIndex: '52320350-f32d-11ec-99c3-21b9ef226df2'
                }
            }))
            .toEqual({
                ...initialState,
                newBurger: [
                    bun,
                    souce,
                    ingredient
                ]
            })
    })

    it('Проверяем удаление всех ингредиентов из конструктора CHANGE_INGREDIENT_POSITION', () => {
        expect(
            ingredientsConstructorReducer(initialState, {
                type: Actions.CLEAR_INGREDIENT_POSITION
            }))
            .toEqual({
                ...initialState,
                newBurger: []
            })
    })
})
