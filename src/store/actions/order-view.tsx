import * as Actions from './index'
import { TOrderView } from '../../utils/type'

export interface ISetOrderView {
    readonly type: typeof Actions.SET_ORDER_VIEW
    readonly payload: TOrderView
}

export interface IDeleteOrderView {
    readonly type: typeof Actions.DELETE_ORDER_VIEW
}

export type TOrderViewActionTypes = | ISetOrderView | IDeleteOrderView
