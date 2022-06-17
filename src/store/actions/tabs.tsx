import * as Actions from './index'

export interface IActiveTab {
    readonly type: typeof Actions.ACTIVE_TAB
    readonly payload: string
}

export type TActiveTabActionTypes = | IActiveTab
