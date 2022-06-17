import React from 'react'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { rootReducer } from '../store/reducers'
import { store } from '../store'
import * as Actions from '../store/actions'
import { TAuthActionTypes } from '../store/actions/auth'
import { TIngredientViewActionTypes } from '../store/actions/ingredient-view'
import { TIngredientsActionTypes } from '../store/actions/ingredients'
import { TIngredientsConstructorActionTypes } from '../store/actions/ingredients-constructor'
import { TOrderActionTypes } from '../store/actions/order'

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
    allPrice: number,
    proteins: number,
    type: string,
    __v: number,
    _idNew: string
}

export interface IIngredient {
    loading: boolean
    items: IIngredientsItem[]
}

export interface IIngredientEl {
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
    error: string | null
    number: number | null
    post: boolean
}

export interface IOrderState {
    order: IOrder
}

export interface IDragHoverIndex {
    dragIndex: string
    hoverIndex: string
}

export type TBurgerConstructor = {
    newBurger: {
        newBurger: IIngredientsItem[]
    }
}

export interface IIngredientConstructor {
    newBurger: IIngredientsItem[]
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
        isForgotSend: boolean,
        ressetMessage: string,
        loading: boolean,
        profileUpdate: boolean,
        user: {
            success: boolean,
            user: IFormData
        }
    }
}

export interface IChildrenRoute {
    children: React.ReactNode,
    exact: boolean,
    path: string
}

export type IFormData = {
    name: string,
    email: string,
    password: string
}

export type IFormDataUser = {
    success: boolean
    user: {
        name: string,
        email: string,
        password: string
    }
}

export interface IParamTypes {
    id: string
}

export type TOrderView = {
    createdAt: string,
    ingredients: string[],
    name: string,
    number: number,
    status: string,
    updatedAt: string,
    _id: string
}

export type TWsGet = {
    orders: TOrderView[],
    success: boolean,
    total: number,
    totalToday: number
}

export type TWsGetState = {
    ws: {
        messages: TWsGet[]
    }
}

export type TWsState = {
    wsConnected: boolean,
    error: string | null,
    messages: TWsGet[]
}

export type TAuthReducerState = {
    loading: boolean,
    user: IFormDataUser
    error: string | boolean | null,
    profileUpdate: boolean,
    isForgotSend: boolean,
    ressetMessage: string
}

export type TSocketMiddlewareActions = {
    readonly onInit: typeof Actions.WS_CONNECTION_REQUEST
    readonly onOpen: typeof Actions.WS_CONNECTION_SUCCESS
    readonly onError: typeof Actions.WS_CONNECTION_ERROR
    readonly onClose: typeof Actions.WS_CONNECTION_CLOSED
    readonly onMessage: typeof Actions.WS_GET_MESSAGE
    readonly wsSendMessage: typeof Actions.WS_SEND_MESSAGE
}

export type TAppActions =
    | TAuthActionTypes
    | TIngredientViewActionTypes
    | TIngredientsActionTypes
    | TIngredientsConstructorActionTypes
    | TOrderActionTypes

export type TRootState = ReturnType<typeof rootReducer>
export type TAppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, TRootState, TAppActions>>
export type TAppDispatch = typeof store.dispatch | TAppThunk
