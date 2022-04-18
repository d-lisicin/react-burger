import React from 'react'

export interface IIngredientsItem {
    _id: string,
    calories: number,
    fat: number,
    carbohydrates: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _idNew: string
}

export interface IIngredient {
    ingredients: {
        items: IIngredientsItem[]
    }
}

export interface IIngredientArr {
    ingredient: IIngredientsItem
}

export interface IHoverIngredient {
    index: number,
    ingredient: IIngredientsItem
}

export interface IOrder {
    order: {
        error: string | null
        number: string
        post: boolean
    }
}

export interface IDragHoverIndex {
    dragIndex: string
    hoverIndex: string
}

export type TActionConstructor = {
    type: 'ingredients-constructor/ADD_INGREDIENT'
    payload: IIngredientsItem
} | {
    type: 'ingredients-constructor/ADD_BUN'
    payload: IIngredientsItem
} | {
    type: 'ingredients-constructor/REMOVE_INGREDIENT'
    payload: IIngredientsItem
} | {
    type: 'ingredients-constructor/CHANGE_INGREDIENT_POSITION'
    payload: IDragHoverIndex
}

export interface IIngredientConstructor {
    newBurger: {
        newBurger: IIngredientsItem[]
    }
}

export interface ITab {
    activeTab: string
}

export interface ILocationState {
    hash: string
    pathname: string
    search: string
    state: ILocationState
}

export interface ILocation {
    from: {
        pathname: string
    }
    ingredientId: ILocationState
}

export interface IProfileUser {
    profile: {
        user: {
            success: boolean,
            user: {
                email: string,
                name: string
            }
        }
    }
}

export interface IProfile {
    profile: {
        error: string,
        forgotMessage: string,
        ressetMessage: string,
        loading: boolean,
        profileUpdate: boolean,
        user: {
            success: boolean,
            user: {
                email: string,
                name: string
            }
        }
    }
}

export interface IChildrenRoute {
    children: React.ReactNode,
    exact: boolean,
    path: string
}

export interface IFormData {
    name: string,
    email: string,
    password: string
}

export interface IParamTypes {
    id: string
}
