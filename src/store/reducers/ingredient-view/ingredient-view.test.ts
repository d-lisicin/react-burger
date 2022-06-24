import * as Actions from '../../../store/actions'
import { ingredientViewReducer, initialState } from './ingredient-view'
import { IIngredientsItem } from '../../../utils/type'

describe('Тестируем редьюсер ingredientView', () => {
    const ingredient: IIngredientsItem = {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        name: "Флюоресцентная булка R2-D3",
        price: 988,
        proteins: 44,
        type: "bun",
        __v: 0,
        _id: "60d3b41abdacab0026a733c7",
        allPrice: 0,
        _idNew: ''
    }

    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(ingredientViewReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем запись ингредиентов в стейт SET_INGREDIENT_VIEW', () => {
        expect(
            ingredientViewReducer(initialState, {
                type: Actions.SET_INGREDIENT_VIEW,
                payload: ingredient
            }))
            .toEqual({
                ingredientView: ingredient
            })
    })

    it('Проверяем ингредиены очищены из стейт DELETE_INGREDIENT_VIEW', () => {
        expect(
            ingredientViewReducer(initialState, {
                type: Actions.DELETE_INGREDIENT_VIEW
            }))
            .toEqual({
                ingredientView: null
            })
    })
})
